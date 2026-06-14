// components/settings-view/settings-view.ts
import { getConfig, setConfig, AppConfig } from '../../utils/config';
import { getUserDict, deleteUserWord, clearHistory, clearUserDict, UserDictWord } from '../../utils/db';

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    config: {} as AppConfig,
    baiduAppId: '',
    baiduApiKey: '',
    audioBaseUrl: '',
    customWords: [] as UserDictWord[]
  },

  lifetimes: {
    attached() {
      this.loadSettings();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 外部刷新的入口 (主页面切换 Tab 时调用)
     */
    onRefresh() {
      this.loadSettings();
    },

    /**
     * 加载当前配置和自定义词库
     */
    loadSettings() {
      const config = getConfig();
      const userDict = getUserDict();
      
      // 按创建时间倒序排列自定义单词
      const customWordsList = Object.values(userDict).sort(
        (a, b) => b.createdAt - a.createdAt
      );

      this.setData({
        config,
        baiduAppId: config.baiduAppId,
        baiduApiKey: config.baiduApiKey,
        audioBaseUrl: config.audioBaseUrl || '',
        customWords: customWordsList
      });
    },

    onInputAppId(e: any) {
      this.setData({
        baiduAppId: e.detail.value
      });
    },

    onInputApiKey(e: any) {
      this.setData({
        baiduApiKey: e.detail.value
      });
    },

    /**
     * 保存百度 AppID 和 Key
     */
    onSaveBaiduKeys() {
      const { baiduAppId, baiduApiKey } = this.data;
      if (!baiduAppId.trim() || !baiduApiKey.trim()) {
        wx.showToast({
          title: '请填写 AppID 和 密钥',
          icon: 'none'
        });
        return;
      }

      setConfig({
        baiduAppId: baiduAppId.trim(),
        baiduApiKey: baiduApiKey.trim()
      });
      this.loadSettings();

      wx.showToast({
        title: '配置保存成功',
        icon: 'success'
      });
    },

    /**
     * 调节发音语速
     */
    onSelectRate(e: any) {
      const rate = parseFloat(e.currentTarget.dataset.rate);
      if (rate === this.data.config.speechRate) return;

      setConfig({ speechRate: rate });
      this.loadSettings();

      wx.showToast({
        title: `语速已设为 ${rate}x`,
        icon: 'success'
      });
    },

    /**
     * 切换 Google 发音通道
     */
    onToggleGoogleTTS(e: any) {
      const useGoogleTTS = e.detail.value;
      setConfig({ useGoogleTTS });
      this.loadSettings();

      wx.showToast({
        title: useGoogleTTS ? '已启用 Google 通道' : '已停用 Google 通道',
        icon: 'success'
      });
    },

    onInputAudioBaseUrl(e: any) {
      this.setData({
        audioBaseUrl: e.detail.value
      });
    },

    onSaveAudioUrl() {
      const { audioBaseUrl } = this.data;
      setConfig({
        audioBaseUrl: audioBaseUrl.trim()
      });
      this.loadSettings();

      wx.showToast({
        title: '托管地址保存成功',
        icon: 'success'
      });
    },

    /**
     * 删除单条自定义单词
     */
    onDeleteCustomWord(e: any) {
      const word = e.currentTarget.dataset.word;
      
      wx.showModal({
        title: '删除单词',
        content: `确定要从自建词库中删除单词 "${word}" 吗？删除后该单词将恢复默认未识别或内置状态。`,
        success: (res) => {
          if (res.confirm) {
            deleteUserWord(word);
            this.loadSettings();
            
            // 触发历史记录更新事件，让笔记本和翻译页的解析结果刷新
            this.triggerEvent('historychange');

            wx.showToast({
              title: '已删除',
              icon: 'success'
            });
          }
        }
      });
    },

    /**
     * 清空笔记本历史数据
     */
    onClearHistoryData() {
      wx.showModal({
        title: '安全确认',
        content: '确定要清空学习笔记本里的所有翻译历史记录吗？此操作不可逆。',
        confirmColor: '#ef4444',
        success: (res) => {
          if (res.confirm) {
            clearHistory();
            this.loadSettings();
            this.triggerEvent('historychange');
            
            wx.showToast({
              title: '已清空历史',
              icon: 'success'
            });
          }
        }
      });
    },

    /**
     * 清空自建词库数据
     */
    onClearUserDictData() {
      wx.showModal({
        title: '安全确认',
        content: '确定要清空本地所有自建的单词词典吗？清空后您手动完善的所有单词发音拼写和释义都将消失。',
        confirmColor: '#ef4444',
        success: (res) => {
          if (res.confirm) {
            clearUserDict();
            this.loadSettings();
            this.triggerEvent('historychange');
            
            wx.showToast({
              title: '已清空词库',
              icon: 'success'
            });
          }
        }
      });
    }
  }
});
