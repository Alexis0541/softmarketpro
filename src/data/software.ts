import type { Lang } from '~/utils/i18n';
import { ui } from '~/utils/i18n';

const categorySource = [
  {
    slug: 'windows',
    name: { es: 'Windows', en: 'Windows' },
    description: {
      es: 'Licencias digitales para Windows 10, Windows 11 y equipos profesionales.',
      en: 'Digital licenses for Windows 10, Windows 11 and professional computers.',
    },
    icon: 'tabler:brand-windows',
  },
  {
    slug: 'office',
    name: { es: 'Office', en: 'Office' },
    description: {
      es: 'Licencias de Microsoft Office para particulares, autonomos, empresas y equipos Mac.',
      en: 'Microsoft Office licenses for home users, freelancers, businesses and Mac teams.',
    },
    icon: 'tabler:file-spreadsheet',
  },
  {
    slug: 'adobe',
    name: { es: 'Adobe', en: 'Adobe' },
    description: {
      es: 'Software Adobe de productividad, PDF y herramientas profesionales para documentos.',
      en: 'Adobe productivity, PDF and professional document software.',
    },
    icon: 'tabler:file-type-pdf',
  },
  {
    slug: 'corel',
    name: { es: 'Corel', en: 'Corel' },
    description: {
      es: 'Herramientas de diseno grafico y creatividad con licencia digital.',
      en: 'Graphic design and creative tools with digital licenses.',
    },
    icon: 'tabler:palette',
  },
  {
    slug: 'servidores',
    name: { es: 'Servidores', en: 'Servers' },
    description: {
      es: 'Licencias Windows Server para negocios, tecnicos y entornos profesionales.',
      en: 'Windows Server licenses for businesses, technicians and professional environments.',
    },
    icon: 'tabler:server',
  },
  {
    slug: 'packs',
    name: { es: 'Packs', en: 'Bundles' },
    description: {
      es: 'Combos de licencias para ahorrar en Windows, Office y herramientas de negocio.',
      en: 'License bundles to save on Windows, Office and business tools.',
    },
    icon: 'tabler:packages',
  },
] as const;

