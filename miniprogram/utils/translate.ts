// utils/translate.ts

// --- Preset Examples for Offline/Fallback Testing ---
const PRESET_TRANSLATIONS: Record<string, string> = {
  '客人提供的要求是，把成本做到最小，你知道我们如何做吗，谁会负责这个事情':
    'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้',
  '客人提供的要求是，把成本做到最小，你知道我们如何做吗，谁会负责这个事情。':
    'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้',
  '你好': 'สวัสดีครับ',
  '你好。': 'สวัสดีครับ',
  '谢谢': 'ขอบคุณครับ',
  '谢谢。': 'ขอบคุณครับ',
  '这个多少钱': 'อันนี้เท่าไหร่',
  '这个多少钱？': 'อันนี้เท่าไหร่',
  '太贵了，便宜点可以吗': 'แพงเกินไป ลดหน่อยได้ไหม',
  '太贵了，便宜点可以吗？': 'แพงเกินไป ลดหน่อยได้ไหม',
  '去机场怎么走': 'ไปสนามบินอย่างไร',
  '去机场怎么走？': 'ไปสนามบินอย่างไร',
  '厕所在哪里': 'ห้องน้ำอยู่ที่ไหน',
  '厕所在哪里？': 'ห้องน้ำอยู่ที่ไหน',
  '泰餐很好吃': 'อาหารไทยอร่อยมาก',
  '泰餐很好吃。': 'อาหารไทยอร่อยมาก',
  '没关系': 'ไม่เป็นไร',
  '没关系。': 'ไม่เป็นไร',
  '对不起': 'ขอโทษครับ',
  '对不起。': 'ขอโทษครับ',
  '等一下': 'รอสักครู่ครับ',
  '等一下。': 'รอสักครู่ครับ',
  '你要去哪里': 'คุณจะไปไหนครับ',
  '你要去哪里？': 'คุณจะไปไหนครับ',
  '我是中国人': 'ฉันเป็นคนจีน',
  '我是中国人。': 'ฉันเป็นคนจีน',
  '你会说汉语吗': 'คุณพูดภาษาจีนได้ไหมครับ',
  '你会说汉语吗？': 'คุณพูดภาษาจีนได้ไหมครับ',
  '我不会说泰语': 'ฉันพูดภาษาไทยไม่ได้',
  '我不会说泰语。': 'ฉันพูดภาษาไทยไม่ได้',
  '我想去这里': 'อยากไปที่นี่ครับ',
  '我想去这里。': 'อยากไปที่นี่ครับ',
  '请慢点说': 'พูดช้าๆ หน่อยครับ',
  '请慢点说。': 'พูดช้าๆ หน่อยครับ',
  '再见': 'ลาก่อนครับ',
  '再见。': 'ลาก่อนครับ',
  '太好了': 'ดีมากเลยครับ',
  '太好了！': 'ดีมากเลยครับ',
  '真的吗': 'จริงเหรอครับ',
  '真的吗？': 'จริงเหรอครับ',
  '好的': 'ตกลงครับ',
  '好的。': 'ตกลงครับ',
  '现在几点': 'ตอนนี้กี่โมงแล้วครับ',
  '现在几点？': 'ตอนนี้กี่โมงแล้วครับ',
  '我不吃辣': 'ไม่กินเผ็ดครับ',
  '我不吃辣。': 'ไม่กินเผ็ดครับ'
};

export function translateChineseToThai(text: string): Promise<string> {
  const trimmedText = text.trim();
  
  // 辅助函数：去除所有空格和标点符号，进行模糊归一化比对
  const normalize = (s: string) => s.replace(/[\s\p{P}]/gu, '');
  const normalizedInput = normalize(trimmedText);

  // 1. 优先模糊匹配预设例句
  for (const [key, value] of Object.entries(PRESET_TRANSLATIONS)) {
    if (normalize(key) === normalizedInput) {
      return Promise.resolve(value);
    }
  }

  return translateViaVercel(trimmedText, 'zh-CN', 'th');
}

/**
 * 免费/零配置在线翻译接口（走 Vercel 代理的谷歌翻译服务）
 */
function translateViaVercel(text: string, from: string, to: string): Promise<string> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://www.barryapp.xyz/api/translate',
      data: {
        text: text,
        from: from,
        to: to
      },
      method: 'GET',
      success: (res) => {
        const data = res.data as any;
        if (data && data.translation) {
          resolve(data.translation);
        } else {
          reject(new Error('翻译接口返回数据格式错误'));
        }
      },
      fail: (err) => {
        console.error('Vercel Translate request failed:', err);
        reject(err);
      }
    });
  });
}

/**
 * 将 ISO 11940 罗马音标转换为易读的 RTGS 发音拼写
 */
export function convertIsoToReadable(iso: string): string {
  if (!iso) return '';
  let s = iso.toLowerCase();
  
  // 替换字母组合
  s = s.replace(/k̄h/g, 'kh');
  s = s.replace(/c̄h/g, 'ch');
  s = s.replace(/p̄h/g, 'ph');
  s = s.replace(/t̄h/g, 'th');
  s = s.replace(/f̄/g, 'f');
  s = s.replace(/s̄/g, 's');
  s = s.replace(/h̄/g, ''); // 弱化/静音高音标记
  s = s.replace(/d̄/g, 'd');
  s = s.replace(/b̄/g, 'b');
  s = s.replace(/p̄/g, 'ph');
  
  s = s.replace(/c̣h/g, 'ch');
  s = s.replace(/ṭh/g, 'th');
  s = s.replace(/ṇ/g, 'n');
  s = s.replace(/ḷ/g, 'l');
  s = s.replace(/ṭ/g, 't');
  s = s.replace(/p̣/g, 'ph');
  s = s.replace(/ṣ/g, 's');
  s = s.replace(/ñ/g, 'y');
  
  // 元音
  s = s.replace(/ụ̄/g, 'ue');
  s = s.replace(/ụ/g, 'ue');
  s = s.replace(/ạ/g, 'a');
  s = s.replace(/ā/g, 'aa');
  s = s.replace(/ī/g, 'ii');
  s = s.replace(/ū/g, 'uu');
  s = s.replace(/x/g, 'o'); // อ 作为元音时
  
  // 去除其他音调符号
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  s = s.replace(/iy/g, 'ia');
  s = s.replace(/ey/g, 'ei');
  s = s.replace(/o-([a-z])/g, 'o$1');
  s = s.replace(/c/g, 'ch'); // จ -> ch
  
  return s.trim();
}

/**
 * 在后台尝试查询生词的释义（使用 Vercel 翻译接口）
 */
export function lookupUnknownWord(word: string): Promise<{ phonetic: string; meaning: string }> {
  return translateViaVercel(word, 'th', 'zh-CN')
    .then((translation) => {
      return {
        phonetic: '', // 谷歌接口这里只翻译释义，音标为空
        meaning: translation.trim()
      };
    });
}

/**
 * 自动调用 Vercel 翻译将泰语整句翻译为中文
 */
export function translateThaiToChinese(thaiText: string): Promise<string> {
  return translateViaVercel(thaiText, 'th', 'zh-CN');
}
