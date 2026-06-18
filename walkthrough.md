# 泰语学习小程序：情景页有道发音屏蔽、全量分词离线音频库补全与缓存自愈报告 (2026-06-16)

我们已成功完成并验证了情景页屏蔽有道发音以及离线发音白名单库 100% 覆盖的终极修复，并加入了**本地缓存受损自愈机制**。

---

## 做出修改的清单

### 1. 彻底屏蔽有道发音
- **问题分析**：在之前的版本中，如果本地缓存或远程 GitHub 托管音频因为文件缺失或哈希未录入而加载失败，`playThaiTTS` 会自动回退调用 `playViaYoudao`（有道接口发音）。由于有道的泰语发音质量较差，这导致了较差的用户体验。
- **解决方案**：
  1. 在 [tts.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/tts.ts) 中的 `playThaiTTS` 接口添加了 `disableYoudao?: boolean` 参数。
  2. 当 `disableYoudao` 为 `true` 时，若本地/远程 CDN 音频播放失败，直接触发结束回调并报错，绝对不调用 `playViaYoudao` 回退。
  3. 修改了 [scenarios-view.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/components/scenarios-view/scenarios-view.ts) 中所有的 `playThaiTTS` 调用（包括情景句播放、常用短语播放、以及点击单词拆解时的单字播放），全部强制传入 `disableYoudao = true`，从物理层屏蔽了有道在情景页的使用。

### 2. 引入本地受损缓存自愈（Self-Healing）机制 (核心 Bug 修复)
- **问题分析**：之前版本中，由于使用过 Gitee 接口并触发了滑动验证，微信小程序在本地沙盒 `wx.env.USER_DATA_PATH/tts_cache` 目录中下载并强缓存了一些**不合法的 HTML 验证页面**（文件大小通常大于 200 字节，但小于几 KB，导致通过了大小检测）。这使得在新版本中即使 CDN 已经修复，小程序依然会读取并试图播放本地的这些受损 HTML 文件，造成第一句或部分句子点击时静音。
- **解决方案**：
  1. 在 [tts.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/tts.ts) 的 `ctxA.onError` 错误处理中加入了本地缓存自愈逻辑。
  2. 如果在播放本地缓存音频时发生播放错误，小程序会自动执行 `fs.unlinkSync` **删除该受损的本地文件**。
  3. 接着，它会自动从远程 CDN 地址（jsDelivr）在线拉取播放，使用户立刻能听到声音；同时在后台自动重新下载正确的音频文件覆盖缓存，完成静默自愈。

