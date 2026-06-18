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
let activePlayDownloadTask: WechatMiniprogram.DownloadTask | null = null;
let playbackWatchdogTimerId: number | null = null;

function clearPlaybackWatchdog(): void {
  if (playbackWatchdogTimerId) {
    clearTimeout(playbackWatchdogTimerId);
    playbackWatchdogTimerId = null;
  }
}

function startPlaybackWatchdog(onTimeout: () => void): void {
  clearPlaybackWatchdog();
  playbackWatchdogTimerId = setTimeout(() => {
    playbackWatchdogTimerId = null;
    onTimeout();
  }, 4500) as unknown as number; // 4.5秒看门狗超时，防止微信播放通道无限卡挂起或转圈
}

let simProgressTimerId: any = null;
let currentSimProgress = 0;

/**
 * 停止模拟进度条定时器
 */
function stopProgressSimulation(): void {
  if (simProgressTimerId) {
    clearInterval(simProgressTimerId);
    simProgressTimerId = null;
  }
  currentSimProgress = 0;
}

/**
 * 开启模拟平滑进度条
 */
function startProgressSimulation(onProgressCallback?: (p: number) => void): void {
  stopProgressSimulation();
  
  currentSimProgress = 8;
  
  const reportProgress = (p: number) => {
    if (onProgressCallback) {
      try {
        onProgressCallback(p);
      } catch (e) {
        console.error('onProgressCallback error:', e);
      }
    }
    try {
      const app = getApp<IAppOption>();
      if (app && app.globalData && typeof app.globalData.audioProgressListener === 'function') {
        app.globalData.audioProgressListener(p);
      }
    } catch (e) {
      console.error('audioProgressListener error:', e);
    }
  };

  reportProgress(currentSimProgress);

  simProgressTimerId = setInterval(() => {
    let increment = 0;
    if (currentSimProgress < 30) {
      increment = Math.random() * 8 + 5; // 5% - 13%
    } else if (currentSimProgress < 60) {
      increment = Math.random() * 4 + 2; // 2% - 6%
    } else if (currentSimProgress < 85) {
      increment = Math.random() * 2 + 1; // 1% - 3%
    } else if (currentSimProgress < 96) {
      increment = 0.5;
    } else {
      return; // 停在 96% 处等待完成信号
    }

    currentSimProgress = Math.min(96, currentSimProgress + increment);
    reportProgress(Math.floor(currentSimProgress));
  }, 100);
}

/**
 * 完成进度条，设为 100% 并清除定时器
 */
function finishProgressSimulation(onProgressCallback?: (p: number) => void): void {
  stopProgressSimulation();
  
  const reportProgress = (p: number) => {
    if (onProgressCallback) {
      try { onProgressCallback(p); } catch (e) {}
    }
    try {
      const app = getApp<IAppOption>();
      if (app && app.globalData && typeof app.globalData.audioProgressListener === 'function') {
        app.globalData.audioProgressListener(p);
      }
    } catch (e) {}
  };
  
  reportProgress(100);
}

/**
 * 取消并重置进度条，设为 -1
 */
