import { translateChineseToThai, lookupUnknownWord } from '../../utils/translate';
import { segmentThai, SegmentedWord } from '../../utils/segment';
import { saveHistoryItem, saveUserWord, getHistory } from '../../utils/db';
import { playThaiTTS, stopThaiTTS } from '../../utils/tts';
import { getConfig, setConfig } from '../../utils/config';

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    chineseText: '',
    loading: false,
    originalChinese: '',
    translationResult: '',
    segmentedWords: [] as SegmentedWord[],
    currentHistoryId: '',
    
    // 播放状态管理
    playingSentence: false,
    playingIndex: -1,
    speechRate: 1.0,

    // 编辑弹窗管理
    showEditModal: false,
    editWordData: {
      word: '',
      phonetic: '',
      meaning: '',
      index: -1
    },


  },

  lifetimes: {
    attached() {
      this.loadSpeechRate();
    },
    detached() {
      stopThaiTTS();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadSpeechRate() {
      const config = getConfig();
      this.setData({
        speechRate: config.speechRate || 1.0
      });
    },

    onChangeRate(e: any) {
      const rate = parseFloat(e.currentTarget.dataset.rate);
      if (rate === this.data.speechRate) return;

      setConfig({ speechRate: rate });
      this.setData({ speechRate: rate });

      wx.showToast({
        title: `语速已设为 ${rate}x`,
        icon: 'success'
      });
    },

    onInput(e: any) {
      this.setData({
        chineseText: e.detail.value
      });
    },

    onClear() {
      this.setData({
        chineseText: '',
        originalChinese: '',
        translationResult: '',
        segmentedWords: [],
        currentHistoryId: ''
      });
      stopThaiTTS();
    },



    /**
     * 翻译并切分单词
     */
    onTranslate() {
      const text = this.data.chineseText.trim();
      if (!text) {
        wx.showToast({
          title: '请输入中文内容',
          icon: 'none'
        });
        return;
      }

      this.setData({ loading: true });
      stopThaiTTS();

      translateChineseToThai(text)
        .then((thaiTranslation) => {
          // 对翻译的泰语文本进行本地最大匹配分词
          const words = segmentThai(thaiTranslation);
          const historyId = Date.now().toString();

          // 保存翻译历史记录
          const historyItem = {
            id: historyId,
            chinese: text,
            thai: thaiTranslation,
            words: words,
            createdAt: Date.now(),
            starred: false,
            mastered: false,
            wrongCount: 0,
            reviewCount: 0
          };
          saveHistoryItem(historyItem);

          this.setData({
            originalChinese: text,
            translationResult: thaiTranslation,
            segmentedWords: words,
            currentHistoryId: historyId,
            loading: false
          });

          // 触发父级页面事件，以便其他 Tab（如复习页）能感知到历史记录的刷新
          this.triggerEvent('historychange');

          wx.showToast({
            title: '翻译并录入成功',
            icon: 'success',
            duration: 1000
          });

          // 后台静默查询所有未知生词
          const unknownWords = words.filter(w => w.isUnknown);
          if (unknownWords.length > 0) {
            let hasUpdates = false;
            const promises = unknownWords.map(unknownWord => {
              return lookupUnknownWord(unknownWord.word)
                .then(res => {
                  // 更新分词信息
                  const target = words.find(w => w.word === unknownWord.word);
                  if (target) {
                    target.meaning = res.meaning;
                    target.phonetic = res.phonetic;
                    target.isUnknown = false;
                    hasUpdates = true;
                    // 自动保存至本地自定义词库
                    saveUserWord(target.word, target.phonetic, target.meaning);
                  }
                })
                .catch(err => {
                  console.error('后台词汇补全失败:', unknownWord.word, err);
                });
            });

            Promise.all(promises).then(() => {
              if (hasUpdates) {
                // 更新页面上的显示
                this.setData({
                  segmentedWords: words
                });
                // 更新当前这条历史记录的缓存数据
                const updatedHistoryItem = {
                  ...historyItem,
                  words: words
                };
                saveHistoryItem(updatedHistoryItem);
                this.triggerEvent('historychange');
              }
            });
          }
        })
        .catch((err) => {
          this.setData({ loading: false });
          wx.showModal({
            title: '翻译失败',
            content: err.message || '网络请求错误，请重试。如开启了百度翻译引擎，请检查设置中的 Key 是否配置正确。',
            showCancel: false
          });
        });
    },

    /**
     * 播放整句发音
     */
    playSentence() {
      if (!this.data.translationResult) return;
      
      this.setData({ 
        playingSentence: true,
        playingIndex: -1
      });
      
      playThaiTTS(
        this.data.translationResult,
        () => {},
        () => {
          this.setData({ playingSentence: false });
        }
      );
    },

    /**
     * 播放单个单词发音
     */
    playWord(e: any) {
      const { word, index } = e.currentTarget.dataset;
      
      this.setData({ 
        playingIndex: index,
        playingSentence: false
      });
      
      playThaiTTS(
        word,
        () => {},
        () => {
          // 只有当播放的还是当前单词时才清除状态，防止快速切换播放时的状态错乱
          if (this.data.playingIndex === index) {
            this.setData({ playingIndex: -1 });
          }
        }
      );
    },

    /**
     * 开启编辑单词弹窗
     */
    onStartEditWord(e: any) {
      const { word, index } = e.currentTarget.dataset;
      const wordInfo = this.data.segmentedWords[index];
      
      this.setData({
        showEditModal: true,
        editWordData: {
          word: word,
          phonetic: wordInfo.phonetic || '',
          meaning: wordInfo.meaning === '点击添加注释' ? '' : wordInfo.meaning,
          index: index
        }
      });
    },

    onEditPhonetic(e: any) {
      this.setData({
        'editWordData.phonetic': e.detail.value
      });
    },

    onEditMeaning(e: any) {
      this.setData({
        'editWordData.meaning': e.detail.value
      });
    },

    onCancelEditWord() {
      this.setData({
        showEditModal: false
      });
    },

    /**
     * 保存用户编辑的单词
     */
    onSaveWord() {
      const { word, phonetic, meaning } = this.data.editWordData;
      if (!phonetic.trim() || !meaning.trim()) {
        wx.showToast({
          title: '请填写拼音和释义',
          icon: 'none'
        });
        return;
      }

      // 1. 保存到本地自定义词典库
      saveUserWord(word, phonetic.trim(), meaning.trim());

      // 2. 重新对当前的泰语结果进行分词，以便立刻在页面上呈现最新释义与读音
      const updatedWords = segmentThai(this.data.translationResult);
      
      this.setData({
        segmentedWords: updatedWords,
        showEditModal: false
      });

      // 3. 同时更新当前这笔历史记录中的单词分拆缓存，保持数据同步
      const historyId = this.data.currentHistoryId;
      if (historyId) {
        const historyList = getHistory();
        const historyItem = historyList.find(h => h.id === historyId);
        if (historyItem) {
          historyItem.words = updatedWords;
          saveHistoryItem(historyItem);
          this.triggerEvent('historychange');
        }
      }

      wx.showToast({
        title: '单词保存成功',
        icon: 'success'
      });
    },

    preventBubble() {
      // 阻止事件冒泡与滚动穿透
    }
  }
});
