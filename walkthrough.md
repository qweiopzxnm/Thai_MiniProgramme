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

### 4. 多分支同步推送
- **远程音频分支 `audio-assets`**：切换到 `audio-assets` 分支，利用 `git add -f` 强制将新增的 1519 个压缩音频 `.mp3` 提交并推送到 GitHub 远程仓库，实现 CDN 瞬时分发。
- **核心代码分支 `master`**：提交并推送了更新后的 `tts.ts`、`scenarios-view.ts`、`static_hashes.ts` 以及清理后的未使用 import。

---

## 验证与校验结果

1. **白名单覆盖率检测**：
   - 运行校验脚本：`node scratch/extract_all_scenarios_segmented_words.js`
   - 结果：**情景句子、短语及全部拆解分词的哈希缺失数降为 0**！所有词汇均可在白名单内通过 CDN 直连秒开播放。
2. **TypeScript 全局编译**：
   - 运行：`npx.cmd -p typescript tsc --skipLibCheck --noEmit`
   - 结果：**编译完美通过，无任何类型或声明警告**。