function clearProgressSimulation(onProgressCallback?: (p: number) => void): void {
  stopProgressSimulation();
  
  const reportProgress = (p: number) => {
    if (onProgressCallback) {
      try { onProgressCallback(p); } catch (e) {}
    }
    try {
      const app = getApp<IAppOption>();
      if (app && app.globalData && typeof app.globalData.audioProgressListener === 'function') {
        app.globalData.audioProgressListener(p);
      }
    } catch (e) {}
  };
  
  reportProgress(-1);
}


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
  
  // 清除播放看门狗
  clearPlaybackWatchdog();
  
  globalOnEnded = null;

  // 通知全局隐藏进度条并清理仿真定时器
  clearProgressSimulation();

  // 终止正在进行的播放下载任务，防止积压堵塞及旧发音在切换后突然播放
  if (activePlayDownloadTask) {
    try {
      activePlayDownloadTask.abort();
    } catch (e) {}
    activePlayDownloadTask = null;
  }

  if (ctxA) {
    try {
      ctxA.stop();
      try {
        ctxA.src = ''; // 重置 src 以释放音频资源，防止微信底层播放通道挂起或状态死锁
      } catch (err) {}
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
 * 使用 Vercel Edge TTS 自建接口进行流式直接播放
 */
function playViaEdgeTTS(
  cleanText: string,
  rate: number,
  onStart?: () => void,
  onEnded?: () => void
): void {
  try {
    const { ctxA } = getAudioContexts();
    globalOnEnded = onEnded || null;

    // 使用我们新绑定的自定义域名 Edge TTS 代理接口
    const edgeSrc = `https://www.barryapp.xyz/api/tts?text=${encodeURIComponent(cleanText)}`;

    ctxA.offPlay();
    ctxA.offCanplay();
    ctxA.offEnded();
    ctxA.offError();

    const adjustedRate = getSupportedPlaybackRate(rate);

    ctxA.onPlay(() => {
      clearPlaybackWatchdog(); // 成功开始播放，清除看门狗
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
      clearPlaybackWatchdog();
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
      clearPlaybackWatchdog();
      console.error(`Edge TTS playback failed for "${cleanText}" (src: ${edgeSrc}). Error:`, err);
      stopThaiTTS();
      const cb = globalOnEnded;
      if (cb) {
        try {
          cb();
        } catch (e) {}
      }
    });

    // 启动播放看门狗守护定时器
    startPlaybackWatchdog(() => {
      console.warn(`Edge TTS playback watchdog timeout for text: "${cleanText}". Forcing reset.`);
      const cb = globalOnEnded;
      stopThaiTTS();
      wx.showToast({
        title: '音频播放超时，请重听',
        icon: 'none',
        duration: 2000
      });
      if (cb) {
        try { cb(); } catch (e) {}
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
    clearPlaybackWatchdog();
    console.error('Error in playViaEdgeTTS:', e);
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
    // 优先使用国内访问极速且高可用的 GitHub 代理镜像，彻底避免连接阻塞
    return `https://mirror.ghproxy.com/https://raw.githubusercontent.com/qweiopzxnm/thaiminiprogramme/audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`;
  }
  return '';
}

/**
 * 辅助下载函数，将音频文件下载并保存到本地持久化沙盒路径中
 */
function downloadAndSaveAudio(
  url: string, 
  localPath: string,
  onProgress?: (progress: number) => void,
  isPlayTask: boolean = false
): Promise<string> {
  return new Promise((resolve, reject) => {
    let timeoutId: number | null = null;
    let downloadTask: WechatMiniprogram.DownloadTask | null = null;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (isPlayTask && activePlayDownloadTask === downloadTask) {
        activePlayDownloadTask = null;
      }
    };

    downloadTask = wx.downloadFile({
      url: url,
      success: (res) => {
        cleanup();
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
        cleanup();
        reject(err);
      }
    });

    if (isPlayTask) {
      if (activePlayDownloadTask) {
        try {
          activePlayDownloadTask.abort();
        } catch (e) {}
      }
      activePlayDownloadTask = downloadTask;

      // 1.5秒下载超时限制，超时则自动 abort 任务以快速尝试下一个镜像或流式直接播放，减少重试时延
      timeoutId = setTimeout(() => {
        if (downloadTask) {
          try {
            console.warn(`Download task timed out (1.5s), aborting: ${url}`);
            downloadTask.abort();
          } catch (e) {}
        }
      }, 1500) as unknown as number;
    }

    if (onProgress && downloadTask && typeof downloadTask.onProgressUpdate === 'function') {
      downloadTask.onProgressUpdate((res) => {
        onProgress(res.progress);
      });
    }
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

  // 2. 否则在线下载 Vercel Edge TTS
  const downloadUrl = `https://www.barryapp.xyz/api/tts?text=${encodeURIComponent(cleanText)}`;
  return downloadAndSaveAudio(downloadUrl, localPath)
    .then((res) => { cleanup(); return res; })
    .catch((err) => { cleanup(); throw err; });
}

/**
 * 播放泰语发音
 * @param text 要播放的泰语文本
 * @param onStart 播放开始回调
 * @param onEnded 播放结束回调
 * @param disableYoudao 已废弃，无实际作用
 * @param onProgress 下载进度回调，接收 0-100 的数值
 */
export function playThaiTTS(
  text: string,
  onStart?: () => void,
  onEnded?: () => void,
  disableYoudao: boolean = false,
  onProgress?: (progress: number) => void
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
        clearPlaybackWatchdog(); // 成功播放，清除看门狗
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
        clearPlaybackWatchdog();
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
        clearPlaybackWatchdog();
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

        // 已完全废弃有道，发生播放错误时直接统一使用 Edge TTS 兜底播放，确保透传 onStart 回调以取消转圈状态
        console.warn(`Playback failed for "${cleanText}" (src: ${src}), falling back to Edge TTS streaming. Error:`, err);
        playViaEdgeTTS(cleanText, rate, onStart, onEnded);
      });

      // 启动播放看门狗守护定时器
      startPlaybackWatchdog(() => {
        console.warn(`Playback watchdog timeout for src: ${src}. Forcing fallback/reset.`);
        
        // 如果是本地缓存文件加载超时，删除本地缓存并尝试在线 CDN
        if (src.startsWith(localFolder)) {
          try {
            fs.unlinkSync(src);
          } catch (e) {}
          if (staticPath) {
            playAudio(staticPath);
            return;
          }
        }
        
        // 如果是在线 CDN 镜像加载超时，尝试直接 fallback 到 Edge TTS
        if (src !== `https://www.barryapp.xyz/api/tts?text=${encodeURIComponent(cleanText)}`) {
          console.log('Online CDN timed out, falling back to Edge TTS...');
          playViaEdgeTTS(cleanText, rate, onStart, onEnded);
          return;
        }

        // 如果已经是 Edge TTS 依然超时，直接停止并释放 UI 状态，提示用户
        const cb = globalOnEnded;
        stopThaiTTS();
        wx.showToast({
          title: '发音加载超时，请重听',
          icon: 'none',
          duration: 2000
        });
        if (cb) {
          try { cb(); } catch (e) {}
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
      finishProgressSimulation(onProgress);
      playAudio(localPath);
      return;
    }

    // 开启进度条模拟
    startProgressSimulation(onProgress);

    // 2. 准备候选下载地址列表 (包含国内最稳定的 2 个 CDN 镜像及 Vercel 兜底)
    const urls: string[] = [];
    if (staticPath) {
      const hash = getSafeHash(cleanText);
      const pkgNum = (parseInt(hash.substring(0, 6), 16) % 10) + 1;
      
      // 只保留国内速度极快、高可用的 2 个核心 CDN 镜像，缩短 Failover 链条以大幅减小重试积压延迟
      urls.push(`https://cdn.jsdmirror.com/gh/qweiopzxnm/thaiminiprogramme@audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`);
      urls.push(`https://jsd.onmicrosoft.cn/gh/qweiopzxnm/thaiminiprogramme@audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`);
    }
    
    // 把 Vercel Edge TTS 地址作为最后保底下载地址加入队列
    urls.push(`https://www.barryapp.xyz/api/tts?text=${encodeURIComponent(cleanText)}`);

    // 3. 依次尝试候选下载地址，每个地址拥有 2.5s 独立超时限制
    const tryDownloadAndPlay = (urlIndex: number) => {
      if (urlIndex >= urls.length) {
        // 如果所有 CDN 镜像均下载失败，最终使用 Edge TTS 接口流式直接播放（最终兜底）
        console.warn(`All download options failed for "${cleanText}", falling back to Edge TTS streaming.`);
        finishProgressSimulation(onProgress);
        playViaEdgeTTS(cleanText, rate, onStart, onEnded);
        return;
      }

      const currentUrl = urls[urlIndex];

      downloadAndSaveAudio(currentUrl, localPath, (p) => {
        // 如果收到真实进度且大于当前模拟进度，则更新模拟进度并回调
        if (p > currentSimProgress && p < 100) {
          currentSimProgress = p;
          
          if (onProgress) {
            try { onProgress(Math.floor(p)); } catch (e) {}
          }
          try {
            const app = getApp<IAppOption>();
            if (app && app.globalData && typeof app.globalData.audioProgressListener === 'function') {
              app.globalData.audioProgressListener(Math.floor(p));
            }
          } catch (e) {}
        }
      }, true)
        .then((savedPath) => {
          finishProgressSimulation(onProgress);
          playAudio(savedPath);
        })
        .catch((err) => {
          console.warn(`Download failed or timed out for ${currentUrl} (Index: ${urlIndex}), switching to next... Error:`, err);
          tryDownloadAndPlay(urlIndex + 1);
        });
    };

    tryDownloadAndPlay(0);

  } catch (e) {
    console.error('Error playing TTS:', e);
    finishProgressSimulation(onProgress);
    if (onEnded) {
      try {
        onEnded();
      } catch (err) {}
    }
  }
}
