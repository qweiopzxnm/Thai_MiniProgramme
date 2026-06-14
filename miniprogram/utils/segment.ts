// utils/segment.ts
import { lookupWord } from './dict';
import { getUserDict } from './db';
import { BUILTIN_DICT } from './dict';

export interface SegmentedWord {
  word: string;
  phonetic: string;
  meaning: string;
  isCustom: boolean; // 是否是自定义词汇或临时添加的词
  isUnknown: boolean; // 是否是未识别词
  shortMeaning?: string; // 精简版中文释义，用于气泡直观展示
}

/**
 * 获取所有字典词汇列表（按长度降序排列）
 */
function getSortedDictWords(): string[] {
  const builtinKeys = Object.keys(BUILTIN_DICT);
  const userDict = getUserDict();
  const userKeys = Object.keys(userDict);
  
  // 合并并去重
  const allKeys = Array.from(new Set([...builtinKeys, ...userKeys]));
  
  // 长度降序排序
  return allKeys.sort((a, b) => b.length - a.length);
}

/**
 * 使用 Intl.Segmenter 对未知分段进行精细切分
 */
function segmentUnknownText(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  
  if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
    try {
      const segmenter = new (Intl as any).Segmenter('th', { granularity: 'word' });
      const segments = segmenter.segment(trimmed);
      const result: string[] = [];
      for (const { segment } of segments) {
        const word = segment.trim();
        if (word && !/[\s\p{P}]/u.test(word)) { // 过滤空格和标点
          result.push(word);
        }
      }
      return result;
    } catch (e) {
      console.error('Intl.Segmenter failed:', e);
    }
  }
  
  // 兜底：如果不支持 Intl.Segmenter，或者出错，按泰文字符或空格简单拆分
  return trimmed.split('').filter(char => char.trim() !== '');
}

/**
 * 泰语分词主函数 (系统分词器 Intl.Segmenter + 字典合并还原 + 传统最大匹配兜底)
 */
export function segmentThai(text: string): SegmentedWord[] {
  if (!text) return [];

  // 0. 预处理：给数字前后加上空格，防止粘连
  const cleanedText = text.replace(/(\d+)/g, ' $1 ');

  const dictWords = getSortedDictWords();
  const result: SegmentedWord[] = [];
  let i = 0;
  const len = cleanedText.length;
  let unknownBuffer = '';

  const flushUnknownBuffer = () => {
    if (unknownBuffer.length > 0) {
      const subWords = segmentUnknownText(unknownBuffer);
      for (const w of subWords) {
        const info = lookupWord(w);
        if (info) {
          result.push({
            word: w,
            phonetic: info.phonetic,
            meaning: info.meaning,
            isCustom: !BUILTIN_DICT[w],
            isUnknown: false,
          });
        } else if (/^\d+$/.test(w)) {
          result.push({
            word: w,
            phonetic: '',
            meaning: w,
            isCustom: false,
            isUnknown: false,
          });
        } else if (/^[A-Za-z0-9]+$/.test(w)) {
          result.push({
            word: w,
            phonetic: '',
            meaning: w,
            isCustom: false,
            isUnknown: false,
          });
        } else {
          result.push({
            word: w,
            phonetic: '',
            meaning: '点击添加注释',
            isCustom: false,
            isUnknown: true,
          });
        }
      }
      unknownBuffer = '';
    }
  };

  while (i < len) {
    let matched = false;

    for (const dictWord of dictWords) {
      const wordLen = dictWord.length;
      if (i + wordLen <= len && cleanedText.substring(i, i + wordLen) === dictWord) {
        flushUnknownBuffer();

        const info = lookupWord(dictWord);
        result.push({
          word: dictWord,
          phonetic: info ? info.phonetic : '',
          meaning: info ? info.meaning : '未知',
          isCustom: !BUILTIN_DICT[dictWord],
          isUnknown: false,
        });

        i += wordLen;
        matched = true;
        break;
      }
    }

    if (!matched) {
      unknownBuffer += cleanedText[i];
      i++;
    }
  }

  flushUnknownBuffer();
  return result;
}
