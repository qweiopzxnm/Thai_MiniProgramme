// pages/index/index.ts

Component({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'scenarios' as 'translate' | 'import' | 'scenarios' | 'review',
    navTitle: '情景与经典课文'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  methods: {
    onLoad() {
      // 页面初始化
    },

    /**
     * 切换底部 Tab
     */
    onSwitchTab(e: any) {
      const tab = e.currentTarget.dataset.tab as 'translate' | 'import' | 'scenarios' | 'review';
      this.switchTabTo(tab);
    },

    /**
     * 来自子组件内部触发的 Tab 切换事件 (例如导入保存成功后切换到笔记本)
     */
    onSwitchTabFromComponent(e: any) {
      const tab = e.detail.tab as 'translate' | 'import' | 'scenarios' | 'review';
      this.switchTabTo(tab);
    },

    switchTabTo(tab: 'translate' | 'import' | 'scenarios' | 'review') {
      if (tab === this.data.activeTab) return;

      let navTitle = '泰语翻译与拆解';
      if (tab === 'import') {
        navTitle = '自建泰语学习';
      } else if (tab === 'scenarios') {
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
        if (tab === 'translate') {
          const comp = this.selectComponent('#translateView');
          if (comp && typeof comp.loadSpeechRate === 'function') {
            comp.loadSpeechRate();
          }
        } else if (tab === 'scenarios') {
          const comp = this.selectComponent('#scenariosView');
          if (comp && typeof comp.updateTurnState === 'function') {
            comp.updateTurnState();
          }
          if (comp && typeof comp.loadSpeechRate === 'function') {
            comp.loadSpeechRate();
          }
        } else if (tab === 'review') {
          const comp = this.selectComponent('#reviewView');
          if (comp && typeof comp.onRefresh === 'function') {
            comp.onRefresh();
          }
        }
      } catch (e) {
        console.error('Failed to refresh tab component:', e);
      }
    }
  }
});
