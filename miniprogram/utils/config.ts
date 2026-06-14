// utils/config.ts

export interface AppConfig {
  baiduAppId: string;
  baiduApiKey: string;
  speechRate: number; // 0.75, 1.0, 1.25, 1.5
  useGoogleTTS?: boolean;
  audioBaseUrl?: string; // 离线音频托管服务器基地址
}

const STORAGE_KEY = 'thai_learner_config';

const defaultConfig: AppConfig = {
  baiduAppId: '',
  baiduApiKey: '',
  speechRate: 1.0,
  useGoogleTTS: false,
  audioBaseUrl: '',
};

export function getConfig(): AppConfig {
  try {
    const config = wx.getStorageSync(STORAGE_KEY);
    if (config) {
      return { ...defaultConfig, ...config };
    }
  } catch (e) {
    console.error('Failed to load config from storage:', e);
  }
  return { ...defaultConfig };
}

export function setConfig(config: Partial<AppConfig>): AppConfig {
  const current = getConfig();
  const updated = { ...current, ...config };
  try {
    wx.setStorageSync(STORAGE_KEY, updated);
  } catch (e) {
    console.error('Failed to save config to storage:', e);
  }
  return updated;
}
