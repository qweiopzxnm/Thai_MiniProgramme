// utils/tts.ts - deployed on Vercel master branch
import { getConfig } from './config';
import { staticHashes } from './static_hashes';

/**
 * 校准倍速数值，强制符合微信小程序 InnerAudioContext 官方仅支持 of 0.5, 0.8, 1.0, 1.25, 1.5, 2.0 规格
 */
export function getSupportedPlaybackRate(rate: number): number {
  const supportedRates = [0.5, 0.8, 1.0, 1.25, 1.5, 2.0];
  let closest = supportedRates[0];
  let minDiff = Math.abs(rate - closest);
  for (let i = 1; i < supportedRates.length; i++) {
    const diff = Math.abs(rate - supportedRates[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closest = supportedRates[i];
    }
  }
  return closest;
}

let ctxA: WechatMiniprogram.InnerAudioContext | null = null;
let playTimeoutId: number | null = null;
let globalOnEnded: (() => void) | null = null;

// 在模块加载时提前设置全局音频选项，避免在首次播放时触发系统音频通道重置导致首句声音截断
if (wx.setInnerAudioOption) {
  wx.setInnerAudioOption({
    obeyMuteSwitch: false,
    fail: (err) => {
      console.error('setInnerAudioOption fail:', err);
    }
  });
}

function getAudioContexts(): {
  ctxA: WechatMiniprogram.InnerAudioContext;
} {
  if (!ctxA) {
    ctxA = wx.createInnerAudioContext();
  }
  return { ctxA };
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
  try {
    const { ctxA } = getAudioContexts();
    globalOnEnded = onEnded || null;

    // 使用我们刚刚部署在 Vercel 上的 Edge TTS 代理接口
    const edgeSrc = `https://thaiminiprogramme.vercel.app/api/tts?text=${encodeURIComponent(cleanText)}`;

    ctxA.offPlay();
    ctxA.offCanplay();
    ctxA.offEnded();
    ctxA.offError();

    const adjustedRate = getSupportedPlaybackRate(rate);

    ctxA.onPlay(() => {
      if (adjustedRate !== 1.0) {
        ctxA.playbackRate = adjustedRate;
      }
      if (onStart) {
        try {
          onStart();
        } catch (e) {
          console.error('onStart callback error:', e);
        }
      }
    });

    ctxA.onCanplay(() => {
      if (adjustedRate !== 1.0) {
        ctxA.playbackRate = adjustedRate;
      }
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
      console.error(`Edge TTS playback failed for "${cleanText}" (src: ${edgeSrc}). Error:`, err);
      stopThaiTTS();
      const cb = globalOnEnded;
      if (cb) {
        try {
          cb();
        } catch (e) {}
      }
    });

    playTimeoutId = setTimeout(() => {
      ctxA.src = edgeSrc;
      if (adjustedRate !== 1.0) {
        ctxA.playbackRate = adjustedRate;
      }
      ctxA.play();
      playTimeoutId = null;
    }, 30) as unknown as number;

  } catch (e) {
    console.error('Error in playViaYoudao (Edge TTS):', e);
    if (onEnded) {
      try {
        onEnded();
      } catch (err) {}
    }
  }
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
    const stat = fs.statSync(localPath);
    // 正常的 MP3 音频即使极短也会大于 200 字节。如果小于 200 字节可能是空文件或保存了 HTML 错误页面
    if (stat.size > 200) {
      return true;
    }
    try {
      fs.unlinkSync(localPath);
    } catch (err) {}
    return false;
  } catch (e) {
    return false;
  }
}

export function getStaticAudioPath(text: string): string {
  const hash = getSafeHash(text);
  if (staticHashes.has(hash)) {
    // 使用大数取模将哈希非常均匀地分流到 10 个包中
    const pkgNum = (parseInt(hash.substring(0, 6), 16) % 10) + 1;
    // 使用高速 jsDelivr 镜像节点，在大陆拥有极佳的访问速度与极低的音频流缓冲时延
    return `https://jsd.onmicrosoft.cn/gh/qweiopzxnm/thaiminiprogramme@audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`;
  }
  return '';
}

/**
 * 辅助下载函数，将音频文件下载并保存到本地持久化沙盒路径中
 */
