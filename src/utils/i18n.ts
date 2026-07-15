export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const getBaseSegments = () => {
  const base = import.meta.env.BASE_URL || '/';
  return base.split('/').filter(Boolean);
};

export const getLangFromUrl = (url: URL): Lang => {
  const segments = url.pathname.split('/').filter(Boolean);
  return segments.includes('en') ? 'en' : 'es';
};

export const stripLang = (path: string) => {
  const baseSegments = getBaseSegments();
  let segments = (path || '/').split('/').filter(Boolean);

  if (baseSegments.length && baseSegments.every((segment, index) => segments[index] === segment)) {
    segments = segments.slice(baseSegments.length);
  }

  segments = segments.filter((segment) => segment !== 'en');
  return segments.length ? `/${segments.join('/')}` : '/';
};

export const localizePath = (path: string, lang: Lang) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
};

export const alternateLangPath = (path: string, targetLang: Lang) => localizePath(stripLang(path), targetLang);

export const ui = {
  es: {
    locale: 'es-ES',
    topBar: 'Envio inmediato por email todos los dias. Factura con IVA y soporte tecnico en espanol.',
    searchPlaceholder: 'Buscar Windows, Office, Adobe...',
    account: 'Iniciar sesion / Registro',
    help: 'Necesitas ayuda?',
    navHome: 'Inicio',
    navStore: 'Tienda',
    navContact: 'Contacto',
    navAccount: 'Mi cuenta',
    cartLabel: 'Carrito',
    order: 'Tu pedido',
    emptyCart: 'Tu carrito esta vacio.',
    delete: 'Eliminar',
    total: 'Total',
    buyNow: 'Comprar ahora',
    cartDemo: 'Demo de tienda: el siguiente paso es conectar Redsys, Stripe, PayPal o transferencia.',
    productDetail: 'Detalle del producto',
    product: 'Producto',
    vatIncluded: 'IVA incluido',
    modalVat: 'IVA incluido. Entrega digital por email.',
    quantity: 'Cantidad',
    addToCart: 'Anadir al carrito',
    addedToCart: 'Anadido al carrito',
    viewDetails: 'Ver detalles',
    cartEmptyAlert: 'Tu carrito esta vacio.',
    langLabel: 'Idioma',
    es: 'ES',
    en: 'EN',
  },
  en: {
    locale: 'en-GB',
    topBar: 'Instant email delivery every day. VAT invoice and technical support in English.',
    searchPlaceholder: 'Search Windows, Office, Adobe...',
    account: 'Sign in / Register',
    help: 'Need help?',
    navHome: 'Home',
    navStore: 'Store',
    navContact: 'Contact',
    navAccount: 'My account',
    cartLabel: 'Cart',
    order: 'Your order',
    emptyCart: 'Your cart is empty.',
    delete: 'Remove',
    total: 'Total',
    buyNow: 'Buy now',
    cartDemo: 'Store demo: the next step is connecting Redsys, Stripe, PayPal or bank transfer.',
    productDetail: 'Product details',
    product: 'Product',
    vatIncluded: 'VAT included',
    modalVat: 'VAT included. Digital delivery by email.',
    quantity: 'Quantity',
    addToCart: 'Add to cart',
    addedToCart: 'Added to cart',
    viewDetails: 'View details',
    cartEmptyAlert: 'Your cart is empty.',
    langLabel: 'Language',
    es: 'ES',
    en: 'EN',
  },
} as const;
