import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const scanTargets = ['src', 'public', 'README.md', 'PLAN-EDITORIAL.md', 'REVISION-ANTES-DE-PUBLICAR.md', 'package.json'];
const forbidden = [
  /SoftMarket\s+Pro/i,
  /IPVanish/i,
  /carrito/i,
  /checkout/i,
  /href="#"/i,
  /newsletterEnabled:\s*true/i,
  /socialProfilesEnabled:\s*true/i,
  /newsSectionEnabled:\s*true/i,
  /digiclara-og\.svg['"]?,\s*featured/i,
  /Ã|Â|MantÃ|�/i,
];

const files = [];
const walk = (entry) => {
  const full = path.join(root, entry);
  if (!fs.existsSync(full)) return;
  const stat = fs.statSync(full);
  if (stat.isDirectory()) for (const child of fs.readdirSync(full)) walk(path.join(entry, child));
  else if (/\.(astro|ts|js|mjs|json|md|yaml|svg|css)$/.test(entry)) files.push(entry);
};
scanTargets.forEach(walk);

const failures = [];
for (const file of files) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  for (const rule of forbidden) {
    if (rule.test(text)) failures.push(`${file}: forbidden pattern ${rule}`);
  }
  if (file.endsWith('.astro') && file !== 'src/pages/index.astro' && !text.includes('RedirectPage') && /<h1[\s>]/.test(text) === false && file.includes('pages')) {
    failures.push(`${file}: page without visible H1`);
  }
}

const data = fs.readFileSync(path.join(root, 'src/data/digiclara.ts'), 'utf8');
const defsBlock = data.match(/const defs = \[([\s\S]*?)\] as const;/)?.[1] || '';
const slugs = [...defsBlock.matchAll(/^\s+\['([^']+)',\s*'[^']+',\s*'[^']+',/gm)].map((match) => match[1]);
const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicates.length) failures.push(`duplicate article slugs: ${duplicates.join(', ')}`);
const imagePaths = slugs.map((slug) => `/assets/images/articles/${slug}.jpg`);
const duplicateImages = imagePaths.filter((image, index) => imagePaths.indexOf(image) !== index);
if (duplicateImages.length) failures.push(`duplicate article image paths: ${duplicateImages.join(', ')}`);
for (const slug of slugs) {
  const image = path.join(root, 'public/assets/images/articles', `${slug}.jpg`);
  if (!fs.existsSync(image)) failures.push(`missing article image: ${slug}.jpg`);
}
const hashes = new Map();
for (const slug of slugs) {
  const image = path.join(root, 'public/assets/images/articles', `${slug}.jpg`);
  if (!fs.existsSync(image)) continue;
  const hash = crypto.createHash('sha256').update(fs.readFileSync(image)).digest('hex');
  if (hashes.has(hash)) failures.push(`duplicate article image file: ${slug}.jpg matches ${hashes.get(hash)}.jpg`);
  hashes.set(hash, slug);
}
const creditFiles = ['public/assets/media-credits.json', 'src/data/image-credits.json'];
for (const creditFile of creditFiles) {
  const full = path.join(root, creditFile);
  if (!fs.existsSync(full)) {
    failures.push(`missing ${creditFile}`);
    continue;
  }
  const credits = JSON.parse(fs.readFileSync(full, 'utf8'));
  for (const image of imagePaths) {
    const credit = credits.find((item) => item.file === image);
    if (!credit) failures.push(`${creditFile}: missing credit for ${image}`);
    if (credit && (!credit.source || !/^https?:\/\//.test(credit.source))) failures.push(`${creditFile}: missing source URL for ${image}`);
    if (credit && !credit.license) failures.push(`${creditFile}: missing license for ${image}`);
  }
}
const today = new Date().toISOString().slice(0, 10);
for (const date of [...data.matchAll(/(?:published|updated): `?['"]?(\d{4}-\d{2}-\d{2})/g)].map((match) => match[1])) {
  if (date > today) failures.push(`future date found: ${date}`);
}
for (const source of [...data.matchAll(/\{\s*label:\s*'([^']+)',\s*url:\s*'([^']*)'/g)]) {
  if (!source[2].startsWith('http')) failures.push(`source without URL: ${source[1]}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validation passed: ${files.length} files scanned, ${slugs.length} article images checked.`);
