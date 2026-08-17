const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const postsDir = path.join(rootDir, 'posts');
const outputDir = path.join(rootDir, 'blog');
const assetVersion = '20260817-delete-post';
const languages = {
  zh: {
    label: '中文',
    htmlLang: 'zh-Hans',
    listTitle: '博客',
    listIntro: '这里会放我关于游戏、技术、创作和现实议题的文章。',
    allLabel: '全部',
    categoryLabel: '分类',
    tagLabel: '标签',
    emptyLabel: '还没有发布文章。',
    readMore: '阅读全文',
    backToBlog: '返回博客',
    switchLabel: 'EN',
    homeLabel: '主页',
    newPost: '写新文章',
    dateLocale: 'zh-CN'
  },
  en: {
    label: 'English',
    htmlLang: 'en',
    listTitle: 'Blog',
    listIntro: 'Notes on games, technology, creative work, and the world around them.',
    allLabel: 'All',
    categoryLabel: 'Category',
    tagLabel: 'Tag',
    emptyLabel: 'No posts published yet.',
    readMore: 'Read article',
    backToBlog: 'Back to Blog',
    switchLabel: '中文',
    homeLabel: 'Home',
    newPost: 'New post',
    dateLocale: 'en-US'
  }
};

// Canonical blog categories. Posts reference these by `key` in frontmatter
// (legacy label values listed in `aliases` still resolve, for older posts).
const categories = [
  { key: 'tech', zh: '技术', en: 'Tech', aliases: ['技术', 'Tech', 'Technology'] },
  { key: 'mechanics', zh: '玩法拆解', en: 'Mechanics', aliases: ['玩法拆解', 'Mechanics', 'Game Mechanics'] },
  { key: 'review', zh: '评价', en: 'Reviews', aliases: ['评价', '游戏批评', 'Reviews', 'Review', 'Game Criticism'] },
  { key: 'devlog', zh: '开发日志', en: 'Devlog', aliases: ['开发日志', 'Devlog', 'Dev Log'] },
  { key: 'essay', zh: '随笔', en: 'Notes', aliases: ['随笔', 'Notes', 'Essay'] }
];

const categoryAliasMap = categories.reduce((acc, category) => {
  [category.key, category.zh, category.en, ...category.aliases].forEach((alias) => {
    acc[String(alias).toLowerCase()] = category.key;
  });
  return acc;
}, {});

const resolveCategoryKey = (rawCategory, filePath) => {
  const value = String(rawCategory || '').trim();
  if (!value) return '';
  const key = categoryAliasMap[value.toLowerCase()];
  if (!key) {
    const known = categories.map((category) => category.key).join(', ');
    throw new Error(`${filePath}: unknown category "${value}". Use one of: ${known}`);
  }
  return key;
};

const categoryDefs = categories.map(({ key, zh, en }) => ({ key, zh, en }));

const categoryLabelFor = (post) => {
  const match = categoryDefs.find((category) => category.key === post.categoryKey);
  return match ? match[post.lang] : '';
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const escapeHtml = (value = '') => {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const jsonForScript = (value) => {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
};

const isAbsoluteUrl = (url) => {
  return /^(?:[a-z]+:|#|\/)/i.test(url);
};

const withAssetPrefix = (url, assetPrefix) => {
  return isAbsoluteUrl(url) ? url : `${assetPrefix}${url}`;
};

const slugFromFile = (fileName) => path.basename(fileName, path.extname(fileName));

const parseFrontmatterValue = (rawValue) => {
  const value = rawValue.trim();
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^\[.*\]$/.test(value)) {
    try {
      return JSON.parse(value.replace(/'/g, '"'));
    } catch (error) {
      return value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    }
  }
  return value.replace(/^["']|["']$/g, '');
};

const parseMarkdownFile = (filePath) => {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`${filePath} is missing frontmatter.`);
  }

  const frontmatter = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    frontmatter[key] = parseFrontmatterValue(value);
  });

  return {
    frontmatter,
    markdown: match[2].trim()
  };
};

const renderInlineMarkdown = (source, assetPrefix = '') => {
  let html = escapeHtml(source);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => {
    return `<img src="${escapeHtml(withAssetPrefix(src, assetPrefix))}" alt="${alt}">`;
  });
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return html;
};

const renderMarkdown = (markdown, assetPrefix = '') => {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];
  let index = 0;

  const collectParagraph = () => {
    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,6}\s+/.test(lines[index]) &&
      !/^[-*]\s+/.test(lines[index]) &&
      !/^\d+\.\s+/.test(lines[index]) &&
      !/^>\s?/.test(lines[index]) &&
      !/^```/.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(`<p>${renderInlineMarkdown(paragraph.join(' '), assetPrefix)}</p>`);
  };

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const language = trimmed.replace(/^```/, '').trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ''}>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = Math.min(heading[1].length + 1, 6);
      blocks.push(`<h${level}>${renderInlineMarkdown(heading[2], assetPrefix)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quote.push(lines[index].trim().replace(/^>\s?/, ''));
        index += 1;
      }
      blocks.push(`<blockquote>${quote.map((item) => `<p>${renderInlineMarkdown(item, assetPrefix)}</p>`).join('')}</blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ''));
        index += 1;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${renderInlineMarkdown(item, assetPrefix)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push(`<ol>${items.map((item) => `<li>${renderInlineMarkdown(item, assetPrefix)}</li>`).join('')}</ol>`);
      continue;
    }

    collectParagraph();
  }

  return blocks.join('\n');
};