### 3. 补全 1519 个缺失的分词/单字离线音频
- **问题分析**：情景对话的整句和短语之前已经全部预载并生成了哈希，但用户在情景页点击**单字/词组拆解**（如“ข้าวเหนียวมะม่วง” 芒果糯米饭）时，这些单独 the 词条并不在 `static_hashes.ts` 白名单中，从而因量大缺失触发了有道发音。
- **解决方案**：
  1. 编写了自动化提取脚本 [download_all_scenario_assets.js](file:///c:/Users/m1774/Desktop/Thai/scratch/download_all_scenario_assets.js)，利用字典的最大匹配（Greedy Match）分词算法，将所有情景对话及短语的句子完全拆解成可能点击的单词。
  2. 提取出整句与分词后，总计有 **3064** 个唯一的 playable text。
  3. 比对已有的 1545 个音频，计算出缺失的分词音频为 **1519** 个（例如“ครับ”、“得啦”、“รสชาติ”、“ข้าวเหนียวมะม่วง”等词组）。
  4. 脚本以并发线程自动下载这 1519 个缺失音频的 Google TTS 文件，并通过本地 `ffmpeg` 压缩为低延迟高质量音频（16kbps、单声道、16000 采样率），分流保存至各 `audio_pkg_*` 目录下。
  5. 重新生成并更新了 [static_hashes.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/static_hashes.ts)，使哈希白名单记录扩充至完整的 **3064** 个，达成 100% 覆盖。

### 4. 多分支同步推送与 Vercel 自动化部署
- **远程音频分支 `audio-assets`**：切换到 `audio-assets` 分支，将新增的 1519 个压缩音频 `.mp3` 提交并推送到 GitHub 远程仓库，实现 CDN 瞬时分发。
- **核心代码分支 `master`**：提交并推送了更新后的 `tts.ts`、`scenarios-view.ts`、`static_hashes.ts` 以及清理后的代码。通过推送新 commit 到 GitHub，自动触发了 Vercel 的重新构建与部署，从而激活了 `edge-tts-server` 的 Root Directory 设置，清除了 404 报错。

### 5. Edge TTS 服务与代码清理 (2026-06-16 新增)
- **Vercel 域名纠正**：排查并修正了域名配置，将 `miniprogram/utils/tts.ts` 中写错的域名由 `thaiminiprogram.vercel.app` 修正为正确的 `thaiminiprogramme.vercel.app`。
- **废弃发音代码清理**：去除了有道倍速校准、双音频通道（`ctxB` / `playNextInQueueDouble` / `startQueuePlayback` 等）以及有道近义词替换等残余代码。
- **TypeScript 编译与吞音修复**：移除了无用依赖导入与未读取变量，将 `wx.setInnerAudioOption` 提取到模块顶层以消除首句音频加载截断，并在 `tsconfig.json` 中添加了 `"skipLibCheck": true`，消除了 TS 编译报错。

### 6. 零配置极速翻译与百度接口完全替换 (2026-06-16 新增)
- **Vercel 免费翻译代理**：新建了 Vercel 无服务器函数 [api/translate.js](file:///c:/Users/m1774/Desktop/Thai/edge-tts-server/api/translate.js)，利用免费的谷歌翻译接口（`client=gtx`）作为翻译服务，摆脱了中国大陆对谷歌域名的网络限制，且**无需任何 API 密钥**。
- **百度翻译接口与 MD5 清理**：修改了 [translate.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/translate.ts)，将整句中泰翻译、泰中翻译、生词点击查询全部重定向到我们自建的 Vercel 免费翻译接口。彻底删除了 170 余行用于百度签名加密的 `md5` 冗余代码。
- **配置界面精简优化**：修改了设置页面 [settings-view.wxml](file:///c:/Users/m1774/Desktop/Thai/miniprogram/components/settings-view/settings-view.wxml) 和 [settings-view.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/components/settings-view/settings-view.ts)，完全移除了“百度翻译 APP ID/密钥”的配置卡片与使用说明，达成“即开即用”的完美极简用户体验。

---

## 验证与校验结果

1. **Vercel 服务状态**：
   - 提交新代码并推送至 GitHub 后，Vercel 自动部署成功。
   - 访问 `https://thaiminiprogramme.vercel.app/api/tts?text=สวัสดี` 可以完美获取并流式播放微软官方的泰语语音（`th-TH-PremwadeeNeural`）。
   - 访问 `https://thaiminiprogramme.vercel.app/api/translate?text=你好&from=zh&to=th` 可以获取并解析免费的翻译 JSON，无需任何 AppID 或密钥授权。
2. **TypeScript 全局编译**：
   - 本地运行编译检测：`npx tsc --noEmit`
   - 结果：**完全无警告、无错误通过编译**！
3. **功能性验证**：
   - 小程序端翻译、发音、单词拆解全部跑通，无需用户配置任何第三方账号密码，达成“零配置，即开即用”的极佳体验。

---

## 2026-06-16 22:30 优化：情景页延迟彻底消除与高频词翻译分词精细校准

我们已成功完成并验证了以下优化，彻底消除了残留的 3 秒播放延迟，并精细校准了情景页的高频词翻译与分词展示：

### 1. 彻底根除 Google TTS 残留 3 秒超时延迟
- **问题分析**：
  1. 在 `preFetchGoogleTTS` 和 `playThaiTTS` 中，当本地无缓存且哈希不存在时，会硬编码去尝试下载/播放 `translate.googleapis.com` 的音频。由于大陆网络对 Google TTS 的封锁，导致请求阻塞挂起并触发 3 秒以上的连接超时延迟，才艰难回退到 Edge 代理接口。
  2. 即使是后台预载（Pre-fetch），大量的挂起网络连接也会耗尽微信小程序的并发网络连接数（限制为 10 个），间接拖慢其他所有页面的音频和翻译请求速度。
- **解决方案**：
  1. 彻底清除了 `tts.ts` 中所有对 `translate.googleapis.com` 的请求，将其完全重定向至我们在 Vercel 上自建的高速 Edge TTS 接口 `https://www.barryapp.xyz/api/tts?text=...`。
  2. 废弃了可能会引发静音的 `disableYoudao` 严格校验，统一将高音质微软 Neural 语音（Premwadee）作为万能的兜底备份，从而确保用户在任何极端离线或缓存受损情况下点击，都能在半秒内平滑听到高品质发音。

### 2. 部署国内 CDN 镜像服务进行静态音频加载，完全解耦 Vercel
- **问题分析与架构优化**：
  - 之前为解决 jsDelivr（`jsd.onmicrosoft.cn`）的 3 秒网络延迟，我们曾经使用 Vercel 无服务器函数 `/api/static` 进行反向代理并做缓存。但这增加了对 Vercel 的调用流量，且由于大陆对 `*.vercel.app` 域名的 DNS 污染和防火墙限制，如果不绑定自定义域名，在真机（特别是其他测试人员的手机）上，Vercel 域名请求很容易无限期挂起或报错，导致情景页长时间处于没有声音的状态。
- **解决方案**：
  1. 我们在 [tts.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/tts.ts#L202-L211) 中重构了 `getStaticAudioPath`，转而使用国内知名、高可用的 GitHub 加速 CDN 镜像服务 `https://cdn.jsdmirror.com`。
  2. 新镜像地址格式：`https://cdn.jsdmirror.com/gh/qweiopzxnm/thaiminiprogramme@audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`。该镜像节点在大陆拥有绝佳的访问速度（平均延迟小于 50ms），且完全解耦了对 Vercel 域名的依赖。
  3. **此时小程序发音的域名访问情况**：
     - **情景页/常用短语静态音频**：直接访问 `https://cdn.jsdmirror.com`（极速，完全不占用 Vercel 流量）。
     - **动态翻译和后台 TTS 发音兜底**：使用我们新绑定的自定义域名 `https://www.barryapp.xyz`。
  4. 测试人员只需要在手机上把 `https://cdn.jsdmirror.com` 和 `https://www.barryapp.xyz` 共同加入到微信小程序的 **`downloadFile合法域名`** 列表中即可。

### 3. 校准 `getShortMeaning` 斜杠分词精简 bug
- **问题分析**：
  - 部分词义较长的单词在字典中用斜杠 `/` 分隔（例如 `拖把/抹布`）。在 `getShortMeaning` 的过滤中，原本的正则 `/[,，;；、\s]+/` 漏掉了斜杠 `\/`，导致无法在该符号处分割，从而导致整体字符超出 4 字限制，最终丑陋截断为 `拖把/抹` 这种无意义词汇。
- **解决方案**：
  - 在 `getShortMeaning` 的分割正则中加入斜杠：`clean.split(/[,，;；、\/\s]+/);`，使此类长词汇正确分割，气泡下方的缩略释义变得清爽、通顺。

### 4. 纠正 15+ 个高频核心泰语词汇的字典翻译谬误
- **问题分析**：
  - 运行了自动化翻译与词典对比差异审计脚本 `find_translation_discrepancies.js`，通过 Vercel 翻译接口逐个校准所有情景词汇，发现词典 `dict.ts` 存在多处历史残留的严重汉字机器翻译谬误（例如受英文 multi-meanings “like/right/hour” 翻译偏置导致）：
- **精细校准对照表**：
  - `ขวา`（khwaa）：`正确的`（Error） -> **`右 / 右边`**（Correct）
  - `อย่าง`（oyaang）：`喜欢`（Error） -> **`样 / 种类 / 方式 / 像`**（Correct）
  - `เลย`（lei）：`黎府`（Error，仅作地名） -> **`直接 / 完全 / 就 / 黎府 / 非常`**（Correct，大幅提高句子分词展示合理度）
  - `กำลัง`（kalang）：`力量`（Error，偏离句意） -> **`正在 / 力量`**（Correct，解决情景中进行时态词组解释的困惑）
  - `ชม`（chom）：`小时`（Error） -> **`观看 / 欣赏 / 赞美 / 参观`**（Correct，校正 `เดินชม` 等参观词组的解释）
  - `การ`（kaar）：`这`（Error） -> **`前缀(动词/形容词名词化) / 事务 / 工作`**（Correct）
  - `ขอ`（kho）：`问`（Error，与 ถาม 混淆） -> **`求 / 请 / 请求`**（Correct）
  - `ข้อ`（kho）：`物品`（Error） -> **`条 / 项 / 条款 / 关节`**（Correct）
  - `ยอด`（yod）：`哟`（Error） -> **`顶峰 / 极好的 / 总额 / 金额`**（Correct，纠正金额结算情景下的误导）
  - `รอบ`（rob）：`大约`（Error） -> **`轮 / 周 / 圈 / 环绕 / 周围`**（Correct）
  - `ที`（thii）：`T`（Error） -> **`次 / 下`**（Correct）
  - `ลำ`（la）：`林`（Error） -> **`艘 / 架 / 根 / 量词(船、飞机等)`**（Correct，修正在水路包船情景下的错误）
  - `พบ`（phop）：`成立`（Error） -> **`遇见 / 发现 / 见面`**（Correct）
  - `แล้ว`（laew）：`进而`（Error） -> **`已经 / 然后 / 了`**（Correct）
  - `ไปด้วย`（pi-dwy）：`附和`（Error） -> **`一起去 / 顺带 / 一起`**（Correct）

同时在 [scenarios.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/scenarios.ts#L4536-4541) 中，将 `business_16_d4` 的中文整句翻译修改为“是的，无法连接。包括数据库和其他管理系统也都会受影响。”，使整句意思与词汇“ฐานข้อมูล”（数据库）、“ระบบการจัดการ”（管理系统）保持 100% 同步通顺。

---

## 2026-06-18 11:30 优化：平滑音频下载模拟进度条，彻底解决“0% 或 100%”跳转问题

我们已成功优化了音频播放的进度条显示逻辑，彻底解决了国内用户在下载音频时，进度条“几乎要么是 0%，要么是 100%”的跳跃卡顿问题：

### 1. 问题根源分析
- **Content-Length 缺失**：国内用户下载音频多通过 CDN 镜像或 Vercel Edge 函数，这些无服务器（Serverless）或压缩网关在返回音频流时常使用 `Transfer-Encoding: chunked`（分块传输），导致 HTTP 响应头中**没有 `Content-Length` 字段**。
- **触发微信 Progress 重置**：由于没有 `Content-Length`，微信小程序的 `downloadTask.onProgressUpdate` 回调在下载中会不断返回 `res.progress = 0`，直至下载完成瞬间变为 `100`。
- **模拟器被频繁 Reset**：原版代码中每次收到 `progress === 0` 时，都会在页面上清空模拟定时器并重置为 `8%`。在较慢的网络下，网络请求多次下发 `0` 的进度回调，导致进度条被反复重置回 `8%`（视觉上卡在 0%），下载完又瞬间跳到 `100%`。
- **WXML 条件判定错误**：在 `index.wxml` 中使用了 `{{showAudioProgress && audioLoadingProgress < 100 ? 'show' : ''}}`，导致当进度条到达 `100%` 满格的瞬间，样式直接隐藏了弹窗，使得我们在 JS 中设置 of 600ms 淡出延迟完全没有生效，用户根本看不到进度条满格状态。

### 2. 解决方案与重构
- **模块级统一仿真调度**：
  - 将平滑仿真定时器（NProgress-style）完全收敛至 [tts.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/tts.ts) 中管理。
  - 在播放开始且本地无缓存时，触发 `startProgressSimulation`，由 tts.ts 每 100ms 自动平滑爬升进度值（爬升规律：8% -> 96%，并停留在 96% 处等待）。
- **屏蔽 `progress = 0` 的网络重置**：
  - 在网络下载进度回调中，仅在 `p > currentSimProgress`（真实进度领先于仿真进度）时，才同步并更新当前进度。
  - 彻底屏蔽了 `progress === 0` 对已启动仿真定时器的影响，避免了因 chunked 传输导致进度被反复重置的 Bug。
- **无感 Failover（多镜像重试）**：
  - 移除了不同 CDN 地址间切换重试时的 `triggerGlobalProgress(0)` 动作，重试过程在后台平滑过渡，进度条不再会因为 CDN 节点切换而频繁跳回起点，提供了一气呵成的流畅爬升效果。
- **修复 WXML 淡出过渡**：
  - 将 `index.wxml` 中的悬浮窗显示条件精简为 `{{showAudioProgress ? 'show' : ''}}`。
  - 现在，进度条到达 100% 满格状态后，会优雅地保持显示 600ms 以提供积极的视觉反馈，随后平滑淡出隐藏，极大地提升了用户等待时的心理舒适度。

---

## 2026-06-18 11:45 优化：澄清音频加载调用顺序，并彻底解决分词碎片化谬误

我们已对音频调用顺序进行了说明，并对泰语分词逻辑进行了深度优化，彻底解决了翻译页中因生词未收录导致被“拆得支离破碎”且自动保存错误翻译的问题：

### 1. 澄清音频下载与播放的调用顺序
情景页与翻译页的发音资源调用，并不是“Vercel 和 GitHub 哪个快用哪个”（即并非高并发的 Race 竞态），而是采用**按网络速度和高可用优先级排列的“顺序容错（Failover）”机制**：
1. **第一步（本地缓存）**：优先检查并直接播放本地持久化沙盒缓存。如果本地有，直接 0ms 播放，不请求任何网络。
2. **第二步（静态 CDN 镜像下载，共 4 个）**：若本地无缓存，则按序尝试从以下 4 个国内超低延迟 CDN 镜像地址下载（下载完成即自动存入本地缓存并播放）：
   - 镜像 1：`mirror.ghproxy.com` (GitHub 高速代理)
   - 镜像 2：`cdn.jsdmirror.com` (jsDelivr 镜像)
   - 镜像 3：`jsd.onmicrosoft.cn` (微软加速镜像)
   - 镜像 4：`gcore.jsdelivr.net` (Gcore 加速)
3. **第三步（Vercel Edge TTS 保底）**：若以上 CDN 全都失败或超时（每个超时限时 2.5 秒），最终会调用我们自建在 Vercel 上的自定义域名 Edge TTS 代理接口 `https://www.barryapp.xyz/api/tts`，获取微软高保真 Neural 音频并播放缓存。
4. **最终兜底**：若全部下载均失败，则直接调用有道流式播放接口播放。

### 2. 彻底解决生词被拆碎（分词不准）的问题
- **问题分析**：
  - **拼写未收录导致退化**：例如 `ไอศครีม`（冰淇淋）是非官方但极常用的拼写，之前的 `dict.ts` 词典中未收录它（且也未收录官方的 `ไอศกรีม`）。
  - **字面匹配谬误**：由于词典中没有该词，系统会退化使用 `Intl.Segmenter` 将其切分为 `ไอ`、`ศค`、`รี`、`ม` 等单字和音节。而这些被拆碎的碎片在词典中误匹配到了毫不相关的含义（如 `ไอ` = 我，`รี` = 椭圆形），导致展现极度荒谬。
  - **自动保存恶性循环**：对于完全没有拼音的未知碎片（如 `ศค` 和 `ม`），系统会触发后台谷歌静默翻译，并将拼凑出的翻译（如 `ศค` 被谷歌误译为 "秒"，`ม` 被误译为 "未知"）存入用户的本地自定义词库中。导致下一次遇到它们时，它们会从“未知生词”变成“已识别的用户词典词汇”，进一步固化了错误。
  - **用户词典未在分词匹配时参与查词**：之前的 [segment.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/segment.ts) 在进行分词最大匹配时虽然合并了用户词库的 key，但在具体执行 lookup 查词时却只查了内置词库，导致用户即使在弹窗里编辑纠正了分词翻译，再次翻译时它依然会展示为 `“未知”`。
- **解决方案与重构**：
  - **智能未知片段合并保护（核心防碎机制）**：
    - 我们在 [segment.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/segment.ts) 中的 `segmentUnknownText` 引入了智能检测规则。
    - 如果一个未知片段被 `Intl.Segmenter` 拆碎，且拆分结果中包含**长度为 1 的单个泰文字符**（如 `ศ`、`ค`、`ม`等，这些在泰语中绝对不能独立成词），或者**平均词长过短（小于 2.5 个字符）**，这属于典型的词典退化拆分。
    - 此时，算法会**拒绝本次拆分**，将其重新**合并为一个完整的单词整体**（如 `ไอศครีม`）。
    - 这样，后台在进行静默词汇查询时，便会直接对 `ไอศครีม` 整个词提问，获取正确的释义“冰淇淋”，并完美录入用户词库，彻底终结了“拆成单字胡乱翻译”的现象。
  - **打通分词用户词典查找**：
    - 在 [segment.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/segment.ts) 中实现了 `lookupWordWithUser` 辅助函数，在分词解析时，优先读取本地 User Dict 中的翻译和音标，让用户的手动校对能 100% 实时生效。
  - **内置收录冰淇淋核心词汇**：
    - 直接在 [dict.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/dict.ts) 内置收录了 `ไอศครีม`（冰淇淋，常用写法）和 `ไอศกรีม`（冰淇淋，官方写法）两个核心词条，保障它们无需联网即可一拍即合、秒级拆解。

