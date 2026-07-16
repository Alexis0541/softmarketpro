import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import compress from 'astro-compress';

import digiclara from './vendor/integration';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const githubRepository = process.env.GITHUB_REPOSITORY;
const githubOwner = githubRepository?.split('/')[0];
const githubRepo = githubRepository?.split('/')[1];
const githubPagesSite = githubOwner ? `https://${githubOwner}.github.io` : undefined;
const githubPagesBase =
  githubOwner && githubRepo && githubRepo !== `${githubOwner}.github.io` ? `/${githubRepo}` : '/';

export default defineConfig({
  site: process.env.SITE ?? githubPagesSite ?? 'https://digiclara.example',
  base: process.env.BASE_PATH ?? githubPagesBase,
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) =>
        !/[áéíóúÁÉÍÓÚñÑ]/.test(page) &&
        ![
          '/es/recursos/',
          '/en/about-us/',
          '/es/autores/',
          '/en/authors/',
          '/es/articulos/copia-seguridad/',
          '/es/articulos/wifi-publica/',
          '/es/articulos/proveedor-internet/',
          '/es/articulos/vpn-gratuita-pago/',
        ].some((route) => page.endsWith(route)),
    }),
    icon({
      include: {
        tabler: ['*'],
      },
    }),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    digiclara({
      config: './src/config.yaml',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
