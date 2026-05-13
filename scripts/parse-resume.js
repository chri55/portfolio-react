#!/usr/bin/env node
/**
 * parse-resume.js <path-to-pdf>
 *
 * Extracts resume content into src/data/resume.json using pdftotext (poppler).
 * Requires: pdftotext  →  brew install poppler
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pdfPath = process.argv[2];
if (!pdfPath) {
  console.error('Usage: node scripts/parse-resume.js <path-to-pdf>');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Extract plain text, strip invisible Unicode characters
// ---------------------------------------------------------------------------
const raw = execSync(`pdftotext "${resolve(pdfPath)}" -`, { encoding: 'utf-8' });
const lines = raw
  .split('\n')
  .map(l => l.replace(/[​‌‍﻿­]/g, '').trim())
  .filter(Boolean);

// ---------------------------------------------------------------------------
// 2. Split into named sections
// ---------------------------------------------------------------------------
const SECTION_HEADERS = ['SKILLS', 'EXPERIENCE', 'EDUCATION', 'AWARDS'];

function getSectionLines(name) {
  const start = lines.findIndex(l => l === name);
  if (start === -1) return [];
  const end = lines.findIndex((l, i) => i > start && SECTION_HEADERS.includes(l));
  return lines.slice(start + 1, end === -1 ? undefined : end);
}

// ---------------------------------------------------------------------------
// 3. Parse SKILLS
//    Lines before the first "Category:" are the bio.
//    "Category: item, item, ..." lines define skill groups.
//    Continuation lines (no category prefix, not a bullet) are joined to the
//    previous category's raw text, preserving parentheses across line breaks.
//    Final comma-split respects parentheses so "Foo (A and B)" stays intact.
// ---------------------------------------------------------------------------
function splitSkills(str) {
  const items = [];
  let depth = 0;
  let current = '';
  for (const ch of str) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      const s = current.trim();
      if (s) items.push(s);
      current = '';
    } else {
      current += ch;
    }
  }
  const s = current.trim();
  if (s) items.push(s);
  return items;
}

function parseSkills(skillLines) {
  const bioLines = [];
  const rawChunks = {};  // category -> raw comma string (possibly multi-line)
  let lastCategory = null;

  for (const line of skillLines) {
    if (line.startsWith('●')) continue;
    const m = line.match(/^([\w\s&]+?):\s+(.+)/);
    if (m) {
      lastCategory = m[1].trim();
      rawChunks[lastCategory] = m[2];
    } else if (lastCategory) {
      // If the accumulated string has unclosed parens, join with space (not comma)
      const open = (rawChunks[lastCategory].match(/\(/g) || []).length;
      const close = (rawChunks[lastCategory].match(/\)/g) || []).length;
      rawChunks[lastCategory] += (open > close ? ' ' : ', ') + line;
    } else {
      bioLines.push(line);
    }
  }

  const skills = {};
  for (const [cat, raw] of Object.entries(rawChunks)) {
    skills[cat] = splitSkills(raw);
  }

  return { bio: bioLines.join(' '), skills };
}

// ---------------------------------------------------------------------------
// 4. Parse EXPERIENCE and EDUCATION
//
//    Entry headers come in two formats:
//      A) "Company, Location - Title - Month Year - Month Year"  (experience)
//      B) "School, Location - Degree"                            (education)
//         followed on the next line by "Month Year - Month Year"
//
//    Bullets start with ●.
//    Wrapped lines (no ● and not a new header) continue the previous bullet.
// ---------------------------------------------------------------------------
const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
const MONTH_YEAR = `(?:${MONTHS})\\s+\\d{4}`;

// Matches a date range at the END of a line (experience header format)
const DATE_RANGE_END = new RegExp(`(${MONTH_YEAR})\\s*-\\s*(${MONTH_YEAR}|Present)$`, 'i');
// Matches a line that IS ONLY a date range (education date line)
const DATE_RANGE_ONLY = new RegExp(`^(${MONTH_YEAR})\\s*[-–]\\s*(${MONTH_YEAR}|Present)$`, 'i');

function parseEntries(sectionLines) {
  const entries = [];
  let current = null;

  const isHeader = (line) =>
    !line.startsWith('●') &&
    !DATE_RANGE_ONLY.test(line) &&
    line.includes(' - ');

  for (const line of sectionLines) {
    // Standalone date line (education: dates on their own line after the school/degree line)
    const dateOnlyMatch = line.match(DATE_RANGE_ONLY);
    if (dateOnlyMatch) {
      if (current && !current.start) {
        current.start = dateOnlyMatch[1].trim();
        current.end = dateOnlyMatch[2].trim();
      }
      continue;
    }

    // Bullet point
    if (line.startsWith('●')) {
      if (current) current.bullets.push(line.replace(/^●\s*/, '').trim());
      continue;
    }

    // New entry header (has " - " separator, not a date-only line, not a bullet)
    if (isHeader(line)) {
      if (current) entries.push(current);

      const dateMatch = line.match(DATE_RANGE_END);
      let headerText = line;
      let start = '';
      let end = '';

      if (dateMatch) {
        // Strip date range from end of line to get the header text
        headerText = line.slice(0, line.lastIndexOf(dateMatch[0])).replace(/\s*-\s*$/, '').trim();
        start = dateMatch[1].trim();
        end = dateMatch[2].trim();
      }

      // Split "Company, Location - Title" on " - "
      const parts = headerText.split(/\s+-\s+/);
      const companyLocation = parts[0] ?? '';
      const title = parts.slice(1).join(' - ');
      const locMatch = companyLocation.match(/^(.+?),\s+(.+)$/);

      current = {
        company: locMatch ? locMatch[1].trim() : companyLocation,
        location: locMatch ? locMatch[2].trim() : '',
        title,
        start,
        end,
        bullets: [],
      };
      continue;
    }

    // Continuation line — append to last bullet if we have one
    if (current && current.bullets.length > 0) {
      current.bullets[current.bullets.length - 1] += ' ' + line;
    }
  }

  if (current) entries.push(current);
  return entries;
}

// ---------------------------------------------------------------------------
// 5. Assemble and write
// ---------------------------------------------------------------------------
const { bio, skills } = parseSkills(getSectionLines('SKILLS'));

const result = {
  bio,
  skills,
  experience: parseEntries(getSectionLines('EXPERIENCE')),
  education: parseEntries(getSectionLines('EDUCATION')).map(e => ({
    school: e.company,
    location: e.location,
    degree: e.title,
    start: e.start,
    end: e.end,
    bullets: e.bullets,
  })),
};

const outputPath = resolve(__dirname, '../src/data/resume.json');
writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log(`Wrote ${outputPath}`);
console.log(JSON.stringify(result, null, 2));
