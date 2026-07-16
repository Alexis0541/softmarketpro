import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const required = process.argv.includes('--required');

if (!fs.existsSync(dist)) {
  if (required) {
    console.error('dist directory not found. Run astro build before link validation.');
    process.exit(1);
  }
  console.log('dist directory not found; skipping built HTML link validation.');
  process.exit(0);
}

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(dist);

const basePath = '/softmarketpro';
const failures = [];
const accented = /[\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1]/;
const bannedPaths = [/\/es\/art\u00edculos\//, /\/es\/recursos\//, /\/es\/gu\u00edas\//, /\/es\/legal\/pol\u00edtica/, /\/es\/legal\/t\u00e9rminos/];

const pagePath = (file) => {
  const rel = path.relative(dist, file).replaceAll(path.sep, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/index\.html$/, '')}`;
};

const existsForUrl = (pathname) => {
  if (pathname === '/404/' || pathname === '/404.html') return fs.existsSync(path.join(dist, '404.html'));
  const clean = pathname.replace(/^\/+/, '');
  if (!clean) return fs.existsSync(path.join(dist, 'index.html'));
  const direct = path.join(dist, clean);
  if (fs.existsSync(direct)) return true;
  if (path.extname(clean)) return false;
  return fs.existsSync(path.join(dist, clean, 'index.html')) || fs.existsSync(path.join(dist, `${clean}.html`));
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const current = pagePath(file);
  const urls = [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const raw of urls) {
    if (!raw || raw.includes('${') || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('data:')) continue;
    let url;
    try {
      url = new URL(raw, `https://example.test${current}`);
    } catch {
      failures.push(`${current}: invalid URL ${raw}`);
      continue;
    }
    if (url.origin !== 'https://example.test' && !url.hostname.endsWith('github.io')) continue;
    let pathname = decodeURI(url.pathname);
    if (pathname.startsWith(basePath + '/')) pathname = pathname.slice(basePath.length);
    if (pathname === basePath) pathname = '/';
    if (!pathname.startsWith('/')) pathname = `/${pathname}`;
    if (accented.test(pathname)) failures.push(`${current}: accented internal URL ${pathname}`);
    for (const rule of bannedPaths) {
      if (rule.test(pathname)) failures.push(`${current}: banned internal URL ${pathname}`);
    }
    if (!existsForUrl(pathname)) failures.push(`${current}: broken internal URL ${pathname}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Built HTML link validation passed: ${htmlFiles.length} pages checked.`);
