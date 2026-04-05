# hexo-theme-nova

A modern Hexo theme that combines an **academic personal homepage** with a **blog** — clean, fast, and fully responsive.

![License](https://img.shields.io/github/license/liangqianxing/hexo-theme-nova)
![Hexo](https://img.shields.io/badge/hexo-%3E%3D7.0-blue)

## Features

- 🏠 **Academic homepage** as landing page — avatar, bio, skills, social links
- 📝 **Blog section** at `/blog/` with card-based post list
- 🌙 **Dark / Light mode** toggle with localStorage persistence
- 📖 **TOC sidebar** for posts
- ⚡ **Zero dependencies** — pure CSS + vanilla JS
- 📱 **Fully responsive** — mobile-first design
- 🔤 **Inter + Noto Sans SC** — beautiful bilingual typography

## Preview

> Live demo: [liangqianxing.github.io](https://liangqianxing.github.io)

## Installation

```bash
cd your-hexo-blog
git clone https://github.com/liangqianxing/hexo-theme-nova themes/nova
```

Then set in your `_config.yml`:

```yaml
theme: nova
```

Also update `index_generator` to route the blog list to `/blog/`:

```yaml
index_generator:
  path: '/blog/'
  per_page: 10
  order_by: -date
```

And update your `source/index.md`:

```yaml
---
title: Home
layout: index
---
```

## Configuration

Copy `themes/nova/_config.yml` and customize:

```yaml
profile:
  name: Your Name
  name_cn: 你的名字
  tagline: Your tagline here
  bio: A short bio about yourself.
  avatar: /images/avatar.jpg
  location: China

social:
  github: https://github.com/yourname
  email: you@example.com
  rss: /atom.xml

menu:
  - name: 博客
    url: /blog/
  - name: 归档
    url: /archives/
  - name: 关于
    url: /about/

skills:
  - category: Frontend
    items: [HTML, CSS, JavaScript]
  - category: Backend
    items: [Node.js, Python]

dark_mode: true
toc: true
reading_time: true
```

## Navigation

The default menu links:

| Name | Path |
|------|------|
| 博客 | `/blog/` |
| 归档 | `/archives/` |
| 关于 | `/about/` |
| 友链 | `/links/` |

## License

[MIT](LICENSE)
