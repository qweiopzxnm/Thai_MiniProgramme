// components/review-view/review-view.ts
import { getHistory, deleteHistoryItem, saveHistoryItem, TranslationItem } from '../../utils/db';
import { playThaiTTS, stopThaiTTS } from '../../utils/tts';
import { SCENARIOS } from '../../utils/scenarios';
import { segmentThai } from '../../utils/segment';

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    activeMode: 'list' as 'list' | 'card',
    historyList: [] as TranslationItem[],
    filteredHistory: [] as TranslationItem[],
    searchQuery: '',
    expandedId: '',

    // 闪卡复习相关
    cardList: [] as TranslationItem[],
    currentIndex: 0,
    isFlipped: false,
    currentCard: null as TranslationItem | null,
    reviewFinished: false,
    scoreRemember: 0,
    scoreForgot: 0,
    cardLanguageMode: 'zh' as 'zh' | 'th', // zh: 中文在正面, th: 泰文在正面

    // 发音状态管理
    playingSentenceText: '',
    playingWordKey: '' // 单词发音唯一标识 "word-index"
  },

  lifetimes: {
    attached() {
      this.loadHistory();
    },
    detached() {
      stopThaiTTS();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 外部调用的刷新数据方法 (例如从父组件调用)
     */
    onRefresh() {
      this.loadHistory();
      if (this.data.activeMode === 'card') {
        this.initReview();
      }
    },

    /**
     * 合并翻译历史和已学习情景对话的数据视图
     */
    getMergedList(): TranslationItem[] {
      const translatorList = getHistory().map(item => ({
        ...item,
        source: 'translator' as const
      }));
      
      const learnedList: string[] = wx.getStorageSync('learned_scenarios') || [];
      const scenarioStates = wx.getStorageSync('scenario_card_states') || {};
      const scenarioItems: TranslationItem[] = [];
      
      for (const scenarioId of learnedList) {
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        if (!scenario) continue;
        
        for (const turn of scenario.dialogues) {
          const state = scenarioStates[turn.id] || {};
          if (state.hidden) continue;
          
          const words = segmentThai(turn.thai).map(w => ({
            word: w.word,
            meaning: w.meaning,
            phonetic: w.phonetic,
            isCustom: w.isCustom
          }));
          
          scenarioItems.push({
            id: turn.id,
            thai: turn.thai,
            chinese: turn.chinese,
            words: words,
            createdAt: 0, // scenarios don't have natural timestamps
            starred: !!state.starred,
            mastered: !!state.mastered,
            wrongCount: state.wrongCount || 0,
            reviewCount: state.reviewCount || 0,
            source: 'scenario',
            scenarioTitle: scenario.title
          });
        }
      }
      
      // 排序：翻译记录（最新靠前），情景卡片排在底部
      const sortedTranslator = [...translatorList].sort((a, b) => b.createdAt - a.createdAt);
      return [...sortedTranslator, ...scenarioItems];
    },

    /**
     * 加载本地学习历史记录
     */
    loadHistory() {
      const list = this.getMergedList();
      // 格式化时间显示
      const formattedList = list.map(item => {
        if (item.createdAt === 0) {
          return {
            ...item,
            formattedTime: '情景学习'
          };
        }
        const date = new Date(item.createdAt);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        const hr = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        return {
          ...item,
          formattedTime: `${y}-${m}-${d} ${hr}:${min}`
        };
      });

      this.setData({
        historyList: formattedList
      }, () => {
        this.applyFilter();
      });
    },

    /**
     * 应用关键字搜索过滤
     */
    applyFilter() {
      const query = this.data.searchQuery.trim().toLowerCase();
      if (!query) {
        this.setData({
          filteredHistory: this.data.historyList
        });
        return;
      }

      const filtered = this.data.historyList.filter(item => {
        return (
          item.chinese.toLowerCase().includes(query) ||
          item.thai.toLowerCase().includes(query) ||
          item.words.some(w => w.word.toLowerCase().includes(query) || w.meaning.toLowerCase().includes(query))
        );
      });

      this.setData({
        filteredHistory: filtered
      });
    },

    onSearch(e: any) {
      this.setData({
        searchQuery: e.detail.value
      }, () => {
        this.applyFilter();
      });
    },

    onClearSearch() {
      this.setData({
        searchQuery: ''
      }, () => {
        this.applyFilter();
      });
    },

    /**
     * 切换卡片展开折叠
     */
    onToggleExpand(e: any) {
      const id = e.currentTarget.dataset.id;
      this.setData({
        expandedId: this.data.expandedId === id ? '' : id
      });
      stopThaiTTS();
    },

    /**
     * 收藏/取消收藏
     */
    onToggleStar(e: any) {
      const id = e.currentTarget.dataset.id;
      const list = [...this.data.historyList];
      const index = list.findIndex(h => h.id === id);
      
      if (index > -1) {
        const item = list[index];
        item.starred = !item.starred;
        
        if (item.source === 'scenario') {
          const scenarioStates = wx.getStorageSync('scenario_card_states') || {};
          if (!scenarioStates[id]) scenarioStates[id] = {};
          scenarioStates[id].starred = item.starred;
          wx.setStorageSync('scenario_card_states', scenarioStates);
        } else {
          saveHistoryItem(item);
        }
        
        this.setData({
          historyList: list
        }, () => {
          this.applyFilter();
        });
      }
    },

    /**
     * 删除历史记录
     */
    onDeleteHistory(e: any) {
      const id = e.currentTarget.dataset.id;
      const list = [...this.data.historyList];
      const index = list.findIndex(h => h.id === id);
      if (index === -1) return;
      const item = list[index];
      
      wx.showModal({
        title: '删除记录',
        content: '确定要从笔记本中删除此条记录吗？',
        success: (res) => {
          if (res.confirm) {
            if (item.source === 'scenario') {
              const scenarioStates = wx.getStorageSync('scenario_card_states') || {};
              if (!scenarioStates[id]) scenarioStates[id] = {};
              scenarioStates[id].hidden = true;
              wx.setStorageSync('scenario_card_states', scenarioStates);
            } else {
              deleteHistoryItem(id);
            }
            this.loadHistory();
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
     * 切换“笔记本列表”与“闪卡记忆”模式
     */
    onChangeMode(e: any) {
      const mode = e.currentTarget.dataset.mode;
      if (mode === this.data.activeMode) return;

      this.setData({
        activeMode: mode
      });
      stopThaiTTS();

      if (mode === 'card') {
        this.initReview();
      } else {
        this.loadHistory();
      }
    },

    /**
     * 切换卡片语言模式 (中文正面 / 泰文正面)
     */
    onChangeCardLang(e: any) {
      const lang = e.currentTarget.dataset.lang as 'zh' | 'th';
      if (lang === this.data.cardLanguageMode) return;

      this.setData({
        cardLanguageMode: lang,
        isFlipped: false
      }, () => {
        stopThaiTTS();
        this.setData({
          playingSentenceText: '',
          playingWordKey: ''
        });
      });
    },

    /**
     * 初始化闪卡复习
     */
    initReview() {
      const list = this.getMergedList();
      
      if (list.length === 0) {
        this.setData({
          cardList: [],
          currentCard: null,
          reviewFinished: false
        });
        return;
      }

      // 洗牌算法乱序卡片
      const shuffled = [...list].sort(() => Math.random() - 0.5);

      this.setData({
        cardList: shuffled,
        currentIndex: 0,
        isFlipped: false,
        currentCard: shuffled[0],
        reviewFinished: false,
        scoreRemember: 0,
        scoreForgot: 0
      });
    },

    /**
     * 翻转闪卡
     */
    onFlipCard() {
      this.setData({
        isFlipped: !this.data.isFlipped
      });
      stopThaiTTS();
      this.setData({
        playingSentenceText: '',
        playingWordKey: ''
      });
    },

    /**
     * 对卡片进行评分 (记得/模糊)
     */
    onGradeCard(e: any) {
      const grade = e.currentTarget.dataset.grade;
      const card = this.data.currentCard;
      
      if (card) {
        card.reviewCount += 1;
        if (grade === 'remember') {
          card.mastered = true;
          this.setData({ scoreRemember: this.data.scoreRemember + 1 });
        } else {
          card.wrongCount += 1;
          card.mastered = false; // 重新标记为未掌握
          this.setData({ scoreForgot: this.data.scoreForgot + 1 });
        }
        
        if (card.source === 'scenario') {
          const scenarioStates = wx.getStorageSync('scenario_card_states') || {};
          if (!scenarioStates[card.id]) scenarioStates[card.id] = {};
          scenarioStates[card.id].reviewCount = card.reviewCount;
          scenarioStates[card.id].wrongCount = card.wrongCount;
          scenarioStates[card.id].mastered = card.mastered;
          wx.setStorageSync('scenario_card_states', scenarioStates);
        } else {
          // 更新本地数据库中该卡的复习次数和状态
          saveHistoryItem(card);
        }
      }

      // 先翻转回正面，增加过渡感
      this.setData({ isFlipped: false });

      // 延迟切卡，等待卡片回正动画完成
      setTimeout(() => {
        const nextIndex = this.data.currentIndex + 1;
        if (nextIndex < this.data.cardList.length) {
          this.setData({
            currentIndex: nextIndex,
            currentCard: this.data.cardList[nextIndex]
          });
        } else {
          this.setData({
            reviewFinished: true
          });
        }
      }, 250);
    },

    onRestartReview() {
      this.initReview();
    },

    // --- 音频发音播放逻辑 ---

    playHistorySentence(e: any) {
      const thai = e.currentTarget.dataset.thai;
      this.setData({
        playingSentenceText: thai,
        playingWordKey: ''
      });
      playThaiTTS(
        thai,
        () => {},
        () => {
          if (this.data.playingSentenceText === thai) {
            this.setData({ playingSentenceText: '' });
          }
        }
      );
    },

    playHistoryWord(e: any) {
      const { word, widx } = e.currentTarget.dataset;
      const key = `${word}-${widx}`;
      
      this.setData({
        playingWordKey: key,
        playingSentenceText: ''
      });

      playThaiTTS(
        word,
        () => {},
        () => {
          if (this.data.playingWordKey === key) {
            this.setData({ playingWordKey: '' });
          }
        }
      );
    },

    playCardSentence() {
      const card = this.data.currentCard;
      if (!card) return;
      
      this.setData({
        playingSentenceText: card.thai,
        playingWordKey: ''
      });

      playThaiTTS(
        card.thai,
        () => {},
        () => {
          if (this.data.playingSentenceText === card.thai) {
            this.setData({ playingSentenceText: '' });
          }
        }
      );
    },

    playCardWord(e: any) {
      const { word, widx } = e.currentTarget.dataset;
      const key = `${word}-${widx}`;
      
      this.setData({
        playingWordKey: key,
        playingSentenceText: ''
      });

      playThaiTTS(
        word,
        () => {},
        () => {
          if (this.data.playingWordKey === key) {
            this.setData({ playingWordKey: '' });
          }
        }
      );
    },

    preventBubble() {
      // 阻止冒泡
    }
  }
});
