import { articleBodies, type ArticleBodyBase } from './articleBodies';

export type Lang = 'es' | 'en';
export type TopicKey = 'security' | 'privacy' | 'windows' | 'software' | 'guides' | 'comparisons' | 'tools' | 'business' | 'wifi';
export type ContentType = 'Guía documental' | 'Tutorial práctico' | 'Comparativa documental';

export const defaultLang: Lang = 'es';
export const affiliateEnabled = false;

export const site = {
  name: 'DigiClara',
  url: 'https://alexis0541.github.io/softmarketpro/',
  email: 'digiclara000@gmail.com',
  ownerName: 'Alexis Moncada',
  country: 'España',
  affiliateEnabled: false,
  newsletterEnabled: false,
  socialProfilesEnabled: false,
  newsSectionEnabled: false,
  slogans: {
    es: 'Tecnología clara para una vida digital más segura.',
    en: 'Clear technology for a safer digital life.',
  },
  descriptions: {
    es: 'DigiClara es un blog independiente con guías, comparativas y recursos para proteger dispositivos, elegir software y mejorar la privacidad digital.',
    en: 'DigiClara is an independent blog with guides, comparisons, and resources to protect devices, choose software, and improve digital privacy.',
  },
  authors: {
    es: 'Alexis Moncada - Equipo editorial de DigiClara',
    en: 'Alexis Moncada - DigiClara Editorial Team',
  },
};

export const ui = {
  es: {
    locale: 'es-ES',
    skip: 'Saltar al contenido',
    search: 'Buscar',
    searchPlaceholder: 'Buscar guías, temas o etiquetas',
    language: 'Idioma',
    menu: 'Menú',
    close: 'Cerrar',
    readMore: 'Leer artículo',
    featured: 'Artículo destacado',
    latest: 'Guías recientes',
    privacy: 'Privacidad digital',
    security: 'Ciberseguridad práctica',
    windows: 'Windows sin complicaciones',
    comparisons: 'Comparativas educativas',
    freeTools: 'Herramientas locales',
    popular: 'Selección editorial',
    methodology: 'Cómo trabajamos',
    toc: 'En esta guía',
    quick: 'Resumen rápido',
    steps: 'Pasos prácticos',
    tips: 'Recomendaciones',
    warnings: 'Limitaciones y riesgos',
    faq: 'Preguntas frecuentes',
    sources: 'Fuentes consultadas',
    related: 'Artículos relacionados',
    updated: 'Actualizado',
    published: 'Publicado',
    minutes: 'min de lectura',
    category: 'Categoría',
    tags: 'Etiquetas',
    noResults: 'No se encontraron resultados. Prueba con phishing, contraseñas, Windows o privacidad.',
    estimate: 'Estimación educativa, no auditoría.',
  },
  en: {
    locale: 'en-GB',
    skip: 'Skip to content',
    search: 'Search',
    searchPlaceholder: 'Search guides, topics or tags',
    language: 'Language',
    menu: 'Menu',
    close: 'Close',
    readMore: 'Read article',
    featured: 'Featured article',
    latest: 'Recent guides',
    privacy: 'Digital privacy',
    security: 'Practical cybersecurity',
    windows: 'Windows made clearer',
    comparisons: 'Educational comparisons',
    freeTools: 'Local tools',
    popular: 'Editor picks',
    methodology: 'How we work',
    toc: 'In this guide',
    quick: 'Quick summary',
    steps: 'Practical steps',
    tips: 'Recommendations',
    warnings: 'Limits and risks',
    faq: 'Frequently asked questions',
    sources: 'Sources consulted',
    related: 'Related articles',
    updated: 'Updated',
    published: 'Published',
    minutes: 'min read',
    category: 'Category',
    tags: 'Tags',
    noResults: 'No results found. Try phishing, passwords, Windows or privacy.',
    estimate: 'Educational estimate, not an audit.',
  },
} as const;

