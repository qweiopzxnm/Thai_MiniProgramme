// utils/tts.ts
import { getConfig } from './config';

let ctxA: WechatMiniprogram.InnerAudioContext | null = null;
let ctxB: WechatMiniprogram.InnerAudioContext | null = null;
let playTimeoutId: number | null = null;

// Queue state for sequential playback
let audioQueue: string[] = [];
let queueIndex = 0;
let isPlayingQueue = false;
let globalOnEnded: (() => void) | null = null;

// 有道分词播放时，补偿有道独立录音首尾静音的语速加成系数
const YOUDAO_RATE_MULTIPLIER = 1.25;

function getAudioContexts(): {
  ctxA: WechatMiniprogram.InnerAudioContext;
  ctxB: WechatMiniprogram.InnerAudioContext;
} {
  if (!ctxA) {
    ctxA = wx.createInnerAudioContext();
    // 允许在 iOS 物理静音键开启时依然能播放声音
    if (wx.setInnerAudioOption) {
      wx.setInnerAudioOption({
        obeyMuteSwitch: false,
        fail: (err) => {
          console.error('setInnerAudioOption fail:', err);
        }
      });
    }
  }
  if (!ctxB) {
    ctxB = wx.createInnerAudioContext();
    // B 实例也允许在 iOS 静音键开启时播放声音
    if (wx.setInnerAudioOption) {
      wx.setInnerAudioOption({
        obeyMuteSwitch: false,
        fail: (err) => {
          console.error('setInnerAudioOption B fail:', err);
        }
      });
    }
  }
  return { ctxA, ctxB };
}

/**
 * 停止当前播放并清空所有状态
 */
export function stopThaiTTS(): void {
  // 清除定时器
  if (playTimeoutId) {
    clearTimeout(playTimeoutId);
    playTimeoutId = null;
  }
  
  // 重置队列状态
  audioQueue = [];
  queueIndex = 0;
  isPlayingQueue = false;
  globalOnEnded = null;

  if (ctxA) {
    try {
      ctxA.stop();
      ctxA.offPlay();
      ctxA.offCanplay();
      ctxA.offEnded();
      ctxA.offError();
    } catch (e) {
      console.error('Failed to stop ctxA:', e);
    }
  }
  if (ctxB) {
    try {
      ctxB.stop();
      ctxB.offPlay();
      ctxB.offCanplay();
      ctxB.offEnded();
      ctxB.offError();
    } catch (e) {
      console.error('Failed to stop ctxB:', e);
    }
  }
}

/**
 * 纯系统级别的细粒度分词器，专门用于 TTS 顺序播放，避免合并词触发 500 报错
 */
function segmentThaiForAudio(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  
  if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
    try {
      const segmenter = new (Intl as any).Segmenter('th', { granularity: 'word' });
      const segments = segmenter.segment(trimmed);
      const result: string[] = [];
      for (const { segment } of segments) {
        const word = segment.trim();
        // 过滤空白、特殊符号和标点
        if (word && !/[\s\p{P}]/u.test(word)) {
          result.push(word);
        }
      }
      return result;
    } catch (e) {
      console.error('Intl.Segmenter in segmentThaiForAudio failed:', e);
    }
  }
  return trimmed.split('').filter(char => char.trim() !== '');
}

/**
 * 将合并的词或无法播放的长词切分为子词
 */
function splitFailedWord(word: string): string[] {
  return segmentThaiForAudio(word);
}

/**
 * 启动队列播放（含双实例双通道双缓存预加载与监听器重置防抖）
 */
