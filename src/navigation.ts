import { getPermalink } from './utils/permalinks';
import type { Lang } from './utils/i18n';
import { localizePath } from './utils/i18n';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Tienda', href: getPermalink('/software') },
    { text: 'Contacto', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Ver ofertas', href: getPermalink('/#productos') }],
};

export const getFooterData = (lang: Lang = 'es') => ({
  links: [
    {
      title: lang === 'en' ? 'Categories' : 'Categorias',
      links: [
        { text: 'Windows', href: getPermalink(localizePath('/software/windows', lang)) },
        { text: 'Office', href: getPermalink(localizePath('/software/office', lang)) },
        { text: 'Adobe', href: getPermalink(localizePath('/software/adobe', lang)) },
        { text: 'Corel', href: getPermalink(localizePath('/software/corel', lang)) },
      ],
    },
    {
      title: lang === 'en' ? 'Store' : 'Tienda',
      links: [
        { text: lang === 'en' ? 'All products' : 'Todos los productos', href: getPermalink(localizePath('/software', lang)) },
        { text: lang === 'en' ? 'Servers' : 'Servidores', href: getPermalink(localizePath('/software/servidores', lang)) },
        { text: lang === 'en' ? 'Bundles' : 'Packs', href: getPermalink(localizePath('/software/packs', lang)) },
        { text: lang === 'en' ? 'Deals' : 'Ofertas', href: getPermalink(localizePath('/#productos', lang)) },
        { text: lang === 'en' ? 'Cart / Checkout' : 'Carrito / Checkout', href: getPermalink(localizePath('/checkout', lang)) },
      ],
    },
    {
      title: lang === 'en' ? 'Help' : 'Ayuda',
      links: [
        { text: lang === 'en' ? 'Contact' : 'Contacto', href: getPermalink(localizePath('/contact', lang)) },
        { text: lang === 'en' ? 'Frequently asked questions' : 'Preguntas frecuentes', href: getPermalink(localizePath('/#faq', lang)) },
        { text: lang === 'en' ? 'Technical support' : 'Soporte tecnico', href: getPermalink(localizePath('/contact', lang)) },
        { text: lang === 'en' ? 'Volume quote' : 'Presupuesto por volumen', href: getPermalink(localizePath('/contact', lang)) },
        { text: lang === 'en' ? 'My account' : 'Mi cuenta', href: getPermalink(localizePath('/cuenta', lang)) },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: lang === 'en' ? 'Legal notice' : 'Aviso legal', href: getPermalink(localizePath('/terms', lang)) },
        { text: lang === 'en' ? 'Privacy' : 'Privacidad', href: getPermalink(localizePath('/privacy', lang)) },
        { text: lang === 'en' ? 'Terms' : 'Terminos', href: getPermalink(localizePath('/terms', lang)) },
      ],
    },
  ],
  secondaryLinks: [
    { text: lang === 'en' ? 'Terms' : 'Terminos', href: getPermalink(localizePath('/terms', lang)) },
    { text: lang === 'en' ? 'Privacy' : 'Privacidad', href: getPermalink(localizePath('/privacy', lang)) },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    ${
      lang === 'en'
        ? 'SoftMarket Pro. Online store for digital software licenses with invoice, VAT and English support.'
        : 'SoftMarket Pro. Tienda online de licencias digitales con factura, IVA y soporte en espanol.'
    }
  `,
});
