export type Lang = 'es' | 'en';
export type TopicKey = 'software' | 'security' | 'privacy' | 'windows' | 'guides' | 'comparisons' | 'tools' | 'news';

export const defaultLang: Lang = 'es';
export const affiliateEnabled = false;

export const site = {
  name: 'DigiClara',
  email: '',
  slogans: {
    es: 'Tecnologia clara para una vida digital mas segura.',
    en: 'Clear technology for a safer digital life.',
  },
  descriptions: {
    es: 'DigiClara es un blog independiente con guias, comparativas y recursos para elegir software, proteger dispositivos y mejorar la privacidad digital.',
    en: 'DigiClara is an independent blog with guides, comparisons, and resources to choose software, protect devices, and improve digital privacy.',
  },
  authors: {
    es: 'Equipo editorial de DigiClara',
    en: 'DigiClara Editorial Team',
  },
};

export const ui = {
  es: {
    locale: 'es-ES',
    skip: 'Saltar al contenido',
    search: 'Buscar',
    searchPlaceholder: 'Buscar guias, temas o etiquetas',
    language: 'Idioma',
    menu: 'Menu',
    close: 'Cerrar',
    readMore: 'Leer articulo',
    featured: 'Articulo destacado',
    latest: 'Guias recientes',
    privacy: 'Privacidad digital',
    security: 'Ciberseguridad practica',
    windows: 'Windows sin complicaciones',
    comparisons: 'Comparativas educativas',
    freeTools: 'Herramientas gratuitas',
    popular: 'Seleccion editorial',
    methodology: 'Como trabajamos',
    subscribe: 'Actualizaciones editoriales',
    subscribeText: 'La suscripcion se activara cuando exista un proveedor de boletines configurado. Por ahora no recopilamos correos desde esta pagina.',
    toc: 'En esta guia',
    quick: 'Resumen rapido',
    steps: 'Pasos practicos',
    tips: 'Consejos',
    warnings: 'Advertencias',
    faq: 'Preguntas frecuentes',
    sources: 'Fuentes',
    related: 'Articulos relacionados',
    updated: 'Actualizado',
    published: 'Publicado',
    minutes: 'min de lectura',
    category: 'Categoria',
    tags: 'Etiquetas',
    noResults: 'No se encontraron resultados.',
    estimate: 'Estimacion educativa, no auditoria.',
    contactNote: 'Este formulario no envia datos todavia. Configura un servicio como Formspree o Netlify Forms antes de activarlo.',
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
    freeTools: 'Free tools',
    popular: 'Editor picks',
    methodology: 'How we work',
    subscribe: 'Editorial updates',
    subscribeText: 'Newsletter signup will be enabled after a provider is configured. For now we do not collect emails on this page.',
    toc: 'In this guide',
    quick: 'Quick summary',
    steps: 'Practical steps',
    tips: 'Tips',
    warnings: 'Warnings',
    faq: 'Frequently asked questions',
    sources: 'Sources',
    related: 'Related articles',
    updated: 'Updated',
    published: 'Published',
    minutes: 'min read',
    category: 'Category',
    tags: 'Tags',
    noResults: 'No results found.',
    estimate: 'Educational estimate, not an audit.',
    contactNote: 'This form does not send data yet. Configure a service such as Formspree or Netlify Forms before enabling it.',
  },
} as const;

