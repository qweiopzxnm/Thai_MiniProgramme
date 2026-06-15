// utils/db.ts

export interface WordBreakdown {
  word: string;
  meaning: string;
  phonetic: string;
  isCustom?: boolean; // If edited/added by user
}

export interface TranslationItem {
  id: string;
  chinese: string;
  thai: string;
  words: WordBreakdown[];
  createdAt: number;
  starred: boolean;
  mastered: boolean;
  wrongCount: number;
  reviewCount: number;
  source?: 'translator' | 'scenario';
  scenarioTitle?: string;
}

export interface UserDictWord {
  word: string;
  meaning: string;
  phonetic: string;
  createdAt: number;
}

const HISTORY_KEY = 'thai_learner_history';
const USER_DICT_KEY = 'thai_learner_user_dict';

// --- History API ---

export function getHistory(): TranslationItem[] {
  try {
    const history: TranslationItem[] = wx.getStorageSync(HISTORY_KEY) || [];
    
    // 动态去重，防止存储中已存在历史遗留重复项
    const seen = new Set<string>();
    const deduped: TranslationItem[] = [];
    let hasDuplicates = false;
    
    for (const h of history) {
      const key = h.chinese.trim();
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(h);
      } else {
        hasDuplicates = true;
      }
    }
    
    // 如果有重复项被过滤，自动写回本地存储，净化数据库
    if (hasDuplicates) {
      wx.setStorageSync(HISTORY_KEY, deduped);
    }
    
    return deduped;
  } catch (e) {
    console.error('Failed to get history:', e);
    return [];
  }
}

export function saveHistoryItem(item: TranslationItem): void {
  try {
    const history = getHistory();
    // 根据中文内容进行查重 (去除前后空格后比较)
    const index = history.findIndex((h) => h.chinese.trim() === item.chinese.trim());
    
    if (index > -1) {
      // 存在重复项：用新翻译结果和分词覆盖它，但继承用户学习进度（收藏、是否掌握、错题次数等）
      const existing = history[index];
      const mergedItem: TranslationItem = {
        ...item,
        id: item.id, // 使用新翻译生成的 ID，保持与 translate-view 里的 currentHistoryId 同步
        starred: existing.starred,
        mastered: existing.mastered,
        wrongCount: existing.wrongCount,
        reviewCount: existing.reviewCount
      };
      
      // 先将旧的移出，再放入最顶部（置顶最新翻译）
      history.splice(index, 1);
      history.unshift(mergedItem);
    } else {
      // 全新项，直接插入最顶部
      history.unshift(item);
    }
    wx.setStorageSync(HISTORY_KEY, history);
  } catch (e) {
    console.error('Failed to save history item:', e);
  }
}

export function deleteHistoryItem(id: string): void {
  try {
    const history = getHistory();
    const filtered = history.filter((h) => h.id !== id);
    wx.setStorageSync(HISTORY_KEY, filtered);
  } catch (e) {
    console.error('Failed to delete history item:', e);
  }
}

export function clearHistory(): void {
  try {
    wx.setStorageSync(HISTORY_KEY, []);
  } catch (e) {
    console.error('Failed to clear history:', e);
  }
}

// --- User Dictionary API ---

export function getUserDict(): Record<string, UserDictWord> {
  try {
    return wx.getStorageSync(USER_DICT_KEY) || {};
  } catch (e) {
    console.error('Failed to get user dict:', e);
    return {};
  }
}

export function saveUserWord(word: string, phonetic: string, meaning: string): void {
  try {
    const dict = getUserDict();
    dict[word] = {
      word,
      phonetic,
      meaning,
      createdAt: Date.now(),
    };
    wx.setStorageSync(USER_DICT_KEY, dict);
  } catch (e) {
    console.error('Failed to save user word:', e);
  }
}

export function deleteUserWord(word: string): void {
  try {
    const dict = getUserDict();
    delete dict[word];
    wx.setStorageSync(USER_DICT_KEY, dict);
  } catch (e) {
    console.error('Failed to delete user word:', e);
  }
}

export function clearUserDict(): void {
  try {
    wx.setStorageSync(USER_DICT_KEY, {});
  } catch (e) {
    console.error('Failed to clear user dict:', e);
  }
}
