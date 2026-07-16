import type { Lang } from '~/data/digiclara';
import { articlePath, getArticles, langPath, legalPages, topics } from '~/data/digiclara';

export const base = () => {
  const value = import.meta.env.BASE_URL || '/';
  return value.endsWith('/') ? value : `${value}/`;
};

export const withBase = (path: string) => `${base()}${path.replace(/^\/+/, '')}`;

export const getLangFromUrl = (pathname: string): Lang => (pathname.split('/').filter(Boolean).includes('en') ? 'en' : 'es');

export const alternatePath = (pathname: string, target: Lang) => {
  const parts = pathname.split('/').filter(Boolean);
  const baseParts = base().split('/').filter(Boolean);
  const withoutBase = baseParts.length && baseParts.every((part, index) => parts[index] === part) ? parts.slice(baseParts.length) : parts;
  const current = withoutBase[0] === 'en' ? 'en' : 'es';
  const route = withoutBase.slice(1);
  const knownRoutes: Record<Lang, Record<string, string>> = {
    es: {
      buscar: 'buscar',
      herramientas: 'herramientas',
      'sobre-nosotros': 'sobre-nosotros',
      autores: 'autores',
      contacto: 'contacto',
    },
    en: {
      buscar: 'search',
      herramientas: 'tools',
      'sobre-nosotros': 'about-us',
      autores: 'authors',
      contacto: 'contact',
    },
  };

  if (route.length === 0) return withBase(langPath(target));
  if (route[0] === (current === 'es' ? 'articulos' : 'articles') && route[1]) {
    const article = getArticles(current).find((item) => item.slug === route[1]);
    if (article) return withBase(articlePath(target, article.slug));
  }
  if (route[0] === 'legal' && route[1]) {
    const page = Object.values(legalPages).find((item) => item[current][0] === route[1]);
    if (page) return withBase(`/${target}/legal/${page[target][0]}/`);
  }
  const topic = Object.values(topics).find((item) => item[current].slug === route[0]);
  if (topic) return withBase(langPath(target, topic[target].slug));
  const mapped = Object.entries(knownRoutes[current]).find(([, value]) => value === route[0])?.[0];
  if (mapped) return withBase(langPath(target, knownRoutes[target][mapped]));
  return withBase(langPath(target));
};