export const topics: Record<TopicKey, { es: { slug: string; name: string; summary: string }; en: { slug: string; name: string; summary: string } }> = {
  software: {
    es: { slug: 'software', name: 'Software', summary: 'Programas utiles, herramientas de oficina, productividad y utilidades para trabajar mejor.' },
    en: { slug: 'software', name: 'Software', summary: 'Useful programs, office tools, productivity and utilities for better daily work.' },
  },
  security: {
    es: { slug: 'ciberseguridad', name: 'Ciberseguridad', summary: 'Phishing, malware, contrasenas, cuentas y seguridad practica para personas y pequenas empresas.' },
    en: { slug: 'cybersecurity', name: 'Cybersecurity', summary: 'Phishing, malware, passwords, accounts and practical security for people and small businesses.' },
  },
  privacy: {
    es: { slug: 'privacidad', name: 'Privacidad', summary: 'Rastreo, Wi-Fi publico, permisos, navegacion privada, VPN general y limites reales.' },
    en: { slug: 'privacy', name: 'Privacy', summary: 'Tracking, public Wi-Fi, permissions, private browsing, general VPN concepts and real limits.' },
  },
  windows: {
    es: { slug: 'windows', name: 'Windows', summary: 'Configuracion, seguridad, privacidad, copias de seguridad, recuperacion y mantenimiento.' },
    en: { slug: 'windows', name: 'Windows', summary: 'Setup, security, privacy, backup, recovery and maintenance.' },
  },
  guides: {
    es: { slug: 'guias', name: 'Guias', summary: 'Tutoriales paso a paso para resolver tareas digitales con calma y criterio.' },
    en: { slug: 'guides', name: 'Guides', summary: 'Step-by-step tutorials to solve digital tasks calmly and clearly.' },
  },
  comparisons: {
    es: { slug: 'comparativas', name: 'Comparativas', summary: 'Diferencias explicadas sin puntuaciones inventadas ni promesas absolutas.' },
    en: { slug: 'comparisons', name: 'Comparisons', summary: 'Differences explained without invented scores or absolute promises.' },
  },
  tools: {
    es: { slug: 'recursos', name: 'Herramientas', summary: 'Utilidades locales que funcionan en tu navegador y no envian datos sensibles.' },
    en: { slug: 'resources', name: 'Tools', summary: 'Local utilities that run in your browser and do not send sensitive data.' },
  },
  news: {
    es: { slug: 'noticias', name: 'Noticias', summary: 'Analisis y explicaciones sin titulares falsos ni actualidad no verificada.' },
    en: { slug: 'news', name: 'News', summary: 'Analysis and explainers without fake headlines or unverified breaking news.' },
  },
};

export const navItems = (lang: Lang) => [
  { label: lang === 'es' ? 'Inicio' : 'Home', href: langPath(lang, '/') },
  { label: topics.software[lang].name, href: langPath(lang, topics.software[lang].slug) },
  { label: topics.security[lang].name, href: langPath(lang, topics.security[lang].slug) },
  { label: topics.privacy[lang].name, href: langPath(lang, topics.privacy[lang].slug) },
  { label: topics.windows[lang].name, href: langPath(lang, topics.windows[lang].slug) },
  { label: topics.guides[lang].name, href: langPath(lang, topics.guides[lang].slug) },
  { label: topics.comparisons[lang].name, href: langPath(lang, topics.comparisons[lang].slug) },
  { label: topics.tools[lang].name, href: langPath(lang, topics.tools[lang].slug) },
  { label: topics.news[lang].name, href: langPath(lang, topics.news[lang].slug) },
  { label: lang === 'es' ? 'Sobre nosotros' : 'About us', href: langPath(lang, lang === 'es' ? 'sobre-nosotros' : 'about-us') },
];

export const langPath = (lang: Lang, path = '/') => {
  const clean = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '');
  return `/${lang}${clean ? `/${clean}` : ''}/`;
};

export const articlePath = (lang: Lang, slug: string) => `${langPath(lang, lang === 'es' ? 'articulos' : 'articles')}${slug}/`;

const today = '2026-07-15';

