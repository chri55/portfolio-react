import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-python.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../content');
const outputDir = join(__dirname, '../src/data');
const outputFile = join(outputDir, 'posts.json');

// Configure marked to use Prism for syntax highlighting
const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
  const language = lang && Prism.languages[lang] ? lang : 'markup';
  const grammar = Prism.languages[language] || Prism.languages.markup;
  const highlighted = Prism.highlight(text, grammar, language);
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};
marked.use({ renderer });

function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

function generateExcerpt(markdownText, maxLength = 220) {
  const plain = markdownText
    .replace(/^#{1,6}\s+.*/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > maxLength ? plain.substring(0, maxLength).trimEnd() + '...' : plain;
}

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

if (!existsSync(contentDir)) {
  console.warn(`Content directory not found: ${contentDir}`);
  writeFileSync(outputFile, JSON.stringify([], null, 2));
  process.exit(0);
}

const files = readdirSync(contentDir).filter(f => f.endsWith('.md'));

const posts = files.map(filename => {
  const raw = readFileSync(join(contentDir, filename), 'utf-8');
  const { data: frontmatter, content: body } = matter(raw);
  const html = marked(body);
  const slug = frontmatter.slug || filename.replace(/\.md\.md$|\.md$/, '');

  return {
    slug,
    title: frontmatter.title || '',
    date: frontmatter.date ? new Date(frontmatter.date).toISOString() : '',
    cover: frontmatter.cover || '',
    category: frontmatter.category || '',
    tags: (frontmatter.tags || []).filter(Boolean),
    excerpt: generateExcerpt(body),
    html,
    timeToRead: estimateReadTime(body),
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Built ${posts.length} post(s) → ${outputFile}`);
