# robinwang2.github.io

个人网站源码。静态站点，无框架。线上地址：<https://robinwang2.github.io/>

## 发布流程

**推到 `main` 就会自动发布**，不需要再用 FileZilla / sftp 上传。

```bash
git add -A && git commit -m "更新内容" && git push
```

推送后 [GitHub Actions](https://github.com/robinwang2/robinwang2.github.io/actions) 会自动：

1. 运行 `node scripts/build-blog.js` 重新生成博客
2. 把整个仓库作为静态站点发布到 GitHub Pages

一般 1–2 分钟生效。也可以在 Actions 页面点 "Deploy to GitHub Pages" → "Run workflow" 手动重跑。

`scripts/deploy-banjo*.ps1` 是旧的 RIT banjo 服务器上传脚本，保留备用，日常不需要了。

## 写博客

在 `posts/zh/` 和 `posts/en/` 下建 Markdown 文件，文件名即 slug（如 `2026-08-17-my-post.md`）。

```markdown
---
title: "文章标题"
date: "2026-08-17"
category: "mechanics"
tags: ["标签一", "标签二"]
summary: "列表页显示的一句话摘要。"
---

正文……
```

`category` 必须是下面的 key 之一，写错构建会直接报错：

| key | 中文 | English |
|---|---|---|
| `tech` | 技术 | Tech |
| `mechanics` | 玩法拆解 | Mechanics |
| `review` | 评价 | Reviews |
| `devlog` | 开发日志 | Devlog |
| `essay` | 随笔 | Notes |

要增删分类，改 `scripts/build-blog.js` 顶部的 `categories` 数组。筛选栏只显示有文章的分类，并带文章数。

加 `draft: true` 可以让文章不参与构建。

本地预览生成结果：

```bash
node scripts/build-blog.js
```

`blog.html` 和 `blog/**` 是生成产物，不要手改 —— 改 `posts/` 下的 Markdown。

## 改样式

样式集中在 `css/styles.css`。改完之后，**记得同步更新引用它的版本号**，否则老访客会继续用缓存里的旧样式：

- `index.html` 和 `project*.html` 里的 `css/styles.css?v=...`
- `scripts/build-blog.js` 顶部的 `assetVersion`（管博客页面）

品牌色是 `--accent-color: #A82727`。注意首页头部有一条红色对角线，横跨红色和灰色两种背景 —— 落在这条线附近的文字和按钮要单独检查对比度。