const articleSeeds = [
  ['windows-equipo-nuevo', 'windows', 'guias', 'Windows', 'Como proteger un equipo Windows nuevo', 'How to protect a new Windows computer', 'Ajustes esenciales para empezar con menos riesgos.', 'Essential settings to start with fewer risks.'],
  ['reconocer-correo-phishing', 'security', 'guias', 'Phishing', 'Como reconocer un correo de phishing', 'How to spot a phishing email', 'Senales practicas para detectar mensajes sospechosos.', 'Practical signs for spotting suspicious messages.'],
  ['comprobar-enlace-peligroso', 'security', 'guias', 'Navegacion segura', 'Como comprobar si un enlace puede ser peligroso', 'How to check whether a link may be dangerous', 'Revision sencilla antes de abrir enlaces desconocidos.', 'A simple review before opening unknown links.'],
  ['contrasenas-seguras', 'security', 'guias', 'Contrasenas', 'Como crear contrasenas seguras sin olvidarlas', 'How to create strong passwords without forgetting them', 'Metodos recordables sin reutilizar claves.', 'Memorable methods without reusing passwords.'],
  ['gestor-contrasenas', 'software', 'guias', 'Contrasenas', 'Que es un gestor de contrasenas', 'What a password manager is', 'Ventajas, limites y cuidados al elegir uno.', 'Benefits, limits and care points when choosing one.'],
  ['autenticacion-dos-pasos', 'security', 'guias', 'Seguridad de cuentas', 'Como utilizar la autenticacion en dos pasos', 'How to use two-factor authentication', 'Capa adicional para proteger cuentas importantes.', 'An extra layer for protecting important accounts.'],
  ['copia-seguridad', 'windows', 'guias', 'Copias de seguridad', 'Como realizar una copia de seguridad', 'How to make a backup', 'Rutina basica para no depender de un solo dispositivo.', 'A basic routine so one device is not your only copy.'],
  ['copia-local-nube', 'comparisons', 'comparativas', 'Copias de seguridad', 'Copia local frente a copia en la nube', 'Local backup vs cloud backup', 'Diferencias utiles antes de elegir metodo.', 'Useful differences before choosing a method.'],
  ['proteger-cuenta-microsoft', 'windows', 'guias', 'Windows', 'Como proteger una cuenta de Microsoft', 'How to protect a Microsoft account', 'Ajustes para reducir accesos no autorizados.', 'Settings that reduce unauthorized access.'],
  ['despues-filtracion-datos', 'privacy', 'guias', 'Privacidad', 'Que hacer despues de una filtracion de datos', 'What to do after a data breach', 'Pasos prudentes cuando tus datos pudieron exponerse.', 'Careful steps when your data may have been exposed.'],
  ['software-sin-actualizar', 'software', 'ciberseguridad', 'Malware', 'Riesgos de usar software sin actualizar', 'Risks of using outdated software', 'Por que las actualizaciones importan para seguridad y estabilidad.', 'Why updates matter for security and stability.'],
  ['privacidad-windows', 'windows', 'privacidad', 'Privacidad', 'Como mejorar la privacidad de Windows', 'How to improve Windows privacy', 'Opciones para reducir datos innecesarios sin romper funciones.', 'Options to reduce unnecessary data without breaking features.'],
  ['wifi-publica', 'privacy', 'guias', 'Wi-Fi', 'Como trabajar desde una red Wi-Fi publica', 'How to work from public Wi-Fi', 'Precauciones realistas para aeropuertos, hoteles y cafeterias.', 'Realistic precautions for airports, hotels and cafes.'],
  ['proveedor-internet', 'privacy', 'privacidad', 'Privacidad', 'Que informacion puede ver un proveedor de Internet', 'What information an internet provider can see', 'Alcance y limites de la visibilidad del proveedor.', 'Scope and limits of provider visibility.'],
  ['que-es-vpn', 'privacy', 'guias', 'VPN', 'Que es una VPN y como funciona', 'What a VPN is and how it works', 'Explicacion neutral sin prometer anonimato absoluto.', 'A neutral explanation without promising absolute anonymity.'],
  ['vpn-antivirus', 'comparisons', 'comparativas', 'VPN', 'VPN frente a antivirus', 'VPN vs antivirus', 'Herramientas distintas para riesgos distintos.', 'Different tools for different risks.'],
  ['vpn-gratuita-pago', 'comparisons', 'comparativas', 'VPN', 'VPN gratuita frente a VPN de pago', 'Free VPN vs paid VPN', 'Aspectos que conviene revisar antes de confiar trafico sensible.', 'What to review before trusting sensitive traffic.'],
  ['vpn-proxy', 'comparisons', 'comparativas', 'VPN', 'VPN frente a proxy', 'VPN vs proxy', 'Diferencias de alcance, cifrado y limites.', 'Differences in scope, encryption and limits.'],
  ['descarga-falsa', 'security', 'guias', 'Navegacion segura', 'Como detectar una pagina de descarga falsa', 'How to detect a fake download page', 'Senales para evitar instaladores manipulados.', 'Signs that help avoid tampered installers.'],
  ['seguridad-pequena-empresa', 'security', 'guias', 'Pequenas empresas', 'Herramientas basicas de seguridad para pequenas empresas', 'Basic security tools for small businesses', 'Medidas sencillas antes de pensar en soluciones complejas.', 'Simple measures before considering complex solutions.'],
] as const;