function startQueuePlayback(
  words: string[],
  rate: number,
  onStart?: () => void,
  onEnded?: () => void
): void {
  audioQueue = words;
  queueIndex = 0;
  isPlayingQueue = true;
  globalOnEnded = onEnded || null;

  const { ctxA, ctxB } = getAudioContexts();

  // 1. 初始化预加载时先清除各自的全部旧监听器，防止预载出错时错误回调被过早触发
  ctxA.offPlay();
  ctxA.offCanplay();
  ctxA.offEnded();
  ctxA.offError();

  ctxB.offPlay();
  ctxB.offCanplay();
  ctxB.offEnded();
  ctxB.offError();

  // 2. 预加载第一个单词和第二个单词的音频，最大化减小首音延迟
  if (words.length > 0) {
    ctxA.src = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(words[0])}&le=th`;
  }
  if (words.length > 1) {
    ctxB.src = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(words[1])}&le=th`;
  }

  if (onStart) {
    try {
      onStart();
    } catch (e) {
      console.error('onStart callback error:', e);
    }
  }

  // 开始播放首个单词
  playNextInQueueDouble(rate);
}

/**
 * 双缓存交替播放队列中的下一个单词
 */
function playNextInQueueDouble(rate: number): void {
  if (!isPlayingQueue || queueIndex >= audioQueue.length) {
    const cb = globalOnEnded;
    stopThaiTTS();
    if (cb) {
      try {
        cb();
      } catch (e) {
        console.error('onEnded callback error:', e);
      }
    }
    return;
  }

  const { ctxA, ctxB } = getAudioContexts();

  // 根据当前播放的序号偶奇数，交替选用 ctxA 和 ctxB
  const currentCtx = (queueIndex % 2 === 0) ? ctxA : ctxB;
  const nextCtx = (queueIndex % 2 === 0) ? ctxB : ctxA;

  const word = audioQueue[queueIndex];
  queueIndex++;

  const youdaoSrc = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&le=th`;

  // 清除全部旧监听器
  currentCtx.offPlay();
  currentCtx.offCanplay();
  currentCtx.offEnded();
  currentCtx.offError();

  // 确保音频源设置正确（通常已被前一步预加载了，如果不是则重新赋值）
  if (currentCtx.src !== youdaoSrc) {
    currentCtx.src = youdaoSrc;
  }

  // 微信 InnerAudioContext.playbackRate 的有效范围是 0.5 - 2.0，超出范围的值会被忽略或重置。必须强制限制最大值为 2.0。
  const adjustedRate = Math.min(2.0, rate * YOUDAO_RATE_MULTIPLIER);

  // 在 play() 之前和各个生命周期中强制写入倍速，防范微信重新加载 src 时重置倍速的问题
  currentCtx.playbackRate = adjustedRate;

  currentCtx.onPlay(() => {
    currentCtx.playbackRate = adjustedRate;
  });

  currentCtx.onCanplay(() => {
    currentCtx.playbackRate = adjustedRate;
  });

  currentCtx.onEnded(() => {
    // 双实例交替无网络下载延时，用最紧凑的 10ms 进行平滑过渡
    playTimeoutId = setTimeout(() => {
      playNextInQueueDouble(rate);
    }, 10) as unknown as number;
  });

  currentCtx.onError((err) => {
    console.warn(`Word playback failed for "${word}":`, err);
    
    // 如果当前子词也失败了（比如有道库里没有），尝试拆分它
    if (word.length > 1) {
      const subWords = splitFailedWord(word);
      if (subWords.length > 0) {
        audioQueue.splice(queueIndex - 1, 1, ...subWords);
        queueIndex--;
        
        // 预加载拆分后的首个子音，防范背景冲突先 off
        currentCtx.offPlay();
        currentCtx.offCanplay();
        currentCtx.offEnded();
        currentCtx.offError();
        const firstSubUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(subWords[0])}&le=th`;
        currentCtx.src = firstSubUrl;
        
        playNextInQueueDouble(rate);
        return;
      }
    }

    // 拆分失败直接跳过
    playNextInQueueDouble(rate);
  });

  currentCtx.play();

  // 【核心预加载】：在当前通道播放的同时，异步命令另一个空闲通道预加载下一首词的音频文件！
  // 设置 src 之前必须调用 off 清空之前的监听器，防范后台触发旧的回调导致重复索引递增
  if (queueIndex < audioQueue.length) {
    const nextWord = audioQueue[queueIndex];
    const nextUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(nextWord)}&le=th`;
    
    nextCtx.offPlay();
    nextCtx.offCanplay();
    nextCtx.offEnded();
    nextCtx.offError();
    nextCtx.src = nextUrl; 
  }
}

// 有道发音库中缺失的泰语常见词汇映射表，映射为有道支持的同义词/可拆分词以保证国内正常发音
const YOUDAO_AUDIO_SYNONYMS: Record<string, string> = {
  // 1. 餐饮与时间类修复
  'มื้อเที่ยง': 'อาหารกลางวัน', // lunch
  'มื้อเช้า': 'อาหารเช้า',     // breakfast
  'มื้อเย็น': 'อาหาร ค่ำ',    // dinner -> food + night
  'อาหารเย็น': 'อาหาร ค่ำ',    // dinner -> food + night
  'อาหารค่ำ': 'อาหาร ค่ำ',    // dinner -> food + night
  'มื้อ': 'อาหาร',           // meal -> food
  'เที่ยง': 'กลางวัน',         // noon -> midday
  'เย็น': 'ค่ำ',             // evening -> night/evening (Youdao has ค่ำ but not เย็น)
  'ทาน': 'กิน',             // eat (polite) -> eat (standard)

  // 2. 核心动词与名词类修复 (基于自动化短词库测试结果)
  'อยู่': 'พัก',             // stay/be at -> stay/rest (Youdao has พัก but not อยู่)
  'ที่นี่': 'ที่ นี่',        // here -> at + this (Youdao has ที่ and นี่ but not ที่นี่)
  'ไม่กิน': 'ไม่ กิน',        // don't eat -> not + eat (Youdao has ไม่ and กิน but not ไม่กิน)
  'รถไฟ': 'รถ ไฟ',          // train -> car + fire (Youdao has รถ and ไฟ but not รถไฟ)
  'ตกงาน': 'ว่าง งาน',        // unemployed -> free + job (Youdao has ว่าง and งาน but not ตกงาน)
  'ว่างงาน': 'ว่าง งาน',      // unemployed -> free + job
  'ดูแล': 'ห่วง',            // take care -> concern/care (Youdao has ห่วง but not ดูแล)
  'เยอะ': 'มาก',            // a lot -> very/much (Youdao has มาก but not เยอะ)
  'หลีก': 'หลบ',            // avoid -> hide/dodge (Youdao has หลบ but not หลีก)
  'ทารก': 'เด็ก',           // infant -> child/baby (Youdao has เด็ก but not ทารก)
  'ข่าว': 'ข้อมูล',          // news -> information (Youdao has ข้อมูล but not ข่าว)
  'ค่อย': 'ช้า',            // gradually -> slow (Youdao has ช้า but not ค่อย)
  'ฉลาม': 'ปลา',            // shark -> fish (Youdao has ปลา but not ฉลาม)
  'ไปซิ': 'ไป ซิ',          // go ahead -> go + particle (Youdao has ไป and ซิ but not ไปซิ)
  'มั้ย': 'ไหม',            // question particle -> standard question particle

  // 3. 重叠词叠字号 (ๆ) 导致有道 500 的修复 ──► 替换为空格分隔以触发双实例交替无缝拼读
  'นี่ๆ': 'นี่ นี่',          // look here
  'ดีๆ': 'ดี ดี',            // well/carefully
  'แน่ๆ': 'แน่ แน่',          // surely
  'สุดๆ': 'สุด สุด',          // extremely
  'จริงๆ': 'จริง จริง',        // really
  'เร็วๆ': 'เร็ว เร็ว',        // quickly
  'ช้าๆ': 'ช้า ช้า',          // slowly
  'ง่ายๆ': 'ง่าย ง่าย',        // easily
  'บ่อยๆ': 'บ่อย บ่อย',        // frequently
  'ค่อยๆ': 'ช้า ช้า',          // slowly (ค่อย is 500, map to slow + slow)
};

function replaceYoudaoSynonyms(text: string): string {
  let result = text;
  for (const [key, value] of Object.entries(YOUDAO_AUDIO_SYNONYMS)) {
    result = result.split(key).join(value);
  }
  return result;
}

/**
 * 使用有道接口进行播放（含单字直播与句子拆分自愈）
 */
function playViaYoudao(
  cleanText: string,
  rate: number,
  onStart?: () => void,
  onEnded?: () => void
): void {
  // 仅在有道播放时，将缺失的词替换为有同音或高频同义可读词
  const replacedText = replaceYoudaoSynonyms(cleanText);

  // 1. 如果长度大于 30 个字符（极有可能是超长句子），有道 dictvoice 会返回 500 null audio。
  // 直接采用无合并的纯系统分词顺序播放方案，避免触发有道 500 报错和延迟。
  if (replacedText.length > 30) {
    const words = segmentThaiForAudio(replacedText);
    if (words.length > 0) {
      startQueuePlayback(words, rate, onStart, onEnded);
    } else if (onEnded) {
      onEnded();
    }
    return;
  }

  // 2. 如果长度较短（<= 30 字符），先尝试整词播放。如果报错（如词库中没有缓存的非标准生词），
  // 则在 onError 中捕获，自动降级为细粒度分词顺序播放，确保 100% 成功播放且用户无感知。
  const { ctxA } = getAudioContexts();
  globalOnEnded = onEnded || null;

  const youdaoSrc = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(replacedText)}&le=th`;

  ctxA.offPlay();
  ctxA.offCanplay();
  ctxA.offEnded();
  ctxA.offError();

  const adjustedRate = Math.min(2.0, rate);

  ctxA.onPlay(() => {
    ctxA.playbackRate = adjustedRate;
    if (onStart) {
      try {
        onStart();
      } catch (e) {
        console.error('onStart callback error:', e);
      }
    }
  });

  ctxA.onCanplay(() => {
    ctxA.playbackRate = adjustedRate;
  });

  ctxA.onEnded(() => {
    const cb = globalOnEnded;
    stopThaiTTS();
    if (cb) {
      try {
        cb();
      } catch (e) {
        console.error('onEnded callback error:', e);
      }
    }
  });

  ctxA.onError((err) => {
    console.warn(`Direct Youdao playback failed for short text "${replacedText}", falling back to sequential segments. Error:`, err);
    
    const words = segmentThaiForAudio(replacedText);
    if (words.length > 0) {
      startQueuePlayback(words, rate, undefined, onEnded);
    } else {
      const cb = globalOnEnded;
      stopThaiTTS();
      if (cb) {
        try {
          cb();
        } catch (e) {
          console.error('onEnded callback error:', e);
        }
      }
    }
  });

  // 延迟 100ms 再设置 src 并 play()，保证底层播放器复位稳定
  playTimeoutId = setTimeout(() => {
    ctxA.src = youdaoSrc;
    ctxA.playbackRate = adjustedRate;
    ctxA.play();
    playTimeoutId = null;
  }, 100) as unknown as number;
}