function downloadAndSaveAudio(url: string, localPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    wx.downloadFile({
      url: url,
      success: (res) => {
        if (res.statusCode === 200) {
          fs.saveFile({
            tempFilePath: res.tempFilePath,
            filePath: localPath,
            success: () => {
              console.log('Cached audio successfully from:', url);
              resolve(localPath);
            },
            fail: (err) => {
              console.error('Failed to save cached audio file:', err);
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

// 缓存追踪下载任务，防止相同请求的高并发重复拉取
const activeDownloads = new Set<string>();

/**
 * 异步下载并缓存 Google TTS / Gitee 远程音频文件
 */
export function preFetchGoogleTTS(text: string): Promise<string> {
  const cleanText = text.trim();
  if (!cleanText) return Promise.reject('Empty text');

  const localPath = getLocalAudioPath(cleanText);
  if (isAudioCached(localPath)) {
    return Promise.resolve(localPath);
  }

  const hash = getSafeHash(cleanText);
  if (activeDownloads.has(hash)) {
    return Promise.resolve(localPath);
  }

  activeDownloads.add(hash);
  const cleanup = () => {
    activeDownloads.delete(hash);
  };

  // 1. 优先检查静态库路径（可以是 Gitee 远程链接）
  const staticPath = getStaticAudioPath(cleanText);
  if (staticPath) {
    if (staticPath.startsWith('http')) {
      return downloadAndSaveAudio(staticPath, localPath)
        .then((res) => { cleanup(); return res; })
        .catch((err) => { cleanup(); throw err; });
    }
    cleanup();
    return Promise.resolve(staticPath);
  }

  // 2. 否则在线下载 Google TTS
  const downloadUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=th&q=${encodeURIComponent(cleanText)}`;
  return downloadAndSaveAudio(downloadUrl, localPath)
    .then((res) => { cleanup(); return res; })
    .catch((err) => { cleanup(); throw err; });
}

/**
 * 播放泰语发音
 * @param text 要播放的泰语文本
 * @param onStart 播放开始回调
 * @param onEnded 播放结束回调
 * @param disableYoudao 是否禁用有道发音通道（默认为 false）
 */
export function playThaiTTS(
  text: string,
  onStart?: () => void,
  onEnded?: () => void,
  disableYoudao: boolean = false
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

    const { ctxA } = getAudioContexts();
    globalOnEnded = onEnded || null;
    const adjustedRate = getSupportedPlaybackRate(rate);

    const playAudio = (src: string) => {
      ctxA.offPlay();
      ctxA.offCanplay();
      ctxA.offEnded();
      ctxA.offError();

      ctxA.onPlay(() => {
        if (adjustedRate !== 1.0) {
          ctxA.playbackRate = adjustedRate;
        }
        if (onStart) {
          try {
            onStart();
          } catch (e) {
            console.error('onStart callback error:', e);
          }
        }
      });

      ctxA.onCanplay(() => {
        if (adjustedRate !== 1.0) {
          ctxA.playbackRate = adjustedRate;
        }
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
        // Self-healing: if playing a local file fails, delete the local file because it's probably corrupt/HTML!
        if (src.startsWith(localFolder)) {
          console.warn(`Local cached audio failed to play, deleting corrupted cache file: ${src}. Error:`, err);
          try {
            fs.unlinkSync(src);
          } catch (e) {
            console.error('Failed to unlink corrupted file:', e);
          }
          if (staticPath) {
            console.log(`Self-healing: Re-trying playback directly from remote CDN: ${staticPath}`);
            playAudio(staticPath);
            // Re-download the correct audio in the background
            downloadAndSaveAudio(staticPath, src).catch((e) => {
              console.error('Self-healing background cache recovery failed:', e);
            });
            return;
          }
        }

        if (disableYoudao) {
          console.error(`Static audio failed to play, Youdao fallback is disabled for this sentence: "${cleanText}" (src: ${src}). Error:`, err);
          stopThaiTTS();
          const cb = globalOnEnded;
          if (cb) {
            try {
              cb();
            } catch (e) {}
          }
        } else {
          console.warn(`Google/Gitee TTS playback failed for "${cleanText}" (src: ${src}), falling back to Youdao. Error:`, err);
          playViaYoudao(cleanText, rate, undefined, onEnded);
        }
      });

      playTimeoutId = setTimeout(() => {
        ctxA.src = src;
        if (adjustedRate !== 1.0) {
          ctxA.playbackRate = adjustedRate;
        }
        ctxA.play();
        playTimeoutId = null;
      }, 30) as unknown as number;
    };

    const localPath = getLocalAudioPath(cleanText);
    const staticPath = getStaticAudioPath(cleanText);

    // 1. 优先播放本地持久化缓存（不管是 Gitee 缓存下来的还是 Google 在线缓存下来的）
    if (isAudioCached(localPath)) {
      playAudio(localPath);
      return;
    }

    // 2. 如果静态路径中存在该词（比如 Gitee 地址）
    if (staticPath) {
      if (staticPath.startsWith('http')) {
        // 立即在线流媒体直接播放，彻底消除因为网络下载阻塞发音导致的高时延
        playAudio(staticPath);
        // 后台异步静默下载缓存以供下次秒开，用户无需感知等待
        preFetchGoogleTTS(cleanText).catch((err) => {
          console.warn('Background static pre-fetch failed:', err);
        });
        return;
      }
      playAudio(staticPath);
      return;
    }

    // 3. 用户启用了 Google 通道，去尝试下载并缓存播放
    if (config.useGoogleTTS) {
      const googleUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=th&q=${encodeURIComponent(cleanText)}`;
      // 立即在线播放以避免延迟
      playAudio(googleUrl);
      // 后台静默下载缓存
      preFetchGoogleTTS(cleanText).catch((err) => {
        console.warn('Background Google pre-fetch failed:', err);
      });
      return;
    }

    // 4. 默认回退使用有道发音方案
    if (disableYoudao) {
      console.warn(`Audio "${cleanText}" not found in static hashes, and Youdao is disabled. Playback skipped.`);
      if (onEnded) {
        try {
          onEnded();
        } catch (err) {}
      }
    } else {
      playViaYoudao(cleanText, rate, onStart, onEnded);
    }

  } catch (e) {
    console.error('Error playing TTS:', e);
    if (onEnded) {
      try {
        onEnded();
      } catch (err) {}
    }
  }
}
