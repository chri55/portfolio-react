# portfolio-react — project notes

React + Vite personal portfolio site. Deployed to Netlify automatically on push to `main`.

---

## Dev commands

```bash
npm run dev          # build blog posts, then start Vite dev server → http://localhost:5173
npm run build        # production build → dist/
npm run preview      # serve the dist/ build locally (sanity check before deploy)
npm run build-content  # compile content/*.md → src/data/posts.json (runs automatically in dev/build)
npm run parse-resume path/to/resume.pdf  # extract resume PDF → src/data/resume.json
```

> `parse-resume` requires `pdftotext` — install with `brew install poppler` if missing.

---

## Where content lives

| What | File |
|---|---|
| Site title, email, description | `src/data/siteConfig.js` |
| Portfolio projects | `src/data/portfolio.js` |
| Blog posts (Markdown) | `content/*.md` |
| About / resume page | `src/pages/About.jsx` |
| Parsed resume data | `src/data/resume.json` (generated — do not edit by hand) |

### Adding a blog post
Create a `.md` file in `content/` with frontmatter:
```markdown
---
title: "Post title"
date: "2025-01-01"
category: "Category"
tags: ["tag1", "tag2"]
cover: "https://url-to-cover-image.jpg"
slug: "url-slug"
---

Post body here...
```
Run `npm run build-content` (or just `npm run dev`) to regenerate `posts.json`.

> Note: existing posts in `content/` have a double extension (`.md.md`) — this is a known quirk, the build script handles it.

---

## Component map

```
MainLayout          wraps every page (Header + Footer + slot)
├── Header          nav bar with links
├── Footer          bottom bar
└── BottomNavigation  mobile tab bar

Pages (src/pages/)
├── Home            hero + portfolio grid
├── About           bio + resume (edit About.jsx directly for content)
├── PortfolioPage   grid of all projects (reads portfolio.js)
├── PortfolioItem   single project detail page
├── BlogListing     list of all posts
├── BlogPost        single post (renders HTML from posts.json)
├── BlogRouter      decides BlogListing vs BlogPost by slug
├── CategoryPage    posts filtered by category
└── TagPage         posts filtered by tag

Shared components (src/components/)
├── PostListing     card used in blog list views
├── PostTags        tag chips on posts
└── SEO             <head> meta tags + OG tags + JSON-LD schema
```

---

## Deployment

- Host: **Netlify**, auto-deploys on push to `main`
- Build command: `npm run build` → publishes `dist/`
- SPA routing: Netlify redirects all paths to `index.html` (configured in `netlify.toml`)
- Node version pinned to **20** in `netlify.toml` — bump this if Netlify throws errors

---

## Things likely to need attention after time away

| Area | Notes |
|---|---|
| **Node version** | `netlify.toml` pins Node 20; you're running Node 24 locally — update the pin when you bump |
| **React** | On v18; React 19 released early 2025 with some breaking changes (ref handling, `use` hook) |
| **`@react-icons/all-files` v4** | v5 is available with a changed import path — check the migration guide |
| **`lodash`** | Mostly replaceable with native JS (`Object.groupBy`, `Array.at`, etc.) if you want to trim bundle size |
| **`react-helmet-async`** | React 19 has native `<title>` / `<meta>` support in the render tree — could drop this dep |
| **Profile image** | Hosted on S3 (`cpt-images` bucket) — make sure bucket/object ACLs are still public |