export const topics: Record<TopicKey, { es: { slug: string; name: string; summary: string }; en: { slug: string; name: string; summary: string } }> = {
  security: {
    es: { slug: 'ciberseguridad', name: 'Ciberseguridad', summary: 'Phishing, malware, contraseñas, autenticación, respuesta a incidentes y hábitos seguros.' },
    en: { slug: 'cybersecurity', name: 'Cybersecurity', summary: 'Phishing, malware, passwords, authentication, incident response and safer habits.' },
  },
  privacy: {
    es: { slug: 'privacidad', name: 'Privacidad', summary: 'Rastreo, cookies, permisos, datos personales, navegación privada y VPN educativa.' },
    en: { slug: 'privacy', name: 'Privacy', summary: 'Tracking, cookies, permissions, personal data, private browsing and educational VPN content.' },
  },
  windows: {
    es: { slug: 'windows', name: 'Windows', summary: 'Configuración, actualizaciones, Microsoft Defender, copias de seguridad y recuperación.' },
    en: { slug: 'windows', name: 'Windows', summary: 'Settings, updates, Microsoft Defender, backups and recovery.' },
  },
  software: {
    es: { slug: 'software', name: 'Software', summary: 'Elección segura de programas, actualizaciones, permisos y descargas confiables.' },
    en: { slug: 'software', name: 'Software', summary: 'Safe software choices, updates, permissions and trustworthy downloads.' },
  },
  guides: {
    es: { slug: 'guias', name: 'Guías', summary: 'Tutoriales claros para aplicar medidas concretas sin lenguaje innecesariamente técnico.' },
    en: { slug: 'guides', name: 'Guides', summary: 'Clear tutorials for applying concrete measures without unnecessary technical language.' },
  },
  comparisons: {
    es: { slug: 'comparativas', name: 'Comparativas', summary: 'Diferencias documentales sin puntuaciones inventadas ni promesas absolutas.' },
    en: { slug: 'comparisons', name: 'Comparisons', summary: 'Documentary comparisons without invented scores or absolute promises.' },
  },
  tools: {
    es: { slug: 'herramientas', name: 'Herramientas', summary: 'Utilidades locales que funcionan en el navegador y no envían contraseñas a servidores.' },
    en: { slug: 'tools', name: 'Tools', summary: 'Local utilities that run in the browser and do not send passwords to servers.' },
  },
  business: {
    es: { slug: 'pequenas-empresas', name: 'Pequeñas empresas', summary: 'Medidas realistas para equipos pequeños: cuentas, copias, accesos, formación y respuesta.' },
    en: { slug: 'small-business', name: 'Small business', summary: 'Realistic measures for small teams: accounts, backups, access, training and response.' },
  },
  wifi: {
    es: { slug: 'redes-wifi', name: 'Redes y Wi-Fi', summary: 'Routers, redes públicas, proveedores de Internet y conexión segura fuera de casa.' },
    en: { slug: 'networks-wifi', name: 'Networks and Wi-Fi', summary: 'Routers, public networks, internet providers and safer connections away from home.' },
  },
};

export const navItems = (lang: Lang) => [
  { label: lang === 'es' ? 'Inicio' : 'Home', href: langPath(lang, '/') },
  { label: lang === 'es' ? 'Empieza aquí' : 'Start here', href: langPath(lang, lang === 'es' ? 'empieza-aqui' : 'start-here') },
  { label: topics.security[lang].name, href: langPath(lang, topics.security[lang].slug) },
  { label: topics.privacy[lang].name, href: langPath(lang, topics.privacy[lang].slug) },
  { label: topics.windows[lang].name, href: langPath(lang, topics.windows[lang].slug) },
  { label: topics.software[lang].name, href: langPath(lang, topics.software[lang].slug) },
  { label: topics.guides[lang].name, href: langPath(lang, topics.guides[lang].slug) },
  { label: topics.comparisons[lang].name, href: langPath(lang, topics.comparisons[lang].slug) },
  { label: topics.tools[lang].name, href: langPath(lang, topics.tools[lang].slug) },
  { label: lang === 'es' ? 'Sobre nosotros' : 'About', href: langPath(lang, lang === 'es' ? 'sobre-nosotros' : 'about') },
];

export const langPath = (lang: Lang, path = '/') => {
  const clean = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '');
  return `/${lang}${clean ? `/${clean}` : ''}/`;
};

export const articlePath = (lang: Lang, slug: string) => `${langPath(lang, lang === 'es' ? 'articulos' : 'articles')}${slug}/`;