const formatDate = (dateString, lang) => {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat(languages[lang].dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const readPosts = () => {
  const posts = [];

  Object.keys(languages).forEach((lang) => {
    const langDir = path.join(postsDir, lang);
    if (!fs.existsSync(langDir)) return;

    fs.readdirSync(langDir)
      .filter((fileName) => fileName.endsWith('.md'))
      .forEach((fileName) => {
        const filePath = path.join(langDir, fileName);
        const parsed = parseMarkdownFile(filePath);
        if (parsed.frontmatter.draft) return;

        const slug = parsed.frontmatter.slug || slugFromFile(fileName);
        const tags = Array.isArray(parsed.frontmatter.tags) ? parsed.frontmatter.tags : [];
        posts.push({
          lang,
          slug,
          sourcePath: filePath,
          title: parsed.frontmatter.title || slug,
          date: parsed.frontmatter.date || '',
          categoryKey: resolveCategoryKey(parsed.frontmatter.category, filePath),
          tags,
          summary: parsed.frontmatter.summary || '',
          markdown: parsed.markdown
        });
      });
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

const getPostsBySlug = (posts) => {
  return posts.reduce((acc, post) => {
    acc[post.slug] = acc[post.slug] || {};
    acc[post.slug][post.lang] = post;
    return acc;
  }, {});
};

const pageShell = ({ title, htmlLang, bodyClass, stylesheetHref, content, description = '' }) => {
  return `<!DOCTYPE html>
<html lang="${htmlLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeHtml(description)}">
    <title>${escapeHtml(title)}</title>
    <link rel="stylesheet" href="${stylesheetHref}?v=${assetVersion}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="${bodyClass}">
${content}
</body>
</html>
`;
};

const renderTagList = (post) => {
  return post.tags.map((tag) => `<span class="blog-tag">${escapeHtml(tag)}</span>`).join('');
};

const renderListPage = (posts) => {
  const publicPosts = posts.map((post) => ({
    lang: post.lang,
    slug: post.slug,
    title: post.title,
    date: post.date,
    displayDate: formatDate(post.date, post.lang),
    categoryKey: post.categoryKey,
    tags: post.tags,
    summary: post.summary,
    href: post.lang === 'en' ? `blog/en/${post.slug}.html` : `blog/${post.slug}.html`
  }));

  const initialLang = 'zh';
  const content = `    <header class="project-page-header blog-site-header">
        <nav class="project-nav">
            <a class="project-back-link" href="index.html">${languages[initialLang].homeLabel}</a>
            <div class="project-nav-actions">
                <a href="#" id="language-toggle" class="project-language-toggle">${languages[initialLang].switchLabel}</a>
                <a class="blog-new-link" href="admin.html" id="new-post-link" title="${languages[initialLang].newPost}" aria-label="${languages[initialLang].newPost}">+</a>
            </div>
        </nav>
    </header>
    <main class="blog-page">
        <section class="blog-hero">
            <p class="blog-kicker">Sanxing Wang</p>
            <h1 id="blog-title">${languages[initialLang].listTitle}</h1>
            <p id="blog-intro">${languages[initialLang].listIntro}</p>
        </section>
        <section class="blog-toolbar" aria-label="Blog filters">
            <div class="blog-filter-group">
                <span id="category-label">${languages[initialLang].categoryLabel}</span>
                <div class="blog-filter-options" id="category-filters"></div>
            </div>
            <div class="blog-filter-group">
                <span id="tag-label">${languages[initialLang].tagLabel}</span>
                <div class="blog-filter-options" id="tag-filters"></div>
            </div>
        </section>
        <section class="blog-list" id="blog-list" aria-live="polite"></section>
    </main>
    <script>
    (() => {
      const storageKey = 'site-language';
      const copy = ${jsonForScript(languages)};
      const categoryDefs = ${jsonForScript(categoryDefs)};
      const posts = ${jsonForScript(publicPosts)};
      let currentLang = localStorage.getItem(storageKey) === 'en' ? 'en' : 'zh';
      let activeCategory = 'all';
      let activeTag = 'all';

      const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char]);

      const getLangPosts = () => posts.filter((post) => post.lang === currentLang);

      const categoryLabel = (key) => {
        const match = categoryDefs.find((category) => category.key === key);
        return match ? match[currentLang] : '';
      };

      const renderButtons = (target, options, activeValue, onClick) => {
        target.replaceChildren();
        options.forEach((option) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = option.label;
          button.className = activeValue === option.value ? 'active' : '';
          button.setAttribute('aria-pressed', activeValue === option.value ? 'true' : 'false');
          if (typeof option.count === 'number') {
            const count = document.createElement('span');
            count.className = 'blog-filter-count';
            count.textContent = option.count;
            button.append(count);
          }
          button.addEventListener('click', () => onClick(option.value));
          target.append(button);
        });
      };

      const render = () => {
        const langCopy = copy[currentLang];
        document.documentElement.lang = langCopy.htmlLang;
        document.title = langCopy.listTitle + ' | Sanxing Wang';
        document.getElementById('blog-title').textContent = langCopy.listTitle;
        document.getElementById('blog-intro').textContent = langCopy.listIntro;
        document.getElementById('category-label').textContent = langCopy.categoryLabel;
        document.getElementById('tag-label').textContent = langCopy.tagLabel;
        document.getElementById('language-toggle').textContent = langCopy.switchLabel;
        document.querySelector('.project-back-link').textContent = langCopy.homeLabel;

        const newLink = document.getElementById('new-post-link');
        newLink.title = langCopy.newPost;
        newLink.setAttribute('aria-label', langCopy.newPost);

        const langPosts = getLangPosts();
        const categoryOptions = categoryDefs
          .map((category) => ({
            value: category.key,
            label: category[currentLang],
            count: langPosts.filter((post) => post.categoryKey === category.key).length
          }))
          .filter((option) => option.count > 0);
        const tags = [...new Set(langPosts.flatMap((post) => post.tags))];

        if (!categoryOptions.some((option) => option.value === activeCategory)) activeCategory = 'all';
        if (!tags.includes(activeTag)) activeTag = 'all';

        renderButtons(
          document.getElementById('category-filters'),
          [{ value: 'all', label: langCopy.allLabel, count: langPosts.length }].concat(categoryOptions),
          activeCategory,
          (value) => {
            activeCategory = value;
            render();
          }
        );

        renderButtons(
          document.getElementById('tag-filters'),
          [{ value: 'all', label: langCopy.allLabel }].concat(tags.map((tag) => ({ value: tag, label: tag }))),
          activeTag,
          (value) => {
            activeTag = value;
            render();
          }
        );

        const visiblePosts = langPosts.filter((post) => {
          const categoryMatches = activeCategory === 'all' || post.categoryKey === activeCategory;
          const tagMatches = activeTag === 'all' || post.tags.includes(activeTag);
          return categoryMatches && tagMatches;
        });

        const list = document.getElementById('blog-list');
        if (!visiblePosts.length) {
          list.innerHTML = '<p class="blog-empty">' + escapeHtml(langCopy.emptyLabel) + '</p>';
          return;
        }

        list.innerHTML = visiblePosts.map((post) => {
          const tagsHtml = post.tags.map((tag) => '<span class="blog-tag">' + escapeHtml(tag) + '</span>').join('');
          return '<article class="blog-list-item">' +
            '<div class="blog-card-meta"><time datetime="' + escapeHtml(post.date) + '">' + escapeHtml(post.displayDate) + '</time>' +
            (post.categoryKey ? '<span>' + escapeHtml(categoryLabel(post.categoryKey)) + '</span>' : '') + '</div>' +
            '<h2><a href="' + escapeHtml(post.href) + '">' + escapeHtml(post.title) + '</a></h2>' +
            '<p>' + escapeHtml(post.summary) + '</p>' +
            '<div class="blog-tags">' + tagsHtml + '</div>' +
            '<a class="blog-read-link" href="' + escapeHtml(post.href) + '">' + escapeHtml(langCopy.readMore) + '</a>' +
          '</article>';
        }).join('');
      };

      document.getElementById('language-toggle').addEventListener('click', (event) => {
        event.preventDefault();
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem(storageKey, currentLang === 'en' ? 'en' : 'zh-Hans');
        activeTag = 'all';
        render();
      });

      render();
    })();
    </script>`;

  return pageShell({
    title: '博客 | Sanxing Wang',
    htmlLang: languages[initialLang].htmlLang,
    bodyClass: 'project-page-body blog-page-body',
    stylesheetHref: 'css/styles.css',
    description: languages[initialLang].listIntro,
    content
  });
};

const renderPostPage = (post, postsBySlug) => {
  const langCopy = languages[post.lang];
  const assetPrefix = post.lang === 'en' ? '../../' : '../';
  const bodyHtml = renderMarkdown(post.markdown, assetPrefix);
  const counterpartLang = post.lang === 'zh' ? 'en' : 'zh';
  const counterpart = postsBySlug[post.slug] && postsBySlug[post.slug][counterpartLang];
  const prefix = post.lang === 'en' ? '../' : '';
  const counterpartHref = counterpart
    ? post.lang === 'zh'
      ? `en/${post.slug}.html`
      : `../${post.slug}.html`
    : `${prefix}../blog.html`;
  const blogHref = post.lang === 'en' ? '../../blog.html' : '../blog.html';

  const content = `    <header class="project-page-header blog-site-header">
        <nav class="project-nav">
            <a class="project-back-link" href="${blogHref}">${langCopy.backToBlog}</a>
            <a href="${counterpartHref}" id="language-toggle" class="project-language-toggle" data-lang-target="${counterpartLang}">${langCopy.switchLabel}</a>
        </nav>
    </header>
    <main class="blog-post-page">
        <article class="blog-post">
            <header class="blog-post-header">
                <p class="blog-kicker">Sanxing Wang</p>
                <h1>${escapeHtml(post.title)}</h1>
                <div class="blog-card-meta">
                    <time datetime="${escapeHtml(post.date)}">${escapeHtml(formatDate(post.date, post.lang))}</time>
                    ${categoryLabelFor(post) ? `<span>${escapeHtml(categoryLabelFor(post))}</span>` : ''}
                </div>
                <div class="blog-tags">${renderTagList(post)}</div>
                ${post.summary ? `<p class="blog-post-summary">${escapeHtml(post.summary)}</p>` : ''}
            </header>
            <div class="blog-post-content">
${bodyHtml}
            </div>
        </article>
    </main>
    <script>
    document.getElementById('language-toggle').addEventListener('click', (event) => {
      localStorage.setItem('site-language', event.currentTarget.dataset.langTarget === 'en' ? 'en' : 'zh-Hans');
    });
    </script>`;

  return pageShell({
    title: `${post.title} | Sanxing Wang`,
    htmlLang: langCopy.htmlLang,
    bodyClass: 'project-page-body blog-page-body',
    stylesheetHref: post.lang === 'en' ? '../../css/styles.css' : '../css/styles.css',
    description: post.summary,
    content
  });
};

const writeOutputs = () => {
  const posts = readPosts();
  const postsBySlug = getPostsBySlug(posts);

  ensureDir(outputDir);
  ensureDir(path.join(outputDir, 'en'));

  fs.writeFileSync(path.join(rootDir, 'blog.html'), renderListPage(posts), 'utf8');

  // Index consumed by admin.html, so the editor's category list and post list
  // come from this script rather than being maintained a second time.
  fs.writeFileSync(
    path.join(rootDir, 'blog-data.json'),
    JSON.stringify(
      {
        categories: categoryDefs,
        posts: posts.map((post) => ({
          lang: post.lang,
          slug: post.slug,
          title: post.title,
          date: post.date,
          categoryKey: post.categoryKey,
          source: `posts/${post.lang}/${path.basename(post.sourcePath)}`
        }))
      },
      null,
      2
    ),
    'utf8'
  );

  const written = new Set();
  posts.forEach((post) => {
    const filePath = post.lang === 'en'
      ? path.join(outputDir, 'en', `${post.slug}.html`)
      : path.join(outputDir, `${post.slug}.html`);
    fs.writeFileSync(filePath, renderPostPage(post, postsBySlug), 'utf8');
    written.add(path.resolve(filePath));
  });

  // Delete generated pages whose Markdown source is gone, otherwise a removed
  // post keeps its old URL alive even though it left the blog index.
  const pruned = [];
  [outputDir, path.join(outputDir, 'en')].forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir)
      .filter((name) => name.endsWith('.html'))
      .forEach((name) => {
        const filePath = path.resolve(dir, name);
        if (written.has(filePath)) return;
        fs.unlinkSync(filePath);
        pruned.push(path.relative(rootDir, filePath).replace(/\\/g, '/'));
      });
  });

  console.log(`Built ${posts.length} blog post page(s).`);
  if (pruned.length) {
    console.log(`Removed ${pruned.length} orphaned page(s): ${pruned.join(', ')}`);
  }
};

writeOutputs();
