// pages/index/index.ts

Component({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'scenarios' as 'translate' | 'scenarios' | 'review',
    navTitle: '情景与经典课文',
    audioLoadingProgress: 0,
    showAudioProgress: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  methods: {
    onLoad() {
      // 监听全局音频下载进度事件
      const app = getApp<IAppOption>();
      if (app && app.globalData) {
        app.globalData.audioProgressListener = (progress: number) => {
          if (progress === -1) {
            this.setData({
              audioLoadingProgress: 0,
              showAudioProgress: false
            });
          } else if (progress === 100) {
            this.setData({
              audioLoadingProgress: 100
            });
            // 延迟淡出，确保视觉上能看到 100% 满格的状态，提升体验
            setTimeout(() => {
              if (this.data.audioLoadingProgress === 100) {
                this.setData({
                  showAudioProgress: false
                });
              }
            }, 600);
          } else {
            this.setData({
              audioLoadingProgress: Math.floor(progress),
              showAudioProgress: true
            });
          }
        };
      }
    },

    /**
     * 切换底部 Tab
     */
    onSwitchTab(e: any) {
      const tab = e.currentTarget.dataset.tab as 'translate' | 'scenarios' | 'review';
      this.switchTabTo(tab);
    },

    switchTabTo(tab: 'translate' | 'scenarios' | 'review') {
      if (tab === this.data.activeTab) return;

      let navTitle = '泰语翻译与拆解';
      if (tab === 'scenarios') {
        navTitle = '情景与经典课文';
      } else if (tab === 'review') {
        navTitle = '学习笔记本';
      }

      this.setData({
        activeTab: tab,
        navTitle
      }, () => {
        // 尝试主动刷新对应组件的数据 (以防缓存)
        this.refreshActiveComponent(tab);
      });
    },

    /**
     * 当子组件的数据发生变化时（如翻译了新句子、删除了历史、修改了单词等），触发的事件回调
     */
    onHistoryChange() {
      console.log('History or user dictionary changed, refreshing views...');
      // 刷新当前活动的 Tab 组件数据
      this.refreshActiveComponent(this.data.activeTab);
    },

    /**
     * 主动触发组件的刷新方法
     */
    refreshActiveComponent(tab: string) {
      try {
        if (tab === 'review') {
          const comp = this.selectComponent('#reviewView');
          if (comp && typeof comp.onRefresh === 'function') {
            comp.onRefresh();
          }
        } else if (tab === 'scenarios') {
          const comp = this.selectComponent('#scenariosView');
          if (comp && typeof comp.updateTurnState === 'function') {
            comp.updateTurnState();
          }
        }
      } catch (e) {
        console.error('Failed to refresh tab component:', e);
      }
    }
  }
});