function getSafeHash(str: string): string {
  let hash1 = 5381;
  let hash2 = 3381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash1 = ((hash1 << 5) + hash1) + char;
    hash2 = ((hash2 << 5) + hash2) ^ char;
  }
  return (hash1 >>> 0).toString(16) + "_" + (hash2 >>> 0).toString(16);
}

const fs = wx.getFileSystemManager();
const localFolder = `${wx.env.USER_DATA_PATH}/tts_cache`;

function ensureCacheDir(): void {
  try {
    fs.accessSync(localFolder);
  } catch (e) {
    try {
      fs.mkdirSync(localFolder, true);
    } catch (err) {
      console.error('Failed to create tts_cache folder:', err);
    }
  }
}

function getLocalAudioPath(text: string): string {
  ensureCacheDir();
  return `${localFolder}/${getSafeHash(text)}.mp3`;
}

function isAudioCached(localPath: string): boolean {
  try {
    fs.accessSync(localPath);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 异步下载并缓存 Google TTS 音频文件
 */
export function preFetchGoogleTTS(text: string): Promise<string> {
  const cleanText = text.trim();
  if (!cleanText) return Promise.reject('Empty text');

  const localPath = getLocalAudioPath(cleanText);
  if (isAudioCached(localPath)) {
    return Promise.resolve(localPath);
  }

  return new Promise((resolve, reject) => {
    const config = getConfig();
    let downloadUrl = '';
    
    // 如果配置了自定义音频基地址，则从自定义服务器下载 pre-downloaded Google TTS MP3
    if (config.audioBaseUrl) {
      const hash = getSafeHash(cleanText);
      downloadUrl = `${config.audioBaseUrl.replace(/\/$/, '')}/${hash}.mp3`;
    } else {
      // 否则直连谷歌 TTS 接口
      downloadUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=th&q=${encodeURIComponent(cleanText)}`;
    }

    wx.downloadFile({
      url: downloadUrl,
      success: (res) => {
        if (res.statusCode === 200) {
          fs.saveFile({
            tempFilePath: res.tempFilePath,
            filePath: localPath,
            success: () => {
              console.log('Cached Google TTS successfully:', cleanText);
              resolve(localPath);
            },
            fail: (err) => {
              console.error('Failed to save cached TTS file:', err);
              resolve(res.tempFilePath);
            }
          });
        } else {
          reject(new Error(`Download failed: statusCode ${res.statusCode}`));
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

/**
 * 播放泰语发音
 * @param text 要播放的泰语文本
 * @param onStart 播放开始回调
 * @param onEnded 播放结束回调
 */
export function playThaiTTS(
  text: string,
  onStart?: () => void,
  onEnded?: () => void
): void {
  try {
    // 停止当前播放并清空状态
    stopThaiTTS();

    const config = getConfig();
    const rate = config.speechRate || 1.0;
    const cleanText = text.trim();

    if (!cleanText) {
      if (onEnded) onEnded();
      return;
    }

    // A. 如果用户开启了 Google 高级发音通道，优先使用 Google TTS (带本地缓存)
    if (config.useGoogleTTS) {
      const { ctxA } = getAudioContexts();
      globalOnEnded = onEnded || null;

      const localPath = getLocalAudioPath(cleanText);
      const adjustedRate = Math.min(2.0, rate);

      const playAudio = (src: string) => {
        ctxA.offPlay();
        ctxA.offCanplay();
        ctxA.offEnded();
        ctxA.offError();

        ctxA.onPlay(() => {
          ctxA.playbackRate = adjustedRate;
          if (onStart) {
            try {
              onStart();
            } catch (e) {
              console.error('onStart callback error:', e);
            }
          }
        });

        ctxA.onCanplay(() => {
          ctxA.playbackRate = adjustedRate;
        });

        ctxA.onEnded(() => {
          const cb = globalOnEnded;
          stopThaiTTS();
          if (cb) {
            try {
              cb();
            } catch (e) {
              console.error('onEnded callback error:', e);
            }
          }
        });

        ctxA.onError((err) => {
          console.warn(`Google TTS playback failed for "${cleanText}" (src: ${src}), falling back to Youdao. Error:`, err);
          playViaYoudao(cleanText, rate, undefined, onEnded);
        });

        playTimeoutId = setTimeout(() => {
          ctxA.src = src;
          ctxA.playbackRate = adjustedRate;
          ctxA.play();
          playTimeoutId = null;
        }, 100) as unknown as number;
      };

      if (isAudioCached(localPath)) {
        playAudio(localPath);
      } else {
        preFetchGoogleTTS(cleanText)
          .then((cachedPath) => {
            playAudio(cachedPath);
          })
          .catch((err) => {
            console.warn(`Pre-fetch Google TTS failed for "${cleanText}", playing from remote URL. Error:`, err);
            const googleUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=th&q=${encodeURIComponent(cleanText)}`;
            playAudio(googleUrl);
          });
      }
      return;
    }

    // B. 默认直接使用有道本地自愈发音方案
    playViaYoudao(cleanText, rate, onStart, onEnded);

  } catch (e) {
    console.error('Error playing TTS:', e);
    if (onEnded) {
      try {
        onEnded();
      } catch (err) {}
    }
  }
}