const sourceSets = {
  phishing: [
    { label: 'INCIBE - Phishing', url: 'https://www.incibe.es/ciudadania/tematicas/phishing' },
    { label: 'FTC - How to recognize and avoid phishing scams', url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams' },
    { label: 'NCSC - Phishing attacks', url: 'https://www.ncsc.gov.uk/guidance/phishing' },
  ],
  passwords: [
    { label: 'NIST SP 800-63B', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'CISA - Use strong passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords' },
    { label: 'ENISA - Cybersecurity for citizens', url: 'https://www.enisa.europa.eu/topics/cybersecurity-education/cybersecurity-for-citizens' },
  ],
  windows: [
    { label: 'Microsoft Support - Windows Security', url: 'https://support.microsoft.com/windows/windows-security' },
    { label: 'Microsoft Learn - Security baselines', url: 'https://learn.microsoft.com/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines' },
    { label: 'CISA - Secure by Design', url: 'https://www.cisa.gov/securebydesign' },
  ],
  backup: [
    { label: 'CISA - Data Backup Options', url: 'https://www.cisa.gov/news-events/news/data-backup-options' },
    { label: 'NCSC - Backing up your data', url: 'https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/backing-up-your-data' },
    { label: 'Microsoft Support - Backup and restore', url: 'https://support.microsoft.com/windows/backup-and-restore-in-windows' },
  ],
  privacy: [
    { label: 'AEPD - Guías y herramientas', url: 'https://www.aepd.es/guias-y-herramientas' },
    { label: 'EDPB - Guidelines and recommendations', url: 'https://www.edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en' },
    { label: 'FTC - Online privacy and security', url: 'https://consumer.ftc.gov/identity-theft-and-online-security/online-privacy-and-security' },
  ],
  vpn: [
    { label: 'NIST - Guide to IPsec VPNs', url: 'https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final' },
    { label: 'NCSC - Using public Wi-Fi securely', url: 'https://www.ncsc.gov.uk/guidance/using-public-wi-fi-securely' },
    { label: 'FTC - Online privacy and security', url: 'https://consumer.ftc.gov/identity-theft-and-online-security/online-privacy-and-security' },
  ],
  router: [
    { label: 'INCIBE - Tu router, tu castillo', url: 'https://www.incibe.es/sites/default/files/docs/guia_router/osi-guia-tu-router-tu-castillo.pdf' },
    { label: 'INCIBE - Seguridad en redes wifi', url: 'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia-de-seguridad-en-redes-wifi.pdf' },
    { label: 'CISA - Securing Network Infrastructure Devices', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a' },
  ],
  smallBusiness: [
    { label: 'NCSC - Small organisations guide to cyber security', url: 'https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security' },
    { label: 'CISA - Cyber Essentials Starter Kit', url: 'https://www.cisa.gov/sites/default/files/publications/Cyber%20Essentials%20Starter%20Kit_03.12.2021_508_0.pdf' },
    { label: 'INCIBE - Configuraciones básicas de seguridad', url: 'https://www.incibe.es/ciudadania/tematicas/configuraciones-dispositivos' },
  ],
  microsoftAccount: [
    { label: 'Microsoft Support - Windows Security', url: 'https://support.microsoft.com/windows/windows-security' },
    { label: 'Microsoft Support - Microsoft Authenticator FAQs', url: 'https://support.microsoft.com/en-us/authenticator/microsoft-authenticator-faqs' },
    { label: 'Microsoft Support - Two-step verification', url: 'https://support.microsoft.com/en-us/accounts-billing/work-school/sign-in-to-your-work-or-school-account-using-two-step-verification' },
  ],
  appPermissions: [
    { label: 'Android Developers - Permissions on Android', url: 'https://developer.android.com/guide/topics/permissions/overview' },
    { label: 'Apple Support - Privacy and Location Services', url: 'https://support.apple.com/en-us/102515' },
    { label: 'Apple Support - App Privacy Report', url: 'https://support.apple.com/en-us/102188' },
  ],
  software: [
    { label: 'CISA - Update software', url: 'https://www.cisa.gov/secure-our-world/update-software' },
    { label: 'NCSC - Install latest updates', url: 'https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/install-the-latest-software-and-app-updates' },
    { label: 'Microsoft - Smart App Control', url: 'https://support.microsoft.com/windows/smart-app-control' },
  ],
};

const defs = [
  ['reconocer-correo-phishing', 'security', 'guides', ['Phishing', 'Ingeniería social', 'Correo electrónico'], sourceSets.phishing, 'Cómo reconocer un correo de phishing antes de hacer clic', 'How to spot a phishing email before clicking', 'Señales prácticas para detectar mensajes sospechosos sin depender de alarmas exageradas.', 'Practical signs for identifying suspicious messages without relying on exaggerated alarms.', 'Fotografía relacionada con seguridad de correo y señales de alerta.', 'Photo related to email security and warning signs.', true],
  ['contrasenas-seguras', 'security', 'guides', ['Contraseñas', 'Passkeys', 'Cuentas'], sourceSets.passwords, 'Cómo crear contraseñas seguras sin olvidarlas', 'How to create strong passwords without forgetting them', 'Métodos recordables para usar claves largas, únicas y realistas.', 'Memorable ways to use long, unique and realistic passwords.', 'Fotografía relacionada con contraseñas y protección de cuentas.', 'Photo related to passwords and account protection.', false],
  ['windows-equipo-nuevo', 'windows', 'guides', ['Windows', 'Microsoft Defender', 'Configuración'], sourceSets.windows, 'Cómo proteger un equipo Windows nuevo desde el primer día', 'How to protect a new Windows computer from day one', 'Ajustes iniciales para reducir riesgos antes de instalar demasiados programas.', 'Initial settings to reduce risk before installing too many programs.', 'Ilustración de un portatil Windows con capas de protección básicas.', 'Illustration of a Windows laptop with basic protection layers.', false],
  ['copia-seguridad-321', 'windows', 'guides', ['Copias de seguridad', 'Recuperación', 'Ransomware'], sourceSets.backup, 'Regla 3-2-1 de copias de seguridad explicada sin complicaciones', 'The 3-2-1 backup rule explained simply', 'Cómo combinar copias locales y externas para recuperarte mejor.', 'How to combine local and external copies to recover better.', 'Diagrama de la regla 3-2-1 con tres copias, dos soportes y una fuera del equipo.', 'Diagram of the 3-2-1 rule with three copies, two media types and one off-device copy.', false],
  ['que-es-vpn', 'privacy', 'guides', ['VPN', 'Privacidad', 'Redes'], sourceSets.vpn, 'Qué es una VPN y que no puede prometer', 'What a VPN is and what it cannot promise', 'Explicacion neutral sobre túneles cifrados, límites reales y usos responsables.', 'A neutral explanation of encrypted tunnels, real limits and responsible uses.', 'Ilustración conceptual de una conexión cifrada entre dispositivo, servidor VPN e Internet.', 'Conceptual illustration of an encrypted connection between device, VPN server and internet.', false],
  ['wifi-publica-segura', 'wifi', 'guides', ['Wi-Fi', 'Redes públicas', 'Privacidad'], sourceSets.vpn, 'Cómo usar una red Wi-Fi publica con menos riesgo', 'How to use public Wi-Fi with less risk', 'Precauciones realistas para hoteles, aeropuertos, cafeterías y espacios compartidos.', 'Realistic precautions for hotels, airports, cafes and shared spaces.', 'Ilustración de una persona conectada a Wi-Fi público con capas de protección.', 'Illustration of a person connected to public Wi-Fi with protection layers.', false],
  ['gestor-contrasenas', 'software', 'guides', ['Gestores de contraseñas', 'Cuentas'], sourceSets.passwords, 'Qué es un gestor de contraseñas y cuándo merece la pena usarlo', 'What a password manager is and when it is worth using', 'Ventajas, límites y cuidados para guardar claves sin repetirlas.', 'Benefits, limits and cautions for storing passwords without reuse.', 'Ilustración de una caja fuerte digital con claves organizadas.', 'Illustration of a digital vault with organised keys.', false],
  ['autenticacion-dos-pasos', 'security', 'guides', ['Autenticación', '2FA'], sourceSets.passwords, 'Cómo usar la autenticación en dos pasos sin bloquearte', 'How to use two-factor authentication without locking yourself out', 'Metodos de segundo factor y copias de seguridad para no perder acceso.', 'Second-factor methods and backup options to avoid losing access.', 'Ilustración de una cuenta protegida por una segunda verificación.', 'Illustration of an account protected by a second verification step.', false],
  ['comprobar-enlace-peligroso', 'security', 'guides', ['Enlaces', 'Navegadores'], sourceSets.phishing, 'Cómo comprobar si un enlace puede ser peligroso', 'How to check whether a link may be dangerous', 'Revisión sencilla antes de abrir enlaces desconocidos.', 'A simple review before opening unknown links.', 'Ilustración de una lupa revisando un enlace sospechoso.', 'Illustration of a magnifier reviewing a suspicious link.', false],
  ['despues-filtracion-datos', 'privacy', 'guides', ['Filtraciones', 'Privacidad'], sourceSets.privacy, 'Qué hacer después de una filtración de datos', 'What to do after a data breach', 'Pasos prudentes cuando tus datos pudieron exponerse.', 'Careful steps when your data may have been exposed.', 'Ilustración de documentos protegidos después de una filtración.', 'Illustration of protected documents after a data breach.', false],
  ['software-sin-actualizar', 'software', 'guides', ['Actualizaciones', 'Malware'], sourceSets.software, 'Riesgos de usar software sin actualizar', 'Risks of using outdated software', 'Por qué las actualizaciones importan para seguridad y estabilidad.', 'Why updates matter for security and stability.', 'Ilustración de una aplicacion con aviso de actualización pendiente.', 'Illustration of an application with a pending update warning.', false],
  ['privacidad-windows', 'windows', 'guides', ['Windows', 'Privacidad'], sourceSets.windows, 'Cómo mejorar la privacidad de Windows sin romper funciones', 'How to improve Windows privacy without breaking features', 'Opciones para reducir datos innecesarios manteniendo funciones útiles.', 'Options to reduce unnecessary data while keeping useful features.', 'Ilustración de controles de privacidad en un panel de Windows.', 'Illustration of privacy controls in a Windows settings panel.', false],
  ['proveedor-internet-datos', 'privacy', 'guides', ['Proveedor de Internet', 'Metadatos'], sourceSets.privacy, 'Qué información puede ver un proveedor de Internet', 'What information an internet provider can see', 'Alcance y límites de la visibilidad del proveedor.', 'Scope and limits of provider visibility.', 'Ilustración de una ruta de conexión entre hogar, proveedor e Internet.', 'Illustration of a connection route between home, provider and internet.', false],
  ['vpn-antivirus', 'comparisons', 'comparisons', ['VPN', 'Antivirus'], sourceSets.vpn, 'VPN frente a antivirus: diferencias reales', 'VPN vs antivirus: real differences', 'Herramientas distintas para riesgos distintos, sin promesas absolutas.', 'Different tools for different risks, without absolute promises.', 'Diagrama comparativo entre túnel VPN y análisis antimalware.', 'Comparison díagram between VPN tunnel and anti-malware scanning.', false],
  ['vpn-gratuita-vs-pago', 'comparisons', 'comparisons', ['VPN', 'Privacidad'], sourceSets.vpn, 'VPN gratuita frente a VPN de pago: que revisar', 'Free VPN vs paid VPN: what to review', 'Aspectos de privacidad, límites y confianza antes de usar tráfico sensible.', 'Privacy, limits and trust points before using sensitive traffic.', 'Ilustración comparativa de dos modelos de servicio VPN sin marcas.', 'Comparison illustration of two unbranded VPN service models.', false],
  ['vpn-proxy', 'comparisons', 'comparisons', ['VPN', 'Proxy'], sourceSets.vpn, 'VPN frente a proxy: alcance, cifrado y límites', 'VPN vs proxy: scope, encryption and limits', 'Diferencias conceptuales entre túnel cifrado y reenvío de tráfico.', 'Conceptual differences between encrypted tunnels and traffic forwarding.', 'Ilustración de dos rutas de conexión: proxy y VPN.', 'Illustration of two connection routes: proxy and VPN.', false],
  ['descarga-falsa', 'security', 'guides', ['Descargas', 'Malware'], sourceSets.software, 'Cómo detectar una página de descarga falsa', 'How to detect a fake download page', 'Señales para evitar instaladores manipulados y botones engañosos.', 'Signs that help avoid tampered installers and deceptive buttons.', 'Ilustración de una página de descarga con botones engañosos señalados.', 'Illustration of a download page with deceptive buttons highlighted.', false],
  ['seguridad-pequena-empresa', 'business', 'guides', ['Pequeñas empresas', 'Cuentas'], sourceSets.smallBusiness, 'Seguridad básica para pequeñas empresas sin equipo técnico', 'Basic security for small businesses without an IT team', 'Medidas realistas para cuentas, copias, accesos y respuesta inicial.', 'Realistic measures for accounts, backups, access and initial response.', 'Ilustración de una pequeña empresa con capas básicas de seguridad.', 'Illustration of a small business with basic security layers.', false],
  ['router-casa-seguro', 'wifi', 'guides', ['Router', 'Wi-Fi'], sourceSets.router, 'Ajustes básicos para proteger el router de casa', 'Basic settings to protect your home router', 'Cambios sencillos para mejorar la red doméstica sin complicarla.', 'Simple changes to improve the home network without overcomplicating it.', 'Ilustración de un router doméstico con configuración segura.', 'Illustration of a home router with safer settings.', false],
  ['permisos-aplicaciones', 'privacy', 'guides', ['Permisos', 'Aplicaciones'], sourceSets.appPermissions, 'Cómo revisar permisos de aplicaciones sin volverse paranoico', 'How to review app permissions without becoming paranoid', 'Criterios para conceder, retirar y revisar permisos con sentido común.', 'Criteria for granting, removing and reviewing permissions with common sense.', 'Ilustración de permisos de aplicaciones organizados por sensibilidad.', 'Illustration of app permissions organised by sensitivity.', false],
  ['proteger-cuenta-microsoft', 'windows', 'guides', ['Microsoft', 'Cuentas', 'Autenticación'], sourceSets.microsoftAccount, 'Cómo proteger una cuenta de Microsoft', 'How to protect a Microsoft account', 'Ajustes clave para reducir accesos no autorizados y recuperar la cuenta con menos riesgo.', 'Key settings to reduce unauthorised access and recover the account with less risk.', 'Fotografía de un portátil usado para revisar la seguridad de una cuenta Microsoft.', 'Photo of a laptop used to review Microsoft account security.', false],
  ['copia-local-nube', 'comparisons', 'comparisons', ['Copias de seguridad', 'Nube', 'Recuperación'], sourceSets.backup, 'Copia local frente a copia en la nube', 'Local backup vs cloud backup', 'Diferencias prácticas para elegir dónde guardar tus copias de seguridad.', 'Practical differences for choosing where to store backups.', 'Fotografía de un disco externo conectado a un portátil para comparar copias locales y nube.', 'Photo of an external drive connected to a laptop for comparing local and cloud backups.', false],
] as const;

const readingTime = (body: ArticleBodyBase) =>
  Math.max(4, Math.ceil([body.quick.join(' '), body.sections.map((section) => `${section[0]} ${section[1].join(' ')}`).join(' '), body.steps.join(' '), body.tips.join(' '), body.warnings.join(' '), body.faq.flat().join(' ')].join(' ').split(/\s+/).length / 210));

export const articles = defs.flatMap(([slug, topic, group, tags, sources, esTitle, enTitle, esSummary, enSummary, esAlt, enAlt, featured], index) => [
  {
    lang: 'es' as Lang,
    slug,
    topic: topic as TopicKey,
    group: group as TopicKey,
    type: (group === 'comparisons' ? 'Comparativa documental' : 'Guía documental') as ContentType,
    tags,
    published: `2026-07-${String(1 + (index % 16)).padStart(2, '0')}`,
    updated: '2026-07-16',
    image: `/assets/images/articles/${slug}.jpg`,
    imageCredit: 'Fotografía real de Unsplash, guardada localmente y registrada en media-credits.json.',
    featured,
    title: esTitle,
    summary: esSummary,
    author: site.authors.es,
    readingTime: readingTime(articleBodies[slug].es),
    alt: esAlt,
    body: { ...articleBodies[slug].es, sources },
  },
  {
    lang: 'en' as Lang,
    slug,
    topic: topic as TopicKey,
    group: group as TopicKey,
    type: (group === 'comparisons' ? 'Comparativa documental' : 'Guía documental') as ContentType,
    tags: tags.map((tag) => tag === 'Contraseñas' ? 'Passwords' : tag === 'Pequeñas empresas' ? 'Small business' : tag === 'Copias de seguridad' ? 'Backups' : tag === 'Privacidad' ? 'Privacy' : tag === 'Autenticación' ? 'Authentication' : tag),
    published: `2026-07-${String(1 + (index % 16)).padStart(2, '0')}`,
    updated: '2026-07-16',
    image: `/assets/images/articles/${slug}.jpg`,
    imageCredit: 'Real Unsplash photo, stored locally and recorded in media-credits.json.',
    featured,
    title: enTitle,
    summary: enSummary,
    author: site.authors.en,
    readingTime: readingTime(articleBodies[slug].en),
    alt: enAlt,
    body: { ...articleBodies[slug].en, sources },
  },
]);

export const getArticles = (lang: Lang) => articles.filter((article) => article.lang === lang);
export const getArticle = (lang: Lang, slug: string) => articles.find((article) => article.lang === lang && article.slug === slug);
export const getTopicBySlug = (lang: Lang, slug: string) =>
  (Object.keys(topics) as TopicKey[]).find((key) => topics[key][lang].slug === slug);
export const getTopicArticles = (lang: Lang, topic: TopicKey) => getArticles(lang).filter((article) => article.topic === topic || article.group === topic);

export const legalPages = {
  legal: {
    es: ['aviso-legal', 'Aviso legal', 'Identificacion editorial de DigiClara, responsable, país y contacto.'],
    en: ['legal-notice', 'Legal notice', 'Editorial identification for DigiClara, owner, country and contact.'],
  },
  privacy: {
    es: ['politica-de-privacidad', 'Política de privacidad', 'Qué datos trata DigiClara, como funciona el contacto por correo y que derechos puedes ejercer.'],
    en: ['privacy-policy', 'Privacy policy', 'What data DigiClara processes, how email contact works and what rights you can exercise.'],
  },
  cookies: {
    es: ['politica-de-cookies', 'Política de cookies', 'Uso real de cookies y almacenamiento local en esta version del sitio.'],
    en: ['cookie-policy', 'Cookie policy', 'Actual use of cookies and local storage in this version of the site.'],
  },
  terms: {
    es: ['terminos-de-uso', 'Términos de uso', 'Condiciones generales para consultar contenido educativo publicado por DigiClara.'],
    en: ['terms-of-use', 'Terms of use', 'General conditions for reading educational content published by DigiClara.'],
  },
  affiliates: {
    es: ['declaracion-de-afiliados', 'Declaracion de afiliados', 'DigiClara no usa enlaces afiliados actualmente; esta política explica como se identificarian en el futuro.'],
    en: ['affiliate-disclosure', 'Affiliate disclosure', 'DigiClara does not currently use affiliate links; this policy explains how they would be identified in the future.'],
  },
  editorial: {
    es: ['politica-editorial', 'Política editorial', 'Criterios de investigación, revisión, fuentes, independencia y uso responsable de IA.'],
    en: ['editorial-policy', 'Editorial policy', 'Research, review, sourcing, independence and responsible AI criteria.'],
  },
  methodology: {
    es: ['metodologia', 'Metodología', 'Diferencia entre guías, comparativas documentales y pruebas prácticas realizadas de verdad.'],
    en: ['methodology', 'Methodology', 'Difference between guides, documentary comparisons and practical tests that were actually performed.'],
  },
  corrections: {
    es: ['politica-de-correcciones', 'Política de correcciones', 'Cómo reportar errores, como se revisan y como se actualizan los contenidos.'],
    en: ['corrections-policy', 'Corrections policy', 'How to report errors, how they are reviewed and how content is updated.'],
  },
} as const;