const body = (title: string, lang: Lang, tag: string) => {
  const es = lang === 'es';
  return {
    quick: es
      ? [`Empieza por lo basico antes de instalar mas herramientas.`, `Revisa configuracion, actualizaciones y habitos.`, `No confies en promesas absolutas: confirma cada decision con fuentes y sentido comun.`]
      : [`Start with the basics before installing more tools.`, `Review settings, updates and habits.`, `Do not trust absolute promises: confirm each decision with sources and common sense.`],
    sections: [
      {
        heading: es ? 'Por que importa' : 'Why it matters',
        paragraphs: es
          ? [`${title} ayuda a reducir errores comunes sin depender de soluciones milagrosas. La seguridad diaria combina configuracion, criterio y mantenimiento.`, `Esta guia es educativa: no sustituye una auditoria ni una politica profesional, pero ofrece pasos utiles para usuarios y pequenos equipos.`]
          : [`${title} helps reduce common mistakes without relying on miracle solutions. Daily security combines configuration, judgment and maintenance.`, `This guide is educational: it does not replace an audit or professional policy, but it offers useful steps for users and small teams.`],
      },
      {
        heading: es ? 'Pasos recomendados' : 'Recommended steps',
        paragraphs: es
          ? [`Revisa primero el contexto: dispositivo, cuenta, red y tipo de informacion que manejas. Despues aplica cambios pequenos y comprueba que todo sigue funcionando.`, `Documenta las decisiones importantes para poder repetirlas o revertirlas si una configuracion causa problemas.`]
          : [`First review the context: device, account, network and type of information you handle. Then apply small changes and confirm everything still works.`, `Document important decisions so you can repeat or reverse them if a setting causes problems.`],
      },
      {
        heading: es ? 'Limitaciones' : 'Limitations',
        paragraphs: es
          ? [`Ninguna herramienta elimina todos los riesgos. En temas como ${tag}, los habitos y las actualizaciones pesan tanto como el software elegido.`, `Si trabajas con datos sensibles o requisitos legales, pide revision profesional antes de depender solo de una guia publica.`]
          : [`No tool removes every risk. With topics such as ${tag}, habits and updates matter as much as the chosen software.`, `If you handle sensitive data or legal requirements, seek professional review before relying only on a public guide.`],
      },
    ],
    steps: es
      ? ['Identifica la cuenta, dispositivo o servicio afectado.', 'Aplica una mejora concreta y facil de comprobar.', 'Guarda notas de lo que cambiaste.', 'Revisa de nuevo tras actualizaciones importantes.']
      : ['Identify the affected account, device or service.', 'Apply one concrete improvement that is easy to verify.', 'Keep notes of what you changed.', 'Review again after important updates.'],
    tips: es
      ? ['Prefiere opciones claras y mantenibles.', 'Activa avisos de seguridad cuando esten disponibles.', 'Desconfia de urgencias, descargas inesperadas y formularios innecesarios.']
      : ['Prefer clear and maintainable options.', 'Enable security alerts when available.', 'Be cautious with urgency, unexpected downloads and unnecessary forms.'],
    warnings: es
      ? ['No compartas codigos de verificacion.', 'No instales herramientas de procedencia dudosa.', 'No confundas privacidad con anonimato absoluto.']
      : ['Do not share verification codes.', 'Do not install tools from doubtful sources.', 'Do not confuse privacy with absolute anonymity.'],
    faqs: es
      ? [
          ['Esto garantiza seguridad total?', 'No. Reduce riesgos comunes, pero siempre quedan factores humanos, tecnicos y de contexto.'],
          ['Necesito herramientas de pago?', 'No siempre. Primero conviene aplicar buenas practicas y revisar necesidades reales.'],
        ]
      : [
          ['Does this guarantee total security?', 'No. It reduces common risks, but human, technical and contextual factors remain.'],
          ['Do I need paid tools?', 'Not always. Start with good practices and review your real needs first.'],
        ],
    conclusion: es
      ? `La mejor defensa es una rutina clara: entender el riesgo, aplicar cambios verificables y revisar periodicamente.`
      : `The best defense is a clear routine: understand the risk, apply verifiable changes and review periodically.`,
    sources: es
      ? ['Documentacion oficial del proveedor o sistema tratado.', 'Recomendaciones generales de organismos publicos de ciberseguridad.', 'Politicas de privacidad y ayuda oficial de cada servicio revisado.']
      : ['Official documentation from the provider or system discussed.', 'General guidance from public cybersecurity organizations.', 'Privacy policies and official help pages for each reviewed service.'],
  };
};