const productSource = [
  {
    slug: 'office-2024-professional-plus',
    category: 'office',
    name: { es: 'Microsoft Office 2024 Professional Plus', en: 'Microsoft Office 2024 Professional Plus' },
    price: 29.9,
    oldPrice: 299.99,
    image: '/products/office-2024-professional-plus.svg',
    badge: '-90%',
    description: {
      es: 'Licencia digital para Word, Excel, PowerPoint, Outlook, Access y OneNote. Ideal para empresas, autonomos y usuarios avanzados.',
      en: 'Digital license for Word, Excel, PowerPoint, Outlook, Access and OneNote. Ideal for businesses, freelancers and advanced users.',
    },
    features: {
      es: ['1 usuario', 'Windows 10/11', 'Pago unico', 'IVA incluido'],
      en: ['1 user', 'Windows 10/11', 'One-time payment', 'VAT included'],
    },
  },
  {
    slug: 'windows-11-professional',
    category: 'windows',
    name: { es: 'Windows 11 Professional', en: 'Windows 11 Professional' },
    price: 29.9,
    oldPrice: 179,
    image: '/products/windows-11-professional.svg',
    badge: '-83%',
    description: {
      es: 'Sistema operativo profesional con BitLocker, Escritorio remoto, seguridad avanzada y funciones para empresa.',
      en: 'Professional operating system with BitLocker, Remote Desktop, advanced security and business features.',
    },
    features: { es: ['1 PC', '32/64 bit', 'Entrega digital', 'IVA incluido'], en: ['1 PC', '32/64 bit', 'Digital delivery', 'VAT included'] },
  },
  {
    slug: 'adobe-acrobat-pro-dc-2019',
    category: 'adobe',
    name: { es: 'Adobe Acrobat Pro DC 2019', en: 'Adobe Acrobat Pro DC 2019' },
    price: 39.9,
    oldPrice: 199,
    image: '/products/adobe-acrobat-pro-dc-2019.webp',
    badge: '-80%',
    description: {
      es: 'Licencia de por vida para editar, convertir, firmar y proteger archivos PDF desde un equipo Windows.',
      en: 'Lifetime license to edit, convert, sign and protect PDF files from a Windows computer.',
    },
    features: { es: ['1 dispositivo', 'De por vida', 'PC Windows', 'IVA incluido'], en: ['1 device', 'Lifetime', 'Windows PC', 'VAT included'] },
  },
  {
    slug: 'adobe-acrobat-pro-dc-2021',
    category: 'adobe',
    name: { es: 'Adobe Acrobat Pro DC 2021', en: 'Adobe Acrobat Pro DC 2021' },
    price: 49.9,
    oldPrice: 199,
    image: '/products/adobe-acrobat-pro-dc-2021.svg',
    badge: '-75%',
    description: {
      es: 'Herramienta profesional para trabajo con PDF, formularios, documentos de empresa y flujos administrativos.',
      en: 'Professional tool for PDFs, forms, business documents and administrative workflows.',
    },
    features: { es: ['1 dispositivo', 'De por vida', 'PC Windows', 'IVA incluido'], en: ['1 device', 'Lifetime', 'Windows PC', 'VAT included'] },
  },
  {
    slug: 'office-2019-professional-plus',
    category: 'office',
    name: { es: 'Microsoft Office 2019 Professional Plus', en: 'Microsoft Office 2019 Professional Plus' },
    price: 19.9,
    oldPrice: 99.9,
    image: '/products/office-2019-professional-plus.svg',
    badge: '-80%',
    description: {
      es: 'Suite clasica de Office para documentos, hojas de calculo, presentaciones, correo y tareas administrativas.',
      en: 'Classic Office suite for documents, spreadsheets, presentations, email and administrative tasks.',
    },
    features: { es: ['1 usuario', 'Windows', 'Pago unico', 'IVA incluido'], en: ['1 user', 'Windows', 'One-time payment', 'VAT included'] },
  },
  {
    slug: 'coreldraw-2021-standard',
    category: 'corel',
    name: { es: 'CorelDRAW 2021 Standard', en: 'CorelDRAW 2021 Standard' },
    price: 29.9,
    oldPrice: 44.85,
    image: '/products/coreldraw-2021-standard.webp',
    badge: '-33%',
    description: {
      es: 'Software de diseno grafico para ilustraciones, rotulos, piezas de marketing y trabajos creativos.',
      en: 'Graphic design software for illustrations, signage, marketing pieces and creative work.',
    },
    features: { es: ['Licencia digital', 'Diseno grafico', 'Entrega por email', 'IVA incluido'], en: ['Digital license', 'Graphic design', 'Email delivery', 'VAT included'] },
  },
  {
    slug: 'office-2021-professional-plus',
    category: 'office',
    name: { es: 'Microsoft Office 2021 Professional Plus', en: 'Microsoft Office 2021 Professional Plus' },
    price: 24.9,
    oldPrice: 129.9,
    image: '/products/office-2021-professional-plus.svg',
    badge: '-81%',
    description: {
      es: 'Office 2021 para usuarios que prefieren una licencia permanente sin cuotas mensuales ni renovaciones.',
      en: 'Office 2021 for users who prefer a permanent license with no monthly fees or renewals.',
    },
    features: { es: ['1 usuario', 'Windows', 'Activacion telefonica', 'IVA incluido'], en: ['1 user', 'Windows', 'Phone activation', 'VAT included'] },
  },
  {
    slug: 'windows-10-professional',
    category: 'windows',
    name: { es: 'Windows 10 Professional', en: 'Windows 10 Professional' },
    price: 19.9,
    oldPrice: 109,
    image: '/products/windows-10-professional.svg',
    badge: '-82%',
    description: {
      es: 'Licencia Windows 10 Pro para equipos que necesitan estabilidad, compatibilidad y funciones profesionales.',
      en: 'Windows 10 Pro license for computers that need stability, compatibility and professional features.',
    },
    features: { es: ['1 PC', '32/64 bit', 'Entrega digital', 'IVA incluido'], en: ['1 PC', '32/64 bit', 'Digital delivery', 'VAT included'] },
  },
  {
    slug: 'windows-10-home',
    category: 'windows',
    name: { es: 'Windows 10 Home', en: 'Windows 10 Home' },
    price: 18.9,
    oldPrice: 99,
    image: '/products/windows-10-home.svg',
    badge: '-81%',
    description: {
      es: 'Licencia para usuarios domesticos que buscan activar Windows 10 de forma sencilla y economica.',
      en: 'License for home users who want to activate Windows 10 simply and affordably.',
    },
    features: { es: ['1 PC', '32/64 bit', 'Entrega digital', 'IVA incluido'], en: ['1 PC', '32/64 bit', 'Digital delivery', 'VAT included'] },
  },
  {
    slug: 'windows-11-home',
    category: 'windows',
    name: { es: 'Windows 11 Home', en: 'Windows 11 Home' },
    price: 26.9,
    oldPrice: 109.9,
    image: '/products/windows-11-home.svg',
    badge: '-76%',
    description: {
      es: 'Windows 11 Home para uso personal, estudio, navegacion, gaming y productividad cotidiana.',
      en: 'Windows 11 Home for personal use, study, browsing, gaming and everyday productivity.',
    },
    features: { es: ['1 PC', 'Entrega digital', 'Activacion online', 'IVA incluido'], en: ['1 PC', 'Digital delivery', 'Online activation', 'VAT included'] },
  },
  {
    slug: 'windows-server-2022-standard',
    category: 'servidores',
    name: { es: 'Windows Server 2022 Standard 16 Core', en: 'Windows Server 2022 Standard 16 Core' },
    price: 69.9,
    oldPrice: 104.85,
    image: '/products/windows-server-2022-standard.webp',
    badge: '-33%',
    description: {
      es: 'Licencia Windows Server para pequenas empresas, laboratorios, tecnicos y entornos de red profesionales.',
      en: 'Windows Server license for small businesses, labs, technicians and professional network environments.',
    },
    features: { es: ['16 Core', 'Standard', 'Entrega digital', 'IVA incluido'], en: ['16 Core', 'Standard', 'Digital delivery', 'VAT included'] },
  },
  {
    slug: 'office-2024-home-business',
    category: 'office',
    name: { es: 'Office 2024 Home and Business PC/Mac', en: 'Office 2024 Home and Business PC/Mac' },
    price: 129.9,
    oldPrice: 399.9,
    image: '/products/office-2024-home-business.svg',
    badge: '-68%',
    description: {
      es: 'Licencia vinculada a cuenta Microsoft para Word, Excel, PowerPoint, Outlook y OneNote en PC o Mac.',
      en: 'License linked to a Microsoft account for Word, Excel, PowerPoint, Outlook and OneNote on PC or Mac.',
    },
    features: { es: ['PC/Mac', 'Cuenta Microsoft', 'De por vida', 'IVA incluido'], en: ['PC/Mac', 'Microsoft account', 'Lifetime', 'VAT included'] },
  },
] as const;

export const categorySlugs = categorySource.map((category) => category.slug);

export const getCategories = (lang: Lang = 'es') =>
  categorySource.map((category) => ({
    slug: category.slug,
    name: category.name[lang],
    description: category.description[lang],
    icon: category.icon,
  }));

export const getProducts = (lang: Lang = 'es') =>
  productSource.map((product) => ({
    slug: product.slug,
    category: product.category,
    name: product.name[lang],
    price: product.price,
    oldPrice: product.oldPrice,
    image: product.image,
    badge: product.badge,
    description: product.description[lang],
    features: product.features[lang],
  }));

export type Product = ReturnType<typeof getProducts>[number];
export type Category = ReturnType<typeof getCategories>[number];

export const getCategory = (slug: string, lang: Lang = 'es') => getCategories(lang).find((category) => category.slug === slug);

export const getProductsByCategory = (slug: string, lang: Lang = 'es') =>
  getProducts(lang).filter((product) => product.category === slug);

export const formatPrice = (price: number, lang: Lang = 'es') =>
  new Intl.NumberFormat(ui[lang].locale, { style: 'currency', currency: 'EUR' }).format(price);
