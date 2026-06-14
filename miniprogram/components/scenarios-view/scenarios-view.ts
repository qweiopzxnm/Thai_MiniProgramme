// components/scenarios-view/scenarios-view.ts
import { SCENARIOS, Scenario } from '../../utils/scenarios';
import { segmentThai, SegmentedWord } from '../../utils/segment';
import { playThaiTTS, stopThaiTTS, preFetchGoogleTTS } from '../../utils/tts';
import { getConfig } from '../../utils/config';
import { 
  getHistory, 
  saveHistoryItem, 
  deleteHistoryItem, 
  getUserDict, 
  saveUserWord, 
  deleteUserWord,
  TranslationItem
} from '../../utils/db';

interface CharacterUI {
  id: string;
  name: string;
  role: string;
  avatar: string;
  avatarUrl: string;
  isNarrator: boolean;
}

interface SegmentedWordUI extends SegmentedWord {
  starred: boolean;
}

/**
 * 辅助函数：精简词义（从长的字典释义中截取 1-4 个字，防止单词块撑开变形）
 */
function getShortMeaning(meaning: string): string {
  if (!meaning) return '';
  
  // 常见语气词或功能词的特殊精简映射
  const overrides: Record<string, string> = {
    '男性的礼貌语气词': '礼貌词',
    '女性的礼貌陈述': '礼貌词',
    '女性的礼貌陈述语气词': '礼貌词',
    '女性的礼貌疑问': '疑问词',
    '女性的礼貌疑问语气词': '疑问词',
    '语气缓和词': '语气词',
    '表示“啊/吧/哦/哈”': '语气词',
    '亲昵语气词': '亲昵词',
    '用于句末': '语气词',
    '点击添加注释': '点击添加'
  };

  // 移除英文括号与中文括号内容
  let clean = meaning.replace(/\([^)]*\)/g, '').replace(/（[^）]*）/g, '').trim();
  
  for (const [key, val] of Object.entries(overrides)) {
    if (clean.includes(key)) {
      return val;
    }
  }

  // 截取第一个标点符号或空格前的词语
  const parts = clean.split(/[,，;；、\s]+/);
  let short = parts[0] || '';
  
  if (short.length > 4) {
    short = short.substring(0, 4);
  }
  return short || '生词';
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 允许父级传入属性，若无则使用默认
  },

  /**
   * 组件的初始数据
   */
  data: {
    scenarios: SCENARIOS,
    filteredScenarios: [] as Scenario[],
    selectedCategory: 'all' as 'all' | '生活情景' | '新闻演讲',
    selectedSubCategory: 'all', // 二级子分类，如 '日常衣食'、'出行旅游' 等
    
    // 播放器状态
    activeScenario: null as Scenario | null,
    currentTurnIndex: 0,
    isPlayingAudio: false,
    autoPlay: false,
    lastViewId: '',
    
    // 角色立绘阶段数据
    stageCharacters: [] as CharacterUI[],
    leftRoleId: '',
    rightRoleId: '',
    activeRoleId: '',
    
    // 分词面板
    showBreakdown: false,
    activeTurnText: '',
    segmentedWords: [] as SegmentedWordUI[],
    
    // 收藏状态
    isSentenceStarred: false
  },

  /**
   * 生命周期
   */
  lifetimes: {
    attached() {
      this.filterScenarios();
    },
    detached() {
      this.clearAutoPlayTimer();
      stopThaiTTS();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 过滤显示场景 (支持一级大类 + 二级子类过滤)
     */
    filterScenarios() {
      const { selectedCategory, selectedSubCategory, scenarios } = this.data;
      let filtered = scenarios;

      // 1. 过滤一级大类
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(s => s.category === selectedCategory);

        // 2. 过滤二级子类
        if (selectedSubCategory !== 'all') {
          filtered = filtered.filter(s => s.subCategory === selectedSubCategory);
        }
      }

      this.setData({ filteredScenarios: filtered });
    },

    /**
     * 切换一级分类 Tab
     */
    onSwitchCategory(e: any) {
      const cat = e.currentTarget.dataset.cat as 'all' | '生活情景' | '新闻演讲';
      this.setData({ 
        selectedCategory: cat,
        selectedSubCategory: 'all' // 切换大类时，二级子类重置为 'all'
      }, () => {
        this.filterScenarios();
      });
    },

    /**
     * 切换二级子分类 Pill
     */
    onSwitchSubCategory(e: any) {
      const sub = e.currentTarget.dataset.sub as string;
      this.setData({ selectedSubCategory: sub }, () => {
        this.filterScenarios();
      });
    },

    /**
     * 选择场景，进入剧场播放器
     */
    onSelectScenario(e: any) {
      const id = e.currentTarget.dataset.id;
      const scenario = this.data.scenarios.find(s => s.id === id);
      if (!scenario) return;

      // 深度克隆 scenarios 并预先对其台词进行分词处理，使 bubble 里的分词发音能即时渲染
      const dialoguesWithSegments = scenario.dialogues.map(turn => {
        return {
          ...turn,
          segmentedWords: segmentThai(turn.thai).map(w => {
            return {
              ...w,
              shortMeaning: getShortMeaning(w.meaning)
            };
          })
        };
      });

      const activeScenario = {
        ...scenario,
        dialogues: dialoguesWithSegments
      };

      // 解析角色列表并映射头像 SVG
      const stageCharacters = Object.values(scenario.characters).map(c => {
        let avatarUrl = '/assets/avatars/customer.svg';
        const nameLower = c.avatar.toLowerCase();
        
        if (nameLower.includes('manee')) {
          avatarUrl = '/assets/avatars/manee.svg';
        } else if (nameLower.includes('piti')) {
          avatarUrl = '/assets/avatars/piti.svg';
        } else if (nameLower.includes('narrator')) {
          avatarUrl = '/assets/avatars/narrator.svg';
        } else if (nameLower.includes('customer') || nameLower.includes('passenger') || nameLower.includes('tourist') || nameLower.includes('guest')) {
          avatarUrl = '/assets/avatars/customer.svg';
        } else if (nameLower.includes('waiter') || nameLower.includes('staff') || nameLower.includes('receptionist')) {
          avatarUrl = '/assets/avatars/waiter.svg';
        } else if (nameLower.includes('local')) {
          avatarUrl = '/assets/avatars/local.svg';
        } else if (nameLower.includes('manager')) {
          avatarUrl = '/assets/avatars/manager.svg';
        } else if (nameLower.includes('assistant')) {
          avatarUrl = '/assets/avatars/assistant.svg';
        }
        
        const isNarrator = nameLower.includes('narrator');

        return {
          ...c,
          avatarUrl,
          isNarrator
        };
      });

      const roleIds = Object.keys(scenario.characters);
      const leftRoleId = roleIds[0] || '';
      const rightRoleId = roleIds[1] || '';

      // 异步预下载整场对话的 Google TTS 音频文件到本地缓存，免去播放延迟和国内墙 Google 问题
      const config = getConfig();
      if (config.useGoogleTTS) {
        scenario.dialogues.forEach(turn => {
          preFetchGoogleTTS(turn.thai).catch(err => {
            console.warn('Pre-fetch scenario TTS failed:', err);
          });
        });
      }

      this.setData({
        activeScenario,
        currentTurnIndex: 0,
        isPlayingAudio: false,
        stageCharacters,
        leftRoleId,
        rightRoleId,
        lastViewId: ''
      }, () => {
        this.updateTurnState();
        // 自动播放首句
        this.playCurrentTurn();
      });
    },


    /**
     * 返回列表页
     */
    onBackToList() {
      this.clearAutoPlayTimer();
      stopThaiTTS();
      this.setData({
        activeScenario: null,
        autoPlay: false,
        isPlayingAudio: false
      });
    },

    /**
     * 更新当前句子的状态（角色高亮、气泡聚焦、收藏检测、分词准备）
     */
    updateTurnState() {
      const { activeScenario, currentTurnIndex } = this.data;
      if (!activeScenario) return;

      const turn = activeScenario.dialogues[currentTurnIndex];
      const activeRoleId = turn.roleId;

      // 检查当前句子是否被加入笔记本 (已收藏)
      const history = getHistory();
      const itemId = 'scenario_' + activeScenario.id + '_' + turn.id;
      const isSentenceStarred = history.some(h => h.id === itemId && h.starred);

      this.setData({
        activeRoleId,
        isSentenceStarred,
        lastViewId: `bubble_${turn.id}`
      });
    },

    /**
     * 播放当前台词发音
     */
    playCurrentTurn() {
      const { activeScenario, currentTurnIndex } = this.data;
      if (!activeScenario) return;

      const turn = activeScenario.dialogues[currentTurnIndex];
      
      this.setData({ isPlayingAudio: true });
      
      playThaiTTS(
        turn.thai,
        () => {
          // onStart
          this.setData({ isPlayingAudio: true });
        },
        () => {
          // onEnded
          this.setData({ isPlayingAudio: false });
          // 如果开启了自动播放，则进入下一句延时触发器
          if (this.data.autoPlay) {
            this.triggerAutoPlayNext();
          }
        }
      );
    },

    /**
     * 重听当前句
     */
    onReplayTurn() {
      this.clearAutoPlayTimer();
      this.playCurrentTurn();
    },

    /**
     * 上一句台词
     */
    onPrevTurn() {
      this.clearAutoPlayTimer();
      const { currentTurnIndex } = this.data;
      if (currentTurnIndex > 0) {
        this.setData({
          currentTurnIndex: currentTurnIndex - 1
        }, () => {
          this.updateTurnState();
          this.playCurrentTurn();
        });
      }
    },

    /**
     * 下一句台词
     */
    onNextTurn() {
      this.clearAutoPlayTimer();
      const { activeScenario, currentTurnIndex } = this.data;
      if (!activeScenario) return;

      if (currentTurnIndex < activeScenario.dialogues.length - 1) {
        this.setData({
          currentTurnIndex: currentTurnIndex + 1
        }, () => {
          this.updateTurnState();
          this.playCurrentTurn();
        });
      } else {
        // 已到最后一句，询问或退出
        wx.showModal({
          title: '恭喜完成',
          content: '您已读完全部场景对话/段落。是否返回列表？',
          confirmText: '返回列表',
          cancelText: '再听一遍',
          success: (res) => {
            if (res.confirm) {
              this.onBackToList();
            } else {
              this.setData({ currentTurnIndex: 0 }, () => {
                this.updateTurnState();
                this.playCurrentTurn();
              });
            }
          }
        });
      }
    },

    /**
     * 点击历史对话气泡直接跳转并播放
     */
    onTapTurn(e: any) {
      this.clearAutoPlayTimer();
      const index = e.currentTarget.dataset.index as number;
      if (index === this.data.currentTurnIndex) {
        // 已经是当前行，相当于重播
        this.playCurrentTurn();
      } else {
        this.setData({
          currentTurnIndex: index
        }, () => {
          this.updateTurnState();
          this.playCurrentTurn();
        });
      }
    },

    /**
     * 自动播放开关切换
     */
    onToggleAutoPlay(e: any) {
      const autoPlay = e.detail.value;
      this.setData({ autoPlay }, () => {
        if (autoPlay && !this.data.isPlayingAudio) {
          // 如果处于空闲，直接播当前句
          this.playCurrentTurn();
        } else if (!autoPlay) {
          this.clearAutoPlayTimer();
        }
      });
    },

    /**
     * 触发自动播放下一句的延时器
     */
    triggerAutoPlayNext() {
      this.clearAutoPlayTimer();
      const { activeScenario, currentTurnIndex } = this.data;
      if (!activeScenario) return;

      // 如果未播放到最后一句，则 1.5 秒后跳到下一句
      if (currentTurnIndex < activeScenario.dialogues.length - 1) {
        (this as any).autoPlayTimerId = setTimeout(() => {
          this.setData({
            currentTurnIndex: this.data.currentTurnIndex + 1
          }, () => {
            this.updateTurnState();
            this.playCurrentTurn();
          });
        }, 1500) as unknown as number;
      } else {
        // 播完了，重设自动播放
        this.setData({ autoPlay: false });
        wx.showToast({
          title: '内容播完啦 🎉',
          icon: 'success'
        });
      }
    },

    /**
     * 清除自动播放定时器
     */
    clearAutoPlayTimer() {
      if ((this as any).autoPlayTimerId) {
        clearTimeout((this as any).autoPlayTimerId);
        (this as any).autoPlayTimerId = null;
      }
    },

    /**
     * 收藏/存当前句子入笔记本
     */
    onToggleStarSentence() {
      const { activeScenario, currentTurnIndex, isSentenceStarred } = this.data;
      if (!activeScenario) return;

      const turn = activeScenario.dialogues[currentTurnIndex];
      const itemId = 'scenario_' + activeScenario.id + '_' + turn.id;

      if (isSentenceStarred) {
        deleteHistoryItem(itemId);
        this.setData({ isSentenceStarred: false });
        wx.showToast({
          title: '已取消收藏',
          icon: 'success'
        });
      } else {
        // 词汇拆解保存入 history 结构以支持复习
        const segmented = segmentThai(turn.thai);
        const words = segmented.map(w => ({
          word: w.word,
          meaning: w.meaning,
          phonetic: w.phonetic,
          isCustom: w.isCustom
        }));

        const item: TranslationItem = {
          id: itemId,
          chinese: turn.chinese,
          thai: turn.thai,
          words,
          createdAt: Date.now(),
          starred: true,
          mastered: false,
          wrongCount: 0,
          reviewCount: 0
        };

        saveHistoryItem(item);
        this.setData({ isSentenceStarred: true });
        wx.showToast({
          title: '已存入笔记本',
          icon: 'success'
        });
      }

      // 触发数据更新广播
      this.triggerEvent('historychange');
    },

    /**
     * 弹出当前激活行的词汇拆解面板
     */
    onOpenBreakdown() {
      const { activeScenario, currentTurnIndex } = this.data;
      if (!activeScenario) return;
      this.openBreakdownForIndex(currentTurnIndex);
    },

    /**
     * 点击气泡下方的“查词拆解”时，直接定位到该行并弹出分词拆解面板
     */
    onOpenBreakdownForIndex(e: any) {
      const index = e.currentTarget.dataset.index as number;
      this.openBreakdownForIndex(index);
    },

    /**
     * 核心分词展示实现
     */
    openBreakdownForIndex(index: number) {
      const { activeScenario } = this.data;
      if (!activeScenario) return;

      const turn = activeScenario.dialogues[index];
      if (!turn) return;

      // 分词
      const segmented = segmentThai(turn.thai);
      const userDict = getUserDict();
      
      // 检查每个分词的收藏状态
      const segmentedWords: SegmentedWordUI[] = segmented.map(w => {
        return {
          ...w,
          starred: !!userDict[w.word]
        };
      });

      // 同步当前播放行的状态，并显示底板
      this.setData({
        currentTurnIndex: index
      }, () => {
        this.updateTurnState();
        this.setData({
          activeTurnText: turn.thai,
          segmentedWords,
          showBreakdown: true
        });
      });
    },

    /**
     * 关闭拆解面板
     */
    onCloseBreakdown() {
      this.setData({ showBreakdown: false });
    },

    /**
     * 播放单字发音
     */
    onPlayWord(e: any) {
      const word = e.currentTarget.dataset.word as string;
      playThaiTTS(word);
    },

    /**
     * 直接在气泡中点击单词进行发音并弹窗提示翻译
     */
    onPlayWordDirect(e: any) {
      const { word, meaning } = e.currentTarget.dataset;
      if (!word) return;
      playThaiTTS(word);
      wx.showToast({
        title: `${word}: ${meaning || '点击拆解添加注释'}`,
        icon: 'none',
        duration: 2000
      });
    },


    /**
     * 收藏/取消收藏单字
     */
    onToggleStarWord(e: any) {
      const item = e.currentTarget.dataset.item as SegmentedWordUI;
      const { word, phonetic, meaning, starred } = item;
      
      if (starred) {
        deleteUserWord(word);
        wx.showToast({
          title: '已移除生词',
          icon: 'success'
        });
      } else {
        saveUserWord(word, phonetic || '', meaning || '生词');
        wx.showToast({
          title: '已加人生词库',
          icon: 'success'
        });
      }

      // 刷新当前分词列表星号状态
      const userDict = getUserDict();
      const updatedWords = this.data.segmentedWords.map(w => {
        return {
          ...w,
          starred: !!userDict[w.word]
        };
      });

      this.setData({ segmentedWords: updatedWords });
      
      // 触发数据更新广播
      this.triggerEvent('historychange');
    },

    /**
     * 阻止微信冒泡的辅助空函数
     */
    noBubble() {
      // no-op
    }
  }
});
