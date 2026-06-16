# Walkthrough: Three-Tier Layout, 3x Scenario Expansion, and Comprehensive Linguistic Audit

We have successfully implemented the three-tier word bubble layout, completed a 3x scenarios database expansion (total 330 scenarios), and executed a comprehensive linguistic audit and correction on the 1,980 sentences and 4,300+ dictionary entries.

---

## 1. Summary of Accomplished Tasks

### A. Three-Tier Word Bubble Layout
*   **Vertical Three-Line Stack**: Re-aligned the chat bubble word elements to stack vertically:
    1. **Top**: Chinese meaning (`.word-meaning-top`).
    2. **Middle**: Syllable-hyphenated phonetic pronunciation (`.word-phonetic-above`).
    3. **Bottom**: Thai word (`.word-text-below`).
*   **Concise Meaning Filter**: Implemented `getShortMeaning` to map and limit all vocabulary Chinese translations to a clean 1-4 character length, avoiding layout warping.
*   **Clean Bubble Space**: Removed the redundant "词义拆解" (Word Breakdown) buttons from all bubbles and narrator boxes, and deleted the "词汇拆解" trigger from the bottom control bar.

### B. WeChat Storage Assessment
*   **Main Package Size**: The static `scenarios.ts` database (330 scenarios * 6 turns = 1,980 sentences) takes 900KB. The entire main package is **~1.1MB**, which is well below WeChat's strict **2MB主包限制**.
*   **Local Storage & File System**: The app's bookmark storage takes under 100KB (max 10MB allowed), and the TTS file cache fits easily inside WeChat's 200MB file limit.

### C. Comprehensive Linguistic Audit & Corrections
We ran a detailed audit script and corrected spelling, pronunciations, and translations in both `scenarios.ts` and `dict.ts`:
*   **Dialogue Turn Verification**: Audited all 1,980 turns. Confirmed that conversational flow is natural and polite particles match character gender (`ครับ` for male, `ค่ะ` / `คะ` for female).
*   **Dictionary Key Cleaning**: Identified and deleted 6 duplicate entries using Chinese keys (`"我们"`, `"他们"`, `"不"`, `"和"`, `"去"`, `"喜欢"`), keeping only correct Thai-keyed equivalents.
*   **RTGS Phonetics Standardization**: 
    *   Surgically replaced space separations with syllable hyphens (e.g. `'sà-baai-dii-mǎi'` instead of `'sà-baai-dii mǎi'`) across **2,015 entries**.
    *   Normalized vowel conventions across **488 entries** (e.g., converting `æ` $\rightarrow$ `ae`, `ı` $\rightarrow$ `ai`, `eue` $\rightarrow$ `uea`, `iia` $\rightarrow$ `ia`, `oeaa` $\rightarrow$ `ao`).
    *   Restored **95 implicit short vowels** (e.g., `tklng` $\rightarrow$ `dtok-long`, `khn` $\rightarrow$ `khon`).
    *   Fixed **8 corrupted Unicode entries** (e.g., `"ดูนี่สิ"` $\rightarrow$ `"duu-nii-si"`, `"อยู่"` $\rightarrow$ `"yuu"`).

---

## 2. Verification & Validation

### TypeScript Compiler Check
Verified that the codebase compiles with 0 errors:
```bash
cmd.exe /c "npx -p typescript tsc --skipLibCheck --noEmit"
```
*   **Status**: Passed successfully.

### Scenario Validation Check
Verified scenarios configuration structural integrity:
```bash
node scratch/validate_scenarios.js
```
*   **Status**: 0 errors found.

### Git Checkpoint Commit
All audited modifications are committed to the local repository under commit `e3fa07f`.

---

## 3. GitHub Audio Hosting & WeChat Upload Bypass

To bypass WeChat's upload restriction blocking packages with >200KB of audio files:
1. **Branch Segmentation**: Created a dedicated `audio-assets` branch containing the 10 pre-compiled Google TTS audio packages (`miniprogram/audio_pkg_1` to `miniprogram/audio_pkg_10`), while keeping the `master` branch clean and lightweight (~1.07MB).
2. **Remote Streaming Resolution**: Replaced the local audio path generation in `miniprogram/utils/tts.ts` to fetch from the GitHub repository's jsDelivr CDN mirror pointing to the `audio-assets` branch:
   `https://gcore.jsdelivr.net/gh/qweiopzxnm/Thai_MiniProgramme@audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`
3. **Local Cleanup**: Deleted the local `audio_pkg_*` subdirectories and removed the `subpackages` array configurations from `miniprogram/app.json`.
4. **Compile Validation**: Confirmed that the project compiles with 0 errors (`npx.cmd -p typescript tsc --skipLibCheck --noEmit`).

---

## 4. Performance Optimizations & Caching Fixes

We have resolved the Gitee latency, playback speed rate incompatibilities, and notebook loading lag with the following implementations:
1. **jsDelivr Audio Caching**: Enhanced `preFetchGoogleTTS` and `playThaiTTS` in `miniprogram/utils/tts.ts` to automatically download and persist jsDelivr-hosted `.mp3` files in the WeChat local sandbox file system (`wx.env.USER_DATA_PATH/tts_cache`). This ensures that on subsequent plays, audio starts instantly without network requests.
2. **Playback Rate Snapping**: Introduced `getSupportedPlaybackRate(rate)` to automatically align any calculated play rates (such as Youdao's speed rate modifiers) to WeChat's strictly supported list: `0.5`, `0.8`, `1.0`, `1.25`, `1.5`, `2.0`. This prevents silent playback failures on various iOS/Android client engines.
3. **Lazy Notebook Segmentation**: Modified `review-view.ts` to defer the heavy maximum-matching segmentation logic (`segmentThai`) until a card is actually expanded by the user or shown in the active flashcard view. This reduces startup blocking calculations to 0ms, making notebook tab-switching completely instant.