export const articles = articleSeeds.flatMap(([slug, topic, group, tag, esTitle, enTitle, esSummary, enSummary], index) => {
  const baseDate = `2026-07-${String(1 + (index % 14)).padStart(2, '0')}`;
  const common = {
    topic: topic as TopicKey,
    group,
    tags: [tag, index % 2 ? 'Privacidad' : 'Windows', index % 3 ? 'Navegacion segura' : 'Pequenas empresas'],
    published: baseDate,
    updated: today,
    image: '/assets/digiclara-og.svg',
    featured: index === 0,
  };
  return [
    {
      ...common,
      lang: 'es' as Lang,
      slug,
      title: esTitle,
      summary: esSummary,
      author: site.authors.es,
      readingTime: 6 + (index % 4),
      alt: `Ilustracion editorial para ${esTitle}`,
      body: body(esTitle, 'es', tag),
    },
    {
      ...common,
      lang: 'en' as Lang,
      slug,
      title: enTitle,
      summary: enSummary,
      author: site.authors.en,
      readingTime: 6 + (index % 4),
      alt: `Editorial illustration for ${enTitle}`,
      body: body(enTitle, 'en', tag),
    },
  ];
});

export const getArticles = (lang: Lang) => articles.filter((article) => article.lang === lang);
export const getArticle = (lang: Lang, slug: string) => articles.find((article) => article.lang === lang && article.slug === slug);
export const getTopicBySlug = (lang: Lang, slug: string) =>
  (Object.keys(topics) as TopicKey[]).find((key) => topics[key][lang].slug === slug);

export const getTopicArticles = (lang: Lang, topic: TopicKey) => getArticles(lang).filter((article) => article.topic === topic || article.group === topics[topic][lang].slug);

export const legalPages = {
  privacy: {
    es: ['politica-de-privacidad', 'Politica de privacidad', 'Explica que datos puede tratar DigiClara y que datos quedan pendientes de configurar antes de activar formularios.'],
    en: ['privacy-policy', 'Privacy policy', 'Explains what data DigiClara may process and what remains to be configured before enabling forms.'],
  },
  cookies: {
    es: ['politica-de-cookies', 'Politica de cookies', 'DigiClara no usa analitica activa en esta version y solo puede usar cookies tecnicas de preferencia visual.'],
    en: ['cookie-policy', 'Cookie policy', 'DigiClara does not use active analytics in this version and may only use technical cookies for visual preference.'],
  },
  terms: {
    es: ['terminos-de-uso', 'Terminos de uso', 'Condiciones generales para consultar contenido educativo publicado por DigiClara.'],
    en: ['terms-of-use', 'Terms of use', 'General conditions for reading educational content published by DigiClara.'],
  },
  affiliates: {
    es: ['declaracion-de-afiliados', 'Declaracion de afiliados', 'DigiClara puede usar enlaces de afiliado en el futuro, siempre identificados y sin afectar conclusiones editoriales.'],
    en: ['affiliate-disclosure', 'Affiliate disclosure', 'DigiClara may use affiliate links in the future, always identified and without controlling editorial conclusions.'],
  },
  editorial: {
    es: ['politica-editorial', 'Politica editorial', 'Como separamos contenido educativo, relaciones comerciales futuras y correcciones.'],
    en: ['editorial-policy', 'Editorial policy', 'How we separate educational content, future commercial relationships and corrections.'],
  },
  methodology: {
    es: ['metodologia', 'Metodologia', 'Diferenciamos guias educativas, comparativas documentales y pruebas practicas realizadas de verdad.'],
    en: ['methodology', 'Methodology', 'We separate educational guides, documentary comparisons and practical tests that were actually performed.'],
  },
  corrections: {
    es: ['politica-de-correcciones', 'Politica de correcciones', 'Como solicitar cambios cuando un contenido sea incompleto, confuso o haya quedado desactualizado.'],
    en: ['corrections-policy', 'Corrections policy', 'How to request changes when content is incomplete, unclear or outdated.'],
  },
} as const;
