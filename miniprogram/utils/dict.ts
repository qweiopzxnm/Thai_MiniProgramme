// utils/dict.ts

export interface DictEntry {
  phonetic: string;
  meaning: string;
}

export const BUILTIN_DICT: { [key: string]: DictEntry } = {
  "ngด้วยบี": {
    "phonetic": "ng-duai-bii",
    "meaning": "D 也是 B"
  },
  "กฎ": {
    "phonetic": "gòt",
    "meaning": "规则"
  },
  "กฎหมาย": {
    "phonetic": "gòt-mǎai",
    "meaning": "法律"
  },
  "กด": {
    "phonetic": "got",
    "meaning": "按"
  },
  "กติกา": {
    "phonetic": "ga-dti-gaa",
    "meaning": "规则"
  },
  "กต์": {
    "phonetic": "gót",
    "meaning": "什么？"
  },
  "กม": {
    "phonetic": "ko-mo",
    "meaning": "公里"
  },
  "กรกฎาคม": {
    "phonetic": "krkdaakhm",
    "meaning": "七月"
  },
  "กรม": {
    "phonetic": "grom",
    "meaning": "部门"
  },
  "กรรมการ": {
    "phonetic": "gam-ma-gaan",
    "meaning": "导演"
  },
  "กรรไกร": {
    "phonetic": "krrkir",
    "meaning": "剪刀"
  },
  "กรอก": {
    "phonetic": "grɔ̀ɔk",
    "meaning": "填写"
  },
  "กรอบ": {
    "phonetic": "grɔɔp",
    "meaning": "酥脆 / 框架 / 边框"
  },
  "กระจาย": {
    "phonetic": "gra-jaai",
    "meaning": "传播"
  },
  "กระซิบ": {
    "phonetic": "krasib",
    "meaning": "耳语"
  },
  "กระดาษ": {
    "phonetic": "gra-daat",
    "meaning": "纸"
  },
  "กระดิ่ง": {
    "phonetic": "gra-dìng",
    "meaning": "钟"
  },
  "กระดูก": {
    "phonetic": "krà-dùuk",
    "meaning": "骨头"
  },
  "กระดูกหมู": {
    "phonetic": "krà-dùuk-mǔu",
    "meaning": "猪骨"
  },
  "กระตุ้น": {
    "phonetic": "gra-dtuun",
    "meaning": "刺激/促使"
  },
  "กระทบ": {
    "phonetic": "gra-thop",
    "meaning": "影响"
  },
  "กระทรวง": {
    "phonetic": "grà-suang",
    "meaning": "部/部门（政府）"
  },
  "กระทะ": {
    "phonetic": "krà-thá",
    "meaning": "锅/煎锅"
  },
  "กระบอก": {
    "phonetic": "krà-bɔ̀ɔk",
    "meaning": "筒/管子/量词"
  },
  "กระบอกน้ำ": {
    "phonetic": "krà-bɔ̀ɔk-nám",
    "meaning": "水壶/水杯"
  },
  "กระปุก": {
    "phonetic": "grà-bpùk",
    "meaning": "碗"
  },
  "กระสุน": {
    "phonetic": "krasun",
    "meaning": "弹药"
  },
  "กระเป๋า": {
    "phonetic": "krapeaa",
    "meaning": "包"
  },
  "กระแส": {
    "phonetic": "gra-sae",
    "meaning": "流动"
  },
  "กระแอม": {
    "phonetic": "kraoaem",
    "meaning": "清清喉咙"
  },
  "กระโดด": {
    "phonetic": "kradod",
    "meaning": "跳"
  },
  "กระโปรง": {
    "phonetic": "grà-bproong",
    "meaning": "裙子"
  },
  "กระโปรงผ้าซิ่น": {
    "phonetic": "gra-bproong-phaa-sîn",
    "meaning": "传统泰式裙"
  },
  "กรัม": {
    "phonetic": "kram",
    "meaning": "克"
  },
  "กราเซีย": {
    "phonetic": "kraa-seia",
    "meaning": "格拉齐亚"
  },
  "กริฟฟิน": {
    "phonetic": "kriffin",
    "meaning": "格里芬"
  },
  "กรีน": {
    "phonetic": "kriin",
    "meaning": "绿色的"
  },
  "กรุง": {
    "phonetic": "grung",
    "meaning": "首都"
  },
  "กรุงเทพ": {
    "phonetic": "grung-theep",
    "meaning": "曼谷"
  },
  "กรุงเทพคริสเตียน": {
    "phonetic": "grung-theep-khrít-dtian",
    "meaning": "曼谷基督教"
  },
  "กรุงเทพมหานคร": {
    "phonetic": "grung-theep-ma-haa-na-khɔɔn",
    "meaning": "曼谷"
  },
  "กรุงเทพฯ": {
    "phonetic": "grung-thêep",
    "meaning": "曼谷"
  },
  "กรุณา": {
    "phonetic": "krunaa",
    "meaning": "请"
  },
  "กรุ๊ป": {
    "phonetic": "krup",
    "meaning": "团体"
  },
  "กลมกล่อม": {
    "phonetic": "glom-glɔ̀m",
    "meaning": "醇厚"
  },
  "กลอเรีย": {
    "phonetic": "kl-oreia",
    "meaning": "格洛丽亚"
  },
  "กลับ": {
    "phonetic": "klab",
    "meaning": "返回"
  },
  "กลับมา": {
    "phonetic": "klab-maa",
    "meaning": "回来"
  },
  "กลับไป": {
    "phonetic": "klab-pi",
    "meaning": "回去"
  },
  "กลัว": {
    "phonetic": "klaw",
    "meaning": "害怕的"
  },
  "กลาง": {
    "phonetic": "glaang",
    "meaning": "中/中等"
  },
  "กลาย": {
    "phonetic": "glaai",
    "meaning": "变得"
  },
  "กลืน": {
    "phonetic": "glʉʉn",
    "meaning": "吞"
  },
  "กลุ่ม": {
    "phonetic": "klum",
    "meaning": "团体"
  },
  "กล่อง": {
    "phonetic": "klong",
    "meaning": "盒子"
  },
  "กล่าว": {
    "phonetic": "glàaw",
    "meaning": "说"
  },
  "กล้วย": {
    "phonetic": "klûay",
    "meaning": "香蕉"
  },
  "กล้อง": {
    "phonetic": "klong",
    "meaning": "相机"
  },
  "กล้าหาญ": {
    "phonetic": "klaa-aay",
    "meaning": "勇敢的"
  },
  "กว่า": {
    "phonetic": "kwaa",
    "meaning": "比"
  },
  "กว้าง": {
    "phonetic": "gwâang",
    "meaning": "宽的"
  },
  "กสิกร": {
    "phonetic": "gà-sì-gɔɔn",
    "meaning": "泰华农民"
  },
  "กอ": {
    "phonetic": "gɔɔ",
    "meaning": "丛"
  },
  "กอง": {
    "phonetic": "gɔɔng",
    "meaning": "桩"
  },
  "กองทัพ": {
    "phonetic": "kongthaph",
    "meaning": "军队"
  },
  "กอน": {
    "phonetic": "kon",
    "meaning": "贡"
  },
  "กอนวุค": {
    "phonetic": "ko-nwukh",
    "meaning": "枪旭"
  },
  "กอร์ดอน": {
    "phonetic": "kor-don",
    "meaning": "戈登"
  },
  "กะ": {
    "phonetic": "ka",
    "meaning": "转移"
  },
  "กะทิ": {
    "phonetic": "gà-thí",
    "meaning": "椰奶"
  },
  "กะพริบ": {
    "phonetic": "kà-phríp",
    "meaning": "闪烁/眨眼"
  },
  "กะเพรา": {
    "phonetic": "ga-phrao",
    "meaning": "罗勒"
  },
  "กังวล": {
    "phonetic": "gang-won",
    "meaning": "担心"
  },
  "กัน": {
    "phonetic": "kan",
    "meaning": "一起"
  },
  "กันยายน": {
    "phonetic": "kanyaayn",
    "meaning": "九月"
  },
  "กันเถอะ": {
    "phonetic": "kan-theoa",
    "meaning": "我们走吧"
  },
  "กับ": {
    "phonetic": "kab",
    "meaning": "和"
  },
  "กับข้าว": {
    "phonetic": "gàp-khâaw",
    "meaning": "小菜"
  },
  "กับคุณ": {
    "phonetic": "kab-khun",
    "meaning": "与你"
  },
  "กับฉัน": {
    "phonetic": "kab-chhan",
    "meaning": "与我一起"
  },
  "กับนาย": {
    "phonetic": "kab-naay",
    "meaning": "与你"
  },
  "กับผม": {
    "phonetic": "kab-phm",
    "meaning": "与我一起"
  },
  "กับอีก": {
    "phonetic": "kab-oiik",
    "meaning": "与另一个"
  },
  "กับเขา": {
    "phonetic": "kab-kheaa",
    "meaning": "和他在一起"
  },
  "กับเรา": {
    "phonetic": "kab-reaa",
    "meaning": "和我们一起"
  },
  "กับใคร": {
    "phonetic": "kab-khair",
    "meaning": "和谁一起"
  },
  "กัปตัน": {
    "phonetic": "kaptan",
    "meaning": "队长"
  },
  "กัส": {
    "phonetic": "kas",
    "meaning": "格斯"
  },
  "กา": {
    "phonetic": "gaa",
    "meaning": "壶"
  },
  "กางเกง": {
    "phonetic": "gaang-geeng",
    "meaning": "裤子"
  },
  "กางเกงขายาว": {
    "phonetic": "kaaŋ-keeŋ-kǎa-yaao",
    "meaning": "长裤"
  },
  "กางเกงมวยไทย": {
    "phonetic": "gaang-geeng-muai-thai",
    "meaning": "泰拳短裤"
  },
  "กางเกงเลขาเดี่ยว": {
    "phonetic": "gaang-geeng-lee-khaa-diiaw",
    "meaning": "休闲长裤"
  },
  "กาย": {
    "phonetic": "kaay",
    "meaning": "身体"
  },
  "การ": {
    "phonetic": "kaar",
    "meaning": "前缀(动词/形容词名词化) / 事务 / 工作"
  },
  "การจ้าง": {
    "phonetic": "gaan-jaang",
    "meaning": "雇用/招聘"
  },
  "การจ้างบล็อกเกอร์รีวิวสินค้า": {
    "phonetic": "gaan-jaang-blok-gəə-ri-wiu-sin-khaa",
    "meaning": "聘请博主测评"
  },
  "การนำ": {
    "phonetic": "gaan-nam",
    "meaning": "领导"
  },
  "การฝึก": {
    "phonetic": "gaan-fʉ̀k",
    "meaning": "训练"
  },
  "การสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤต": {
    "phonetic": "gaan-saang-khwaam-yʉʉt-yun-thaang-aa-rom-phʉa-rap-mʉʉ-gap-wi-grit",
    "meaning": "情绪韧性抗危机"
  },
  "การส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้า": {
    "phonetic": "gaan-song-ɔɔk-khaaw-niaw-thai-mii-yɔɔt-khaai-tha-lu-bpao",
    "meaning": "糯米出口大涨"
  },
  "การส่งเสริมการขาย通过电子邮件": {
    "phonetic": "gaan-song-səəm-gaan-khaai-phaan-ii-mel",
    "meaning": "邮件营销"
  },
  "การเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้า": {
    "phonetic": "gaan-təəp-dtoo-ut-saa-ha-gam-chin-suan-rot-yon-fai-faa",
    "meaning": "EV零部件增长"
  },
  "การ์ด": {
    "phonetic": "kaard",
    "meaning": "卡片"
  },
  "กาแฟ": {
    "phonetic": "kaafae",
    "meaning": "咖啡"
  },
  "กำกับ": {
    "phonetic": "gam-gap",
    "meaning": "导演"
  },
  "กำลัง": {
    "phonetic": "kalang",
    "meaning": "正在 / 力量"
  },
  "กำลังมา": {
    "phonetic": "kalang-maa",
    "meaning": "未来"
  },
  "กำลังไป": {
    "phonetic": "kalang-pi",
    "meaning": "我要去"
  },
  "กำหนด": {
    "phonetic": "gam-nòt",
    "meaning": "放"
  },
  "กำหนดการ": {
    "phonetic": "kàm-nòt-kaan",
    "meaning": "日程表/计划表"
  },
  "กำแพง": {
    "phonetic": "gam-phaeng",
    "meaning": "墙"
  },
  "กำแพงเพชร": {
    "phonetic": "gam-phaeng-phet",
    "meaning": "甘烹碧"
  },
  "กำไร": {
    "phonetic": "gam-rai",
    "meaning": "利润"
  },
  "กิ": {
    "phonetic": "ki",
    "meaning": "基"
  },
  "กิจกรรม": {
    "phonetic": "gi-ja-gam",
    "meaning": "活动"
  },
  "กิจกรรมจัดแสดงสินค้านอกสถานที่": {
    "phonetic": "gi-ja-gam-jat-sa-daeng-sin-khaa-nɔɔk-sa-thaan-thii",
    "meaning": "线下巡展活动"
  },
  "กิน": {
    "phonetic": "gin",
    "meaning": "吃"
  },
  "กินข้าว": {
    "phonetic": "gin-khâaw",
    "meaning": "吃饭"
  },
  "กินซะ": {
    "phonetic": "kin-sa",
    "meaning": "吃吧"
  },
  "กินสิ": {
    "phonetic": "kin-si",
    "meaning": "吃"
  },
  "กินเลย": {
    "phonetic": "kin-lei",
    "meaning": "现在吃吧"
  },
  "กิล": {
    "phonetic": "kil",
    "meaning": "吉尔"
  },
  "กิโล": {
    "phonetic": "kilo",
    "meaning": "公斤"
  },
  "กิโลกรัม": {
    "phonetic": "gì-loo-gram",
    "meaning": "千克"
  },
  "กิโลเมตร": {
    "phonetic": "gì-loo-mêet",
    "meaning": "公里"
  },
  "กี": {
    "phonetic": "kii",
    "meaning": "基"
  },
  "กีฬา": {
    "phonetic": "gii-laa",
    "meaning": "运动"
  },
  "กี่": {
    "phonetic": "gìi",
    "meaning": "多少"
  },
  "กึม": {
    "phonetic": "kuem",
    "meaning": "格姆"
  },
  "กุญแจ": {
    "phonetic": "kuychae",
    "meaning": "钥匙"
  },
  "กุด": {
    "phonetic": "gùt",
    "meaning": "存根"
  },
  "กุมภาพันธ์": {
    "phonetic": "gum-phaa-phan",
    "meaning": "二月"
  },
  "กุศล": {
    "phonetic": "gu-sǒn",
    "meaning": "慈善事业"
  },
  "กุ้ง": {
    "phonetic": "gung",
    "meaning": "虾"
  },
  "กุ้งสด": {
    "phonetic": "gung-sot",
    "meaning": "鲜虾"
  },
  "กุ๊กจา": {
    "phonetic": "kuk-chaa",
    "meaning": "库克贾"
  },
  "กู": {
    "phonetic": "kuu",
    "meaning": "我"
  },
  "กู้": {
    "phonetic": "gûu",
    "meaning": "恢复"
  },
  "กู้ภัย": {
    "phonetic": "gûu-phai",
    "meaning": "救援"
  },
  "ก็": {
    "phonetic": "gɔ̂ɔ",
    "meaning": "出色地"
  },
  "ก็คือ": {
    "phonetic": "k-khueo",
    "meaning": "那是"
  },
  "ก็จริง": {
    "phonetic": "k-chring",
    "meaning": "这是真的"
  },
  "ก็ดี": {
    "phonetic": "kdii",
    "meaning": "很好"
  },
  "ก็ดีค่ะ": {
    "phonetic": "k-dii-kha",
    "meaning": "很好"
  },
  "ก็ดีนะ": {
    "phonetic": "k-dii-na",
    "meaning": "那挺好的"
  },
  "ก็ดีนี่": {
    "phonetic": "k-dii-nii",
    "meaning": "这很好"
  },
  "ก็ตาม": {
    "phonetic": "gɔ̂ɔ-taam",
    "meaning": "反正"
  },
  "ก็ตามใจ": {
    "phonetic": "ktaam-chai",
    "meaning": "如你所愿"
  },
  "ก็ถูก": {
    "phonetic": "k-thuuk",
    "meaning": "这是正确的"
  },
  "ก็นะ": {
    "phonetic": "kna",
    "meaning": "出色地"
  },
  "ก็พอ": {
    "phonetic": "kpho",
    "meaning": "这就够了"
  },
  "ก็มี": {
    "phonetic": "kmii",
    "meaning": "有"
  },
  "ก็อาจจะ": {
    "phonetic": "k-oaach-cha",
    "meaning": "或许"
  },
  "ก็เพราะ": {
    "phonetic": "k-pheraaa",
    "meaning": "因为"
  },
  "ก็เลย": {
    "phonetic": "k-lei",
    "meaning": "所以"
  },
  "ก็แค่": {
    "phonetic": "k-khae",
    "meaning": "只是"
  },
  "ก็แบบ": {
    "phonetic": "k-baeb",
    "meaning": "就是这样"
  },
  "ก็โอเค": {
    "phonetic": "k-ookhe",
    "meaning": "没关系"
  },
  "ก็ใช่": {
    "phonetic": "k-chhai",
    "meaning": "这是正确的"
  },
  "ก็ใช่นะ": {
    "phonetic": "k-chhai-na",
    "meaning": "这是正确的"
  },
  "ก็ได้": {
    "phonetic": "kdi",
    "meaning": "好的"
  },
  "ก็ได้นะ": {
    "phonetic": "kdi-na",
    "meaning": "好的"
  },
  "ก็ได้ๆ": {
    "phonetic": "k-di-di",
    "meaning": "好的"
  },
  "ก่อน": {
    "phonetic": "kon",
    "meaning": "第一的"
  },
  "ก่อนที่": {
    "phonetic": "kon-thii",
    "meaning": "前"
  },
  "ก่อสร้าง": {
    "phonetic": "gɔ̀ɔ-sâang",
    "meaning": "构造"
  },
  "ก้มลง": {
    "phonetic": "gom-long",
    "meaning": "跪拜"
  },
  "ก้อน": {
    "phonetic": "gɔ̂ɔn",
    "meaning": "块"
  },
  "ก้าว": {
    "phonetic": "kaaw",
    "meaning": "步"
  },
  "ก้าวหน้า": {
    "phonetic": "gâao-naa",
    "meaning": "进步"
  },
  "ก้ได้": {
    "phonetic": "k-di",
    "meaning": "这是可以做到的"
  },
  "ก๊อก": {
    "phonetic": "kok",
    "meaning": "敲"
  },
  "ก๋วยเตี๋ยว": {
    "phonetic": "gǔai-dtǐao",
    "meaning": "面条"
  },
  "ขณะนี้": {
    "phonetic": "khna-nii",
    "meaning": "现在"
  },
  "ขน": {
    "phonetic": "khǒn",
    "meaning": "携带"
  },
  "ขนมปัง": {
    "phonetic": "khnmpang",
    "meaning": "面包"
  },
  "ขนส่ง": {
    "phonetic": "khon-sòng",
    "meaning": "运输"
  },
  "ขนาด": {
    "phonetic": "khnaad",
    "meaning": "尺寸"
  },
  "ขนาดอักษร": {
    "phonetic": "khà-nàat-àk-sɔ̌ɔn",
    "meaning": "字号/字体大小"
  },
  "ขบวน": {
    "phonetic": "khà-buan",
    "meaning": "游行"
  },
  "ขม": {
    "phonetic": "khǒm",
    "meaning": "锋利的"
  },
  "ขยช": {
    "phonetic": "khaw-yaw-chaw",
    "meaning": "京奥"
  },
  "ขยะ": {
    "phonetic": "khya",
    "meaning": "垃圾"
  },
  "ขยาย": {
    "phonetic": "kha-yaai",
    "meaning": "拓展/扩大"
  },
  "ขวด": {
    "phonetic": "khuat",
    "meaning": "瓶子"
  },
  "ขวบ": {
    "phonetic": "khuap",
    "meaning": "岁了"
  },
  "ขวา": {
    "phonetic": "khwaa",
    "meaning": "右 / 右边"
  },
  "ขอ": {
    "phonetic": "kho",
    "meaning": "求 / 请 / 请求"
  },
  "ของ": {
    "phonetic": "khong",
    "meaning": "的"
  },
  "ของกิน": {
    "phonetic": "khɔ̌ɔng-gin",
    "meaning": "食物"
  },
  "ของขวัญ": {
    "phonetic": "khong-khway",
    "meaning": "礼物"
  },
  "ของข้า": {
    "phonetic": "khong-khaa",
    "meaning": "矿"
  },
  "ของคุณ": {
    "phonetic": "khong-khun",
    "meaning": "你的"
  },
  "ของจริง": {
    "phonetic": "khong-chring",
    "meaning": "真实的事情"
  },
  "ของฉัน": {
    "phonetic": "khong-chhan",
    "meaning": "矿"
  },
  "ของนาย": {
    "phonetic": "khong-naay",
    "meaning": "你的"
  },
  "ของผม": {
    "phonetic": "khong-phm",
    "meaning": "这是我的"
  },
  "ของมัน": {
    "phonetic": "khong-man",
    "meaning": "它是"
  },
  "ของเขา": {
    "phonetic": "khong-kheaa",
    "meaning": "他的"
  },
  "ของเรา": {
    "phonetic": "khong-reaa",
    "meaning": "我们的"
  },
  "ของใช้": {
    "phonetic": "khɔ̌ɔng-chái",
    "meaning": "项目"
  },
  "ขอตัว": {
    "phonetic": "khɔ̌ɔ-dtua",
    "meaning": "打扰一下"
  },
  "ขอตัวนะ": {
    "phonetic": "khotaw-na",
    "meaning": "打扰一下"
  },
  "ขอถาม": {
    "phonetic": "khɔ̌ɔ-thǎam",
    "meaning": "请问"
  },
  "ขอที": {
    "phonetic": "khothii",
    "meaning": "请"
  },
  "ขอบคุณ": {
    "phonetic": "khɔ̀ɔp-khun",
    "meaning": "谢谢"
  },
  "ขอบพระคุณ": {
    "phonetic": "khɔ̀ɔp-phra-khun",
    "meaning": "感谢"
  },
  "ขอบใจ": {
    "phonetic": "khobchai",
    "meaning": "谢谢"
  },
  "ขอบใจนะ": {
    "phonetic": "khobchai-na",
    "meaning": "谢谢"
  },
  "ขอยืม": {
    "phonetic": "khɔ̌ɔ-yuem",
    "meaning": "借"
  },
  "ขอย้ำ": {
    "phonetic": "kho-ya",
    "meaning": "我重复一遍"
  },
  "ขอรับ": {
    "phonetic": "khorab",
    "meaning": "请接受"
  },
  "ขอร้อง": {
    "phonetic": "khorong",
    "meaning": "请"
  },
  "ขอล่ะ": {
    "phonetic": "kho-la",
    "meaning": "请"
  },
  "ขอสั่ง": {
    "phonetic": "khɔ̌ɔ-sàng",
    "meaning": "我要点（菜）"
  },
  "ขออภัย": {
    "phonetic": "khoophhay",
    "meaning": "对不起"
  },
  "ขอเดานะ": {
    "phonetic": "kho-deaa-na",
    "meaning": "让我猜一下"
  },
  "ขอเถอะ": {
    "phonetic": "kho-theoa",
    "meaning": "请"
  },
  "ขอโทษ": {
    "phonetic": "khɔ̌ɔ-thôot",
    "meaning": "对不起 / 打扰一下"
  },
  "ขอโทษคะ": {
    "phonetic": "kho-thot-kha",
    "meaning": "对不起"
  },
  "ขอโทษที": {
    "phonetic": "kho-thot-thii",
    "meaning": "对不起"
  },
  "ขอโทษนะ": {
    "phonetic": "kho-thot-na",
    "meaning": "对不起"
  },
  "ขอโทษฮะ": {
    "phonetic": "kho-thot-ha",
    "meaning": "对不起"
  },
  "ขัง": {
    "phonetic": "khǎŋ",
    "meaning": "积聚/关押"
  },
  "ขัดข้อง": {
    "phonetic": "khàt-khɔ̂ɔŋ",
    "meaning": "故障/出问题"
  },
  "ขับ": {
    "phonetic": "khàp",
    "meaning": "驾驶"
  },
  "ขับขี่": {
    "phonetic": "khàp-khìi",
    "meaning": "驾驶"
  },
  "ขับไป": {
    "phonetic": "khab-pi",
    "meaning": "赶走"
  },
  "ขั้น": {
    "phonetic": "khân",
    "meaning": "步"
  },
  "ขั้นแรก": {
    "phonetic": "khan-raek",
    "meaning": "第一步"
  },
  "ขา": {
    "phonetic": "khaa",
    "meaning": "腿"
  },
  "ขาฉัน": {
    "phonetic": "khaa-chhan",
    "meaning": "我的腿"
  },
  "ขาด": {
    "phonetic": "khàat",
    "meaning": "破碎的"
  },
  "ขาดแคลน": {
    "phonetic": "khaat-khlaen",
    "meaning": "缺少"
  },
  "ขาย": {
    "phonetic": "khaay",
    "meaning": "出售"
  },
  "ขายาว": {
    "phonetic": "kǎa-yaao",
    "meaning": "长腿/长款"
  },
  "ขาว": {
    "phonetic": "khaaw",
    "meaning": "白色的"
  },
  "ขีด": {
    "phonetic": "khiit",
    "meaning": "划/刻度"
  },
  "ขีดจำกัด": {
    "phonetic": "khiit-jam-gat",
    "meaning": "极限/限制"
  },
  "ขี้": {
    "phonetic": "khîi",
    "meaning": "拉屎"
  },
  "ขี้ขลาด": {
    "phonetic": "khii-khlaad",
    "meaning": "胆小"
  },
  "ขึ้น": {
    "phonetic": "khuen",
    "meaning": "向上"
  },
  "ขึ้นมา": {
    "phonetic": "khuen-maa",
    "meaning": "过来"
  },
  "ขึ้นมาก": {
    "phonetic": "khʉ̂n-mâak",
    "meaning": "大幅增加/很多"
  },
  "ขึ้นรถ": {
    "phonetic": "khuen-rth",
    "meaning": "上车吧"
  },
  "ขึ้นไป": {
    "phonetic": "khuen-pi",
    "meaning": "向上"
  },
  "ขูด": {
    "phonetic": "khùut",
    "meaning": "刮/刮除"
  },
  "ขโมย": {
    "phonetic": "khmoy",
    "meaning": "偷"
  },
  "ข่าย": {
    "phonetic": "khàai",
    "meaning": "网"
  },
  "ข่าว": {
    "phonetic": "khaaw",
    "meaning": "消息"
  },
  "ข่าวดี": {
    "phonetic": "khaawdii",
    "meaning": "好消息"
  },
  "ข่าวสาร": {
    "phonetic": "khàaw-sǎan",
    "meaning": "信息"
  },
  "ข้น": {
    "phonetic": "khôn",
    "meaning": "浓缩的"
  },
  "ข้อ": {
    "phonetic": "kho",
    "meaning": "条 / 项 / 条款 / 关节"
  },
  "ข้อกำหนด": {
    "phonetic": "khâaw-gam-nòt",
    "meaning": "要求 / 规定"
  },
  "ข้อความ": {
    "phonetic": "khokhwaam",
    "meaning": "信息"
  },
  "ข้อดี": {
    "phonetic": "khɔ̂ɔ-dii",
    "meaning": "力量"
  },
  "ข้อมูล": {
    "phonetic": "khomuul",
    "meaning": "信息"
  },
  "ข้อมูลสูญหาย": {
    "phonetic": "khaaw-muun-suun-haai",
    "meaning": "数据丢失"
  },
  "ข้อสอง": {
    "phonetic": "kho-song",
    "meaning": "第二"
  },
  "ข้อแรก": {
    "phonetic": "kho-raek",
    "meaning": "第一点"
  },
  "ข้า": {
    "phonetic": "khaa",
    "meaning": "我"
  },
  "ข้าคือ": {
    "phonetic": "khaa-khueo",
    "meaning": "我是"
  },
  "ข้าง": {
    "phonetic": "khaang",
    "meaning": "边"
  },
  "ข้างนอก": {
    "phonetic": "khaang-nok",
    "meaning": "外部"
  },
  "ข้างบน": {
    "phonetic": "khaang-bn",
    "meaning": "多于"
  },
  "ข้างใน": {
    "phonetic": "khaang-nai",
    "meaning": "里面"
  },
  "ข้างๆ": {
    "phonetic": "khâang-khâang",
    "meaning": "旁"
  },
  "ข้าชื่อ": {
    "phonetic": "khaa-chhueo",
    "meaning": "我的名字是"
  },
  "ข้าม": {
    "phonetic": "khâam",
    "meaning": "叉"
  },
  "ข้ารู้": {
    "phonetic": "khaa-ruu",
    "meaning": "我知道"
  },
  "ข้าว": {
    "phonetic": "khâaw",
    "meaning": "米饭 / 饭"
  },
  "ข้าวผัดปู": {
    "phonetic": "khaaw-phat-bpuu",
    "meaning": "蟹肉炒饭"
  },
  "ข้าวสาร": {
    "phonetic": "khâaw-sǎan",
    "meaning": "米"
  },
  "ข้าวเปล่า": {
    "phonetic": "khâao-bplào",
    "meaning": "白米饭"
  },
  "ข้าวเหนียว": {
    "phonetic": "khaaw-niaw",
    "meaning": "糯米饭"
  },
  "ข้าวเหนียวมะม่วง": {
    "phonetic": "khaaw-niaw-ma-muuang",
    "meaning": "芒果糯米饭"
  },
  "ข้าว่า": {
    "phonetic": "khaa-waa",
    "meaning": "我说"
  },
  "ข้าเอง": {
    "phonetic": "khaa-oeng",
    "meaning": "是我"
  },
  "คง": {
    "phonetic": "khong",
    "meaning": "依然/持久"
  },
  "คงขาด": {
    "phonetic": "khong-khaat",
    "meaning": "缺少"
  },
  "คงงั้น": {
    "phonetic": "khng-ngan",
    "meaning": "大概是这样"
  },
  "คงใช่": {
    "phonetic": "khng-chhai",
    "meaning": "可能是的"
  },
  "คงไม่": {
    "phonetic": "khng-mi",
    "meaning": "可能不会"
  },
  "คณบดี": {
    "phonetic": "khnbdii",
    "meaning": "院长"
  },
  "คณะ": {
    "phonetic": "khá-ná",
    "meaning": "团体"
  },
  "คณาจารย์": {
    "phonetic": "kha-naa-jaan",
    "meaning": "学院"
  },
  "คดี": {
    "phonetic": "khdii",
    "meaning": "案件"
  },
  "คน": {
    "phonetic": "khon",
    "meaning": "人们"
  },
  "คนดี": {
    "phonetic": "khndii",
    "meaning": "好人"
  },
  "คนตาย": {
    "phonetic": "khn-taay",
    "meaning": "死人了"
  },
  "คนต่อไป": {
    "phonetic": "khn-to-pi",
    "meaning": "下一个人"
  },
  "คนทรยศ": {
    "phonetic": "khon-tha-ra-yot",
    "meaning": "叛徒"
  },
  "คนที่": {
    "phonetic": "khn-thii",
    "meaning": "那个人"
  },
  "คนนะ": {
    "phonetic": "khnna",
    "meaning": "人们"
  },
  "คนนั้น": {
    "phonetic": "khn-nan",
    "meaning": "那个人"
  },
  "คนนี้": {
    "phonetic": "khn-nii",
    "meaning": "这个人"
  },
  "คนบ้า": {
    "phonetic": "khn-baa",
    "meaning": "疯狂的人"
  },
  "คนร้าย": {
    "phonetic": "khnraay",
    "meaning": "恶棍"
  },
  "คนละ": {
    "phonetic": "khon-lá",
    "meaning": "每个"
  },
  "คนสวย": {
    "phonetic": "khon-suay",
    "meaning": "美丽的人"
  },
  "คนหนึ่ง": {
    "phonetic": "khn-nueng",
    "meaning": "一个人"
  },
  "คนอื่น": {
    "phonetic": "khn-ouen",
    "meaning": "别人"
  },
  "คนอื่นๆ": {
    "phonetic": "khn-ouen",
    "meaning": "别人"
  },
  "คนิคส": {
    "phonetic": "kha-nik",
    "meaning": "尼克斯队"
  },
  "คนเก่ง": {
    "phonetic": "khn-keng",
    "meaning": "聪明人"
  },
  "คนเดียว": {
    "phonetic": "khn-diao",
    "meaning": "独自的"
  },
  "คนเลว": {
    "phonetic": "khn-lew",
    "meaning": "坏人"
  },
  "คนแรก": {
    "phonetic": "khn-raek",
    "meaning": "第一个人"
  },
  "คนแล้ว": {
    "phonetic": "khn-laew",
    "meaning": "已经搅拌了"
  },
  "คนโกหก": {
    "phonetic": "khn-kok",
    "meaning": "说谎者"
  },
  "คนโง่": {
    "phonetic": "khn-ngo",
    "meaning": "傻子"
  },
  "คนใน": {
    "phonetic": "khon-nai",
    "meaning": "内幕人士"
  },
  "คนใหม่": {
    "phonetic": "khn-aim",
    "meaning": "新人"
  },
  "คนไหน": {
    "phonetic": "khn-in",
    "meaning": "哪一个"
  },
  "คนๆ": {
    "phonetic": "khon-khon",
    "meaning": "人们"
  },
  "คยอง": {
    "phonetic": "khyong",
    "meaning": "京"
  },
  "ครบ": {
    "phonetic": "khróp",
    "meaning": "完全"
  },
  "ครอบครัว": {
    "phonetic": "khrɔ̂ɔp-khrua",
    "meaning": "家庭"
  },
  "ครับ": {
    "phonetic": "khráp",
    "meaning": "(语气词) 男性的礼貌语气词，用于句尾或应答"
  },
  "ครับผม": {
    "phonetic": "khrab-phm",
    "meaning": "是的先生"
  },
  "ครับพ่อ": {
    "phonetic": "khrab-pho",
    "meaning": "是的父亲"
  },
  "ครับแม่": {
    "phonetic": "khrab-mae",
    "meaning": "是的妈妈"
  },
  "ครับๆ": {
    "phonetic": "khrab",
    "meaning": "是的是的"
  },
  "ครัว": {
    "phonetic": "khrua",
    "meaning": "厨房"
  },
  "ครั้ง": {
    "phonetic": "khrang",
    "meaning": "次"
  },
  "คราง": {
    "phonetic": "khraang",
    "meaning": "呻吟"
  },
  "คราวนี้": {
    "phonetic": "khraaw-nii",
    "meaning": "这次"
  },
  "คริส": {
    "phonetic": "khris",
    "meaning": "克里斯"
  },
  "คริสตัล": {
    "phonetic": "khristal",
    "meaning": "水晶"
  },
  "คริสติน": {
    "phonetic": "kh-ri-sti-n",
    "meaning": "克里斯汀"
  },
  "คริสตี้": {
    "phonetic": "kh-ri-stii",
    "meaning": "克里斯蒂"
  },
  "ครึ่ง": {
    "phonetic": "khrueng",
    "meaning": "一半"
  },
  "ครู": {
    "phonetic": "khruu",
    "meaning": "老师"
  },
  "ครูครับ": {
    "phonetic": "khruu-khrab",
    "meaning": "老师"
  },
  "ครูโซ": {
    "phonetic": "khruu-so",
    "meaning": "克鲁索"
  },
  "ครู่": {
    "phonetic": "khruu",
    "meaning": "一会儿/片刻"
  },
  "คลอเดีย": {
    "phonetic": "khlo-deia",
    "meaning": "克劳迪娅"
  },
  "คลับ": {
    "phonetic": "khlab",
    "meaning": "俱乐部"
  },
  "คลาก": {
    "phonetic": "khlaak",
    "meaning": "克拉克"
  },
  "คลาร่า": {
    "phonetic": "khlaa-raa",
    "meaning": "克拉拉"
  },
  "คลาร์ก": {
    "phonetic": "khlaa-rk",
    "meaning": "克拉克"
  },
  "คลาร์ค": {
    "phonetic": "khlaa-rkh",
    "meaning": "克拉克"
  },
  "คลาวด์": {
    "phonetic": "khlaa-wd",
    "meaning": "云"
  },
  "คลินิก": {
    "phonetic": "khlí-nìk",
    "meaning": "诊所"
  },
  "คลื่นไส้": {
    "phonetic": "khlʉ̂en-sâi",
    "meaning": "娇气的"
  },
  "คล้าก": {
    "phonetic": "khlaa-k",
    "meaning": "克拉克"
  },
  "คล้าย": {
    "phonetic": "khláai",
    "meaning": "好像/类似"
  },
  "คล้ายๆ": {
    "phonetic": "khlaay",
    "meaning": "相似的"
  },
  "คล๊าก": {
    "phonetic": "khlaak",
    "meaning": "克拉克"
  },
  "ควบคุม": {
    "phonetic": "khuap-khum",
    "meaning": "控制"
  },
  "ควร": {
    "phonetic": "khuan",
    "meaning": "应该"
  },
  "ควัน": {
    "phonetic": "khwan",
    "meaning": "抽烟"
  },
  "ความ": {
    "phonetic": "khwaam",
    "meaning": "前缀(名词化)"
  },
  "ความชื้น": {
    "phonetic": "khwaam-chʉ́n",
    "meaning": "湿度"
  },
  "ความดันโลหิต": {
    "phonetic": "khwaam-dan-loo-hìt",
    "meaning": "血压"
  },
  "ความตาย": {
    "phonetic": "khwaam-taay",
    "meaning": "死亡"
  },
  "ความฝัน": {
    "phonetic": "khwaam-fan",
    "meaning": "梦"
  },
  "ความมหัศจรรย์ของดอกเบี้ยทบต้นในการวางแผนการเงินระยะยาว": {
    "phonetic": "khwaam-ma-hat-sa-jan-khɔng-dɔɔk-biia-thop-dton-nai-gaan-waang-phaen-gaan-gən-ra-ya-yaao",
    "meaning": "复利的理财魔力"
  },
  "ความรัก": {
    "phonetic": "khwaam-rak",
    "meaning": "爱"
  },
  "ความลับ": {
    "phonetic": "khwaam-lab",
    "meaning": "秘密"
  },
  "ความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิต": {
    "phonetic": "khwaam-sam-khan-khɔɔng-that-sa-na-kha-ti-gaan-rian-ruu-dtlaawt-chii-wit",
    "meaning": "终身学习态度"
  },
  "ความสุข": {
    "phonetic": "khwaam-sukh",
    "meaning": "幸福"
  },
  "ความเร็ว": {
    "phonetic": "khwaam-reo",
    "meaning": "速度"
  },
  "ควิน": {
    "phonetic": "khwin",
    "meaning": "奎因"
  },
  "ควินน์": {
    "phonetic": "kh-win-n",
    "meaning": "奎因"
  },
  "ควีน": {
    "phonetic": "khwiin",
    "meaning": "女王"
  },
  "คอ": {
    "phonetic": "khɔɔ",
    "meaning": "脖子"
  },
  "คอน": {
    "phonetic": "khɔɔn",
    "meaning": "栖息"
  },
  "คอนดักเตอร์": {
    "phonetic": "khon-dak-toe",
    "meaning": "导体"
  },
  "คอนราด": {
    "phonetic": "khon-raad",
    "meaning": "康拉德"
  },
  "คอนแลน": {
    "phonetic": "khon-laen",
    "meaning": "康兰"
  },
  "คอนโด": {
    "phonetic": "khɔɔn-doo",
    "meaning": "公寓"
  },
  "คอมพิวเตอร์": {
    "phonetic": "khɔm-phiw-dtəə",
    "meaning": "电脑"
  },
  "คอย": {
    "phonetic": "khɔɔi",
    "meaning": "等待"
  },
  "คอยดู": {
    "phonetic": "khoy-duu",
    "meaning": "观察观察"
  },
  "คอยดูนะ": {
    "phonetic": "khoy-duu-na",
    "meaning": "等等看"
  },
  "คอร่า": {
    "phonetic": "kho-raa",
    "meaning": "科拉"
  },
  "คอร์ป": {
    "phonetic": "khorp",
    "meaning": "公司"
  },
  "คอล": {
    "phonetic": "khɔɔ",
    "meaning": "称呼"
  },
  "คอลลิน": {
    "phonetic": "kho-l-lin",
    "meaning": "科林"
  },
  "คอลิน": {
    "phonetic": "kho-lin",
    "meaning": "科林"
  },
  "คอเนอร์": {
    "phonetic": "kho-neo-r",
    "meaning": "康纳"
  },
  "คะ": {
    "phonetic": "khá",
    "meaning": "(语气词) 女性的礼貌疑问语气词，用于句末疑问"
  },
  "คะแนน": {
    "phonetic": "khanaen",
    "meaning": "分数"
  },
  "คัง": {
    "phonetic": "khang",
    "meaning": "炕"
  },
  "คังแทโฮ": {
    "phonetic": "khangthae-ho",
    "meaning": "姜泰浩"
  },
  "คัด": {
    "phonetic": "khat",
    "meaning": "挑选"
  },
  "คัท": {
    "phonetic": "khath",
    "meaning": "切"
  },
  "คัน": {
    "phonetic": "khan",
    "meaning": "发痒"
  },
  "คันซากิ": {
    "phonetic": "khan-saaki",
    "meaning": "神崎"
  },
  "คับคั่ง": {
    "phonetic": "khap-khâng",
    "meaning": "拥挤的"
  },
  "คัมปาย": {
    "phonetic": "kham-paay",
    "meaning": "坎帕伊"
  },
  "คั้น": {
    "phonetic": "khan",
    "meaning": "榨/挤"
  },
  "คาด": {
    "phonetic": "khaat",
    "meaning": "预计"
  },
  "คานาโกะ": {
    "phonetic": "khaa-naa-koa",
    "meaning": "加奈子"
  },
  "คามิยะ": {
    "phonetic": "khaa-mi-ya",
    "meaning": "卡米亚"
  },
  "คาร่า": {
    "phonetic": "khaa-raa",
    "meaning": "卡拉"
  },
  "คาร์ล": {
    "phonetic": "khaarl",
    "meaning": "卡尔"
  },
  "คาร์ลอส": {
    "phonetic": "khaarlos",
    "meaning": "卡洛斯"
  },
  "คาร์สัน": {
    "phonetic": "khaar-san",
    "meaning": "卡森"
  },
  "คาล": {
    "phonetic": "khaal",
    "meaning": "卡尔"
  },
  "คาลลีสิ": {
    "phonetic": "khaa-l-lii-si",
    "meaning": "卡里西"
  },
  "คาลวิน": {
    "phonetic": "khaa-l-win",
    "meaning": "卡尔文"
  },
  "คาลอส": {
    "phonetic": "khaa-los",
    "meaning": "卡洛斯"
  },
  "คาลิด": {
    "phonetic": "khaa-lid",
    "meaning": "哈立德"
  },
  "คาวบอย": {
    "phonetic": "khaawboy",
    "meaning": "牛仔"
  },
  "คาสเซิล": {
    "phonetic": "khaas-seil",
    "meaning": "城堡"
  },
  "คาเนดะ": {
    "phonetic": "khaa-ne-da",
    "meaning": "金田"
  },
  "คาเมรอน": {
    "phonetic": "khaa-me-ron",
    "meaning": "卡梅伦"
  },
  "คาเรน": {
    "phonetic": "khaa-ren",
    "meaning": "凯伦"
  },
  "คาเรฟ": {
    "phonetic": "khaa-ref",
    "meaning": "卡列夫"
  },
  "คาโอรุ": {
    "phonetic": "khaa-oo-ru",
    "meaning": "薰"
  },
  "คำ": {
    "phonetic": "kha",
    "meaning": "字"
  },
  "คำตอบ": {
    "phonetic": "kha-tob",
    "meaning": "回答"
  },
  "คำถาม": {
    "phonetic": "khathaam",
    "meaning": "问题"
  },
  "คำนวณ": {
    "phonetic": "kham-nuan",
    "meaning": "计算/估算"
  },
  "คำราม": {
    "phonetic": "kharaam",
    "meaning": "吼"
  },
  "คำว่า": {
    "phonetic": "kha-waa",
    "meaning": "这个词"
  },
  "คำสั่ง": {
    "phonetic": "kha-sang",
    "meaning": "命令"
  },
  "คำเตือน": {
    "phonetic": "kha-tueaon",
    "meaning": "警告"
  },
  "คิง": {
    "phonetic": "khing",
    "meaning": "国王"
  },
  "คิด": {
    "phonetic": "khít",
    "meaning": "想 / 思考"
  },
  "คิดดู": {
    "phonetic": "khid-duu",
    "meaning": "想一想"
  },
  "คิดดูสิ": {
    "phonetic": "khid-duu-si",
    "meaning": "想一想"
  },
  "คิดถึง": {
    "phonetic": "khít-thʉ̌ng",
    "meaning": "错过"
  },
  "คิดว่า": {
    "phonetic": "khid-waa",
    "meaning": "我认为"
  },
  "คิดสิ": {
    "phonetic": "khid-si",
    "meaning": "想一想"
  },
  "คิตตี้": {
    "phonetic": "khit-tii",
    "meaning": "猫咪"
  },
  "คิท": {
    "phonetic": "khith",
    "meaning": "成套工具"
  },
  "คินตะ": {
    "phonetic": "khin-ta",
    "meaning": "近打"
  },
  "คิม": {
    "phonetic": "khim",
    "meaning": "金"
  },
  "คิมนานา": {
    "phonetic": "khi-mnaa-naa",
    "meaning": "金娜娜"
  },
  "คิระ": {
    "phonetic": "khira",
    "meaning": "基拉"
  },
  "คิว": {
    "phonetic": "khiw",
    "meaning": "队列"
  },
  "คิวอาร์โค้ด": {
    "phonetic": "khiu-aa-khôot",
    "meaning": "二维码"
  },
  "คี": {
    "phonetic": "khii",
    "meaning": "记"
  },
  "คีธ": {
    "phonetic": "khiith",
    "meaning": "基思"
  },
  "คีย์": {
    "phonetic": "khii",
    "meaning": "钥匙"
  },
  "คีย์ร่า": {
    "phonetic": "khia-raa",
    "meaning": "凯拉"
  },
  "คึกคัก": {
    "phonetic": "khʉ́k-khák",
    "meaning": "忙碌"
  },
  "คืน": {
    "phonetic": "khuen",
    "meaning": "返回"
  },
  "คืนก่อน": {
    "phonetic": "khuen-kon",
    "meaning": "前一天晚上"
  },
  "คืนนี้": {
    "phonetic": "khuen-nii",
    "meaning": "今晚"
  },
  "คืนให้": {
    "phonetic": "khʉn-hâi",
    "meaning": "把它还给"
  },
  "คืบ": {
    "phonetic": "khuep",
    "meaning": "蠕变"
  },
  "คืบหน้า": {
    "phonetic": "khʉʉp-naa",
    "meaning": "进展/进度"
  },
  "คือ": {
    "phonetic": "khueo",
    "meaning": "那是"
  },
  "คือคุณ": {
    "phonetic": "khueo-khun",
    "meaning": "是你"
  },
  "คืองี้": {
    "phonetic": "khueo-ngii",
    "meaning": "是这样的"
  },
  "คือฉัน": {
    "phonetic": "khueo-chhan",
    "meaning": "这就是我"
  },
  "คือผม": {
    "phonetic": "khueo-phm",
    "meaning": "这就是我"
  },
  "คือมัน": {
    "phonetic": "khueo-man",
    "meaning": "就是它了"
  },
  "คือว่า": {
    "phonetic": "khueo-waa",
    "meaning": "那是"
  },
  "คืออะไร": {
    "phonetic": "khueo-oari",
    "meaning": "它是什么"
  },
  "คือใคร": {
    "phonetic": "khueo-khair",
    "meaning": "这是谁"
  },
  "คุก": {
    "phonetic": "khuk",
    "meaning": "监狱"
  },
  "คุกเข่า": {
    "phonetic": "khukkheaa",
    "meaning": "下跪"
  },
  "คุง": {
    "phonetic": "khung",
    "meaning": "恭"
  },
  "คุณ": {
    "phonetic": "khun",
    "meaning": "你"
  },
  "คุณครู": {
    "phonetic": "khunkhruu",
    "meaning": "老师"
  },
  "คุณค่า": {
    "phonetic": "khun-khâa",
    "meaning": "价值"
  },
  "คุณตา": {
    "phonetic": "khun-taa",
    "meaning": "爷爷"
  },
  "คุณนาย": {
    "phonetic": "khunnaay",
    "meaning": "女士"
  },
  "คุณน้า": {
    "phonetic": "khun-naa",
    "meaning": "阿姨"
  },
  "คุณปู่": {
    "phonetic": "khun-puu",
    "meaning": "爷爷"
  },
  "คุณป้า": {
    "phonetic": "khun-paa",
    "meaning": "阿姨"
  },
  "คุณพ่อ": {
    "phonetic": "khun-pho",
    "meaning": "父亲"
  },
  "คุณภาพ": {
    "phonetic": "khun-ná-phâap",
    "meaning": "质量"
  },
  "คุณยาย": {
    "phonetic": "khun-yaay",
    "meaning": "奶奶"
  },
  "คุณย่า": {
    "phonetic": "khunyaa",
    "meaning": "奶奶"
  },
  "คุณลุง": {
    "phonetic": "khun-lung",
    "meaning": "叔叔"
  },
  "คุณหนู": {
    "phonetic": "khun-nuu",
    "meaning": "小姐"
  },
  "คุณหมอ": {
    "phonetic": "khun-mo",
    "meaning": "医生"
  },
  "คุณอา": {
    "phonetic": "khun-oaa",
    "meaning": "叔叔"
  },
  "คุณแม่": {
    "phonetic": "khun-mae",
    "meaning": "母亲"
  },
  "คุม": {
    "phonetic": "khum",
    "meaning": "控制"
  },
  "คุย": {
    "phonetic": "khui",
    "meaning": "聊天/谈话"
  },
  "คุยกัน": {
    "phonetic": "khuy-kan",
    "meaning": "我们来谈谈吧"
  },
  "คูมาร์": {
    "phonetic": "khuu-maar",
    "meaning": "库马尔"
  },
  "คูเปอร์": {
    "phonetic": "khuu-peor",
    "meaning": "库珀"
  },
  "คู่": {
    "phonetic": "khuu",
    "meaning": "夫妻"
  },
  "คู่มือ": {
    "phonetic": "khûu-mʉʉ",
    "meaning": "手册/指南"
  },
  "คู่หู": {
    "phonetic": "khuuuu",
    "meaning": "伙伴"
  },
  "คแลร์": {
    "phonetic": "kh-laer",
    "meaning": "克莱尔"
  },
  "ค่อน": {
    "phonetic": "khɔ̂n",
    "meaning": "有些"
  },
  "ค่อย": {
    "phonetic": "khoy",
    "meaning": "慢慢地"
  },
  "ค่อยๆ": {
    "phonetic": "khoy-khoy",
    "meaning": "逐步地"
  },
  "ค่ะ": {
    "phonetic": "khâ",
    "meaning": "(语气词) 女性的礼貌陈述语气词，用于句末陈述"
  },
  "ค่ะท่าน": {
    "phonetic": "kha-thaan",
    "meaning": "是的先生"
  },
  "ค่ะแม่": {
    "phonetic": "kha-mae",
    "meaning": "是的妈妈"
  },
  "ค่า": {
    "phonetic": "khaa",
    "meaning": "价值"
  },
  "ค่าน้ำ": {
    "phonetic": "khâa-náam",
    "meaning": "水费单"
  },
  "ค่าบริการ": {
    "phonetic": "khâa-bɔɔ-rí-gaan",
    "meaning": "服务费"
  },
  "ค่าย": {
    "phonetic": "khâai",
    "meaning": "营"
  },
  "ค่ำ": {
    "phonetic": "khâm",
    "meaning": "晚上"
  },
  "ค้นหา": {
    "phonetic": "khnaa",
    "meaning": "搜索"
  },
  "ค้า": {
    "phonetic": "khaa",
    "meaning": "贸易/买卖"
  },
  "ค้าง": {
    "phonetic": "kháang",
    "meaning": "杰出的"
  },
  "ฆาตกร": {
    "phonetic": "khaatkr",
    "meaning": "凶手"
  },
  "ฆาตกรรม": {
    "phonetic": "khaatkrrm",
    "meaning": "谋杀"
  },
  "ฆ่า": {
    "phonetic": "khaa",
    "meaning": "杀"
  },
  "ฆ่าฉัน": {
    "phonetic": "khaa-chhan",
    "meaning": "杀了我"
  },
  "ฆ่ามัน": {
    "phonetic": "khaa-man",
    "meaning": "杀掉它"
  },
  "ฆ่าเขา": {
    "phonetic": "khaa-kheaa",
    "meaning": "杀了他"
  },
  "งดงาม": {
    "phonetic": "ngot-ngaam",
    "meaning": "美丽的"
  },
  "งบ": {
    "phonetic": "ngóp",
    "meaning": "预算"
  },
  "งม": {
    "phonetic": "ngom",
    "meaning": "我不知道。"
  },
  "งวด": {
    "phonetic": "ngûat",
    "meaning": "时期"
  },
  "งอินฟลู": {
    "phonetic": "ng-in-fluu",
    "meaning": "有影响"
  },
  "งั้น": {
    "phonetic": "ngan",
    "meaning": "所以"
  },
  "งั้นก็": {
    "phonetic": "ngan-k",
    "meaning": "所以"
  },
  "งั้นรึ": {
    "phonetic": "ngan-rue",
    "meaning": "所以"
  },
  "งั้นสิ": {
    "phonetic": "ngan-si",
    "meaning": "所以"
  },
  "งั้นหรอ": {
    "phonetic": "ngan-ro",
    "meaning": "所以"
  },
  "งาน": {
    "phonetic": "ngaan",
    "meaning": "工作"
  },
  "งานการ": {
    "phonetic": "ngaan-gaan",
    "meaning": "工作"
  },
  "งี่เง่า": {
    "phonetic": "ngii-ngeaa",
    "meaning": "愚蠢的"
  },
  "งู": {
    "phonetic": "nguu",
    "meaning": "蛇"
  },
  "ง่าย": {
    "phonetic": "ngaay",
    "meaning": "简单的"
  },
  "ง่ายมาก": {
    "phonetic": "ngaay-maak",
    "meaning": "很容易"
  },
  "ง่ายๆ": {
    "phonetic": "ngaay-ngaay",
    "meaning": "简单的"
  },
  "จง": {
    "phonetic": "jong",
    "meaning": "是"
  },
  "จด": {
    "phonetic": "jòt",
    "meaning": "写"
  },
  "จดหมาย": {
    "phonetic": "chdmaay",
    "meaning": "信"
  },
  "จตุจักร": {
    "phonetic": "ja-dtu-jak",
    "meaning": "乍都乍"
  },
  "จน": {
    "phonetic": "jon",
    "meaning": "直到"
  },
  "จนกว่า": {
    "phonetic": "chnkwaa",
    "meaning": "直到"
  },
  "จนถึง": {
    "phonetic": "jon-thʉ̌ng",
    "meaning": "直到"
  },
  "จนท": {
    "phonetic": "jaaw-naaw-thaaw",
    "meaning": "军官"
  },
  "จนี้": {
    "phonetic": "ja-nii",
    "meaning": "直到今天"
  },
  "จบ": {
    "phonetic": "chop",
    "meaning": "完成了"
  },
  "จบข่าว": {
    "phonetic": "chb-khaaw",
    "meaning": "新闻结束"
  },
  "จบแล้ว": {
    "phonetic": "chb-laew",
    "meaning": "完成了"
  },
  "จราจร": {
    "phonetic": "ja-raa-jɔɔn",
    "meaning": "交通"
  },
  "จริง": {
    "phonetic": "chring",
    "meaning": "确实如此"
  },
  "จริงค่ะ": {
    "phonetic": "chring-kha",
    "meaning": "这是真的"
  },
  "จริงง่ะ": {
    "phonetic": "chring-nga",
    "meaning": "这是真的"
  },
  "จริงซิ": {
    "phonetic": "chring-si",
    "meaning": "这是真的"
  },
  "จริงดิ": {
    "phonetic": "chring-di",
    "meaning": "真的"
  },
  "จริงนะ": {
    "phonetic": "chring-na",
    "meaning": "这是真的"
  },
  "จริงน่ะ": {
    "phonetic": "chring-na",
    "meaning": "这是真的"
  },
  "จริงรึ": {
    "phonetic": "chring-rue",
    "meaning": "真的吗"
  },
  "จริงสิ": {
    "phonetic": "chring-si",
    "meaning": "这是真的"
  },
  "จริงหรอ": {
    "phonetic": "chring-ro",
    "meaning": "真的吗"
  },
  "จริงอะ": {
    "phonetic": "chring-oa",
    "meaning": "真的"
  },
  "จริงอ่ะ": {
    "phonetic": "chring-oa",
    "meaning": "这是真的"
  },
  "จริงอ้ะ": {
    "phonetic": "chring-oa",
    "meaning": "这是真的"
  },
  "จริงไหม": {
    "phonetic": "chring-im",
    "meaning": "这是真的吗"
  },
  "จริงๆ": {
    "phonetic": "jing-jing",
    "meaning": "真的"
  },
  "จริงๆนะ": {
    "phonetic": "jing-jingna",
    "meaning": "真的"
  },
  "จริยธรรม": {
    "phonetic": "ja-ri-ya-tham",
    "meaning": "伦理"
  },
  "จอ": {
    "phonetic": "jɔɔ",
    "meaning": "屏幕"
  },
  "จอง": {
    "phonetic": "chong",
    "meaning": "预订"
  },
  "จองกุก": {
    "phonetic": "chong-kuk",
    "meaning": "柾国"
  },
  "จองจู": {
    "phonetic": "chong-chuu",
    "meaning": "正州"
  },
  "จอช": {
    "phonetic": "chochh",
    "meaning": "乔什"
  },
  "จอด": {
    "phonetic": "chod",
    "meaning": "公园"
  },
  "จอดรถ": {
    "phonetic": "chod-rth",
    "meaning": "把车停好"
  },
  "จอน": {
    "phonetic": "chon",
    "meaning": "乔恩"
  },
  "จอนนี่": {
    "phonetic": "chon-nii",
    "meaning": "乔尼"
  },
  "จอนห์": {
    "phonetic": "chon",
    "meaning": "约翰"
  },
  "จอย": {
    "phonetic": "choy",
    "meaning": "喜悦"
  },
  "จอร์จ": {
    "phonetic": "chorch",
    "meaning": "乔治"
  },
  "จอร์ช": {
    "phonetic": "chorchh",
    "meaning": "乔治"
  },
  "จอร์น": {
    "phonetic": "chorn",
    "meaning": "约翰"
  },
  "จอร์แดน": {
    "phonetic": "chordaen",
    "meaning": "约旦"
  },
  "จอห์น": {
    "phonetic": "chon",
    "meaning": "约翰"
  },
  "จะ": {
    "phonetic": "jà",
    "meaning": "将 / 会"
  },
  "จะจ้า": {
    "phonetic": "ja-jâa",
    "meaning": "我会。"
  },
  "จะทำ": {
    "phonetic": "jà-tham",
    "meaning": "将会做"
  },
  "จะรับผิดชอบ": {
    "phonetic": "jà-ráp-phìt-chɔ̂ɔp",
    "meaning": "将负责"
  },
  "จะว่าไป": {
    "phonetic": "cha-waa-pi",
    "meaning": "我会这么说"
  },
  "จะเป็น": {
    "phonetic": "cha-pen",
    "meaning": "将"
  },
  "จะแจ้ง": {
    "phonetic": "jà-jâeng",
    "meaning": "将通知"
  },
  "จะไปไหน": {
    "phonetic": "cha-pi-in",
    "meaning": "你要去哪里"
  },
  "จักรวาล": {
    "phonetic": "chakrwaal",
    "meaning": "宇宙"
  },
  "จัง": {
    "phonetic": "chang",
    "meaning": "真的"
  },
  "จังโก้": {
    "phonetic": "chang-ko",
    "meaning": "姜戈"
  },
  "จัด": {
    "phonetic": "jat",
    "meaning": "整理/排列"
  },
  "จัดการ": {
    "phonetic": "chadkaar",
    "meaning": "管理"
  },
  "จัดการเรียนการสอน": {
    "phonetic": "jàt-gaan-riian-gaan-sɔ̌ɔn",
    "meaning": "教学管理"
  },
  "จัดจ้าน": {
    "phonetic": "jàt-jâan",
    "meaning": "浓郁/地道"
  },
  "จัดส่ง": {
    "phonetic": "jàt-sòng",
    "meaning": "配送/发货"
  },
  "จัดเก็บ": {
    "phonetic": "jàt-gèp",
    "meaning": "存储/收集"
  },
  "จัดให้": {
    "phonetic": "chad-ai",
    "meaning": "假如"
  },
  "จัดไป": {
    "phonetic": "chad-pi",
    "meaning": "我们走吧"
  },
  "จันดี": {
    "phonetic": "chan-dii",
    "meaning": "昌迪"
  },
  "จันทร์": {
    "phonetic": "jan",
    "meaning": "周一"
  },
  "จับ": {
    "phonetic": "chab",
    "meaning": "抓住"
  },
  "จับมัน": {
    "phonetic": "chab-man",
    "meaning": "抓住它"
  },
  "จับเขา": {
    "phonetic": "chab-kheaa",
    "meaning": "抓住他"
  },
  "จับไว้": {
    "phonetic": "chab-wi",
    "meaning": "握住它"
  },
  "จัสติน": {
    "phonetic": "chas-tin",
    "meaning": "贾斯汀"
  },
  "จัสมิน": {
    "phonetic": "chas-min",
    "meaning": "茉莉花"
  },
  "จา": {
    "phonetic": "chaa",
    "meaning": "贾"
  },
  "จาก": {
    "phonetic": "chaak",
    "meaning": "从"
  },
  "จากฉัน": {
    "phonetic": "chaak-chhan",
    "meaning": "来自我"
  },
  "จากนั้น": {
    "phonetic": "chaak-nan",
    "meaning": "然后"
  },
  "จากนี้": {
    "phonetic": "chaak-nii",
    "meaning": "今后"
  },
  "จากอะไร": {
    "phonetic": "chaak-oari",
    "meaning": "从什么"
  },
  "จากใคร": {
    "phonetic": "chaak-khair",
    "meaning": "来自谁"
  },
  "จาง": {
    "phonetic": "chaang",
    "meaning": "褪色了"
  },
  "จาน": {
    "phonetic": "chaan",
    "meaning": "盘/碟/量词"
  },
  "จามาล": {
    "phonetic": "chaa-maal",
    "meaning": "贾马尔"
  },
  "จำ": {
    "phonetic": "jam",
    "meaning": "记住"
  },
  "จำกัด": {
    "phonetic": "chakad",
    "meaning": "有限公司"
  },
  "จำนวน": {
    "phonetic": "jam-nuan",
    "meaning": "数量"
  },
  "จำหน่าย": {
    "phonetic": "jam-nàai",
    "meaning": "出售"
  },
  "จำเป็น": {
    "phonetic": "jam-bpen",
    "meaning": "必要的"
  },
  "จำได้": {
    "phonetic": "cha-di",
    "meaning": "我记得"
  },
  "จำได้สิ": {
    "phonetic": "cha-di-si",
    "meaning": "记住"
  },
  "จำไว้": {
    "phonetic": "cha-wi",
    "meaning": "记住"
  },
  "จำไว้นะ": {
    "phonetic": "cha-wi-na",
    "meaning": "记住这一点"
  },
  "จิ": {
    "phonetic": "chi",
    "meaning": "吉"
  },
  "จิต": {
    "phonetic": "jìt",
    "meaning": "头脑"
  },
  "จิตใจ": {
    "phonetic": "jit-jai",
    "meaning": "心灵"
  },
  "จิน": {
    "phonetic": "chin",
    "meaning": "斤"
  },
  "จิบ": {
    "phonetic": "cìp",
    "meaning": "抿/小口喝"
  },
  "จิม": {
    "phonetic": "chim",
    "meaning": "吉姆"
  },
  "จิมมี่": {
    "phonetic": "chi-m-mii",
    "meaning": "吉米"
  },
  "จิล": {
    "phonetic": "chil",
    "meaning": "吉尔"
  },
  "จิลล์": {
    "phonetic": "chi-ll",
    "meaning": "吉尔"
  },
  "จิโร่": {
    "phonetic": "chi-ro",
    "meaning": "二郎"
  },
  "จี": {
    "phonetic": "chii",
    "meaning": "G"
  },
  "จีน": {
    "phonetic": "chiin",
    "meaning": "中国"
  },
  "จีน่า": {
    "phonetic": "chii-naa",
    "meaning": "吉娜"
  },
  "จีฮุน": {
    "phonetic": "chii-hun",
    "meaning": "志勋"
  },
  "จีฮู": {
    "phonetic": "chiihuu",
    "meaning": "吉虎"
  },
  "จีเซล": {
    "phonetic": "chii-sel",
    "meaning": "吉赛尔"
  },
  "จี๊ด": {
    "phonetic": "jîit",
    "meaning": "非常酷"
  },
  "จึง": {
    "phonetic": "jueng",
    "meaning": "所以"
  },
  "จืด": {
    "phonetic": "jʉ̀ut",
    "meaning": "新鲜的"
  },
  "จื่อซู่": {
    "phonetic": "chueo-suu",
    "meaning": "紫苏"
  },
  "จุง": {
    "phonetic": "chung",
    "meaning": "荣格"
  },
  "จุด": {
    "phonetic": "chud",
    "meaning": "观点"
  },
  "จุดนี้": {
    "phonetic": "chud-nii",
    "meaning": "这一点"
  },
  "จุน": {
    "phonetic": "chun",
    "meaning": "六月"
  },
  "จุนซู": {
    "phonetic": "chun-suu",
    "meaning": "俊苏"
  },
  "จุนพโย": {
    "phonetic": "chu-nph-yo",
    "meaning": "杓俊"
  },
  "จุ๊": {
    "phonetic": "chu",
    "meaning": "嘘"
  },
  "จุ๊บ": {
    "phonetic": "chub",
    "meaning": "吻"
  },
  "จุ๊บๆ": {
    "phonetic": "chub",
    "meaning": "吻吻"
  },
  "จู": {
    "phonetic": "chuu",
    "meaning": "朱"
  },
  "จูดี้": {
    "phonetic": "chuu-dii",
    "meaning": "朱迪"
  },
  "จูน": {
    "phonetic": "chuun",
    "meaning": "调"
  },
  "จูบ": {
    "phonetic": "chuub",
    "meaning": "吻"
  },
  "จูลส์": {
    "phonetic": "chuu-ls",
    "meaning": "朱尔斯"
  },
  "จูลี่": {
    "phonetic": "chuu-lii",
    "meaning": "朱莉"
  },
  "จูวอน": {
    "phonetic": "chuu-won",
    "meaning": "朱元"
  },
  "จูเลีย": {
    "phonetic": "chuu-leia",
    "meaning": "朱莉娅"
  },
  "จูเลียต": {
    "phonetic": "chuu-leia-t",
    "meaning": "朱丽叶"
  },
  "จูโน่": {
    "phonetic": "chuu-no",
    "meaning": "朱诺"
  },
  "จู่ๆ": {
    "phonetic": "chuu-chuu",
    "meaning": "突然"
  },
  "จเรื": {
    "phonetic": "jà-ree",
    "meaning": "军士"
  },
  "จ่า": {
    "phonetic": "chaa",
    "meaning": "中士"
  },
  "จ่าย": {
    "phonetic": "jàai",
    "meaning": "支付"
  },
  "จ้ะ": {
    "phonetic": "cha",
    "meaning": "是的"
  },
  "จ้า": {
    "phonetic": "chaa",
    "meaning": "是的"
  },
  "จ้าง": {
    "phonetic": "jâang",
    "meaning": "聘请"
  },
  "จ้าน": {
    "phonetic": "jaan",
    "meaning": "强烈"
  },
  "จ๊ะ": {
    "phonetic": "já",
    "meaning": "(语气词) 语气缓和词"
  },
  "จ๋า": {
    "phonetic": "jǎa",
    "meaning": "(语气词) 亲昵呼唤词，意为“亲爱的/宝贝”"
  },
  "ฉบับ": {
    "phonetic": "chhbab",
    "meaning": "版"
  },
  "ฉบับที่": {
    "phonetic": "chhbab-thii",
    "meaning": "问题"
  },
  "ฉลาด": {
    "phonetic": "chhlaad",
    "meaning": "聪明的"
  },
  "ฉลาดมาก": {
    "phonetic": "chhlaad-maak",
    "meaning": "非常聪明"
  },
  "ฉลาม": {
    "phonetic": "chhlaam",
    "meaning": "鲨鱼"
  },
  "ฉะ": {
    "phonetic": "chha",
    "meaning": "查"
  },
  "ฉะนั้น": {
    "phonetic": "chhanan",
    "meaning": "所以"
  },
  "ฉัน": {
    "phonetic": "chǎn",
    "meaning": "我 (女性/通用)"
  },
  "ฉันดีใจ": {
    "phonetic": "chhan-diichai",
    "meaning": "我很高兴"
  },
  "ฉันท้อง": {
    "phonetic": "chhan-thong",
    "meaning": "我怀孕了"
  },
  "ฉาย": {
    "phonetic": "chǎai",
    "meaning": "项目"
  },
  "ฉิบหาย": {
    "phonetic": "chhibaay",
    "meaning": "真可悲"
  },
  "ฉุกเฉิน": {
    "phonetic": "chùk-chǒen",
    "meaning": "紧急"
  },
  "ชน": {
    "phonetic": "chon",
    "meaning": "碰撞"
  },
  "ชนะ": {
    "phonetic": "chhna",
    "meaning": "赢"
  },
  "ชนิด": {
    "phonetic": "chá-nít",
    "meaning": "类型"
  },
  "ชนแก้ว": {
    "phonetic": "chhn-kaew",
    "meaning": "为眼镜干杯"
  },
  "ชม": {
    "phonetic": "chom",
    "meaning": "观看 / 欣赏 / 赞美 / 参观"
  },
  "ชมิดท์": {
    "phonetic": "chhmidth",
    "meaning": "施密特"
  },
  "ชวน": {
    "phonetic": "chuan",
    "meaning": "邀请/劝说"
  },
  "ชอง": {
    "phonetic": "chhong",
    "meaning": "渠道"
  },
  "ชอน": {
    "phonetic": "chhon",
    "meaning": "肖恩"
  },
  "ชอนฮี": {
    "phonetic": "chhon-hii",
    "meaning": "春熙"
  },
  "ชอบ": {
    "phonetic": "chɔ̂ɔp",
    "meaning": "喜欢"
  },
  "ชอบมั้ย": {
    "phonetic": "chhob-may",
    "meaning": "你喜欢它"
  },
  "ชอบสิ": {
    "phonetic": "chhob-si",
    "meaning": "我喜欢它"
  },
  "ชอย": {
    "phonetic": "chhoy",
    "meaning": "崔"
  },
  "ชอลซู": {
    "phonetic": "chhol-suu",
    "meaning": "哲尔苏"
  },
  "ชอว์": {
    "phonetic": "chhow",
    "meaning": "肖"
  },
  "ชอว์น": {
    "phonetic": "chhown",
    "meaning": "肖恩"
  },
  "ชะ": {
    "phonetic": "chha",
    "meaning": "查"
  },
  "ชะอม": {
    "phonetic": "cha-om",
    "meaning": "金合欢属"
  },
  "ชัค": {
    "phonetic": "chhakh",
    "meaning": "查克"
  },
  "ชัดเจน": {
    "phonetic": "chhadchen",
    "meaning": "清楚地"
  },
  "ชัดๆ": {
    "phonetic": "chát-chát",
    "meaning": "清楚地"
  },
  "ชัยชนะ": {
    "phonetic": "chhaychhna",
    "meaning": "胜利"
  },
  "ชัวร์": {
    "phonetic": "chhawr",
    "meaning": "当然"
  },
  "ชั่น": {
    "phonetic": "chan",
    "meaning": "的"
  },
  "ชั่วคราว": {
    "phonetic": "chûa-khraaw",
    "meaning": "暂时的"
  },
  "ชั่วโมง": {
    "phonetic": "chhawmong",
    "meaning": "小时"
  },
  "ชั้น": {
    "phonetic": "chhan",
    "meaning": "地面"
  },
  "ชั้นรู้": {
    "phonetic": "chhan-ruu",
    "meaning": "我知道"
  },
  "ชั้นว่า": {
    "phonetic": "chhan-waa",
    "meaning": "我说"
  },
  "ชั้นเอง": {
    "phonetic": "chhan-oeng",
    "meaning": "这就是我"
  },
  "ชั้นแค่": {
    "phonetic": "chhan-khae",
    "meaning": "我只是"
  },
  "ชา": {
    "phonetic": "chhaa",
    "meaning": "茶"
  },
  "ชาง": {
    "phonetic": "chhaang",
    "meaning": "张"
  },
  "ชางมิน": {
    "phonetic": "chhaa-ngmin",
    "meaning": "昌珉"
  },
  "ชาติ": {
    "phonetic": "châat",
    "meaning": "国家"
  },
  "ชาน": {
    "phonetic": "chhaan",
    "meaning": "陈"
  },
  "ชานติ": {
    "phonetic": "chhaan-ti",
    "meaning": "香蒂"
  },
  "ชาม": {
    "phonetic": "chaam",
    "meaning": "碗/量词"
  },
  "ชาย": {
    "phonetic": "chhaay",
    "meaning": "男性"
  },
  "ชายหาด": {
    "phonetic": "chaai-hàat",
    "meaning": "海滩"
  },
  "ชารอน": {
    "phonetic": "chhaa-ron",
    "meaning": "莎伦"
  },
  "ชาร์จ": {
    "phonetic": "cháat",
    "meaning": "收费"
  },
  "ชาร์ล": {
    "phonetic": "chhaarl",
    "meaning": "查尔斯"
  },
  "ชาร์ลส์": {
    "phonetic": "chhaarls",
    "meaning": "查尔斯"
  },
  "ชาร์ลี": {
    "phonetic": "chhaar-lii",
    "meaning": "查理"
  },
  "ชาลี": {
    "phonetic": "chhaalii",
    "meaning": "查理"
  },
  "ชาว": {
    "phonetic": "chaaw",
    "meaning": "人们"
  },
  "ชาวนา": {
    "phonetic": "chaaw-naa",
    "meaning": "农民"
  },
  "ชาเขียวนม": {
    "phonetic": "chaa-khiao-nom",
    "meaning": "冰绿奶茶"
  },
  "ชาเย็น": {
    "phonetic": "chaa-yen",
    "meaning": "冰泰茶"
  },
  "ชาแนล": {
    "phonetic": "chhaa-nael",
    "meaning": "香奈儿"
  },
  "ชาโรน่า": {
    "phonetic": "chhaa-ro-naa",
    "meaning": "莎罗娜"
  },
  "ชำระ": {
    "phonetic": "cham-rá",
    "meaning": "支付/付款"
  },
  "ชำรุด": {
    "phonetic": "cham-rút",
    "meaning": "损坏的"
  },
  "ชิ": {
    "phonetic": "chhi",
    "meaning": "施"
  },
  "ชิด": {
    "phonetic": "chít",
    "meaning": "关闭"
  },
  "ชิน": {
    "phonetic": "chhin",
    "meaning": "习惯它"
  },
  "ชินจิ": {
    "phonetic": "chhin-chi",
    "meaning": "真嗣"
  },
  "ชินอิจิ": {
    "phonetic": "chhi-noi-chi",
    "meaning": "新一"
  },
  "ชิบ": {
    "phonetic": "chhib",
    "meaning": "芯片"
  },
  "ชิบหาย": {
    "phonetic": "chhi-b-aay",
    "meaning": "破碎的"
  },
  "ชิบอน": {
    "phonetic": "chhi-bon",
    "meaning": "西邦"
  },
  "ชิบาตะ": {
    "phonetic": "chhi-baa-ta",
    "meaning": "柴田"
  },
  "ชิพ": {
    "phonetic": "chhiph",
    "meaning": "芯片"
  },
  "ชิฟ": {
    "phonetic": "chhif",
    "meaning": "芯片"
  },
  "ชิม": {
    "phonetic": "chhim",
    "meaning": "品尝"
  },
  "ชิโยโกะ": {
    "phonetic": "chhi-yo-koa",
    "meaning": "千代子"
  },
  "ชิ้น": {
    "phonetic": "chhin",
    "meaning": "件"
  },
  "ชิ้นส่วน": {
    "phonetic": "chín-sùan",
    "meaning": "零部件"
  },
  "ชีบอน": {
    "phonetic": "chhii-bon",
    "meaning": "西邦"
  },
  "ชีวิต": {
    "phonetic": "chhiiwit",
    "meaning": "生活"
  },
  "ชีส": {
    "phonetic": "chhiis",
    "meaning": "奶酪"
  },
  "ชี้": {
    "phonetic": "chíi",
    "meaning": "观点"
  },
  "ชื่นชม": {
    "phonetic": "chuen-chom",
    "meaning": "喜欢"
  },
  "ชื่อ": {
    "phonetic": "chhueo",
    "meaning": "姓名"
  },
  "ชื่อว่า": {
    "phonetic": "chhueo-waa",
    "meaning": "它被称为"
  },
  "ชุด": {
    "phonetic": "chhud",
    "meaning": "放"
  },
  "ชุน": {
    "phonetic": "chhun",
    "meaning": "顺"
  },
  "ชุมชน": {
    "phonetic": "chum-chon",
    "meaning": "社区"
  },
  "ชุมพร": {
    "phonetic": "chum-phɔɔn",
    "meaning": "春蓬"
  },
  "ชุล": {
    "phonetic": "chhul",
    "meaning": "楚尔"
  },
  "ชู": {
    "phonetic": "chhuu",
    "meaning": "楚"
  },
  "ชูจิ": {
    "phonetic": "chhuuchi",
    "meaning": "丘吉"
  },
  "ชูชีพ": {
    "phonetic": "chuu-chîip",
    "meaning": "救生"
  },
  "ชูว์": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "ชู่": {
    "phonetic": "chhuu",
    "meaning": "嘘"
  },
  "ชู่ว": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "ชู่วว": {
    "phonetic": "chhuuww",
    "meaning": "嘘"
  },
  "ชู่ววว": {
    "phonetic": "chhuuwww",
    "meaning": "嘘"
  },
  "ชู่ว์": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "ชเร็ค": {
    "phonetic": "chhrekh",
    "meaning": "施雷克"
  },
  "ช็อกโกแลต": {
    "phonetic": "chók-goo-laet",
    "meaning": "巧克力"
  },
  "ช่วง": {
    "phonetic": "chuang",
    "meaning": "范围"
  },
  "ช่วงตึก": {
    "phonetic": "chhwng-tuek",
    "meaning": "堵塞"
  },
  "ช่วงนี้": {
    "phonetic": "chhwng-nii",
    "meaning": "这段时间"
  },
  "ช่วย": {
    "phonetic": "chuay",
    "meaning": "帮助"
  },
  "ช่วยฉัน": {
    "phonetic": "chhwy-chhan",
    "meaning": "帮我"
  },
  "ช่วยที": {
    "phonetic": "chhwy-thii",
    "meaning": "请帮忙"
  },
  "ช่อง": {
    "phonetic": "chhong",
    "meaning": "渠道"
  },
  "ช่า": {
    "phonetic": "chhaa",
    "meaning": "查"
  },
  "ช่าง": {
    "phonetic": "châang",
    "meaning": "零售商"
  },
  "ช่างมัน": {
    "phonetic": "chhaang-man",
    "meaning": "没关系"
  },
  "ช่าย": {
    "phonetic": "chhaay",
    "meaning": "是的"
  },
  "ช่ายย": {
    "phonetic": "chhaayy",
    "meaning": "这是正确的"
  },
  "ช่ายยย": {
    "phonetic": "chhaayyy",
    "meaning": "这是正确的"
  },
  "ช้อป": {
    "phonetic": "chɔ́p",
    "meaning": "店铺"
  },
  "ช้า": {
    "phonetic": "chhaa",
    "meaning": "慢的"
  },
  "ช้าก่อน": {
    "phonetic": "chhaa-kon",
    "meaning": "先慢点"
  },
  "ช้าง": {
    "phonetic": "cháaŋ",
    "meaning": "大象"
  },
  "ช้าๆ": {
    "phonetic": "chaa-chaa",
    "meaning": "慢慢地"
  },
  "ซบุ๊ก": {
    "phonetic": "sa-buk",
    "meaning": "笔记本电脑"
  },
  "ซม": {
    "phonetic": "saw-maw",
    "meaning": "厘米"
  },
  "ซวยแล้ว": {
    "phonetic": "swy-laew",
    "meaning": "已经很倒霉了"
  },
  "ซอ": {
    "phonetic": "so",
    "meaning": "锯"
  },
  "ซอง": {
    "phonetic": "song",
    "meaning": "信封"
  },
  "ซอนนี่": {
    "phonetic": "son-nii",
    "meaning": "桑尼"
  },
  "ซอฟต์แวร์": {
    "phonetic": "sɔp-wae",
    "meaning": "软件"
  },
  "ซอย": {
    "phonetic": "sɔɔy",
    "meaning": "巷/胡同"
  },
  "ซอร์ส": {
    "phonetic": "sɔ́ɔt",
    "meaning": "来源"
  },
  "ซอล": {
    "phonetic": "sol",
    "meaning": "索尔"
  },
  "ซะ": {
    "phonetic": "sa",
    "meaning": "萨"
  },
  "ซะที": {
    "phonetic": "sathii",
    "meaning": "最后"
  },
  "ซะอีก": {
    "phonetic": "sa-oiik",
    "meaning": "再次"
  },
  "ซัก": {
    "phonetic": "sak",
    "meaning": "洗"
  },
  "ซักฟอก": {
    "phonetic": "sák-fɔ̂ɔk",
    "meaning": "洗"
  },
  "ซักวัน": {
    "phonetic": "sak-wan",
    "meaning": "有一天"
  },
  "ซัง": {
    "phonetic": "sang",
    "meaning": "科布"
  },
  "ซัน": {
    "phonetic": "san",
    "meaning": "太阳"
  },
  "ซับซ้อน": {
    "phonetic": "sap-sɔ́ɔn",
    "meaning": "复杂"
  },
  "ซา": {
    "phonetic": "saa",
    "meaning": "萨"
  },
  "ซากิ": {
    "phonetic": "saaki",
    "meaning": "萨基"
  },
  "ซากุระ": {
    "phonetic": "saakura",
    "meaning": "樱花"
  },
  "ซาช่า": {
    "phonetic": "saa-chhaa",
    "meaning": "萨莎"
  },
  "ซาดาโกะ": {
    "phonetic": "saa-daa-koa",
    "meaning": "贞子"
  },
  "ซาน": {
    "phonetic": "saan",
    "meaning": "桑"
  },
  "ซานต้า": {
    "phonetic": "saan-taa",
    "meaning": "圣诞老人"
  },
  "ซาราห์": {
    "phonetic": "saa-raa",
    "meaning": "莎拉"
  },
  "ซารู": {
    "phonetic": "saaruu",
    "meaning": "萨鲁"
  },
  "ซาร่า": {
    "phonetic": "saa-raa",
    "meaning": "萨拉"
  },
  "ซาร่าห์": {
    "phonetic": "saa-raa",
    "meaning": "莎拉"
  },
  "ซาเอะ": {
    "phonetic": "saa-oea",
    "meaning": "萨埃"
  },
  "ซาโตรุ": {
    "phonetic": "saa-to-ru",
    "meaning": "悟"
  },
  "ซิ": {
    "phonetic": "si",
    "meaning": "斯"
  },
  "ซิด": {
    "phonetic": "sid",
    "meaning": "席德"
  },
  "ซิดนีย์": {
    "phonetic": "sidnia",
    "meaning": "悉尼"
  },
  "ซิดนี่": {
    "phonetic": "si-d-nii",
    "meaning": "西德尼"
  },
  "ซิตี้": {
    "phonetic": "sitii",
    "meaning": "城市"
  },
  "ซินดี้": {
    "phonetic": "sin-dii",
    "meaning": "辛迪"
  },
  "ซิม": {
    "phonetic": "sim",
    "meaning": "SIM"
  },
  "ซิลเวีย": {
    "phonetic": "silweia",
    "meaning": "西尔维娅"
  },
  "ซิสโก้": {
    "phonetic": "si-s-ko",
    "meaning": "思科"
  },
  "ซี": {
    "phonetic": "sii",
    "meaning": "C"
  },
  "ซีซั่น": {
    "phonetic": "sii-san",
    "meaning": "季节"
  },
  "ซีซี": {
    "phonetic": "siisii",
    "meaning": "抄送"
  },
  "ซีฟู้ด": {
    "phonetic": "sii-fúut",
    "meaning": "海鲜"
  },
  "ซีเลีย": {
    "phonetic": "sii-leia",
    "meaning": "西莉亚"
  },
  "ซีไอเอ": {
    "phonetic": "sii-oi-oe",
    "meaning": "中央情报局"
  },
  "ซี่": {
    "phonetic": "sii",
    "meaning": "辐条"
  },
  "ซึคาสะ": {
    "phonetic": "sue-khaa-sa",
    "meaning": "司"
  },
  "ซึคุชิ": {
    "phonetic": "sue-khu-chhi",
    "meaning": "筑志"
  },
  "ซึง": {
    "phonetic": "sueng",
    "meaning": "哪个"
  },
  "ซึม": {
    "phonetic": "sʉm",
    "meaning": "渗/发呆"
  },
  "ซึ่ง": {
    "phonetic": "sueng",
    "meaning": "哪个"
  },
  "ซื้อ": {
    "phonetic": "sʉʉ",
    "meaning": "买"
  },
  "ซุก": {
    "phonetic": "suk",
    "meaning": "藏起来了"
  },
  "ซุกกี้": {
    "phonetic": "suk-kii",
    "meaning": "苏琪"
  },
  "ซุน": {
    "phonetic": "sun",
    "meaning": "太阳"
  },
  "ซุป": {
    "phonetic": "sup",
    "meaning": "汤"
  },
  "ซุปข้าวโพด": {
    "phonetic": "súp-khâao-phôot",
    "meaning": "玉米汤"
  },
  "ซู": {
    "phonetic": "suu",
    "meaning": "苏"
  },
  "ซูจิน": {
    "phonetic": "suu-chin",
    "meaning": "苏进"
  },
  "ซูซาน": {
    "phonetic": "suu-saan",
    "meaning": "苏珊"
  },
  "ซูซี่": {
    "phonetic": "suu-sii",
    "meaning": "苏西"
  },
  "ซูเคร": {
    "phonetic": "suu-kher",
    "meaning": "苏克雷"
  },
  "ซ่อน": {
    "phonetic": "son",
    "meaning": "隐藏"
  },
  "ซ่อม": {
    "phonetic": "sɔ̂ɔm",
    "meaning": "维修"
  },
  "ซ่อมแซม": {
    "phonetic": "sɔ̂ɔm-saem",
    "meaning": "维修"
  },
  "ซ้าย": {
    "phonetic": "saay",
    "meaning": "左边"
  },
  "ฌอน": {
    "phonetic": "chhon",
    "meaning": "肖恩"
  },
  "ญา": {
    "phonetic": "yaa",
    "meaning": "雅"
  },
  "ญิ": {
    "phonetic": "yi",
    "meaning": "吉"
  },
  "ญี่ปุ่น": {
    "phonetic": "yiipun",
    "meaning": "日本"
  },
  "ฐาน": {
    "phonetic": "thǎan",
    "meaning": "根据"
  },
  "ฐานข้อมูล": {
    "phonetic": "thǎan-khɔ̂ɔ-muun",
    "meaning": "数据库"
  },
  "ดง": {
    "phonetic": "dong",
    "meaning": "东"
  },
  "ดงจู": {
    "phonetic": "dngchuu",
    "meaning": "东居"
  },
  "ดงชอล": {
    "phonetic": "dng-chhol",
    "meaning": "东哲"
  },
  "ดงอุก": {
    "phonetic": "dng-ouk",
    "meaning": "东旭"
  },
  "ดงอุค": {
    "phonetic": "dng-oukh",
    "meaning": "东旭"
  },
  "ดนตรี": {
    "phonetic": "dntrii",
    "meaning": "音乐"
  },
  "ดร": {
    "phonetic": "daawk-dtəə",
    "meaning": "博士"
  },
  "ดอก": {
    "phonetic": "dok",
    "meaning": "花"
  },
  "ดอกเบี้ย": {
    "phonetic": "dɔɔk-biia",
    "meaning": "利息"
  },
  "ดอกเบี้ยทบต้น": {
    "phonetic": "dɔɔk-biia-thop-dton",
    "meaning": "复利/复息"
  },
  "ดอกไม้": {
    "phonetic": "dokmi",
    "meaning": "花朵"
  },
  "ดอง": {
    "phonetic": "dong",
    "meaning": "腌制的"
  },
  "ดอน": {
    "phonetic": "don",
    "meaning": "大学教师"
  },
  "ดอนนี่": {
    "phonetic": "don-nii",
    "meaning": "唐尼"
  },
  "ดอนน่า": {
    "phonetic": "don-naa",
    "meaning": "唐娜"
  },
  "ดอม": {
    "phonetic": "dom",
    "meaning": "多姆"
  },
  "ดอริส": {
    "phonetic": "d-ori-s",
    "meaning": "多丽丝"
  },
  "ดอร์ริท": {
    "phonetic": "d-or-rith",
    "meaning": "杜丽特"
  },
  "ดอล": {
    "phonetic": "dol",
    "meaning": "美元"
  },
  "ดอลลาร์": {
    "phonetic": "dollaar",
    "meaning": "美元"
  },
  "ดอลล่า": {
    "phonetic": "dol-laa",
    "meaning": "美元"
  },
  "ดอว์น": {
    "phonetic": "down",
    "meaning": "黎明"
  },
  "ดอโรธี": {
    "phonetic": "do-rothii",
    "meaning": "多萝西"
  },
  "ดะ": {
    "phonetic": "da",
    "meaning": "达"
  },
  "ดัก": {
    "phonetic": "dak",
    "meaning": "陷阱"
  },
  "ดักลาส": {
    "phonetic": "daklaas",
    "meaning": "道格拉斯"
  },
  "ดัง": {
    "phonetic": "dang",
    "meaning": "作为"
  },
  "ดังนั้น": {
    "phonetic": "dang-nan",
    "meaning": "所以"
  },
  "ดัชนี": {
    "phonetic": "dat-cha-nii",
    "meaning": "指数"
  },
  "ดัด": {
    "phonetic": "dtàt",
    "meaning": "弯曲"
  },
  "ดัน": {
    "phonetic": "dan",
    "meaning": "推"
  },
  "ดันน์": {
    "phonetic": "dan-n",
    "meaning": "邓恩"
  },
  "ดันแคน": {
    "phonetic": "dan-khaen",
    "meaning": "邓肯"
  },
  "ดันแฮม": {
    "phonetic": "dan-haem",
    "meaning": "邓纳姆"
  },
  "ดับ": {
    "phonetic": "dàp",
    "meaning": "熄灭"
  },
  "ดั่ง": {
    "phonetic": "dàng",
    "meaning": "作为"
  },
  "ดั้งเดิม": {
    "phonetic": "dâng-doem",
    "meaning": "原来的"
  },
  "ดั๊ก": {
    "phonetic": "dak",
    "meaning": "道格"
  },
  "ดา": {
    "phonetic": "daa",
    "meaning": "达"
  },
  "ดาจี": {
    "phonetic": "daachii",
    "meaning": "妲己"
  },
  "ดาน่า": {
    "phonetic": "daa-naa",
    "meaning": "达纳"
  },
  "ดาบ": {
    "phonetic": "daab",
    "meaning": "剑"
  },
  "ดารา": {
    "phonetic": "daa-raa",
    "meaning": "名人"
  },
  "ดาร์ซี่": {
    "phonetic": "daar-sii",
    "meaning": "达西"
  },
  "ดาร์วิน": {
    "phonetic": "daar-win",
    "meaning": "达尔文"
  },
  "ดาร์เรน": {
    "phonetic": "daar-ren",
    "meaning": "达伦"
  },
  "ดาว": {
    "phonetic": "daaw",
    "meaning": "星星"
  },
  "ดาวน์โหลด": {
    "phonetic": "daaw-loot",
    "meaning": "下载"
  },
  "ดำ": {
    "phonetic": "da",
    "meaning": "黑色的"
  },
  "ดำเนิน": {
    "phonetic": "dam-noen",
    "meaning": "进行/执行"
  },
  "ดำเนินการ": {
    "phonetic": "dam-noen-gaan",
    "meaning": "执行/处理"
  },
  "ดำเนินสะดวก": {
    "phonetic": "dam-noen-sà-dùak",
    "meaning": "丹嫩沙多"
  },
  "ดิ": {
    "phonetic": "di",
    "meaning": "这"
  },
  "ดิง": {
    "phonetic": "ding",
    "meaning": "丁"
  },
  "ดิจิทัล": {
    "phonetic": "dì-jì-than",
    "meaning": "数字的"
  },
  "ดิฉัน": {
    "phonetic": "dichhan",
    "meaning": "我"
  },
  "ดิน": {
    "phonetic": "din",
    "meaning": "地球"
  },
  "ดินเนอร์": {
    "phonetic": "din-noe",
    "meaning": "晚餐"
  },
  "ดิมิทรี": {
    "phonetic": "di-mi-thrii",
    "meaning": "迪米特里"
  },
  "ดิ้ง": {
    "phonetic": "dîng",
    "meaning": "丁"
  },
  "ดิ๊ก": {
    "phonetic": "dik",
    "meaning": "迪克"
  },
  "ดี": {
    "phonetic": "dii",
    "meaning": "好的"
  },
  "ดีกว่า": {
    "phonetic": "dii-kwaa",
    "meaning": "更好的"
  },
  "ดีขึ้น": {
    "phonetic": "dii-khuen",
    "meaning": "更好的"
  },
  "ดีครับ": {
    "phonetic": "dii-khrab",
    "meaning": "好的"
  },
  "ดีค่ะ": {
    "phonetic": "dii-kha",
    "meaning": "好的"
  },
  "ดีจริง": {
    "phonetic": "dii-chring",
    "meaning": "真的很好"
  },
  "ดีจริงๆ": {
    "phonetic": "dii-jing-jing",
    "meaning": "真的很好"
  },
  "ดีจัง": {
    "phonetic": "dii-chang",
    "meaning": "非常好"
  },
  "ดีจ้ะ": {
    "phonetic": "dii-cha",
    "meaning": "好的"
  },
  "ดีจ๊ะ": {
    "phonetic": "dii-cha",
    "meaning": "好的"
  },
  "ดีซี": {
    "phonetic": "diisii",
    "meaning": "直流"
  },
  "ดีน": {
    "phonetic": "diin",
    "meaning": "院长"
  },
  "ดีนะ": {
    "phonetic": "diina",
    "meaning": "好的"
  },
  "ดีนี่": {
    "phonetic": "dii-nii",
    "meaning": "这里很好"
  },
  "ดีมั้ย": {
    "phonetic": "dii-may",
    "meaning": "好不好"
  },
  "ดีมาก": {
    "phonetic": "dii-maak",
    "meaning": "非常好"
  },
  "ดีมากๆ": {
    "phonetic": "dii-maak-maak",
    "meaning": "非常好"
  },
  "ดีละ": {
    "phonetic": "diila",
    "meaning": "好的"
  },
  "ดีล่ะ": {
    "phonetic": "dii-la",
    "meaning": "好的"
  },
  "ดีสิ": {
    "phonetic": "diisi",
    "meaning": "好的"
  },
  "ดีเจ": {
    "phonetic": "diiche",
    "meaning": "DJ"
  },
  "ดีเร็ค": {
    "phonetic": "dii-rekh",
    "meaning": "德里克"
  },
  "ดีเลย": {
    "phonetic": "dii-lei",
    "meaning": "那挺好的"
  },
  "ดีแลน": {
    "phonetic": "dii-laen",
    "meaning": "迪伦"
  },
  "ดีแล้ว": {
    "phonetic": "diilaew",
    "meaning": "那挺好的"
  },
  "ดีใจ": {
    "phonetic": "dii-jai",
    "meaning": "快乐的"
  },
  "ดีใจจัง": {
    "phonetic": "diichai-chang",
    "meaning": "太高兴了"
  },
  "ดีไซน์": {
    "phonetic": "dii-sai",
    "meaning": "设计"
  },
  "ดีไหม": {
    "phonetic": "dii-im",
    "meaning": "好不好"
  },
  "ดีๆ": {
    "phonetic": "dii",
    "meaning": "好的"
  },
  "ดึก": {
    "phonetic": "dʉ̀k",
    "meaning": "晚的"
  },
  "ดึกแล้ว": {
    "phonetic": "duek-laew",
    "meaning": "现在已经晚了"
  },
  "ดึง": {
    "phonetic": "dueng",
    "meaning": "拉"
  },
  "ดึงดูด": {
    "phonetic": "dʉng-dùut",
    "meaning": "画"
  },
  "ดื่ม": {
    "phonetic": "duem",
    "meaning": "喝"
  },
  "ดื่มซะ": {
    "phonetic": "duem-sa",
    "meaning": "喝吧"
  },
  "ดื่มสิ": {
    "phonetic": "duem-si",
    "meaning": "喝吧"
  },
  "ดื่มเลย": {
    "phonetic": "duem-lei",
    "meaning": "现在喝吧"
  },
  "ดุสิต": {
    "phonetic": "dù-sìt",
    "meaning": "都喜"
  },
  "ดุ๊ก": {
    "phonetic": "duk",
    "meaning": "公爵"
  },
  "ดุ๊ค": {
    "phonetic": "dukh",
    "meaning": "公爵"
  },
  "ดู": {
    "phonetic": "duu",
    "meaning": "看"
  },
  "ดูคุณสิ": {
    "phonetic": "duu-khun-si",
    "meaning": "看看你"
  },
  "ดูฉันสิ": {
    "phonetic": "duu-chhan-si",
    "meaning": "看着我"
  },
  "ดูซะ": {
    "phonetic": "duusa",
    "meaning": "看"
  },
  "ดูซิ": {
    "phonetic": "duusi",
    "meaning": "看"
  },
  "ดูด": {
    "phonetic": "dùut",
    "meaning": "吸"
  },
  "ดูดิ": {
    "phonetic": "duudi",
    "meaning": "看"
  },
  "ดูดี": {
    "phonetic": "duudii",
    "meaning": "看起来不错"
  },
  "ดูดีนะ": {
    "phonetic": "duu-dii-na",
    "meaning": "看起来不错"
  },
  "ดูดีนี่": {
    "phonetic": "duu-dii-nii",
    "meaning": "看看这个"
  },
  "ดูดีมาก": {
    "phonetic": "duu-dii-maak",
    "meaning": "看起来非常好"
  },
  "ดูนะ": {
    "phonetic": "duuna",
    "meaning": "看"
  },
  "ดูนั่น": {
    "phonetic": "duu-nan",
    "meaning": "看看那个"
  },
  "ดูนายสิ": {
    "phonetic": "duu-naay-si",
    "meaning": "看看你"
  },
  "ดูนี่": {
    "phonetic": "duu-nii",
    "meaning": "看看这个"
  },
  "ดูนี่ซิ": {
    "phonetic": "duu-nii-si",
    "meaning": "看看这个"
  },
  "ดูนี่นะ": {
    "phonetic": "duu-nii-na",
    "meaning": "看看这个"
  },
  "ดูนี่สิ": {
    "phonetic": "duu-nii-si",
    "meaning": "看看这个"
  },
  "ดูมันสิ": {
    "phonetic": "duu-man-si",
    "meaning": "看看它"
  },
  "ดูสิ": {
    "phonetic": "duusi",
    "meaning": "看"
  },
  "ดูหนัง": {
    "phonetic": "duu-nang",
    "meaning": "看电影"
  },
  "ดูเขาสิ": {
    "phonetic": "duu-kheaa-si",
    "meaning": "看看他"
  },
  "ดูแล": {
    "phonetic": "duulae",
    "meaning": "小心"
  },
  "ดูแล้ว": {
    "phonetic": "duu-laew",
    "meaning": "已经看过了"
  },
  "ดูให้ดี": {
    "phonetic": "duu-ai-dii",
    "meaning": "仔细看"
  },
  "ด็อก": {
    "phonetic": "dok",
    "meaning": "博士"
  },
  "ด่วน": {
    "phonetic": "duan",
    "meaning": "紧迫的"
  },
  "ด่วนเลย": {
    "phonetic": "dwn-lei",
    "meaning": "紧迫的"
  },
  "ด้วย": {
    "phonetic": "duay",
    "meaning": "还"
  },
  "ด้วยกัน": {
    "phonetic": "dwy-kan",
    "meaning": "一起"
  },
  "ด้วยนะ": {
    "phonetic": "dwy-na",
    "meaning": "也"
  },
  "ด้าน": {
    "phonetic": "daan",
    "meaning": "边"
  },
  "ตก": {
    "phonetic": "dtòk",
    "meaning": "落下"
  },
  "ตกค้าง": {
    "phonetic": "dtok-khaang",
    "meaning": "残留物"
  },
  "ตกลง": {
    "phonetic": "dtok-long",
    "meaning": "好的"
  },
  "ตกลงค่ะ": {
    "phonetic": "tklng-kha",
    "meaning": "好的"
  },
  "ตกลงนะ": {
    "phonetic": "tklng-na",
    "meaning": "好的"
  },
  "ตกลงว่า": {
    "phonetic": "tklng-waa",
    "meaning": "同意了"
  },
  "ตกลงไหม": {
    "phonetic": "tklng-im",
    "meaning": "这样可以吗"
  },
  "ตกหนัก": {
    "phonetic": "dtok-nàk",
    "meaning": "大雨"
  },
  "ตกใจ": {
    "phonetic": "dtòk-jai",
    "meaning": "惊讶"
  },
  "ตน": {
    "phonetic": "dton",
    "meaning": "人/自身"
  },
  "ตนเอง": {
    "phonetic": "dton-eeng",
    "meaning": "自己"
  },
  "ตรง": {
    "phonetic": "trong",
    "meaning": "直的"
  },
  "ตรงนั้น": {
    "phonetic": "trng-nan",
    "meaning": "那里"
  },
  "ตรงนี้": {
    "phonetic": "trng-nii",
    "meaning": "就在这里"
  },
  "ตรงโน้น": {
    "phonetic": "trng-non",
    "meaning": "在那边"
  },
  "ตรงไหน": {
    "phonetic": "trng-in",
    "meaning": "在哪里"
  },
  "ตรวจ": {
    "phonetic": "bdtruuat",
    "meaning": "检查"
  },
  "ตรวจสอบ": {
    "phonetic": "trwch-sob",
    "meaning": "查看"
  },
  "ตระหนัก": {
    "phonetic": "dtra-nàk",
    "meaning": "意识到"
  },
  "ตรา": {
    "phonetic": "dtraa",
    "meaning": "品牌"
  },
  "ตรู่": {
    "phonetic": "dtrùu",
    "meaning": "很早"
  },
  "ตลก": {
    "phonetic": "ta-lok",
    "meaning": "有趣的"
  },
  "ตลกจัง": {
    "phonetic": "tlk-chang",
    "meaning": "太有趣了"
  },
  "ตลกดี": {
    "phonetic": "tlk-dii",
    "meaning": "很搞笑"
  },
  "ตลกดีนะ": {
    "phonetic": "tlk-dii-na",
    "meaning": "那很好笑"
  },
  "ตลกนะ": {
    "phonetic": "tlk-na",
    "meaning": "那很好笑"
  },
  "ตลกน่า": {
    "phonetic": "tlk-naa",
    "meaning": "有趣的"
  },
  "ตลกมาก": {
    "phonetic": "tlk-maak",
    "meaning": "很搞笑"
  },
  "ตลอด": {
    "phonetic": "tlod",
    "meaning": "一直以来"
  },
  "ตลอดกาล": {
    "phonetic": "tlod-kaal",
    "meaning": "永远"
  },
  "ตลอดชีวิต": {
    "phonetic": "dtà-lɔ̀ɔt-chii-wít",
    "meaning": "一生/终身"
  },
  "ตลอดมา": {
    "phonetic": "tlod-maa",
    "meaning": "一直"
  },
  "ตลอดไป": {
    "phonetic": "tlod-pi",
    "meaning": "永远"
  },
  "ตลาด": {
    "phonetic": "dta-laat",
    "meaning": "市场"
  },
  "ตลาดนัดจตุจักร": {
    "phonetic": "dta-laat-nat-ja-dtu-jak",
    "meaning": "乍都乍周末市场"
  },
  "ตลาดสด": {
    "phonetic": "dta-laat-sot",
    "meaning": "生鲜市场"
  },
  "ตอน": {
    "phonetic": "ton",
    "meaning": "部分 / 阶段 / 时候 / 章节"
  },
  "ตอนที่": {
    "phonetic": "ton-thii",
    "meaning": "第...部 / 第...章 / 时候 / 集"
  },
  "ตอนนั้น": {
    "phonetic": "ton-nan",
    "meaning": "当时"
  },
  "ตอนนี้": {
    "phonetic": "ton-nii",
    "meaning": "现在"
  },
  "ตอนอายุ": {
    "phonetic": "ton-oaayu",
    "meaning": "到了年龄"
  },
  "ตอนเช้า": {
    "phonetic": "ton-chheaa",
    "meaning": "早晨"
  },
  "ตอนแรก": {
    "phonetic": "ton-raek",
    "meaning": "第一集"
  },
  "ตอบ": {
    "phonetic": "dtɔ̀ɔp",
    "meaning": "回复"
  },
  "ตอบด้วย": {
    "phonetic": "tob-dwy",
    "meaning": "请回答"
  },
  "ตอบมา": {
    "phonetic": "tob-maa",
    "meaning": "回答我"
  },
  "ตอบสิ": {
    "phonetic": "tob-si",
    "meaning": "回答"
  },
  "ตอบแทน": {
    "phonetic": "dtɔ̀ɔp-thaen",
    "meaning": "报酬"
  },
  "ตอแหล": {
    "phonetic": "toael",
    "meaning": "说谎"
  },
  "ตะ": {
    "phonetic": "ta",
    "meaning": "T"
  },
  "ตะวันออกกลาง": {
    "phonetic": "dta-wan-ɔ̀ɔk-glaang",
    "meaning": "中东"
  },
  "ตะโกน": {
    "phonetic": "takon",
    "meaning": "喊"
  },
  "ตะไคร้": {
    "phonetic": "tà-khrái",
    "meaning": "柠檬草/香茅"
  },
  "ตัก": {
    "phonetic": "dtàk",
    "meaning": "圈"
  },
  "ตักเตือน": {
    "phonetic": "dtàk-dtʉan",
    "meaning": "警告/提醒"
  },
  "ตังค์": {
    "phonetic": "dtang",
    "meaning": "钱"
  },
  "ตัด": {
    "phonetic": "tad",
    "meaning": "切"
  },
  "ตัดผม": {
    "phonetic": "dtàt-phǒm",
    "meaning": "理发"
  },
  "ตัดสิน": {
    "phonetic": "dtàt-sǐn",
    "meaning": "决定"
  },
  "ตัน": {
    "phonetic": "tan",
    "meaning": "吨"
  },
  "ตับ": {
    "phonetic": "tàp",
    "meaning": "猪肝/肝脏"
  },
  "ตัว": {
    "phonetic": "taw",
    "meaning": "身体"
  },
  "ตัวจริง": {
    "phonetic": "taw-chring",
    "meaning": "真正的"
  },
  "ตัวฉัน": {
    "phonetic": "taw-chhan",
    "meaning": "我"
  },
  "ตัวอย่าง": {
    "phonetic": "dtuua-yaang",
    "meaning": "例子"
  },
  "ตัวเลข": {
    "phonetic": "tawlekh",
    "meaning": "数字"
  },
  "ตัวเล็ก": {
    "phonetic": "taw-lek",
    "meaning": "身体小"
  },
  "ตัวเอง": {
    "phonetic": "taw-oeng",
    "meaning": "你自己"
  },
  "ตัวแทน": {
    "phonetic": "tawthaen",
    "meaning": "代理人"
  },
  "ตั้ง": {
    "phonetic": "tang",
    "meaning": "放"
  },
  "ตั้งแต่": {
    "phonetic": "tangtae",
    "meaning": "自从"
  },
  "ตั้งใจ": {
    "phonetic": "tangchai",
    "meaning": "意图"
  },
  "ตั๋ว": {
    "phonetic": "dtǔa",
    "meaning": "票"
  },
  "ตา": {
    "phonetic": "taa",
    "meaning": "眼睛"
  },
  "ตาฉัน": {
    "phonetic": "taa-chhan",
    "meaning": "我的眼睛"
  },
  "ตาม": {
    "phonetic": "taam",
    "meaning": "跟随"
  },
  "ตามนั้น": {
    "phonetic": "taam-nan",
    "meaning": "据此"
  },
  "ตามผมมา": {
    "phonetic": "taam-phm-maa",
    "meaning": "跟我来"
  },
  "ตามมา": {
    "phonetic": "taam-maa",
    "meaning": "跟着走吧"
  },
  "ตามสบาย": {
    "phonetic": "taam-sbaay",
    "meaning": "如你所愿"
  },
  "ตามใจ": {
    "phonetic": "taamchai",
    "meaning": "如你所愿"
  },
  "ตามไป": {
    "phonetic": "taam-pi",
    "meaning": "跟着走吧"
  },
  "ตาย": {
    "phonetic": "taay",
    "meaning": "死"
  },
  "ตายจริง": {
    "phonetic": "taay-chring",
    "meaning": "真的死了"
  },
  "ตายซะ": {
    "phonetic": "taay-sa",
    "meaning": "死"
  },
  "ตายละ": {
    "phonetic": "taay-la",
    "meaning": "我死了"
  },
  "ตายล่ะ": {
    "phonetic": "taay-la",
    "meaning": "我死了"
  },
  "ตายห่า": {
    "phonetic": "taayaa",
    "meaning": "天哪"
  },
  "ตายแน่": {
    "phonetic": "taay-nae",
    "meaning": "肯定死了"
  },
  "ตายแล้ว": {
    "phonetic": "taay-laew",
    "meaning": "死的"
  },
  "ตาราง": {
    "phonetic": "dtaa-raang",
    "meaning": "时刻表/表格"
  },
  "ตาแก่": {
    "phonetic": "taa-kae",
    "meaning": "老头儿"
  },
  "ตำนาน": {
    "phonetic": "tanaan",
    "meaning": "传奇"
  },
  "ตำรวจ": {
    "phonetic": "tarwch",
    "meaning": "警察"
  },
  "ตำแหน่ง": {
    "phonetic": "taaenng",
    "meaning": "位置"
  },
  "ติด": {
    "phonetic": "dtìt",
    "meaning": "卡住"
  },
  "ติดขัด": {
    "phonetic": "dtit-khat",
    "meaning": "果酱"
  },
  "ติดตาม": {
    "phonetic": "dtìt-daam",
    "meaning": "跟随"
  },
  "ติดต่อ": {
    "phonetic": "tidto",
    "meaning": "接触"
  },
  "ติดสิ": {
    "phonetic": "tid-si",
    "meaning": "坚持下去"
  },
  "ตินติน": {
    "phonetic": "tin-tin",
    "meaning": "丁丁"
  },
  "ติ๊ก": {
    "phonetic": "tik",
    "meaning": "打钩"
  },
  "ตี": {
    "phonetic": "tii",
    "meaning": "打"
  },
  "ตีความ": {
    "phonetic": "dtii-khwaam",
    "meaning": "解释"
  },
  "ตึก": {
    "phonetic": "tuek",
    "meaning": "建筑"
  },
  "ตึง": {
    "phonetic": "dtʉng",
    "meaning": "紧的"
  },
  "ตึงเครียด": {
    "phonetic": "dtueng-khriat",
    "meaning": "紧张"
  },
  "ตื่น": {
    "phonetic": "tuen",
    "meaning": "醒来吧"
  },
  "ตื่นสิ": {
    "phonetic": "tuen-si",
    "meaning": "醒来吧"
  },
  "ตื่นๆ": {
    "phonetic": "tuen",
    "meaning": "醒来吧"
  },
  "ตื้น": {
    "phonetic": "dtʉ̂n",
    "meaning": "浅的"
  },
  "ตุลาคม": {
    "phonetic": "tulaakhm",
    "meaning": "十月"
  },
  "ตูม": {
    "phonetic": "tuum",
    "meaning": "繁荣"
  },
  "ตู้": {
    "phonetic": "dtûu",
    "meaning": "柜子/售货机"
  },
  "ต่อ": {
    "phonetic": "to",
    "meaning": "继续"
  },
  "ต่อมา": {
    "phonetic": "to-maa",
    "meaning": "之后"
  },
  "ต่อสู้": {
    "phonetic": "tosuu",
    "meaning": "斗争"
  },
  "ต่อเลย": {
    "phonetic": "to-lei",
    "meaning": "继续"
  },
  "ต่อไป": {
    "phonetic": "to-pi",
    "meaning": "下一个"
  },
  "ต่าง": {
    "phonetic": "dtàang",
    "meaning": "不同的"
  },
  "ต่างหาก": {
    "phonetic": "taang-aak",
    "meaning": "分别地"
  },
  "ต่างๆ": {
    "phonetic": "dtàang-dtàang",
    "meaning": "各种各样的"
  },
  "ต่ำ": {
    "phonetic": "dtàm",
    "meaning": "低的"
  },
  "ต่ำที่สุด": {
    "phonetic": "tàm-thîi-sùt",
    "meaning": "最小 / 最低"
  },
  "ต้น": {
    "phonetic": "dtôn",
    "meaning": "植物"
  },
  "ต้นทุน": {
    "phonetic": "dtôn-thun",
    "meaning": "成本"
  },
  "ต้นไม้": {
    "phonetic": "tnmi",
    "meaning": "树"
  },
  "ต้ม": {
    "phonetic": "dtôm",
    "meaning": "煮/炖"
  },
  "ต้มข่า": {
    "phonetic": "tom-khaa",
    "meaning": "椰汁鸡汤"
  },
  "ต้มข่าไก่": {
    "phonetic": "tom-khaa-gai",
    "meaning": "椰奶鸡汤"
  },
  "ต้มยำ": {
    "phonetic": "tom-yam",
    "meaning": "冬阴功"
  },
  "ต้มยำกุ้ง": {
    "phonetic": "tom-yam-gung",
    "meaning": "冬阴功汤"
  },
  "ต้อง": {
    "phonetic": "tong",
    "meaning": "必须"
  },
  "ต้องการ": {
    "phonetic": "dtâung-gaan",
    "meaning": "需要 / 想要"
  },
  "ต้องเต": {
    "phonetic": "dtɔ̂ng-dtee",
    "meaning": "我必须。"
  },
  "ต้อนรับ": {
    "phonetic": "dtɔ̂n-ráp",
    "meaning": "欢迎"
  },
  "ต๊อก": {
    "phonetic": "dtók",
    "meaning": "托克"
  },
  "ต๊าย": {
    "phonetic": "taay",
    "meaning": "呼"
  },
  "ต์": {
    "phonetic": "t",
    "meaning": "t"
  },
  "ถนน": {
    "phonetic": "thà-nǒn",
    "meaning": "马路/街道"
  },
  "ถนนเยาวราช": {
    "phonetic": "tha-non-yao-wa-raat",
    "meaning": "唐人街"
  },
  "ถอย": {
    "phonetic": "thoy",
    "meaning": "撤退"
  },
  "ถอยกลับ": {
    "phonetic": "thoy-klab",
    "meaning": "撤退"
  },
  "ถอยก่อน": {
    "phonetic": "thoy-kon",
    "meaning": "先退后吧"
  },
  "ถอยไป": {
    "phonetic": "thoy-pi",
    "meaning": "走开"
  },
  "ถอยไปนะ": {
    "phonetic": "thoy-pi-na",
    "meaning": "移到一边"
  },
  "ถัง": {
    "phonetic": "thang",
    "meaning": "桶"
  },
  "ถัด": {
    "phonetic": "thàt",
    "meaning": "下一个"
  },
  "ถั่ว": {
    "phonetic": "thùa",
    "meaning": "豆"
  },
  "ถั่วทอง": {
    "phonetic": "thùa-thɔɔng",
    "meaning": "花生"
  },
  "ถาม": {
    "phonetic": "thaam",
    "meaning": "问"
  },
  "ถามจริง": {
    "phonetic": "thaam-chring",
    "meaning": "真的问"
  },
  "ถามทำไม": {
    "phonetic": "thaam-thami",
    "meaning": "你为什么问"
  },
  "ถิ่น": {
    "phonetic": "thìn",
    "meaning": "当地的"
  },
  "ถึง": {
    "phonetic": "thueng",
    "meaning": "到"
  },
  "ถึงที่": {
    "phonetic": "thueng-thîi",
    "meaning": "到达地点"
  },
  "ถึงแม้": {
    "phonetic": "thueng-mae",
    "meaning": "虽然"
  },
  "ถึงแล้ว": {
    "phonetic": "thueng-laew",
    "meaning": "我们到了"
  },
  "ถือ": {
    "phonetic": "thʉ̌ʉ",
    "meaning": "抓住"
  },
  "ถือไว้": {
    "phonetic": "thueo-wi",
    "meaning": "握住它"
  },
  "ถุง": {
    "phonetic": "thǔng",
    "meaning": "包"
  },
  "ถูก": {
    "phonetic": "thuuk",
    "meaning": "便宜的"
  },
  "ถูกฆ่า": {
    "phonetic": "thuuk-khaa",
    "meaning": "被杀了"
  },
  "ถูกต้อง": {
    "phonetic": "thuuk-tong",
    "meaning": "这是正确的"
  },
  "ถูกปาก": {
    "phonetic": "thuuk-paak",
    "meaning": "可口的"
  },
  "ถูกมั้ย": {
    "phonetic": "thuuk-may",
    "meaning": "是这样吗"
  },
  "ถูกมั๊ย": {
    "phonetic": "thuu-kmay",
    "meaning": "是这样吗"
  },
  "ถูกเผง": {
    "phonetic": "thuuk-pheng",
    "meaning": "这是正确的"
  },
  "ถูกแล้ว": {
    "phonetic": "thuuk-laew",
    "meaning": "这是正确的"
  },
  "ถูกไหม": {
    "phonetic": "thuuk-im",
    "meaning": "是这样吗"
  },
  "ถ่าน": {
    "phonetic": "thàan",
    "meaning": "木炭/电池"
  },
  "ถ่าย": {
    "phonetic": "thàai",
    "meaning": "拿"
  },
  "ถ่ายทอด": {
    "phonetic": "thàai-thɔ̂ɔt",
    "meaning": "中继"
  },
  "ถ้วย": {
    "phonetic": "thuay",
    "meaning": "杯子"
  },
  "ถ้า": {
    "phonetic": "thaa",
    "meaning": "如果"
  },
  "ถ้าคุณ": {
    "phonetic": "thaa-khun",
    "meaning": "如果你"
  },
  "ถ้างั้น": {
    "phonetic": "thaa-ngan",
    "meaning": "然后"
  },
  "ถ้าฉัน": {
    "phonetic": "thaa-chhan",
    "meaning": "如果我"
  },
  "ถ้ามี": {
    "phonetic": "thaa-mii",
    "meaning": "如果有的话"
  },
  "ถ้าหาก": {
    "phonetic": "thaa-aak",
    "meaning": "如果"
  },
  "ถ้าไม่": {
    "phonetic": "thaa-mi",
    "meaning": "如果不"
  },
  "ทดลอง": {
    "phonetic": "thót-lɔɔng",
    "meaning": "试用/尝试"
  },
  "ทดสอบ": {
    "phonetic": "thdsob",
    "meaning": "测试"
  },
  "ทดแทน": {
    "phonetic": "thót-thaen",
    "meaning": "代替"
  },
  "ทบ": {
    "phonetic": "thóp",
    "meaning": "军队"
  },
  "ทบต้น": {
    "phonetic": "thop-dton",
    "meaning": "滚存/滚利"
  },
  "ทบทวน": {
    "phonetic": "thop-thuan",
    "meaning": "审查"
  },
  "ทยอย": {
    "phonetic": "tha-yɔɔi",
    "meaning": "逐步地"
  },
  "ทรง": {
    "phonetic": "song",
    "meaning": "发型/造型"
  },
  "ทรอย": {
    "phonetic": "throy",
    "meaning": "特洛伊"
  },
  "ทรัพยากร": {
    "phonetic": "sap-pha-yaa-gɔɔn",
    "meaning": "资源"
  },
  "ทรัพยากรธรรมชาติ": {
    "phonetic": "sap-pha-yaa-gɔɔn-tham-ma-chaat",
    "meaning": "自然资源"
  },
  "ทราบ": {
    "phonetic": "saap",
    "meaning": "知道/晓得"
  },
  "ทราวิส": {
    "phonetic": "thraa-wis",
    "meaning": "特拉维斯"
  },
  "ทริค": {
    "phonetic": "thrikh",
    "meaning": "诡计"
  },
  "ทริช": {
    "phonetic": "thrichh",
    "meaning": "崔西"
  },
  "ทริป": {
    "phonetic": "thrip",
    "meaning": "旅行"
  },
  "ทริส": {
    "phonetic": "thris",
    "meaning": "特里斯"
  },
  "ทรุด": {
    "phonetic": "sút",
    "meaning": "倒塌"
  },
  "ทรูแมน": {
    "phonetic": "thruu-maen",
    "meaning": "杜鲁门"
  },
  "ทหาร": {
    "phonetic": "thaar",
    "meaning": "士兵"
  },
  "ทอง": {
    "phonetic": "thong",
    "meaning": "金子"
  },
  "ทอด": {
    "phonetic": "thɔ̂ɔt",
    "meaning": "炸/炸的"
  },
  "ทอดด์": {
    "phonetic": "thod-d",
    "meaning": "托德"
  },
  "ทอดสมอ": {
    "phonetic": "thɔ̂ɔt-sa-mɔ̌ɔ",
    "meaning": "锚"
  },
  "ทอม": {
    "phonetic": "thom",
    "meaning": "汤姆"
  },
  "ทอมมี่": {
    "phonetic": "thom-mii",
    "meaning": "汤米"
  },
  "ทะ": {
    "phonetic": "tha",
    "meaning": "Th"
  },
  "ทะลุ": {
    "phonetic": "tha-lu",
    "meaning": "突破/穿透"
  },
  "ทะเบียน": {
    "phonetic": "thá-bian",
    "meaning": "登记"
  },
  "ทะเล": {
    "phonetic": "thale",
    "meaning": "海"
  },
  "ทักษะ": {
    "phonetic": "thák-sà",
    "meaning": "技能"
  },
  "ทัค": {
    "phonetic": "thakh",
    "meaning": "塔克"
  },
  "ทัตซึยะ": {
    "phonetic": "that-sue-ya",
    "meaning": "达也"
  },
  "ทัน": {
    "phonetic": "than",
    "meaning": "来得及"
  },
  "ทันที": {
    "phonetic": "thanthii",
    "meaning": "立即地"
  },
  "ทับ": {
    "phonetic": "tháp",
    "meaning": "压碎"
  },
  "ทัวร์": {
    "phonetic": "thua",
    "meaning": "旅游"
  },
  "ทัศนคติ": {
    "phonetic": "that-sa-na-kha-ti",
    "meaning": "态度"
  },
  "ทัศนวิสัย": {
    "phonetic": "thát-sà-ná-wí-sǎi",
    "meaning": "能见度"
  },
  "ทั่ว": {
    "phonetic": "thûa",
    "meaning": "超过"
  },
  "ทั่วไป": {
    "phonetic": "thua-bpai",
    "meaning": "普通/大众"
  },
  "ทั้ง": {
    "phonetic": "thang",
    "meaning": "两个都"
  },
  "ทั้งคู่": {
    "phonetic": "thang-khuu",
    "meaning": "两个都"
  },
  "ทั้งวัน": {
    "phonetic": "thang-wan",
    "meaning": "一整天"
  },
  "ทั้งหมด": {
    "phonetic": "thangmd",
    "meaning": "全部"
  },
  "ทั้งๆ": {
    "phonetic": "thang-thang",
    "meaning": "尽管"
  },
  "ทา": {
    "phonetic": "thaa",
    "meaning": "申请"
  },
  "ทาคาชิ": {
    "phonetic": "thaa-khaa-chhi",
    "meaning": "隆"
  },
  "ทาคิดะ": {
    "phonetic": "thaa-khid-a",
    "meaning": "泷田"
  },
  "ทาคุมิ": {
    "phonetic": "thaa-khu-mi",
    "meaning": "拓海"
  },
  "ทาง": {
    "phonetic": "thaang",
    "meaning": "道路"
  },
  "ทางการ": {
    "phonetic": "thaang-gaan",
    "meaning": "正式的"
  },
  "ทางขวา": {
    "phonetic": "thaang-khwaa",
    "meaning": "向右"
  },
  "ทางซ้าย": {
    "phonetic": "thaang-saay",
    "meaning": "向左转"
  },
  "ทางด่วน": {
    "phonetic": "thaang-duan",
    "meaning": "高速公路"
  },
  "ทางนั้น": {
    "phonetic": "thaang-nan",
    "meaning": "那样"
  },
  "ทางนี้": {
    "phonetic": "thaang-nii",
    "meaning": "这边走"
  },
  "ทางออก": {
    "phonetic": "thaang-ɔ̀ɔk",
    "meaning": "出口"
  },
  "ทางโน้น": {
    "phonetic": "thaang-non",
    "meaning": "在那边"
  },
  "ทางไหน": {
    "phonetic": "thaang-in",
    "meaning": "哪条路"
  },
  "ทาน": {
    "phonetic": "thaan",
    "meaning": "吃"
  },
  "ทานากะ": {
    "phonetic": "thaa-naa-ka",
    "meaning": "田中"
  },
  "ทายสิ": {
    "phonetic": "thaay-si",
    "meaning": "你猜怎么着"
  },
  "ทารก": {
    "phonetic": "thaark",
    "meaning": "婴儿"
  },
  "ทาร่า": {
    "phonetic": "thaa-raa",
    "meaning": "塔拉"
  },
  "ทาเครุ": {
    "phonetic": "thaa-khe-ru",
    "meaning": "武"
  },
  "ทาโร่": {
    "phonetic": "thaa-ro",
    "meaning": "芋头"
  },
  "ทำ": {
    "phonetic": "tham",
    "meaning": "做"
  },
  "ทำความ": {
    "phonetic": "tham-khwaam",
    "meaning": "做"
  },
  "ทำงาน": {
    "phonetic": "thangaan",
    "meaning": "工作"
  },
  "ทำซะ": {
    "phonetic": "thasa",
    "meaning": "做吧"
  },
  "ทำดีมาก": {
    "phonetic": "tha-dii-maak",
    "meaning": "做得很好"
  },
  "ทำต่อไป": {
    "phonetic": "tha-to-pi",
    "meaning": "继续做吧"
  },
  "ทำมัน": {
    "phonetic": "tha-man",
    "meaning": "做吧"
  },
  "ทำยังไง": {
    "phonetic": "tha-yang-ngi",
    "meaning": "怎么做呢"
  },
  "ทำลาย": {
    "phonetic": "thalaay",
    "meaning": "破坏"
  },
  "ทำอะไร": {
    "phonetic": "tha-oari",
    "meaning": "你在干什么"
  },
  "ทำเลย": {
    "phonetic": "tha-lei",
    "meaning": "现在就做吧"
  },
  "ทำให้": {
    "phonetic": "thaai",
    "meaning": "制作"
  },
  "ทำไงดี": {
    "phonetic": "tha-ngi-dii",
    "meaning": "我应该怎么办"
  },
  "ทำได้": {
    "phonetic": "thadi",
    "meaning": "可以做到"
  },
  "ทำได้ดี": {
    "phonetic": "thadi-dii",
    "meaning": "干得好"
  },
  "ทำไม": {
    "phonetic": "tham-mai",
    "meaning": "为什么"
  },
  "ทำไมกัน": {
    "phonetic": "thami-kan",
    "meaning": "为什么"
  },
  "ทำไมคะ": {
    "phonetic": "thami-kha",
    "meaning": "为什么"
  },
  "ทำไมคุณ": {
    "phonetic": "thami-khun",
    "meaning": "你为什么呢"
  },
  "ทำไมค่ะ": {
    "phonetic": "thami-kha",
    "meaning": "为什么"
  },
  "ทำไมนะ": {
    "phonetic": "thami-na",
    "meaning": "为什么"
  },
  "ทำไมนาย": {
    "phonetic": "thami-naay",
    "meaning": "为什么先生"
  },
  "ทำไมรึ": {
    "phonetic": "thami-rue",
    "meaning": "为什么"
  },
  "ทำไมละ": {
    "phonetic": "thami-la",
    "meaning": "为什么"
  },
  "ทำไมล่ะ": {
    "phonetic": "thami-la",
    "meaning": "为什么"
  },
  "ทำไมหรอ": {
    "phonetic": "thami-ro",
    "meaning": "为什么"
  },
  "ทำไมหละ": {
    "phonetic": "thami-la",
    "meaning": "为什么"
  },
  "ทำไมอ่ะ": {
    "phonetic": "thami-oa",
    "meaning": "为什么"
  },
  "ทำไมไม่": {
    "phonetic": "thami-mi",
    "meaning": "为什么不呢"
  },
  "ทิช": {
    "phonetic": "thít",
    "meaning": "蒂什"
  },
  "ทิม": {
    "phonetic": "thim",
    "meaning": "蒂姆"
  },
  "ทิ้ง": {
    "phonetic": "thíng",
    "meaning": "丢弃"
  },
  "ทิ้งปืน": {
    "phonetic": "thing-puen",
    "meaning": "把枪扔掉"
  },
  "ที": {
    "phonetic": "thii",
    "meaning": "次 / 下"
  },
  "ทีท่า": {
    "phonetic": "thii-thâa",
    "meaning": "态度"
  },
  "ทีนี้": {
    "phonetic": "thiinii",
    "meaning": "现在"
  },
  "ทีน่า": {
    "phonetic": "thii-naa",
    "meaning": "蒂娜"
  },
  "ทีม": {
    "phonetic": "thiim",
    "meaning": "团队"
  },
  "ทีละคน": {
    "phonetic": "thii-la-khn",
    "meaning": "逐个"
  },
  "ทีวี": {
    "phonetic": "thiiwii",
    "meaning": "电视"
  },
  "ทีเจ": {
    "phonetic": "thiiche",
    "meaning": "TJ"
  },
  "ที่": {
    "phonetic": "thii",
    "meaning": "在"
  },
  "ที่คุณ": {
    "phonetic": "thii-khun",
    "meaning": "对你"
  },
  "ที่จริง": {
    "phonetic": "thii-chring",
    "meaning": "实际上"
  },
  "ที่ชื่อ": {
    "phonetic": "thii-chhueo",
    "meaning": "就名字而言"
  },
  "ที่ดี": {
    "phonetic": "thii-dii",
    "meaning": "那挺好的"
  },
  "ที่นั่น": {
    "phonetic": "thii-nan",
    "meaning": "那里"
  },
  "ที่นี่": {
    "phonetic": "thii-nii",
    "meaning": "这里"
  },
  "ที่นี้": {
    "phonetic": "thii-nii",
    "meaning": "这里"
  },
  "ที่บ้าน": {
    "phonetic": "thii-baan",
    "meaning": "在家里"
  },
  "ที่มา": {
    "phonetic": "thîi-maa",
    "meaning": "起源"
  },
  "ที่มาก": {
    "phonetic": "thîi-mâak",
    "meaning": "很多/非常"
  },
  "ที่มากเกินไป": {
    "phonetic": "thîi-mâak-kəən-pái",
    "meaning": "太多/过分"
  },
  "ที่มี": {
    "phonetic": "thii-mii",
    "meaning": "那有"
  },
  "ที่รัก": {
    "phonetic": "thiirak",
    "meaning": "亲爱的"
  },
  "ที่ว่า": {
    "phonetic": "thii-waa",
    "meaning": "就是这样说的"
  },
  "ที่สุด": {
    "phonetic": "thiisud",
    "meaning": "最好的"
  },
  "ที่อยู่": {
    "phonetic": "thii-oyuu",
    "meaning": "地址"
  },
  "ที่แน่ๆ": {
    "phonetic": "thii-nae",
    "meaning": "这是肯定的"
  },
  "ที่ไหน": {
    "phonetic": "thîi-nǎi",
    "meaning": "哪里"
  },
  "ที่ๆ": {
    "phonetic": "thii",
    "meaning": "那个地方"
  },
  "ทุก": {
    "phonetic": "thuk",
    "meaning": "每一个"
  },
  "ทุกคน": {
    "phonetic": "thuk-khn",
    "meaning": "每个人"
  },
  "ทุกคืน": {
    "phonetic": "thuk-khuen",
    "meaning": "每个晚上"
  },
  "ทุกที่": {
    "phonetic": "thuk-thii",
    "meaning": "到处"
  },
  "ทุกท่าน": {
    "phonetic": "thuk-thaan",
    "meaning": "每个人"
  },
  "ทุกวัน": {
    "phonetic": "thuk-wan",
    "meaning": "每天"
  },
  "ทุกสิ่ง": {
    "phonetic": "thuk-sing",
    "meaning": "一切"
  },
  "ทุกเวลา": {
    "phonetic": "thuk-welaa",
    "meaning": "每次"
  },
  "ทุกๆ": {
    "phonetic": "thuk-thuk",
    "meaning": "每一个"
  },
  "ทุกๆคน": {
    "phonetic": "thuk-thukkhn",
    "meaning": "每个人"
  },
  "ทุกๆวัน": {
    "phonetic": "thuk-thukwan",
    "meaning": "每天"
  },
  "ทุงกุน": {
    "phonetic": "thu-ngkun",
    "meaning": "东贡"
  },
  "ทุน": {
    "phonetic": "thun",
    "meaning": "首都"
  },
  "ทุรกันดาร": {
    "phonetic": "thu-ra-gan-daan",
    "meaning": "荒野"
  },
  "ทุเรียน": {
    "phonetic": "thu-rian",
    "meaning": "榴莲"
  },
  "ทุเรียนหมอนทอง": {
    "phonetic": "thu-rian-mɔɔn-thɔɔng",
    "meaning": "金枕头榴莲"
  },
  "ทุ่น": {
    "phonetic": "thùn",
    "meaning": "浮标"
  },
  "ทุ่ม": {
    "phonetic": "thum",
    "meaning": "晚上7点"
  },
  "ทุ่มเท": {
    "phonetic": "thûm-thee",
    "meaning": "投入的"
  },
  "ทู": {
    "phonetic": "thuu",
    "meaning": "二"
  },
  "ทูต": {
    "phonetic": "thûut",
    "meaning": "大使"
  },
  "ทูนหัว": {
    "phonetic": "thuunaw",
    "meaning": "教父"
  },
  "ท็อป": {
    "phonetic": "thop",
    "meaning": "顶部"
  },
  "ท่วม": {
    "phonetic": "thûam",
    "meaning": "被水淹没"
  },
  "ท่อ": {
    "phonetic": "thɔ̂ɔ",
    "meaning": "管道"
  },
  "ท่อง": {
    "phonetic": "thɔ̂ɔng",
    "meaning": "背诵/游览"
  },
  "ท่องเที่ยว": {
    "phonetic": "thɔ̂ɔng-thîiao",
    "meaning": "旅游/观光"
  },
  "ท่า": {
    "phonetic": "thâa",
    "meaning": "码头"
  },
  "ท่าน": {
    "phonetic": "thaan",
    "meaning": "先生"
  },
  "ท่านคะ": {
    "phonetic": "thaan-kha",
    "meaning": "先生"
  },
  "ท่านค่ะ": {
    "phonetic": "thaan-kha",
    "meaning": "先生"
  },
  "ท่านปธน": {
    "phonetic": "thaan-p-thn",
    "meaning": "总裁"
  },
  "ท่านพี่": {
    "phonetic": "thaan-phii",
    "meaning": "兄弟"
  },
  "ท่านพ่อ": {
    "phonetic": "thaan-pho",
    "meaning": "父亲"
  },
  "ท่านลุง": {
    "phonetic": "thaan-lung",
    "meaning": "叔叔"
  },
  "ท่านหมอ": {
    "phonetic": "thaan-mo",
    "meaning": "医生"
  },
  "ท่านี้": {
    "phonetic": "thâa-níi",
    "meaning": "这个码头"
  },
  "ท่านแม่": {
    "phonetic": "thaan-mae",
    "meaning": "母亲"
  },
  "ท่าเรือ": {
    "phonetic": "thâa-ruea",
    "meaning": "港口"
  },
  "ท้อง": {
    "phonetic": "thɔ́ɔng",
    "meaning": "腹部"
  },
  "ท้องที่": {
    "phonetic": "thɔ́ɔng-thîi",
    "meaning": "当地"
  },
  "ท้าทาย": {
    "phonetic": "thaa-thaai",
    "meaning": "挑战"
  },
  "ท๊อป": {
    "phonetic": "thop",
    "meaning": "顶部"
  },
  "ท์": {
    "phonetic": "thá",
    "meaning": "t"
  },
  "ธง": {
    "phonetic": "thoŋ",
    "meaning": "旗帜"
  },
  "ธงส้ม": {
    "phonetic": "thoŋ-sôm",
    "meaning": "橙旗/橙色旗"
  },
  "ธนบัตร": {
    "phonetic": "thá-ná-bàt",
    "meaning": "纸币/钞票"
  },
  "ธนาคาร": {
    "phonetic": "thnaakhaar",
    "meaning": "银行"
  },
  "ธรรม": {
    "phonetic": "tham",
    "meaning": "公平的"
  },
  "ธรรมชาติ": {
    "phonetic": "tham-má-châat",
    "meaning": "自然"
  },
  "ธรรมดา": {
    "phonetic": "thrrmdaa",
    "meaning": "普通的"
  },
  "ธรรมเนียม": {
    "phonetic": "tham-niam",
    "meaning": "传统"
  },
  "ธอร์น": {
    "phonetic": "th-orn",
    "meaning": "刺"
  },
  "ธันวาคม": {
    "phonetic": "thanwaakhm",
    "meaning": "十二月"
  },
  "ธานี": {
    "phonetic": "thaa-nii",
    "meaning": "塔尼"
  },
  "ธีโอ": {
    "phonetic": "thiioo",
    "meaning": "西奥"
  },
  "ธุรกิจ": {
    "phonetic": "thurkich",
    "meaning": "商业"
  },
  "นก": {
    "phonetic": "nok",
    "meaning": "鸟"
  },
  "นครราชสีมา": {
    "phonetic": "na-khɔɔn-raat-cha-sǐi-maa",
    "meaning": "呵叻"
  },
  "นนทบุรี": {
    "phonetic": "non-tha-bu-rii",
    "meaning": "暖武里府"
  },
  "นนท์": {
    "phonetic": "non",
    "meaning": "夜晚"
  },
  "นม": {
    "phonetic": "nom",
    "meaning": "牛奶"
  },
  "นรก": {
    "phonetic": "na-rok",
    "meaning": "地狱"
  },
  "นวด": {
    "phonetic": "nûat",
    "meaning": "按摩"
  },
  "นวัตกรรม": {
    "phonetic": "ná-wát-dtà-gam",
    "meaning": "创新"
  },
  "นอก": {
    "phonetic": "nɔɔk",
    "meaning": "外面"
  },
  "นอกจาก": {
    "phonetic": "nokchaak",
    "meaning": "除了"
  },
  "นอง": {
    "phonetic": "nɔɔng",
    "meaning": "沼泽"
  },
  "นอน": {
    "phonetic": "non",
    "meaning": "睡觉"
  },
  "นอนลง": {
    "phonetic": "non-lng",
    "meaning": "躺"
  },
  "นอร่า": {
    "phonetic": "no-raa",
    "meaning": "诺拉"
  },
  "นอร์แมน": {
    "phonetic": "nor-maen",
    "meaning": "诺曼"
  },
  "นะ": {
    "phonetic": "ná",
    "meaning": "(语气词) 语气缓和词，表示“啊/吧/哦/哈”"
  },
  "นะครับ": {
    "phonetic": "na-khrab",
    "meaning": "请"
  },
  "นะคะ": {
    "phonetic": "nakha",
    "meaning": "请"
  },
  "นะค่ะ": {
    "phonetic": "na-kha",
    "meaning": "是的"
  },
  "นะจ๊ะ": {
    "phonetic": "ná-já",
    "meaning": "(语气词) 亲昵语气词，意为“哦/哈”"
  },
  "นัก": {
    "phonetic": "nák",
    "meaning": "学生"
  },
  "นักกีฬา": {
    "phonetic": "nák-gii-laa",
    "meaning": "运动员"
  },
  "นักข่าว": {
    "phonetic": "nak-khaaw",
    "meaning": "记者"
  },
  "นักฆ่า": {
    "phonetic": "nak-khaa",
    "meaning": "杀手"
  },
  "นักสืบ": {
    "phonetic": "naksueb",
    "meaning": "侦探"
  },
  "นักเรียน": {
    "phonetic": "nák-rian",
    "meaning": "学生"
  },
  "นักแสดง": {
    "phonetic": "nak-saedng",
    "meaning": "演员"
  },
  "นักโทษ": {
    "phonetic": "nakthot",
    "meaning": "囚犯"
  },
  "นังบ้า": {
    "phonetic": "nang-baa",
    "meaning": "疯狂的母狗"
  },
  "นัด": {
    "phonetic": "nad",
    "meaning": "预约"
  },
  "นัดหมาย": {
    "phonetic": "nát-mǎai",
    "meaning": "预约/约会"
  },
  "นัตสึกิ": {
    "phonetic": "nat-sueki",
    "meaning": "夏希"
  },
  "นับ": {
    "phonetic": "nab",
    "meaning": "数数"
  },
  "นัม": {
    "phonetic": "nam",
    "meaning": "南"
  },
  "นั่ง": {
    "phonetic": "nang",
    "meaning": "坐"
  },
  "นั่งลง": {
    "phonetic": "nang-lng",
    "meaning": "坐下"
  },
  "นั่งสิ": {
    "phonetic": "nang-si",
    "meaning": "坐"
  },
  "นั่น": {
    "phonetic": "nan",
    "meaning": "那"
  },
  "นั่นก็": {
    "phonetic": "nan-k",
    "meaning": "就是这样"
  },
  "นั่นคือ": {
    "phonetic": "nan-khueo",
    "meaning": "那是"
  },
  "นั่นน่ะ": {
    "phonetic": "nan-na",
    "meaning": "就是这样"
  },
  "นั่นมัน": {
    "phonetic": "nan-man",
    "meaning": "就是这样"
  },
  "นั่นละ": {
    "phonetic": "nan-la",
    "meaning": "就是这样"
  },
  "นั่นล่ะ": {
    "phonetic": "nan-la",
    "meaning": "就是这样"
  },
  "นั่นสิ": {
    "phonetic": "nan-si",
    "meaning": "就是这样"
  },
  "นั่นเขา": {
    "phonetic": "nan-kheaa",
    "meaning": "就是他"
  },
  "นั่นใคร": {
    "phonetic": "nan-khair",
    "meaning": "那是谁"
  },
  "นั่นใช่": {
    "phonetic": "nan-chhai",
    "meaning": "这是正确的"
  },
  "นั่นไง": {
    "phonetic": "nan-ngi",
    "meaning": "就是这样"
  },
  "นั้น": {
    "phonetic": "nan",
    "meaning": "那"
  },
  "นั้นคือ": {
    "phonetic": "nan-khueo",
    "meaning": "那是"
  },
  "นั้นมัน": {
    "phonetic": "nan-man",
    "meaning": "就是这样"
  },
  "นั้นไง": {
    "phonetic": "nan-ngi",
    "meaning": "就是这样"
  },
  "นา": {
    "phonetic": "naa",
    "meaning": "呐"
  },
  "นาง": {
    "phonetic": "naang",
    "meaning": "夫人"
  },
  "นางฟ้า": {
    "phonetic": "naangfaa",
    "meaning": "天使"
  },
  "นางสาว": {
    "phonetic": "naangsaaw",
    "meaning": "小姐"
  },
  "นาตาลี": {
    "phonetic": "naa-taa-lii",
    "meaning": "娜塔莉"
  },
  "นาที": {
    "phonetic": "naathii",
    "meaning": "分钟"
  },
  "นาทีนะ": {
    "phonetic": "naathii-na",
    "meaning": "一分钟"
  },
  "นาทีนี้": {
    "phonetic": "naathii-nii",
    "meaning": "这一刻"
  },
  "นาธาน": {
    "phonetic": "naa-thaan",
    "meaning": "内森"
  },
  "นาน": {
    "phonetic": "naan",
    "meaning": "许久"
  },
  "นานมาก": {
    "phonetic": "naan-maak",
    "meaning": "很长一段时间"
  },
  "นานา": {
    "phonetic": "naanaa",
    "meaning": "各种各样的"
  },
  "นานาชาติ": {
    "phonetic": "naa-naa-châat",
    "meaning": "国际的"
  },
  "นานามิ": {
    "phonetic": "naanaa-mi",
    "meaning": "七海"
  },
  "นานๆ": {
    "phonetic": "naan-naan",
    "meaning": "偶尔"
  },
  "นาม": {
    "phonetic": "naam",
    "meaning": "名词"
  },
  "นามสกุล": {
    "phonetic": "naam-sà-kun",
    "meaning": "姓氏"
  },
  "นาย": {
    "phonetic": "naay",
    "meaning": "先生"
  },
  "นายคือ": {
    "phonetic": "naay-khueo",
    "meaning": "你是"
  },
  "นายจะ": {
    "phonetic": "naay-cha",
    "meaning": "威尔先生"
  },
  "นายด้วย": {
    "phonetic": "naay-dwy",
    "meaning": "你也是"
  },
  "นายท่าน": {
    "phonetic": "naay-thaan",
    "meaning": "先生"
  },
  "นายนี่": {
    "phonetic": "naay-nii",
    "meaning": "倪先生"
  },
  "นายน่ะ": {
    "phonetic": "naay-na",
    "meaning": "你"
  },
  "นายน้อย": {
    "phonetic": "naay-noy",
    "meaning": "少爷"
  },
  "นายพล": {
    "phonetic": "naay-phl",
    "meaning": "一般的"
  },
  "นายมี": {
    "phonetic": "naay-mii",
    "meaning": "梅先生"
  },
  "นายรู้": {
    "phonetic": "naay-ruu",
    "meaning": "你知道"
  },
  "นายล่ะ": {
    "phonetic": "naay-la",
    "meaning": "你呢"
  },
  "นายหญิง": {
    "phonetic": "naay-ying",
    "meaning": "情妇"
  },
  "นายเป็น": {
    "phonetic": "naay-pen",
    "meaning": "彭先生"
  },
  "นายโกหก": {
    "phonetic": "naay-kok",
    "meaning": "谎言先生"
  },
  "นาฬิกา": {
    "phonetic": "naalikaa",
    "meaning": "钟"
  },
  "นาเซอร์": {
    "phonetic": "naa-seor",
    "meaning": "纳齐尔"
  },
  "นาโอกิ": {
    "phonetic": "naa-ooki",
    "meaning": "直树"
  },
  "นาโอมิ": {
    "phonetic": "naa-oo-mi",
    "meaning": "内奥米"
  },
  "นาโอะ": {
    "phonetic": "naa-ooa",
    "meaning": "奈奥"
  },
  "นำ": {
    "phonetic": "nam",
    "meaning": "带领"
  },
  "นิ": {
    "phonetic": "ni",
    "meaning": "尼"
  },
  "นิก": {
    "phonetic": "nik",
    "meaning": "缺口"
  },
  "นิกกิ": {
    "phonetic": "ni-kki",
    "meaning": "尼基"
  },
  "นิกกี้": {
    "phonetic": "ni-kkii",
    "meaning": "尼基"
  },
  "นิกิต้า": {
    "phonetic": "ni-kitaa",
    "meaning": "尼基塔"
  },
  "นิค": {
    "phonetic": "nikh",
    "meaning": "缺口"
  },
  "นิคกี้": {
    "phonetic": "nikh-kii",
    "meaning": "尼基"
  },
  "นิคม": {
    "phonetic": "ni-khom",
    "meaning": "沉降"
  },
  "นิด": {
    "phonetic": "nít",
    "meaning": "一点点"
  },
  "นิดนึง": {
    "phonetic": "nid-nueng",
    "meaning": "一点点"
  },
  "นิติบุคคล": {
    "phonetic": "ní-dtì-búk-khon",
    "meaning": "法人/物业"
  },
  "นิทรรศการ": {
    "phonetic": "ni-that-sa-gaan",
    "meaning": "展览"
  },
  "นิว": {
    "phonetic": "niw",
    "meaning": "新的"
  },
  "นิสัย": {
    "phonetic": "ni-sǎi",
    "meaning": "特点"
  },
  "นิเวศ": {
    "phonetic": "ni-wêet",
    "meaning": "生态"
  },
  "นิโคล": {
    "phonetic": "ni-khol",
    "meaning": "妮可"
  },
  "นิโคลัส": {
    "phonetic": "ni-khola-s",
    "meaning": "尼古拉斯"
  },
  "นิ่งไว้": {
    "phonetic": "ning-wi",
    "meaning": "保持静止"
  },
  "นิ้ว": {
    "phonetic": "niw",
    "meaning": "英寸"
  },
  "นี": {
    "phonetic": "nii",
    "meaning": "尼"
  },
  "นีนี่": {
    "phonetic": "nii-nii",
    "meaning": "妮妮"
  },
  "นีน่า": {
    "phonetic": "nii-naa",
    "meaning": "尼娜"
  },
  "นีล": {
    "phonetic": "niil",
    "meaning": "尼尔"
  },
  "นี่": {
    "phonetic": "nii",
    "meaning": "这里"
  },
  "นี่ครับ": {
    "phonetic": "nii-khrab",
    "meaning": "这里"
  },
  "นี่คะ": {
    "phonetic": "nii-kha",
    "meaning": "这里"
  },
  "นี่คือ": {
    "phonetic": "nii-khueo",
    "meaning": "这是"
  },
  "นี่คุณ": {
    "phonetic": "nii-khun",
    "meaning": "这就是你"
  },
  "นี่ค่ะ": {
    "phonetic": "nii-kha",
    "meaning": "这里"
  },
  "นี่จ้ะ": {
    "phonetic": "nii-cha",
    "meaning": "就是这样"
  },
  "นี่จ๊ะ": {
    "phonetic": "nii-cha",
    "meaning": "这里是"
  },
  "นี่ฉัน": {
    "phonetic": "nii-chhan",
    "meaning": "这就是我"
  },
  "นี่ด้วย": {
    "phonetic": "nii-dwy",
    "meaning": "这也是"
  },
  "นี่นะ": {
    "phonetic": "nii-na",
    "meaning": "就是这样"
  },
  "นี่นา": {
    "phonetic": "nii-naa",
    "meaning": "就是这样"
  },
  "นี่นาย": {
    "phonetic": "nii-naay",
    "meaning": "这就是你"
  },
  "นี่พวก": {
    "phonetic": "nii-phwk",
    "meaning": "他们在这里"
  },
  "นี่มัน": {
    "phonetic": "nii-man",
    "meaning": "就是这样"
  },
  "นี่ล่ะ": {
    "phonetic": "nii-la",
    "meaning": "就是这样"
  },
  "นี่อะไร": {
    "phonetic": "nii-oari",
    "meaning": "这是什么"
  },
  "นี่เป็น": {
    "phonetic": "nii-pen",
    "meaning": "这是"
  },
  "นี่เลย": {
    "phonetic": "nii-lei",
    "meaning": "这里是"
  },
  "นี่เหรอ": {
    "phonetic": "nii-e-ro",
    "meaning": "是这个吗"
  },
  "นี่เอง": {
    "phonetic": "niioeng",
    "meaning": "就是这样"
  },
  "นี่แก": {
    "phonetic": "nii-kae",
    "meaning": "给你"
  },
  "นี่แน่ะ": {
    "phonetic": "nii-naea",
    "meaning": "看哪"
  },
  "นี่แหละ": {
    "phonetic": "nii-aela",
    "meaning": "就是这样"
  },
  "นี่ใคร": {
    "phonetic": "nii-khair",
    "meaning": "这是谁"
  },
  "นี่ไง": {
    "phonetic": "nii-ngi",
    "meaning": "这里是"
  },
  "นี่ๆ": {
    "phonetic": "nii-nii",
    "meaning": "这里"
  },
  "นี้": {
    "phonetic": "nii",
    "meaning": "这"
  },
  "นี้คือ": {
    "phonetic": "nii-khueo",
    "meaning": "这是"
  },
  "นี้แหละ": {
    "phonetic": "nii-aela",
    "meaning": "就是这样"
  },
  "นึกคิด": {
    "phonetic": "nuek-khit",
    "meaning": "想象"
  },
  "นึง": {
    "phonetic": "nueng",
    "meaning": "一"
  },
  "นึ่ง": {
    "phonetic": "nʉ̂ng",
    "meaning": "蒸"
  },
  "นุ่ม": {
    "phonetic": "nûm",
    "meaning": "软的/柔顺"
  },
  "นู้ย์": {
    "phonetic": "nuuy",
    "meaning": "努伊"
  },
  "นโยบาย": {
    "phonetic": "na-yoo-baai",
    "meaning": "政策"
  },
  "น็": {
    "phonetic": "nók",
    "meaning": "氮"
  },
  "น่ะ": {
    "phonetic": "na",
    "meaning": "就是这样"
  },
  "น่ะครับ": {
    "phonetic": "na-khrab",
    "meaning": "是的"
  },
  "น่ะค่ะ": {
    "phonetic": "na-kha",
    "meaning": "是的"
  },
  "น่ะสิ": {
    "phonetic": "na-si",
    "meaning": "没错"
  },
  "น่ะเหรอ": {
    "phonetic": "na-e-ro",
    "meaning": "是这样吗"
  },
  "น่า": {
    "phonetic": "naa",
    "meaning": "好的"
  },
  "น่ากลัว": {
    "phonetic": "naa-klaw",
    "meaning": "可怕的"
  },
  "น่าจะ": {
    "phonetic": "naa-cha",
    "meaning": "大概"
  },
  "น่านะ": {
    "phonetic": "naa-na",
    "meaning": "好的"
  },
  "น่ารัก": {
    "phonetic": "naa-rak",
    "meaning": "可爱的"
  },
  "น่าสนใจ": {
    "phonetic": "naa-snchai",
    "meaning": "有趣的"
  },
  "น้อง": {
    "phonetic": "nong",
    "meaning": "妹妹"
  },
  "น้องข้า": {
    "phonetic": "nong-khaa",
    "meaning": "我的妹妹"
  },
  "น้องชาย": {
    "phonetic": "nong-chhaay",
    "meaning": "弟弟"
  },
  "น้องสาว": {
    "phonetic": "nong-saaw",
    "meaning": "妹妹"
  },
  "น้องๆ": {
    "phonetic": "nɔ́ɔng-nɔ́ɔng",
    "meaning": "孩子们"
  },
  "น้อย": {
    "phonetic": "noy",
    "meaning": "小的"
  },
  "น้อยๆ": {
    "phonetic": "noy-noy",
    "meaning": "一点"
  },
  "น้า": {
    "phonetic": "naa",
    "meaning": "叔叔"
  },
  "น้ำ": {
    "phonetic": "náam",
    "meaning": "水"
  },
  "น้ำกะทิ": {
    "phonetic": "nám-gà-thí",
    "meaning": "椰奶/椰汁"
  },
  "น้ำข้น": {
    "phonetic": "nám-khôn",
    "meaning": "浓汤/稠的"
  },
  "น้ำจิ้ม": {
    "phonetic": "nám-cîm",
    "meaning": "蘸酱/酱汁"
  },
  "น้ำซุป": {
    "phonetic": "nám-súp",
    "meaning": "汤底/汤汁"
  },
  "น้ำตา": {
    "phonetic": "nam-taa",
    "meaning": "眼泪"
  },
  "น้ำตาล": {
    "phonetic": "nataal",
    "meaning": "糖"
  },
  "น้ำท่วมขัง": {
    "phonetic": "nám-thûam-khǎŋ",
    "meaning": "积水/积涝"
  },
  "น้ำปลา": {
    "phonetic": "náam-bplaa",
    "meaning": "鱼露"
  },
  "น้ำผึ้ง": {
    "phonetic": "na-phueng",
    "meaning": "蜂蜜"
  },
  "น้ำมะพร้าวปั่น": {
    "phonetic": "nam-ma-phraaw-bpan",
    "meaning": "椰子冰沙"
  },
  "น้ำมะม่วงปั่น": {
    "phonetic": "nam-ma-muuang-bpan",
    "meaning": "芒果冰沙"
  },
  "น้ำมัน": {
    "phonetic": "náam-man",
    "meaning": "油"
  },
  "น้ำรั่วซึม": {
    "phonetic": "rûa-sʉm",
    "meaning": "渗漏/漏水"
  },
  "น้ำส้ม": {
    "phonetic": "nam-som",
    "meaning": "橙汁"
  },
  "น้ำเปล่า": {
    "phonetic": "nám-bplào",
    "meaning": "矿泉水/白开水"
  },
  "น้ำแข็ง": {
    "phonetic": "nám-khǎeng",
    "meaning": "冰块"
  },
  "น้ำใจ": {
    "phonetic": "nam-jai",
    "meaning": "仁慈"
  },
  "น้ำใส": {
    "phonetic": "nám-sǎi",
    "meaning": "清汤"
  },
  "บก": {
    "phonetic": "baaw-gaaw",
    "meaning": "编辑"
  },
  "บกพร่อง": {
    "phonetic": "bok-phrɔ̂ng",
    "meaning": "有缺陷的"
  },
  "บท": {
    "phonetic": "bòt",
    "meaning": "章"
  },
  "บทที่": {
    "phonetic": "bth-thii",
    "meaning": "章"
  },
  "บทบาท": {
    "phonetic": "bòt-bàat",
    "meaning": "角色"
  },
  "บน": {
    "phonetic": "bon",
    "meaning": "在"
  },
  "บนถนน": {
    "phonetic": "bon-tha-non",
    "meaning": "在路上"
  },
  "บนนั้น": {
    "phonetic": "bn-nan",
    "meaning": "上面"
  },
  "บรรยากาศ": {
    "phonetic": "ban-yaa-gàat",
    "meaning": "气氛"
  },
  "บรรยาย": {
    "phonetic": "brryaay",
    "meaning": "旁白"
  },
  "บรรเทา": {
    "phonetic": "ban-thao",
    "meaning": "缓解"
  },
  "บราวน์": {
    "phonetic": "braa-wn",
    "meaning": "棕色的"
  },
  "บราโว": {
    "phonetic": "braa-wo",
    "meaning": "太棒了"
  },
  "บราโว่": {
    "phonetic": "braa-wo",
    "meaning": "太棒了"
  },
  "บริกส์": {
    "phonetic": "briks",
    "meaning": "布里格斯"
  },
  "บริการ": {
    "phonetic": "bɔɔ-ri-gaan",
    "meaning": "服务"
  },
  "บริการคลาวด์จัดเก็บข้อมูล": {
    "phonetic": "bɔɔ-ri-gaan-khlaao-jat-gep-khaaw-muun",
    "meaning": "云存储服务"
  },
  "บริค": {
    "phonetic": "brikh",
    "meaning": "砖"
  },
  "บริจาค": {
    "phonetic": "bɔɔ-ri-jaak",
    "meaning": "捐"
  },
  "บริดเจท": {
    "phonetic": "brid-cheth",
    "meaning": "布丽吉特"
  },
  "บริตต้า": {
    "phonetic": "brittaa",
    "meaning": "布丽塔"
  },
  "บริษัท": {
    "phonetic": "bo-ri-sat",
    "meaning": "公司"
  },
  "บริสุทธิ์": {
    "phonetic": "bɔɔ-ri-sut",
    "meaning": "纯的"
  },
  "บริหาร": {
    "phonetic": "bɔɔ-ri-haan",
    "meaning": "管理"
  },
  "บรี": {
    "phonetic": "brii",
    "meaning": "布丽"
  },
  "บรูซ": {
    "phonetic": "bruus",
    "meaning": "布鲁斯"
  },
  "บรูโน่": {
    "phonetic": "bruu-no",
    "meaning": "布鲁诺"
  },
  "บลา": {
    "phonetic": "blaa",
    "meaning": "废话"
  },
  "บลู": {
    "phonetic": "bluu",
    "meaning": "蓝色的"
  },
  "บล็อก": {
    "phonetic": "blok",
    "meaning": "博客"
  },
  "บล็อกเกอร์": {
    "phonetic": "blok-gəə",
    "meaning": "博主"
  },
  "บวก": {
    "phonetic": "buak",
    "meaning": "加"
  },
  "บอก": {
    "phonetic": "bok",
    "meaning": "告诉"
  },
  "บอกฉัน": {
    "phonetic": "bok-chhan",
    "meaning": "告诉我"
  },
  "บอกตรงๆ": {
    "phonetic": "bok-trong-trong",
    "meaning": "老实告诉我"
  },
  "บอกผม": {
    "phonetic": "bok-phm",
    "meaning": "告诉我"
  },
  "บอกผมมา": {
    "phonetic": "bok-phm-maa",
    "meaning": "告诉我"
  },
  "บอกผมสิ": {
    "phonetic": "bok-phm-si",
    "meaning": "告诉我"
  },
  "บอกมา": {
    "phonetic": "bok-maa",
    "meaning": "告诉我"
  },
  "บอกมาซิ": {
    "phonetic": "bok-maa-si",
    "meaning": "告诉我"
  },
  "บอกมาสิ": {
    "phonetic": "bok-maa-si",
    "meaning": "告诉我"
  },
  "บอกว่า": {
    "phonetic": "bok-waa",
    "meaning": "说"
  },
  "บอกสิ": {
    "phonetic": "bok-si",
    "meaning": "告诉我"
  },
  "บอกอะไร": {
    "phonetic": "bok-oari",
    "meaning": "你说什么"
  },
  "บอกเขา": {
    "phonetic": "bok-kheaa",
    "meaning": "告诉他"
  },
  "บอกแล้ว": {
    "phonetic": "bok-laew",
    "meaning": "我告诉你了"
  },
  "บอง": {
    "phonetic": "bong",
    "meaning": "邦"
  },
  "บอนด์": {
    "phonetic": "bond",
    "meaning": "纽带"
  },
  "บอนนี่": {
    "phonetic": "bon-nii",
    "meaning": "邦妮"
  },
  "บอม": {
    "phonetic": "bom",
    "meaning": "邦"
  },
  "บอย": {
    "phonetic": "boy",
    "meaning": "男生"
  },
  "บอยด์": {
    "phonetic": "boyd",
    "meaning": "博伊德"
  },
  "บอร์ด": {
    "phonetic": "bɔ̀ɔt",
    "meaning": "木板"
  },
  "บอร์น": {
    "phonetic": "born",
    "meaning": "出生了"
  },
  "บอล": {
    "phonetic": "bol",
    "meaning": "球"
  },
  "บอส": {
    "phonetic": "bos",
    "meaning": "老板"
  },
  "บัง": {
    "phonetic": "bang",
    "meaning": "盾"
  },
  "บัซ": {
    "phonetic": "bas",
    "meaning": "嗡嗡声"
  },
  "บัญชี": {
    "phonetic": "ban-chii",
    "meaning": "账户/财务"
  },
  "บัณฑิต": {
    "phonetic": "ban-dit",
    "meaning": "毕业"
  },
  "บัด": {
    "phonetic": "bad",
    "meaning": "芽"
  },
  "บัดซบ": {
    "phonetic": "badsb",
    "meaning": "该死的"
  },
  "บัดดี้": {
    "phonetic": "baddii",
    "meaning": "伙伴"
  },
  "บัดนี้": {
    "phonetic": "badnii",
    "meaning": "现在"
  },
  "บัตร": {
    "phonetic": "bàt",
    "meaning": "卡片"
  },
  "บัตรเครดิต": {
    "phonetic": "bàt-khreh-dìt",
    "meaning": "信用卡"
  },
  "บัตรแรบบิท": {
    "phonetic": "bàt-raep-bít",
    "meaning": "兔子卡"
  },
  "บัน": {
    "phonetic": "ban",
    "meaning": "禁止"
  },
  "บันดาล": {
    "phonetic": "ban-daan",
    "meaning": "启发"
  },
  "บันทึก": {
    "phonetic": "banthuek",
    "meaning": "节省"
  },
  "บัม": {
    "phonetic": "bam",
    "meaning": "屁股"
  },
  "บัวนา": {
    "phonetic": "baw-naa",
    "meaning": "布阿纳"
  },
  "บั๊ก": {
    "phonetic": "bák",
    "meaning": "软件缺陷"
  },
  "บา": {
    "phonetic": "baa",
    "meaning": "巴"
  },
  "บาง": {
    "phonetic": "baang",
    "meaning": "薄的"
  },
  "บางคน": {
    "phonetic": "baang-khn",
    "meaning": "有些人"
  },
  "บางที": {
    "phonetic": "baangthii",
    "meaning": "或许"
  },
  "บางทีนะ": {
    "phonetic": "baangthii-na",
    "meaning": "或许"
  },
  "บางที่": {
    "phonetic": "baang-thii",
    "meaning": "有些地方"
  },
  "บางสิ่ง": {
    "phonetic": "baang-sing",
    "meaning": "某物"
  },
  "บาท": {
    "phonetic": "bàat",
    "meaning": "泰铢"
  },
  "บาทหลวง": {
    "phonetic": "baathlwng",
    "meaning": "牧师"
  },
  "บาบาร่า": {
    "phonetic": "baa-baa-raa",
    "meaning": "芭芭拉"
  },
  "บาย": {
    "phonetic": "baay",
    "meaning": "再见"
  },
  "บายค่ะ": {
    "phonetic": "baay-kha",
    "meaning": "再见"
  },
  "บารอน": {
    "phonetic": "baaron",
    "meaning": "男爵"
  },
  "บาร์": {
    "phonetic": "baar",
    "meaning": "酒吧"
  },
  "บาร์ท": {
    "phonetic": "baar-th",
    "meaning": "巴特"
  },
  "บาร์น": {
    "phonetic": "baar-n",
    "meaning": "谷仓"
  },
  "บาร์บี้": {
    "phonetic": "baar-bii",
    "meaning": "芭比"
  },
  "บำรุง": {
    "phonetic": "bam-rung",
    "meaning": "维持"
  },
  "บิงโก": {
    "phonetic": "bingko",
    "meaning": "宾果游戏"
  },
  "บิชอป": {
    "phonetic": "bichhop",
    "meaning": "主教"
  },
  "บิด": {
    "phonetic": "bìt",
    "meaning": "捻"
  },
  "บิน": {
    "phonetic": "bin",
    "meaning": "飞"
  },
  "บิล": {
    "phonetic": "bil",
    "meaning": "账单"
  },
  "บิลลี่": {
    "phonetic": "bil-lii",
    "meaning": "比利"
  },
  "บิลล์": {
    "phonetic": "bil-l",
    "meaning": "账单"
  },
  "บิลโบ": {
    "phonetic": "bil-bo",
    "meaning": "比尔博"
  },
  "บิวตี้": {
    "phonetic": "biu-dtîi",
    "meaning": "美丽"
  },
  "บิ๊ก": {
    "phonetic": "bik",
    "meaning": "大的"
  },
  "บี": {
    "phonetic": "bii",
    "meaning": "B"
  },
  "บีน": {
    "phonetic": "biin",
    "meaning": "豆"
  },
  "บึ": {
    "phonetic": "bue",
    "meaning": "嘘"
  },
  "บุก": {
    "phonetic": "buk",
    "meaning": "入侵"
  },
  "บุคคล": {
    "phonetic": "bukh-khon",
    "meaning": "人员/个人"
  },
  "บุช": {
    "phonetic": "buchh",
    "meaning": "衬套"
  },
  "บุฟเฟต์": {
    "phonetic": "búp-fee",
    "meaning": "自助餐"
  },
  "บุ๊คกิ้ง": {
    "phonetic": "búk-gîng",
    "meaning": "预订"
  },
  "บู": {
    "phonetic": "buu",
    "meaning": "嘘"
  },
  "บูธ": {
    "phonetic": "buuth",
    "meaning": "展位"
  },
  "บูม": {
    "phonetic": "buum",
    "meaning": "繁荣"
  },
  "บูรณะ": {
    "phonetic": "buu-ra-ná",
    "meaning": "翻新"
  },
  "บูรพา": {
    "phonetic": "buu-rá-phaa",
    "meaning": "布拉法"
  },
  "บ็อบ": {
    "phonetic": "bob",
    "meaning": "鲍勃"
  },
  "บ็อบบี้": {
    "phonetic": "bob-bii",
    "meaning": "鲍比"
  },
  "บ่น": {
    "phonetic": "bòn",
    "meaning": "抱怨"
  },
  "บ่อย": {
    "phonetic": "bɔi",
    "meaning": "经常"
  },
  "บ่อสร้าง": {
    "phonetic": "bɔ̀ɔ-sâaŋ",
    "meaning": "博桑 (清迈雨伞村)"
  },
  "บ่า": {
    "phonetic": "bàa",
    "meaning": "肩膀"
  },
  "บ่าย": {
    "phonetic": "baay",
    "meaning": "下午"
  },
  "บ้า": {
    "phonetic": "baa",
    "meaning": "疯狂的"
  },
  "บ้าง": {
    "phonetic": "baang",
    "meaning": "一些"
  },
  "บ้างไหม": {
    "phonetic": "baang-im",
    "meaning": "你有吗"
  },
  "บ้าจริง": {
    "phonetic": "baa-chring",
    "meaning": "真的很疯狂"
  },
  "บ้าจัง": {
    "phonetic": "baa-chang",
    "meaning": "太疯狂了"
  },
  "บ้าฉิบ": {
    "phonetic": "baa-chhib",
    "meaning": "完全疯了"
  },
  "บ้าชิบ": {
    "phonetic": "baa-chhib",
    "meaning": "疯狂的"
  },
  "บ้าน": {
    "phonetic": "baan",
    "meaning": "家"
  },
  "บ้าน่า": {
    "phonetic": "baa-naa",
    "meaning": "疯狂的"
  },
  "บ้ายบาย": {
    "phonetic": "baay-baay",
    "meaning": "再见"
  },
  "บ้าเหรอ": {
    "phonetic": "baa-e-ro",
    "meaning": "你疯了"
  },
  "บ้าเอ้ย": {
    "phonetic": "baa-oe-y",
    "meaning": "该死的"
  },
  "บ้าเอ๊ย": {
    "phonetic": "baa-oei",
    "meaning": "疯狂的"
  },
  "บ้าแล้ว": {
    "phonetic": "baa-laew",
    "meaning": "疯狂的"
  },
  "บ๊อบ": {
    "phonetic": "bob",
    "meaning": "鲍勃"
  },
  "บ๊อบบี้": {
    "phonetic": "b-ob-bii",
    "meaning": "鲍比"
  },
  "บ๊าย": {
    "phonetic": "baay",
    "meaning": "再见"
  },
  "บ๊ายบาย": {
    "phonetic": "baay-baay",
    "meaning": "再见"
  },
  "ปกติ": {
    "phonetic": "pkti",
    "meaning": "普通的"
  },
  "ปกป้อง": {
    "phonetic": "bpòk-bpɔ̂ng",
    "meaning": "保护"
  },
  "ปฏิบัติ": {
    "phonetic": "bpà-dtì-bàt",
    "meaning": "实践/执行"
  },
  "ปฏิเสธ": {
    "phonetic": "ptiseth",
    "meaning": "拒绝"
  },
  "ปธน": {
    "phonetic": "bpa-thaa-naa-thi-baa-dii",
    "meaning": "总裁"
  },
  "ปน": {
    "phonetic": "pon",
    "meaning": "混合的"
  },
  "ปปส": {
    "phonetic": "bpaaw-bpaaw-saw",
    "meaning": "麻醉品管制局"
  },
  "ปรบมือ": {
    "phonetic": "prb-mueo",
    "meaning": "拍拍手"
  },
  "ประกวด": {
    "phonetic": "bpra-gùat",
    "meaning": "竞赛"
  },
  "ประกอบ": {
    "phonetic": "bpra-gɔɔp",
    "meaning": "组成/从事"
  },
  "ประกัน": {
    "phonetic": "bpra-gan",
    "meaning": "保证"
  },
  "ประกาย": {
    "phonetic": "bpra-gaai",
    "meaning": "火花/闪烁"
  },
  "ประกาศ": {
    "phonetic": "prakaas",
    "meaning": "公告"
  },
  "ประจำ": {
    "phonetic": "bpra-jam",
    "meaning": "常规的"
  },
  "ประชากร": {
    "phonetic": "bpra-chaa-gɔɔn",
    "meaning": "人口"
  },
  "ประชาชน": {
    "phonetic": "bpra-chaa-chon",
    "meaning": "公众/百姓"
  },
  "ประชุม": {
    "phonetic": "bpra-chum",
    "meaning": "见面"
  },
  "ประณาม": {
    "phonetic": "pranaam",
    "meaning": "该死"
  },
  "ประดับ": {
    "phonetic": "prà-dàp",
    "meaning": "装饰/佩戴"
  },
  "ประดิษฐ์": {
    "phonetic": "bpra-dìt",
    "meaning": "人造的"
  },
  "ประตู": {
    "phonetic": "pratuu",
    "meaning": "门"
  },
  "ประทับ": {
    "phonetic": "bpra-thap",
    "meaning": "盖章/盖印"
  },
  "ประทับใจ": {
    "phonetic": "bpra-thap-jai",
    "meaning": "感动/深刻"
  },
  "ประธาน": {
    "phonetic": "prathaan",
    "meaning": "总统"
  },
  "ประปา": {
    "phonetic": "bprà-paa",
    "meaning": "管道"
  },
  "ประมง": {
    "phonetic": "bpra-mong",
    "meaning": "钓鱼"
  },
  "ประมาณ": {
    "phonetic": "pramaan",
    "meaning": "大约"
  },
  "ประวัติศาสตร์": {
    "phonetic": "bpra-wàt-dtì-sàat",
    "meaning": "历史"
  },
  "ประสบ": {
    "phonetic": "bpra-sòp",
    "meaning": "遭受"
  },
  "ประสบการณ์": {
    "phonetic": "bpra-sòp-gaan",
    "meaning": "经验"
  },
  "ประสาน": {
    "phonetic": "bpra-saan",
    "meaning": "协调/对接"
  },
  "ประสิทธิภาพ": {
    "phonetic": "bpra-sit-thi-phaap",
    "meaning": "效率"
  },
  "ประหยัด": {
    "phonetic": "bpra-yàt",
    "meaning": "节省"
  },
  "ประหลาด": {
    "phonetic": "pralaad",
    "meaning": "诡异的"
  },
  "ประเทศ": {
    "phonetic": "prathes",
    "meaning": "国家"
  },
  "ประเทศไทย": {
    "phonetic": "bpra-thêet-thai",
    "meaning": "泰国"
  },
  "ประเภท": {
    "phonetic": "praphheth",
    "meaning": "类型"
  },
  "ประโยชน์": {
    "phonetic": "bpra-yòot",
    "meaning": "益处"
  },
  "ปรับ": {
    "phonetic": "bprap",
    "meaning": "调整/改进"
  },
  "ปรับปรุง": {
    "phonetic": "bprap-bprung",
    "meaning": "修正"
  },
  "ปริมณฑล": {
    "phonetic": "bpà-rí-mon-thon",
    "meaning": "周边/郊区"
  },
  "ปลอกคอ": {
    "phonetic": "bplɔ̀ɔk-khɔɔ",
    "meaning": "衣领"
  },
  "ปลอด": {
    "phonetic": "bplɔ̀ɔt",
    "meaning": "自由的"
  },
  "ปลอดภัย": {
    "phonetic": "plodphhay",
    "meaning": "安全的"
  },
  "ปลั๊ก": {
    "phonetic": "bplák",
    "meaning": "插头"
  },
  "ปลา": {
    "phonetic": "plaa",
    "meaning": "鱼"
  },
  "ปลาย": {
    "phonetic": "bplaai",
    "meaning": "结尾"
  },
  "ปลูก": {
    "phonetic": "bplùuk",
    "meaning": "植物"
  },
  "ปล่อย": {
    "phonetic": "ploy",
    "meaning": "发布"
  },
  "ปล่อยนะ": {
    "phonetic": "ploy-na",
    "meaning": "松手"
  },
  "ปล่อยผม": {
    "phonetic": "ploy-phm",
    "meaning": "让我走吧"
  },
  "ปล่อยสิ": {
    "phonetic": "ploy-si",
    "meaning": "松手"
  },
  "ปล่าว": {
    "phonetic": "p-laa-w",
    "meaning": "不"
  },
  "ปวด": {
    "phonetic": "bpùat",
    "meaning": "疼痛"
  },
  "ปอก": {
    "phonetic": "pɔ̀ɔk",
    "meaning": "剥/削皮"
  },
  "ปอกเปลือก": {
    "phonetic": "pɔ̀ak-plʉak",
    "meaning": "剥皮/削皮"
  },
  "ปองโย่": {
    "phonetic": "pong-yo",
    "meaning": "彭约"
  },
  "ปอนด์": {
    "phonetic": "pond",
    "meaning": "磅"
  },
  "ปอร์ต": {
    "phonetic": "bpɔ̀ɔt",
    "meaning": "港口"
  },
  "ปะ": {
    "phonetic": "pa",
    "meaning": "帕"
  },
  "ปะการัง": {
    "phonetic": "bpà-gaa-rang",
    "meaning": "珊瑚"
  },
  "ปัง": {
    "phonetic": "pang",
    "meaning": "砰"
  },
  "ปัจจัย": {
    "phonetic": "bpat-jai",
    "meaning": "因素"
  },
  "ปัจจุบัน": {
    "phonetic": "bpat-ju-ban",
    "meaning": "当今/目前"
  },
  "ปัญญา": {
    "phonetic": "bpan-yaa",
    "meaning": "机智"
  },
  "ปัญหา": {
    "phonetic": "payaa",
    "meaning": "问题"
  },
  "ปัดโธ่": {
    "phonetic": "pad-tho",
    "meaning": "该死的"
  },
  "ปัน": {
    "phonetic": "bpan",
    "meaning": "分享"
  },
  "ปั่น": {
    "phonetic": "bpan",
    "meaning": "搅拌/冰沙"
  },
  "ปั่นแห้ง": {
    "phonetic": "pàn-hâeŋ",
    "meaning": "甩干/脱水"
  },
  "ปาก": {
    "phonetic": "paak",
    "meaning": "嘴"
  },
  "ปากซอย": {
    "phonetic": "pàak-sɔɔy",
    "meaning": "巷口"
  },
  "ปาน": {
    "phonetic": "bpaan",
    "meaning": "柱头"
  },
  "ปาป๊า": {
    "phonetic": "paap-aa",
    "meaning": "爸爸"
  },
  "ปารีส": {
    "phonetic": "paariis",
    "meaning": "巴黎"
  },
  "ปาร์ค": {
    "phonetic": "paarkh",
    "meaning": "公园"
  },
  "ปาร์ตี้": {
    "phonetic": "paartii",
    "meaning": "派对"
  },
  "ปิด": {
    "phonetic": "pid",
    "meaning": "关闭"
  },
  "ปิติ": {
    "phonetic": "pì-tì",
    "meaning": "邳迪 (人名)"
  },
  "ปิแอร์": {
    "phonetic": "pioaer",
    "meaning": "皮埃尔"
  },
  "ปิ่นปัก": {
    "phonetic": "pìn-pàk",
    "meaning": "发簪"
  },
  "ปิ่นปักผม": {
    "phonetic": "pìn-pàk-phǒm",
    "meaning": "发簪"
  },
  "ปิ้ง": {
    "phonetic": "bpîng",
    "meaning": "吐司"
  },
  "ปี": {
    "phonetic": "pii",
    "meaning": "年"
  },
  "ปีก": {
    "phonetic": "bpìik",
    "meaning": "翼"
  },
  "ปีก่อน": {
    "phonetic": "pii-kon",
    "meaning": "一年前"
  },
  "ปีด": {
    "phonetic": "bpìit",
    "meaning": "跳"
  },
  "ปีต่อมา": {
    "phonetic": "pii-to-maa",
    "meaning": "多年以后"
  },
  "ปีที่": {
    "phonetic": "pii-thii",
    "meaning": "年"
  },
  "ปีนี้": {
    "phonetic": "pii-nii",
    "meaning": "今年"
  },
  "ปีมานี้": {
    "phonetic": "pii-maa-nii",
    "meaning": "今年"
  },
  "ปีศาจ": {
    "phonetic": "piisaach",
    "meaning": "魔鬼"
  },
  "ปีเตอร์": {
    "phonetic": "pii-teor",
    "meaning": "彼得"
  },
  "ปีแล้ว": {
    "phonetic": "pii-laew",
    "meaning": "已经一年了"
  },
  "ปืน": {
    "phonetic": "puen",
    "meaning": "枪"
  },
  "ปู": {
    "phonetic": "bpuu",
    "meaning": "螃蟹"
  },
  "ปู่": {
    "phonetic": "puu",
    "meaning": "爷爷"
  },
  "ป่ะ": {
    "phonetic": "pa",
    "meaning": "是的"
  },
  "ป่า": {
    "phonetic": "bpàa",
    "meaning": "森林"
  },
  "ป่าว": {
    "phonetic": "paaw",
    "meaning": "不"
  },
  "ป้องกัน": {
    "phonetic": "bpɔ̂ng-gan",
    "meaning": "防止"
  },
  "ป้อน": {
    "phonetic": "pɔ̂ɔn",
    "meaning": "喂/喂食"
  },
  "ป้า": {
    "phonetic": "paa",
    "meaning": "阿姨"
  },
  "ป้าย": {
    "phonetic": "bpâai",
    "meaning": "符号"
  },
  "ป๊ะป๋า": {
    "phonetic": "papaa",
    "meaning": "爸爸"
  },
  "ป๋า": {
    "phonetic": "paa",
    "meaning": "帕"
  },
  "ผง": {
    "phonetic": "phǒng",
    "meaning": "粉末"
  },
  "ผนัง": {
    "phonetic": "pha-nang",
    "meaning": "墙"
  },
  "ผบ": {
    "phonetic": "phaaw-baaw",
    "meaning": "指挥官"
  },
  "ผม": {
    "phonetic": "phǒm",
    "meaning": "我 (男性)"
  },
  "ผมเองนะ": {
    "phonetic": "phm-oeng-na",
    "meaning": "这就是我"
  },
  "ผล": {
    "phonetic": "phon",
    "meaning": "结果/水果"
  },
  "ผลผลิต": {
    "phonetic": "phǒn-phà-lìt",
    "meaning": "产品"
  },
  "ผลลัพธ์": {
    "phonetic": "phon-lap",
    "meaning": "结果/效应"
  },
  "ผลัก": {
    "phonetic": "phlak",
    "meaning": "推"
  },
  "ผลักดัน": {
    "phonetic": "phlak-dan",
    "meaning": "推动/促使"
  },
  "ผลิต": {
    "phonetic": "phà-lìt",
    "meaning": "生产"
  },
  "ผลิตภัณฑ์": {
    "phonetic": "phà-lìt-dtà-phan",
    "meaning": "产品"
  },
  "ผสม": {
    "phonetic": "pha-som",
    "meaning": "混合"
  },
  "ผสาน": {
    "phonetic": "pha-sǎan",
    "meaning": "合并"
  },
  "ผอ": {
    "phonetic": "pho",
    "meaning": "导演"
  },
  "ผอม": {
    "phonetic": "phɔ̌ɔm",
    "meaning": "薄的"
  },
  "ผะ": {
    "phonetic": "pha",
    "meaning": "博士"
  },
  "ผัก": {
    "phonetic": "phàk",
    "meaning": "蔬菜"
  },
  "ผักรวม": {
    "phonetic": "phàk-ruam",
    "meaning": "杂菜/什锦蔬菜"
  },
  "ผัด": {
    "phonetic": "phat",
    "meaning": "炒/炒制"
  },
  "ผัดไทย": {
    "phonetic": "phat-thai",
    "meaning": "泰式炒粉"
  },
  "ผันผวน": {
    "phonetic": "phǎn-phuan",
    "meaning": "波动"
  },
  "ผิด": {
    "phonetic": "phid",
    "meaning": "错误的"
  },
  "ผิดแล้ว": {
    "phonetic": "phid-laew",
    "meaning": "这是错误的"
  },
  "ผิวขาว": {
    "phonetic": "phiw-khaaw",
    "meaning": "皮肤白"
  },
  "ผิวหนัง": {
    "phonetic": "phǐw-nǎng",
    "meaning": "皮肤"
  },
  "ผี": {
    "phonetic": "phii",
    "meaning": "鬼"
  },
  "ผีเสื้อ": {
    "phonetic": "phiisueao",
    "meaning": "蝴蝶"
  },
  "ผูก": {
    "phonetic": "phùuk",
    "meaning": "捆绑"
  },
  "ผูกพัน": {
    "phonetic": "phùuk-phan",
    "meaning": "绑定"
  },
  "ผู้": {
    "phonetic": "phu",
    "meaning": "者/人"
  },
  "ผู้กอง": {
    "phonetic": "phuu-kong",
    "meaning": "队长"
  },
  "ผู้การ": {
    "phonetic": "phuu-kaar",
    "meaning": "指挥官"
  },
  "ผู้คน": {
    "phonetic": "phuukhn",
    "meaning": "人们"
  },
  "ผู้ชนะ": {
    "phonetic": "phuu-chhna",
    "meaning": "优胜者"
  },
  "ผู้ชาย": {
    "phonetic": "phuuchhaay",
    "meaning": "男人"
  },
  "ผู้ช่วย": {
    "phonetic": "phuu-chhwy",
    "meaning": "助手"
  },
  "ผู้นำ": {
    "phonetic": "phûu-nam",
    "meaning": "领导者"
  },
  "ผู้ประกอบการ": {
    "phonetic": "phu-bpra-gɔɔp-gaan",
    "meaning": "企业主"
  },
  "ผู้พัน": {
    "phonetic": "phuu-phan",
    "meaning": "上校"
  },
  "ผู้หญิง": {
    "phonetic": "phuu-ying",
    "meaning": "女性"
  },
  "ผู้หมวด": {
    "phonetic": "phuu-mwd",
    "meaning": "中尉"
  },
  "ผ่อน": {
    "phonetic": "phɔ̀ɔn",
    "meaning": "放松"
  },
  "ผ่าน": {
    "phonetic": "phaan",
    "meaning": "经过"
  },
  "ผ่านมา": {
    "phonetic": "phaan-maa",
    "meaning": "过去了"
  },
  "ผ่านไป": {
    "phonetic": "phaan-pi",
    "meaning": "通过了"
  },
  "ผ้า": {
    "phonetic": "phâa",
    "meaning": "布"
  },
  "ผ้าถุง": {
    "phonetic": "phâa-thǔng",
    "meaning": "纱笼"
  },
  "ผ้าพันแผล": {
    "phonetic": "phâa-phan-phǎen",
    "meaning": "绷带"
  },
  "ผ้าใบ": {
    "phonetic": "phâa-bai",
    "meaning": "帆布"
  },
  "ฝน": {
    "phonetic": "fǒn",
    "meaning": "雨"
  },
  "ฝนตก": {
    "phonetic": "fon-tok",
    "meaning": "下雨了"
  },
  "ฝัน": {
    "phonetic": "fan",
    "meaning": "梦"
  },
  "ฝันดี": {
    "phonetic": "fan-dii",
    "meaning": "甜蜜的梦"
  },
  "ฝันดีนะ": {
    "phonetic": "fan-dii-na",
    "meaning": "甜蜜的梦"
  },
  "ฝันร้าย": {
    "phonetic": "fan-raay",
    "meaning": "恶梦"
  },
  "ฝั่ง": {
    "phonetic": "fàng",
    "meaning": "银行"
  },
  "ฝาก": {
    "phonetic": "fàak",
    "meaning": "订金"
  },
  "ฝีมือ": {
    "phonetic": "fǐi-mʉʉ",
    "meaning": "手艺/技艺"
  },
  "ฝึก": {
    "phonetic": "fʉ̀k",
    "meaning": "练习/训练"
  },
  "ฝุ่น": {
    "phonetic": "fùn",
    "meaning": "灰尘"
  },
  "ฝูงชน": {
    "phonetic": "fuung-chhn",
    "meaning": "人群"
  },
  "ฝ่าบาท": {
    "phonetic": "faa-baath",
    "meaning": "陛下"
  },
  "ฝ่าย": {
    "phonetic": "fàai",
    "meaning": "棉布"
  },
  "พrom": {
    "phonetic": "phrom",
    "meaning": "地毯"
  },
  "พก": {
    "phonetic": "phók",
    "meaning": "携带"
  },
  "พนักงาน": {
    "phonetic": "phá-nák-ngaan",
    "meaning": "员工/服务员"
  },
  "พบ": {
    "phonetic": "phop",
    "meaning": "遇见 / 发现 / 见面"
  },
  "พยากรณ์": {
    "phonetic": "phá-yaa-gɔɔn",
    "meaning": "预言"
  },
  "พยาบาล": {
    "phonetic": "phyaabaal",
    "meaning": "护士"
  },
  "พยายาม": {
    "phonetic": "phyaayaam",
    "meaning": "尝试"
  },
  "พรม": {
    "phonetic": "phrom",
    "meaning": "地毯"
  },
  "พรมแดง": {
    "phonetic": "phrom-daeng",
    "meaning": "红毯"
  },
  "พรรคพวก": {
    "phonetic": "phak-phuak",
    "meaning": "盟国"
  },
  "พระ": {
    "phonetic": "phra",
    "meaning": "僧"
  },
  "พระช่วย": {
    "phonetic": "phra-chhwy",
    "meaning": "帕蔡"
  },
  "พระบรม": {
    "phonetic": "phrá-bɔɔ-rom",
    "meaning": "国王陛下"
  },
  "พระบิดา": {
    "phonetic": "phra-bidaa",
    "meaning": "父亲"
  },
  "พระราชา": {
    "phonetic": "phra-raachhaa",
    "meaning": "国王"
  },
  "พระราม": {
    "phonetic": "phrá-raam",
    "meaning": "拉玛（路名）"
  },
  "พระองค์": {
    "phonetic": "phraongkh",
    "meaning": "他"
  },
  "พระเจ้า": {
    "phonetic": "phracheaa",
    "meaning": "上帝"
  },
  "พระเยซู": {
    "phonetic": "phra-yesuu",
    "meaning": "耶稣"
  },
  "พริก": {
    "phonetic": "phrík",
    "meaning": "苦的"
  },
  "พรุ่ง": {
    "phonetic": "phrûng",
    "meaning": "明天"
  },
  "พรุ่งนี้": {
    "phonetic": "phrung-nii",
    "meaning": "明天"
  },
  "พร้อม": {
    "phonetic": "phrom",
    "meaning": "准备好"
  },
  "พร้อมนะ": {
    "phonetic": "phrom-na",
    "meaning": "准备好"
  },
  "พฤติกรรม": {
    "phonetic": "phrʉt-dti-gam",
    "meaning": "行为"
  },
  "พฤศจิกายน": {
    "phonetic": "phrʉ́t-sà-jì-gaa-yon",
    "meaning": "十一月"
  },
  "พฤษภาคม": {
    "phonetic": "phruet-sa-pha-khom",
    "meaning": "可能"
  },
  "พฤหัสบดี": {
    "phonetic": "phrʉ́-hàt-sà-bɔɔ-dii",
    "meaning": "周四"
  },
  "พลทหาร": {
    "phonetic": "phl-thaar",
    "meaning": "士兵"
  },
  "พลัง": {
    "phonetic": "phlang",
    "meaning": "力量"
  },
  "พลังงาน": {
    "phonetic": "pha-lang-ngaan",
    "meaning": "能源"
  },
  "พลาซ่า": {
    "phonetic": "phlaasaa",
    "meaning": "广场"
  },
  "พลาด": {
    "phonetic": "phlâat",
    "meaning": "错过"
  },
  "พลาสติก": {
    "phonetic": "phláat-dtìk",
    "meaning": "塑料"
  },
  "พวก": {
    "phonetic": "phuak",
    "meaning": "伙计们"
  },
  "พวกคุณ": {
    "phonetic": "phwk-khun",
    "meaning": "你们"
  },
  "พวกนั้น": {
    "phonetic": "phwk-nan",
    "meaning": "那些"
  },
  "พวกนาย": {
    "phonetic": "phwk-naay",
    "meaning": "你们"
  },
  "พวกนี้": {
    "phonetic": "phwk-nii",
    "meaning": "这些"
  },
  "พวกมัน": {
    "phonetic": "phwk-man",
    "meaning": "他们"
  },
  "พวกเขา": {
    "phonetic": "phwk-kheaa",
    "meaning": "他们"
  },
  "พวกเจ้า": {
    "phonetic": "phwk-cheaa",
    "meaning": "你们"
  },
  "พวกเรา": {
    "phonetic": "phuuan-rao",
    "meaning": "我们"
  },
  "พวกแก": {
    "phonetic": "phwk-kae",
    "meaning": "你们"
  },
  "พอ": {
    "phonetic": "pho",
    "meaning": "足够的"
  },
  "พอกันที": {
    "phonetic": "phokan-thii",
    "meaning": "这就够了"
  },
  "พอซะที": {
    "phonetic": "pho-sa-thii",
    "meaning": "足够的"
  },
  "พอดี": {
    "phonetic": "phodii",
    "meaning": "正好"
  },
  "พอดีเลย": {
    "phonetic": "phodii-lei",
    "meaning": "正好"
  },
  "พอที": {
    "phonetic": "phothii",
    "meaning": "足够的"
  },
  "พอร์ต": {
    "phonetic": "phɔ̂ɔt",
    "meaning": "港口"
  },
  "พอล": {
    "phonetic": "phol",
    "meaning": "保罗"
  },
  "พอลลี่": {
    "phonetic": "pho-l-lii",
    "meaning": "波莉"
  },
  "พอเถอะ": {
    "phonetic": "pho-theoa",
    "meaning": "这就够了"
  },
  "พอเลย": {
    "phonetic": "pho-lei",
    "meaning": "这就够了"
  },
  "พอเหอะ": {
    "phonetic": "pho-eoa",
    "meaning": "足够的"
  },
  "พอแล้ว": {
    "phonetic": "pholaew",
    "meaning": "这就够了"
  },
  "พอใจยัง": {
    "phonetic": "phochai-yang",
    "meaning": "你还满意吗"
  },
  "พอๆ": {
    "phonetic": "pho",
    "meaning": "足够的"
  },
  "พะยะค่ะ": {
    "phonetic": "pha-ya-kha",
    "meaning": "帕亚"
  },
  "พะอืดพะอม": {
    "phonetic": "phá-ʉ̀t-phá-om",
    "meaning": "难以消化的"
  },
  "พัก": {
    "phonetic": "phak",
    "meaning": "休息"
  },
  "พัค": {
    "phonetic": "phakh",
    "meaning": "公园"
  },
  "พัฒนา": {
    "phonetic": "phat-tha-naa",
    "meaning": "发展/开发"
  },
  "พัฒนาการ": {
    "phonetic": "phat-tha-naa-gaan",
    "meaning": "发展"
  },
  "พัทยา": {
    "phonetic": "phát-thá-yaa",
    "meaning": "芭堤雅"
  },
  "พัน": {
    "phonetic": "phan",
    "meaning": "千"
  },
  "พันธบัตร": {
    "phonetic": "phan-tha-bat",
    "meaning": "纽带"
  },
  "พันล้าน": {
    "phonetic": "phan-laan",
    "meaning": "十亿"
  },
  "พันเอก": {
    "phonetic": "phan-oek",
    "meaning": "上校"
  },
  "พับ": {
    "phonetic": "pháp",
    "meaning": "折叠"
  },
  "พา": {
    "phonetic": "phaa",
    "meaning": "拿"
  },
  "พาณิชย์": {
    "phonetic": "phaa-nít",
    "meaning": "商业"
  },
  "พาย": {
    "phonetic": "phaay",
    "meaning": "馅饼"
  },
  "พารากอน": {
    "phonetic": "phaa-raa-kɔɔn",
    "meaning": "百丽宫"
  },
  "พาราเซตามอล": {
    "phonetic": "phaa-raa-see-taa-mɔɔn",
    "meaning": "扑热息痛"
  },
  "พาร์": {
    "phonetic": "phaa",
    "meaning": "帕"
  },
  "พาร์ค": {
    "phonetic": "phaar-kh",
    "meaning": "公园"
  },
  "พาร์ทไทม์": {
    "phonetic": "phaat-thaim",
    "meaning": "兼职"
  },
  "พาส": {
    "phonetic": "phaat",
    "meaning": "经过"
  },
  "พาเมล่า": {
    "phonetic": "phaa-me-laa",
    "meaning": "帕梅拉"
  },
  "พาโบล": {
    "phonetic": "phaa-bol",
    "meaning": "巴勃罗"
  },
  "พิกัด": {
    "phonetic": "phí-gàt",
    "meaning": "坐标"
  },
  "พิจารณา": {
    "phonetic": "phí-caa-rá-naa",
    "meaning": "考虑/审查"
  },
  "พิซซ่า": {
    "phonetic": "phissaa",
    "meaning": "比萨"
  },
  "พิธี": {
    "phonetic": "phi-thii",
    "meaning": "仪式"
  },
  "พิมพ์": {
    "phonetic": "phim",
    "meaning": "打印/打字"
  },
  "พิมพ์งานไม่ได้": {
    "phonetic": "phim-ngaan-mai-daai",
    "meaning": "打印机故障"
  },
  "พิษ": {
    "phonetic": "phít",
    "meaning": "毒液"
  },
  "พิเศษ": {
    "phonetic": "phi-set",
    "meaning": "特别的"
  },
  "พี": {
    "phonetic": "phii",
    "meaning": "P"
  },
  "พีช": {
    "phonetic": "phiichh",
    "meaning": "桃"
  },
  "พีต้า": {
    "phonetic": "phii-taa",
    "meaning": "皮塔"
  },
  "พีท": {
    "phonetic": "phiith",
    "meaning": "皮特"
  },
  "พี่": {
    "phonetic": "phii",
    "meaning": "兄弟"
  },
  "พี่ครับ": {
    "phonetic": "phii-khrab",
    "meaning": "兄弟"
  },
  "พี่คะ": {
    "phonetic": "phii-kha",
    "meaning": "兄弟"
  },
  "พี่ค่ะ": {
    "phonetic": "phii-kha",
    "meaning": "兄弟"
  },
  "พี่ชาย": {
    "phonetic": "phii-chhaay",
    "meaning": "兄弟"
  },
  "พี่น้อง": {
    "phonetic": "phii-nong",
    "meaning": "兄弟姐妹们"
  },
  "พี่รู้": {
    "phonetic": "phii-ruu",
    "meaning": "我知道"
  },
  "พี่สาว": {
    "phonetic": "phii-saaw",
    "meaning": "姐姐"
  },
  "พี่ฮะ": {
    "phonetic": "phii-ha",
    "meaning": "兄弟"
  },
  "พี่ใหญ่": {
    "phonetic": "phii-aiy",
    "meaning": "大哥"
  },
  "พืช": {
    "phonetic": "phueat",
    "meaning": "植物"
  },
  "พื้น": {
    "phonetic": "phʉ́ʉn",
    "meaning": "地面"
  },
  "พื้นที่": {
    "phonetic": "phʉ́ʉn-thîi",
    "meaning": "区域"
  },
  "พุธ": {
    "phonetic": "phút",
    "meaning": "周三"
  },
  "พุ่ง": {
    "phonetic": "phûng",
    "meaning": "一扔"
  },
  "พุ่ม": {
    "phonetic": "phûm",
    "meaning": "衬套"
  },
  "พูด": {
    "phonetic": "phûut",
    "meaning": "说"
  },
  "พูดจริง": {
    "phonetic": "phuud-chring",
    "meaning": "说实话"
  },
  "พูดตรงๆ": {
    "phonetic": "phuud-trong-trong",
    "meaning": "坦白地说"
  },
  "พูดถึง": {
    "phonetic": "phuud-thueng",
    "meaning": "谈论一下"
  },
  "พูดถูก": {
    "phonetic": "phuud-thuuk",
    "meaning": "你说得对"
  },
  "พูดมา": {
    "phonetic": "phuud-maa",
    "meaning": "说话"
  },
  "พูดมาสิ": {
    "phonetic": "phuud-maa-si",
    "meaning": "说吧"
  },
  "พูดว่า": {
    "phonetic": "phuud-waa",
    "meaning": "说"
  },
  "พูดสิ": {
    "phonetic": "phuud-si",
    "meaning": "说吧"
  },
  "พูดอะไร": {
    "phonetic": "phuud-oari",
    "meaning": "你说什么"
  },
  "พู่": {
    "phonetic": "phûu",
    "meaning": "穗子/流苏"
  },
  "พู่กัน": {
    "phonetic": "phûu-kan",
    "meaning": "画笔/毛笔"
  },
  "พ่อ": {
    "phonetic": "pho",
    "meaning": "父亲"
  },
  "พ่อขา": {
    "phonetic": "pho-khaa",
    "meaning": "父亲"
  },
  "พ่อครับ": {
    "phonetic": "pho-khrab",
    "meaning": "爸爸"
  },
  "พ่อคะ": {
    "phonetic": "pho-kha",
    "meaning": "爸爸"
  },
  "พ่อค่ะ": {
    "phonetic": "pho-kha",
    "meaning": "爸爸"
  },
  "พ่อจ๋า": {
    "phonetic": "pho-chaa",
    "meaning": "爸爸"
  },
  "พ่อฉัน": {
    "phonetic": "pho-chhan",
    "meaning": "我的父亲"
  },
  "พ่อผม": {
    "phonetic": "pho-phm",
    "meaning": "我的父亲"
  },
  "พ่อรู้": {
    "phonetic": "pho-ruu",
    "meaning": "爸爸知道"
  },
  "พ่อฮะ": {
    "phonetic": "pho-ha",
    "meaning": "爸爸"
  },
  "พ่อแม่": {
    "phonetic": "pho-mae",
    "meaning": "父母"
  },
  "ฟรานซิส": {
    "phonetic": "f-raan-sis",
    "meaning": "弗朗西斯"
  },
  "ฟรี": {
    "phonetic": "frii",
    "meaning": "自由的"
  },
  "ฟรีวีซ่า": {
    "phonetic": "frii-wii-sâa",
    "meaning": "免签证"
  },
  "ฟลอยด์": {
    "phonetic": "f-loy-d",
    "meaning": "弗洛伊德"
  },
  "ฟลินน์": {
    "phonetic": "f-li-nn",
    "meaning": "弗林"
  },
  "ฟลิ้นท์": {
    "phonetic": "f-lin-th",
    "meaning": "燧石"
  },
  "ฟลู": {
    "phonetic": "fluu",
    "meaning": "弗洛"
  },
  "ฟอร์ด": {
    "phonetic": "f-ord",
    "meaning": "福特"
  },
  "ฟอลส์": {
    "phonetic": "fols",
    "meaning": "瀑布"
  },
  "ฟัก": {
    "phonetic": "fak",
    "meaning": "孵化"
  },
  "ฟัง": {
    "phonetic": "fang",
    "meaning": "听"
  },
  "ฟังก่อน": {
    "phonetic": "fang-kon",
    "meaning": "先听听"
  },
  "ฟังฉัน": {
    "phonetic": "fang-chhan",
    "meaning": "听我说"
  },
  "ฟังดูดี": {
    "phonetic": "fang-duu-dii",
    "meaning": "听起来不错"
  },
  "ฟังนะ": {
    "phonetic": "fang-na",
    "meaning": "听"
  },
  "ฟังนะคะ": {
    "phonetic": "fang-na-kha",
    "meaning": "听"
  },
  "ฟังผม": {
    "phonetic": "fang-phm",
    "meaning": "听我说"
  },
  "ฟังผมนะ": {
    "phonetic": "fang-phm-na",
    "meaning": "听我说"
  },
  "ฟังสิ": {
    "phonetic": "fang-si",
    "meaning": "听着"
  },
  "ฟัน": {
    "phonetic": "fan",
    "meaning": "牙齿"
  },
  "ฟัสโก้": {
    "phonetic": "fas-ko",
    "meaning": "富斯科"
  },
  "ฟิตซ์": {
    "phonetic": "fit-s",
    "meaning": "菲茨"
  },
  "ฟิตเนส": {
    "phonetic": "fít-nét",
    "meaning": "健康"
  },
  "ฟิน": {
    "phonetic": "fin",
    "meaning": "太令人满意了"
  },
  "ฟินช์": {
    "phonetic": "finchh",
    "meaning": "芬奇"
  },
  "ฟินซ์": {
    "phonetic": "fins",
    "meaning": "芬奇"
  },
  "ฟินน์": {
    "phonetic": "finn",
    "meaning": "芬恩"
  },
  "ฟิล": {
    "phonetic": "fil",
    "meaning": "菲尔"
  },
  "ฟิลลิป": {
    "phonetic": "fil-lip",
    "meaning": "菲利普"
  },
  "ฟิโอนา": {
    "phonetic": "fi-oo-naa",
    "meaning": "菲奥娜"
  },
  "ฟื้นฟู": {
    "phonetic": "fʉʉn-fuu",
    "meaning": "恢复/复苏"
  },
  "ฟื้นสิ": {
    "phonetic": "fuen-si",
    "meaning": "恢复"
  },
  "ฟุต": {
    "phonetic": "fut",
    "meaning": "脚"
  },
  "ฟุตบอล": {
    "phonetic": "futbol",
    "meaning": "足球"
  },
  "ฟูจิ": {
    "phonetic": "fuuchi",
    "meaning": "富士"
  },
  "ฟู้ด": {
    "phonetic": "fúut",
    "meaning": "食物/食品"
  },
  "ฟ้า": {
    "phonetic": "fáa",
    "meaning": "天空"
  },
  "ภรรยา": {
    "phonetic": "phhrryaa",
    "meaning": "妻子"
  },
  "ภรรยาผม": {
    "phonetic": "phhrryaa-phm",
    "meaning": "我的妻子"
  },
  "ภัย": {
    "phonetic": "phai",
    "meaning": "危险"
  },
  "ภาค": {
    "phonetic": "phhaakh",
    "meaning": "地区"
  },
  "ภาพ": {
    "phonetic": "phâap",
    "meaning": "图片"
  },
  "ภาพยนตร์": {
    "phonetic": "phaa-phá-yon",
    "meaning": "电影"
  },
  "ภายนอก": {
    "phonetic": "phaai-nɔ̂ɔk",
    "meaning": "外部的"
  },
  "ภายใน": {
    "phonetic": "phhaaynai",
    "meaning": "里面"
  },
  "ภารกิจ": {
    "phonetic": "phhaarkich",
    "meaning": "使命"
  },
  "ภาระ": {
    "phonetic": "phaa-rá",
    "meaning": "负担"
  },
  "ภาษา": {
    "phonetic": "phaa-saa",
    "meaning": "语言"
  },
  "ภาษาจีน": {
    "phonetic": "phaa-sǎa-jiin",
    "meaning": "中文 / 汉语"
  },
  "ภาษาไทย": {
    "phonetic": "phaa-sǎa-thai",
    "meaning": "泰语"
  },
  "ภาษี": {
    "phonetic": "phaa-sǐi",
    "meaning": "税"
  },
  "ภาษีศุลกากร": {
    "phonetic": "phaa-sǐi-sǔn-lá-kaa-kɔɔn",
    "meaning": "关税"
  },
  "ภู": {
    "phonetic": "phuu",
    "meaning": "山"
  },
  "ภูมิภาค": {
    "phonetic": "phuu-mi-phaak",
    "meaning": "地区"
  },
  "ภูมิใจ": {
    "phonetic": "phuum-jai",
    "meaning": "自豪的"
  },
  "ภูเก็ต": {
    "phonetic": "phuu-gèt",
    "meaning": "普吉岛"
  },
  "ภูเขา": {
    "phonetic": "phuu-khǎo",
    "meaning": "山"
  },
  "มกราคม": {
    "phonetic": "mkraakhm",
    "meaning": "一月"
  },
  "มการ์ด": {
    "phonetic": "em-gàat",
    "meaning": "M卡"
  },
  "มณี": {
    "phonetic": "má-nii",
    "meaning": "宝石"
  },
  "มนะ": {
    "phonetic": "má-ná",
    "meaning": "这就是我。"
  },
  "มนุษย์": {
    "phonetic": "ma-nut",
    "meaning": "人类"
  },
  "มม": {
    "phonetic": "maw-maw",
    "meaning": "毫米"
  },
  "มยอง": {
    "phonetic": "myong",
    "meaning": "明"
  },
  "มยองฮุน": {
    "phonetic": "m-yong-hun",
    "meaning": "明勋"
  },
  "มรดก": {
    "phonetic": "mɔɔ-rá-dòk",
    "meaning": "遗产"
  },
  "มลพิษ": {
    "phonetic": "mon-la-phit",
    "meaning": "污染"
  },
  "มหัศจรรย์": {
    "phonetic": "ma-hat-sa-jan",
    "meaning": "奇迹/奇妙"
  },
  "มหาราช": {
    "phonetic": "má-hǎa-râat",
    "meaning": "伟大的"
  },
  "มหาวิทยาลัย": {
    "phonetic": "ma-haa-wi-tha-yaa-lai",
    "meaning": "大学"
  },
  "มหาศาล": {
    "phonetic": "ma-haa-saan",
    "meaning": "巨额/巨大"
  },
  "มอง": {
    "phonetic": "mong",
    "meaning": "看"
  },
  "มองฉัน": {
    "phonetic": "mong-chhan",
    "meaning": "看着我"
  },
  "มองผม": {
    "phonetic": "mong-phm",
    "meaning": "看着我"
  },
  "มองผมสิ": {
    "phonetic": "mong-phm-si",
    "meaning": "看着我"
  },
  "มอนโร": {
    "phonetic": "mon-ro",
    "meaning": "门罗"
  },
  "มอบ": {
    "phonetic": "mɔ̂ɔp",
    "meaning": "提供"
  },
  "มอยร่า": {
    "phonetic": "mo-y-raa",
    "meaning": "莫伊拉"
  },
  "มอร์": {
    "phonetic": "mor",
    "meaning": "莫"
  },
  "มอร์แกน": {
    "phonetic": "mor-kaen",
    "meaning": "摩根"
  },
  "มอลลี่": {
    "phonetic": "mo-l-lii",
    "meaning": "莫莉"
  },
  "มอส": {
    "phonetic": "mos",
    "meaning": "苔藓"
  },
  "มอสซี่": {
    "phonetic": "mos-sii",
    "meaning": "摩西"
  },
  "มอาร์": {
    "phonetic": "em-aa",
    "meaning": "先生"
  },
  "มอเตอร์ไซค์": {
    "phonetic": "mɔɔ-təə-sai",
    "meaning": "摩托车"
  },
  "มะ": {
    "phonetic": "ma",
    "meaning": "妈"
  },
  "มะนาว": {
    "phonetic": "ma-naaw",
    "meaning": "柠檬/青柠"
  },
  "มะพร้าว": {
    "phonetic": "ma-phraaw",
    "meaning": "椰子"
  },
  "มะพร้าวน้ำหอม": {
    "phonetic": "ma-phraaw-nam-hɔ̌ɔm",
    "meaning": "椰青"
  },
  "มะม่วง": {
    "phonetic": "ma-muuang",
    "meaning": "芒果"
  },
  "มะม่วงอกร่อง": {
    "phonetic": "ma-muuang-ok-rɔ́ng",
    "meaning": "金黄芒果"
  },
  "มะลิ": {
    "phonetic": "má-lí",
    "meaning": "茉莉花"
  },
  "มะเร็ง": {
    "phonetic": "mareng",
    "meaning": "癌症"
  },
  "มัก": {
    "phonetic": "mák",
    "meaning": "经常"
  },
  "มังก์": {
    "phonetic": "mangk",
    "meaning": "僧"
  },
  "มังคุด": {
    "phonetic": "mang-khut",
    "meaning": "山竹"
  },
  "มังคุดคัด": {
    "phonetic": "mang-khut-khat",
    "meaning": "新鲜山竹"
  },
  "มัดจำ": {
    "phonetic": "mát-jam",
    "meaning": "订金"
  },
  "มัน": {
    "phonetic": "man",
    "meaning": "它"
  },
  "มันช่าง": {
    "phonetic": "man-chhaang",
    "meaning": "太酷了"
  },
  "มันติด": {
    "phonetic": "man-tid",
    "meaning": "它被卡住了"
  },
  "มันยาก": {
    "phonetic": "man-yaak",
    "meaning": "它很难"
  },
  "มัลคอม": {
    "phonetic": "mal-khom",
    "meaning": "马尔科姆"
  },
  "มัลคอล์": {
    "phonetic": "mal-khol",
    "meaning": "马尔科"
  },
  "มัวร์": {
    "phonetic": "maw-r",
    "meaning": "摩尔"
  },
  "มั่น": {
    "phonetic": "mân",
    "meaning": "自信的"
  },
  "มั่นคง": {
    "phonetic": "man-khong",
    "meaning": "稳固/安全"
  },
  "มั้ง": {
    "phonetic": "mang",
    "meaning": "或许"
  },
  "มั้ย": {
    "phonetic": "mái",
    "meaning": "吗 (口语疑问词)"
  },
  "มั๊ย": {
    "phonetic": "may",
    "meaning": "是吗"
  },
  "มา": {
    "phonetic": "maa",
    "meaning": "来"
  },
  "มาก": {
    "phonetic": "maak",
    "meaning": "很多"
  },
  "มากกว่า": {
    "phonetic": "maakkwaa",
    "meaning": "多于"
  },
  "มากขึ้น": {
    "phonetic": "maak-khuen",
    "meaning": "越来越多"
  },
  "มากมาย": {
    "phonetic": "maakmaay",
    "meaning": "许多"
  },
  "มากับผม": {
    "phonetic": "maa-kab-phm",
    "meaning": "跟我来吧"
  },
  "มากิ": {
    "phonetic": "maaki",
    "meaning": "真纪"
  },
  "มากเลย": {
    "phonetic": "maak-lei",
    "meaning": "非常"
  },
  "มากๆ": {
    "phonetic": "maak-maak",
    "meaning": "非常"
  },
  "มาก่อน": {
    "phonetic": "maa-kon",
    "meaning": "先来吧"
  },
  "มาคัส": {
    "phonetic": "maa-khas",
    "meaning": "马库斯"
  },
  "มาคิโนะ": {
    "phonetic": "maa-khi-noa",
    "meaning": "牧野"
  },
  "มาจาก": {
    "phonetic": "maa-chaak",
    "meaning": "来自"
  },
  "มาซิ": {
    "phonetic": "maasi",
    "meaning": "来"
  },
  "มาดาม": {
    "phonetic": "maadaam",
    "meaning": "夫人"
  },
  "มาดูกัน": {
    "phonetic": "maa-duu-kan",
    "meaning": "让我们来看看"
  },
  "มาดูนี่": {
    "phonetic": "maa-duu-nii",
    "meaning": "快来看看这个"
  },
  "มาตรการ": {
    "phonetic": "maat-dtra-gaan",
    "meaning": "措施"
  },
  "มาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยว": {
    "phonetic": "maat-dtra-gaan-frii-wii-saa-phʉa-gra-dtuun-gaan-thɔng-thiaw",
    "meaning": "免签激活旅游业"
  },
  "มาตรฐาน": {
    "phonetic": "maat-dtra-thǎan",
    "meaning": "标准"
  },
  "มาตลอด": {
    "phonetic": "maa-tlod",
    "meaning": "一直都在这里"
  },
  "มาติน": {
    "phonetic": "maa-tin",
    "meaning": "马丁"
  },
  "มาที่": {
    "phonetic": "maa-thii",
    "meaning": "来吧"
  },
  "มานะ": {
    "phonetic": "maana",
    "meaning": "快点"
  },
  "มานามิ": {
    "phonetic": "maa-naa-mi",
    "meaning": "真奈美"
  },
  "มานี่": {
    "phonetic": "maa-nii",
    "meaning": "过来吧"
  },
  "มานี่ซิ": {
    "phonetic": "maa-nii-si",
    "meaning": "过来吧"
  },
  "มานี่มา": {
    "phonetic": "maa-nii-maa",
    "meaning": "过来吧"
  },
  "มานี่สิ": {
    "phonetic": "maa-nii-si",
    "meaning": "过来吧"
  },
  "มานี้": {
    "phonetic": "maa-nii",
    "meaning": "过来吧"
  },
  "มาน่า": {
    "phonetic": "maa-naa",
    "meaning": "法力"
  },
  "มามะ": {
    "phonetic": "maama",
    "meaning": "快点"
  },
  "มามา": {
    "phonetic": "maamaa",
    "meaning": "来吧来吧"
  },
  "มาม่า": {
    "phonetic": "maa-maa",
    "meaning": "妈妈"
  },
  "มายา": {
    "phonetic": "maayaa",
    "meaning": "玛雅"
  },
  "มาริ": {
    "phonetic": "maari",
    "meaning": "马里"
  },
  "มารี": {
    "phonetic": "maarii",
    "meaning": "玛丽"
  },
  "มารุโอะ": {
    "phonetic": "maa-ru-ooa",
    "meaning": "丸尾"
  },
  "มาร์ก": {
    "phonetic": "maar-k",
    "meaning": "马克"
  },
  "มาร์ค": {
    "phonetic": "maarkh",
    "meaning": "标记"
  },
  "มาร์คัส": {
    "phonetic": "maarkhas",
    "meaning": "马库斯"
  },
  "มาร์ติน": {
    "phonetic": "maar-tin",
    "meaning": "马丁"
  },
  "มาร์ตี้": {
    "phonetic": "maar-tii",
    "meaning": "马蒂"
  },
  "มาร์ธา": {
    "phonetic": "maar-thaa",
    "meaning": "玛莎"
  },
  "มาร์นี่": {
    "phonetic": "maar-nii",
    "meaning": "玛妮"
  },
  "มาร์รี": {
    "phonetic": "maar-rii",
    "meaning": "结婚吧"
  },
  "มาร์วิน": {
    "phonetic": "maar-win",
    "meaning": "马文"
  },
  "มาร์แชล": {
    "phonetic": "maarchhael",
    "meaning": "马歇尔"
  },
  "มาร์โก้": {
    "phonetic": "maar-ko",
    "meaning": "马可"
  },
  "มาร์โค": {
    "phonetic": "maar-kho",
    "meaning": "马可"
  },
  "มาสิ": {
    "phonetic": "maasi",
    "meaning": "来"
  },
  "มาสเตอร์": {
    "phonetic": "maas-dtoe",
    "meaning": "掌握"
  },
  "มาเถอะ": {
    "phonetic": "maa-theoa",
    "meaning": "快点"
  },
  "มาเรีย": {
    "phonetic": "maa-reia",
    "meaning": "玛丽亚"
  },
  "มาเร็ว": {
    "phonetic": "maa-rew",
    "meaning": "快来吧"
  },
  "มาเร็วๆ": {
    "phonetic": "maa-rew-rew",
    "meaning": "快来吧"
  },
  "มาเลย": {
    "phonetic": "maa-lei",
    "meaning": "快点"
  },
  "มาเหอะ": {
    "phonetic": "maa-eoa",
    "meaning": "快点"
  },
  "มาแล้ว": {
    "phonetic": "maa-laew",
    "meaning": "它已经到了"
  },
  "มาโกะ": {
    "phonetic": "maa-koa",
    "meaning": "马科"
  },
  "มาใน": {
    "phonetic": "maanai",
    "meaning": "进来吧"
  },
  "มาๆ": {
    "phonetic": "maa",
    "meaning": "快点"
  },
  "มิ": {
    "phonetic": "mi",
    "meaning": "六月"
  },
  "มิกกี้": {
    "phonetic": "mi-kkii",
    "meaning": "米奇"
  },
  "มิกะ": {
    "phonetic": "mika",
    "meaning": "米卡"
  },
  "มิกิ": {
    "phonetic": "miki",
    "meaning": "米基"
  },
  "มิค": {
    "phonetic": "mikh",
    "meaning": "米克"
  },
  "มิจิรุ": {
    "phonetic": "mi-chi-ru",
    "meaning": "满"
  },
  "มิชิมะ": {
    "phonetic": "mi-chhi-ma",
    "meaning": "三岛"
  },
  "มิซึกิ": {
    "phonetic": "mi-sueki",
    "meaning": "水木"
  },
  "มิดชิด": {
    "phonetic": "mít-chít",
    "meaning": "完全"
  },
  "มิตรภาพ": {
    "phonetic": "mít-dtra-phâap",
    "meaning": "友谊"
  },
  "มิตะซัง": {
    "phonetic": "mi-ta-sang",
    "meaning": "三田桑"
  },
  "มิถุนายน": {
    "phonetic": "mí-thù-naa-yon",
    "meaning": "六月"
  },
  "มิทช์": {
    "phonetic": "mi-thchh",
    "meaning": "米奇"
  },
  "มิน": {
    "phonetic": "min",
    "meaning": "分钟"
  },
  "มินจี": {
    "phonetic": "min-chii",
    "meaning": "敏吉"
  },
  "มินนี่": {
    "phonetic": "mi-n-nii",
    "meaning": "米妮"
  },
  "มินวู": {
    "phonetic": "mi-nwuu",
    "meaning": "珉宇"
  },
  "มินามิ": {
    "phonetic": "mi-naa-mi",
    "meaning": "南"
  },
  "มินิมอล": {
    "phonetic": "mí-ní-mɔɔn",
    "meaning": "极简"
  },
  "มินิมอลลิซึม": {
    "phonetic": "mi-ni-mɔɔl-li-sum",
    "meaning": "极简主义"
  },
  "มิน่า": {
    "phonetic": "minaa",
    "meaning": "怪不得"
  },
  "มิลตัน": {
    "phonetic": "mil-tan",
    "meaning": "米尔顿"
  },
  "มิลลี่": {
    "phonetic": "mi-l-lii",
    "meaning": "米莉"
  },
  "มิลส์": {
    "phonetic": "mi-ls",
    "meaning": "米尔斯"
  },
  "มิส": {
    "phonetic": "mis",
    "meaning": "小姐"
  },
  "มิเกล": {
    "phonetic": "mi-kel",
    "meaning": "米格尔"
  },
  "มิเชล": {
    "phonetic": "mi-chhel",
    "meaning": "米歇尔"
  },
  "มิเตอร์": {
    "phonetic": "mí-dtə̂ə",
    "meaning": "仪表"
  },
  "มิโดริ": {
    "phonetic": "mi-do-ri",
    "meaning": "绿"
  },
  "มิโอะ": {
    "phonetic": "mi-ooa",
    "meaning": "澪"
  },
  "มิโฮ": {
    "phonetic": "miho",
    "meaning": "美穗"
  },
  "มี": {
    "phonetic": "mii",
    "meaning": "有"
  },
  "มีคน": {
    "phonetic": "miikhn",
    "meaning": "有人"
  },
  "มีคนตาย": {
    "phonetic": "mii-khn-taay",
    "meaning": "有人死了"
  },
  "มีคนมา": {
    "phonetic": "mii-khn-maa",
    "meaning": "有人来了"
  },
  "มีครับ": {
    "phonetic": "mii-khrab",
    "meaning": "有"
  },
  "มีคุณไป": {
    "phonetic": "mii-khun-pi",
    "meaning": "就这样吧"
  },
  "มีค่ะ": {
    "phonetic": "mii-kha",
    "meaning": "有"
  },
  "มีชีวิต": {
    "phonetic": "mii-chhiiwit",
    "meaning": "居住"
  },
  "มีด": {
    "phonetic": "miid",
    "meaning": "刀"
  },
  "มีนาคม": {
    "phonetic": "miinaakhm",
    "meaning": "行进"
  },
  "มีน่า": {
    "phonetic": "mii-naa",
    "meaning": "米娜"
  },
  "มีปัญหา": {
    "phonetic": "mii-payaa",
    "meaning": "有问题"
  },
  "มีลูก": {
    "phonetic": "mii-luuk",
    "meaning": "生个孩子吧"
  },
  "มีสิ": {
    "phonetic": "miisi",
    "meaning": "有"
  },
  "มีสิทธิ์": {
    "phonetic": "mii-sìt",
    "meaning": "有权/有资格"
  },
  "มีอยู่": {
    "phonetic": "mii-oyuu",
    "meaning": "存在"
  },
  "มีอะไร": {
    "phonetic": "mii-oari",
    "meaning": "那里有什么"
  },
  "มีเดีย": {
    "phonetic": "mii-diia",
    "meaning": "媒体"
  },
  "มีแค่": {
    "phonetic": "mii-khae",
    "meaning": "只有"
  },
  "มือ": {
    "phonetic": "mueo",
    "meaning": "手"
  },
  "มือถือ": {
    "phonetic": "mueo-thueo",
    "meaning": "手机"
  },
  "มุน": {
    "phonetic": "mun",
    "meaning": "蒙"
  },
  "มุม": {
    "phonetic": "mum",
    "meaning": "角落"
  },
  "มุ่ง": {
    "phonetic": "mûng",
    "meaning": "目的"
  },
  "มู": {
    "phonetic": "muu",
    "meaning": "亩"
  },
  "มูน": {
    "phonetic": "muun",
    "meaning": "月亮"
  },
  "มูลค่า": {
    "phonetic": "muun-khâa",
    "meaning": "价值"
  },
  "ม่าย": {
    "phonetic": "maay",
    "meaning": "寡妇"
  },
  "ม้า": {
    "phonetic": "maa",
    "meaning": "马"
  },
  "ยก": {
    "phonetic": "yok",
    "meaning": "举起"
  },
  "ยกเลิก": {
    "phonetic": "ykleik",
    "meaning": "取消"
  },
  "ยกเว้น": {
    "phonetic": "ykwen",
    "meaning": "除了"
  },
  "ยม": {
    "phonetic": "yom",
    "meaning": "对方"
  },
  "ยอง": {
    "phonetic": "yong",
    "meaning": "勇"
  },
  "ยองรัน": {
    "phonetic": "yong-ran",
    "meaning": "英兰"
  },
  "ยอด": {
    "phonetic": "yod",
    "meaning": "顶峰 / 极好的 / 总额 / 金额"
  },
  "ยอดขาย": {
    "phonetic": "yɔ̂ɔt-khǎai",
    "meaning": "销量/销售额"
  },
  "ยอดมาก": {
    "phonetic": "yod-maak",
    "meaning": "非常酷"
  },
  "ยอดเลย": {
    "phonetic": "yod-lei",
    "meaning": "出色的"
  },
  "ยอน": {
    "phonetic": "yon",
    "meaning": "妍"
  },
  "ยอม": {
    "phonetic": "yɔɔm",
    "meaning": "我同意。"
  },
  "ยอมแพ้": {
    "phonetic": "yom-phae",
    "meaning": "投降"
  },
  "ยะลา": {
    "phonetic": "ya-laa",
    "meaning": "亚拉"
  },
  "ยั": {
    "phonetic": "ya",
    "meaning": "是啊"
  },
  "ยัง": {
    "phonetic": "yang",
    "meaning": "还没有"
  },
  "ยังก่อน": {
    "phonetic": "yang-kon",
    "meaning": "还没有"
  },
  "ยังครับ": {
    "phonetic": "yang-khrab",
    "meaning": "还没有"
  },
  "ยังค่ะ": {
    "phonetic": "yang-kha",
    "meaning": "还没有"
  },
  "ยังงั้น": {
    "phonetic": "yang-ngan",
    "meaning": "还没有"
  },
  "ยังมี": {
    "phonetic": "yang-mii",
    "meaning": "还是有的"
  },
  "ยังหรอก": {
    "phonetic": "yang-rok",
    "meaning": "还没有"
  },
  "ยังอยู่": {
    "phonetic": "yang-oyuu",
    "meaning": "还在这里"
  },
  "ยังเลย": {
    "phonetic": "yang-lei",
    "meaning": "还没有"
  },
  "ยังไง": {
    "phonetic": "yang-ngi",
    "meaning": "如何"
  },
  "ยังไงก็": {
    "phonetic": "yang-ngi-k",
    "meaning": "反正"
  },
  "ยังไงซะ": {
    "phonetic": "yang-ngi-sa",
    "meaning": "反正"
  },
  "ยัยบ้า": {
    "phonetic": "yay-baa",
    "meaning": "疯狂的女孩"
  },
  "ยัยโง่": {
    "phonetic": "yay-ngo",
    "meaning": "愚蠢的女孩"
  },
  "ยั่งยืน": {
    "phonetic": "yâng-yʉʉn",
    "meaning": "可持续的"
  },
  "ยา": {
    "phonetic": "yaa",
    "meaning": "药品"
  },
  "ยาก": {
    "phonetic": "yâak",
    "meaning": "难的"
  },
  "ยากันยุง": {
    "phonetic": "yaa-kan-yuŋ",
    "meaning": "防蚊药/驱蚊水"
  },
  "ยาพิษ": {
    "phonetic": "yaa-phit",
    "meaning": "毒"
  },
  "ยาม": {
    "phonetic": "yaam",
    "meaning": "警卫"
  },
  "ยามาดะ": {
    "phonetic": "yaa-maa-da",
    "meaning": "山田"
  },
  "ยาย": {
    "phonetic": "yaay",
    "meaning": "奶奶"
  },
  "ยาว": {
    "phonetic": "yaaw",
    "meaning": "长的"
  },
  "ยาวนาน": {
    "phonetic": "yaaw-naan",
    "meaning": "长的"
  },
  "ยาวิเศษ": {
    "phonetic": "yaa-wí-sèet",
    "meaning": "神奇的药/神药"
  },
  "ยาหยี": {
    "phonetic": "yaayii",
    "meaning": "怡药"
  },
  "ยิง": {
    "phonetic": "ying",
    "meaning": "射击"
  },
  "ยิงมัน": {
    "phonetic": "ying-man",
    "meaning": "射击它"
  },
  "ยิงสิ": {
    "phonetic": "ying-si",
    "meaning": "射击"
  },
  "ยิงเลย": {
    "phonetic": "ying-lei",
    "meaning": "现在拍摄"
  },
  "ยินดี": {
    "phonetic": "yindii",
    "meaning": "恭喜"
  },
  "ยิ่ง": {
    "phonetic": "yîng",
    "meaning": "更多的"
  },
  "ยิ้ม": {
    "phonetic": "yim",
    "meaning": "微笑"
  },
  "ยี่สิบ": {
    "phonetic": "yîi-sìp",
    "meaning": "二十"
  },
  "ยี่ห้อ": {
    "phonetic": "yîi-hɔ̂ɔ",
    "meaning": "品牌"
  },
  "ยี้": {
    "phonetic": "yii",
    "meaning": "该死"
  },
  "ยืดหยุ่น": {
    "phonetic": "yʉʉt-yun",
    "meaning": "韧性/弹性"
  },
  "ยืน": {
    "phonetic": "yʉʉn",
    "meaning": "站立"
  },
  "ยืนขึ้น": {
    "phonetic": "yuen-khuen",
    "meaning": "起来"
  },
  "ยืนยัน": {
    "phonetic": "yuenyan",
    "meaning": "确认"
  },
  "ยืนยาว": {
    "phonetic": "yuen-yaaw",
    "meaning": "长寿"
  },
  "ยืม": {
    "phonetic": "yʉʉm",
    "meaning": "借"
  },
  "ยื่น": {
    "phonetic": "yʉ̂en",
    "meaning": "提交"
  },
  "ยุค": {
    "phonetic": "yuk",
    "meaning": "时代/时期"
  },
  "ยุง": {
    "phonetic": "yuŋ",
    "meaning": "蚊子"
  },
  "ยุงลาย": {
    "phonetic": "yuŋ-laai",
    "meaning": "花斑蚊/伊蚊"
  },
  "ยุน": {
    "phonetic": "yun",
    "meaning": "尹"
  },
  "ยุนซอง": {
    "phonetic": "yun-song",
    "meaning": "尹成"
  },
  "ยุนโฮ": {
    "phonetic": "yu-n-ho",
    "meaning": "允浩"
  },
  "ยุโรป": {
    "phonetic": "yu-ròop",
    "meaning": "欧洲"
  },
  "ยู": {
    "phonetic": "yuu",
    "meaning": "U"
  },
  "ยูกิ": {
    "phonetic": "yuuki",
    "meaning": "由希"
  },
  "ยูกิจัง": {
    "phonetic": "yuu-kicha-ng",
    "meaning": "佑希酱"
  },
  "ยูจิ": {
    "phonetic": "yuuchi",
    "meaning": "裕二"
  },
  "ยูจีน": {
    "phonetic": "yuu-chiin",
    "meaning": "尤金"
  },
  "ยูชอน": {
    "phonetic": "yuu-chhon",
    "meaning": "有春"
  },
  "ยูตะ": {
    "phonetic": "yuuta",
    "meaning": "裕太"
  },
  "ยูน": {
    "phonetic": "yuun",
    "meaning": "云"
  },
  "ยูนซอง": {
    "phonetic": "yuun-song",
    "meaning": "尹成"
  },
  "ยูมิ": {
    "phonetic": "yuumi",
    "meaning": "由美"
  },
  "ยูริ": {
    "phonetic": "yuuri",
    "meaning": "尤里"
  },
  "ย่ะ": {
    "phonetic": "ya",
    "meaning": "是的"
  },
  "ย่า": {
    "phonetic": "yaa",
    "meaning": "奶奶"
  },
  "ย่าง": {
    "phonetic": "yaang",
    "meaning": "烤/烧烤"
  },
  "ย่าห์": {
    "phonetic": "yaa",
    "meaning": "耶"
  },
  "ย้าย": {
    "phonetic": "yaay",
    "meaning": "移动"
  },
  "ย้ำ": {
    "phonetic": "ya",
    "meaning": "我重复一遍"
  },
  "รขโ": {
    "phonetic": "rkho",
    "meaning": "拉科"
  },
  "รถ": {
    "phonetic": "rot",
    "meaning": "车"
  },
  "รถยนต์": {
    "phonetic": "rot-yon",
    "meaning": "汽车"
  },
  "รถเมล์": {
    "phonetic": "rot-mee",
    "meaning": "公共汽车"
  },
  "รถไฟ": {
    "phonetic": "rthfi",
    "meaning": "火车"
  },
  "รถไฟฟ้า": {
    "phonetic": "rót-fai-fáa",
    "meaning": "城轨/轻轨"
  },
  "รถไฟฟ้าใต้ดิน": {
    "phonetic": "rót-fai-fáa-dtâi-din",
    "meaning": "地铁"
  },
  "รบกวน": {
    "phonetic": "róp-guan",
    "meaning": "打扰"
  },
  "รปภ": {
    "phonetic": "raaw-bpaaw-phaaw",
    "meaning": "保安员"
  },
  "รพ": {
    "phonetic": "raaw-phaaw",
    "meaning": "医院"
  },
  "รร": {
    "phonetic": "roong-riian",
    "meaning": "学校"
  },
  "รวดเร็ว": {
    "phonetic": "rwdrew",
    "meaning": "快速地"
  },
  "รวม": {
    "phonetic": "ruam",
    "meaning": "一起"
  },
  "รวมถึง": {
    "phonetic": "rwm-thueng",
    "meaning": "包括"
  },
  "รวมทั้ง": {
    "phonetic": "rwm-thang",
    "meaning": "包括"
  },
  "รวย": {
    "phonetic": "ruai",
    "meaning": "富有的"
  },
  "รส": {
    "phonetic": "rot",
    "meaning": "味道"
  },
  "รสจัดจ้าน": {
    "phonetic": "rot-jat-jaan",
    "meaning": "浓郁重口"
  },
  "รสชาติ": {
    "phonetic": "rot-chaat",
    "meaning": "味道/口味"
  },
  "รหัส": {
    "phonetic": "ras",
    "meaning": "代码"
  },
  "รอ": {
    "phonetic": "ro",
    "meaning": "等待"
  },
  "รอก่อน": {
    "phonetic": "ro-kon",
    "meaning": "等待"
  },
  "รองรับ": {
    "phonetic": "rɔɔng-ráp",
    "meaning": "支持"
  },
  "รองเท้า": {
    "phonetic": "rongtheaa",
    "meaning": "鞋"
  },
  "รอด้วย": {
    "phonetic": "ro-dwy",
    "meaning": "请稍等"
  },
  "รอนนี่": {
    "phonetic": "ron-nii",
    "meaning": "罗尼"
  },
  "รอนี่นะ": {
    "phonetic": "ro-nii-na",
    "meaning": "在这里等一下"
  },
  "รอบ": {
    "phonetic": "rob",
    "meaning": "轮 / 周 / 圈 / 环绕 / 周围"
  },
  "รอบคอบ": {
    "phonetic": "rɔ̂ɔp-khɔ̂ɔp",
    "meaning": "小心"
  },
  "รอย": {
    "phonetic": "roy",
    "meaning": "罗伊"
  },
  "รอสซี่": {
    "phonetic": "rossii",
    "meaning": "罗西"
  },
  "รอื่นๆ": {
    "phonetic": "rɔɔ-uen-uen",
    "meaning": "其他的"
  },
  "ระ": {
    "phonetic": "rá",
    "meaning": "拉"
  },
  "ระงับ": {
    "phonetic": "rá-ngáp",
    "meaning": "暂停"
  },
  "ระดม": {
    "phonetic": "ra-dom",
    "meaning": "动员"
  },
  "ระดับ": {
    "phonetic": "radab",
    "meaning": "等级"
  },
  "ระบบ": {
    "phonetic": "ra-bop",
    "meaning": "系统"
  },
  "ระบบแอปซื้อขายออนไลน์": {
    "phonetic": "ra-bop-aep-sʉʉ-khaai-ɔɔn-laai",
    "meaning": "电商系统"
  },
  "ระบุ": {
    "phonetic": "ra-bù",
    "meaning": "指定"
  },
  "ระมัดระวัง": {
    "phonetic": "rá-mát-rá-wang",
    "meaning": "小心"
  },
  "ระยะ": {
    "phonetic": "ra-ya",
    "meaning": "期间/距离"
  },
  "ระยะยาว": {
    "phonetic": "ra-ya-yaao",
    "meaning": "长期"
  },
  "ระยำ": {
    "phonetic": "raya",
    "meaning": "操蛋"
  },
  "ระวัง": {
    "phonetic": "rawang",
    "meaning": "当心"
  },
  "ระวังนะ": {
    "phonetic": "rawang-na",
    "meaning": "当心"
  },
  "ระหว่าง": {
    "phonetic": "rawaang",
    "meaning": "之间"
  },
  "ระเบิด": {
    "phonetic": "rabeid",
    "meaning": "爆炸"
  },
  "ระเบียง": {
    "phonetic": "ra-biang",
    "meaning": "阳台"
  },
  "ระเบียบ": {
    "phonetic": "rá-bìap",
    "meaning": "命令"
  },
  "รัก": {
    "phonetic": "rák",
    "meaning": "爱"
  },
  "รักคุณ": {
    "phonetic": "rak-khun",
    "meaning": "爱你"
  },
  "รักนะ": {
    "phonetic": "rak-na",
    "meaning": "我爱你"
  },
  "รักษา": {
    "phonetic": "rák-sǎa",
    "meaning": "对待"
  },
  "รัช": {
    "phonetic": "rachh",
    "meaning": "匆忙"
  },
  "รัชดาภิเษก": {
    "phonetic": "rát-chá-daa-phí-sèek",
    "meaning": "拉差达披色（路名）"
  },
  "รัฐ": {
    "phonetic": "rath",
    "meaning": "状态"
  },
  "รัฐบาล": {
    "phonetic": "rathbaal",
    "meaning": "政府"
  },
  "รัน": {
    "phonetic": "ran",
    "meaning": "跑步"
  },
  "รับ": {
    "phonetic": "rab",
    "meaning": "收到"
  },
  "รับทราบ": {
    "phonetic": "rab-thraab",
    "meaning": "已获承认"
  },
  "รับบท": {
    "phonetic": "rab-bth",
    "meaning": "担当这个角色"
  },
  "รับผิดชอบ": {
    "phonetic": "ráp-phìt-chɔ̂ɔp",
    "meaning": "负责"
  },
  "รับมือ": {
    "phonetic": "rap-mʉʉ",
    "meaning": "应对"
  },
  "รับสิ": {
    "phonetic": "rab-si",
    "meaning": "拿走吧"
  },
  "รับไป": {
    "phonetic": "rab-pi",
    "meaning": "拿走吧"
  },
  "รับไปสิ": {
    "phonetic": "rab-pi-si",
    "meaning": "拿走吧"
  },
  "รัส": {
    "phonetic": "ras",
    "meaning": "拉斯"
  },
  "รัสเซล": {
    "phonetic": "ras-sel",
    "meaning": "拉塞尔"
  },
  "รัสเซีย": {
    "phonetic": "rasseia",
    "meaning": "俄罗斯"
  },
  "รั่ว": {
    "phonetic": "rûa",
    "meaning": "泄露"
  },
  "รา": {
    "phonetic": "raa",
    "meaning": "模具"
  },
  "ราก": {
    "phonetic": "râak",
    "meaning": "根"
  },
  "รากฐาน": {
    "phonetic": "raak-thǎan",
    "meaning": "基础"
  },
  "ราคา": {
    "phonetic": "raa-khaa",
    "meaning": "价格"
  },
  "รางวัล": {
    "phonetic": "raang-wan",
    "meaning": "报酬"
  },
  "ราจ": {
    "phonetic": "raach",
    "meaning": "拉杰"
  },
  "ราชธานี": {
    "phonetic": "raat-cha-thaa-nii",
    "meaning": "拉差他尼"
  },
  "ราชวราราม": {
    "phonetic": "raat-cha-wa-raa-raam",
    "meaning": "皇家寺院"
  },
  "ราชินี": {
    "phonetic": "raachhinii",
    "meaning": "女王"
  },
  "ราด": {
    "phonetic": "râat",
    "meaning": "倒"
  },
  "ราตรี": {
    "phonetic": "raa-dtrii",
    "meaning": "晚上"
  },
  "ราบ": {
    "phonetic": "raap",
    "meaning": "平坦的"
  },
  "ราบรื่น": {
    "phonetic": "raap-rʉʉn",
    "meaning": "顺利/平稳"
  },
  "รามอินทรา": {
    "phonetic": "raam-in-thraa",
    "meaning": "拉明特拉"
  },
  "ราย": {
    "phonetic": "raay",
    "meaning": "列表"
  },
  "รายการ": {
    "phonetic": "raaykaar",
    "meaning": "列表"
  },
  "รายงาน": {
    "phonetic": "raayngaan",
    "meaning": "报告"
  },
  "รายรับ": {
    "phonetic": "raai-ráp",
    "meaning": "收入"
  },
  "ราล์ฟ": {
    "phonetic": "raalf",
    "meaning": "拉尔夫"
  },
  "ราว": {
    "phonetic": "raaw",
    "meaning": "大约"
  },
  "ราวๆ": {
    "phonetic": "raaw",
    "meaning": "大约"
  },
  "ราอิม": {
    "phonetic": "raa-oim",
    "meaning": "雷姆"
  },
  "ราเชล": {
    "phonetic": "raa-chhel",
    "meaning": "雷切尔"
  },
  "ราโมน": {
    "phonetic": "raa-mon",
    "meaning": "拉蒙"
  },
  "ริ": {
    "phonetic": "ri",
    "meaning": "里"
  },
  "ริกกี้": {
    "phonetic": "rik-kii",
    "meaning": "瑞奇"
  },
  "ริค": {
    "phonetic": "rikh",
    "meaning": "瑞克"
  },
  "ริคกี้": {
    "phonetic": "rikh-kii",
    "meaning": "瑞奇"
  },
  "ริคุ": {
    "phonetic": "rikhu",
    "meaning": "利库"
  },
  "ริช": {
    "phonetic": "richh",
    "meaning": "富有的"
  },
  "ริชชี่": {
    "phonetic": "richh-chhii",
    "meaning": "里奇"
  },
  "ริชาร์ด": {
    "phonetic": "ri-chhaard",
    "meaning": "理查德"
  },
  "ริต้า": {
    "phonetic": "ri-taa",
    "meaning": "丽塔"
  },
  "ริน": {
    "phonetic": "rin",
    "meaning": "倒"
  },
  "ริม": {
    "phonetic": "rim",
    "meaning": "边缘"
  },
  "ริว": {
    "phonetic": "riw",
    "meaning": "隆"
  },
  "ริวซากิ": {
    "phonetic": "riw-saaki",
    "meaning": "龙崎"
  },
  "ริเวอร์": {
    "phonetic": "ri-weor",
    "meaning": "河"
  },
  "ริโกะ": {
    "phonetic": "ri-koa",
    "meaning": "理子"
  },
  "รี": {
    "phonetic": "rii",
    "meaning": "椭圆形"
  },
  "รีด": {
    "phonetic": "riid",
    "meaning": "铁"
  },
  "รีบ": {
    "phonetic": "riib",
    "meaning": "匆忙"
  },
  "รีบไป": {
    "phonetic": "riib-pi",
    "meaning": "匆忙"
  },
  "รีบๆ": {
    "phonetic": "riip-riip",
    "meaning": "匆忙"
  },
  "รีวิว": {
    "phonetic": "ri-wiu",
    "meaning": "测评/评论"
  },
  "รีส": {
    "phonetic": "riis",
    "meaning": "里斯"
  },
  "รีสอร์ท": {
    "phonetic": "rii-sɔ̀ɔt",
    "meaning": "采取"
  },
  "รี้ด": {
    "phonetic": "riid",
    "meaning": "芦苇"
  },
  "รึ": {
    "phonetic": "rue",
    "meaning": "或者"
  },
  "รึยัง": {
    "phonetic": "rue-yang",
    "meaning": "还没有"
  },
  "รึเปล่า": {
    "phonetic": "rue-pelaa",
    "meaning": "或不"
  },
  "รึไง": {
    "phonetic": "ruengi",
    "meaning": "或者什么"
  },
  "รื่น": {
    "phonetic": "ruen",
    "meaning": "令人愉快的"
  },
  "รุกฆาต": {
    "phonetic": "rukkhaat",
    "meaning": "将死"
  },
  "รุกะ": {
    "phonetic": "ruka",
    "meaning": "鲁卡"
  },
  "รุนแรง": {
    "phonetic": "run-raeng",
    "meaning": "严重"
  },
  "รุ่งเรือง": {
    "phonetic": "rûng-rʉang",
    "meaning": "繁荣"
  },
  "รุ่น": {
    "phonetic": "run",
    "meaning": "模型"
  },
  "รุ่นพี่": {
    "phonetic": "run-phii",
    "meaning": "高级的"
  },
  "รูธี": {
    "phonetic": "ruuthii",
    "meaning": "露丝"
  },
  "รูบี้": {
    "phonetic": "ruu-bii",
    "meaning": "红宝石"
  },
  "รูป": {
    "phonetic": "ruup",
    "meaning": "图片"
  },
  "รูปหล่อ": {
    "phonetic": "ruup-lo",
    "meaning": "帅气的身材"
  },
  "รูปแบบ": {
    "phonetic": "ruup-baeb",
    "meaning": "格式"
  },
  "รูฟัส": {
    "phonetic": "ruu-fas",
    "meaning": "鲁弗斯"
  },
  "รูอิ": {
    "phonetic": "ruuoi",
    "meaning": "瑞"
  },
  "รู้": {
    "phonetic": "rúu",
    "meaning": "知道"
  },
  "รู้จัก": {
    "phonetic": "rúu-jàk",
    "meaning": "认识"
  },
  "รู้น่า": {
    "phonetic": "ruu-naa",
    "meaning": "我知道"
  },
  "รู้มั้ย": {
    "phonetic": "ruu-may",
    "meaning": "你可知道"
  },
  "รู้มั๊ย": {
    "phonetic": "ruu-may",
    "meaning": "你可知道"
  },
  "รู้ว่า": {
    "phonetic": "ruu-waa",
    "meaning": "知道这一点"
  },
  "รู้สึก": {
    "phonetic": "ruusuek",
    "meaning": "感觉"
  },
  "รู้อะไร": {
    "phonetic": "ruu-oari",
    "meaning": "你知道什么"
  },
  "รู้แล้ว": {
    "phonetic": "ruu-laew",
    "meaning": "我知道"
  },
  "รู้ไม๊": {
    "phonetic": "ruu-mi",
    "meaning": "你可知道"
  },
  "รู้ไหม": {
    "phonetic": "rúu-mǎi",
    "meaning": "知道吗"
  },
  "ร็อค": {
    "phonetic": "rokh",
    "meaning": "岩石"
  },
  "ร็อบ": {
    "phonetic": "rob",
    "meaning": "抢"
  },
  "ร็อบบี้": {
    "phonetic": "r-ob-bii",
    "meaning": "罗比"
  },
  "ร่ม": {
    "phonetic": "rôm",
    "meaning": "伞"
  },
  "ร่วง": {
    "phonetic": "rûang",
    "meaning": "落下"
  },
  "ร่วม": {
    "phonetic": "rûam",
    "meaning": "加入"
  },
  "ร่วมกัน": {
    "phonetic": "rwm-kan",
    "meaning": "在一起"
  },
  "ร่วมเพศ": {
    "phonetic": "rwm-phes",
    "meaning": "他妈的"
  },
  "ร่วมใจ": {
    "phonetic": "rûam-jai",
    "meaning": "一起加入"
  },
  "ร่อง": {
    "phonetic": "rɔ́ng",
    "meaning": "槽/沟"
  },
  "ร่างกาย": {
    "phonetic": "râang-gaai",
    "meaning": "身体"
  },
  "ร้อง": {
    "phonetic": "rong",
    "meaning": "哭"
  },
  "ร้องขอ": {
    "phonetic": "rɔ́ɔng-khɔ̌ɔ",
    "meaning": "要求"
  },
  "ร้องไห้": {
    "phonetic": "rongi",
    "meaning": "哭了"
  },
  "ร้อน": {
    "phonetic": "ron",
    "meaning": "热的"
  },
  "ร้อย": {
    "phonetic": "rɔ́ɔi",
    "meaning": "百"
  },
  "ร้อยโท": {
    "phonetic": "roy-tho",
    "meaning": "中尉"
  },
  "ร้าง": {
    "phonetic": "ráang",
    "meaning": "荒凉的"
  },
  "ร้าน": {
    "phonetic": "raan",
    "meaning": "店铺"
  },
  "ร้าย": {
    "phonetic": "laai",
    "meaning": "坏/邪恶"
  },
  "ร๊อบ": {
    "phonetic": "rob",
    "meaning": "抢"
  },
  "ฤดู": {
    "phonetic": "rʉ́-duu",
    "meaning": "季/季节"
  },
  "ฤดูกาล": {
    "phonetic": "rʉ́-duu-gaan",
    "meaning": "季节"
  },
  "ลง": {
    "phonetic": "long",
    "meaning": "向下"
  },
  "ลงตัว": {
    "phonetic": "long-dtua",
    "meaning": "完美的"
  },
  "ลงทะเบียน": {
    "phonetic": "long-thá-biian",
    "meaning": "注册/登记"
  },
  "ลงทุน": {
    "phonetic": "lon-thun",
    "meaning": "投资"
  },
  "ลงมา": {
    "phonetic": "lngmaa",
    "meaning": "坠落"
  },
  "ลงมือ": {
    "phonetic": "lngmueo",
    "meaning": "采取行动"
  },
  "ลงไป": {
    "phonetic": "lngpi",
    "meaning": "下去"
  },
  "ลด": {
    "phonetic": "lót",
    "meaning": "降价 / 减少"
  },
  "ลดราคา": {
    "phonetic": "lót-raa-khaa",
    "meaning": "打折/降价"
  },
  "ลนีโญ": {
    "phonetic": "la-nii-nyoo",
    "meaning": "伊尼诺"
  },
  "ลบ": {
    "phonetic": "lop",
    "meaning": "删除"
  },
  "ลม": {
    "phonetic": "lom",
    "meaning": "风"
  },
  "ลมแดด": {
    "phonetic": "lom-dàet",
    "meaning": "中暑"
  },
  "ลวง": {
    "phonetic": "luang",
    "meaning": "朗朗上口的"
  },
  "ลอง": {
    "phonetic": "long",
    "meaning": "尝试一下"
  },
  "ลองดู": {
    "phonetic": "long-duu",
    "meaning": "尝试一下"
  },
  "ลองดูสิ": {
    "phonetic": "long-duu-si",
    "meaning": "尝试一下"
  },
  "ลองสิ": {
    "phonetic": "long-si",
    "meaning": "尝试一下"
  },
  "ลอนดอน": {
    "phonetic": "london",
    "meaning": "伦敦"
  },
  "ลอปปี้": {
    "phonetic": "lop-pii",
    "meaning": "洛皮"
  },
  "ลอยด์": {
    "phonetic": "loy-d",
    "meaning": "劳埃德"
  },
  "ลอรี่": {
    "phonetic": "l-orii",
    "meaning": "劳瑞"
  },
  "ลอร่า": {
    "phonetic": "l-oraa",
    "meaning": "劳拉"
  },
  "ลอร์ด": {
    "phonetic": "lord",
    "meaning": "主"
  },
  "ลอว์เรน": {
    "phonetic": "lowren",
    "meaning": "劳伦"
  },
  "ลอส": {
    "phonetic": "los",
    "meaning": "洛斯"
  },
  "ลอเรน": {
    "phonetic": "loren",
    "meaning": "劳伦"
  },
  "ลอเรล": {
    "phonetic": "lorel",
    "meaning": "劳雷尔"
  },
  "ละ": {
    "phonetic": "lá",
    "meaning": "(语气词) 表示“呢/啦”"
  },
  "ละกัน": {
    "phonetic": "la-gan",
    "meaning": "(语气词) 表示提议“吧/就这样吧”"
  },
  "ละออง": {
    "phonetic": "lá-ɔɔng",
    "meaning": "灰尘"
  },
  "ละเอียด": {
    "phonetic": "lá-ìat",
    "meaning": "详细的"
  },
  "ลักษณ์": {
    "phonetic": "lák",
    "meaning": "外貌"
  },
  "ลันดี้": {
    "phonetic": "lan-dii",
    "meaning": "伦迪"
  },
  "ลัย": {
    "phonetic": "lay",
    "meaning": "赖"
  },
  "ลา": {
    "phonetic": "laa",
    "meaning": "再见"
  },
  "ลาก่อน": {
    "phonetic": "laa-kɔɔn",
    "meaning": "再见"
  },
  "ลาน": {
    "phonetic": "laan",
    "meaning": "庭院"
  },
  "ลาน่า": {
    "phonetic": "laa-naa",
    "meaning": "拉娜"
  },
  "ลาย": {
    "phonetic": "laai",
    "meaning": "条纹/花纹/图案"
  },
  "ลาร์รี่": {
    "phonetic": "laar-rii",
    "meaning": "拉里"
  },
  "ลำ": {
    "phonetic": "la",
    "meaning": "艘 / 架 / 根 / 量词(船、飞机等)"
  },
  "ลำไส้": {
    "phonetic": "lam-sâi",
    "meaning": "肠"
  },
  "ลิงก์": {
    "phonetic": "líŋ",
    "meaning": "链接"
  },
  "ลิงค์": {
    "phonetic": "lingkh",
    "meaning": "链接"
  },
  "ลิซ": {
    "phonetic": "lis",
    "meaning": "莉兹"
  },
  "ลิซซี่": {
    "phonetic": "lis-sii",
    "meaning": "丽兹"
  },
  "ลิซ่า": {
    "phonetic": "li-saa",
    "meaning": "丽莎"
  },
  "ลิตร": {
    "phonetic": "litr",
    "meaning": "升"
  },
  "ลินดา": {
    "phonetic": "lin-daa",
    "meaning": "琳达"
  },
  "ลินน์": {
    "phonetic": "li-nn",
    "meaning": "林恩"
  },
  "ลินเน็ต": {
    "phonetic": "li-n-net",
    "meaning": "莱内特"
  },
  "ลินเน็ท": {
    "phonetic": "li-nneth",
    "meaning": "莱内特"
  },
  "ลิฟ": {
    "phonetic": "lif",
    "meaning": "丽芙"
  },
  "ลิล": {
    "phonetic": "lil",
    "meaning": "莉尔"
  },
  "ลิลลี่": {
    "phonetic": "lillii",
    "meaning": "百合"
  },
  "ลิลี่": {
    "phonetic": "li-lii",
    "meaning": "百合"
  },
  "ลิสบอน": {
    "phonetic": "lisbon",
    "meaning": "里斯本"
  },
  "ลิเดีย": {
    "phonetic": "li-deia",
    "meaning": "莉迪亚"
  },
  "ลิเลียน": {
    "phonetic": "li-leian",
    "meaning": "莉莲"
  },
  "ลี": {
    "phonetic": "lii",
    "meaning": "李"
  },
  "ลีน่า": {
    "phonetic": "lii-naa",
    "meaning": "莉娜"
  },
  "ลีออน": {
    "phonetic": "lii-oon",
    "meaning": "莱昂"
  },
  "ลีโอ": {
    "phonetic": "liioo",
    "meaning": "利奥"
  },
  "ลี่": {
    "phonetic": "lîi",
    "meaning": "李"
  },
  "ลึก": {
    "phonetic": "luek",
    "meaning": "深的"
  },
  "ลืม": {
    "phonetic": "lʉʉm",
    "meaning": "忘记"
  },
  "ลืมตาสิ": {
    "phonetic": "luemtaa-si",
    "meaning": "睁开你的眼睛"
  },
  "ลืมไป": {
    "phonetic": "luem-pi",
    "meaning": "忘记了"
  },
  "ลื่": {
    "phonetic": "lue",
    "meaning": "滑"
  },
  "ลื่น": {
    "phonetic": "lʉ̂en",
    "meaning": "滑"
  },
  "ลุก": {
    "phonetic": "luk",
    "meaning": "起床"
  },
  "ลุกขึ้น": {
    "phonetic": "luk-khuen",
    "meaning": "起床"
  },
  "ลุค": {
    "phonetic": "lukh",
    "meaning": "卢克"
  },
  "ลุง": {
    "phonetic": "lung",
    "meaning": "叔叔"
  },
  "ลุงครับ": {
    "phonetic": "lung-khrab",
    "meaning": "叔叔"
  },
  "ลุย": {
    "phonetic": "luy",
    "meaning": "前进"
  },
  "ลุยเลย": {
    "phonetic": "luy-lei",
    "meaning": "前进"
  },
  "ลู": {
    "phonetic": "luu",
    "meaning": "鲁"
  },
  "ลูก": {
    "phonetic": "luuk",
    "meaning": "孩子们"
  },
  "ลูกข้า": {
    "phonetic": "luuk-khaa",
    "meaning": "我的儿子"
  },
  "ลูกค้า": {
    "phonetic": "lûuk-kháa",
    "meaning": "客人 / 客户"
  },
  "ลูกจ๋า": {
    "phonetic": "luuk-chaa",
    "meaning": "我的儿子"
  },
  "ลูกฉัน": {
    "phonetic": "luuk-chhan",
    "meaning": "我的孩子"
  },
  "ลูกชาย": {
    "phonetic": "luukchhaay",
    "meaning": "儿子"
  },
  "ลูกพี่": {
    "phonetic": "luukphii",
    "meaning": "我的儿子"
  },
  "ลูกพ่อ": {
    "phonetic": "luuk-pho",
    "meaning": "父亲的儿子"
  },
  "ลูกรัก": {
    "phonetic": "luuk-rak",
    "meaning": "我亲爱的孩子"
  },
  "ลูกสาว": {
    "phonetic": "luuksaaw",
    "meaning": "女儿"
  },
  "ลูกแม่": {
    "phonetic": "luuk-mae",
    "meaning": "母亲的孩子"
  },
  "ลูกๆ": {
    "phonetic": "luuk-luuk",
    "meaning": "孩子们"
  },
  "ลูก้า": {
    "phonetic": "luuk-aa",
    "meaning": "卢卡"
  },
  "ลูค": {
    "phonetic": "luukh",
    "meaning": "卢克"
  },
  "ลูคัส": {
    "phonetic": "luukhas",
    "meaning": "卢卡斯"
  },
  "ลูซ": {
    "phonetic": "luus",
    "meaning": "卢斯"
  },
  "ลูซี่": {
    "phonetic": "luu-sii",
    "meaning": "露西"
  },
  "ลูน่า": {
    "phonetic": "luu-naa",
    "meaning": "卢娜"
  },
  "ลูอิส": {
    "phonetic": "luu-ois",
    "meaning": "刘易斯"
  },
  "ล็อค": {
    "phonetic": "lók",
    "meaning": "锁"
  },
  "ล็อต": {
    "phonetic": "lɔ́t",
    "meaning": "很多"
  },
  "ล่วง": {
    "phonetic": "lûang",
    "meaning": "经过"
  },
  "ล่อง": {
    "phonetic": "lɔ̂ng",
    "meaning": "下游"
  },
  "ล่ะ": {
    "phonetic": "lâ",
    "meaning": "(语气词) 表示疑问、追问，意为“呢/啦”"
  },
  "ล่ะก็": {
    "phonetic": "la-k",
    "meaning": "嗯就是这样"
  },
  "ล่าง": {
    "phonetic": "lâang",
    "meaning": "降低"
  },
  "ล่าช้า": {
    "phonetic": "lâa-cháa",
    "meaning": "延迟"
  },
  "ล่าม": {
    "phonetic": "lâam",
    "meaning": "口译员"
  },
  "ล่าสุด": {
    "phonetic": "lâa-sùt",
    "meaning": "最新/最近"
  },
  "ล้น": {
    "phonetic": "lôn",
    "meaning": "溢出"
  },
  "ล้นหลาม": {
    "phonetic": "lôn-lǎam",
    "meaning": "压倒"
  },
  "ล้ม": {
    "phonetic": "lom",
    "meaning": "跌倒/倒下"
  },
  "ล้มเหลว": {
    "phonetic": "lm-elw",
    "meaning": "失败的"
  },
  "ล้อเล่น": {
    "phonetic": "lo-len",
    "meaning": "只是在开玩笑"
  },
  "ล้างแผล": {
    "phonetic": "láaŋ-phǎen",
    "meaning": "清洗伤口/换药"
  },
  "ล้าน": {
    "phonetic": "laan",
    "meaning": "百万"
  },
  "ล้านคน": {
    "phonetic": "laan-khn",
    "meaning": "数百万人"
  },
  "ล้านวอน": {
    "phonetic": "laan-won",
    "meaning": "百万赢了"
  },
  "ล้านเยน": {
    "phonetic": "laan-yen",
    "meaning": "百万日元"
  },
  "ล้ำ": {
    "phonetic": "lám",
    "meaning": "异常地"
  },
  "ล้ำค่า": {
    "phonetic": "lám-khâa",
    "meaning": "宝贵的"
  },
  "วง": {
    "phonetic": "wong",
    "meaning": "乐队"
  },
  "วงการ": {
    "phonetic": "wong-gaan",
    "meaning": "圆圈"
  },
  "วนา": {
    "phonetic": "wa-naa",
    "meaning": "瓦娜"
  },
  "วอน": {
    "phonetic": "won",
    "meaning": "求"
  },
  "วอร์ด": {
    "phonetic": "word",
    "meaning": "病房"
  },
  "วอร์เรน": {
    "phonetic": "worren",
    "meaning": "沃伦"
  },
  "วอลท์": {
    "phonetic": "wolth",
    "meaning": "沃尔特"
  },
  "วอลลี่": {
    "phonetic": "wo-l-lii",
    "meaning": "沃利"
  },
  "วอลเลซ": {
    "phonetic": "wolles",
    "meaning": "华莱士"
  },
  "วอล์ท": {
    "phonetic": "wolth",
    "meaning": "沃尔特"
  },
  "วะ": {
    "phonetic": "wa",
    "meaning": "哇"
  },
  "วัง": {
    "phonetic": "wang",
    "meaning": "宫殿"
  },
  "วัชพืช": {
    "phonetic": "wat-phueat",
    "meaning": "杂草"
  },
  "วัฒนธรรม": {
    "phonetic": "wát-thá-ná-tham",
    "meaning": "文化"
  },
  "วัด": {
    "phonetic": "wat",
    "meaning": "寺庙"
  },
  "วัดวา": {
    "phonetic": "wat-waa",
    "meaning": "等于"
  },
  "วัดอรุณราชวราราม": {
    "phonetic": "wat-a-run-raat-cha-wa-raa-raam",
    "meaning": "郑王庙"
  },
  "วัตถุ": {
    "phonetic": "wát-thù",
    "meaning": "目的"
  },
  "วัตถุประสงค์": {
    "phonetic": "wat-thu-bpra-song",
    "meaning": "客观的"
  },
  "วัตสัน": {
    "phonetic": "wat-san",
    "meaning": "华生"
  },
  "วัน": {
    "phonetic": "wan",
    "meaning": "天"
  },
  "วันก่อน": {
    "phonetic": "wan-kon",
    "meaning": "前一天"
  },
  "วันที่": {
    "phonetic": "wan-thii",
    "meaning": "日期"
  },
  "วันนั้น": {
    "phonetic": "wan-nan",
    "meaning": "当天"
  },
  "วันนี้": {
    "phonetic": "wan-nii",
    "meaning": "今天"
  },
  "วันนึง": {
    "phonetic": "wan-nueng",
    "meaning": "一天"
  },
  "วันพรุ่งนี้เที่ยงตรง": {
    "phonetic": "wan-phrung-nii-thiang-trong",
    "meaning": "明天中午"
  },
  "วันศุกร์นี้บ่ายสามโมง": {
    "phonetic": "wan-suk-nii-baai-saam-moong",
    "meaning": "周五下午三点"
  },
  "วันเกิด": {
    "phonetic": "wan-keid",
    "meaning": "生日"
  },
  "วันแล้ว": {
    "phonetic": "wan-laew",
    "meaning": "已经过去一天了"
  },
  "วัย": {
    "phonetic": "wai",
    "meaning": "年龄"
  },
  "วัว": {
    "phonetic": "waw",
    "meaning": "奶牛"
  },
  "วาง": {
    "phonetic": "waang",
    "meaning": "地方"
  },
  "วางลง": {
    "phonetic": "waang-lng",
    "meaning": "把它放下"
  },
  "วางแผน": {
    "phonetic": "waang-phaen",
    "meaning": "规划/计划"
  },
  "วาน": {
    "phonetic": "waan",
    "meaning": "万"
  },
  "วาล์ว": {
    "phonetic": "waao",
    "meaning": "阀门"
  },
  "วาว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "วิ": {
    "phonetic": "wi",
    "meaning": "无线"
  },
  "วิกกี้": {
    "phonetic": "wik-kii",
    "meaning": "维姬"
  },
  "วิกฤต": {
    "phonetic": "wi-grit",
    "meaning": "危机"
  },
  "วิค": {
    "phonetic": "wikh",
    "meaning": "维克"
  },
  "วิคกี้": {
    "phonetic": "wikh-kii",
    "meaning": "维姬"
  },
  "วิจัย": {
    "phonetic": "wi-jai",
    "meaning": "研究"
  },
  "วิชาการ": {
    "phonetic": "wi-chaa-gaan",
    "meaning": "学术的"
  },
  "วิญญาณ": {
    "phonetic": "wiayaan",
    "meaning": "精神"
  },
  "วิด": {
    "phonetic": "wit",
    "meaning": "视频"
  },
  "วิถี": {
    "phonetic": "wi-thii",
    "meaning": "方式/路"
  },
  "วิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระ": {
    "phonetic": "wi-thii-chii-wit-baep-mi-ni-mɔɔl-li-sum-thii-chuay-hai-jit-jai-pen-i-sa-ra",
    "meaning": "极简生活方式"
  },
  "วิทยาศาสตร์": {
    "phonetic": "wit-tha-yaa-saat",
    "meaning": "科学"
  },
  "วิทยุ": {
    "phonetic": "withyu",
    "meaning": "收音机"
  },
  "วิธี": {
    "phonetic": "withii",
    "meaning": "方法"
  },
  "วิธีนี้": {
    "phonetic": "withii-nii",
    "meaning": "这边走"
  },
  "วิน": {
    "phonetic": "win",
    "meaning": "摩的停靠站/摩托车站"
  },
  "วินซ์": {
    "phonetic": "win-s",
    "meaning": "文斯"
  },
  "วินมอเตอร์ไซค์": {
    "phonetic": "win-mɔɔ-təə-sai",
    "meaning": "摩的/摩托出租车"
  },
  "วินสตัน": {
    "phonetic": "win-s-tan",
    "meaning": "温斯顿"
  },
  "วินสโตน": {
    "phonetic": "win-s-ton",
    "meaning": "温斯顿"
  },
  "วินัย": {
    "phonetic": "wi-nai",
    "meaning": "纪律"
  },
  "วินาที": {
    "phonetic": "winaathii",
    "meaning": "秒"
  },
  "วิฟ": {
    "phonetic": "wif",
    "meaning": "维维"
  },
  "วิล": {
    "phonetic": "wil",
    "meaning": "将要"
  },
  "วิลลี่": {
    "phonetic": "wi-l-lii",
    "meaning": "威利"
  },
  "วิลล์": {
    "phonetic": "wi-ll",
    "meaning": "将要"
  },
  "วิลสัน": {
    "phonetic": "wi-l-san",
    "meaning": "威尔逊"
  },
  "วิว": {
    "phonetic": "wiw",
    "meaning": "看法"
  },
  "วิศวกร": {
    "phonetic": "wit-sa-wa-gɔɔn",
    "meaning": "工程师"
  },
  "วิศวกรรม": {
    "phonetic": "wít-sà-wá-gam",
    "meaning": "工程"
  },
  "วิสกี้": {
    "phonetic": "wiskii",
    "meaning": "威士忌酒"
  },
  "วิเคราะห์": {
    "phonetic": "wí-khrɔ́",
    "meaning": "分析"
  },
  "วิเวียน": {
    "phonetic": "wi-weian",
    "meaning": "维维安"
  },
  "วิเศษ": {
    "phonetic": "wi-set",
    "meaning": "精彩的"
  },
  "วิ่ง": {
    "phonetic": "wing",
    "meaning": "跑步"
  },
  "วิ่งไป": {
    "phonetic": "wing-pi",
    "meaning": "跑步"
  },
  "วี": {
    "phonetic": "wii",
    "meaning": "五、"
  },
  "วีซ่า": {
    "phonetic": "wii-sâa",
    "meaning": "签证"
  },
  "วุค": {
    "phonetic": "wukh",
    "meaning": "吴克"
  },
  "วุง": {
    "phonetic": "wung",
    "meaning": "翁"
  },
  "วุ้น": {
    "phonetic": "wún",
    "meaning": "果冻/胶状物"
  },
  "วุ้นเส้น": {
    "phonetic": "wún-sên",
    "meaning": "粉丝"
  },
  "วู": {
    "phonetic": "wuu",
    "meaning": "呜"
  },
  "วูจิน": {
    "phonetic": "wuu-chin",
    "meaning": "宇进"
  },
  "วูดดี้": {
    "phonetic": "wuud-dii",
    "meaning": "伍迪"
  },
  "วู้": {
    "phonetic": "wuu",
    "meaning": "呜"
  },
  "วู้ด": {
    "phonetic": "wuud",
    "meaning": "木头"
  },
  "วู้ดดี้": {
    "phonetic": "wuu-d-dii",
    "meaning": "伍迪"
  },
  "วู้ว": {
    "phonetic": "wuuw",
    "meaning": "呜呼"
  },
  "วู้วว": {
    "phonetic": "wuu-ww",
    "meaning": "呜呼"
  },
  "ว่ะ": {
    "phonetic": "wa",
    "meaning": "哇"
  },
  "ว่า": {
    "phonetic": "wâa",
    "meaning": "说 / 表示 / 是否"
  },
  "ว่าการ": {
    "phonetic": "wâa-gaan",
    "meaning": "州长"
  },
  "ว่าง": {
    "phonetic": "wâang",
    "meaning": "自由的"
  },
  "ว่าทำไม": {
    "phonetic": "waa-thami",
    "meaning": "为什么"
  },
  "ว่ามั้ย": {
    "phonetic": "waa-may",
    "meaning": "你这样认为吗"
  },
  "ว่ามั๊ย": {
    "phonetic": "waa-may",
    "meaning": "你这么说吗"
  },
  "ว่ามา": {
    "phonetic": "waa-maa",
    "meaning": "说吧"
  },
  "ว่าย": {
    "phonetic": "wâai",
    "meaning": "游泳"
  },
  "ว่าแต่": {
    "phonetic": "waa-tae",
    "meaning": "但"
  },
  "ว่าแล้ว": {
    "phonetic": "waa-laew",
    "meaning": "我说过了"
  },
  "ว่าไง": {
    "phonetic": "waa-ngi",
    "meaning": "你怎么说"
  },
  "ว่าไงคะ": {
    "phonetic": "waa-ngi-kha",
    "meaning": "你怎么说"
  },
  "ว่าไงนะ": {
    "phonetic": "waa-ngi-na",
    "meaning": "你怎么说"
  },
  "ว่าไป": {
    "phonetic": "waa-pi",
    "meaning": "继续"
  },
  "ว่าไหม": {
    "phonetic": "waa-im",
    "meaning": "你这样认为吗"
  },
  "ว้า": {
    "phonetic": "waa",
    "meaning": "哇"
  },
  "ว้าย": {
    "phonetic": "waay",
    "meaning": "哇"
  },
  "ว้าว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "ว้าวว": {
    "phonetic": "waa-ww",
    "meaning": "哇"
  },
  "ว้าววว": {
    "phonetic": "waa-www",
    "meaning": "哇"
  },
  "ว๊าว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "ศพ": {
    "phonetic": "sop",
    "meaning": "尸体"
  },
  "ศรัทธา": {
    "phonetic": "sat-thaa",
    "meaning": "信仰"
  },
  "ศรีอยุธยา": {
    "phonetic": "sǐi-a-yut-tha-yaa",
    "meaning": "大城府"
  },
  "ศักดิ์": {
    "phonetic": "sàk",
    "meaning": "神"
  },
  "ศัตรู": {
    "phonetic": "satruu",
    "meaning": "敌人"
  },
  "ศิลปะ": {
    "phonetic": "sǐn-lá-bpà",
    "meaning": "艺术"
  },
  "ศิลปากร": {
    "phonetic": "sǐn-la-paa-gɔɔn",
    "meaning": "西尔帕孔"
  },
  "ศิลปิน": {
    "phonetic": "sǐn-lá-bpin",
    "meaning": "艺术家"
  },
  "ศึกษา": {
    "phonetic": "sʉ̀k-sǎa",
    "meaning": "学习"
  },
  "ศุกร์": {
    "phonetic": "suk",
    "meaning": "周五"
  },
  "ศุลกากร": {
    "phonetic": "sǔn-lá-kaa-kɔɔn",
    "meaning": "海关"
  },
  "ศูนย์": {
    "phonetic": "suuny",
    "meaning": "中心"
  },
  "ศูนย์กลาง": {
    "phonetic": "sǔun-glaang",
    "meaning": "中央"
  },
  "ษัท": {
    "phonetic": "sat",
    "meaning": "公司"
  },
  "สกปรก": {
    "phonetic": "sok-ka-prok",
    "meaning": "肮脏的"
  },
  "สกรีน": {
    "phonetic": "sa-kriin",
    "meaning": "丝网印刷/网印"
  },
  "สกรีนโลโก้": {
    "phonetic": "sa-kriin-loo-kôo",
    "meaning": "印制标志"
  },
  "สกาย": {
    "phonetic": "skaay",
    "meaning": "天空"
  },
  "สกาโว": {
    "phonetic": "skaa-wo",
    "meaning": "斯卡沃"
  },
  "สก็อต": {
    "phonetic": "skot",
    "meaning": "斯科特"
  },
  "สก็อตต์": {
    "phonetic": "skott",
    "meaning": "斯科特"
  },
  "สก๊อต": {
    "phonetic": "skot",
    "meaning": "苏格兰人"
  },
  "สคริปต์": {
    "phonetic": "sa-krip",
    "meaning": "脚本"
  },
  "สงกรานต์": {
    "phonetic": "song-graan",
    "meaning": "泼水节"
  },
  "สงคราม": {
    "phonetic": "sngkhraam",
    "meaning": "战争"
  },
  "สงบ": {
    "phonetic": "sà-ngòp",
    "meaning": "和平"
  },
  "สงสัย": {
    "phonetic": "sngsay",
    "meaning": "想知道"
  },
  "สจ๊วต": {
    "phonetic": "sa-juat",
    "meaning": "管家"
  },
  "สด": {
    "phonetic": "sot",
    "meaning": "新鲜/生鲜"
  },
  "สตรี": {
    "phonetic": "sà-dtrii",
    "meaning": "女性"
  },
  "สตาร์": {
    "phonetic": "s-taar",
    "meaning": "星星"
  },
  "สตาร์ค": {
    "phonetic": "s-taarkh",
    "meaning": "斯塔克"
  },
  "สตาร์ท": {
    "phonetic": "sa-táat",
    "meaning": "开始"
  },
  "สติ": {
    "phonetic": "sà-tì",
    "meaning": "意识"
  },
  "สติกเกอร์": {
    "phonetic": "sà-tík-kə̂ə",
    "meaning": "贴纸"
  },
  "สตีฟ": {
    "phonetic": "stiif",
    "meaning": "史蒂夫"
  },
  "สตีล": {
    "phonetic": "stiil",
    "meaning": "钢"
  },
  "สตีเฟน": {
    "phonetic": "stii-fen",
    "meaning": "史蒂芬"
  },
  "สตีเฟ่น": {
    "phonetic": "stii-fen",
    "meaning": "史蒂芬"
  },
  "สตีเวน": {
    "phonetic": "stii-wen",
    "meaning": "史蒂文"
  },
  "สตีเว่น": {
    "phonetic": "stii-wen",
    "meaning": "史蒂文"
  },
  "สตู": {
    "phonetic": "stuu",
    "meaning": "斯图"
  },
  "สถาน": {
    "phonetic": "sa-thaan",
    "meaning": "地方/场所"
  },
  "สถานการณ์": {
    "phonetic": "sa-thaa-na-gaan",
    "meaning": "情况"
  },
  "สถานที่": {
    "phonetic": "sthaan-thii",
    "meaning": "地点"
  },
  "สถานทูต": {
    "phonetic": "sà-thǎan-thûut",
    "meaning": "大使馆"
  },
  "สถานี": {
    "phonetic": "sthaanii",
    "meaning": "车站"
  },
  "สถานีรถไฟกรุงเทพ": {
    "phonetic": "sa-thaa-nii-rot-fai-grung-theep",
    "meaning": "曼谷火车站"
  },
  "สถิติ": {
    "phonetic": "sà-thì-tì",
    "meaning": "统计数据"
  },
  "สนับสนุน": {
    "phonetic": "sa-nap-sa-nuun",
    "meaning": "支持/赞助"
  },
  "สนาม": {
    "phonetic": "sà-nǎam",
    "meaning": "体育场"
  },
  "สนามบิน": {
    "phonetic": "sà-nǎam-bin",
    "meaning": "机场"
  },
  "สนิท": {
    "phonetic": "sà-nít",
    "meaning": "亲密的"
  },
  "สนุก": {
    "phonetic": "snuk",
    "meaning": "乐趣"
  },
  "สนุกดี": {
    "phonetic": "snuk-dii",
    "meaning": "很好玩"
  },
  "สนุกสนาน": {
    "phonetic": "sà-nùk-sà-nǎan",
    "meaning": "乐趣"
  },
  "สนใจ": {
    "phonetic": "sǒn-jai",
    "meaning": "感兴趣的"
  },
  "สบาย": {
    "phonetic": "sbaay",
    "meaning": "舒服的"
  },
  "สบายดี": {
    "phonetic": "sà-baai-dii",
    "meaning": "很好 / 舒服"
  },
  "สบายดีไหม": {
    "phonetic": "sà-baai-dii-mǎi",
    "meaning": "你好吗？"
  },
  "สบายมาก": {
    "phonetic": "sbaay-maak",
    "meaning": "很舒服"
  },
  "สบายๆ": {
    "phonetic": "sbaay",
    "meaning": "别紧张"
  },
  "สปีดโบ๊ท": {
    "phonetic": "sà-piit-bóot",
    "meaning": "快艇"
  },
  "สภาพ": {
    "phonetic": "sa-phaap",
    "meaning": "状况/状态"
  },
  "สม": {
    "phonetic": "sǒm",
    "meaning": "方程"
  },
  "สมชาย": {
    "phonetic": "sǒm-chaai",
    "meaning": "颂猜"
  },
  "สมัคร": {
    "phonetic": "sà-màk",
    "meaning": "申请"
  },
  "สมัย": {
    "phonetic": "sà-mǎi",
    "meaning": "时期"
  },
  "สมาคม": {
    "phonetic": "sa-maa-khom",
    "meaning": "协会"
  },
  "สมาชิก": {
    "phonetic": "sà-maa-chík",
    "meaning": "会员"
  },
  "สมิธ": {
    "phonetic": "smith",
    "meaning": "史密斯"
  },
  "สมุด": {
    "phonetic": "sà-mùt",
    "meaning": "笔记本"
  },
  "สมุนไพร": {
    "phonetic": "sà-mǔn-phrai",
    "meaning": "草本植物"
  },
  "สม่ำเสมอ": {
    "phonetic": "sa-mam-sa-moe",
    "meaning": "经常"
  },
  "สยาม": {
    "phonetic": "sa-yaam",
    "meaning": "暹罗"
  },
  "สยามพารากอน": {
    "phonetic": "sà-yǎam-phaa-raa-kɔɔn",
    "meaning": "暹罗百丽宫"
  },
  "สรรค์": {
    "phonetic": "san",
    "meaning": "有创造力的"
  },
  "สรรพ": {
    "phonetic": "sàp",
    "meaning": "全部"
  },
  "สรรพสินค้า": {
    "phonetic": "sap-pha-sin-khaa",
    "meaning": "百货/商品"
  },
  "สระ": {
    "phonetic": "sà",
    "meaning": "水池"
  },
  "สรุป": {
    "phonetic": "srup",
    "meaning": "概括"
  },
  "สร้อย": {
    "phonetic": "sɔ̂ɔy",
    "meaning": "链子/项链"
  },
  "สร้อยคอ": {
    "phonetic": "sɔ̂ɔy-khɔɔ",
    "meaning": "项链"
  },
  "สร้าง": {
    "phonetic": "saang",
    "meaning": "创造/建立"
  },
  "สร้างสรรค์": {
    "phonetic": "sâang-sǎn",
    "meaning": "创造"
  },
  "สลับ": {
    "phonetic": "sa-lap",
    "meaning": "交替/轮流"
  },
  "สว": {
    "phonetic": "saw-waaw",
    "meaning": "参议员"
  },
  "สวน": {
    "phonetic": "sǔan",
    "meaning": "花园"
  },
  "สวม": {
    "phonetic": "sǔam",
    "meaning": "穿"
  },
  "สวย": {
    "phonetic": "suay",
    "meaning": "美丽的"
  },
  "สวยงาม": {
    "phonetic": "swyngaam",
    "meaning": "美丽的"
  },
  "สวยจัง": {
    "phonetic": "swy-chang",
    "meaning": "如此美丽"
  },
  "สวยดีนะ": {
    "phonetic": "swy-dii-na",
    "meaning": "很美丽"
  },
  "สวยมาก": {
    "phonetic": "swy-maak",
    "meaning": "很漂亮"
  },
  "สวรรค์": {
    "phonetic": "sa-wan",
    "meaning": "天堂"
  },
  "สวอน": {
    "phonetic": "swon",
    "meaning": "天鹅"
  },
  "สวัดดี": {
    "phonetic": "s-wad-dii",
    "meaning": "你好"
  },
  "สวัสดิภาพ": {
    "phonetic": "sa-wat-di-phaap",
    "meaning": "福利"
  },
  "สวัสดิ์": {
    "phonetic": "sà-wàt",
    "meaning": "你好"
  },
  "สวัสดี": {
    "phonetic": "sà-wàt-dii",
    "meaning": "你好"
  },
  "สวีท": {
    "phonetic": "swiith",
    "meaning": "甜的"
  },
  "สส": {
    "phonetic": "saw-saw",
    "meaning": "国会议员"
  },
  "สหรัฐ": {
    "phonetic": "sa-ha-rat",
    "meaning": "美国"
  },
  "สหาย": {
    "phonetic": "saay",
    "meaning": "朋友们"
  },
  "สหายข้า": {
    "phonetic": "saay-khaa",
    "meaning": "我的朋友"
  },
  "สอง": {
    "phonetic": "song",
    "meaning": "二"
  },
  "สองคน": {
    "phonetic": "song-khn",
    "meaning": "两个人"
  },
  "สอน": {
    "phonetic": "sɔ̌ɔn",
    "meaning": "教/教学"
  },
  "สอบ": {
    "phonetic": "sɔ̌ɔp",
    "meaning": "考试/核对"
  },
  "สอบถาม": {
    "phonetic": "sɔ̌ɔp-thaam",
    "meaning": "询问"
  },
  "สะดวก": {
    "phonetic": "sà-duak",
    "meaning": "方便的"
  },
  "สะท้อน": {
    "phonetic": "sà-thɔ́ɔn",
    "meaning": "反映"
  },
  "สะพัด": {
    "phonetic": "sà-phát",
    "meaning": "广泛"
  },
  "สะพาน": {
    "phonetic": "sa-phaan",
    "meaning": "桥"
  },
  "สะสม": {
    "phonetic": "sa-som",
    "meaning": "积累"
  },
  "สะอาด": {
    "phonetic": "sà-àat",
    "meaning": "干净的"
  },
  "สะเต๊ะ": {
    "phonetic": "sa-te",
    "meaning": "沙爹"
  },
  "สัก": {
    "phonetic": "sak",
    "meaning": "纹身"
  },
  "สักครู่": {
    "phonetic": "sak-khruu",
    "meaning": "一会儿"
  },
  "สักวัน": {
    "phonetic": "sak-wan",
    "meaning": "有一天"
  },
  "สังคม": {
    "phonetic": "sǎng-khom",
    "meaning": "社会"
  },
  "สังเกต": {
    "phonetic": "sang-geet",
    "meaning": "注意"
  },
  "สัญญา": {
    "phonetic": "sayyaa",
    "meaning": "承诺"
  },
  "สัญญาณ": {
    "phonetic": "san-yaan",
    "meaning": "信号"
  },
  "สัญญานะ": {
    "phonetic": "sayyaa-na",
    "meaning": "承诺"
  },
  "สัญญาสิ": {
    "phonetic": "sayyaa-si",
    "meaning": "承诺"
  },
  "สัดส่วน": {
    "phonetic": "sat-sùan",
    "meaning": "部分"
  },
  "สัตว์": {
    "phonetic": "satw",
    "meaning": "动物"
  },
  "สับ": {
    "phonetic": "sap",
    "meaning": "剁/剁碎"
  },
  "สับปะรด": {
    "phonetic": "sap-bpa-rot",
    "meaning": "菠萝"
  },
  "สับปะรดภูแล": {
    "phonetic": "sap-bpa-rot-phuu-lae",
    "meaning": "小菠萝"
  },
  "สับสน": {
    "phonetic": "sabsn",
    "meaning": "使困惑"
  },
  "สัปดาห์": {
    "phonetic": "sapdaa",
    "meaning": "星期"
  },
  "สัปดาห์หน้าวันอังคารเช้า": {
    "phonetic": "sap-daa-naa-wan-ang-khaan-chaaw",
    "meaning": "下周二上午"
  },
  "สัมผัส": {
    "phonetic": "sǎm-phàt",
    "meaning": "触碰"
  },
  "สัมพันธไมตรี": {
    "phonetic": "sam-phan-tha-mai-trii",
    "meaning": "和睦"
  },
  "สัมพันธ์": {
    "phonetic": "sǎm-phan",
    "meaning": "关系"
  },
  "สัมภาระ": {
    "phonetic": "sǎm-phaa-rá",
    "meaning": "行李"
  },
  "สัมภาษณ์": {
    "phonetic": "sǎm-phâat",
    "meaning": "面试"
  },
  "สัมมนา": {
    "phonetic": "sǎm-má-naa",
    "meaning": "研讨会"
  },
  "สั่ง": {
    "phonetic": "sang",
    "meaning": "点单/点菜"
  },
  "สั้น": {
    "phonetic": "sân",
    "meaning": "短的"
  },
  "สาขา": {
    "phonetic": "sǎa-khǎa",
    "meaning": "分支"
  },
  "สาธารณะ": {
    "phonetic": "sǎa-thaa-rá-ná",
    "meaning": "民众"
  },
  "สาบาน": {
    "phonetic": "saabaan",
    "meaning": "发誓"
  },
  "สาม": {
    "phonetic": "saam",
    "meaning": "三"
  },
  "สามสิบ": {
    "phonetic": "saam-sìp",
    "meaning": "三十"
  },
  "สามัคคี": {
    "phonetic": "sǎa-mák-khii",
    "meaning": "和谐"
  },
  "สามารถ": {
    "phonetic": "saamaarth",
    "meaning": "能"
  },
  "สามี": {
    "phonetic": "saamii",
    "meaning": "丈夫"
  },
  "สามีฉัน": {
    "phonetic": "saamii-chhan",
    "meaning": "我的丈夫"
  },
  "สาย": {
    "phonetic": "saay",
    "meaning": "晚的"
  },
  "สายลับ": {
    "phonetic": "saaylab",
    "meaning": "间谍"
  },
  "สายแล้ว": {
    "phonetic": "saay-laew",
    "meaning": "现在已经晚了"
  },
  "สาร": {
    "phonetic": "sǎan",
    "meaning": "物质"
  },
  "สารวัตร": {
    "phonetic": "saarwatr",
    "meaning": "督察"
  },
  "สารเลว": {
    "phonetic": "saarlew",
    "meaning": "小子"
  },
  "สาว": {
    "phonetic": "saaw",
    "meaning": "女孩"
  },
  "สาวน้อย": {
    "phonetic": "saaw-noy",
    "meaning": "小女孩"
  },
  "สาวๆ": {
    "phonetic": "sao-sao",
    "meaning": "女孩们"
  },
  "สาเหตุ": {
    "phonetic": "sǎa-hèet",
    "meaning": "原因"
  },
  "สำคัญ": {
    "phonetic": "sam-khan",
    "meaning": "重要"
  },
  "สำนักงาน": {
    "phonetic": "sǎm-nák-ngaan",
    "meaning": "办公室"
  },
  "สำรอง": {
    "phonetic": "sǎm-rɔɔng",
    "meaning": "预订"
  },
  "สำหรับ": {
    "phonetic": "sarab",
    "meaning": "为了"
  },
  "สำเนา": {
    "phonetic": "sǎm-nao",
    "meaning": "复制"
  },
  "สำเร็จ": {
    "phonetic": "sarech",
    "meaning": "成功的"
  },
  "สิ": {
    "phonetic": "sì",
    "meaning": "(语气词) 表示促请、命令或肯定，意为“吧/呀”"
  },
  "สิงหาคม": {
    "phonetic": "singaakhm",
    "meaning": "八月"
  },
  "สิทธิ": {
    "phonetic": "sit-thi",
    "meaning": "权利"
  },
  "สิทธิ์": {
    "phonetic": "sìt",
    "meaning": "权利"
  },
  "สิน": {
    "phonetic": "sǐn",
    "meaning": "资产"
  },
  "สินค้า": {
    "phonetic": "sǐn-kháa",
    "meaning": "产品"
  },
  "สินะ": {
    "phonetic": "sina",
    "meaning": "这是正确的"
  },
  "สิบ": {
    "phonetic": "sib",
    "meaning": "十"
  },
  "สิ่ง": {
    "phonetic": "sing",
    "meaning": "事物"
  },
  "สิ่งที่": {
    "phonetic": "sing-thii",
    "meaning": "事物"
  },
  "สิ่งนี้": {
    "phonetic": "sing-nii",
    "meaning": "这件事"
  },
  "สิ้น": {
    "phonetic": "sin",
    "meaning": "结束/尽"
  },
  "สิ้นเดือนนี้ก่อนห้าโมงเย็น": {
    "phonetic": "sin-dʉan-nii-gɔɔn-haa-moong-yen",
    "meaning": "本月底五点前"
  },
  "สี": {
    "phonetic": "sii",
    "meaning": "颜色"
  },
  "สีชมพู": {
    "phonetic": "sǐi-chom-phuu",
    "meaning": "粉色的"
  },
  "สีดำ": {
    "phonetic": "siida",
    "meaning": "黑色的"
  },
  "สีน้ำเงิน": {
    "phonetic": "sǐi-nam-ngən",
    "meaning": "蓝色的"
  },
  "สีลม": {
    "phonetic": "sǐi-lom",
    "meaning": "风车"
  },
  "สีเขียว": {
    "phonetic": "sii-kheiaw",
    "meaning": "绿色的"
  },
  "สีแดง": {
    "phonetic": "sii-daeng",
    "meaning": "红色的"
  },
  "สี่": {
    "phonetic": "sii",
    "meaning": "四"
  },
  "สื่อ": {
    "phonetic": "sʉʉ",
    "meaning": "媒体"
  },
  "สื่อมวลชน": {
    "phonetic": "sue-muan-chon",
    "meaning": "媒体"
  },
  "สื่อสาร": {
    "phonetic": "sue-saan",
    "meaning": "交流"
  },
  "สื่อโฆษณาโซเชียลมีเดีย": {
    "phonetic": "sʉʉ-khoo-sa-naa-soo-chian-mii-diia",
    "meaning": "社交媒体广告"
  },
  "สุกกี้": {
    "phonetic": "suk-kii",
    "meaning": "苏琪"
  },
  "สุข": {
    "phonetic": "suk",
    "meaning": "快乐/幸福"
  },
  "สุขภาพ": {
    "phonetic": "sùk-khà-phâap",
    "meaning": "健康"
  },
  "สุขสันต์": {
    "phonetic": "sùk-sǎn",
    "meaning": "快乐的"
  },
  "สุขุมวิท": {
    "phonetic": "sù-khǔm-wít",
    "meaning": "素坤逸路"
  },
  "สุชาดา": {
    "phonetic": "su-chaa-daa",
    "meaning": "苏查达"
  },
  "สุด": {
    "phonetic": "sùt",
    "meaning": "结尾"
  },
  "สุดท้าย": {
    "phonetic": "sudthaay",
    "meaning": "最后"
  },
  "สุดยอด": {
    "phonetic": "sud-yod",
    "meaning": "惊人的"
  },
  "สุดหล่อ": {
    "phonetic": "sud-lo",
    "meaning": "很帅"
  },
  "สุดๆ": {
    "phonetic": "sud",
    "meaning": "极其"
  },
  "สุนัข": {
    "phonetic": "sù-nák",
    "meaning": "狗"
  },
  "สุภาพ": {
    "phonetic": "sù-phâap",
    "meaning": "有礼貌的"
  },
  "สุภาษิต": {
    "phonetic": "su-phaa-sìt",
    "meaning": "谚语"
  },
  "สูง": {
    "phonetic": "suung",
    "meaning": "高的"
  },
  "สูงสุด": {
    "phonetic": "sǔung-sùt",
    "meaning": "最大限度"
  },
  "สูญ": {
    "phonetic": "sǔun",
    "meaning": "失去"
  },
  "สูญญากาศ": {
    "phonetic": "sǔun-yaa-kàat",
    "meaning": "真空"
  },
  "สูญหาย": {
    "phonetic": "suun-haai",
    "meaning": "丢失/流失"
  },
  "สูตร": {
    "phonetic": "sùut",
    "meaning": "公式"
  },
  "สู่": {
    "phonetic": "sùu",
    "meaning": "到"
  },
  "สู้": {
    "phonetic": "suu",
    "meaning": "斗争"
  },
  "สู้เขา": {
    "phonetic": "suu-kheaa",
    "meaning": "与他战斗"
  },
  "สู้ๆ": {
    "phonetic": "suu-suu",
    "meaning": "斗争"
  },
  "สเตซี่": {
    "phonetic": "s-te-sii",
    "meaning": "史黛西"
  },
  "สเตฟาน": {
    "phonetic": "s-te-faan",
    "meaning": "斯特凡"
  },
  "สเปน": {
    "phonetic": "spen",
    "meaning": "西班牙"
  },
  "สเปนซ์": {
    "phonetic": "spen-s",
    "meaning": "斯彭斯"
  },
  "สแกน": {
    "phonetic": "sà-gaen",
    "meaning": "扫描"
  },
  "สแตน": {
    "phonetic": "staen",
    "meaning": "斯坦"
  },
  "สโตน": {
    "phonetic": "ston",
    "meaning": "石头"
  },
  "สโนวี่": {
    "phonetic": "s-no-wii",
    "meaning": "下雪了"
  },
  "สโนว์": {
    "phonetic": "s-now",
    "meaning": "雪"
  },
  "สโลน": {
    "phonetic": "slon",
    "meaning": "斯隆"
  },
  "สไตลส์": {
    "phonetic": "s-ti-ls",
    "meaning": "风格"
  },
  "สไตล์": {
    "phonetic": "stil",
    "meaning": "风格"
  },
  "สไลด์": {
    "phonetic": "sà-laai",
    "meaning": "滑动"
  },
  "ส่ง": {
    "phonetic": "song",
    "meaning": "发送"
  },
  "ส่งมา": {
    "phonetic": "sng-maa",
    "meaning": "发送了"
  },
  "ส่งออก": {
    "phonetic": "sòng-ɔ̀ɔk",
    "meaning": "出口"
  },
  "ส่งเสริม": {
    "phonetic": "sòng-sǒem",
    "meaning": "推广/促进"
  },
  "ส่วน": {
    "phonetic": "suan",
    "meaning": "部分"
  },
  "ส่วนตัว": {
    "phonetic": "swn-taw",
    "meaning": "个人的"
  },
  "ส่วนลด": {
    "phonetic": "sùan-lot",
    "meaning": "折扣"
  },
  "ส้ม": {
    "phonetic": "sôm",
    "meaning": "橙子"
  },
  "ส้มตำ": {
    "phonetic": "som-tam",
    "meaning": "木瓜沙拉"
  },
  "ส้มตำไทย": {
    "phonetic": "som-tam-thai",
    "meaning": "泰式木瓜沙拉"
  },
  "หก": {
    "phonetic": "hok",
    "meaning": "六"
  },
  "หญิง": {
    "phonetic": "ying",
    "meaning": "女性"
  },
  "หญิงสาว": {
    "phonetic": "ying-saaw",
    "meaning": "年轻女子"
  },
  "หนะ": {
    "phonetic": "na",
    "meaning": "哈"
  },
  "หนัก": {
    "phonetic": "nak",
    "meaning": "重的"
  },
  "หนัง": {
    "phonetic": "nang",
    "meaning": "电影"
  },
  "หนังสือ": {
    "phonetic": "nangsueo",
    "meaning": "图书"
  },
  "หนังสือเดินทาง": {
    "phonetic": "nǎng-sʉ̌ʉ-doen-thaang",
    "meaning": "护照"
  },
  "หนา": {
    "phonetic": "nǎa",
    "meaning": "厚的"
  },
  "หนาว": {
    "phonetic": "naaw",
    "meaning": "寒冷的"
  },
  "หนาวจัง": {
    "phonetic": "naaw-chang",
    "meaning": "天气太冷了"
  },
  "หนี": {
    "phonetic": "nii",
    "meaning": "逃脱"
  },
  "หนีเร็ว": {
    "phonetic": "nii-rew",
    "meaning": "奔驰"
  },
  "หนีไป": {
    "phonetic": "nii-pi",
    "meaning": "逃跑"
  },
  "หนี้": {
    "phonetic": "nîi",
    "meaning": "债务"
  },
  "หนึ่ง": {
    "phonetic": "nueng",
    "meaning": "一"
  },
  "หนุ่ม": {
    "phonetic": "num",
    "meaning": "年轻人"
  },
  "หนุ่มๆ": {
    "phonetic": "num-num",
    "meaning": "年轻人"
  },
  "หนู": {
    "phonetic": "nuu",
    "meaning": "老鼠"
  },
  "หนูน้อย": {
    "phonetic": "nuu-noy",
    "meaning": "小一个"
  },
  "หนูรู้": {
    "phonetic": "nuu-ruu",
    "meaning": "我知道"
  },
  "หนูแค่": {
    "phonetic": "nuu-khae",
    "meaning": "我只是"
  },
  "หน่วย": {
    "phonetic": "nuay",
    "meaning": "单元"
  },
  "หน่อย": {
    "phonetic": "nɔ̀i",
    "meaning": "(语气词) 请求缓和词，表示“一下/稍微/请”"
  },
  "หน่อยสิ": {
    "phonetic": "noy-si",
    "meaning": "请"
  },
  "หน้า": {
    "phonetic": "naa",
    "meaning": "页"
  },
  "หน้ากาก": {
    "phonetic": "nâa-gàak",
    "meaning": "面具"
  },
  "หน้าจอ": {
    "phonetic": "naa-chɔɔ",
    "meaning": "屏幕"
  },
  "หน้าต่าง": {
    "phonetic": "nâa-dtàang",
    "meaning": "窗户"
  },
  "หน้าที่": {
    "phonetic": "naa-thîi",
    "meaning": "职责/部门"
  },
  "หมด": {
    "phonetic": "mòt",
    "meaning": "蚂蚁"
  },
  "หมดเวลา": {
    "phonetic": "md-welaa",
    "meaning": "时间到了"
  },
  "หมดแล้ว": {
    "phonetic": "md-laew",
    "meaning": "全部消失了"
  },
  "หมวก": {
    "phonetic": "mùak",
    "meaning": "帽子"
  },
  "หมวด": {
    "phonetic": "muat",
    "meaning": "类别"
  },
  "หมอ": {
    "phonetic": "mo",
    "meaning": "医生"
  },
  "หมอน": {
    "phonetic": "mɔɔn",
    "meaning": "枕头"
  },
  "หมอนั่น": {
    "phonetic": "mo-nan",
    "meaning": "那个家伙"
  },
  "หมอนี่": {
    "phonetic": "mo-nii",
    "meaning": "这个家伙"
  },
  "หมอบ": {
    "phonetic": "mob",
    "meaning": "蹲"
  },
  "หมอบลง": {
    "phonetic": "mob-lng",
    "meaning": "蹲下"
  },
  "หมอฟัน": {
    "phonetic": "mɔ̌ɔ-fan",
    "meaning": "牙医"
  },
  "หมา": {
    "phonetic": "maa",
    "meaning": "狗"
  },
  "หมาป่า": {
    "phonetic": "maapaa",
    "meaning": "狼"
  },
  "หมาย": {
    "phonetic": "mǎai",
    "meaning": "意义"
  },
  "หมายความ": {
    "phonetic": "mǎai-khwaam",
    "meaning": "意思是"
  },
  "หมายถึง": {
    "phonetic": "maay-thueng",
    "meaning": "方法"
  },
  "หมายเลข": {
    "phonetic": "maaylekh",
    "meaning": "数字"
  },
  "หมื่น": {
    "phonetic": "muen",
    "meaning": "万"
  },
  "หมุน": {
    "phonetic": "mun",
    "meaning": "旋转"
  },
  "หมู": {
    "phonetic": "muu",
    "meaning": "猪"
  },
  "หมูกระทะ": {
    "phonetic": "mǔu-krà-thá",
    "meaning": "泰式烤肉/千人火锅"
  },
  "หมูสะเต๊ะ": {
    "phonetic": "muu-sa-te",
    "meaning": "沙爹猪肉"
  },
  "หมูสับ": {
    "phonetic": "muu-sap",
    "meaning": "猪肉末"
  },
  "หยด": {
    "phonetic": "yòt",
    "meaning": "降低"
  },
  "หยอด": {
    "phonetic": "yɔ̀ɔt",
    "meaning": "投币"
  },
  "หยาง": {
    "phonetic": "yaang",
    "meaning": "杨"
  },
  "หยาบคาย": {
    "phonetic": "yaab-khaay",
    "meaning": "粗鲁的"
  },
  "หยิบ": {
    "phonetic": "yìp",
    "meaning": "挑选"
  },
  "หยุด": {
    "phonetic": "yud",
    "meaning": "停止"
  },
  "หยุดซะ": {
    "phonetic": "yud-sa",
    "meaning": "停止吧"
  },
  "หยุดที": {
    "phonetic": "yud-thii",
    "meaning": "请停下来"
  },
  "หยุดนะ": {
    "phonetic": "yud-na",
    "meaning": "停止吧"
  },
  "หยุดน่ะ": {
    "phonetic": "yud-na",
    "meaning": "停止吧"
  },
  "หยุดพูด": {
    "phonetic": "yud-phuud",
    "meaning": "别说话了"
  },
  "หยุดมัน": {
    "phonetic": "yud-man",
    "meaning": "停止吧"
  },
  "หยุดยิง": {
    "phonetic": "yud-ying",
    "meaning": "停止射击"
  },
  "หยุดรถ": {
    "phonetic": "yud-rth",
    "meaning": "停车"
  },
  "หยุดสิ": {
    "phonetic": "yud-si",
    "meaning": "停止吧"
  },
  "หยุดเขา": {
    "phonetic": "yud-kheaa",
    "meaning": "阻止他"
  },
  "หยุดเลย": {
    "phonetic": "yud-lei",
    "meaning": "停止吧"
  },
  "หยุดๆ": {
    "phonetic": "yud",
    "meaning": "停止"
  },
  "หรอ": {
    "phonetic": "ro",
    "meaning": "所以"
  },
  "หรอก": {
    "phonetic": "rɔ̀ɔk",
    "meaning": "(语气词) 用于否定句末以缓和语气，意为“才不/并不”"
  },
  "หรอกนะ": {
    "phonetic": "rok-na",
    "meaning": "这是正确的"
  },
  "หรอคะ": {
    "phonetic": "ro-kha",
    "meaning": "真的吗"
  },
  "หรือ": {
    "phonetic": "rueo",
    "meaning": "或者"
  },
  "หรือคะ": {
    "phonetic": "rueo-kha",
    "meaning": "或者"
  },
  "หรือยัง": {
    "phonetic": "rueo-yang",
    "meaning": "或者还没有"
  },
  "หรือว่า": {
    "phonetic": "rueo-waa",
    "meaning": "或者那样"
  },
  "หรือไง": {
    "phonetic": "rueo-ngi",
    "meaning": "或者什么"
  },
  "หรือไม่": {
    "phonetic": "rueo-mi",
    "meaning": "或不"
  },
  "หรู": {
    "phonetic": "rǔu",
    "meaning": "奢华"
  },
  "หลบ": {
    "phonetic": "lop",
    "meaning": "躲闪"
  },
  "หลบไป": {
    "phonetic": "lb-pi",
    "meaning": "逃跑"
  },
  "หลวง": {
    "phonetic": "lǔang",
    "meaning": "皇家的"
  },
  "หลวงพ่อ": {
    "phonetic": "lwng-pho",
    "meaning": "父亲"
  },
  "หลอก": {
    "phonetic": "lɔ̀ɔk",
    "meaning": "诡计"
  },
  "หลอกลวง": {
    "phonetic": "lok-lwng",
    "meaning": "具有欺骗性"
  },
  "หละ": {
    "phonetic": "la",
    "meaning": "拉"
  },
  "หลัก": {
    "phonetic": "làk",
    "meaning": "主要的"
  },
  "หลักฐาน": {
    "phonetic": "lak-thaan",
    "meaning": "证据"
  },
  "หลัง": {
    "phonetic": "lang",
    "meaning": "后"
  },
  "หลังจาก": {
    "phonetic": "lang-chaak",
    "meaning": "后"
  },
  "หลับ": {
    "phonetic": "làp",
    "meaning": "睡觉"
  },
  "หลับตา": {
    "phonetic": "labtaa",
    "meaning": "闭上你的眼睛"
  },
  "หลา": {
    "phonetic": "laa",
    "meaning": "码"
  },
  "หลาก": {
    "phonetic": "làak",
    "meaning": "各种各样的"
  },
  "หลานรัก": {
    "phonetic": "laan-rak",
    "meaning": "亲爱的孙子"
  },
  "หลาย": {
    "phonetic": "laai",
    "meaning": "许多/若干"
  },
  "หลีก": {
    "phonetic": "liik",
    "meaning": "避免"
  },
  "หลีกทาง": {
    "phonetic": "liik-thaang",
    "meaning": "走开"
  },
  "หลีกไป": {
    "phonetic": "liik-pi",
    "meaning": "逃离"
  },
  "หลุด": {
    "phonetic": "lut",
    "meaning": "断线/脱落"
  },
  "หลุยส์": {
    "phonetic": "luys",
    "meaning": "路易斯"
  },
  "หล่อ": {
    "phonetic": "lɔ̀ɔ",
    "meaning": "英俊的"
  },
  "หล่อน": {
    "phonetic": "lon",
    "meaning": "她"
  },
  "หวัง": {
    "phonetic": "wang",
    "meaning": "希望"
  },
  "หวังว่า": {
    "phonetic": "wang-waa",
    "meaning": "希望"
  },
  "หวัด": {
    "phonetic": "wàt",
    "meaning": "寒冷的"
  },
  "หวัดดี": {
    "phonetic": "wad-dii",
    "meaning": "你好"
  },
  "หวา": {
    "phonetic": "waa",
    "meaning": "哇"
  },
  "หวาน": {
    "phonetic": "waan",
    "meaning": "甜的"
  },
  "หวานใจ": {
    "phonetic": "waan-chai",
    "meaning": "亲爱的"
  },
  "หอบ": {
    "phonetic": "ob",
    "meaning": "气喘吁吁"
  },
  "หอม": {
    "phonetic": "hɔ̌ɔm",
    "meaning": "闻起来很香"
  },
  "หะ": {
    "phonetic": "a",
    "meaning": "哈"
  },
  "หัตถกรรม": {
    "phonetic": "hat-tha-gam",
    "meaning": "手工业"
  },
  "หัน": {
    "phonetic": "hǎn",
    "meaning": "转动"
  },
  "หันไป": {
    "phonetic": "an-pi",
    "meaning": "回转"
  },
  "หัว": {
    "phonetic": "aw",
    "meaning": "头"
  },
  "หัวข้อ": {
    "phonetic": "hǔa-khɔ̂ɔ",
    "meaning": "部分"
  },
  "หัวหน้า": {
    "phonetic": "awnaa",
    "meaning": "老板"
  },
  "หัวเราะ": {
    "phonetic": "awreaaa",
    "meaning": "笑"
  },
  "หัวใจ": {
    "phonetic": "awchai",
    "meaning": "心"
  },
  "หา": {
    "phonetic": "aa",
    "meaning": "寻找"
  },
  "หาก": {
    "phonetic": "haak",
    "meaning": "如果/若"
  },
  "หางยาว": {
    "phonetic": "hǎang-yaaw",
    "meaning": "长尾"
  },
  "หาด": {
    "phonetic": "hàat",
    "meaning": "海滩"
  },
  "หาต่อไป": {
    "phonetic": "aa-to-pi",
    "meaning": "继续寻找"
  },
  "หาย": {
    "phonetic": "hǎai",
    "meaning": "消失"
  },
  "หายใจ": {
    "phonetic": "aaychai",
    "meaning": "呼吸"
  },
  "หายใจสิ": {
    "phonetic": "aaychai-si",
    "meaning": "呼吸"
  },
  "หายไป": {
    "phonetic": "aay-pi",
    "meaning": "消失了"
  },
  "หินปูน": {
    "phonetic": "hǐn-bpuun",
    "meaning": "牙石/石灰石"
  },
  "หิว": {
    "phonetic": "iw",
    "meaning": "饥饿的"
  },
  "หึ": {
    "phonetic": "ue",
    "meaning": "呵呵"
  },
  "หึหึ": {
    "phonetic": "uuea",
    "meaning": "呵呵"
  },
  "หืม": {
    "phonetic": "uem",
    "meaning": "嗯"
  },
  "หืมม": {
    "phonetic": "uemm",
    "meaning": "唔"
  },
  "หืมมม": {
    "phonetic": "uemmm",
    "meaning": "嗯"
  },
  "หือ": {
    "phonetic": "ueo",
    "meaning": "呵呵"
  },
  "หุบปาก": {
    "phonetic": "ubpaak",
    "meaning": "住口"
  },
  "หุ้น": {
    "phonetic": "hùn",
    "meaning": "分享"
  },
  "หู": {
    "phonetic": "hǔu",
    "meaning": "耳朵"
  },
  "ห่วยแตก": {
    "phonetic": "wy-taek",
    "meaning": "糟透了"
  },
  "ห่ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "ห่าง": {
    "phonetic": "hàang",
    "meaning": "远的"
  },
  "ห่าเอ้ย": {
    "phonetic": "aa-oe-y",
    "meaning": "哎呀"
  },
  "ห่าเอ๊ย": {
    "phonetic": "aa-oei",
    "meaning": "哎呀"
  },
  "ห้อง": {
    "phonetic": "ong",
    "meaning": "房间"
  },
  "ห้องนอน": {
    "phonetic": "ong-non",
    "meaning": "卧室"
  },
  "ห้องน้ำ": {
    "phonetic": "hɔ̂ng-náam",
    "meaning": "厕所 / 洗手间"
  },
  "ห้องเรียน": {
    "phonetic": "hɔ̂ng-rian",
    "meaning": "课堂"
  },
  "ห้อย": {
    "phonetic": "hɔ̂ɔi",
    "meaning": "悬挂"
  },
  "ห้ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "ห้า": {
    "phonetic": "aa",
    "meaning": "五"
  },
  "ห้าง": {
    "phonetic": "haang",
    "meaning": "商场"
  },
  "ห้างสรรพสินค้าไอคอนสยาม": {
    "phonetic": "haang-sap-pha-sin-khaa-ai-khɔn-sa-yaam",
    "meaning": "暹罗天地商场"
  },
  "ห้านาที": {
    "phonetic": "aa-naathii",
    "meaning": "五分钟"
  },
  "ห้าม": {
    "phonetic": "hâam",
    "meaning": "禁止"
  },
  "ห๊ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "ห๊า": {
    "phonetic": "aa",
    "meaning": "哈"
  },
  "ห๋า": {
    "phonetic": "aa",
    "meaning": "哈"
  },
  "อก": {
    "phonetic": "ok",
    "meaning": "胸"
  },
  "อง": {
    "phonetic": "ong",
    "meaning": "翁"
  },
  "องค์กร": {
    "phonetic": "ong-gɔɔn",
    "meaning": "组织"
  },
  "องค์ชาย": {
    "phonetic": "ongkh-chhaay",
    "meaning": "王子"
  },
  "องศา": {
    "phonetic": "ongsaa",
    "meaning": "度"
  },
  "อด": {
    "phonetic": "òt",
    "meaning": "饿死"
  },
  "อดทนไว้": {
    "phonetic": "odthn-wi",
    "meaning": "要有耐心"
  },
  "อดัม": {
    "phonetic": "odam",
    "meaning": "亚当"
  },
  "อดัมส์": {
    "phonetic": "odams",
    "meaning": "亚当斯"
  },
  "อดีต": {
    "phonetic": "odiit",
    "meaning": "过去"
  },
  "อนาคต": {
    "phonetic": "onaakht",
    "meaning": "未来"
  },
  "อนาคิน": {
    "phonetic": "o-naakhi-n",
    "meaning": "阿纳金"
  },
  "อนามัย": {
    "phonetic": "a-naa-mai",
    "meaning": "卫生"
  },
  "อนุญาต": {
    "phonetic": "à-nú-yâat",
    "meaning": "允许"
  },
  "อนุมัติ": {
    "phonetic": "à-nú-mát",
    "meaning": "批准"
  },
  "อนุรักษ์": {
    "phonetic": "à-nú-rák",
    "meaning": "养护"
  },
  "อบ": {
    "phonetic": "òp",
    "meaning": "烘烤的"
  },
  "อบรม": {
    "phonetic": "òp-rom",
    "meaning": "火车"
  },
  "อบิเกล": {
    "phonetic": "obi-kel",
    "meaning": "阿比盖尔"
  },
  "อพาร์ทเมนท์": {
    "phonetic": "à-phaat-meen",
    "meaning": "公寓"
  },
  "อภัย": {
    "phonetic": "a-phai",
    "meaning": "原谅"
  },
  "อม": {
    "phonetic": "om",
    "meaning": "微/含"
  },
  "อมีเลีย": {
    "phonetic": "omii-leia",
    "meaning": "阿米莉亚"
  },
  "อยาก": {
    "phonetic": "yàak",
    "meaning": "想要"
  },
  "อยากสิ": {
    "phonetic": "oyaak-si",
    "meaning": "我要它"
  },
  "อยุธยา": {
    "phonetic": "a-yut-tha-yaa",
    "meaning": "大城府"
  },
  "อยู่": {
    "phonetic": "yuu",
    "meaning": "停留"
  },
  "อยู่ดีๆ": {
    "phonetic": "oyuu-dii",
    "meaning": "突然"
  },
  "อยู่ที่": {
    "phonetic": "oyuu-thii",
    "meaning": "在"
  },
  "อยู่ที่ไหน": {
    "phonetic": "yùu-thîi-nǎi",
    "meaning": "在哪里"
  },
  "อยู่นะ": {
    "phonetic": "oyuu-na",
    "meaning": "我在这儿"
  },
  "อยู่นี่": {
    "phonetic": "oyuu-nii",
    "meaning": "这里"
  },
  "อยู่ใน": {
    "phonetic": "oyuu-nai",
    "meaning": "是在"
  },
  "อยู่ไหน": {
    "phonetic": "oyuu-in",
    "meaning": "你在哪里"
  },
  "อยู่ๆ": {
    "phonetic": "oyuu",
    "meaning": "突然"
  },
  "อย่า": {
    "phonetic": "oyaa",
    "meaning": "不"
  },
  "อย่าคิด": {
    "phonetic": "oyaa-khid",
    "meaning": "别想了"
  },
  "อย่าง": {
    "phonetic": "oyaang",
    "meaning": "样 / 种类 / 方式 / 像"
  },
  "อย่างไร": {
    "phonetic": "yàang-rai",
    "meaning": "如何 / 怎么"
  },
  "อย่าทำ": {
    "phonetic": "oyaa-tha",
    "meaning": "不要这样做"
  },
  "อย่านะ": {
    "phonetic": "oyaa-na",
    "meaning": "不"
  },
  "อย่าน่า": {
    "phonetic": "oyaa-naa",
    "meaning": "请不要"
  },
  "อย่าพูด": {
    "phonetic": "oyaa-phuud",
    "meaning": "别说话"
  },
  "อย่ามอง": {
    "phonetic": "oyaa-mong",
    "meaning": "别看"
  },
  "อย่ามา": {
    "phonetic": "oyaa-maa",
    "meaning": "别来"
  },
  "อย่ายิง": {
    "phonetic": "oyaa-ying",
    "meaning": "别开枪"
  },
  "อย่าลืม": {
    "phonetic": "oyaa-luem",
    "meaning": "别忘了"
  },
  "อย่าเลย": {
    "phonetic": "oyaa-lei",
    "meaning": "不"
  },
  "อย่าไป": {
    "phonetic": "oyaa-pi",
    "meaning": "别走"
  },
  "อย่าๆ": {
    "phonetic": "oyaa",
    "meaning": "不"
  },
  "อรุณ": {
    "phonetic": "a-run",
    "meaning": "黎明"
  },
  "อร่อย": {
    "phonetic": "à-rɔ̀i",
    "meaning": "好吃 / 美味"
  },
  "อร์": {
    "phonetic": "ɔɔ",
    "meaning": "或者"
  },
  "อลัน": {
    "phonetic": "olan",
    "meaning": "艾伦"
  },
  "อลาริค": {
    "phonetic": "o-laa-rikh",
    "meaning": "阿拉里克"
  },
  "อลิซ": {
    "phonetic": "olis",
    "meaning": "爱丽丝"
  },
  "อลิส": {
    "phonetic": "olis",
    "meaning": "爱丽丝"
  },
  "อลิสัน": {
    "phonetic": "o-li-san",
    "meaning": "艾莉森"
  },
  "อลิเซีย": {
    "phonetic": "o-li-seia",
    "meaning": "艾丽西娅"
  },
  "อวยพร": {
    "phonetic": "uay-phɔɔn",
    "meaning": "希望"
  },
  "ออ": {
    "phonetic": "oo",
    "meaning": "或者"
  },
  "ออก": {
    "phonetic": "ook",
    "meaning": "出口"
  },
  "ออกจาก": {
    "phonetic": "ook-chaak",
    "meaning": "离开"
  },
  "ออกมา": {
    "phonetic": "ook-maa",
    "meaning": "出来"
  },
  "ออกมานะ": {
    "phonetic": "ook-maana",
    "meaning": "出来"
  },
  "ออกมาสิ": {
    "phonetic": "ook-maa-si",
    "meaning": "出来"
  },
  "ออกัส": {
    "phonetic": "ooka-s",
    "meaning": "八月"
  },
  "ออกแบบ": {
    "phonetic": "ɔ̀ɔk-baep",
    "meaning": "设计"
  },
  "ออกไป": {
    "phonetic": "ook-pi",
    "meaning": "出去"
  },
  "ออกไปซะ": {
    "phonetic": "ook-pi-sa",
    "meaning": "出去"
  },
  "ออกไปนะ": {
    "phonetic": "ook-pi-na",
    "meaning": "出去"
  },
  "ออนไลน์": {
    "phonetic": "ɔɔn-laai",
    "meaning": "在线/网购"
  },
  "ออฟ": {
    "phonetic": "oof",
    "meaning": "离开"
  },
  "ออม": {
    "phonetic": "ɔɔm",
    "meaning": "保存"
  },
  "ออร์สัน": {
    "phonetic": "oor-san",
    "meaning": "奥森"
  },
  "ออลลี่": {
    "phonetic": "oo-l-lii",
    "meaning": "奥利"
  },
  "ออสการ์": {
    "phonetic": "oo-skaa-r",
    "meaning": "奥斯卡"
  },
  "ออสก้า": {
    "phonetic": "oo-skaa",
    "meaning": "奥斯卡"
  },
  "ออสติน": {
    "phonetic": "oostin",
    "meaning": "奥斯汀"
  },
  "ออเดรย์": {
    "phonetic": "oo-dery",
    "meaning": "奥黛丽"
  },
  "ออเดร์ย": {
    "phonetic": "oo-dery",
    "meaning": "奥黛丽"
  },
  "ออโรร่า": {
    "phonetic": "oo-ro-raa",
    "meaning": "极光"
  },
  "อะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "อะนะ": {
    "phonetic": "oana",
    "meaning": "啊"
  },
  "อะนี่": {
    "phonetic": "oa-nii",
    "meaning": "阿尼"
  },
  "อะแฮ่ม": {
    "phonetic": "oa-hae-m",
    "meaning": "咳咳"
  },
  "อะไร": {
    "phonetic": "à-rai",
    "meaning": "什么"
  },
  "อะไรกัน": {
    "phonetic": "oari-kan",
    "meaning": "什么"
  },
  "อะไรคะ": {
    "phonetic": "oari-kha",
    "meaning": "什么"
  },
  "อะไรคือ": {
    "phonetic": "oari-khueo",
    "meaning": "什么是"
  },
  "อะไรค่ะ": {
    "phonetic": "oari-kha",
    "meaning": "什么"
  },
  "อะไรนะ": {
    "phonetic": "oari-na",
    "meaning": "什么"
  },
  "อะไรนี่": {
    "phonetic": "oari-nii",
    "meaning": "这是什么"
  },
  "อะไรน่ะ": {
    "phonetic": "oari-na",
    "meaning": "什么"
  },
  "อะไรรึ": {
    "phonetic": "oari-rue",
    "meaning": "什么"
  },
  "อะไรละ": {
    "phonetic": "oari-la",
    "meaning": "什么"
  },
  "อะไรล่ะ": {
    "phonetic": "oari-la",
    "meaning": "什么"
  },
  "อะไรวะ": {
    "phonetic": "oari-wa",
    "meaning": "搞什么鬼"
  },
  "อะไรว่ะ": {
    "phonetic": "oari-wa",
    "meaning": "什么"
  },
  "อะไรหนะ": {
    "phonetic": "oari-na",
    "meaning": "什么"
  },
  "อะไรหรอ": {
    "phonetic": "oari-ro",
    "meaning": "它是什么"
  },
  "อะไรอะ": {
    "phonetic": "oari-oa",
    "meaning": "什么"
  },
  "อะไรอีก": {
    "phonetic": "oari-oiik",
    "meaning": "还有什么"
  },
  "อะไรอ่ะ": {
    "phonetic": "oari-oa",
    "meaning": "什么"
  },
  "อะไรๆ": {
    "phonetic": "oari",
    "meaning": "任何事物"
  },
  "อักษร": {
    "phonetic": "àk-sɔ̌ɔn",
    "meaning": "字母/文字"
  },
  "อักเสบ": {
    "phonetic": "àk-sèep",
    "meaning": "炎"
  },
  "อังกฤษ": {
    "phonetic": "ang-grit",
    "meaning": "英语"
  },
  "อังคาร": {
    "phonetic": "ang-khaan",
    "meaning": "周二"
  },
  "อัจฉริยะ": {
    "phonetic": "at-cha-ri-ya",
    "meaning": "天才"
  },
  "อัตรา": {
    "phonetic": "àt-dtraa",
    "meaning": "速度"
  },
  "อัตโนมัติ": {
    "phonetic": "àt-dtà-noo-mát",
    "meaning": "自动的"
  },
  "อัธยาศัย": {
    "phonetic": "at-tha-yaa-sǎi",
    "meaning": "好客"
  },
  "อัน": {
    "phonetic": "oan",
    "meaning": "一个"
  },
  "อันดับ": {
    "phonetic": "an-dàp",
    "meaning": "等级"
  },
  "อันตราย": {
    "phonetic": "oantraay",
    "meaning": "危险的"
  },
  "อันนั้น": {
    "phonetic": "an-nán",
    "meaning": "那个"
  },
  "อันนี้": {
    "phonetic": "an-níi",
    "meaning": "这个"
  },
  "อันโด": {
    "phonetic": "oan-do",
    "meaning": "安藤"
  },
  "อัปเดต": {
    "phonetic": "ap-det",
    "meaning": "更新"
  },
  "อัพเกรด": {
    "phonetic": "ap-greet",
    "meaning": "升级"
  },
  "อัยการ": {
    "phonetic": "oaykaar",
    "meaning": "检察官"
  },
  "อัล": {
    "phonetic": "oal",
    "meaning": "阿尔"
  },
  "อัลฟ่า": {
    "phonetic": "oalfaa",
    "meaning": "阿尔法"
  },
  "อัลลีย์": {
    "phonetic": "oal-lia",
    "meaning": "胡同"
  },
  "อัลเฟรด": {
    "phonetic": "oalfe-rd",
    "meaning": "阿尔弗雷德"
  },
  "อัลเลน": {
    "phonetic": "oal-len",
    "meaning": "艾伦"
  },
  "อั้น": {
    "phonetic": "ân",
    "meaning": "不限/无限"
  },
  "อา": {
    "phonetic": "oaa",
    "meaning": "太阳"
  },
  "อาการ": {
    "phonetic": "aa-gaan",
    "meaning": "症状"
  },
  "อากาศ": {
    "phonetic": "oaakaas",
    "meaning": "天气"
  },
  "อากาเนะ": {
    "phonetic": "oaa-kaa-nea",
    "meaning": "阿金"
  },
  "อากิระ": {
    "phonetic": "oaa-ki-ra",
    "meaning": "阿基拉"
  },
  "อาคาร": {
    "phonetic": "aa-khaan",
    "meaning": "建筑"
  },
  "อาคาริ": {
    "phonetic": "oaa-khaa-ri",
    "meaning": "阿卡里"
  },
  "อาจ": {
    "phonetic": "àat",
    "meaning": "可能"
  },
  "อาจจะ": {
    "phonetic": "oaach-cha",
    "meaning": "或许"
  },
  "อาจจะนะ": {
    "phonetic": "oaach-chana",
    "meaning": "或许"
  },
  "อาจารย์": {
    "phonetic": "oaachaary",
    "meaning": "老师"
  },
  "อาจเป็น": {
    "phonetic": "oaach-pen",
    "meaning": "可能是的"
  },
  "อาจใช่": {
    "phonetic": "oaach-chhai",
    "meaning": "也许是的"
  },
  "อาชิยะ": {
    "phonetic": "oaa-chhi-ya",
    "meaning": "芦屋"
  },
  "อาชีพ": {
    "phonetic": "aa-chîip",
    "meaning": "职业"
  },
  "อาทิตย์": {
    "phonetic": "oaathity",
    "meaning": "星期日"
  },
  "อาบน้ำ": {
    "phonetic": "oaab-na",
    "meaning": "洗个澡"
  },
  "อาบู": {
    "phonetic": "oaabuu",
    "meaning": "阿布"
  },
  "อามิ": {
    "phonetic": "oaami",
    "meaning": "阿米"
  },
  "อาย": {
    "phonetic": "oaay",
    "meaning": "尴尬的"
  },
  "อายะ": {
    "phonetic": "oaaya",
    "meaning": "绫"
  },
  "อายัด": {
    "phonetic": "aa-yát",
    "meaning": "检获"
  },
  "อายุ": {
    "phonetic": "oaayu",
    "meaning": "年龄"
  },
  "อายูมุ": {
    "phonetic": "oaa-yuu-mu",
    "meaning": "阿玉木"
  },
  "อารมณ์": {
    "phonetic": "aa-rom",
    "meaning": "情绪/脾气"
  },
  "อารยธรรม": {
    "phonetic": "aa-ra-ya-tham",
    "meaning": "文明"
  },
  "อารอน": {
    "phonetic": "oaa-ron",
    "meaning": "亚伦"
  },
  "อาราม": {
    "phonetic": "aa-raam",
    "meaning": "修道院"
  },
  "อารุช": {
    "phonetic": "oaa-ruchh",
    "meaning": "阿鲁什"
  },
  "อาร์": {
    "phonetic": "oaar",
    "meaning": "R"
  },
  "อาร์ชี่": {
    "phonetic": "oaar-chhii",
    "meaning": "阿奇"
  },
  "อาร์ตี้": {
    "phonetic": "oaartii",
    "meaning": "阿蒂"
  },
  "อาร์ทู": {
    "phonetic": "oaar-thuu",
    "meaning": "阿图"
  },
  "อาร์ลีน": {
    "phonetic": "oaar-liin",
    "meaning": "阿琳"
  },
  "อาลี": {
    "phonetic": "oaalii",
    "meaning": "阿里"
  },
  "อาวุธ": {
    "phonetic": "oaawuth",
    "meaning": "武器"
  },
  "อาศัย": {
    "phonetic": "aa-sǎi",
    "meaning": "居住"
  },
  "อาหาร": {
    "phonetic": "oaaaar",
    "meaning": "食物"
  },
  "อาห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อาฮะ": {
    "phonetic": "oaaha",
    "meaning": "啊哈"
  },
  "อาา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "อาาา": {
    "phonetic": "oaaaaaa",
    "meaning": "啊"
  },
  "อาเจียน": {
    "phonetic": "aa-jian",
    "meaning": "呕吐"
  },
  "อาเซียน": {
    "phonetic": "aa-sian",
    "meaning": "东盟"
  },
  "อาเบด": {
    "phonetic": "oaa-bed",
    "meaning": "阿贝德"
  },
  "อาเมน": {
    "phonetic": "oaamen",
    "meaning": "阿门"
  },
  "อาเรีย": {
    "phonetic": "oaa-reia",
    "meaning": "咏叹调"
  },
  "อาโซก้า": {
    "phonetic": "oaa-sok-aa",
    "meaning": "阿索卡"
  },
  "อำนาจ": {
    "phonetic": "oanaach",
    "meaning": "力量"
  },
  "อิชา": {
    "phonetic": "oichhaa",
    "meaning": "伊莎"
  },
  "อิชิดะ": {
    "phonetic": "oi-chhi-da",
    "meaning": "石田"
  },
  "อิซซี่": {
    "phonetic": "ois-sii",
    "meaning": "伊兹"
  },
  "อิซาเบล": {
    "phonetic": "oi-saa-bel",
    "meaning": "伊莎贝尔"
  },
  "อิน": {
    "phonetic": "oin",
    "meaning": "在"
  },
  "อินกริด": {
    "phonetic": "oin-krid",
    "meaning": "英格丽德"
  },
  "อินดี้": {
    "phonetic": "oin-dii",
    "meaning": "独立"
  },
  "อินเดีย": {
    "phonetic": "oindeia",
    "meaning": "印度"
  },
  "อินเทอร์เน็ต": {
    "phonetic": "in-thəə-nét",
    "meaning": "互联网"
  },
  "อิม": {
    "phonetic": "oim",
    "meaning": "我是"
  },
  "อิล": {
    "phonetic": "oil",
    "meaning": "伊尔"
  },
  "อิสรภาพ": {
    "phonetic": "ìt-sà-rà-phâap",
    "meaning": "自由"
  },
  "อิสระ": {
    "phonetic": "oisra",
    "meaning": "自由的"
  },
  "อี": {
    "phonetic": "oii",
    "meaning": "E"
  },
  "อีก": {
    "phonetic": "oiik",
    "meaning": "再次"
  },
  "อีกที": {
    "phonetic": "oiik-thii",
    "meaning": "再一次"
  },
  "อีกนิด": {
    "phonetic": "oiik-nid",
    "meaning": "再多一点"
  },
  "อีกรอบ": {
    "phonetic": "oiik-rob",
    "meaning": "再来一次"
  },
  "อีกแล้ว": {
    "phonetic": "oiik-laew",
    "meaning": "再次"
  },
  "อีชาน": {
    "phonetic": "oii-chhaan",
    "meaning": "伊坎"
  },
  "อีดงชอล": {
    "phonetic": "oii-dng-chhol",
    "meaning": "李东哲"
  },
  "อีดงอุค": {
    "phonetic": "oii-dng-oukh",
    "meaning": "李栋旭"
  },
  "อีดี้": {
    "phonetic": "oii-dii",
    "meaning": "伊迪"
  },
  "อีธาน": {
    "phonetic": "oii-thaan",
    "meaning": "伊森"
  },
  "อีฟ": {
    "phonetic": "oiif",
    "meaning": "前夕"
  },
  "อีฟวา": {
    "phonetic": "oiif-waa",
    "meaning": "前夕"
  },
  "อีริค": {
    "phonetic": "oii-rikh",
    "meaning": "埃里克"
  },
  "อีวา": {
    "phonetic": "oiiwaa",
    "meaning": "伊娃"
  },
  "อีวาน": {
    "phonetic": "oii-waan",
    "meaning": "伊万"
  },
  "อีสาน": {
    "phonetic": "ii-sǎan",
    "meaning": "东北"
  },
  "อีหนู": {
    "phonetic": "oii-nuu",
    "meaning": "电子不"
  },
  "อีเดน": {
    "phonetic": "oii-den",
    "meaning": "伊甸园"
  },
  "อีเมล": {
    "phonetic": "ii-mel",
    "meaning": "邮件"
  },
  "อีแวน": {
    "phonetic": "oii-waen",
    "meaning": "埃文"
  },
  "อีไล": {
    "phonetic": "oiili",
    "meaning": "伊莱"
  },
  "อี๋": {
    "phonetic": "oii",
    "meaning": "呃"
  },
  "อึ": {
    "phonetic": "oue",
    "meaning": "拉屎"
  },
  "อึน": {
    "phonetic": "ouen",
    "meaning": "恩"
  },
  "อึนซอง": {
    "phonetic": "ouen-song",
    "meaning": "恩成"
  },
  "อึนยอง": {
    "phonetic": "ouen-yong",
    "meaning": "恩英"
  },
  "อึม": {
    "phonetic": "ouem",
    "meaning": "嗯"
  },
  "อืม": {
    "phonetic": "ouem",
    "meaning": "唔"
  },
  "อืมม": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "อืมมม": {
    "phonetic": "ouemmm",
    "meaning": "嗯嗯"
  },
  "อืมมมม": {
    "phonetic": "ouemmmm",
    "meaning": "嗯嗯"
  },
  "อืมม์": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "อืมฮึ": {
    "phonetic": "ouem-hue",
    "meaning": "唔"
  },
  "อืมใช่": {
    "phonetic": "ouem-chhai",
    "meaning": "嗯是的"
  },
  "อืมๆ": {
    "phonetic": "ouem",
    "meaning": "唔"
  },
  "อือ": {
    "phonetic": "oueo",
    "meaning": "是的"
  },
  "อือม์": {
    "phonetic": "oueo-m",
    "meaning": "嗯"
  },
  "อือฮึ": {
    "phonetic": "oueo-hue",
    "meaning": "啊"
  },
  "อื่น": {
    "phonetic": "ouen",
    "meaning": "其他"
  },
  "อื่ม": {
    "phonetic": "ouem",
    "meaning": "唔"
  },
  "อื้ม": {
    "phonetic": "ouem",
    "meaning": "嗯"
  },
  "อื้มม": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "อื้อ": {
    "phonetic": "oueo",
    "meaning": "呃"
  },
  "อุค": {
    "phonetic": "oukh",
    "meaning": "英国"
  },
  "อุณหภูมิ": {
    "phonetic": "un-hà-phuum",
    "meaning": "温度"
  },
  "อุตสาหกรรม": {
    "phonetic": "ut-saa-ha-gam",
    "meaning": "工业/行业"
  },
  "อุปกรณ์": {
    "phonetic": "ù-bpà-gɔɔn",
    "meaning": "设备"
  },
  "อุปสรรค": {
    "phonetic": "up-bpa-sak",
    "meaning": "障碍/阻碍"
  },
  "อุโมงค์": {
    "phonetic": "u-moong",
    "meaning": "隧道"
  },
  "อุ่น": {
    "phonetic": "ùn",
    "meaning": "温"
  },
  "อุ้ย": {
    "phonetic": "ouy",
    "meaning": "哎哟"
  },
  "อุ๊บ": {
    "phonetic": "oub",
    "meaning": "哎呀"
  },
  "อุ๊บส์": {
    "phonetic": "oubs",
    "meaning": "哎呀"
  },
  "อุ๊ย": {
    "phonetic": "ouy",
    "meaning": "哎哟"
  },
  "อุ๊ยตาย": {
    "phonetic": "ouy-taay",
    "meaning": "哎哟"
  },
  "อู": {
    "phonetic": "ouu",
    "meaning": "哦"
  },
  "อูย": {
    "phonetic": "ouuy",
    "meaning": "哎呀"
  },
  "อู้": {
    "phonetic": "ouu",
    "meaning": "哦"
  },
  "อู้ว": {
    "phonetic": "ouuw",
    "meaning": "哦"
  },
  "อู้วว": {
    "phonetic": "ouu-ww",
    "meaning": "哦"
  },
  "อู้ววว": {
    "phonetic": "ouu-www",
    "meaning": "哦"
  },
  "อเมริกา": {
    "phonetic": "omerikaa",
    "meaning": "美国"
  },
  "อเล็ก": {
    "phonetic": "o-lek",
    "meaning": "亚历克"
  },
  "อเล็กซ์": {
    "phonetic": "o-lek-s",
    "meaning": "亚历克斯"
  },
  "อแมนด้า": {
    "phonetic": "o-maen-daa",
    "meaning": "阿曼达"
  },
  "อ่อ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "อ่อน": {
    "phonetic": "ɔ̀ɔn",
    "meaning": "虚弱的"
  },
  "อ่อนแอ": {
    "phonetic": "oonoae",
    "meaning": "虚弱的"
  },
  "อ่อนๆ": {
    "phonetic": "ɔ̀ɔn-ɔ̀ɔn",
    "meaning": "温和的"
  },
  "อ่อใช่": {
    "phonetic": "oo-chhai",
    "meaning": "哦是的"
  },
  "อ่ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "อ่ะนะ": {
    "phonetic": "oa-na",
    "meaning": "啊"
  },
  "อ่ะนี่": {
    "phonetic": "oa-nii",
    "meaning": "啊在这里"
  },
  "อ่า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อ่าน": {
    "phonetic": "àan",
    "meaning": "读"
  },
  "อ่าว": {
    "phonetic": "oaaw",
    "meaning": "湾"
  },
  "อ่าห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อ่าฮะ": {
    "phonetic": "oaa-ha",
    "meaning": "啊哈"
  },
  "อ่าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "อ่าาา": {
    "phonetic": "oaa-aaaa",
    "meaning": "啊"
  },
  "อ่าใช่": {
    "phonetic": "oaa-chhai",
    "meaning": "啊是的"
  },
  "อ้วน": {
    "phonetic": "own",
    "meaning": "胖的"
  },
  "อ้อ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "อ้อย": {
    "phonetic": "ɔ̂ɔy",
    "meaning": "甘蔗"
  },
  "อ้อเหรอ": {
    "phonetic": "oo-e-ro",
    "meaning": "哦对吧"
  },
  "อ้อใช่": {
    "phonetic": "oo-chhai",
    "meaning": "哦是的"
  },
  "อ้ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "อ้า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อ้าก": {
    "phonetic": "oaak",
    "meaning": "啊"
  },
  "อ้าปาก": {
    "phonetic": "oaa-paak",
    "meaning": "张开嘴"
  },
  "อ้าว": {
    "phonetic": "oaaw",
    "meaning": "哦"
  },
  "อ้าห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อ้าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "อ้าาา": {
    "phonetic": "oaa-aaaa",
    "meaning": "啊哈"
  },
  "อ๊ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "อ๊า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "อ๊าก": {
    "phonetic": "oaak",
    "meaning": "啊"
  },
  "อ๊าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "อ๊าาา": {
    "phonetic": "oaaaaaa",
    "meaning": "啊"
  },
  "อ๋อ": {
    "phonetic": "oo",
    "meaning": "是的"
  },
  "อ๋อเหรอ": {
    "phonetic": "oo-e-ro",
    "meaning": "哦对吧"
  },
  "อ๋อใช่": {
    "phonetic": "oo-chhai",
    "meaning": "哦是的"
  },
  "อ๋า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "ฮง": {
    "phonetic": "hong",
    "meaning": "洪"
  },
  "ฮยอกจู": {
    "phonetic": "h-yok-chuu",
    "meaning": "赫州"
  },
  "ฮยอง": {
    "phonetic": "hyong",
    "meaning": "亨"
  },
  "ฮยองนิม": {
    "phonetic": "h-yong-nim",
    "meaning": "亨宁"
  },
  "ฮยอน": {
    "phonetic": "hyon",
    "meaning": "炫"
  },
  "ฮวัง": {
    "phonetic": "hwang",
    "meaning": "黄"
  },
  "ฮวา": {
    "phonetic": "hwaa",
    "meaning": "哇"
  },
  "ฮวาง": {
    "phonetic": "hwaang",
    "meaning": "黄"
  },
  "ฮอง": {
    "phonetic": "hong",
    "meaning": "洪"
  },
  "ฮอดจ์": {
    "phonetic": "hod-ch",
    "meaning": "霍奇"
  },
  "ฮอตช์": {
    "phonetic": "hot-chh",
    "meaning": "霍奇"
  },
  "ฮอทช์": {
    "phonetic": "hothchh",
    "meaning": "霍奇"
  },
  "ฮอบส์": {
    "phonetic": "h-obs",
    "meaning": "霍布斯"
  },
  "ฮอย": {
    "phonetic": "hoy",
    "meaning": "嘿"
  },
  "ฮอยท์": {
    "phonetic": "hoyth",
    "meaning": "霍伊特"
  },
  "ฮอลลี": {
    "phonetic": "hol-lii",
    "meaning": "冬青"
  },
  "ฮอลลี่": {
    "phonetic": "hol-lii",
    "meaning": "冬青"
  },
  "ฮะ": {
    "phonetic": "ha",
    "meaning": "哈"
  },
  "ฮัด": {
    "phonetic": "had",
    "meaning": "平视显示器"
  },
  "ฮัดสัน": {
    "phonetic": "had-san",
    "meaning": "哈德森"
  },
  "ฮัตโตริ": {
    "phonetic": "hat-to-ri",
    "meaning": "服部"
  },
  "ฮัท": {
    "phonetic": "hath",
    "meaning": "小屋"
  },
  "ฮัน": {
    "phonetic": "han",
    "meaning": "韩"
  },
  "ฮันท์": {
    "phonetic": "hanth",
    "meaning": "打猎"
  },
  "ฮันนี่": {
    "phonetic": "han-nii",
    "meaning": "蜂蜜"
  },
  "ฮันน่า": {
    "phonetic": "han-naa",
    "meaning": "汉娜"
  },
  "ฮัมเมล": {
    "phonetic": "ham-mel",
    "meaning": "胡梅尔"
  },
  "ฮัลโล": {
    "phonetic": "hallo",
    "meaning": "你好"
  },
  "ฮัลโหล": {
    "phonetic": "hal-ol",
    "meaning": "你好"
  },
  "ฮา": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "ฮาชิ": {
    "phonetic": "haachhi",
    "meaning": "八"
  },
  "ฮาน": {
    "phonetic": "haan",
    "meaning": "韩"
  },
  "ฮานน่า": {
    "phonetic": "haa-n-naa",
    "meaning": "汉娜"
  },
  "ฮานะ": {
    "phonetic": "haana",
    "meaning": "哈娜"
  },
  "ฮารุ": {
    "phonetic": "haaru",
    "meaning": "哈鲁"
  },
  "ฮารุกะ": {
    "phonetic": "haa-ru-ka",
    "meaning": "遥"
  },
  "ฮารุฮิ": {
    "phonetic": "haa-ru-hi",
    "meaning": "春日"
  },
  "ฮาร์ดดิสก์": {
    "phonetic": "haat-dis",
    "meaning": "硬盘"
  },
  "ฮาร์ดดิสก์เสีย": {
    "phonetic": "haat-disk-siia",
    "meaning": "硬盘故障"
  },
  "ฮาร์มอน": {
    "phonetic": "haar-mon",
    "meaning": "哈蒙"
  },
  "ฮาร์วี่": {
    "phonetic": "haar-wii",
    "meaning": "哈维"
  },
  "ฮาล": {
    "phonetic": "haal",
    "meaning": "哈尔"
  },
  "ฮาวี่": {
    "phonetic": "haa-wii",
    "meaning": "豪伊"
  },
  "ฮาโรลด์": {
    "phonetic": "haa-ro-ld",
    "meaning": "哈罗德"
  },
  "ฮาโหล": {
    "phonetic": "haa-ol",
    "meaning": "你好"
  },
  "ฮิ": {
    "phonetic": "hi",
    "meaning": "嘻"
  },
  "ฮิคคัพ": {
    "phonetic": "hi-khkhaph",
    "meaning": "打嗝"
  },
  "ฮิล": {
    "phonetic": "hil",
    "meaning": "爬坡道"
  },
  "ฮิลล์": {
    "phonetic": "hi-ll",
    "meaning": "爬坡道"
  },
  "ฮิวจ์": {
    "phonetic": "hi-wch",
    "meaning": "休"
  },
  "ฮิวส์": {
    "phonetic": "hi-ws",
    "meaning": "休斯"
  },
  "ฮิโรชิ": {
    "phonetic": "hi-ro-chhi",
    "meaning": "宏"
  },
  "ฮิโระ": {
    "phonetic": "hi-roa",
    "meaning": "宏"
  },
  "ฮิโร่": {
    "phonetic": "hi-ro",
    "meaning": "宏"
  },
  "ฮี": {
    "phonetic": "hii",
    "meaning": "嘻"
  },
  "ฮีซู": {
    "phonetic": "hiisuu",
    "meaning": "熙秀"
  },
  "ฮีโร่": {
    "phonetic": "hiiro",
    "meaning": "英雄"
  },
  "ฮึ": {
    "phonetic": "hue",
    "meaning": "啊"
  },
  "ฮึ่ม": {
    "phonetic": "huem",
    "meaning": "哼"
  },
  "ฮืม": {
    "phonetic": "huem",
    "meaning": "唔"
  },
  "ฮืมม": {
    "phonetic": "huemm",
    "meaning": "唔"
  },
  "ฮืมมม": {
    "phonetic": "huemmm",
    "meaning": "唔"
  },
  "ฮือ": {
    "phonetic": "hueo",
    "meaning": "呵呵"
  },
  "ฮื่อ": {
    "phonetic": "hueo",
    "meaning": "呵呵"
  },
  "ฮุน": {
    "phonetic": "hun",
    "meaning": "匈奴"
  },
  "ฮุนซู": {
    "phonetic": "hun-suu",
    "meaning": "贤秀"
  },
  "ฮุสตัน": {
    "phonetic": "hus-tan",
    "meaning": "休斯顿"
  },
  "ฮู": {
    "phonetic": "huu",
    "meaning": "胡"
  },
  "ฮู้": {
    "phonetic": "huu",
    "meaning": "呼"
  },
  "ฮโยริ": {
    "phonetic": "h-yo-ri",
    "meaning": "孝利"
  },
  "ฮ่ะ": {
    "phonetic": "ha",
    "meaning": "哈"
  },
  "ฮ่า": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "ฮ่าฮ่า": {
    "phonetic": "haa-haa",
    "meaning": "哈哈"
  },
  "ฮ่าๆ": {
    "phonetic": "haa-haa",
    "meaning": "哈哈"
  },
  "ฮ่าๆๆ": {
    "phonetic": "haa-haa-",
    "meaning": "哈哈哈"
  },
  "ฮ่าๆๆๆ": {
    "phonetic": "haa-haa-",
    "meaning": "哈哈哈"
  },
  "ฮ้า": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "ะฐ": {
    "phonetic": "ath",
    "meaning": "啊"
  },
  "ะฐั": {
    "phonetic": "atha",
    "meaning": "那"
  },
  "ะต": {
    "phonetic": "at",
    "meaning": "TT"
  },
  "ะตั": {
    "phonetic": "ata",
    "meaning": "那个"
  },
  "ะพ": {
    "phonetic": "aph",
    "meaning": "医院"
  },
  "ะพั": {
    "phonetic": "apha",
    "meaning": "美联社"
  },
  "เก": {
    "phonetic": "gee",
    "meaning": "关于"
  },
  "เกตส์": {
    "phonetic": "kets",
    "meaning": "盖茨"
  },
  "เกม": {
    "phonetic": "kem",
    "meaning": "游戏"
  },
  "เกมส์": {
    "phonetic": "kems",
    "meaning": "游戏"
  },
  "เกย์": {
    "phonetic": "kei",
    "meaning": "同性恋"
  },
  "เกรก": {
    "phonetic": "kerk",
    "meaning": "格雷格"
  },
  "เกรซ": {
    "phonetic": "kers",
    "meaning": "优雅"
  },
  "เกรต้า": {
    "phonetic": "ke-rtaa",
    "meaning": "格蕾塔"
  },
  "เกรย์": {
    "phonetic": "ke-ry",
    "meaning": "灰色的"
  },
  "เกรแฮม": {
    "phonetic": "ker-haem",
    "meaning": "格雷厄姆"
  },
  "เกร็ก": {
    "phonetic": "ke-rk",
    "meaning": "格雷格"
  },
  "เกล": {
    "phonetic": "kel",
    "meaning": "盖尔"
  },
  "เกลน": {
    "phonetic": "keln",
    "meaning": "格伦"
  },
  "เกลียด": {
    "phonetic": "keliad",
    "meaning": "恨"
  },
  "เกลือ": {
    "phonetic": "kelueo",
    "meaning": "盐"
  },
  "เกล็น": {
    "phonetic": "ke-ln",
    "meaning": "格伦"
  },
  "เกวน": {
    "phonetic": "kewn",
    "meaning": "格温"
  },
  "เกว็น": {
    "phonetic": "kewn",
    "meaning": "格温"
  },
  "เกษตร": {
    "phonetic": "ga-sèet",
    "meaning": "农业"
  },
  "เกษตรกร": {
    "phonetic": "gà-sèet-dtra-gɔɔn",
    "meaning": "农民"
  },
  "เกษียณ": {
    "phonetic": "ga-sǐan",
    "meaning": "退休"
  },
  "เกอร์": {
    "phonetic": "gəə",
    "meaning": "蒙古包"
  },
  "เกาะ": {
    "phonetic": "gɔ̀",
    "meaning": "岛"
  },
  "เกาะไว้": {
    "phonetic": "keaaa-wi",
    "meaning": "坚持稍等"
  },
  "เกิด": {
    "phonetic": "keid",
    "meaning": "出生了"
  },
  "เกิน": {
    "phonetic": "kein",
    "meaning": "超过"
  },
  "เกินไป": {
    "phonetic": "gəən-bpai",
    "meaning": "太 / 过分"
  },
  "เกิร์ล": {
    "phonetic": "keirl",
    "meaning": "女孩"
  },
  "เกียรติ": {
    "phonetic": "giat",
    "meaning": "荣誉"
  },
  "เกียร์": {
    "phonetic": "keiar",
    "meaning": "齿轮"
  },
  "เกี่ยว": {
    "phonetic": "gìaw",
    "meaning": "有关的"
  },
  "เกือบ": {
    "phonetic": "kueaob",
    "meaning": "几乎"
  },
  "เกือบจะ": {
    "phonetic": "kueaob-cha",
    "meaning": "几乎"
  },
  "เก็บ": {
    "phonetic": "gep",
    "meaning": "收集/储存"
  },
  "เก่งมาก": {
    "phonetic": "keng-maak",
    "meaning": "非常好"
  },
  "เก่า": {
    "phonetic": "gào",
    "meaning": "老的"
  },
  "เก้า": {
    "phonetic": "keaa",
    "meaning": "九"
  },
  "เก้าอี้": {
    "phonetic": "gâo-îi",
    "meaning": "椅子"
  },
  "เขต": {
    "phonetic": "khet",
    "meaning": "区"
  },
  "เขา": {
    "phonetic": "khǎo",
    "meaning": "他 / 她 / 他们"
  },
  "เขียน": {
    "phonetic": "khǐan",
    "meaning": "写"
  },
  "เขียว": {
    "phonetic": "khiao",
    "meaning": "绿色"
  },
  "เข็น": {
    "phonetic": "khěn",
    "meaning": "大车"
  },
  "เข็มขัด": {
    "phonetic": "kěm-khàt",
    "meaning": "腰带/皮带"
  },
  "เข้ม": {
    "phonetic": "khêm",
    "meaning": "密集的"
  },
  "เข้า": {
    "phonetic": "kheaa",
    "meaning": "进入"
  },
  "เข้ามา": {
    "phonetic": "kheaa-maa",
    "meaning": "进来吧"
  },
  "เข้าใจ": {
    "phonetic": "khâo-jai",
    "meaning": "明白 / 理解"
  },
  "เข้าใจ๊": {
    "phonetic": "kheaa-chai",
    "meaning": "我明白"
  },
  "เข้าใจ๋": {
    "phonetic": "kheaa-chai",
    "meaning": "我明白"
  },
  "เข้าไป": {
    "phonetic": "kheaapi",
    "meaning": "进去吧"
  },
  "เค": {
    "phonetic": "khe",
    "meaning": "K"
  },
  "เคจ": {
    "phonetic": "khech",
    "meaning": "笼"
  },
  "เคซีย์": {
    "phonetic": "khe-sia",
    "meaning": "凯西"
  },
  "เคซี่": {
    "phonetic": "khe-sii",
    "meaning": "凯西"
  },
  "เคซี่ย์": {
    "phonetic": "khe-sii-y",
    "meaning": "凯西"
  },
  "เคท": {
    "phonetic": "kheth",
    "meaning": "凯特"
  },
  "เคที่": {
    "phonetic": "khe-thii",
    "meaning": "凯蒂"
  },
  "เคธี่": {
    "phonetic": "khethii",
    "meaning": "凯蒂"
  },
  "เคน": {
    "phonetic": "khen",
    "meaning": "肯"
  },
  "เคนจิ": {
    "phonetic": "khen-chi",
    "meaning": "健二"
  },
  "เคนซี่": {
    "phonetic": "khen-sii",
    "meaning": "肯西"
  },
  "เคนซ์": {
    "phonetic": "khen-s",
    "meaning": "肯兹"
  },
  "เคนตะ": {
    "phonetic": "khen-ta",
    "meaning": "健太"
  },
  "เคนนี่": {
    "phonetic": "khen-nii",
    "meaning": "肯尼"
  },
  "เคนเสะ": {
    "phonetic": "khen-sea",
    "meaning": "肯西"
  },
  "เคนโซ": {
    "phonetic": "khen-so",
    "meaning": "贤三"
  },
  "เคฟ": {
    "phonetic": "khef",
    "meaning": "凯夫"
  },
  "เคมี": {
    "phonetic": "khee-mii",
    "meaning": "化学"
  },
  "เคย": {
    "phonetic": "khei",
    "meaning": "曾经"
  },
  "เคยสิ": {
    "phonetic": "khei-si",
    "meaning": "我以前也是这样"
  },
  "เคยเป็น": {
    "phonetic": "khei-pen",
    "meaning": "曾经是"
  },
  "เคย์": {
    "phonetic": "khei",
    "meaning": "凯"
  },
  "เคย์ซี่": {
    "phonetic": "khei-sii",
    "meaning": "凯西"
  },
  "เครดิต": {
    "phonetic": "khree-dít",
    "meaning": "信用"
  },
  "เครน": {
    "phonetic": "khern",
    "meaning": "起重机"
  },
  "เครือ": {
    "phonetic": "khrʉa",
    "meaning": "网络"
  },
  "เครือข่าย": {
    "phonetic": "khrʉa-khàai",
    "meaning": "网络"
  },
  "เครื่อง": {
    "phonetic": "kherueong",
    "meaning": "机器"
  },
  "เครื่องดื่ม": {
    "phonetic": "khrʉ̂ang-dʉ̀ʉm",
    "meaning": "饮料"
  },
  "เครื่องประดับ": {
    "phonetic": "khrʉ̂aŋ-prà-dàp",
    "meaning": "首饰/装饰品"
  },
  "เครื่องยนต์": {
    "phonetic": "khrʉ̂ang-yon",
    "meaning": "引擎"
  },
  "เคลย์": {
    "phonetic": "khely",
    "meaning": "黏土"
  },
  "เคลลี่": {
    "phonetic": "khel-lii",
    "meaning": "凯莉"
  },
  "เคลวิน": {
    "phonetic": "khel-win",
    "meaning": "开尔文"
  },
  "เคลียร์": {
    "phonetic": "khlia",
    "meaning": "清除"
  },
  "เคลื่อน": {
    "phonetic": "khlʉ̂an",
    "meaning": "移动"
  },
  "เคล้าส์": {
    "phonetic": "khelaa-s",
    "meaning": "克劳斯"
  },
  "เควนติน": {
    "phonetic": "khe-wn-tin",
    "meaning": "昆汀"
  },
  "เควิน": {
    "phonetic": "khe-win",
    "meaning": "凯文"
  },
  "เคสซี่": {
    "phonetic": "khes-sii",
    "meaning": "凯西"
  },
  "เคสึเกะ": {
    "phonetic": "khesue-kea",
    "meaning": "圭介"
  },
  "เคาน์เตอร์": {
    "phonetic": "kháo-dtə̂ə",
    "meaning": "柜台"
  },
  "เคารพ": {
    "phonetic": "khao-róp",
    "meaning": "尊重"
  },
  "เคิร์ท": {
    "phonetic": "kheirth",
    "meaning": "库尔特"
  },
  "เคียง": {
    "phonetic": "khiang",
    "meaning": "并排"
  },
  "เคียวเฮ": {
    "phonetic": "kheiaw-he",
    "meaning": "恭平"
  },
  "เคี้ยว": {
    "phonetic": "khíaw",
    "meaning": "嚼"
  },
  "เคเบิล": {
    "phonetic": "khee-bən",
    "meaning": "电缆"
  },
  "เคเลบ": {
    "phonetic": "kheleb",
    "meaning": "迦勒"
  },
  "เคเล็บ": {
    "phonetic": "khe-leb",
    "meaning": "迦勒"
  },
  "เคโต้": {
    "phonetic": "khe-to",
    "meaning": "酮"
  },
  "เค็ม": {
    "phonetic": "khem",
    "meaning": "咸"
  },
  "เค้ก": {
    "phonetic": "khek",
    "meaning": "蛋糕"
  },
  "เค้า": {
    "phonetic": "kheaa",
    "meaning": "他"
  },
  "เงาะ": {
    "phonetic": "ngɔ́",
    "meaning": "红毛丹"
  },
  "เงาะโรงเรียน": {
    "phonetic": "ngɔ́-roong-rian",
    "meaning": "红毛丹"
  },
  "เงิน": {
    "phonetic": "ngein",
    "meaning": "钱"
  },
  "เงินสด": {
    "phonetic": "ngeinsd",
    "meaning": "现金"
  },
  "เงียบ": {
    "phonetic": "ngiap",
    "meaning": "安静的"
  },
  "เงียบซะ": {
    "phonetic": "ngiap-sa",
    "meaning": "安静"
  },
  "เงียบนะ": {
    "phonetic": "ngiap-na",
    "meaning": "安静"
  },
  "เงียบๆ": {
    "phonetic": "ngiap",
    "meaning": "静静地"
  },
  "เงื่อนไข": {
    "phonetic": "nguean-khai",
    "meaning": "状况"
  },
  "เจ": {
    "phonetic": "che",
    "meaning": "J"
  },
  "เจค": {
    "phonetic": "chekh",
    "meaning": "杰克"
  },
  "เจคอบ": {
    "phonetic": "che-khob",
    "meaning": "雅各布"
  },
  "เจค็อบ": {
    "phonetic": "che-kh-ob",
    "meaning": "雅各布"
  },
  "เจซ": {
    "phonetic": "ches",
    "meaning": "杰西"
  },
  "เจดีย์": {
    "phonetic": "jee-dii",
    "meaning": "宝塔"
  },
  "เจที": {
    "phonetic": "chethii",
    "meaning": "JT"
  },
  "เจน": {
    "phonetic": "chen",
    "meaning": "简"
  },
  "เจนนี่": {
    "phonetic": "chen-nii",
    "meaning": "珍妮"
  },
  "เจนน่า": {
    "phonetic": "chen-naa",
    "meaning": "珍娜"
  },
  "เจนิส": {
    "phonetic": "che-nis",
    "meaning": "贾尼斯"
  },
  "เจฟ": {
    "phonetic": "chef",
    "meaning": "杰夫"
  },
  "เจฟฟรี่": {
    "phonetic": "chef-frii",
    "meaning": "杰弗里"
  },
  "เจฟฟ์": {
    "phonetic": "cheff",
    "meaning": "杰夫"
  },
  "เจมม่า": {
    "phonetic": "chem-maa",
    "meaning": "芽"
  },
  "เจมส์": {
    "phonetic": "chems",
    "meaning": "詹姆斯"
  },
  "เจมี่": {
    "phonetic": "che-mii",
    "meaning": "杰米"
  },
  "เจย์": {
    "phonetic": "chei",
    "meaning": "杰伊"
  },
  "เจรจา": {
    "phonetic": "jee-rá-jaa",
    "meaning": "谈判"
  },
  "เจริญ": {
    "phonetic": "ja-roen",
    "meaning": "生长"
  },
  "เจส": {
    "phonetic": "ches",
    "meaning": "杰西"
  },
  "เจสซี่": {
    "phonetic": "ches-sii",
    "meaning": "杰西"
  },
  "เจสัน": {
    "phonetic": "che-san",
    "meaning": "杰森"
  },
  "เจอ": {
    "phonetic": "cheo",
    "meaning": "成立"
  },
  "เจอกัน": {
    "phonetic": "cheo-kan",
    "meaning": "再见"
  },
  "เจอรี่": {
    "phonetic": "cheo-rii",
    "meaning": "杰瑞"
  },
  "เจอร์": {
    "phonetic": "cheor",
    "meaning": "杰尔"
  },
  "เจอแล้ว": {
    "phonetic": "cheo-laew",
    "meaning": "找到了"
  },
  "เจาะ": {
    "phonetic": "jɔ̀",
    "meaning": "钻头"
  },
  "เจิดจ้า": {
    "phonetic": "cheid-chaa",
    "meaning": "明亮的"
  },
  "เจเจ": {
    "phonetic": "cheche",
    "meaning": "杰杰"
  },
  "เจเน็ต": {
    "phonetic": "che-net",
    "meaning": "珍妮特"
  },
  "เจเรมี่": {
    "phonetic": "che-re-mii",
    "meaning": "杰里米"
  },
  "เจได": {
    "phonetic": "chedi",
    "meaning": "绝地武士"
  },
  "เจ็ด": {
    "phonetic": "ched",
    "meaning": "七"
  },
  "เจ็ทสกี": {
    "phonetic": "cèt-sà-kii",
    "meaning": "水上摩托/摩托艇"
  },
  "เจ็บ": {
    "phonetic": "cheb",
    "meaning": "好痛"
  },
  "เจ็บจัง": {
    "phonetic": "cheb-chang",
    "meaning": "太疼了"
  },
  "เจ็บนะ": {
    "phonetic": "cheb-na",
    "meaning": "好痛"
  },
  "เจ็บปวด": {
    "phonetic": "cheb-pwd",
    "meaning": "痛苦"
  },
  "เจ้า": {
    "phonetic": "cheaa",
    "meaning": "你"
  },
  "เจ้าของ": {
    "phonetic": "jâo-khɔ̌ɔng",
    "meaning": "老板/主人"
  },
  "เจ้าค่ะ": {
    "phonetic": "cheaakha",
    "meaning": "你"
  },
  "เจ้าชาย": {
    "phonetic": "cheaa-chhaay",
    "meaning": "王子"
  },
  "เจ้านาย": {
    "phonetic": "cheaa-naay",
    "meaning": "老板"
  },
  "เจ้าบ้า": {
    "phonetic": "cheaa-baa",
    "meaning": "你这个疯狂的人"
  },
  "เจ้าพระยา": {
    "phonetic": "jâo-phrá-yaa",
    "meaning": "湄南河"
  },
  "เจ้าลา": {
    "phonetic": "cheaa-laa",
    "meaning": "驴子"
  },
  "เจ้าหนู": {
    "phonetic": "cheaa-nuu",
    "meaning": "青少年"
  },
  "เจ้าหน้าที่": {
    "phonetic": "jâo-nâa-thîi",
    "meaning": "工作人员/官员"
  },
  "เจ้าโง่": {
    "phonetic": "cheaa-ngo",
    "meaning": "你这个傻瓜"
  },
  "เจ๋ง": {
    "phonetic": "cheng",
    "meaning": "凉爽的"
  },
  "เจ๋งมาก": {
    "phonetic": "cheng-maak",
    "meaning": "非常酷"
  },
  "เจ๋งเลย": {
    "phonetic": "cheng-lei",
    "meaning": "这很酷"
  },
  "เฉพาะ": {
    "phonetic": "chà-phɔ́",
    "meaning": "具体来说"
  },
  "เฉียบพลัน": {
    "phonetic": "chìap-phlan",
    "meaning": "急性"
  },
  "เช": {
    "phonetic": "chhe",
    "meaning": "车"
  },
  "เชน": {
    "phonetic": "chhen",
    "meaning": "链"
  },
  "เชฟ": {
    "phonetic": "chhef",
    "meaning": "厨师"
  },
  "เชร็ค": {
    "phonetic": "chherkh",
    "meaning": "史瑞克"
  },
  "เชลดอน": {
    "phonetic": "chhe-ldon",
    "meaning": "谢尔顿"
  },
  "เชลด้อน": {
    "phonetic": "chhe-ldon",
    "meaning": "谢尔顿"
  },
  "เชลฟ์": {
    "phonetic": "chép",
    "meaning": "架子"
  },
  "เชลลี่": {
    "phonetic": "chhel-lii",
    "meaning": "雪莉"
  },
  "เชส": {
    "phonetic": "chhes",
    "meaning": "追赶"
  },
  "เชอะ": {
    "phonetic": "chheoa",
    "meaning": "干杯"
  },
  "เชา": {
    "phonetic": "chheaa",
    "meaning": "周"
  },
  "เชิง": {
    "phonetic": "choeng",
    "meaning": "脚"
  },
  "เชิญ": {
    "phonetic": "chheia",
    "meaning": "邀请"
  },
  "เชิญค่ะ": {
    "phonetic": "chheia-kha",
    "meaning": "请来"
  },
  "เชิญเลย": {
    "phonetic": "chheia-lei",
    "meaning": "快点"
  },
  "เชิ้ต": {
    "phonetic": "chóet",
    "meaning": "衬衫"
  },
  "เชียงใหม่": {
    "phonetic": "chiiang-mài",
    "meaning": "清迈"
  },
  "เชียร์": {
    "phonetic": "chheiar",
    "meaning": "欢呼"
  },
  "เชียร์ส": {
    "phonetic": "chheiar-s",
    "meaning": "干杯"
  },
  "เชียวนะ": {
    "phonetic": "chheiaw-na",
    "meaning": "让我们来看看"
  },
  "เชี่ย": {
    "phonetic": "chheia",
    "meaning": "他妈的"
  },
  "เชื่อ": {
    "phonetic": "chhueao",
    "meaning": "相信"
  },
  "เชื่อผม": {
    "phonetic": "chhueao-phm",
    "meaning": "相信我"
  },
  "เชื่อม": {
    "phonetic": "chʉ̂am",
    "meaning": "关联"
  },
  "เชื่อมั่น": {
    "phonetic": "chʉ̂a-mân",
    "meaning": "深信/坚信"
  },
  "เชื่อสิ": {
    "phonetic": "chhueao-si",
    "meaning": "相信它"
  },
  "เช็ค": {
    "phonetic": "chhekh",
    "meaning": "查看"
  },
  "เช่น": {
    "phonetic": "chhen",
    "meaning": "例如"
  },
  "เช่นกัน": {
    "phonetic": "chhen-kan",
    "meaning": "以及"
  },
  "เช่า": {
    "phonetic": "châo",
    "meaning": "聘请"
  },
  "เช้า": {
    "phonetic": "chheaa",
    "meaning": "早晨"
  },
  "เช้านี้": {
    "phonetic": "chheaa-nii",
    "meaning": "今晨"
  },
  "เซ": {
    "phonetic": "se",
    "meaning": "硒"
  },
  "เซธ": {
    "phonetic": "seth",
    "meaning": "赛斯"
  },
  "เซน": {
    "phonetic": "sen",
    "meaning": "禅"
  },
  "เซนติเมตร": {
    "phonetic": "sen-dtì-mêet",
    "meaning": "厘米"
  },
  "เซนต์": {
    "phonetic": "sent",
    "meaning": "圣"
  },
  "เซมิคอนดักเตอร์": {
    "phonetic": "see-mí-khɔɔn-dák-tə̂ə",
    "meaning": "半导体"
  },
  "เซรีน่า": {
    "phonetic": "se-rii-naa",
    "meaning": "瑟琳娜"
  },
  "เซลฟ์": {
    "phonetic": "sel-f",
    "meaning": "自己"
  },
  "เซอร์": {
    "phonetic": "seor",
    "meaning": "先生"
  },
  "เซิร์ฟเวอร์": {
    "phonetic": "soef-wer",
    "meaning": "服务器"
  },
  "เซเรน่า": {
    "phonetic": "se-re-naa",
    "meaning": "瑟琳娜"
  },
  "เซ็กซี่": {
    "phonetic": "seksii",
    "meaning": "性感"
  },
  "เซ็กส์": {
    "phonetic": "sek-s",
    "meaning": "性别"
  },
  "เซ็น": {
    "phonetic": "sen",
    "meaning": "标志"
  },
  "เซ็นต์": {
    "phonetic": "sen-t",
    "meaning": "分"
  },
  "เซ็นเซอร์": {
    "phonetic": "sen-səə",
    "meaning": "传感器"
  },
  "เซ็นเซอร์ไอโอทีวัดความชื้น": {
    "phonetic": "sen-səə-ai-oo-thii-wat-khwaam-chʉ́n",
    "meaning": "湿度传感器"
  },
  "เซ็นเตอร์": {
    "phonetic": "sen-dtoe",
    "meaning": "中心"
  },
  "เด": {
    "phonetic": "dee",
    "meaning": "德"
  },
  "เดซี่": {
    "phonetic": "de-sii",
    "meaning": "雏菊"
  },
  "เดท": {
    "phonetic": "deth",
    "meaning": "日期"
  },
  "เดนท์": {
    "phonetic": "den-th",
    "meaning": "凹痕"
  },
  "เดนนิส": {
    "phonetic": "den-nis",
    "meaning": "丹尼斯"
  },
  "เดนิส": {
    "phonetic": "deni-s",
    "meaning": "丹尼斯"
  },
  "เดน่า": {
    "phonetic": "den-aa",
    "meaning": "达纳"
  },
  "เดฟ": {
    "phonetic": "def",
    "meaning": "戴夫"
  },
  "เดมอน": {
    "phonetic": "de-mon",
    "meaning": "达蒙"
  },
  "เดม่อน": {
    "phonetic": "de-mon",
    "meaning": "达蒙"
  },
  "เดรสผ้าฝ้ายแท้": {
    "phonetic": "dret-phaa-faai-thae",
    "meaning": "纯棉连衣裙"
  },
  "เดร์": {
    "phonetic": "der",
    "meaning": "德"
  },
  "เดล": {
    "phonetic": "del",
    "meaning": "德尔"
  },
  "เดลต้า": {
    "phonetic": "deltaa",
    "meaning": "三角洲"
  },
  "เดวอน": {
    "phonetic": "de-won",
    "meaning": "德文郡"
  },
  "เดวิด": {
    "phonetic": "dewid",
    "meaning": "大卫"
  },
  "เดวิท": {
    "phonetic": "de-with",
    "meaning": "大卫"
  },
  "เดวิส": {
    "phonetic": "de-wis",
    "meaning": "戴维斯"
  },
  "เดวี่": {
    "phonetic": "de-wii",
    "meaning": "戴维"
  },
  "เดอ": {
    "phonetic": "deo",
    "meaning": "德"
  },
  "เดอร์": {
    "phonetic": "de-or",
    "meaning": "德"
  },
  "เดอะ": {
    "phonetic": "deoa",
    "meaning": "这"
  },
  "เดาว่า": {
    "phonetic": "deaa-waa",
    "meaning": "猜测"
  },
  "เดาสิ": {
    "phonetic": "deaa-si",
    "meaning": "猜测"
  },
  "เดิน": {
    "phonetic": "dein",
    "meaning": "走"
  },
  "เดินทาง": {
    "phonetic": "doen-thaang",
    "meaning": "旅行/出行"
  },
  "เดินรถ": {
    "phonetic": "doen-rót",
    "meaning": "步行乘坐公交车"
  },
  "เดินไป": {
    "phonetic": "dein-pi",
    "meaning": "走开"
  },
  "เดิม": {
    "phonetic": "doem",
    "meaning": "老的"
  },
  "เดีย": {
    "phonetic": "dia",
    "meaning": "直径"
  },
  "เดียว": {
    "phonetic": "diao",
    "meaning": "一"
  },
  "เดียวกัน": {
    "phonetic": "diaw-gan",
    "meaning": "相同的"
  },
  "เดี่ยว": {
    "phonetic": "diao",
    "meaning": "单身的"
  },
  "เดี๋ยว": {
    "phonetic": "diao",
    "meaning": "等待"
  },
  "เดี๋ยวๆ": {
    "phonetic": "diao",
    "meaning": "等一下"
  },
  "เดือน": {
    "phonetic": "duean",
    "meaning": "月"
  },
  "เดเนียล": {
    "phonetic": "de-neia-l",
    "meaning": "丹尼尔"
  },
  "เดเมียน": {
    "phonetic": "de-meia-n",
    "meaning": "达米安"
  },
  "เดเรค": {
    "phonetic": "derekh",
    "meaning": "德里克"
  },
  "เดเร็ก": {
    "phonetic": "derek",
    "meaning": "德里克"
  },
  "เดเร็ค": {
    "phonetic": "derekh",
    "meaning": "德里克"
  },
  "เด็ก": {
    "phonetic": "dek",
    "meaning": "孩子们"
  },
  "เด็กซ์": {
    "phonetic": "dek-s",
    "meaning": "德克斯"
  },
  "เด็กดี": {
    "phonetic": "dek-dii",
    "meaning": "好孩子"
  },
  "เด็กโง่": {
    "phonetic": "dek-ngo",
    "meaning": "傻孩子"
  },
  "เด็กๆ": {
    "phonetic": "dek-dek",
    "meaning": "孩子们"
  },
  "เด็ด": {
    "phonetic": "dèt",
    "meaning": "坚决地"
  },
  "เด็ดขาด": {
    "phonetic": "ded-khaad",
    "meaning": "绝对地"
  },
  "เด็บ": {
    "phonetic": "deb",
    "meaning": "德布"
  },
  "เด็บบี้": {
    "phonetic": "deb-bii",
    "meaning": "黛比"
  },
  "เด่น": {
    "phonetic": "dèn",
    "meaning": "值得注意的"
  },
  "เตรียม": {
    "phonetic": "teriam",
    "meaning": "准备"
  },
  "เตา": {
    "phonetic": "tao",
    "meaning": "炉子/烤炉"
  },
  "เติบโต": {
    "phonetic": "təəp-dtoo",
    "meaning": "增长/成长"
  },
  "เติม": {
    "phonetic": "toem",
    "meaning": "添加"
  },
  "เตียง": {
    "phonetic": "dtiang",
    "meaning": "床"
  },
  "เตือน": {
    "phonetic": "dtʉan",
    "meaning": "警告"
  },
  "เต็ม": {
    "phonetic": "dtem",
    "meaning": "满/充满"
  },
  "เต้": {
    "phonetic": "dtêe",
    "meaning": "泰埃"
  },
  "เต้น": {
    "phonetic": "ten",
    "meaning": "舞蹈"
  },
  "เต้นรำ": {
    "phonetic": "tenra",
    "meaning": "舞蹈"
  },
  "เถอะ": {
    "phonetic": "thə̀",
    "meaning": "(语气词) 建议或请求词，意为“吧”"
  },
  "เถอะนะ": {
    "phonetic": "theoa-na",
    "meaning": "来吧"
  },
  "เถอะน่า": {
    "phonetic": "theoa-naa",
    "meaning": "快点"
  },
  "เท": {
    "phonetic": "the",
    "meaning": "倒"
  },
  "เทค": {
    "phonetic": "thekh",
    "meaning": "技术"
  },
  "เทคนิค": {
    "phonetic": "thek-nik",
    "meaning": "技术"
  },
  "เทคโนโลยี": {
    "phonetic": "thek-noo-loo-yii",
    "meaning": "技术"
  },
  "เทท": {
    "phonetic": "theth",
    "meaning": "泰特"
  },
  "เทป": {
    "phonetic": "thep",
    "meaning": "磁带"
  },
  "เทรซี่": {
    "phonetic": "ther-sii",
    "meaning": "特雷西"
  },
  "เทรด": {
    "phonetic": "threet",
    "meaning": "贸易"
  },
  "เทรนท์": {
    "phonetic": "the-rnth",
    "meaning": "特伦特"
  },
  "เทรนเนอร์": {
    "phonetic": "threen-nəə",
    "meaning": "训练师"
  },
  "เทรุ": {
    "phonetic": "theru",
    "meaning": "辉"
  },
  "เทศกาล": {
    "phonetic": "thêet-sà-gaan",
    "meaning": "节日"
  },
  "เทส": {
    "phonetic": "thes",
    "meaning": "测试"
  },
  "เทสซ่า": {
    "phonetic": "thes-saa",
    "meaning": "泰莎"
  },
  "เทสส์": {
    "phonetic": "the-ss",
    "meaning": "苔丝"
  },
  "เทอรี่": {
    "phonetic": "the-orii",
    "meaning": "特里"
  },
  "เทียน": {
    "phonetic": "theian",
    "meaning": "蜡烛"
  },
  "เทียบ": {
    "phonetic": "thîap",
    "meaning": "比较"
  },
  "เทียม": {
    "phonetic": "thiam",
    "meaning": "人造的"
  },
  "เที่ยง": {
    "phonetic": "thiang",
    "meaning": "中午"
  },
  "เที่ยว": {
    "phonetic": "thîaw",
    "meaning": "旅游/次"
  },
  "เทเรซ่า": {
    "phonetic": "the-re-saa",
    "meaning": "特蕾莎"
  },
  "เทเลอร์": {
    "phonetic": "the-leo-r",
    "meaning": "泰勒"
  },
  "เท็กซัส": {
    "phonetic": "theksas",
    "meaning": "德克萨斯州"
  },
  "เท็ด": {
    "phonetic": "thed",
    "meaning": "特德"
  },
  "เท็ดดี้": {
    "phonetic": "thed-dii",
    "meaning": "泰迪"
  },
  "เท่า": {
    "phonetic": "theaa",
    "meaning": "次"
  },
  "เท่ากับ": {
    "phonetic": "theaakab",
    "meaning": "等于"
  },
  "เท่านั้น": {
    "phonetic": "thâo-nán",
    "meaning": "仅有的"
  },
  "เท่าไหร่": {
    "phonetic": "thâo-rài",
    "meaning": "多少钱 / 多少"
  },
  "เท้า": {
    "phonetic": "tháaw",
    "meaning": "脚"
  },
  "เธอ": {
    "phonetic": "theo",
    "meaning": "你"
  },
  "เน": {
    "phonetic": "ne",
    "meaning": "氖"
  },
  "เนต": {
    "phonetic": "net",
    "meaning": "净"
  },
  "เนท": {
    "phonetic": "neth",
    "meaning": "内特"
  },
  "เนธาน": {
    "phonetic": "nethaan",
    "meaning": "内森"
  },
  "เนลลี่": {
    "phonetic": "nel-lii",
    "meaning": "耐莉"
  },
  "เนลสัน": {
    "phonetic": "nel-san",
    "meaning": "纳尔逊"
  },
  "เนอะ": {
    "phonetic": "neoa",
    "meaning": "正确的"
  },
  "เนี่ย": {
    "phonetic": "neia",
    "meaning": "这"
  },
  "เนี่ยนะ": {
    "phonetic": "neia-na",
    "meaning": "就是这样"
  },
  "เนื่อง": {
    "phonetic": "nʉ̂ang",
    "meaning": "because"
  },
  "เนื่องจาก": {
    "phonetic": "nueang-jaak",
    "meaning": "由于"
  },
  "เนื้อ": {
    "phonetic": "nueao",
    "meaning": "肉"
  },
  "เน็ด": {
    "phonetic": "ned",
    "meaning": "内德"
  },
  "เน็ต": {
    "phonetic": "net",
    "meaning": "网络"
  },
  "เน็ตหลุดบ่อย": {
    "phonetic": "net-lut-bɔi",
    "meaning": "网络频繁掉线"
  },
  "เน้น": {
    "phonetic": "nén",
    "meaning": "强调"
  },
  "เบ": {
    "phonetic": "be",
    "meaning": "裴"
  },
  "เบค": {
    "phonetic": "bekh",
    "meaning": "贝克"
  },
  "เบคกี้": {
    "phonetic": "bekh-kii",
    "meaning": "贝基"
  },
  "เบคเคท": {
    "phonetic": "bekhkheth",
    "meaning": "贝克特"
  },
  "เบท": {
    "phonetic": "beth",
    "meaning": "赌注"
  },
  "เบทซี่": {
    "phonetic": "beth-sii",
    "meaning": "贝特西"
  },
  "เบธ": {
    "phonetic": "beth",
    "meaning": "贝丝"
  },
  "เบน": {
    "phonetic": "ben",
    "meaning": "本"
  },
  "เบนนี่": {
    "phonetic": "ben-nii",
    "meaning": "本尼"
  },
  "เบนเน็ต": {
    "phonetic": "ben-net",
    "meaning": "班内特"
  },
  "เบบี้": {
    "phonetic": "bebii",
    "meaning": "婴儿"
  },
  "เบย์": {
    "phonetic": "bei",
    "meaning": "湾"
  },
  "เบรน": {
    "phonetic": "bern",
    "meaning": "脑"
  },
  "เบรนด้า": {
    "phonetic": "be-rn-daa",
    "meaning": "布伦达"
  },
  "เบรนแนน": {
    "phonetic": "be-rn-naen",
    "meaning": "布伦南"
  },
  "เบล": {
    "phonetic": "bel",
    "meaning": "钟"
  },
  "เบลค": {
    "phonetic": "belkh",
    "meaning": "布莱克"
  },
  "เบลน": {
    "phonetic": "beln",
    "meaning": "布莱恩"
  },
  "เบลล่า": {
    "phonetic": "bel-laa",
    "meaning": "贝拉"
  },
  "เบลล์": {
    "phonetic": "bell",
    "meaning": "钟"
  },
  "เบลี่ย์": {
    "phonetic": "be-lii-y",
    "meaning": "贝利"
  },
  "เบอร์": {
    "phonetic": "beor",
    "meaning": "数字"
  },
  "เบอร์โทรศัพท์": {
    "phonetic": "boer-thoo-rá-sàp",
    "meaning": "电话号码"
  },
  "เบา": {
    "phonetic": "beaa",
    "meaning": "光"
  },
  "เบาๆ": {
    "phonetic": "bao-bao",
    "meaning": "轻轻地"
  },
  "เบิก": {
    "phonetic": "bə̀ək",
    "meaning": "报销/提取"
  },
  "เบิร์ก": {
    "phonetic": "beirk",
    "meaning": "伯格"
  },
  "เบิร์น": {
    "phonetic": "beirn",
    "meaning": "烧伤"
  },
  "เบียร์": {
    "phonetic": "beiar",
    "meaning": "啤酒"
  },
  "เบื่อ": {
    "phonetic": "bʉ̀a",
    "meaning": "无聊的"
  },
  "เบื้อง": {
    "phonetic": "bʉ̂ang",
    "meaning": "多于"
  },
  "เบ็คกี้": {
    "phonetic": "bekh-kii",
    "meaning": "贝基"
  },
  "เบ็คก้า": {
    "phonetic": "bekhkaa",
    "meaning": "贝卡"
  },
  "เบ็ด": {
    "phonetic": "bèt",
    "meaning": "钩"
  },
  "เบ็ตตี้": {
    "phonetic": "bet-tii",
    "meaning": "贝蒂"
  },
  "เบ็ธ": {
    "phonetic": "beth",
    "meaning": "贝丝"
  },
  "เบ็น": {
    "phonetic": "ben",
    "meaning": "本"
  },
  "เบ่ง": {
    "phonetic": "beng",
    "meaning": "推"
  },
  "เปราะ": {
    "phonetic": "bprɔ̀",
    "meaning": "脆"
  },
  "เปรียบ": {
    "phonetic": "bprìap",
    "meaning": "比较"
  },
  "เปรี้ยว": {
    "phonetic": "bpriaw",
    "meaning": "酸"
  },
  "เปลี่ยน": {
    "phonetic": "pelian",
    "meaning": "改变"
  },
  "เปลี่ยนแปลง": {
    "phonetic": "bplian-bplaeng",
    "meaning": "改变"
  },
  "เปลือก": {
    "phonetic": "plʉak",
    "meaning": "皮/外壳"
  },
  "เปล่า": {
    "phonetic": "pelaa",
    "meaning": "不"
  },
  "เปล่านะ": {
    "phonetic": "pelaa-na",
    "meaning": "不"
  },
  "เปล่าๆ": {
    "phonetic": "bplao-bplao",
    "meaning": "不"
  },
  "เปอร์เซ็นต์": {
    "phonetic": "bpoe-sen",
    "meaning": "百分比"
  },
  "เปิด": {
    "phonetic": "peid",
    "meaning": "打开"
  },
  "เปิดมัน": {
    "phonetic": "peid-man",
    "meaning": "打开它"
  },
  "เปิดสิ": {
    "phonetic": "peid-si",
    "meaning": "打开它"
  },
  "เปิดเลย": {
    "phonetic": "peid-lei",
    "meaning": "现在开放"
  },
  "เปิดไฟ": {
    "phonetic": "peid-fi",
    "meaning": "打开灯"
  },
  "เปียก": {
    "phonetic": "bpìak",
    "meaning": "湿 of"
  },
  "เปื้อน": {
    "phonetic": "bpuean",
    "meaning": "弄脏"
  },
  "เป็ด": {
    "phonetic": "bpet",
    "meaning": "鸭子"
  },
  "เป็น": {
    "phonetic": "pen",
    "meaning": "这是"
  },
  "เป็นใคร": {
    "phonetic": "pen-khair",
    "meaning": "你是谁"
  },
  "เป็นไง": {
    "phonetic": "pen-ngi",
    "meaning": "你好吗"
  },
  "เป็นไร": {
    "phonetic": "bpen-rai",
    "meaning": "事情"
  },
  "เป้า": {
    "phonetic": "bpao",
    "meaning": "目标/靶子"
  },
  "เผชิญ": {
    "phonetic": "phà-choen",
    "meaning": "脸"
  },
  "เผา": {
    "phonetic": "phǎo",
    "meaning": "烧伤"
  },
  "เผื่อ": {
    "phonetic": "phʉ̀a",
    "meaning": "万一"
  },
  "เผ็ด": {
    "phonetic": "phèt",
    "meaning": "辣"
  },
  "เผ็ดกลาง": {
    "phonetic": "phèt-glaang",
    "meaning": "中辣"
  },
  "เฝ้า": {
    "phonetic": "fâo",
    "meaning": "警卫"
  },
  "เพคะ": {
    "phonetic": "phekha",
    "meaning": "唷"
  },
  "เพค่ะ": {
    "phonetic": "phe-kha",
    "meaning": "唷"
  },
  "เพจ": {
    "phonetic": "phech",
    "meaning": "页"
  },
  "เพนนี": {
    "phonetic": "phennii",
    "meaning": "一分钱"
  },
  "เพนนี่": {
    "phonetic": "phennii",
    "meaning": "一分钱"
  },
  "เพย์": {
    "phonetic": "phee",
    "meaning": "支付"
  },
  "เพรนทิส": {
    "phonetic": "phe-rn-this",
    "meaning": "普伦蒂斯"
  },
  "เพราะ": {
    "phonetic": "pheraaa",
    "meaning": "因为"
  },
  "เพราะผม": {
    "phonetic": "pheraaa-phm",
    "meaning": "因为我"
  },
  "เพลง": {
    "phonetic": "phelng",
    "meaning": "音乐"
  },
  "เพลิง": {
    "phonetic": "phloeng",
    "meaning": "火"
  },
  "เพศ": {
    "phonetic": "phêet",
    "meaning": "性别"
  },
  "เพิ่ม": {
    "phonetic": "phoem",
    "meaning": "增加/添加"
  },
  "เพิ่มเติม": {
    "phonetic": "phôem-dtoem",
    "meaning": "补充/额外"
  },
  "เพียง": {
    "phonetic": "pheiang",
    "meaning": "只是"
  },
  "เพียร": {
    "phonetic": "phian",
    "meaning": "辛苦的"
  },
  "เพียร์ซ": {
    "phonetic": "pheiar-s",
    "meaning": "刺穿"
  },
  "เพื่อ": {
    "phonetic": "phueao",
    "meaning": "为了"
  },
  "เพื่อน": {
    "phonetic": "phueaon",
    "meaning": "朋友们"
  },
  "เพื่อนัก": {
    "phonetic": "phʉ̂a-nák",
    "meaning": "为了...人/为了...者"
  },
  "เพื่อนักท่องเที่ยว": {
    "phonetic": "phʉ̂a-nák-thɔ̂ɔŋ-thîao",
    "meaning": "为了游客"
  },
  "เพื่อนำ": {
    "phonetic": "phʉ̂a-nam",
    "meaning": "为了/以便/用于"
  },
  "เพื่อนๆ": {
    "phonetic": "phueaon",
    "meaning": "朋友们"
  },
  "เฟ": {
    "phonetic": "fee",
    "meaning": "铁"
  },
  "เฟย์": {
    "phonetic": "fei",
    "meaning": "菲耶"
  },
  "เฟรด": {
    "phonetic": "ferd",
    "meaning": "弗雷德"
  },
  "เฟรดดี้": {
    "phonetic": "fe-rd-dii",
    "meaning": "弗雷迪"
  },
  "เฟรย่า": {
    "phonetic": "fer-yaa",
    "meaning": "芙蕾雅"
  },
  "เฟร็ด": {
    "phonetic": "ferd",
    "meaning": "弗雷德"
  },
  "เม": {
    "phonetic": "me",
    "meaning": "四月"
  },
  "เมกุ": {
    "phonetic": "meku",
    "meaning": "梅古"
  },
  "เมด": {
    "phonetic": "meet",
    "meaning": "女佣"
  },
  "เมดิสัน": {
    "phonetic": "medi-san",
    "meaning": "麦迪逊"
  },
  "เมตร": {
    "phonetic": "metr",
    "meaning": "仪表"
  },
  "เมนู": {
    "phonetic": "mee-nuu",
    "meaning": "菜单"
  },
  "เมย์": {
    "phonetic": "mei",
    "meaning": "可能"
  },
  "เมลแมน": {
    "phonetic": "mel-maen",
    "meaning": "梅尔曼"
  },
  "เมษายน": {
    "phonetic": "mee-saa-yon",
    "meaning": "四月"
  },
  "เมสัน": {
    "phonetic": "me-san",
    "meaning": "石匠"
  },
  "เมอลิน": {
    "phonetic": "me-o-lin",
    "meaning": "梅林"
  },
  "เมิร์ฟ": {
    "phonetic": "meirf",
    "meaning": "墨菲"
  },
  "เมียย์": {
    "phonetic": "meia-y",
    "meaning": "妻子"
  },
  "เมือง": {
    "phonetic": "mueang",
    "meaning": "城市"
  },
  "เมื่อ": {
    "phonetic": "muea",
    "meaning": "什么时候"
  },
  "เมื่อไร": {
    "phonetic": "mueari",
    "meaning": "什么时候"
  },
  "เมื่อไหร่": {
    "phonetic": "mʉ̂a-rài",
    "meaning": "什么时候"
  },
  "เมเยอร์": {
    "phonetic": "me-yeo-r",
    "meaning": "迈耶"
  },
  "เมเรดิธ": {
    "phonetic": "me-redith",
    "meaning": "梅雷迪思"
  },
  "เมแกน": {
    "phonetic": "me-kaen",
    "meaning": "梅根"
  },
  "เม็ก": {
    "phonetic": "mek",
    "meaning": "梅格"
  },
  "เม็ด": {
    "phonetic": "med",
    "meaning": "片剂"
  },
  "เย": {
    "phonetic": "ye",
    "meaning": "是的"
  },
  "เยจิน": {
    "phonetic": "ye-chin",
    "meaning": "业进"
  },
  "เยน": {
    "phonetic": "yen",
    "meaning": "日元"
  },
  "เยส": {
    "phonetic": "yes",
    "meaning": "是的"
  },
  "เยอรมัน": {
    "phonetic": "yeorman",
    "meaning": "德语"
  },
  "เยอะ": {
    "phonetic": "yeoa",
    "meaning": "很多"
  },
  "เยอะๆ": {
    "phonetic": "yə́-yə́",
    "meaning": "很多"
  },
  "เยอึน": {
    "phonetic": "yeoue-n",
    "meaning": "叶恩"
  },
  "เยาวชน": {
    "phonetic": "yao-wá-chon",
    "meaning": "青年"
  },
  "เยาวราช": {
    "phonetic": "yao-wa-raat",
    "meaning": "唐人街"
  },
  "เยี่ยม": {
    "phonetic": "yiam",
    "meaning": "伟大的"
  },
  "เย็น": {
    "phonetic": "yen",
    "meaning": "凉爽的"
  },
  "เย็นไว้": {
    "phonetic": "yen-wi",
    "meaning": "保持冷静"
  },
  "เย่": {
    "phonetic": "ye",
    "meaning": "是的"
  },
  "เย้": {
    "phonetic": "ye",
    "meaning": "耶"
  },
  "เร": {
    "phonetic": "re",
    "meaning": "关于"
  },
  "เรจิน่า": {
    "phonetic": "re-chi-naa",
    "meaning": "雷吉娜"
  },
  "เรด": {
    "phonetic": "red",
    "meaning": "红色"
  },
  "เรน": {
    "phonetic": "ren",
    "meaning": "雨"
  },
  "เรมี่": {
    "phonetic": "re-mii",
    "meaning": "雷米"
  },
  "เรย์": {
    "phonetic": "rei",
    "meaning": "射线"
  },
  "เรอะ": {
    "phonetic": "reoa",
    "meaning": "真的吗"
  },
  "เรา": {
    "phonetic": "rao",
    "meaning": "我们 / 我"
  },
  "เราควร": {
    "phonetic": "reaa-khwr",
    "meaning": "我们应该"
  },
  "เราเตอร์": {
    "phonetic": "rao-tə̂ə",
    "meaning": "路由器"
  },
  "เริ่ม": {
    "phonetic": "reim",
    "meaning": "开始"
  },
  "เรียก": {
    "phonetic": "reiak",
    "meaning": "称呼"
  },
  "เรียน": {
    "phonetic": "rian",
    "meaning": "学习"
  },
  "เรียบร้อย": {
    "phonetic": "rîap-rɔ́ɔi",
    "meaning": "整齐的"
  },
  "เรียลไทม์": {
    "phonetic": "riial-thaim",
    "meaning": "实时"
  },
  "เรียว": {
    "phonetic": "reiaw",
    "meaning": "苗条"
  },
  "เรียวตะ": {
    "phonetic": "reiaw-ta",
    "meaning": "良太"
  },
  "เรือ": {
    "phonetic": "rueao",
    "meaning": "船"
  },
  "เรือด่วนธงส้ม": {
    "phonetic": "rʉa-dùan-thoŋ-sôm",
    "meaning": "橙旗快船/橙色旗昭披耶快船"
  },
  "เรื่อง": {
    "phonetic": "rʉ̂ang",
    "meaning": "事情 / 故事 / 关于"
  },
  "เรื่องนี้": {
    "phonetic": "rʉ̂ang-níi",
    "meaning": "这件事"
  },
  "เรเชล": {
    "phonetic": "rechhel",
    "meaning": "雷切尔"
  },
  "เรเน่": {
    "phonetic": "rene",
    "meaning": "雷内"
  },
  "เรเวน": {
    "phonetic": "re-wen",
    "meaning": "乌鸦"
  },
  "เร็กซ์": {
    "phonetic": "reks",
    "meaning": "雷克斯"
  },
  "เร็ว": {
    "phonetic": "rew",
    "meaning": "快速地"
  },
  "เร็วซิ": {
    "phonetic": "rew-si",
    "meaning": "匆忙"
  },
  "เร็วสิ": {
    "phonetic": "rew-si",
    "meaning": "匆忙"
  },
  "เร็วอีก": {
    "phonetic": "rew-oiik",
    "meaning": "更快"
  },
  "เร็วๆ": {
    "phonetic": "rew-rew",
    "meaning": "匆忙"
  },
  "เร็วๆสิ": {
    "phonetic": "rew-rewsi",
    "meaning": "匆忙"
  },
  "เร่ง": {
    "phonetic": "reng",
    "meaning": "加速/促使"
  },
  "เร้ด": {
    "phonetic": "red",
    "meaning": "红色的"
  },
  "เลข": {
    "phonetic": "lekh",
    "meaning": "号码"
  },
  "เลขที่": {
    "phonetic": "lekh-thii",
    "meaning": "不"
  },
  "เลดี้": {
    "phonetic": "ledii",
    "meaning": "女士"
  },
  "เลน": {
    "phonetic": "len",
    "meaning": "车道"
  },
  "เลนนี่": {
    "phonetic": "len-nii",
    "meaning": "莱尼"
  },
  "เลย": {
    "phonetic": "lei",
    "meaning": "直接 / 完全 / 就 / 黎府 / 非常"
  },
  "เลยนะ": {
    "phonetic": "lei-na",
    "meaning": "马上"
  },
  "เลยล่ะ": {
    "phonetic": "lei-la",
    "meaning": "马上"
  },
  "เลยเหรอ": {
    "phonetic": "lei-e-ro",
    "meaning": "真的吗"
  },
  "เลว": {
    "phonetic": "lew",
    "meaning": "坏的"
  },
  "เลสลี่": {
    "phonetic": "le-slii",
    "meaning": "莱斯利"
  },
  "เลอ": {
    "phonetic": "leo",
    "meaning": "勒"
  },
  "เละ": {
    "phonetic": "lé",
    "meaning": "烂/稀烂/软烂"
  },
  "เลาด้า": {
    "phonetic": "leaa-daa",
    "meaning": "劳达"
  },
  "เลิก": {
    "phonetic": "leik",
    "meaning": "辞职"
  },
  "เลิกกัน": {
    "phonetic": "leik-kan",
    "meaning": "拆散"
  },
  "เลิศ": {
    "phonetic": "lêet",
    "meaning": "出色的"
  },
  "เลียนแบบ": {
    "phonetic": "liian-bàep",
    "meaning": "模仿/仿造"
  },
  "เลี่ยง": {
    "phonetic": "lîaŋ",
    "meaning": "绕道/避开"
  },
  "เลี้ยง": {
    "phonetic": "lîiang",
    "meaning": "增加"
  },
  "เลี้ยว": {
    "phonetic": "liaw",
    "meaning": "转弯"
  },
  "เลือก": {
    "phonetic": "lueaok",
    "meaning": "选择"
  },
  "เลือด": {
    "phonetic": "lueaod",
    "meaning": "血"
  },
  "เลื่อน": {
    "phonetic": "lʉ̂an",
    "meaning": "延迟/推迟/滑动"
  },
  "เลื่อนออกไป": {
    "phonetic": "lʉ̂an-ɔ̀ɔk-pai",
    "meaning": "推迟/延期"
  },
  "เลเซอร์": {
    "phonetic": "lee-sə̂ə",
    "meaning": "激光"
  },
  "เล็ก": {
    "phonetic": "lek",
    "meaning": "小的"
  },
  "เล็กซี่": {
    "phonetic": "lek-sii",
    "meaning": "莱克西"
  },
  "เล็กซ์": {
    "phonetic": "lek-s",
    "meaning": "莱克斯"
  },
  "เล็กๆ": {
    "phonetic": "lék-lék",
    "meaning": "小的"
  },
  "เล็ง": {
    "phonetic": "leng",
    "meaning": "目的"
  },
  "เล็ม": {
    "phonetic": "lem",
    "meaning": "修剪"
  },
  "เล่น": {
    "phonetic": "len",
    "meaning": "玩"
  },
  "เล่ม": {
    "phonetic": "lem",
    "meaning": "体积"
  },
  "เล่า": {
    "phonetic": "lâo",
    "meaning": "告诉"
  },
  "เวด": {
    "phonetic": "wed",
    "meaning": "韦德"
  },
  "เวที": {
    "phonetic": "wee-thii",
    "meaning": "阶段"
  },
  "เวนดี้": {
    "phonetic": "wen-dii",
    "meaning": "温迪"
  },
  "เวย์น": {
    "phonetic": "wein",
    "meaning": "韦恩"
  },
  "เวร": {
    "phonetic": "wer",
    "meaning": "拼车"
  },
  "เวรกรรม": {
    "phonetic": "wer-krrm",
    "meaning": "业力"
  },
  "เวรล่ะ": {
    "phonetic": "wer-la",
    "meaning": "搞什么鬼"
  },
  "เวรเอ้ย": {
    "phonetic": "wer-oe-y",
    "meaning": "拉屎"
  },
  "เวรเอ๊ย": {
    "phonetic": "wer-oei",
    "meaning": "拉屎"
  },
  "เวรแล้ว": {
    "phonetic": "wer-laew",
    "meaning": "该死的"
  },
  "เวล": {
    "phonetic": "wel",
    "meaning": "维尔"
  },
  "เวลา": {
    "phonetic": "welaa",
    "meaning": "时间"
  },
  "เวลานี้": {
    "phonetic": "welaa-nii",
    "meaning": "这次"
  },
  "เวส": {
    "phonetic": "wes",
    "meaning": "韦斯"
  },
  "เวสต์": {
    "phonetic": "west",
    "meaning": "西方"
  },
  "เวอร์ชัน": {
    "phonetic": "wəə-chân",
    "meaning": "版本"
  },
  "เวิร์น": {
    "phonetic": "weirn",
    "meaning": "弗恩"
  },
  "เว็บไซต์": {
    "phonetic": "wep-sai",
    "meaning": "网站"
  },
  "เว่น": {
    "phonetic": "wên",
    "meaning": "文"
  },
  "เว้นแต่": {
    "phonetic": "wen-tae",
    "meaning": "除了"
  },
  "เศรษฐกิจ": {
    "phonetic": "sèet-thà-gìt",
    "meaning": "经济"
  },
  "เศร้า": {
    "phonetic": "seraa",
    "meaning": "伤心"
  },
  "เศษ": {
    "phonetic": "sèet",
    "meaning": "废料"
  },
  "เสนอ": {
    "phonetic": "sa-nə̌ə",
    "meaning": "提出/建议"
  },
  "เสน่ห์": {
    "phonetic": "sa-nèe",
    "meaning": "魅力"
  },
  "เสมอ": {
    "phonetic": "semo",
    "meaning": "总是"
  },
  "เสริม": {
    "phonetic": "soem",
    "meaning": "加强/补充"
  },
  "เสริมสุข": {
    "phonetic": "soem-suk",
    "meaning": "塞尔姆苏克"
  },
  "เสร็จ": {
    "phonetic": "set",
    "meaning": "完成/好"
  },
  "เสวนา": {
    "phonetic": "see-wa-naa",
    "meaning": "讲话"
  },
  "เสาร์": {
    "phonetic": "sǎo",
    "meaning": "周六"
  },
  "เสีย": {
    "phonetic": "siia",
    "meaning": "坏了/损坏"
  },
  "เสียง": {
    "phonetic": "seiang",
    "meaning": "声音"
  },
  "เสียบ": {
    "phonetic": "sìap",
    "meaning": "插头"
  },
  "เสียใจ": {
    "phonetic": "seiachai",
    "meaning": "对不起"
  },
  "เสี่ยง": {
    "phonetic": "sìang",
    "meaning": "风险"
  },
  "เสื่อม": {
    "phonetic": "sueam",
    "meaning": "衰退"
  },
  "เสื้อ": {
    "phonetic": "sʉ̂a",
    "meaning": "衬衫"
  },
  "เสื้อชูชีพ": {
    "phonetic": "sʉ̂a-chuu-chîip",
    "meaning": "救生衣"
  },
  "เสื้อผ้า": {
    "phonetic": "sʉ̂a-phaa",
    "meaning": "衣服"
  },
  "เสื้อยืดลายน่ารัก": {
    "phonetic": "sʉ̂a-yʉ̂at-laai-naa-rak",
    "meaning": "印花T恤"
  },
  "เสื้อเชิ้ต": {
    "phonetic": "sʉ̂a-chóet",
    "meaning": "衬衫"
  },
  "เสื้อเชิ้ตลายดอก": {
    "phonetic": "sʉ̂a-chə́ət-laai-dɔɔk",
    "meaning": "印花衬衫"
  },
  "เส้น": {
    "phonetic": "sên",
    "meaning": "线"
  },
  "เห": {
    "phonetic": "e",
    "meaning": "嘿"
  },
  "เหง้า": {
    "phonetic": "ngâo",
    "meaning": "根茎"
  },
  "เหตุ": {
    "phonetic": "heet",
    "meaning": "原因"
  },
  "เหตุผล": {
    "phonetic": "etuphl",
    "meaning": "原因"
  },
  "เหนียว": {
    "phonetic": "niaw",
    "meaning": "粘/糯"
  },
  "เหนือ": {
    "phonetic": "nʉ̌a",
    "meaning": "多于"
  },
  "เหนื่อย": {
    "phonetic": "nʉ̀ai",
    "meaning": "疲劳的"
  },
  "เหมา": {
    "phonetic": "mǎo",
    "meaning": "总而言之"
  },
  "เหมาะ": {
    "phonetic": "mɔ̀",
    "meaning": "合适的"
  },
  "เหมือน": {
    "phonetic": "emueon",
    "meaning": "喜欢"
  },
  "เหยื่อ": {
    "phonetic": "eiueo",
    "meaning": "受害者"
  },
  "เหรอ": {
    "phonetic": "ero",
    "meaning": "所以"
  },
  "เหรอคะ": {
    "phonetic": "e-ro-kha",
    "meaning": "真的吗"
  },
  "เหรียญ": {
    "phonetic": "riai",
    "meaning": "硬币"
  },
  "เหลว": {
    "phonetic": "laew",
    "meaning": "失败/流体"
  },
  "เหลวไหล": {
    "phonetic": "elw-il",
    "meaning": "废话"
  },
  "เหลือ": {
    "phonetic": "elueo",
    "meaning": "剩下的"
  },
  "เหล่า": {
    "phonetic": "lào",
    "meaning": "these"
  },
  "เหล้า": {
    "phonetic": "elaa",
    "meaning": "酒"
  },
  "เหวอ": {
    "phonetic": "ewo",
    "meaning": "深渊"
  },
  "เหอ": {
    "phonetic": "eo",
    "meaning": "他"
  },
  "เหอะ": {
    "phonetic": "eoa",
    "meaning": "呵呵"
  },
  "เหอะน่า": {
    "phonetic": "eoa-naa",
    "meaning": "呵呵"
  },
  "เหี้ย": {
    "phonetic": "eia",
    "meaning": "该死"
  },
  "เห็น": {
    "phonetic": "hěn",
    "meaning": "看见"
  },
  "เห็นมะ": {
    "phonetic": "en-ma",
    "meaning": "我懂了"
  },
  "เห็นสิ": {
    "phonetic": "en-si",
    "meaning": "看"
  },
  "เห็นไม๊": {
    "phonetic": "en-mi",
    "meaning": "你有没有看到"
  },
  "เห็นไหม": {
    "phonetic": "en-im",
    "meaning": "你看到了吗"
  },
  "เห้": {
    "phonetic": "e",
    "meaning": "嘿"
  },
  "เห้ย": {
    "phonetic": "ei",
    "meaning": "嘿"
  },
  "เห้อ": {
    "phonetic": "eo",
    "meaning": "嘿"
  },
  "เอ": {
    "phonetic": "oe",
    "meaning": "A"
  },
  "เอก": {
    "phonetic": "eek",
    "meaning": "主要的"
  },
  "เอกชน": {
    "phonetic": "ee-ga-chon",
    "meaning": "私人的"
  },
  "เอกสาร": {
    "phonetic": "èek-gà-sǎan",
    "meaning": "文档"
  },
  "เอง": {
    "phonetic": "oeng",
    "meaning": "我"
  },
  "เอช": {
    "phonetic": "oechh",
    "meaning": "H"
  },
  "เอซร่า": {
    "phonetic": "oes-raa",
    "meaning": "以斯拉"
  },
  "เอดดี้": {
    "phonetic": "oed-dii",
    "meaning": "艾迪"
  },
  "เอดิสัน": {
    "phonetic": "oe-di-san",
    "meaning": "爱迪生"
  },
  "เอทีเอ็ม": {
    "phonetic": "ee-thii-em",
    "meaning": "自动提款机"
  },
  "เอน": {
    "phonetic": "een",
    "meaning": "倾斜"
  },
  "เอบิลีน": {
    "phonetic": "oe-bi-liin",
    "meaning": "阿比林"
  },
  "เอพริล": {
    "phonetic": "oe-phril",
    "meaning": "四月"
  },
  "เอฟ": {
    "phonetic": "oef",
    "meaning": "F"
  },
  "เอฟบีไอ": {
    "phonetic": "oefbii-oi",
    "meaning": "联邦调查局"
  },
  "เอม": {
    "phonetic": "oem",
    "meaning": "M"
  },
  "เอมม่า": {
    "phonetic": "oem-maa",
    "meaning": "艾玛"
  },
  "เอมส์": {
    "phonetic": "oem-s",
    "meaning": "艾姆斯"
  },
  "เอมิลี่": {
    "phonetic": "oe-mi-lii",
    "meaning": "艾米丽"
  },
  "เอมี่": {
    "phonetic": "oe-mii",
    "meaning": "艾米"
  },
  "เอริ": {
    "phonetic": "oeri",
    "meaning": "埃里"
  },
  "เอริก": {
    "phonetic": "oe-rik",
    "meaning": "埃里克"
  },
  "เอริก้า": {
    "phonetic": "oe-rik-aa",
    "meaning": "艾丽卡"
  },
  "เอริค": {
    "phonetic": "oe-rikh",
    "meaning": "埃里克"
  },
  "เอริน": {
    "phonetic": "oe-rin",
    "meaning": "艾琳"
  },
  "เอล": {
    "phonetic": "oel",
    "meaning": "埃尔"
  },
  "เอลซ่า": {
    "phonetic": "oel-saa",
    "meaning": "艾尔莎"
  },
  "เอลนีโญ": {
    "phonetic": "eeo-nii-yoo",
    "meaning": "厄尔尼诺"
  },
  "เอลลิส": {
    "phonetic": "oe-l-lis",
    "meaning": "埃利斯"
  },
  "เอลลี่": {
    "phonetic": "oe-l-lii",
    "meaning": "艾莉"
  },
  "เอลล่า": {
    "phonetic": "oe-l-laa",
    "meaning": "艾拉"
  },
  "เอลวิส": {
    "phonetic": "oe-l-wis",
    "meaning": "埃尔维斯"
  },
  "เอลิสัน": {
    "phonetic": "oe-li-san",
    "meaning": "艾莉森"
  },
  "เอลเลน": {
    "phonetic": "oel-len",
    "meaning": "艾伦"
  },
  "เอส": {
    "phonetic": "oes",
    "meaning": "S"
  },
  "เออ": {
    "phonetic": "oeo",
    "meaning": "是的"
  },
  "เออนี่": {
    "phonetic": "oeo-nii",
    "meaning": "嗯在这里"
  },
  "เออสิ": {
    "phonetic": "oeo-si",
    "meaning": "是的"
  },
  "เออใช่": {
    "phonetic": "oeo-chhai",
    "meaning": "哦是的"
  },
  "เออๆ": {
    "phonetic": "oeo",
    "meaning": "是的"
  },
  "เอะ": {
    "phonetic": "oea",
    "meaning": "呃"
  },
  "เอา": {
    "phonetic": "oeaa",
    "meaning": "拿"
  },
  "เอางี้": {
    "phonetic": "oeaa-ngii",
    "meaning": "拿这个"
  },
  "เอาจริง": {
    "phonetic": "oeaa-chring",
    "meaning": "严重地"
  },
  "เอานะ": {
    "phonetic": "oeaa-na",
    "meaning": "快点"
  },
  "เอานี่": {
    "phonetic": "oeaa-nii",
    "meaning": "这里是"
  },
  "เอาน่า": {
    "phonetic": "oeaa-naa",
    "meaning": "快点"
  },
  "เอามั้ย": {
    "phonetic": "oeaa-may",
    "meaning": "你想要吗"
  },
  "เอามา": {
    "phonetic": "oeaa-maa",
    "meaning": "带上它"
  },
  "เอาละ": {
    "phonetic": "oeaala",
    "meaning": "好的"
  },
  "เอาละนะ": {
    "phonetic": "oeaala-na",
    "meaning": "好的"
  },
  "เอาล่ะ": {
    "phonetic": "oeaa-la",
    "meaning": "好的"
  },
  "เอาล่ะๆ": {
    "phonetic": "oeaa-la",
    "meaning": "好的"
  },
  "เอาสิ": {
    "phonetic": "oeaa-si",
    "meaning": "拿走吧"
  },
  "เอาหละ": {
    "phonetic": "oeaa-la",
    "meaning": "好的"
  },
  "เอาหล่ะ": {
    "phonetic": "oeaa-la",
    "meaning": "好的"
  },
  "เอาอีก": {
    "phonetic": "oeaa-oiik",
    "meaning": "让我们再做一次"
  },
  "เอาเถอะ": {
    "phonetic": "oeaa-theoa",
    "meaning": "快点"
  },
  "เอาเป็น": {
    "phonetic": "oeaa-pen",
    "meaning": "让我们接受吧"
  },
  "เอาเลย": {
    "phonetic": "oeaalei",
    "meaning": "前进"
  },
  "เอาเหอะ": {
    "phonetic": "oeaa-eoa",
    "meaning": "快点"
  },
  "เอาใหม่": {
    "phonetic": "oeaa-aim",
    "meaning": "再拿一下"
  },
  "เอาไงดี": {
    "phonetic": "oeaa-ngi-dii",
    "meaning": "我应该怎么办"
  },
  "เอาไป": {
    "phonetic": "oeaa-pi",
    "meaning": "拿走吧"
  },
  "เอาไปสิ": {
    "phonetic": "oeaa-pi-si",
    "meaning": "拿走吧"
  },
  "เอิร์ล": {
    "phonetic": "oeirl",
    "meaning": "伯爵"
  },
  "เอิ่ม": {
    "phonetic": "oeim",
    "meaning": "嗯"
  },
  "เอิ่มม": {
    "phonetic": "oeimm",
    "meaning": "嗯"
  },
  "เอียน": {
    "phonetic": "oeian",
    "meaning": "伊恩"
  },
  "เอื้อเฟื้อ": {
    "phonetic": "uea-fuea",
    "meaning": "慷慨的"
  },
  "เอเชียทีค": {
    "phonetic": "ee-chīia-thíik",
    "meaning": "摩天轮夜市"
  },
  "เอเดน": {
    "phonetic": "oeden",
    "meaning": "伊甸园"
  },
  "เอเมน": {
    "phonetic": "oe-men",
    "meaning": "阿门"
  },
  "เอเรีย": {
    "phonetic": "oe-reia",
    "meaning": "咏叹调"
  },
  "เอเลน": {
    "phonetic": "oe-len",
    "meaning": "伊莱恩"
  },
  "เอเลน่า": {
    "phonetic": "oe-len-aa",
    "meaning": "埃琳娜"
  },
  "เอ็": {
    "phonetic": "en",
    "meaning": "氮"
  },
  "เอ็ด": {
    "phonetic": "oed",
    "meaning": "埃德"
  },
  "เอ็ดดี้": {
    "phonetic": "oed-dii",
    "meaning": "艾迪"
  },
  "เอ็น": {
    "phonetic": "oen",
    "meaning": "N"
  },
  "เอ็ม": {
    "phonetic": "oem",
    "meaning": "M"
  },
  "เอ็มมา": {
    "phonetic": "oem-maa",
    "meaning": "艾玛"
  },
  "เอ็มม่า": {
    "phonetic": "oemmaa",
    "meaning": "艾玛"
  },
  "เอ็มอาร์ที": {
    "phonetic": "em-aa-aa-thii",
    "meaning": "MRT地铁"
  },
  "เอ่อ": {
    "phonetic": "oeo",
    "meaning": "呃"
  },
  "เอ่อคือ": {
    "phonetic": "oeo-khueo",
    "meaning": "嗯就是这样"
  },
  "เอ่ออ": {
    "phonetic": "oeo-o",
    "meaning": "呃A"
  },
  "เอ่อออ": {
    "phonetic": "oeo-oo",
    "meaning": "呃哦"
  },
  "เอ้": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "เอ้ย": {
    "phonetic": "oei",
    "meaning": "天哪"
  },
  "เอ้อ": {
    "phonetic": "oeo",
    "meaning": "呃"
  },
  "เอ้า": {
    "phonetic": "oeaa",
    "meaning": "哦"
  },
  "เอ้านี่": {
    "phonetic": "oe-aa-nii",
    "meaning": "这里是"
  },
  "เอ๊": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "เอ๊ย": {
    "phonetic": "oei",
    "meaning": "哦"
  },
  "เอ๊ะ": {
    "phonetic": "oea",
    "meaning": "呃"
  },
  "เอ๋": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "เฮ": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "เฮจู": {
    "phonetic": "hechuu",
    "meaning": "何居"
  },
  "เฮนรี่": {
    "phonetic": "he-nrii",
    "meaning": "亨利"
  },
  "เฮย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "เฮย์": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "เฮริน": {
    "phonetic": "he-rin",
    "meaning": "海林"
  },
  "เฮล": {
    "phonetic": "hel",
    "meaning": "哈尔"
  },
  "เฮลี่ย์": {
    "phonetic": "he-lii-y",
    "meaning": "海莉"
  },
  "เฮลโล": {
    "phonetic": "hello",
    "meaning": "你好"
  },
  "เฮลโหล": {
    "phonetic": "hel-ol",
    "meaning": "你好"
  },
  "เฮอะ": {
    "phonetic": "heoa",
    "meaning": "嘿"
  },
  "เฮาส์": {
    "phonetic": "heaa-s",
    "meaning": "房子"
  },
  "เฮเลน": {
    "phonetic": "he-len",
    "meaning": "海伦"
  },
  "เฮเลน่า": {
    "phonetic": "he-len-aa",
    "meaning": "海伦娜"
  },
  "เฮ็นรี่": {
    "phonetic": "he-nrii",
    "meaning": "亨利"
  },
  "เฮ่": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "เฮ่ย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "เฮ่อ": {
    "phonetic": "heo",
    "meaning": "嘿"
  },
  "เฮ้": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "เฮ้พวก": {
    "phonetic": "he-phwk",
    "meaning": "嘿伙计们"
  },
  "เฮ้ย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "เฮ้อ": {
    "phonetic": "heo",
    "meaning": "叹"
  },
  "เฮ้ๆ": {
    "phonetic": "he-he",
    "meaning": "嘿嘿"
  },
  "เฮ้ๆๆ": {
    "phonetic": "he-he",
    "meaning": "嘿嘿"
  },
  "เ่อ่อ": {
    "phonetic": "eoo",
    "meaning": "嗯嗯"
  },
  "แก": {
    "phonetic": "kae",
    "meaning": "你"
  },
  "แกง": {
    "phonetic": "gaeng",
    "meaning": "咖喱/汤"
  },
  "แกงส้ม": {
    "phonetic": "gaeng-som",
    "meaning": "酸汤"
  },
  "แกงเขียวหวาน": {
    "phonetic": "gaeng-khiao-waan",
    "meaning": "绿咖喱"
  },
  "แกงเขียวหวานไก่": {
    "phonetic": "gaeng-khiao-waan-gai",
    "meaning": "绿咖喱鸡"
  },
  "แกงเผ็ด": {
    "phonetic": "gaeng-phet",
    "meaning": "红咖喱"
  },
  "แกงเผ็ดเป็ดย่าง": {
    "phonetic": "gaeng-phet-bpet-yaang",
    "meaning": "红咖喱烤鸭"
  },
  "แกตาย": {
    "phonetic": "kae-taay",
    "meaning": "你死了"
  },
  "แกบบี้": {
    "phonetic": "kaeb-bii",
    "meaning": "爱嘉比"
  },
  "แกรนด์": {
    "phonetic": "kae-rnd",
    "meaning": "盛大"
  },
  "แกรนท์": {
    "phonetic": "kae-rnth",
    "meaning": "授予"
  },
  "แกรี่": {
    "phonetic": "kae-rii",
    "meaning": "加里"
  },
  "แกะ": {
    "phonetic": "kàe",
    "meaning": "剥开/雕刻/羊"
  },
  "แกโกหก": {
    "phonetic": "kae-kok",
    "meaning": "你撒谎了"
  },
  "แก่": {
    "phonetic": "gae",
    "meaning": "给/老年"
  },
  "แก้": {
    "phonetic": "gâe",
    "meaning": "解决"
  },
  "แก้ว": {
    "phonetic": "kaew",
    "meaning": "玻璃"
  },
  "แก้แค้น": {
    "phonetic": "kae-khaen",
    "meaning": "复仇"
  },
  "แก้ไข": {
    "phonetic": "gae-khai",
    "meaning": "解决/修正"
  },
  "แก๊บบี้": {
    "phonetic": "kaeb-bii",
    "meaning": "爱嘉比"
  },
  "แขก": {
    "phonetic": "khàek",
    "meaning": "客人"
  },
  "แขน": {
    "phonetic": "khǎen",
    "meaning": "手臂"
  },
  "แข็ง": {
    "phonetic": "khaeng",
    "meaning": "冰/硬"
  },
  "แข็งแรง": {
    "phonetic": "khaeng-raeng",
    "meaning": "强的"
  },
  "แข่งขัน": {
    "phonetic": "khàeng-khǎn",
    "meaning": "竞争"
  },
  "แคซซี่": {
    "phonetic": "khaes-sii",
    "meaning": "卡西"
  },
  "แคตนิส": {
    "phonetic": "khae-tnis",
    "meaning": "凯特尼斯"
  },
  "แคท": {
    "phonetic": "khaeth",
    "meaning": "吉"
  },
  "แคทนิส": {
    "phonetic": "khae-thnis",
    "meaning": "凯特尼斯"
  },
  "แคธี่": {
    "phonetic": "khae-thii",
    "meaning": "凯茜"
  },
  "แคนดี้": {
    "phonetic": "khaen-dii",
    "meaning": "糖果"
  },
  "แคนาดา": {
    "phonetic": "khaenaadaa",
    "meaning": "加拿大"
  },
  "แคบหมู": {
    "phonetic": "khâep-muu",
    "meaning": "猪皮"
  },
  "แคม": {
    "phonetic": "khaem",
    "meaning": "阴唇"
  },
  "แคมเปญ": {
    "phonetic": "khaem-peen",
    "meaning": "活动"
  },
  "แครอล": {
    "phonetic": "khae-rol",
    "meaning": "颂歌"
  },
  "แครี่": {
    "phonetic": "khae-rii",
    "meaning": "凯里"
  },
  "แคร์รี่": {
    "phonetic": "khaer-rii",
    "meaning": "嘉莉"
  },
  "แคล": {
    "phonetic": "khael",
    "meaning": "卡尔"
  },
  "แคลน": {
    "phonetic": "khlaen",
    "meaning": "氏族"
  },
  "แคลร์": {
    "phonetic": "khae-lr",
    "meaning": "克莱尔"
  },
  "แคลลี่": {
    "phonetic": "khae-l-lii",
    "meaning": "凯莉"
  },
  "แคส": {
    "phonetic": "khaes",
    "meaning": "卡斯"
  },
  "แคสซี่": {
    "phonetic": "khaes-sii",
    "meaning": "卡西"
  },
  "แคสเซิล": {
    "phonetic": "khae-s-seil",
    "meaning": "城堡"
  },
  "แค่": {
    "phonetic": "khae",
    "meaning": "只是"
  },
  "แค่นั้น": {
    "phonetic": "khae-nan",
    "meaning": "就是这样"
  },
  "แค่นี้": {
    "phonetic": "khae-nii",
    "meaning": "就这样"
  },
  "แค่ไหน": {
    "phonetic": "khae-in",
    "meaning": "多少"
  },
  "แจ": {
    "phonetic": "chae",
    "meaning": "杰"
  },
  "แจก": {
    "phonetic": "jàek",
    "meaning": "交易"
  },
  "แจจุง": {
    "phonetic": "chae-chung",
    "meaning": "杰中"
  },
  "แจซอก": {
    "phonetic": "chae-sok",
    "meaning": "杰苏克"
  },
  "แจอิน": {
    "phonetic": "chae-oin",
    "meaning": "在仁"
  },
  "แจฮี": {
    "phonetic": "chaehii",
    "meaning": "杰熙"
  },
  "แจ็ค": {
    "phonetic": "chaekh",
    "meaning": "杰克"
  },
  "แจ็คกี้": {
    "phonetic": "chaekh-kii",
    "meaning": "杰基"
  },
  "แจ็คสัน": {
    "phonetic": "chaekh-san",
    "meaning": "杰克逊"
  },
  "แจ่ม": {
    "phonetic": "chaem",
    "meaning": "惊人的"
  },
  "แจ้ง": {
    "phonetic": "jâeng",
    "meaning": "通知"
  },
  "แจ๊ค": {
    "phonetic": "chaekh",
    "meaning": "杰克"
  },
  "แจ๊คสัน": {
    "phonetic": "chaekh-san",
    "meaning": "杰克逊"
  },
  "แจ๊ส": {
    "phonetic": "chaes",
    "meaning": "爵士乐"
  },
  "แจ๋ว": {
    "phonetic": "chaew",
    "meaning": "凉爽的"
  },
  "แจ๋วมาก": {
    "phonetic": "chaew-maak",
    "meaning": "非常酷"
  },
  "แจ๋วเลย": {
    "phonetic": "chaew-lei",
    "meaning": "太酷了"
  },
  "แชง": {
    "phonetic": "chhaeng",
    "meaning": "张"
  },
  "แชด": {
    "phonetic": "chhaed",
    "meaning": "乍得"
  },
  "แชนนอน": {
    "phonetic": "chhae-n-non",
    "meaning": "香农"
  },
  "แชนน่อน": {
    "phonetic": "chhae-nnon",
    "meaning": "香农"
  },
  "แชมป์": {
    "phonetic": "chhaemp",
    "meaning": "冠军"
  },
  "แชร์": {
    "phonetic": "chaer",
    "meaning": "分享"
  },
  "แช่": {
    "phonetic": "châe",
    "meaning": "浸泡"
  },
  "แซค": {
    "phonetic": "saekh",
    "meaning": "扎克"
  },
  "แซนดี้": {
    "phonetic": "saen-dii",
    "meaning": "沙"
  },
  "แซม": {
    "phonetic": "saem",
    "meaning": "萨姆"
  },
  "แซมมวล": {
    "phonetic": "saem-mwl",
    "meaning": "塞缪尔"
  },
  "แซมมี่": {
    "phonetic": "saem-mii",
    "meaning": "萨米"
  },
  "แซลลี่": {
    "phonetic": "sae-l-lii",
    "meaning": "莎莉"
  },
  "แด": {
    "phonetic": "dae",
    "meaning": "岱"
  },
  "แดง": {
    "phonetic": "daeng",
    "meaning": "红色的"
  },
  "แดชบอร์ด": {
    "phonetic": "dáet-bɔ̀ɔt",
    "meaning": "仪表盘/控制台"
  },
  "แดซอง": {
    "phonetic": "dae-song",
    "meaning": "大成"
  },
  "แดด": {
    "phonetic": "dtàet",
    "meaning": "阳光"
  },
  "แดน": {
    "phonetic": "daen",
    "meaning": "担"
  },
  "แดนนี่": {
    "phonetic": "daen-nii",
    "meaning": "丹尼"
  },
  "แดริล": {
    "phonetic": "dae-ril",
    "meaning": "达里尔"
  },
  "แดวุง": {
    "phonetic": "dae-wung",
    "meaning": "大雄"
  },
  "แดเนียล": {
    "phonetic": "dae-neia-l",
    "meaning": "丹尼尔"
  },
  "แด่": {
    "phonetic": "dae",
    "meaning": "到"
  },
  "แตก": {
    "phonetic": "dtàek",
    "meaning": "休息"
  },
  "แตกต่าง": {
    "phonetic": "taek-taang",
    "meaning": "不同的"
  },
  "แตกหัก": {
    "phonetic": "dtaek-hak",
    "meaning": "决定性"
  },
  "แตงโม": {
    "phonetic": "taeng-mo",
    "meaning": "西瓜"
  },
  "แตน": {
    "phonetic": "dtaen",
    "meaning": "大黄蜂"
  },
  "แตะ": {
    "phonetic": "tɛ̀",
    "meaning": "触摸/轻碰"
  },
  "แต่": {
    "phonetic": "tae",
    "meaning": "但"
  },
  "แต่ก็": {
    "phonetic": "tae-k",
    "meaning": "但"
  },
  "แต่ก็นะ": {
    "phonetic": "tae-k-na",
    "meaning": "但无论如何"
  },
  "แต่คุณ": {
    "phonetic": "tae-khun",
    "meaning": "但你"
  },
  "แต่ง": {
    "phonetic": "dtàeng",
    "meaning": "装扮"
  },
  "แต่งงาน": {
    "phonetic": "taengngaan",
    "meaning": "已婚"
  },
  "แต่จริง": {
    "phonetic": "tae-chring",
    "meaning": "但事实如此"
  },
  "แต่ฉัน": {
    "phonetic": "tae-chhan",
    "meaning": "但我"
  },
  "แต่ถ้า": {
    "phonetic": "tae-thaa",
    "meaning": "但如果"
  },
  "แต่ทว่า": {
    "phonetic": "tae-thwaa",
    "meaning": "但是"
  },
  "แต่ทำไม": {
    "phonetic": "tae-thami",
    "meaning": "但为什么"
  },
  "แต่นั่น": {
    "phonetic": "tae-nan",
    "meaning": "但那样"
  },
  "แต่นาย": {
    "phonetic": "tae-naay",
    "meaning": "但先生"
  },
  "แต่นี่": {
    "phonetic": "tae-nii",
    "meaning": "但是这个"
  },
  "แต่ผม": {
    "phonetic": "tae-phm",
    "meaning": "但我"
  },
  "แต่มัน": {
    "phonetic": "tae-man",
    "meaning": "但它"
  },
  "แต่ละ": {
    "phonetic": "dtàe-lá",
    "meaning": "每个"
  },
  "แต่ว่า": {
    "phonetic": "tae-waa",
    "meaning": "但"
  },
  "แต่อะไร": {
    "phonetic": "tae-oari",
    "meaning": "但什么"
  },
  "แต่เขา": {
    "phonetic": "tae-kheaa",
    "meaning": "但他"
  },
  "แต่เป็น": {
    "phonetic": "tae-pen",
    "meaning": "但确实如此"
  },
  "แต่เรา": {
    "phonetic": "tae-reaa",
    "meaning": "但我们"
  },
  "แต่เอ่อ": {
    "phonetic": "tae-oeo",
    "meaning": "但是呃"
  },
  "แต่แล้ว": {
    "phonetic": "tae-laew",
    "meaning": "但然后"
  },
  "แต่ใช่": {
    "phonetic": "tae-chhai",
    "meaning": "但是是的"
  },
  "แต่ไม่": {
    "phonetic": "tae-mi",
    "meaning": "但没有"
  },
  "แต้ม": {
    "phonetic": "taem",
    "meaning": "积分"
  },
  "แถม": {
    "phonetic": "thaem",
    "meaning": "加"
  },
  "แถลง": {
    "phonetic": "tha-laeng",
    "meaning": "陈述"
  },
  "แถว": {
    "phonetic": "thaew",
    "meaning": "排"
  },
  "แถวๆ": {
    "phonetic": "thaew",
    "meaning": "大约"
  },
  "แท": {
    "phonetic": "thae",
    "meaning": "泰"
  },
  "แทจุน": {
    "phonetic": "thae-chun",
    "meaning": "泰俊"
  },
  "แทซอง": {
    "phonetic": "thae-song",
    "meaning": "泰成"
  },
  "แทน": {
    "phonetic": "thaen",
    "meaning": "反而"
  },
  "แทรกแซง": {
    "phonetic": "saek-saeng",
    "meaning": "干预"
  },
  "แทโฮ": {
    "phonetic": "thaeho",
    "meaning": "泰浩"
  },
  "แท็กซี่": {
    "phonetic": "thaeksii",
    "meaning": "出租车"
  },
  "แท้": {
    "phonetic": "tháe",
    "meaning": "真正的/纯正的"
  },
  "แท๊กซี่": {
    "phonetic": "thaek-sii",
    "meaning": "出租车"
  },
  "แนนซี่": {
    "phonetic": "naen-sii",
    "meaning": "南希"
  },
  "แนบ": {
    "phonetic": "nâep",
    "meaning": "附上/附件"
  },
  "แนว": {
    "phonetic": "naeo",
    "meaning": "条纹"
  },
  "แนวคิด": {
    "phonetic": "naeo-khit",
    "meaning": "概念"
  },
  "แนะ": {
    "phonetic": "né",
    "meaning": "推荐"
  },
  "แนะนำ": {
    "phonetic": "nae-nam",
    "meaning": "介绍/推荐"
  },
  "แน่": {
    "phonetic": "nae",
    "meaning": "确实"
  },
  "แน่น": {
    "phonetic": "nâen",
    "meaning": "紧的"
  },
  "แน่นอน": {
    "phonetic": "naenon",
    "meaning": "确实"
  },
  "แน่นะ": {
    "phonetic": "nae-na",
    "meaning": "确实"
  },
  "แน่นแฟ้น": {
    "phonetic": "nâen-fáen",
    "meaning": "稳定地"
  },
  "แน่ละ": {
    "phonetic": "nae-la",
    "meaning": "确实"
  },
  "แน่ล่ะ": {
    "phonetic": "nae-la",
    "meaning": "确实"
  },
  "แน่สิ": {
    "phonetic": "nae-si",
    "meaning": "确实"
  },
  "แน่ใจ": {
    "phonetic": "naechai",
    "meaning": "当然"
  },
  "แน่ใจนะ": {
    "phonetic": "naechai-na",
    "meaning": "我敢肯定"
  },
  "แน่ใจสิ": {
    "phonetic": "naechai-si",
    "meaning": "当然"
  },
  "แน่ๆ": {
    "phonetic": "nae",
    "meaning": "确实"
  },
  "แบ": {
    "phonetic": "bae",
    "meaning": "平坦的"
  },
  "แบต": {
    "phonetic": "bàet",
    "meaning": "电池"
  },
  "แบตเตอรี่": {
    "phonetic": "bàet-dtoe-rîi",
    "meaning": "电池"
  },
  "แบทแมน": {
    "phonetic": "bae-th-maen",
    "meaning": "蝙蝠侠"
  },
  "แบบ": {
    "phonetic": "baeb",
    "meaning": "模型"
  },
  "แบบนั้น": {
    "phonetic": "baep-nan",
    "meaning": "就这样"
  },
  "แบบนี้": {
    "phonetic": "baeb-nii",
    "meaning": "像这样"
  },
  "แบบว่า": {
    "phonetic": "baeb-waa",
    "meaning": "就这样"
  },
  "แบบไหน": {
    "phonetic": "baeb-in",
    "meaning": "什么样的"
  },
  "แบมบี้": {
    "phonetic": "baem-bii",
    "meaning": "小鹿斑比"
  },
  "แบรด": {
    "phonetic": "baerd",
    "meaning": "布拉德"
  },
  "แบรนดอน": {
    "phonetic": "bae-rn-don",
    "meaning": "布兰登"
  },
  "แบรนด์": {
    "phonetic": "braen",
    "meaning": "品牌"
  },
  "แบรนแดน": {
    "phonetic": "bae-rn-daen",
    "meaning": "布兰丹"
  },
  "แบรี่": {
    "phonetic": "bae-rii",
    "meaning": "巴里"
  },
  "แบร์": {
    "phonetic": "baer",
    "meaning": "熊"
  },
  "แบร์รี่": {
    "phonetic": "baer-rii",
    "meaning": "巴里"
  },
  "แบลร์": {
    "phonetic": "bae-lr",
    "meaning": "布莱尔"
  },
  "แบล็ก": {
    "phonetic": "bae-lk",
    "meaning": "黑色的"
  },
  "แบล็ค": {
    "phonetic": "bae-lkh",
    "meaning": "黑色的"
  },
  "แบส": {
    "phonetic": "baes",
    "meaning": "低音"
  },
  "แบ่ง": {
    "phonetic": "bàeng",
    "meaning": "分离"
  },
  "แปด": {
    "phonetic": "paed",
    "meaning": "八"
  },
  "แปปนึง": {
    "phonetic": "pae-pnueng",
    "meaning": "一会儿"
  },
  "แปล": {
    "phonetic": "bplae",
    "meaning": "翻译"
  },
  "แปลก": {
    "phonetic": "paelk",
    "meaning": "奇怪的"
  },
  "แปลกจัง": {
    "phonetic": "paelk-chang",
    "meaning": "太奇怪了"
  },
  "แปลกนะ": {
    "phonetic": "paelk-na",
    "meaning": "很奇怪"
  },
  "แปลกมาก": {
    "phonetic": "paelk-maak",
    "meaning": "很奇怪"
  },
  "แปลกๆ": {
    "phonetic": "paelk",
    "meaning": "奇怪的"
  },
  "แปลว่า": {
    "phonetic": "pael-waa",
    "meaning": "意义"
  },
  "แปลโดย": {
    "phonetic": "pael-doy",
    "meaning": "翻译自"
  },
  "แปะ": {
    "phonetic": "bpàe",
    "meaning": "粘贴"
  },
  "แป้ง": {
    "phonetic": "pâeŋ",
    "meaning": "面粉/面团/面皮"
  },
  "แป๊บนึง": {
    "phonetic": "paeb-nueng",
    "meaning": "一会儿"
  },
  "แผง": {
    "phonetic": "phǎeŋ",
    "meaning": "板/排/量词"
  },
  "แผน": {
    "phonetic": "phaen",
    "meaning": "计划"
  },
  "แผนก": {
    "phonetic": "phà-nàek",
    "meaning": "部门/科室"
  },
  "แผนกการเงิน": {
    "phonetic": "phà-nàek-kaan-ŋən",
    "meaning": "财务部"
  },
  "แผนการ": {
    "phonetic": "phaen-gaan",
    "meaning": "计划"
  },
  "แผนกำหนดการ": {
    "phonetic": "phǎen-kàm-nòt-kaan",
    "meaning": "时间表/进度计划"
  },
  "แผนที่": {
    "phonetic": "phaenthii",
    "meaning": "地图"
  },
  "แผนผัง": {
    "phonetic": "phaen-phǎng",
    "meaning": "图表"
  },
  "แผล": {
    "phonetic": "phǎen",
    "meaning": "伤口"
  },
  "แผ่": {
    "phonetic": "phàe",
    "meaning": "传播"
  },
  "แผ่น": {
    "phonetic": "phàen",
    "meaning": "张/片/量词"
  },
  "แพง": {
    "phonetic": "phaeng",
    "meaning": "贵"
  },
  "แพตตี้": {
    "phonetic": "phae-t-tii",
    "meaning": "帕蒂"
  },
  "แพททริค": {
    "phonetic": "phaeth-thrikh",
    "meaning": "帕特里克"
  },
  "แพทย์": {
    "phonetic": "phâet",
    "meaning": "医师"
  },
  "แพทริก": {
    "phonetic": "phae-thrik",
    "meaning": "帕特里克"
  },
  "แพทริค": {
    "phonetic": "phae-thrikh",
    "meaning": "帕特里克"
  },
  "แพน": {
    "phonetic": "phaen",
    "meaning": "平底锅"
  },
  "แพนด้า": {
    "phonetic": "phaendaa",
    "meaning": "熊猫"
  },
  "แพม": {
    "phonetic": "phaem",
    "meaning": "帕姆"
  },
  "แพลตฟอร์ม": {
    "phonetic": "phaet-fɔɔm",
    "meaning": "平台"
  },
  "แพลตฟอร์มการจัดการเรียนการสอน": {
    "phonetic": "phaet-fɔɔm-gaan-jat-gaan-rian-gaan-sɔ̌ɔn",
    "meaning": "在线学习平台"
  },
  "แพ็ก": {
    "phonetic": "phaek",
    "meaning": "盒"
  },
  "แพ็กเกจ": {
    "phonetic": "pháek-gèt",
    "meaning": "套餐/包"
  },
  "แพ็ค": {
    "phonetic": "phaek",
    "meaning": "盒"
  },
  "แพ้": {
    "phonetic": "phae",
    "meaning": "丢失的"
  },
  "แฟต": {
    "phonetic": "faet",
    "meaning": "胖的"
  },
  "แฟน": {
    "phonetic": "faen",
    "meaning": "男朋友"
  },
  "แฟรงกี้": {
    "phonetic": "fae-rng-kii",
    "meaning": "弗兰基"
  },
  "แฟรงก์": {
    "phonetic": "fae-rngk",
    "meaning": "坦率"
  },
  "แฟรงค์": {
    "phonetic": "faerngkh",
    "meaning": "坦率"
  },
  "แฟลช": {
    "phonetic": "faelchh",
    "meaning": "闪光"
  },
  "แมกกี้": {
    "phonetic": "maek-kii",
    "meaning": "玛吉"
  },
  "แมกซ์": {
    "phonetic": "maek-s",
    "meaning": "最大限度"
  },
  "แมค": {
    "phonetic": "maekh",
    "meaning": "苹果"
  },
  "แมดดี้": {
    "phonetic": "maed-dii",
    "meaning": "麦迪"
  },
  "แมต": {
    "phonetic": "maet",
    "meaning": "马特"
  },
  "แมตต์": {
    "phonetic": "maett",
    "meaning": "马特"
  },
  "แมท": {
    "phonetic": "maeth",
    "meaning": "马特"
  },
  "แมทท์": {
    "phonetic": "maethth",
    "meaning": "马特"
  },
  "แมทธิว": {
    "phonetic": "mae-ththi-w",
    "meaning": "马修"
  },
  "แมน": {
    "phonetic": "maen",
    "meaning": "男人"
  },
  "แมนดี้": {
    "phonetic": "maen-dii",
    "meaning": "曼迪"
  },
  "แมนนี่": {
    "phonetic": "maen-nii",
    "meaning": "曼尼"
  },
  "แมรี่": {
    "phonetic": "maerii",
    "meaning": "玛丽"
  },
  "แมว": {
    "phonetic": "maew",
    "meaning": "猫"
  },
  "แม็กกี้": {
    "phonetic": "mae-kkii",
    "meaning": "玛吉"
  },
  "แม็กซ์": {
    "phonetic": "maeks",
    "meaning": "最大限度"
  },
  "แม็ค": {
    "phonetic": "maekh",
    "meaning": "苹果"
  },
  "แม็คคอย": {
    "phonetic": "maekh-khoy",
    "meaning": "麦考伊"
  },
  "แม็ท": {
    "phonetic": "maeth",
    "meaning": "马特"
  },
  "แม่": {
    "phonetic": "mae",
    "meaning": "母亲"
  },
  "แม่ขา": {
    "phonetic": "mae-khaa",
    "meaning": "母亲"
  },
  "แม่ครับ": {
    "phonetic": "mae-khrab",
    "meaning": "妈妈"
  },
  "แม่คะ": {
    "phonetic": "mae-kha",
    "meaning": "妈妈"
  },
  "แม่คุณ": {
    "phonetic": "maekhun",
    "meaning": "你的母亲"
  },
  "แม่ค่ะ": {
    "phonetic": "mae-kha",
    "meaning": "妈妈"
  },
  "แม่ง": {
    "phonetic": "maeng",
    "meaning": "他妈的"
  },
  "แม่จ๋า": {
    "phonetic": "mae-chaa",
    "meaning": "母亲"
  },
  "แม่ฉัน": {
    "phonetic": "mae-chhan",
    "meaning": "我的母亲"
  },
  "แม่นาง": {
    "phonetic": "mae-naang",
    "meaning": "女士"
  },
  "แม่น้ำ": {
    "phonetic": "mâe-náam",
    "meaning": "河"
  },
  "แม่ผม": {
    "phonetic": "mae-phm",
    "meaning": "我的母亲"
  },
  "แม่มด": {
    "phonetic": "maemd",
    "meaning": "巫婆"
  },
  "แม่รู้": {
    "phonetic": "mae-ruu",
    "meaning": "妈妈知道"
  },
  "แม่ว่า": {
    "phonetic": "mae-waa",
    "meaning": "妈妈说"
  },
  "แม่หนู": {
    "phonetic": "mae-nuu",
    "meaning": "我的母亲"
  },
  "แม่ฮะ": {
    "phonetic": "mae-ha",
    "meaning": "妈妈"
  },
  "แม่เจ้า": {
    "phonetic": "mae-cheaa",
    "meaning": "我的天啊"
  },
  "แม้": {
    "phonetic": "máe",
    "meaning": "即便/虽然"
  },
  "แม้ว่า": {
    "phonetic": "máe-wâa",
    "meaning": "虽然/尽管"
  },
  "แม้แต่": {
    "phonetic": "maetae",
    "meaning": "甚至"
  },
  "แม๊กซ์": {
    "phonetic": "maeks",
    "meaning": "最大限度"
  },
  "แยก": {
    "phonetic": "yâek",
    "meaning": "分离"
  },
  "แย่": {
    "phonetic": "yae",
    "meaning": "坏的"
  },
  "แย่จริง": {
    "phonetic": "yae-chring",
    "meaning": "真的很糟糕"
  },
  "แย่จัง": {
    "phonetic": "yae-chang",
    "meaning": "太糟糕了"
  },
  "แย่มาก": {
    "phonetic": "yae-maak",
    "meaning": "非常糟糕"
  },
  "แย่ละ": {
    "phonetic": "yae-la",
    "meaning": "那很糟糕"
  },
  "แย่ล่ะ": {
    "phonetic": "yae-la",
    "meaning": "那很糟糕"
  },
  "แย่แล้ว": {
    "phonetic": "yae-laew",
    "meaning": "那很糟糕"
  },
  "แรก": {
    "phonetic": "râek",
    "meaning": "第一的"
  },
  "แรง": {
    "phonetic": "raeng",
    "meaning": "强/力"
  },
  "แรนดอล": {
    "phonetic": "raendol",
    "meaning": "兰德尔"
  },
  "แรนดี้": {
    "phonetic": "raen-dii",
    "meaning": "兰迪"
  },
  "แรบบิท": {
    "phonetic": "raep-bít",
    "meaning": "兔子"
  },
  "แรมโบ้": {
    "phonetic": "raem-bo",
    "meaning": "兰博"
  },
  "แรลลี่": {
    "phonetic": "raellii",
    "meaning": "集会"
  },
  "แร่": {
    "phonetic": "râe",
    "meaning": "矿物"
  },
  "แล": {
    "phonetic": "lae",
    "meaning": "看/莱"
  },
  "แลก": {
    "phonetic": "lâek",
    "meaning": "兑换"
  },
  "แลกเหรียญ": {
    "phonetic": "lâek-rǐan",
    "meaning": "换零钱"
  },
  "แลนซ์": {
    "phonetic": "laen-s",
    "meaning": "槊"
  },
  "แลรี่": {
    "phonetic": "lae-rii",
    "meaning": "拉里"
  },
  "แลร์รี่": {
    "phonetic": "laer-rii",
    "meaning": "拉里"
  },
  "และ": {
    "phonetic": "lae",
    "meaning": "和"
  },
  "และก็": {
    "phonetic": "laea-k",
    "meaning": "还有"
  },
  "และคุณ": {
    "phonetic": "laea-khun",
    "meaning": "你呢"
  },
  "และฉัน": {
    "phonetic": "laea-chhan",
    "meaning": "还有我"
  },
  "และทำไม": {
    "phonetic": "laea-thami",
    "meaning": "以及为什么"
  },
  "และนั่น": {
    "phonetic": "laea-nan",
    "meaning": "还有那个"
  },
  "และนาย": {
    "phonetic": "laea-naay",
    "meaning": "和先生"
  },
  "และนี่": {
    "phonetic": "laea-nii",
    "meaning": "还有这个"
  },
  "และผม": {
    "phonetic": "laea-phm",
    "meaning": "还有我"
  },
  "และมัน": {
    "phonetic": "laea-man",
    "meaning": "还有它"
  },
  "และอีก": {
    "phonetic": "laea-oiik",
    "meaning": "还有另一个"
  },
  "และอื่น": {
    "phonetic": "laea-ouen",
    "meaning": "等等"
  },
  "และเขา": {
    "phonetic": "laea-kheaa",
    "meaning": "还有他"
  },
  "และเอ่อ": {
    "phonetic": "laea-oeo",
    "meaning": "还有呃"
  },
  "และแล้ว": {
    "phonetic": "laea-laew",
    "meaning": "进而"
  },
  "และใช่": {
    "phonetic": "laea-chhai",
    "meaning": "是的"
  },
  "แล้ง": {
    "phonetic": "láeng",
    "meaning": "干旱"
  },
  "แล้ว": {
    "phonetic": "laew",
    "meaning": "已经 / 然后 / 了"
  },
  "แล้วกัน": {
    "phonetic": "laew-kan",
    "meaning": "然后"
  },
  "แล้วก็": {
    "phonetic": "laew-k",
    "meaning": "进而"
  },
  "แล้วคุณ": {
    "phonetic": "laew-khun",
    "meaning": "你呢"
  },
  "แล้วฉัน": {
    "phonetic": "laew-chhan",
    "meaning": "然后我"
  },
  "แล้วถ้า": {
    "phonetic": "laew-thaa",
    "meaning": "如果"
  },
  "แล้วนะ": {
    "phonetic": "laew-na",
    "meaning": "已经"
  },
  "แล้วนาย": {
    "phonetic": "laew-naay",
    "meaning": "还有先生"
  },
  "แล้วนี่": {
    "phonetic": "laew-nii",
    "meaning": "还有这个"
  },
  "แล้วล่ะ": {
    "phonetic": "laew-la",
    "meaning": "进而"
  },
  "แล้วไง": {
    "phonetic": "laew-ngi",
    "meaning": "所以呢"
  },
  "แวดล้อม": {
    "phonetic": "waet-lɔ́ɔm",
    "meaning": "环境"
  },
  "แวน": {
    "phonetic": "waen",
    "meaning": "范"
  },
  "แวมไพร์": {
    "phonetic": "waemphir",
    "meaning": "吸血鬼"
  },
  "แวะ": {
    "phonetic": "wá",
    "meaning": "顺便过来"
  },
  "แสง": {
    "phonetic": "saeng",
    "meaning": "光/光线"
  },
  "แสงอาทิตย์": {
    "phonetic": "sǎeng-aa-thít",
    "meaning": "太阳光/太阳能"
  },
  "แสดง": {
    "phonetic": "sa-daeng",
    "meaning": "展示/演出"
  },
  "แสดงว่า": {
    "phonetic": "saedng-waa",
    "meaning": "表明这一点"
  },
  "แสน": {
    "phonetic": "saen",
    "meaning": "十万"
  },
  "แหงล่ะ": {
    "phonetic": "aeng-la",
    "meaning": "当然"
  },
  "แหงสิ": {
    "phonetic": "aeng-si",
    "meaning": "当然"
  },
  "แหม": {
    "phonetic": "aem",
    "meaning": "哦"
  },
  "แหม่": {
    "phonetic": "aem",
    "meaning": "哇"
  },
  "แหม่ม": {
    "phonetic": "aemm",
    "meaning": "女士"
  },
  "แหละ": {
    "phonetic": "aela",
    "meaning": "这是正确的"
  },
  "แหล่ง": {
    "phonetic": "lèeng",
    "meaning": "来源"
  },
  "แหวน": {
    "phonetic": "aewn",
    "meaning": "戒指"
  },
  "แหวะ": {
    "phonetic": "aewa",
    "meaning": "哈哈"
  },
  "แห่ง": {
    "phonetic": "aeng",
    "meaning": "的"
  },
  "แห้ง": {
    "phonetic": "hâeŋ",
    "meaning": "干的/干燥"
  },
  "แอคชั่น": {
    "phonetic": "oae-khchhan",
    "meaning": "行动"
  },
  "แอคเซิล": {
    "phonetic": "oae-kh-seil",
    "meaning": "阿克塞尔"
  },
  "แอง": {
    "phonetic": "oaeng",
    "meaning": "安"
  },
  "แองกัส": {
    "phonetic": "oae-ngkas",
    "meaning": "安格斯"
  },
  "แองจี้": {
    "phonetic": "oaeng-chii",
    "meaning": "安吉"
  },
  "แองเจิล": {
    "phonetic": "oaeng-cheil",
    "meaning": "天使"
  },
  "แอช": {
    "phonetic": "oaechh",
    "meaning": "灰"
  },
  "แอชลีย์": {
    "phonetic": "oae-chhlii-y",
    "meaning": "阿什利"
  },
  "แอน": {
    "phonetic": "oaen",
    "meaning": "安"
  },
  "แอนดริว": {
    "phonetic": "oaen-driw",
    "meaning": "安德鲁"
  },
  "แอนดรู": {
    "phonetic": "oaen-druu",
    "meaning": "安德鲁"
  },
  "แอนดี้": {
    "phonetic": "oaen-dii",
    "meaning": "安迪"
  },
  "แอนด์": {
    "phonetic": "oaend",
    "meaning": "和"
  },
  "แอนทอน": {
    "phonetic": "oae-nthon",
    "meaning": "安托万"
  },
  "แอนนา": {
    "phonetic": "oae-n-naa",
    "meaning": "安娜"
  },
  "แอนนี่": {
    "phonetic": "oae-n-nii",
    "meaning": "安妮"
  },
  "แอนน์": {
    "phonetic": "oae-nn",
    "meaning": "安妮"
  },
  "แอนา": {
    "phonetic": "oaenaa",
    "meaning": "安娜"
  },
  "แอบบี้": {
    "phonetic": "oaeb-bii",
    "meaning": "艾比"
  },
  "แอป": {
    "phonetic": "aep",
    "meaning": "APP/应用"
  },
  "แอปพลิเคชัน": {
    "phonetic": "aep-phlí-khee-chan",
    "meaning": "应用"
  },
  "แอปเปิดไม่ขึ้น": {
    "phonetic": "aep-bpeet-mai-khʉn",
    "meaning": "APP打不开"
  },
  "แอฟริกา": {
    "phonetic": "aep-ri-gaa",
    "meaning": "非洲"
  },
  "แอรอน": {
    "phonetic": "oae-ron",
    "meaning": "亚伦"
  },
  "แอร์": {
    "phonetic": "ae",
    "meaning": "空调"
  },
  "แอล": {
    "phonetic": "oael",
    "meaning": "L"
  },
  "แอลเอ": {
    "phonetic": "oael-oe",
    "meaning": "洛杉矶"
  },
  "แอสทริด": {
    "phonetic": "oae-s-thrid",
    "meaning": "阿斯特丽德"
  },
  "แอ็กเซล": {
    "phonetic": "oaek-sel",
    "meaning": "阿克塞尔"
  },
  "แอ็บบี้": {
    "phonetic": "oaeb-bii",
    "meaning": "艾比"
  },
  "แอ๊บบี้": {
    "phonetic": "oaeb-bii",
    "meaning": "艾比"
  },
  "แฮกริด": {
    "phonetic": "hae-krid",
    "meaning": "海格"
  },
  "แฮงค์": {
    "phonetic": "haengkh",
    "meaning": "汉克"
  },
  "แฮนนา": {
    "phonetic": "hae-n-naa",
    "meaning": "汉娜"
  },
  "แฮนน่า": {
    "phonetic": "hae-n-naa",
    "meaning": "汉娜"
  },
  "แฮปปี้": {
    "phonetic": "haeppii",
    "meaning": "快乐的"
  },
  "แฮม": {
    "phonetic": "haem",
    "meaning": "火腿"
  },
  "แฮริสัน": {
    "phonetic": "hae-ri-san",
    "meaning": "哈里森"
  },
  "แฮรี่": {
    "phonetic": "hae-rii",
    "meaning": "哈利"
  },
  "แฮร์ริส": {
    "phonetic": "haer-ris",
    "meaning": "哈里斯"
  },
  "แฮร์รี่": {
    "phonetic": "haer-rii",
    "meaning": "哈利"
  },
  "แฮล": {
    "phonetic": "hael",
    "meaning": "哈尔"
  },
  "แฮโรลด์": {
    "phonetic": "hae-ro-ld",
    "meaning": "哈罗德"
  },
  "โก": {
    "phonetic": "ko",
    "meaning": "去"
  },
  "โกรธ": {
    "phonetic": "korth",
    "meaning": "生气的"
  },
  "โกลด์": {
    "phonetic": "kold",
    "meaning": "金子"
  },
  "โกหก": {
    "phonetic": "kok",
    "meaning": "说谎"
  },
  "โค": {
    "phonetic": "khoo",
    "meaning": "奶牛"
  },
  "โคจัง": {
    "phonetic": "kho-chang",
    "meaning": "小昌"
  },
  "โคดี้": {
    "phonetic": "kho-dii",
    "meaning": "科迪"
  },
  "โครงการ": {
    "phonetic": "khroong-gaan",
    "meaning": "项目/计划"
  },
  "โครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่": {
    "phonetic": "khroong-gaan-lon-thun-pha-lang-gaan-saeng-aa-thit-kha-naat-yai",
    "meaning": "太阳能光伏投资"
  },
  "โคล": {
    "phonetic": "khol",
    "meaning": "油菜"
  },
  "โคลน": {
    "phonetic": "khlōon",
    "meaning": "泥土/泥巴"
  },
  "โคลอี้": {
    "phonetic": "khol-oii",
    "meaning": "克洛伊"
  },
  "โคเมะ": {
    "phonetic": "kho-mea",
    "meaning": "科梅"
  },
  "โคเฮ": {
    "phonetic": "khohe",
    "meaning": "科赫"
  },
  "โคเฮซัง": {
    "phonetic": "kho-he-sang",
    "meaning": "航平先生"
  },
  "โคโน่": {
    "phonetic": "kho-no",
    "meaning": "科诺"
  },
  "โค้ช": {
    "phonetic": "khochh",
    "meaning": "教练"
  },
  "โค้ด": {
    "phonetic": "khóot",
    "meaning": "代码"
  },
  "โฆษณา": {
    "phonetic": "khoo-sa-naa",
    "meaning": "广告"
  },
  "โง่": {
    "phonetic": "ngo",
    "meaning": "愚蠢的"
  },
  "โง่จริง": {
    "phonetic": "ngo-chring",
    "meaning": "真是蠢啊"
  },
  "โจ": {
    "phonetic": "cho",
    "meaning": "乔"
  },
  "โจชัว": {
    "phonetic": "cho-chhaw",
    "meaning": "约书亚"
  },
  "โจซี่": {
    "phonetic": "cho-sii",
    "meaning": "乔西"
  },
  "โจดี้": {
    "phonetic": "cho-dii",
    "meaning": "乔迪"
  },
  "โจน": {
    "phonetic": "chon",
    "meaning": "琼"
  },
  "โจนส์": {
    "phonetic": "chon-s",
    "meaning": "琼斯"
  },
  "โจนาธาน": {
    "phonetic": "cho-naa-thaan",
    "meaning": "乔纳森"
  },
  "โจนาส": {
    "phonetic": "cho-naas",
    "meaning": "乔纳斯"
  },
  "โจนาห์": {
    "phonetic": "cho-naa",
    "meaning": "乔纳"
  },
  "โจน่าห์": {
    "phonetic": "cho-naa",
    "meaning": "乔纳"
  },
  "โจมตี": {
    "phonetic": "chomtii",
    "meaning": "攻击"
  },
  "โจรกรรม": {
    "phonetic": "joo-ra-gam",
    "meaning": "抢劫"
  },
  "โจอี้": {
    "phonetic": "cho-oii",
    "meaning": "乔伊"
  },
  "โจเซฟ": {
    "phonetic": "cho-sef",
    "meaning": "约瑟夫"
  },
  "โจแอน": {
    "phonetic": "cho-oaen",
    "meaning": "琼"
  },
  "โจแอนนา": {
    "phonetic": "cho-oae-n-naa",
    "meaning": "琼"
  },
  "โจแฮนนา": {
    "phonetic": "cho-hae-n-naa",
    "meaning": "约翰娜"
  },
  "โจ๊บ": {
    "phonetic": "chob",
    "meaning": "工作"
  },
  "โช": {
    "phonetic": "chho",
    "meaning": "曹"
  },
  "โชค": {
    "phonetic": "chôok",
    "meaning": "运气"
  },
  "โชคชะตา": {
    "phonetic": "chhokh-chhataa",
    "meaning": "命运"
  },
  "โชคดี": {
    "phonetic": "chhokh-dii",
    "meaning": "祝你好运"
  },
  "โชคดีนะ": {
    "phonetic": "chhokh-dii-na",
    "meaning": "祝你好运"
  },
  "โชคร้าย": {
    "phonetic": "chhokh-raay",
    "meaning": "厄运"
  },
  "โชจิ": {
    "phonetic": "chhochi",
    "meaning": "庄治"
  },
  "โชว์": {
    "phonetic": "chhow",
    "meaning": "展示"
  },
  "โซ": {
    "phonetic": "so",
    "meaning": "所以"
  },
  "โซซึเกะ": {
    "phonetic": "so-sue-kea",
    "meaning": "宗介"
  },
  "โซฟี": {
    "phonetic": "sofii",
    "meaning": "苏菲"
  },
  "โซล": {
    "phonetic": "sol",
    "meaning": "汉城"
  },
  "โซลิส": {
    "phonetic": "so-lis",
    "meaning": "索利斯"
  },
  "โซวูจิน": {
    "phonetic": "so-wuu-chin",
    "meaning": "所以吴镇"
  },
  "โซอี้": {
    "phonetic": "so-oii",
    "meaning": "佐伊"
  },
  "โซเชียล": {
    "phonetic": "soo-chian",
    "meaning": "社交"
  },
  "โซเฟีย": {
    "phonetic": "sofeia",
    "meaning": "索菲亚"
  },
  "โซเร็น": {
    "phonetic": "so-ren",
    "meaning": "索伦"
  },
  "โด": {
    "phonetic": "do",
    "meaning": "做"
  },
  "โดด": {
    "phonetic": "dod",
    "meaning": "跳"
  },
  "โดนัลด์": {
    "phonetic": "dona-ld",
    "meaning": "唐纳德"
  },
  "โดมินิค": {
    "phonetic": "do-mi-nikh",
    "meaning": "多米尼克"
  },
  "โดย": {
    "phonetic": "doy",
    "meaning": "经过"
  },
  "โดยตรง": {
    "phonetic": "dooy-trong",
    "meaning": "直接地"
  },
  "โดยสาร": {
    "phonetic": "dooy-sǎan",
    "meaning": "乘客"
  },
  "โดโนแวน": {
    "phonetic": "do-no-waen",
    "meaning": "多诺万"
  },
  "โดโรต้า": {
    "phonetic": "do-ro-taa",
    "meaning": "多罗塔"
  },
  "โดโรธี": {
    "phonetic": "do-rothii",
    "meaning": "多萝西"
  },
  "โดโลเรส": {
    "phonetic": "do-lores",
    "meaning": "多洛丽丝"
  },
  "โตเกียว": {
    "phonetic": "tokeiaw",
    "meaning": "东京"
  },
  "โต๊ะ": {
    "phonetic": "toa",
    "meaning": "桌子"
  },
  "โถ": {
    "phonetic": "tho",
    "meaning": "罐"
  },
  "โถ่": {
    "phonetic": "tho",
    "meaning": "哦"
  },
  "โทดที": {
    "phonetic": "thod-thii",
    "meaning": "对不起"
  },
  "โทนี่": {
    "phonetic": "tho-nii",
    "meaning": "托尼"
  },
  "โทบี้": {
    "phonetic": "tho-bii",
    "meaning": "托比"
  },
  "โทมัส": {
    "phonetic": "tho-mas",
    "meaning": "托马斯"
  },
  "โทร": {
    "phonetic": "thor",
    "meaning": "称呼"
  },
  "โทรม": {
    "phonetic": "soom",
    "meaning": "破旧"
  },
  "โทรมา": {
    "phonetic": "thor-maa",
    "meaning": "打电话给我"
  },
  "โทรมานะ": {
    "phonetic": "thor-maana",
    "meaning": "打电话给我"
  },
  "โทรศัพท์": {
    "phonetic": "thoo-rá-sàp",
    "meaning": "电话"
  },
  "โทรหา": {
    "phonetic": "thor-aa",
    "meaning": "称呼"
  },
  "โทษครับ": {
    "phonetic": "thot-khrab",
    "meaning": "对不起"
  },
  "โทษค่ะ": {
    "phonetic": "thot-kha",
    "meaning": "对不起"
  },
  "โทษที": {
    "phonetic": "thot-thii",
    "meaning": "对不起"
  },
  "โทษทีนะ": {
    "phonetic": "thot-thii-na",
    "meaning": "对不起"
  },
  "โทษนะ": {
    "phonetic": "thot-na",
    "meaning": "对不起"
  },
  "โทษนะคะ": {
    "phonetic": "thot-na-kha",
    "meaning": "对不起"
  },
  "โธมัส": {
    "phonetic": "thomas",
    "meaning": "托马斯"
  },
  "โธ่": {
    "phonetic": "tho",
    "meaning": "哦"
  },
  "โธ่เว้ย": {
    "phonetic": "tho-wei",
    "meaning": "哦不"
  },
  "โธ่เอ้ย": {
    "phonetic": "tho-oe-y",
    "meaning": "天哪"
  },
  "โธ่เอ๊ย": {
    "phonetic": "tho-oei",
    "meaning": "天哪"
  },
  "โธ่เอ๋ย": {
    "phonetic": "tho-oei",
    "meaning": "天哪"
  },
  "โน": {
    "phonetic": "no",
    "meaning": "不"
  },
  "โนบิตะ": {
    "phonetic": "no-bi-ta",
    "meaning": "大雄"
  },
  "โนวา": {
    "phonetic": "nowaa",
    "meaning": "新星"
  },
  "โนอา": {
    "phonetic": "nooaa",
    "meaning": "诺亚"
  },
  "โนอาห์": {
    "phonetic": "no-oaa",
    "meaning": "诺亚"
  },
  "โนเอล": {
    "phonetic": "no-oel",
    "meaning": "诺埃尔"
  },
  "โนแลน": {
    "phonetic": "no-laen",
    "meaning": "诺兰"
  },
  "โน้น": {
    "phonetic": "nóon",
    "meaning": "那"
  },
  "โน้ม": {
    "phonetic": "nóom",
    "meaning": "弯曲"
  },
  "โบ": {
    "phonetic": "bo",
    "meaning": "博"
  },
  "โบนส์": {
    "phonetic": "bons",
    "meaning": "骨头"
  },
  "โบรดี้": {
    "phonetic": "bo-rdii",
    "meaning": "布罗迪"
  },
  "โบราณ": {
    "phonetic": "boo-raan",
    "meaning": "古老的"
  },
  "โบลท์": {
    "phonetic": "bolth",
    "meaning": "螺栓"
  },
  "โบสถ์": {
    "phonetic": "bosth",
    "meaning": "教会"
  },
  "โบ๊ท": {
    "phonetic": "bôot",
    "meaning": "船"
  },
  "โป": {
    "phonetic": "po",
    "meaning": "宝"
  },
  "โปร": {
    "phonetic": "bproo",
    "meaning": "专业版"
  },
  "โปรด": {
    "phonetic": "pord",
    "meaning": "请"
  },
  "โปรตีน": {
    "phonetic": "proo-tiin",
    "meaning": "蛋白质"
  },
  "โปรแกรม": {
    "phonetic": "proo-graem",
    "meaning": "程序/软件"
  },
  "โปรแกรมระบบบัญชีใหม่": {
    "phonetic": "proo-graem-ra-bop-ban-chii-mai",
    "meaning": "新财务软件"
  },
  "โปรแกรมเมอร์": {
    "phonetic": "proo-graem-moe",
    "meaning": "程序员"
  },
  "โพ": {
    "phonetic": "pho",
    "meaning": "宝"
  },
  "โฟน": {
    "phonetic": "foon",
    "meaning": "电话"
  },
  "โฟรโด": {
    "phonetic": "for-do",
    "meaning": "佛罗多"
  },
  "โฟรโด้": {
    "phonetic": "for-do",
    "meaning": "佛罗多"
  },
  "โม": {
    "phonetic": "mo",
    "meaning": "莫"
  },
  "โมง": {
    "phonetic": "mong",
    "meaning": "点了"
  },
  "โมงเช้า": {
    "phonetic": "mong-chheaa",
    "meaning": "早晨"
  },
  "โมงเย็น": {
    "phonetic": "mong-yen",
    "meaning": "下午"
  },
  "โมนา": {
    "phonetic": "monaa",
    "meaning": "莫娜"
  },
  "โมนิก้า": {
    "phonetic": "mo-ni-kaa",
    "meaning": "莫妮卡"
  },
  "โมน่า": {
    "phonetic": "mo-naa",
    "meaning": "莫娜"
  },
  "โมเน": {
    "phonetic": "mone",
    "meaning": "莫内"
  },
  "โมเสส": {
    "phonetic": "moses",
    "meaning": "摩西"
  },
  "โมโมโกะ": {
    "phonetic": "mo-mo-koa",
    "meaning": "桃子"
  },
  "โย": {
    "phonetic": "yo",
    "meaning": "哟"
  },
  "โยโกยะ": {
    "phonetic": "yo-ko-ya",
    "meaning": "横哉"
  },
  "โยโกะ": {
    "phonetic": "yo-koa",
    "meaning": "洋子"
  },
  "โย่": {
    "phonetic": "yo",
    "meaning": "哟"
  },
  "โย่ว": {
    "phonetic": "yow",
    "meaning": "哟"
  },
  "โรค": {
    "phonetic": "rôok",
    "meaning": "疾病"
  },
  "โรคจิต": {
    "phonetic": "rokhchit",
    "meaning": "精神病"
  },
  "โรง": {
    "phonetic": "roong",
    "meaning": "剧院"
  },
  "โรงงาน": {
    "phonetic": "roong-ngaan",
    "meaning": "工厂"
  },
  "โรงเรียน": {
    "phonetic": "roong-rian",
    "meaning": "学校"
  },
  "โรงแรม": {
    "phonetic": "roong-raem",
    "meaning": "酒店"
  },
  "โรซี่": {
    "phonetic": "ro-sii",
    "meaning": "罗西"
  },
  "โรดส์": {
    "phonetic": "rods",
    "meaning": "罗德斯"
  },
  "โรตี": {
    "phonetic": "roo-tii",
    "meaning": "煎饼/印度煎饼"
  },
  "โรตีกล้วยหอม": {
    "phonetic": "roo-tii-klûay-hɔ̌ɔm",
    "meaning": "香蕉煎饼"
  },
  "โรนัลด์": {
    "phonetic": "ro-nald",
    "meaning": "罗纳德"
  },
  "โรบิน": {
    "phonetic": "ro-bin",
    "meaning": "罗宾"
  },
  "โรมัน": {
    "phonetic": "roman",
    "meaning": "罗马"
  },
  "โรมิโอ": {
    "phonetic": "ro-mi-oo",
    "meaning": "罗密欧"
  },
  "โรย": {
    "phonetic": "rooi",
    "meaning": "撒/洒"
  },
  "โรส": {
    "phonetic": "ros",
    "meaning": "玫瑰"
  },
  "โรเจอร์": {
    "phonetic": "ro-cheor",
    "meaning": "罗杰"
  },
  "โรแลนด์": {
    "phonetic": "ro-laend",
    "meaning": "罗兰"
  },
  "โล": {
    "phonetic": "loo",
    "meaning": "公斤/千克"
  },
  "โลก": {
    "phonetic": "lok",
    "meaning": "世界"
  },
  "โลชั่น": {
    "phonetic": "loo-chân",
    "meaning": "乳液/护肤乳"
  },
  "โลล่า": {
    "phonetic": "lo-laa",
    "meaning": "罗拉"
  },
  "โลหิต": {
    "phonetic": "loo-hìt",
    "meaning": "血液"
  },
  "โลอิส": {
    "phonetic": "lo-ois",
    "meaning": "路易斯"
  },
  "โลแกน": {
    "phonetic": "lo-kaen",
    "meaning": "洛根"
  },
  "โลโก้": {
    "phonetic": "loo-kôo",
    "meaning": "标志/Logo"
  },
  "โว": {
    "phonetic": "wo",
    "meaning": "沃"
  },
  "โวว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "โว้": {
    "phonetic": "wo",
    "meaning": "哇哦"
  },
  "โว้ว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "โว้วว": {
    "phonetic": "woww",
    "meaning": "哇"
  },
  "โว้ววว": {
    "phonetic": "wowww",
    "meaning": "哇"
  },
  "โว๊ว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "โสเภณี": {
    "phonetic": "sophhenii",
    "meaning": "妓女"
  },
  "โห": {
    "phonetic": "o",
    "meaning": "哦"
  },
  "โหมด": {
    "phonetic": "omd",
    "meaning": "模式"
  },
  "โหล": {
    "phonetic": "ol",
    "meaning": "十几个"
  },
  "โหลด": {
    "phonetic": "lòot",
    "meaning": "加载"
  },
  "โอ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โอกาส": {
    "phonetic": "ookaas",
    "meaning": "机会"
  },
  "โอคจา": {
    "phonetic": "ookh-chaa",
    "meaning": "好吧"
  },
  "โอน": {
    "phonetic": "oon",
    "meaning": "转移"
  },
  "โอปี้": {
    "phonetic": "oo-pii",
    "meaning": "奥佩"
  },
  "โอม": {
    "phonetic": "oom",
    "meaning": "欧姆"
  },
  "โอย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "โอริเอะ": {
    "phonetic": "oo-ri-oea",
    "meaning": "奥里"
  },
  "โอลีฟ": {
    "phonetic": "oo-liif",
    "meaning": "橄榄"
  },
  "โอว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "โอวว": {
    "phonetic": "ooww",
    "meaning": "哦"
  },
  "โอว์": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "โอะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "โอเค": {
    "phonetic": "ookhe",
    "meaning": "好的"
  },
  "โอเคค่ะ": {
    "phonetic": "oo-khe-kha",
    "meaning": "好的"
  },
  "โอเคนะ": {
    "phonetic": "oo-khen-a",
    "meaning": "好的"
  },
  "โอเคไหม": {
    "phonetic": "oo-khe-im",
    "meaning": "可以吗"
  },
  "โอเคๆ": {
    "phonetic": "oo-khe-he",
    "meaning": "好的"
  },
  "โอเค้": {
    "phonetic": "oo-khe",
    "meaning": "好的"
  },
  "โอเค๊": {
    "phonetic": "oo-khe",
    "meaning": "好的"
  },
  "โอเวน": {
    "phonetic": "oo-wen",
    "meaning": "欧文"
  },
  "โอเว่น": {
    "phonetic": "oo-wen",
    "meaning": "欧文"
  },
  "โอแทซุก": {
    "phonetic": "oo-thae-suk",
    "meaning": "哦泰硕"
  },
  "โอ่": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โอ่ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "โอ้": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โอ้ย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "โอ้ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "โอ้วว": {
    "phonetic": "oo-ww",
    "meaning": "哦哇"
  },
  "โอ้ววว": {
    "phonetic": "oo-www",
    "meaning": "哦哇"
  },
  "โอ้ว้าว": {
    "phonetic": "oo-waa-w",
    "meaning": "哦哇"
  },
  "โอ้อึ": {
    "phonetic": "oo-oue",
    "meaning": "妈的"
  },
  "โอ้ะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "โอ้โห": {
    "phonetic": "oo-o",
    "meaning": "哦哇"
  },
  "โอ้โฮ": {
    "phonetic": "ooho",
    "meaning": "哇哦"
  },
  "โอ้ใช่": {
    "phonetic": "oo-chhai",
    "meaning": "哦是的"
  },
  "โอ้ไม่": {
    "phonetic": "oo-mi",
    "meaning": "哦不"
  },
  "โอ้ๆ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โอ๊": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โอ๊ต": {
    "phonetic": "ôot",
    "meaning": "燕麦"
  },
  "โอ๊ย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "โอ๊ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "โอ๊ะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "โอ๊ะโอ": {
    "phonetic": "ooa-oo",
    "meaning": "哎呀"
  },
  "โอ๋": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "โฮ": {
    "phonetic": "ho",
    "meaning": "嗬"
  },
  "โฮดอร์": {
    "phonetic": "ho-d-or",
    "meaning": "阿多尔"
  },
  "โฮม": {
    "phonetic": "hoom",
    "meaning": "家"
  },
  "โฮล์ม": {
    "phonetic": "holm",
    "meaning": "福尔摩斯"
  },
  "โฮล์มส์": {
    "phonetic": "holms",
    "meaning": "福尔摩斯"
  },
  "โฮะ": {
    "phonetic": "hoa",
    "meaning": "嗬"
  },
  "โฮ่": {
    "phonetic": "ho",
    "meaning": "哇哦"
  },
  "โฮ้": {
    "phonetic": "ho",
    "meaning": "哇哦"
  },
  "ใกล้": {
    "phonetic": "kail",
    "meaning": "靠近"
  },
  "ใกล้ๆ": {
    "phonetic": "kail",
    "meaning": "附近"
  },
  "ใคร": {
    "phonetic": "khrai",
    "meaning": "谁"
  },
  "ใจ": {
    "phonetic": "jai",
    "meaning": "心"
  },
  "ใจเย็น": {
    "phonetic": "chaiyen",
    "meaning": "冷静下来"
  },
  "ใจเย็นๆ": {
    "phonetic": "chai-yen",
    "meaning": "别紧张"
  },
  "ใช": {
    "phonetic": "chhai",
    "meaning": "是的"
  },
  "ใช่": {
    "phonetic": "châi",
    "meaning": "是 / 对"
  },
  "ใช่ครับ": {
    "phonetic": "chhai-khrab",
    "meaning": "是的"
  },
  "ใช่คะ": {
    "phonetic": "chhai-kha",
    "meaning": "是的"
  },
  "ใช่ค่ะ": {
    "phonetic": "chhai-kha",
    "meaning": "是的"
  },
  "ใช่จ้ะ": {
    "phonetic": "chhai-cha",
    "meaning": "这是正确的"
  },
  "ใช่จ๊ะ": {
    "phonetic": "chhai-cha",
    "meaning": "是的"
  },
  "ใช่ซิ": {
    "phonetic": "chhai-si",
    "meaning": "这是正确的"
  },
  "ใช่มะ": {
    "phonetic": "chhai-ma",
    "meaning": "这是正确的"
  },
  "ใช่มัย": {
    "phonetic": "chhai-may",
    "meaning": "是这样吗"
  },
  "ใช่มั้ย": {
    "phonetic": "chhai-may",
    "meaning": "是这样吗"
  },
  "ใช่มั๊ย": {
    "phonetic": "chhai-may",
    "meaning": "是这样吗"
  },
  "ใช่สิ": {
    "phonetic": "chhai-si",
    "meaning": "没错"
  },
  "ใช่สินะ": {
    "phonetic": "chhai-sina",
    "meaning": "这是正确的"
  },
  "ใช่เลย": {
    "phonetic": "chhai-lei",
    "meaning": "这是正确的"
  },
  "ใช่เหรอ": {
    "phonetic": "chhai-e-ro",
    "meaning": "是这样吗"
  },
  "ใช่แล้ว": {
    "phonetic": "chhai-laew",
    "meaning": "没错"
  },
  "ใช่ใช่": {
    "phonetic": "chhai-chhai",
    "meaning": "是的是的"
  },
  "ใช่ใหม": {
    "phonetic": "chhai-aim",
    "meaning": "是这样吗"
  },
  "ใช่ไม๊": {
    "phonetic": "chhai-mi",
    "meaning": "是这样吗"
  },
  "ใช่ไหม": {
    "phonetic": "chhai-im",
    "meaning": "是这样吗"
  },
  "ใช่ๆ": {
    "phonetic": "chhai",
    "meaning": "这是正确的"
  },
  "ใช่ๆๆ": {
    "phonetic": "chhai-",
    "meaning": "是的是的"
  },
  "ใช้": {
    "phonetic": "chhai",
    "meaning": "使用"
  },
  "ใช้เวลา": {
    "phonetic": "chhai-welaa",
    "meaning": "花点时间"
  },
  "ใช้ได้": {
    "phonetic": "chhaidi",
    "meaning": "可以使用"
  },
  "ใด": {
    "phonetic": "dai",
    "meaning": "哪个"
  },
  "ใต้": {
    "phonetic": "dtâi",
    "meaning": "在下面"
  },
  "ใต้ดิน": {
    "phonetic": "dtâi-din",
    "meaning": "地下"
  },
  "ใต้เท้า": {
    "phonetic": "taitheaa",
    "meaning": "脚下"
  },
  "ใน": {
    "phonetic": "nai",
    "meaning": "在"
  },
  "ในชีวิต": {
    "phonetic": "nai-chhiiwit",
    "meaning": "在生活中"
  },
  "ในช่วง": {
    "phonetic": "nai-chhwng",
    "meaning": "期间"
  },
  "ในฐานะ": {
    "phonetic": "nai-thaana",
    "meaning": "作为"
  },
  "ในนั้น": {
    "phonetic": "nai-nan",
    "meaning": "在其中"
  },
  "ในนี้": {
    "phonetic": "nai-nii",
    "meaning": "在此"
  },
  "ในปี": {
    "phonetic": "naipii",
    "meaning": "当年"
  },
  "ในป่า": {
    "phonetic": "nai-paa",
    "meaning": "在森林里"
  },
  "ในอดีต": {
    "phonetic": "nai-odiit",
    "meaning": "在过去"
  },
  "ในอนาคต": {
    "phonetic": "nai-onaakht",
    "meaning": "将来"
  },
  "ในอีก": {
    "phonetic": "nai-oiik",
    "meaning": "在另一个"
  },
  "ในเมือง": {
    "phonetic": "nai-mueang",
    "meaning": "在城市里"
  },
  "ในเมื่อ": {
    "phonetic": "nai-muea",
    "meaning": "什么时候"
  },
  "ในเวลา": {
    "phonetic": "nai-welaa",
    "meaning": "及时"
  },
  "ใบ": {
    "phonetic": "bai",
    "meaning": "树叶"
  },
  "ใบลา": {
    "phonetic": "bai-laa",
    "meaning": "留信"
  },
  "ใส": {
    "phonetic": "sǎi",
    "meaning": "清除"
  },
  "ใส่": {
    "phonetic": "sai",
    "meaning": "进入"
  },
  "ใหญ่": {
    "phonetic": "aiy",
    "meaning": "大的"
  },
  "ใหม่": {
    "phonetic": "aim",
    "meaning": "新的"
  },
  "ใหม่ๆ": {
    "phonetic": "mài-mài",
    "meaning": "新的"
  },
  "ให้": {
    "phonetic": "hâi",
    "meaning": "让 / 给 / 提供"
  },
  "ให้กับ": {
    "phonetic": "ai-kab",
    "meaning": "给予"
  },
  "ให้คุณ": {
    "phonetic": "ai-khun",
    "meaning": "给你"
  },
  "ให้ฉัน": {
    "phonetic": "ai-chhan",
    "meaning": "把它给我"
  },
  "ให้ตาย": {
    "phonetic": "ai-taay",
    "meaning": "去死吧"
  },
  "ให้ผม": {
    "phonetic": "ai-phm",
    "meaning": "把它给我"
  },
  "ให้เขา": {
    "phonetic": "ai-kheaa",
    "meaning": "把它给他"
  },
  "ให้ได้": {
    "phonetic": "ai-di",
    "meaning": "你可以做到的"
  },
  "ให้ไว": {
    "phonetic": "ai-wi",
    "meaning": "快点"
  },
  "ไกด์": {
    "phonetic": "gái",
    "meaning": "指导"
  },
  "ไกล": {
    "phonetic": "glai",
    "meaning": "远的"
  },
  "ไกอัส": {
    "phonetic": "ki-oas",
    "meaning": "盖乌斯"
  },
  "ไก่": {
    "phonetic": "ki",
    "meaning": "鸡"
  },
  "ไข่": {
    "phonetic": "khi",
    "meaning": "蛋"
  },
  "ไข่ดาว": {
    "phonetic": "khai-daaw",
    "meaning": "荷包蛋"
  },
  "ไข้": {
    "phonetic": "khâi",
    "meaning": "发烧"
  },
  "ไค": {
    "phonetic": "khi",
    "meaning": "凯"
  },
  "ไคลน์": {
    "phonetic": "khi-ln",
    "meaning": "克莱因"
  },
  "ไคล์": {
    "phonetic": "khil",
    "meaning": "凯尔"
  },
  "ไคโตะ": {
    "phonetic": "khi-toa",
    "meaning": "凯托"
  },
  "ไง": {
    "phonetic": "ngi",
    "meaning": "嘿"
  },
  "ไงก็ตาม": {
    "phonetic": "ngi-ktaam",
    "meaning": "反正"
  },
  "ไงครับ": {
    "phonetic": "ngi-khrab",
    "meaning": "嘿"
  },
  "ไงคะ": {
    "phonetic": "ngikha",
    "meaning": "这是怎么回事"
  },
  "ไงจ๊ะ": {
    "phonetic": "ngi-cha",
    "meaning": "怎么了"
  },
  "ไงนะ": {
    "phonetic": "ngina",
    "meaning": "什么"
  },
  "ไงพวก": {
    "phonetic": "ngi-phwk",
    "meaning": "嘿伙计们"
  },
  "ไงล่ะ": {
    "phonetic": "ngi-la",
    "meaning": "反正"
  },
  "ไชโย": {
    "phonetic": "chhiao",
    "meaning": "干杯"
  },
  "ไช่": {
    "phonetic": "chhi",
    "meaning": "是的"
  },
  "ไซมอน": {
    "phonetic": "si-mon",
    "meaning": "西蒙"
  },
  "ไซม่อน": {
    "phonetic": "si-mon",
    "meaning": "西蒙"
  },
  "ไซรัส": {
    "phonetic": "si-ras",
    "meaning": "赛勒斯"
  },
  "ไซลัส": {
    "phonetic": "si-las",
    "meaning": "塞拉斯"
  },
  "ไซส์": {
    "phonetic": "sái",
    "meaning": "尺码/尺寸"
  },
  "ไซเบอร์": {
    "phonetic": "sai-boe",
    "meaning": "网络"
  },
  "ไดสัน": {
    "phonetic": "di-san",
    "meaning": "戴森"
  },
  "ไดอาน่า": {
    "phonetic": "dioaanaa",
    "meaning": "戴安娜"
  },
  "ไดแอน": {
    "phonetic": "di-oaen",
    "meaning": "黛安"
  },
  "ได้": {
    "phonetic": "dâai",
    "meaning": "可以 / 能 / 获得"
  },
  "ได้ครับ": {
    "phonetic": "di-khrab",
    "meaning": "是的是的"
  },
  "ได้คะ": {
    "phonetic": "di-kha",
    "meaning": "你可以"
  },
  "ได้ค่ะ": {
    "phonetic": "di-kha",
    "meaning": "是的"
  },
  "ได้จ้ะ": {
    "phonetic": "di-cha",
    "meaning": "你可以"
  },
  "ได้จ๊ะ": {
    "phonetic": "di-cha",
    "meaning": "你可以"
  },
  "ได้ซิ": {
    "phonetic": "di-si",
    "meaning": "你可以"
  },
  "ได้ที่": {
    "phonetic": "dâai-thîi",
    "meaning": "获取它："
  },
  "ได้นะ": {
    "phonetic": "di-na",
    "meaning": "你可以"
  },
  "ได้ผล": {
    "phonetic": "di-phl",
    "meaning": "有用"
  },
  "ได้มั้ย": {
    "phonetic": "di-may",
    "meaning": "我能拿到吗"
  },
  "ได้มั๊ย": {
    "phonetic": "di-may",
    "meaning": "你可以吗"
  },
  "ได้ยิน": {
    "phonetic": "diain",
    "meaning": "听到"
  },
  "ได้รับ": {
    "phonetic": "di-rab",
    "meaning": "已收到"
  },
  "ได้ละ": {
    "phonetic": "di-la",
    "meaning": "知道了"
  },
  "ได้ล่ะ": {
    "phonetic": "di-la",
    "meaning": "好的"
  },
  "ได้สิ": {
    "phonetic": "di-si",
    "meaning": "当然"
  },
  "ได้สิคะ": {
    "phonetic": "di-si-kha",
    "meaning": "你可以"
  },
  "ได้เลย": {
    "phonetic": "di-lei",
    "meaning": "你可以"
  },
  "ได้เสมอ": {
    "phonetic": "di-semo",
    "meaning": "你永远可以"
  },
  "ได้เหรอ": {
    "phonetic": "di-e-ro",
    "meaning": "你明白了吗"
  },
  "ได้แก่": {
    "phonetic": "daai-gae",
    "meaning": "包括"
  },
  "ได้แล้ว": {
    "phonetic": "di-laew",
    "meaning": "知道了"
  },
  "ได้โปรด": {
    "phonetic": "di-pord",
    "meaning": "请"
  },
  "ได้ไง": {
    "phonetic": "di-ngi",
    "meaning": "我该怎么办"
  },
  "ได้ไหม": {
    "phonetic": "dâai-mǎi",
    "meaning": "可以吗 / 行不行"
  },
  "ได้ๆ": {
    "phonetic": "di-di",
    "meaning": "好的"
  },
  "ไตรมาส": {
    "phonetic": "dtrai-mâat",
    "meaning": "四分之一"
  },
  "ไท": {
    "phonetic": "thi",
    "meaning": "太"
  },
  "ไทป์": {
    "phonetic": "tháip",
    "meaning": "类型"
  },
  "ไทย": {
    "phonetic": "thai",
    "meaning": "泰国/泰"
  },
  "ไทเลอร์": {
    "phonetic": "thi-leo-r",
    "meaning": "泰勒"
  },
  "ไนท์": {
    "phonetic": "nith",
    "meaning": "夜晚"
  },
  "ไบรซ์": {
    "phonetic": "birs",
    "meaning": "布莱斯"
  },
  "ไบรอน": {
    "phonetic": "bi-ron",
    "meaning": "拜伦"
  },
  "ไบรอัน": {
    "phonetic": "bi-roan",
    "meaning": "布莱恩"
  },
  "ไป": {
    "phonetic": "bpai",
    "meaning": "去"
  },
  "ไปกัน": {
    "phonetic": "pi-kan",
    "meaning": "我们走吧"
  },
  "ไปก่อน": {
    "phonetic": "pi-kon",
    "meaning": "先走吧"
  },
  "ไปซะ": {
    "phonetic": "pisa",
    "meaning": "去"
  },
  "ไปซิ": {
    "phonetic": "pisi",
    "meaning": "去"
  },
  "ไปด้วย": {
    "phonetic": "pi-dwy",
    "meaning": "一起去 / 顺带 / 一起"
  },
  "ไปตายซะ": {
    "phonetic": "pi-taay-sa",
    "meaning": "去死吧"
  },
  "ไปต่อ": {
    "phonetic": "pi-to",
    "meaning": "继续"
  },
  "ไปทำงาน": {
    "phonetic": "pi-thangaan",
    "meaning": "上班"
  },
  "ไปที่": {
    "phonetic": "pi-thii",
    "meaning": "前往"
  },
  "ไปนะ": {
    "phonetic": "pina",
    "meaning": "我们走吧"
  },
  "ไปยัง": {
    "phonetic": "pi-yang",
    "meaning": "到"
  },
  "ไปละ": {
    "phonetic": "pila",
    "meaning": "我们走吧"
  },
  "ไปล่ะ": {
    "phonetic": "pi-la",
    "meaning": "我们走吧"
  },
  "ไปสิ": {
    "phonetic": "pisi",
    "meaning": "去"
  },
  "ไปหา": {
    "phonetic": "piaa",
    "meaning": "去找吧"
  },
  "ไปอีก": {
    "phonetic": "pi-oiik",
    "meaning": "再去吧"
  },
  "ไปเถอะ": {
    "phonetic": "pi-theoa",
    "meaning": "我们走吧"
  },
  "ไปเร็ว": {
    "phonetic": "pi-rew",
    "meaning": "快点走吧"
  },
  "ไปเร็วๆ": {
    "phonetic": "pi-rew-rew",
    "meaning": "快点走吧"
  },
  "ไปเลย": {
    "phonetic": "pi-lei",
    "meaning": "我们走吧"
  },
  "ไปเหอะ": {
    "phonetic": "pi-eoa",
    "meaning": "我们走吧"
  },
  "ไปแล้ว": {
    "phonetic": "pi-laew",
    "meaning": "走了"
  },
  "ไปไกลๆ": {
    "phonetic": "pi-kil",
    "meaning": "走远点吧"
  },
  "ไปได้": {
    "phonetic": "pi-di",
    "meaning": "你可以走了"
  },
  "ไปไปไป": {
    "phonetic": "pi-pi-pi",
    "meaning": "去去去"
  },
  "ไปไหน": {
    "phonetic": "pi-in",
    "meaning": "你要去哪里"
  },
  "ไปไหนมา": {
    "phonetic": "pi-in-maa",
    "meaning": "你去哪儿了"
  },
  "ไปๆ": {
    "phonetic": "pi-pi",
    "meaning": "去"
  },
  "ไปๆๆ": {
    "phonetic": "pi-pi",
    "meaning": "去去去"
  },
  "ไปๆๆๆ": {
    "phonetic": "pi-pi",
    "meaning": "去去去"
  },
  "ไฟ": {
    "phonetic": "fi",
    "meaning": "火"
  },
  "ไฟฟ้า": {
    "phonetic": "fai-faa",
    "meaning": "电力/电"
  },
  "ไฟล์": {
    "phonetic": "fai",
    "meaning": "文件"
  },
  "ไฟเวิล": {
    "phonetic": "fi-weil",
    "meaning": "五界"
  },
  "ไฟไหม้": {
    "phonetic": "fi-im",
    "meaning": "火"
  },
  "ไม": {
    "phonetic": "mi",
    "meaning": "麦"
  },
  "ไมกี้": {
    "phonetic": "mi-kii",
    "meaning": "麦基"
  },
  "ไมก้า": {
    "phonetic": "mikaa",
    "meaning": "云母"
  },
  "ไมค์": {
    "phonetic": "mikh",
    "meaning": "麦克风"
  },
  "ไมค์กี้": {
    "phonetic": "mikh-kii",
    "meaning": "麦基"
  },
  "ไมลส์": {
    "phonetic": "mils",
    "meaning": "迈尔斯"
  },
  "ไมล์": {
    "phonetic": "mil",
    "meaning": "英里"
  },
  "ไมล์ส": {
    "phonetic": "mil-s",
    "meaning": "迈尔斯"
  },
  "ไมอามี่": {
    "phonetic": "mi-oaa-mii",
    "meaning": "迈阿密"
  },
  "ไมเคิล": {
    "phonetic": "mikheil",
    "meaning": "迈克尔"
  },
  "ไมโล": {
    "phonetic": "milo",
    "meaning": "米洛"
  },
  "ไม่": {
    "phonetic": "mâi",
    "meaning": "不 / 没"
  },
  "ไม่ก็": {
    "phonetic": "mi-k",
    "meaning": "或不"
  },
  "ไม่ครับ": {
    "phonetic": "mi-khrab",
    "meaning": "不"
  },
  "ไม่คะ": {
    "phonetic": "mi-kha",
    "meaning": "不"
  },
  "ไม่ค่ะ": {
    "phonetic": "mi-kha",
    "meaning": "不"
  },
  "ไม่งั้น": {
    "phonetic": "mi-ngan",
    "meaning": "否则"
  },
  "ไม่จริง": {
    "phonetic": "mi-chring",
    "meaning": "不正确"
  },
  "ไม่จ้ะ": {
    "phonetic": "mi-cha",
    "meaning": "不"
  },
  "ไม่จ๊ะ": {
    "phonetic": "mi-cha",
    "meaning": "不"
  },
  "ไม่ซิ": {
    "phonetic": "mi-si",
    "meaning": "不"
  },
  "ไม่ดี": {
    "phonetic": "mi-dii",
    "meaning": "不好"
  },
  "ไม่ต้อง": {
    "phonetic": "mi-tong",
    "meaning": "不必"
  },
  "ไม่ทราบ": {
    "phonetic": "mi-thraab",
    "meaning": "不知道"
  },
  "ไม่นะ": {
    "phonetic": "mi-na",
    "meaning": "不"
  },
  "ไม่นะคะ": {
    "phonetic": "mi-na-kha",
    "meaning": "不"
  },
  "ไม่นาน": {
    "phonetic": "mi-naan",
    "meaning": "不长"
  },
  "ไม่นิ": {
    "phonetic": "mi-ni",
    "meaning": "一点也不"
  },
  "ไม่นี่": {
    "phonetic": "mi-nii",
    "meaning": "不在这里"
  },
  "ไม่น่ะ": {
    "phonetic": "mi-na",
    "meaning": "不"
  },
  "ไม่น่า": {
    "phonetic": "mi-naa",
    "meaning": "不太可能"
  },
  "ไม่มาก": {
    "phonetic": "mi-maak",
    "meaning": "不多"
  },
  "ไม่มี": {
    "phonetic": "mâi-mii",
    "meaning": "没有"
  },
  "ไม่รู้": {
    "phonetic": "miruu",
    "meaning": "我不知道"
  },
  "ไม่ละ": {
    "phonetic": "mi-la",
    "meaning": "不"
  },
  "ไม่ล่ะ": {
    "phonetic": "mi-la",
    "meaning": "不"
  },
  "ไม่ว่า": {
    "phonetic": "mi-waa",
    "meaning": "不管"
  },
  "ไม่สิ": {
    "phonetic": "mi-si",
    "meaning": "不"
  },
  "ไม่หรอ": {
    "phonetic": "mi-ro",
    "meaning": "不"
  },
  "ไม่หรอก": {
    "phonetic": "mi-rok",
    "meaning": "一点也不"
  },
  "ไม่หรือ": {
    "phonetic": "mi-rueo",
    "meaning": "或不"
  },
  "ไม่หล่ะ": {
    "phonetic": "mi-la",
    "meaning": "不"
  },
  "ไม่อยู่": {
    "phonetic": "mi-oyuu",
    "meaning": "不在这里"
  },
  "ไม่อะ": {
    "phonetic": "mi-oa",
    "meaning": "不"
  },
  "ไม่อ่ะ": {
    "phonetic": "mi-oa",
    "meaning": "不"
  },
  "ไม่ฮะ": {
    "phonetic": "mi-ha",
    "meaning": "不"
  },
  "ไม่เข้าใจ": {
    "phonetic": "mâi-khâo-jai",
    "meaning": "不明白"
  },
  "ไม่เคย": {
    "phonetic": "mi-khei",
    "meaning": "绝不"
  },
  "ไม่เจอ": {
    "phonetic": "mi-cheo",
    "meaning": "找不到它"
  },
  "ไม่เชิง": {
    "phonetic": "mi-chheing",
    "meaning": "并不真地"
  },
  "ไม่เป็น": {
    "phonetic": "mi-pen",
    "meaning": "我不知道"
  },
  "ไม่เป็นไร": {
    "phonetic": "mâi-pen-rai",
    "meaning": "没关系 / 不用谢"
  },
  "ไม่เลย": {
    "phonetic": "mi-lei",
    "meaning": "一点也不"
  },
  "ไม่เลว": {
    "phonetic": "mi-lew",
    "meaning": "不错"
  },
  "ไม่เหรอ": {
    "phonetic": "mi-e-ro",
    "meaning": "不"
  },
  "ไม่เห็น": {
    "phonetic": "mi-en",
    "meaning": "看不到"
  },
  "ไม่เอา": {
    "phonetic": "mi-oeaa",
    "meaning": "我不想要它"
  },
  "ไม่แน่": {
    "phonetic": "mi-nae",
    "meaning": "或许"
  },
  "ไม่แล้ว": {
    "phonetic": "mi-laew",
    "meaning": "不再"
  },
  "ไม่ใช": {
    "phonetic": "mi-chhai",
    "meaning": "不"
  },
  "ไม่ใช่": {
    "phonetic": "mâi-châi",
    "meaning": "不是"
  },
  "ไม่ใช่ๆ": {
    "phonetic": "mi-chhai",
    "meaning": "不"
  },
  "ไม่ได้": {
    "phonetic": "mâi-dâai",
    "meaning": "不行 / 不能"
  },
  "ไม่ไป": {
    "phonetic": "mi-pi",
    "meaning": "我不去"
  },
  "ไม่ไม่": {
    "phonetic": "mi-mi",
    "meaning": "不不"
  },
  "ไม่ไหว": {
    "phonetic": "mi-iw",
    "meaning": "我受不了"
  },
  "ไม่ๆ": {
    "phonetic": "mai-mai",
    "meaning": "不"
  },
  "ไม่ๆๆ": {
    "phonetic": "mai-mai-mai",
    "meaning": "不不不"
  },
  "ไม่ๆๆๆ": {
    "phonetic": "mai-mai-mai",
    "meaning": "不不不"
  },
  "ไม่ๆๆๆๆ": {
    "phonetic": "mai-mai-mai",
    "meaning": "不不不不"
  },
  "ไม้": {
    "phonetic": "mái",
    "meaning": "木头"
  },
  "ไร": {
    "phonetic": "rai",
    "meaning": "什么？"
  },
  "ไรลีย์": {
    "phonetic": "ri-lia",
    "meaning": "莱利"
  },
  "ไรลี่ย์": {
    "phonetic": "ri-lii-y",
    "meaning": "莱利"
  },
  "ไรอัน": {
    "phonetic": "ri-oan",
    "meaning": "瑞安"
  },
  "ไรเดอร์": {
    "phonetic": "ri-de-or",
    "meaning": "骑士"
  },
  "ไร้": {
    "phonetic": "rái",
    "meaning": "没有"
  },
  "ไร้สาระ": {
    "phonetic": "ri-saara",
    "meaning": "废话"
  },
  "ไลท์": {
    "phonetic": "lith",
    "meaning": "光"
  },
  "ไลน์": {
    "phonetic": "laai",
    "meaning": "线"
  },
  "ไลรา": {
    "phonetic": "liraa",
    "meaning": "天琴座"
  },
  "ไลลา": {
    "phonetic": "lilaa",
    "meaning": "莱拉"
  },
  "ไลล่า": {
    "phonetic": "li-laa",
    "meaning": "莉拉"
  },
  "ไลเคน": {
    "phonetic": "li-khen",
    "meaning": "地衣"
  },
  "ไลโอเนล": {
    "phonetic": "li-oo-nel",
    "meaning": "莱昂内尔"
  },
  "ไล่ออก": {
    "phonetic": "li-ook",
    "meaning": "被解雇了"
  },
  "ไวท์": {
    "phonetic": "with",
    "meaning": "白色的"
  },
  "ไวน์": {
    "phonetic": "win",
    "meaning": "葡萄酒"
  },
  "ไวไฟ": {
    "phonetic": "wai-fai",
    "meaning": "易燃的"
  },
  "ไว้": {
    "phonetic": "wi",
    "meaning": "保留它"
  },
  "ไสหัวไป": {
    "phonetic": "siaw-pi",
    "meaning": "离开"
  },
  "ไส้อั่ว": {
    "phonetic": "sâi-ùa",
    "meaning": "赛瓦"
  },
  "ไหน": {
    "phonetic": "in",
    "meaning": "在哪里"
  },
  "ไหนดูซิ": {
    "phonetic": "in-duu-si",
    "meaning": "让我们来看看"
  },
  "ไหนดูสิ": {
    "phonetic": "in-duu-si",
    "meaning": "无论你走到哪里都要看看"
  },
  "ไหนล่ะ": {
    "phonetic": "in-la",
    "meaning": "在哪里"
  },
  "ไหนๆ": {
    "phonetic": "in",
    "meaning": "在哪里"
  },
  "ไหม": {
    "phonetic": "mǎi",
    "meaning": "吗 (疑问词)"
  },
  "ไหม้": {
    "phonetic": "mâi",
    "meaning": "烧伤"
  },
  "ไหร่": {
    "phonetic": "rai",
    "meaning": "多少"
  },
  "ไหล": {
    "phonetic": "lǎi",
    "meaning": "流动"
  },
  "ไหล่": {
    "phonetic": "lài",
    "meaning": "肩膀"
  },
  "ไหว": {
    "phonetic": "wǎi",
    "meaning": "我能应付。"
  },
  "ไอ": {
    "phonetic": "oi",
    "meaning": "我"
  },
  "ไอกู": {
    "phonetic": "oikuu",
    "meaning": "伊古"
  },
  "ไอคอน": {
    "phonetic": "ai-khɔn",
    "meaning": "图标/特写"
  },
  "ไอที": {
    "phonetic": "ai-thii",
    "meaning": "它"
  },
  "ไอริส": {
    "phonetic": "oi-ris",
    "meaning": "鸢尾花"
  },
  "ไอรีน": {
    "phonetic": "oi-riin",
    "meaning": "艾琳"
  },
  "ไอวี่": {
    "phonetic": "oi-wii",
    "meaning": "常春藤"
  },
  "ไออิกู": {
    "phonetic": "oi-oikuu",
    "meaning": "爱久"
  },
  "ไอแซค": {
    "phonetic": "oi-saekh",
    "meaning": "艾萨克"
  },
  "ไอโอที": {
    "phonetic": "ai-oo-thii",
    "meaning": "物联网(IoT)"
  },
  "ไอ้": {
    "phonetic": "oi",
    "meaning": "该死"
  },
  "ไอ้งั่ง": {
    "phonetic": "oi-ngang",
    "meaning": "你这个白痴"
  },
  "ไอ้ชั่ว": {
    "phonetic": "oi-chhaw",
    "meaning": "邪恶的混蛋"
  },
  "ไอ้นี่": {
    "phonetic": "oi-nii",
    "meaning": "这个家伙"
  },
  "ไอ้น้อง": {
    "phonetic": "oi-nong",
    "meaning": "小兄弟"
  },
  "ไอ้บ้า": {
    "phonetic": "oi-baa",
    "meaning": "疯狂的"
  },
  "ไอ้ระยำ": {
    "phonetic": "oi-raya",
    "meaning": "他妈的混蛋"
  },
  "ไอ้หนู": {
    "phonetic": "oi-nuu",
    "meaning": "男生"
  },
  "ไอ้เลว": {
    "phonetic": "oi-lew",
    "meaning": "混蛋"
  },
  "ไอ้เวร": {
    "phonetic": "oi-wer",
    "meaning": "混蛋"
  },
  "ไอ้เสือ": {
    "phonetic": "oi-sueao",
    "meaning": "属虎的家伙"
  },
  "ไอ้แก่": {
    "phonetic": "oi-kae",
    "meaning": "老头儿"
  },
  "ไอ้โง่": {
    "phonetic": "oi-ngo",
    "meaning": "愚蠢的混蛋"
  },
  "ไฮ": {
    "phonetic": "hi",
    "meaning": "你好"
  },
  "ไฮเทค": {
    "phonetic": "hai-thek",
    "meaning": "高科技"
  },
  "ไฮ้": {
    "phonetic": "hi",
    "meaning": "你好"
  },
  "ๆ": {
    "phonetic": "",
    "meaning": "表示重复"
  },
  "ๆนะ": {
    "phonetic": "na",
    "meaning": "请"
  },
  "ๆๆ": {
    "phonetic": "ha-ha",
    "meaning": "哈哈"
  },
  "ๆๆๆ": {
    "phonetic": "ha-ha-ha",
    "meaning": "哈哈哈"
  }
,
  "สวัสดีครับ": {
    "phonetic": "sà-wàt-dii-khráp",
    "meaning": "你好（男）"
  },
  "สวัสดีค่ะ": {
    "phonetic": "sà-wàt-dii-khâ",
    "meaning": "你好（女）"
  },
  "ขอบคุณมาก": {
    "phonetic": "khɔ̀ɔp-khun-mâak",
    "meaning": "非常感谢"
  },
  "ยินดีที่ได้รู้จัก": {
    "phonetic": "yin-dii-thîi-dâi-rúu-jàk",
    "meaning": "很高兴认识你"
  },
  "แล้วคุณล่ะ": {
    "phonetic": "lǽew-khun-lâ",
    "meaning": "你呢？"
  },
  "ยินดีต้อนรับ": {
    "phonetic": "yin-dii-dtɔ̂ɔn-ráp",
    "meaning": "欢迎"
  },
  "ขอตัวก่อน": {
    "phonetic": "khɔ̌ɔ-dtua-gɔ̀ɔn",
    "meaning": "先告辞了"
  },
  "เดินทางปลอดภัย": {
    "phonetic": "doen-thaang-plɔ̀ɔt-phai",
    "meaning": "一路平安"
  },
  "ราตรีสวัสดิ์": {
    "phonetic": "raa-trii-sà-wàt",
    "meaning": "晚安"
  },
  "เชิญครับ": {
    "phonetic": "choen-khráp",
    "meaning": "请（男）"
  },
  "ทานให้อร่อยนะ": {
    "phonetic": "thaan-hâi-a-rɔ̀i-ná",
    "meaning": "祝用餐愉快"
  },
  "รักษาสุขภาพด้วย": {
    "phonetic": "rák-sǎa-sùk-khà-phâap-dûuai",
    "meaning": "保重身体"
  },
  "สุขสันต์วันเกิด": {
    "phonetic": "sùk-sǎn-wan-goet",
    "meaning": "生日快乐"
  },
  "สุขสันต์วันปีใหม่": {
    "phonetic": "sùk-sǎn-wan-bii-mài",
    "meaning": "新年快乐"
  },
  "ยินดีด้วย": {
    "phonetic": "yin-dii-dûuai",
    "meaning": "恭喜/祝贺"
  },
  "ไม่ค่อยดี": {
    "phonetic": "mâi-khɔ̂i-dii",
    "meaning": "不太好"
  },
  "เหนื่อยมาก": {
    "phonetic": "nʉ̀ai-mâak",
    "meaning": "很累"
  },
  "คิดถึงนะ": {
    "phonetic": "khít-thʉ̌ng-ná",
    "meaning": "想你哦"
  },
  "เป็นอย่างไรบ้าง": {
    "phonetic": "pen-yàang-rai-bâang",
    "meaning": "最近怎么样？"
  },
  "เหมือนเดิม": {
    "phonetic": "mʉ̌an-doem",
    "meaning": "老样子"
  },
  "ขอทางหน่อย": {
    "phonetic": "khɔ̌ɔ-thaang-nɔ̀i",
    "meaning": "请让一下"
  },
  "ช่วยด้วย": {
    "phonetic": "chûuai-dûuai",
    "meaning": "救命/帮帮忙"
  },
  "เงียบๆ หน่อย": {
    "phonetic": "ngîap-ngîap-nɔ̀i",
    "meaning": "请安静点"
  },
  "เข้าใจไหม": {
    "phonetic": "khâo-jai-mǎi",
    "meaning": "明白吗？"
  },
  "เข้าใจแล้ว": {
    "phonetic": "khâo-jai-lǽew",
    "meaning": "明白了"
  },
  "เช็คอิน": {
    "phonetic": "chek-in",
    "meaning": "登记/入住"
  },
  "ล้าง": {
    "phonetic": "láaŋ",
    "meaning": "洗/清洗"
  },
  "หลงทาง": {
    "phonetic": "long-thaang",
    "meaning": "迷路"
  },
  "ช่วยเหลือ": {
    "phonetic": "chûuai-lʉ̌ua",
    "meaning": "帮助/救助"
  },
  "แลกเงิน": {
    "phonetic": "lǽek-ngoen",
    "meaning": "兑换外币"
  },
  "ต่อรอง": {
    "phonetic": "dtɔ̀ɔ-rɔɔng",
    "meaning": "讨价还价"
  },
  "ซื้อของ": {
    "phonetic": "sʉ́ʉ-khɔ̌ɔng",
    "meaning": "购物/买东西"
  },
  "ถ่ายรูป": {
    "phonetic": "thàai-rûup",
    "meaning": "拍照"
  },
  "เช็คเอาท์": {
    "phonetic": "chek-áo",
    "meaning": "结账/退房"
  },
  "พักผ่อน": {
    "phonetic": "phák-phɔ̀ɔn",
    "meaning": "休息/放松"
  },
  "ออกกำลังกาย": {
    "phonetic": "ɔ̀ɔk-gam-lang-gaai",
    "meaning": "锻炼身体/运动"
  },
  "เซ็นชื่อ": {
    "phonetic": "sen-chʉ̂ʉ",
    "meaning": "签名"
  },
  "รอคอย": {
    "phonetic": "rɔɔ-khɔɔi",
    "meaning": "期待/盼望"
  },
  "อธิบาย": {
    "phonetic": "à-thí-baai",
    "meaning": "解释"
  },
  "เปรียบเทียบ": {
    "phonetic": "bprìiap-thîiap",
    "meaning": "比较"
  },
  "ตัดสินใจ": {
    "phonetic": "dtàt-sǐn-jai",
    "meaning": "决定"
  },
  "เตรียมตัว": {
    "phonetic": "dtriiam-dtua",
    "meaning": "准备"
  },
  "ฝึกซ้อม": {
    "phonetic": "fʉ̀k-sɔ́ɔm",
    "meaning": "练习/训练"
  },
  "พ่ายแพ้": {
    "phonetic": "phâai-phǽe",
    "meaning": "输/失败"
  },
  "ตกแต่ง": {
    "phonetic": "dtòk-dtàeng",
    "meaning": "装饰/装潢"
  },
  "วาดรูป": {
    "phonetic": "wâat-rûup",
    "meaning": "画画"
  },
  "ร้องเพลง": {
    "phonetic": "rɔ́ɔng-pheeng",
    "meaning": "唱歌"
  },
  "เล่นดนตรี": {
    "phonetic": "lên-don-dtrii",
    "meaning": "弹奏乐器"
  },
  "ทำความสะอาด": {
    "phonetic": "tham-khwaam-sà-àat",
    "meaning": "打扫/清洁"
  },
  "แบ่งปัน": {
    "phonetic": "baeng-bpan",
    "meaning": "分享/划分"
  },
  "ให้ยืม": {
    "phonetic": "hâi-yʉʉm",
    "meaning": "借出"
  },
  "คืนเงิน": {
    "phonetic": "khʉʉn-ngoen",
    "meaning": "还钱/退款"
  },
  "คัดค้าน": {
    "phonetic": "khát-kháan",
    "meaning": "反对"
  },
  "หลีกเลี่ยง": {
    "phonetic": "liik-lîiang",
    "meaning": "避免"
  },
  "เผชิญหน้า": {
    "phonetic": "phà-choen-nâa",
    "meaning": "面对/迎面"
  },
  "ยอมรับ": {
    "phonetic": "yɔɔm-ráp",
    "meaning": "接受/承认"
  },
  "ให้อภัย": {
    "phonetic": "hâi-à-phai",
    "meaning": "原谅/宽恕"
  },
  "แสดงความยินดี": {
    "phonetic": "sà-daeng-khwaam-yin-dii",
    "meaning": "祝贺/表达祝贺"
  },
  "หย่าร้าง": {
    "phonetic": "yàa-ráang",
    "meaning": "离婚"
  },
  "เจ็บป่วย": {
    "phonetic": "jèp-bprùai",
    "meaning": "生病"
  },
  "นำทาง": {
    "phonetic": "nam-thaang",
    "meaning": "导航/引路"
  },
  "ปฏิบัติตาม": {
    "phonetic": "bprà-thì-bàt-taam",
    "meaning": "遵守/遵照"
  },
  "ละเมิด": {
    "phonetic": "lá-moet",
    "meaning": "违反/侵犯"
  },
  "ปลดปล่อย": {
    "phonetic": "bplòt-bplɔ̀i",
    "meaning": "释放/解放"
  },
  "ลงชื่อเข้าใช้": {
    "phonetic": "long-chʉ̂ʉ-khâo-chái",
    "meaning": "登录"
  },
  "น่าเบื่อ": {
    "phonetic": "nâa-bʉ̀a",
    "meaning": "无聊"
  },
  "พัง": {
    "phonetic": "phang",
    "meaning": "坏的/破损的"
  },
  "เหม็น": {
    "phonetic": "mǐn",
    "meaning": "臭的"
  },
  "มืด": {
    "phonetic": "mʉ̂at",
    "meaning": "黑暗的"
  },
  "สว่าง": {
    "phonetic": "sà-wàang",
    "meaning": "明亮的"
  },
  "ง่วง": {
    "phonetic": "ngûang",
    "meaning": "困的"
  },
  "อิ่ม": {
    "phonetic": "ìm",
    "meaning": "饱的"
  },
  "มั่นใจ": {
    "phonetic": "mân-jai",
    "meaning": "自信的"
  },
  "ขยัน": {
    "phonetic": "khà-yǎn",
    "meaning": "勤奋"
  },
  "ขี้เกียจ": {
    "phonetic": "khîi-gìiat",
    "meaning": "懒惰"
  },
  "ซื่อสัตย์": {
    "phonetic": "sʉ̂ʉ-sàt",
    "meaning": "诚实"
  },
  "ปลอม": {
    "phonetic": "bplaawm",
    "meaning": "虚假/伪造"
  },
  "ใจดี": {
    "phonetic": "jai-dii",
    "meaning": "善良/心好"
  },
  "ใจร้าย": {
    "phonetic": "jai-ráai",
    "meaning": "恶毒/心坏"
  },
  "อดทน": {
    "phonetic": "òt-thon",
    "meaning": "耐心/忍耐"
  },
  "อ่อนโยน": {
    "phonetic": "ɔ̀ɔn-yoon",
    "meaning": "温柔"
  },
  "แข็งแกร่ง": {
    "phonetic": "khæ̌ng-glaeng",
    "meaning": "坚强/强壮"
  },
  "อ่อนเพลีย": {
    "phonetic": "ɔ̀ɔn-phliia",
    "meaning": "疲辈/无力"
  },
  "ร่าเริง": {
    "phonetic": "râa-roeng",
    "meaning": "开朗/活泼"
  },
  "เงียบขรึม": {
    "phonetic": "ngîap-khrʉ̌m",
    "meaning": "沉默寡言/忧郁"
  },
  "ใจร้อน": {
    "phonetic": "jai-rɔ́ɔn",
    "meaning": "急躁"
  },
  "สุขุม": {
    "phonetic": "sù-khǔm",
    "meaning": "稳重/沉稳"
  },
  "สว่างไสว": {
    "phonetic": "sà-wàang-sà-wǎi",
    "meaning": "灿烂/明亮"
  },
  "มืดมน": {
    "phonetic": "mʉ̂at-mon",
    "meaning": "昏暗/阴郁"
  },
  "แคบ": {
    "phonetic": "khǽep",
    "meaning": "窄"
  },
  "หยาบ": {
    "phonetic": "yaap",
    "meaning": "粗糙"
  },
  "เรียบเนียน": {
    "phonetic": "rîiap-niian",
    "meaning": "光滑"
  },
  "เปียกชื้น": {
    "phonetic": "bprìak-chʉ́n",
    "meaning": "潮湿"
  },
  "แห้งแล้ง": {
    "phonetic": "hâeng-lǽeng",
    "meaning": "干旱"
  },
  "คม": {
    "phonetic": "khom",
    "meaning": "锋利"
  },
  "ทื่อ": {
    "phonetic": "thʉ̂ʉ",
    "meaning": "钝"
  },
  "เน่า": {
    "phonetic": "nâo",
    "meaning": "腐烂"
  },
  "อร่อยเลิศ": {
    "phonetic": "a-rɔ̀i-loet",
    "meaning": "极美味"
  },
  "เค็มจัด": {
    "phonetic": "khem-jàt",
    "meaning": "极咸"
  },
  "เปรี้ยวจี๊ด": {
    "phonetic": "bprîaw-jít",
    "meaning": "极酸"
  },
  "เผ็ดร้อน": {
    "phonetic": "phèt-rɔ́ɔn",
    "meaning": "辛辣"
  },
  "ร้อนจัด": {
    "phonetic": "rɔ́ɔn-jàt",
    "meaning": "炎热"
  },
  "หนาวสั่น": {
    "phonetic": "nǎao-sàn",
    "meaning": "严寒/冷得发抖"
  },
  "ทันสมัย": {
    "phonetic": "than-sà-mǎi",
    "meaning": "时髦/现代"
  },
  "หรูหรา": {
    "phonetic": "rǔu-rǎa",
    "meaning": "奢华"
  },
  "เรียบง่าย": {
    "phonetic": "rîiap-ngâai",
    "meaning": "朴素/简单"
  },
  "วุ่นวาย": {
    "phonetic": "wûn-waai",
    "meaning": "混乱/繁忙"
  },
  "อัศจรรย์": {
    "phonetic": "àt-sà-jan",
    "meaning": "奇妙/神奇"
  },
  "คลุมเครือ": {
    "phonetic": "khlum-khrua",
    "meaning": "模糊/不明确"
  },
  "โรงพยาบาล": {
    "phonetic": "roong-phá-yaa-baan",
    "meaning": "医院"
  },
  "ร้านอาหาร": {
    "phonetic": "ráan-aa-hǎan",
    "meaning": "餐厅"
  },
  "ผลไม้": {
    "phonetic": "phǒn-lá-mái",
    "meaning": "水果"
  },
  "เครื่องบิน": {
    "phonetic": "khrʉ̂ang-bin",
    "meaning": "飞机"
  },
  "พาสปอร์ต": {
    "phonetic": "phaat-bpɔ̀ɔt",
    "meaning": "护照"
  },
  "กระเป๋าเดินทาง": {
    "phonetic": "grà-bpǎo-doen-thaang",
    "meaning": "旅行箱"
  },
  "ของฝาก": {
    "phonetic": "khɔ̌ɔng-fàak",
    "meaning": "特产/伴手礼"
  },
  "ของเล่น": {
    "phonetic": "khɔ̌ɔng-lên",
    "meaning": "玩具"
  },
  "ที่พัก": {
    "phonetic": "thîi-phák",
    "meaning": "住所/住宿"
  },
  "ห้องนั่งเล่น": {
    "phonetic": "hɔ̂ng-nâng-lên",
    "meaning": "客厅"
  },
  "ห้องครัว": {
    "phonetic": "hɔ̂ng-khrua",
    "meaning": "厨房"
  },
  "ตู้เย็น": {
    "phonetic": "dtûu-yen",
    "meaning": "冰箱"
  },
  "เครื่องซักผ้า": {
    "phonetic": "khrʉ̂ang-sák-phâa",
    "meaning": "洗衣机"
  },
  "ผ้าห่ม": {
    "phonetic": "phâa-hòm",
    "meaning": "被子/毛毯"
  },
  "พัดลม": {
    "phonetic": "phát-lom",
    "meaning": "电风扇"
  },
  "เครื่องปรับอากาศ": {
    "phonetic": "khrʉ̂ang-bpràp-aa-gàat",
    "meaning": "空调"
  },
  "โทรทัศน์": {
    "phonetic": "thoo-rá-thát",
    "meaning": "电视"
  },
  "อาหารเช้า": {
    "phonetic": "aa-hǎan-cháao",
    "meaning": "早餐"
  },
  "อาหารเที่ยง": {
    "phonetic": "aa-hǎan-thîang",
    "meaning": "午餐"
  },
  "อาหารเย็น": {
    "phonetic": "aa-hǎan-yen",
    "meaning": "晚餐"
  },
  "แก้วน้ำ": {
    "phonetic": "gǽew-nám",
    "meaning": "杯子"
  },
  "ช้อน": {
    "phonetic": "chɔ́ɔn",
    "meaning": "勺子"
  },
  "ส้อม": {
    "phonetic": "sɔ̂ɔm",
    "meaning": "叉子"
  },
  "ตะเกียบ": {
    "phonetic": "dtà-gìiap",
    "meaning": "筷子"
  },
  "โคมไฟ": {
    "phonetic": "khoom-fai",
    "meaning": "灯"
  },
  "แว่นตา": {
    "phonetic": "wǽn-dtaa",
    "meaning": "眼镜"
  },
  "ปากกา": {
    "phonetic": "bpaak-gaa",
    "meaning": "笔"
  },
  "กระเป๋าเงิน": {
    "phonetic": "grà-bpǎo-ngoen",
    "meaning": "钱包"
  },
  "ขนม": {
    "phonetic": "khà-nǒm",
    "meaning": "零食/点心"
  },
  "สบู่": {
    "phonetic": "sà-bùu",
    "meaning": "肥皂/沐浴露"
  },
  "ยาสีฟัน": {
    "phonetic": "yaa-sǐi-fan",
    "meaning": "牙膏"
  },
  "แปรงสีฟัน": {
    "phonetic": "bpraeng-sǐi-fan",
    "meaning": "牙刷"
  },
  "ผ้าเช็ดตัว": {
    "phonetic": "phâa-chét-dtua",
    "meaning": "毛巾/浴巾"
  },
  "กระจก": {
    "phonetic": "grà-jòk",
    "meaning": "镜子"
  },
  "หวี": {
    "phonetic": "wǐi",
    "meaning": "梳子"
  },
  "แชมพู": {
    "phonetic": "chaem-phuu",
    "meaning": "洗发水"
  },
  "ถุงพลาสติก": {
    "phonetic": "thǔng-phlaas-dtìk",
    "meaning": "塑料袋"
  },
  "รถจักรยาน": {
    "phonetic": "rót-jàk-grà-yaan",
    "meaning": "自行车"
  },
  "รถจักรยานยนต์": {
    "phonetic": "rót-jàk-grà-yaan-yon",
    "meaning": "摩托车"
  },
  "สวนสาธารณะ": {
    "phonetic": "sǔan-sǎa-thaa-rá-ná",
    "meaning": "公园"
  },
  "ท้องฟ้า": {
    "phonetic": "thɔ́ɔng-fáa",
    "meaning": "天空"
  },
  "เมฆ": {
    "phonetic": "mêek",
    "meaning": "云"
  },
  "หิมะ": {
    "phonetic": "hì-má",
    "meaning": "雪"
  },
  "ทะเลสาบ": {
    "phonetic": "thá-lee-sàap",
    "meaning": "湖泊"
  },
  "ป่าไม้": {
    "phonetic": "bpaa-mái",
    "meaning": "森林"
  },
  "หญ้า": {
    "phonetic": "yâa",
    "meaning": "草"
  },
  "ใบไม้": {
    "phonetic": "bai-mái",
    "meaning": "树叶"
  },
  "มหาสมุทร": {
    "phonetic": "má-hǎa-sà-mùt",
    "meaning": "海洋"
  },
  "ดวงอาทิตย์": {
    "phonetic": "duuang-aa-thít",
    "meaning": "太阳"
  },
  "ดวงจันทร์": {
    "phonetic": "duuang-jan",
    "meaning": "月亮"
  },
  "ดวงดาว": {
    "phonetic": "duuang-daao",
    "meaning": "星星"
  },
  "ไปรษณีย์": {
    "phonetic": "bprai-sà-nii",
    "meaning": "邮局"
  },
  "ตลาดโต้รุ่ง": {
    "phonetic": "dtà-làat-dtôo-rûng",
    "meaning": "夜市"
  },
  "สถานีตำรวจ": {
    "phonetic": "sà-thǎa-nii-dam-ruat",
    "meaning": "警察局"
  },
  "ห้องสมุด": {
    "phonetic": "hɔ̂ng-sà-mùt",
    "meaning": "图书馆"
  },
  "ร้านค้า": {
    "phonetic": "ráan-kháa",
    "meaning": "商店"
  },
  "พิพิธภัณฑ์": {
    "phonetic": "phí-phít-thá-phan",
    "meaning": "博物馆"
  },
  "วันจันทร์": {
    "phonetic": "wan-jan",
    "meaning": "周一"
  },
  "วันอังคาร": {
    "phonetic": "wan-ang-khaan",
    "meaning": "周二"
  },
  "วันพุธ": {
    "phonetic": "wan-phút",
    "meaning": "周三"
  },
  "วันพฤหัสบดี": {
    "phonetic": "wan-phrá-hʉ̀-hàt-sà-bɔɔ-dii",
    "meaning": "周四"
  },
  "วันศุกร์": {
    "phonetic": "wan-sùk",
    "meaning": "周五"
  },
  "วันเสาร์": {
    "phonetic": "wan-sǎo",
    "meaning": "周六"
  },
  "วันอาทิตย์": {
    "phonetic": "wan-aa-thít",
    "meaning": "周日"
  },
  "เมื่อวาน": {
    "phonetic": "mʉ̂a-waan",
    "meaning": "昨天"
  },
  "กลางคืน": {
    "phonetic": "glaang-khʉʉn",
    "meaning": "夜晚"
  },
  "บ่อยครั้ง": {
    "phonetic": "bɔ̀i-khráng",
    "meaning": "经常"
  },
  "บางครั้ง": {
    "phonetic": "baang-khráng",
    "meaning": "有时"
  },
  "เร็วๆ นี้": {
    "phonetic": "reo-reo-nii",
    "meaning": "最近"
  },
  "เมื่อก่อน": {
    "phonetic": "mʉ̂a-gɔ̀ɔn",
    "meaning": "过去"
  },
  "ปีหน้า": {
    "phonetic": "bii-nâa",
    "meaning": "明年"
  },
  "ปีที่แล้ว": {
    "phonetic": "bii-thîi-lǽew",
    "meaning": "去年"
  },
  "เดือนนี้": {
    "phonetic": "duan-nii",
    "meaning": "本月"
  },
  "เดือนหน้า": {
    "phonetic": "duan-nâa",
    "meaning": "下月"
  },
  "เดือนที่แล้ว": {
    "phonetic": "duan-thîi-lǽew",
    "meaning": "上月"
  },
  "สุดสัปดาห์": {
    "phonetic": "sùt-sàp-daa",
    "meaning": "周末"
  },
  "เช้าตรู่": {
    "phonetic": "cháao-dtrùu",
    "meaning": "清晨"
  },
  "ตลอดเวลา": {
    "phonetic": "dtà-lɔ̀ɔt-wee-laa",
    "meaning": "一直"
  },
  "บางส่วน": {
    "phonetic": "baang-sùan",
    "meaning": "部分"
  }
,
  "ข้าวผัด": {
    "phonetic": "khâao-phát",
    "meaning": "炒饭"
  },
  "อาหารทะเล": {
    "phonetic": "aa-hǎan-thá-lee",
    "meaning": "海鲜"
  },
  "เนื้อหมู": {
    "phonetic": "nʉ́aa-muu",
    "meaning": "猪肉"
  },
  "เนื้อไก่": {
    "phonetic": "nʉ́aa-gai",
    "meaning": "鸡肉"
  },
  "เนื้อวัว": {
    "phonetic": "nʉ́aa-wua",
    "meaning": "牛肉"
  },
  "หอย": {
    "phonetic": "hɔ̌ɔi",
    "meaning": "贝类/贝壳"
  },
  "ปลาหมึก": {
    "phonetic": "bplaa-mʉ̀k",
    "meaning": "鱿鱼/乌贼"
  },
  "ไข่ไก่": {
    "phonetic": "khài-gai",
    "meaning": "鸡蛋"
  },
  "ผักสด": {
    "phonetic": "phàk-sòt",
    "meaning": "新鲜蔬菜"
  },
  "พริกขี้หนู": {
    "phonetic": "phrik-khîi-nǔu",
    "meaning": "朝天椒/小辣椒"
  },
  "กระเทียม": {
    "phonetic": "grà-thiiam",
    "meaning": "大蒜"
  },
  "ซอส": {
    "phonetic": "sɔ́ɔt",
    "meaning": "酱汁"
  },
  "มะละกอ": {
    "phonetic": "má-lá-gɔɔ",
    "meaning": "木瓜"
  },
  "นมสด": {
    "phonetic": "nom-sòt",
    "meaning": "鲜牛奶"
  },
  "น้ำแร่": {
    "phonetic": "nám-rǽ",
    "meaning": "矿泉水"
  },
  "น้ำมะพร้าว": {
    "phonetic": "nám-má-phráao",
    "meaning": "椰浆/椰子水"
  },
  "ชาร้อน": {
    "phonetic": "chaa-rɔ́ɔn",
    "meaning": "热茶"
  },
  "เนย": {
    "phonetic": "noei",
    "meaning": "黄油"
  },
  "เสื้อยืด": {
    "phonetic": "sʉ̂a-yʉ̂ut",
    "meaning": "T恤"
  },
  "ถุงเท้า": {
    "phonetic": "thǔng-tháo",
    "meaning": "袜子"
  },
  "ชุดว่ายน้ำ": {
    "phonetic": "chút-wâai-nám",
    "meaning": "泳衣"
  },
  "ต่างหู": {
    "phonetic": "dtàang-hǔu",
    "meaning": "耳环"
  },
  "น้ำหอม": {
    "phonetic": "nám-hɔ̌ɔm",
    "meaning": "香水"
  },
  "ลิปสติก": {
    "phonetic": "lip-sà-dtìk",
    "meaning": "口红"
  },
  "ครีมกันแดด": {
    "phonetic": "khriim-gan-dæ̀et",
    "meaning": "防晒霜"
  },
  "ทิชชู่": {
    "phonetic": "thít-chûu",
    "meaning": "纸巾"
  },
  "ผ้าอนามัย": {
    "phonetic": "phâa-à-naa-mai",
    "meaning": "卫生巾"
  },
  "ยาสามัญ": {
    "phonetic": "yaa-sǎa-man",
    "meaning": "常用药/感冒药"
  },
  "ยาแก้ปวด": {
    "phonetic": "yaa-gæ̂e-bprùat",
    "meaning": "止痛药"
  },
  "พลาสเตอร์": {
    "phonetic": "phlaas-dtooe",
    "meaning": "创可贴"
  },
  "หน้ากากอนามัย": {
    "phonetic": "nâa-gàak-à-naa-mai",
    "meaning": "口罩"
  },
  "เครื่องสำอาง": {
    "phonetic": "khrʉ̂ang-sǎm-aang",
    "meaning": "化妆品"
  },
  "แป้งฝุ่น": {
    "phonetic": "bpæ̂ng-fùn",
    "meaning": "爽身粉/爽身香粉"
  },
  "วิตามิน": {
    "phonetic": "wí-dtaa-min",
    "meaning": "维生素"
  },
  "คอนแทคเลนส์": {
    "phonetic": "khɔn-thǽk-len",
    "meaning": "隐形眼镜"
  },
  "เครื่องโกนหนวด": {
    "phonetic": "khrʉ̂ang-goon-nùuat",
    "meaning": "剃须刀"
  },
  "สำลี": {
    "phonetic": "sǎm-lii",
    "meaning": "棉签/棉花"
  },
  "เจลล้างมือ": {
    "phonetic": "jeen-láang-mʉʉ",
    "meaning": "洗手液/免洗洗手液"
  },
  "หูฟัง": {
    "phonetic": "hǔu-fang",
    "meaning": "耳机"
  },
  "ที่ชาร์จ": {
    "phonetic": "thîi-cháat",
    "meaning": "充电器"
  },
  "พาวเวอร์แบงค์": {
    "phonetic": "phaaw-wooe-bæng",
    "meaning": "充电宝"
  },
  "ซิมการ์ด": {
    "phonetic": "sim-gàat",
    "meaning": "SIM卡"
  },
  "เงินทอน": {
    "phonetic": "ngoen-thɔɔn",
    "meaning": "零钱/找零"
  },
  "สถานีรถไฟ": {
    "phonetic": "sà-thǎa-nii-rót-fai",
    "meaning": "火车站"
  },
  "ป้ายรถเมล์": {
    "phonetic": "bpâai-rót-mee",
    "meaning": "公交车站"
  },
  "สี่แยก": {
    "phonetic": "sìi-yæ̂ek",
    "meaning": "十字路口"
  },
  "ทางม้าลาย": {
    "phonetic": "thaang-mâa-laai",
    "meaning": "人行道/斑马线"
  },
  "ที่จอดรถ": {
    "phonetic": "thîi-jɔ̀ɔt-rót",
    "meaning": "停车场"
  },
  "แหล่งท่องเที่ยว": {
    "phonetic": "læ̀ng-thîiaw",
    "meaning": "景点"
  },
  "พระราชวัง": {
    "phonetic": "phrá-râat-chá-wang",
    "meaning": "皇宫"
  },
  "น้ำตก": {
    "phonetic": "nám-dtòk",
    "meaning": "瀑布"
  },
  "สวนสัตว์": {
    "phonetic": "sǔan-sàt",
    "meaning": "动物园"
  },
  "สวนสนุก": {
    "phonetic": "sǔan-sà-nùk",
    "meaning": "游乐园"
  },
  "ตลาดน้ำ": {
    "phonetic": "dtà-làat-nám",
    "meaning": "水上市场"
  },
  "ห้างสรรพสินค้า": {
    "phonetic": "hâang-sǎp-phá-sǐn-kháa",
    "meaning": "百货商场"
  },
  "ซูเปอร์มาร์เก็ต": {
    "phonetic": "suu-bpooe-maa-gét",
    "meaning": "超市"
  },
  "ร้านสะดวกซื้อ": {
    "phonetic": "ráan-sà-dùak-sʉ́ʉ",
    "meaning": "便利店"
  },
  "ร้านขายยา": {
    "phonetic": "ráan-khǎai-yaa",
    "meaning": "药店"
  },
  "ร้านกาแฟ": {
    "phonetic": "ráan-gaa-fae",
    "meaning": "咖啡馆"
  },
  "สถานบันเทิง": {
    "phonetic": "sà-thǎan-ban-thoeng",
    "meaning": "酒吧/娱乐场所"
  },
  "โรงภาพยนตร์": {
    "phonetic": "roong-phâap-phá-yon",
    "meaning": "电影院"
  },
  "ร้านนวด": {
    "phonetic": "ráan-nûaat",
    "meaning": "按摩店"
  },
  "สปา": {
    "phonetic": "sà-paa",
    "meaning": "SPA馆"
  },
  "ตู้อีทีเอ็ม": {
    "phonetic": "dtûu-ee-thii-em",
    "meaning": "ATM机"
  },
  "แผนกต้อนรับ": {
    "phonetic": "phà-nǽek-dtɔ̂ɔn-ráp",
    "meaning": "前台/接待处"
  },
  "ลิฟต์": {
    "phonetic": "líp",
    "meaning": "电梯"
  },
  "บันไดเลื่อน": {
    "phonetic": "ban-dai-lʉ̂an",
    "meaning": "扶梯"
  },
  "ห้องโถง": {
    "phonetic": "hɔ̂ng-thǒong",
    "meaning": "大厅"
  },
  "ลานจอดรถ": {
    "phonetic": "laan-jɔ̀ɔt-rót",
    "meaning": "停车坪"
  },
  "ทางเข้า": {
    "phonetic": "thaang-khâo",
    "meaning": "入口"
  },
  "บัตรผ่าน": {
    "phonetic": "bàt-phàan",
    "meaning": "门票/通行证"
  },
  "ใบเสร็จ": {
    "phonetic": "bai-sèt",
    "meaning": "收据/发票"
  },
  "โต๊ะทำงาน": {
    "phonetic": "dtó-tham-ngaan",
    "meaning": "办公桌"
  },
  "รหัสผ่าน": {
    "phonetic": "rá-hàt-phàan",
    "meaning": "密码"
  },
  "แฟ้ม": {
    "phonetic": "fǽm",
    "meaning": "文件夹"
  },
  "เครื่องพิมพ์": {
    "phonetic": "khrʉ̂ang-phim",
    "meaning": "打印机"
  },
  "ดินสอ": {
    "phonetic": "din-sɔ̌ɔ",
    "meaning": "铅笔"
  },
  "ยางลบ": {
    "phonetic": "yaang-lóp",
    "meaning": "橡皮擦"
  },
  "ไม้บรรทัด": {
    "phonetic": "mái-ban-thát",
    "meaning": "直尺"
  },
  "ปฏิทิน": {
    "phonetic": "bprà-thì-thin",
    "meaning": "日历"
  },
  "บัตรประชาชน": {
    "phonetic": "bàt-bprà-chaa-chon",
    "meaning": "身份证"
  },
  "นามบัตร": {
    "phonetic": "naam-bàt",
    "meaning": "名片"
  },
  "การประชุม": {
    "phonetic": "gaan-bprà-chum",
    "meaning": "会议"
  },
  "ห้องประชุม": {
    "phonetic": "hɔ̂ng-bprà-chum",
    "meaning": "会议室"
  },
  "แฟลชไดร์ฟ": {
    "phonetic": "fláet-daai",
    "meaning": "U盘"
  },
  "ผงซักฟอก": {
    "phonetic": "phǒng-sák-fɔ̂ɔk",
    "meaning": "洗衣粉"
  },
  "น้ำยาล้างจาน": {
    "phonetic": "nám-yaa-láang-jaan",
    "meaning": "洗洁精"
  },
  "ถังขยะ": {
    "phonetic": "thǎng-khà-yà",
    "meaning": "垃圾桶"
  },
  "ไม้กวาด": {
    "phonetic": "mái-gùaat",
    "meaning": "扫帚"
  },
  "ผ้าถูพื้น": {
    "phonetic": "phâa-thǔu-phʉ́ʉn",
    "meaning": "拖把/抹布"
  },
  "ปลั๊กไฟ": {
    "phonetic": "bplák-fai",
    "meaning": "插头/插座"
  },
  "หลอดไฟ": {
    "phonetic": "lɔ̀ɔt-fai",
    "meaning": "灯泡/灯管"
  },
  "ไขควง": {
    "phonetic": "khǎi-khuaang",
    "meaning": "螺丝刀"
  },
  "ค้อน": {
    "phonetic": "khɔ́ɔn",
    "meaning": "铁锤"
  },
  "ตะปู": {
    "phonetic": "dtà-bpuu",
    "meaning": "铁钉"
  },
  "แม่กุญแจ": {
    "phonetic": "mæ̂-gun-jae",
    "meaning": "锁/挂锁"
  },
  "หิน": {
    "phonetic": "hǐn",
    "meaning": "石头"
  },
  "ทราย": {
    "phonetic": "saai",
    "meaning": "沙子"
  },
  "โลหะ": {
    "phonetic": "loo-hà",
    "meaning": "金属"
  },
  "เหล็ก": {
    "phonetic": "lèk",
    "meaning": "铁"
  },
  "ทองคำ": {
    "phonetic": "thɔɔng-kham",
    "meaning": "黄金"
  },
  "เงินตรา": {
    "phonetic": "ngoen-dtraa",
    "meaning": "货币"
  },
  "นิตยสาร": {
    "phonetic": "nít-dtà-yà-sǎan",
    "meaning": "杂志"
  },
  "หนังสือพิมพ์": {
    "phonetic": "nǎng-sʉ̌ʉ-phim",
    "meaning": "报纸"
  },
  "พัสดุ": {
    "phonetic": "phát-sà-dù",
    "meaning": "包裹/快递"
  },
  "แสตมป์": {
    "phonetic": "sà-taem",
    "meaning": "邮票"
  },
  "ความหวัง": {
    "phonetic": "khwaam-wǎng",
    "meaning": "希望"
  },
  "กระดุม": {
    "phonetic": "grà-dum",
    "meaning": "纽扣"
  },
  "ไอศครีม": {
    "phonetic": "ai-sà-khriim",
    "meaning": "冰淇淋"
  },
  "ไอศกรีม": {
    "phonetic": "ai-sà-griim",
    "meaning": "冰淇淋"
  }
};

export function lookupWord(word: string): DictEntry | null {
  return BUILTIN_DICT[word] || null;
}
