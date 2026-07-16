import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanTargets = ['src', 'public', 'README.md', 'PLAN-EDITORIAL.md', 'REVISION-ANTES-DE-PUBLICAR.md', 'package.json'];
const forbidden = [
  /SoftMarket/i,
  /IPVanish/i,
  /carrito/i,
  /checkout/i,
  /href="#"/i,
  /newsletterEnabled:\s*true/i,
  /socialProfilesEnabled:\s*true/i,
  /newsSectionEnabled:\s*true/i,
  /digiclara-og\.svg['"]?,\s*featured/i,
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
  if (file.endsWith('.astro') && file !== 'src/pages/index.astro' && /<h1[\s>]/.test(text) === false && file.includes('pages')) {
    failures.push(`${file}: page without visible H1`);
  }
}

const data = fs.readFileSync(path.join(root, 'src/data/digiclara.ts'), 'utf8');
const slugs = [...data.matchAll(/\['([^']+)',\s*'[^']+',\s*'[^']+',/g)].map((match) => match[1]);
const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicates.length) failures.push(`duplicate article slugs: ${duplicates.join(', ')}`);
for (const slug of slugs) {
  const image = path.join(root, 'public/assets/images/articles', `${slug}.svg`);
  if (!fs.existsSync(image)) failures.push(`missing article image: ${slug}.svg`);
}
if (!fs.existsSync(path.join(root, 'public/assets/media-credits.json'))) failures.push('missing media-credits.json');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validation passed: ${files.length} files scanned, ${slugs.length} article images checked.`);
