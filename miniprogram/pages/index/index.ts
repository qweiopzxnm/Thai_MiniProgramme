// pages/index/index.ts
let simIntervalId: any = null;
let currentSimProgress = 0;

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
          // 清理旧定时器
          const clearTimer = () => {
            if (simIntervalId) {
              clearInterval(simIntervalId);
              simIntervalId = null;
            }
          };

          if (progress === -1) {
            clearTimer();
            this.setData({
              audioLoadingProgress: 0,
              showAudioProgress: false
            });
            currentSimProgress = 0;
          } else if (progress === 0) {
            clearTimer();
            currentSimProgress = 8;
            this.setData({
              audioLoadingProgress: 8,
              showAudioProgress: true
            });

            // 开启模拟平滑进度条
            simIntervalId = setInterval(() => {
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
                return; // 停在 96% 处等待真实 100% 信号
              }

              currentSimProgress = Math.min(96, currentSimProgress + increment);
              this.setData({
                audioLoadingProgress: Math.floor(currentSimProgress)
              });
            }, 100);

          } else if (progress === 100) {
            clearTimer();
            currentSimProgress = 100;
            this.setData({
              audioLoadingProgress: 100
            });
            // 延迟淡出，确保视觉上能看到 100% 满格的状态，提升体验
            setTimeout(() => {
              if (currentSimProgress === 100) {
                this.setData({
                  showAudioProgress: false
                });
              }
            }, 600);
          } else {
            // 如果收到了网络真实进度，且真实进度比模拟进度更快，则同步真实进度
            if (progress > currentSimProgress && progress < 100) {
              currentSimProgress = progress;
              this.setData({
                audioLoadingProgress: Math.floor(progress)
              });
            }
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
