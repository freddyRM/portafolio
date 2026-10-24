export const profile = {
  name: 'Freddy José Rodríguez Mago',
  shortName: 'Freddy Rodríguez',
  role: 'Desarrollador Full Stack',
  location: 'Carabobo, Venezuela',
  email: 'Freddy.facyt@gmail.com',
  linkedin: 'https://www.linkedin.com/in/freddy-j-rodriguez',
  github: 'https://github.com/freddyRM',
  telegramBot: 'https://t.me/Referencia_Dolar_bot',
  yearsOfExperience: 6,
  tagline:
    'Construyo APIs, integraciones enterprise y automatizaciones que simplifican procesos complejos.',
  summary: [
    'Desarrollador full stack con más de 6 años de experiencia en la creación de aplicaciones para sistemas de formación, generación de reportes y scraping. Tengo un fuerte dominio de Python, SQL y tecnologías de desarrollo web.',
    'Mi enfoque está en la creación de soluciones eficientes y escalables. Me apasiona la automatización y el análisis de datos, y siempre busco formas de optimizar la infraestructura existente.',
    'Soy una persona responsable y dinámica, en constante aprendizaje, que mantiene una comunicación abierta con el equipo y los clientes.',
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  mode: string
  current?: boolean
  highlights: { title?: string; text: string }[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Global Business',
    role: 'Programador Full Stack',
    period: 'Mar 2026 — Actualidad',
    mode: 'Presencial · Carabobo',
    current: true,
    highlights: [
      {
        title: 'Full Stack & APIs',
        text: 'Aplicaciones web y dashboards administrativos con React, TypeScript, Vite y Redux Toolkit (tablas, gráficos, exportaciones Excel/PDF). APIs REST y microservicios con NestJS, Fastify, Laravel, CakePHP, FastAPI y ASP.NET Core (JWT, API Keys, Swagger/OpenAPI).',
      },
      {
        title: 'Integración Enterprise',
        text: 'Integración de SAP Business One (Service Layer, DI API), ERP, WMS y POS. Middleware para sincronizar inventarios, artículos, órdenes de compra/venta, facturación, cierres de caja y movimientos de almacén.',
      },
      {
        title: 'Automatización & Scraping',
        text: 'Captura y almacenamiento automatizado de tasas oficiales del BCV mediante web scraping, MySQL y tareas programadas.',
      },
      {
        title: 'Bases de datos',
        text: 'Modelado y optimización en SQL Server, MySQL y PostgreSQL con Prisma y Eloquent; consultas avanzadas para SAP Business One.',
      },
      {
        title: 'Procesamiento asíncrono',
        text: 'Colas y tareas en segundo plano con Redis, BullMQ, Laravel Horizon/Reverb y WebSockets.',
      },
      {
        title: 'Infraestructura & DevOps',
        text: 'Docker y Docker Compose, Nginx y Apache, CI/CD multiambiente y automatización de flujos con n8n.',
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'Fastify',
      'Laravel',
      'FastAPI',
      'ASP.NET Core',
      'SAP B1',
      'Redis',
      'BullMQ',
      'Docker',
      'n8n',
    ],
  },
  {
    company: 'Ivoo',
    role: 'Programador',
    period: 'Mar 2025 — Mar 2026',
    mode: 'Presencial · Carabobo',
    highlights: [
      {
        text: 'Aplicaciones web con Angular y NestJS: arquitecturas REST, autenticación JWT y dashboards administrativos.',
      },
      {
        text: 'Apps móviles multiplataforma (Android e iOS) con React Native, integrando Cashea (financiamiento) y Megasoft (pasarelas de pago).',
      },
      {
        text: 'Flujos automatizados en n8n para sincronizar datos entre sistemas internos y servicios externos.',
      },
      {
        text: 'Sistema de caja en Python para control de inventario: productos, stock y reportes internos.',
      },
      {
        text: 'Proyectos Angular + Firestore vinculados en tiempo real con Google Sheets vía Apps Script para reportes dinámicos.',
      },
      {
        text: 'Despliegue y mantenimiento en SiteGround y cPanel; participación en diseño de arquitectura y resolución de incidencias.',
      },
    ],
    stack: [
      'Angular',
      'NestJS',
      'React Native',
      'Python',
      'PostgreSQL',
      'Firestore',
      'n8n',
      'Apps Script',
      'Power BI',
    ],
  },
  {
    company: 'Febeca',
    role: 'Analista y Desarrollador de Aplicaciones (Freelance)',
    period: 'May 2024 — Jun 2024',
    mode: 'Remoto',
    highlights: [
      {
        text: 'Herramienta de lectura y análisis de archivos PDF con extracción de datos por etiquetas y expresiones regulares definidas por el usuario.',
      },
      {
        text: 'Exportación organizada a Excel, diseñada para usuarios sin conocimientos de programación.',
      },
    ],
    stack: ['Python', 'Pandas', 'PyMuPDF', 'Openpyxl', 'Anaconda'],
  },
  {
    company: 'Imeca (Lumber & Hardware)',
    role: 'Analista y Desarrollador de Aplicaciones',
    period: 'Jun 2023 — Sep 2023',
    mode: 'Remoto',
    highlights: [
      { text: 'Consultas en PostgreSQL y desarrollo de reportes en Excel y Power BI.' },
      { text: 'Gestión de Analytics, Facebook Pixel y tienda en Magento 2.' },
    ],
    stack: ['PostgreSQL', 'Power BI', 'Excel', 'Analytics', 'Magento 2'],
  },
  {
    company: 'Febeca',
    role: 'Analista de Datos',
    period: 'Jul 2022 — Jun 2023',
    mode: 'Presencial · Carabobo',
    highlights: [
      { text: 'Análisis de mercadeo y de bases de datos, desarrollo web y automatización con Google Apps Script.' },
      { text: 'Análisis estadístico y ciencia de datos con Python, R y Oracle Database.' },
    ],
    stack: ['Python', 'R', 'Oracle', 'Apps Script', 'Excel'],
  },
  {
    company: 'Intelix',
    role: 'Analista y Desarrollador de Aplicaciones',
    period: 'Dic 2019 — Dic 2021',
    mode: 'Presencial · Carabobo',
    highlights: [
      { text: 'Consultas en SQL Server y DB2; desarrollo de reportes en Excel.' },
      { text: 'Reconversión monetaria a nivel de base de datos en DB2.' },
      { text: 'Actualización del front-end de control de inventario y facturación en divisas en Compiere.' },
    ],
    stack: ['SQL Server', 'DB2', 'Compiere', 'Excel'],
  },
  {
    company: 'Febeca',
    role: 'Desarrollador Web',
    period: 'Jun 2018 — Abr 2019',
    mode: 'Presencial · Carabobo',
    highlights: [
      { text: 'Aplicación generadora de formularios con Bootstrap, PHP y MySQL sobre XAMPP.' },
      { text: 'Estrategia de mercadeo con R y Excel.' },
    ],
    stack: ['PHP', 'MySQL', 'Bootstrap', 'R'],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Referencia Dólar Bot',
    description:
      'Bot de Telegram y WhatsApp que consulta y notifica la tasa oficial del dólar en Venezuela, alimentado por scraping y tareas programadas.',
    tags: ['Bot', 'Scraping', 'Telegram', 'WhatsApp'],
    demo: 'https://t.me/Referencia_Dolar_bot',
    featured: true,
  },
  {
    name: 'NGD',
    description: 'Aplicación web en TypeScript desplegada en Vercel.',
    tags: ['TypeScript', 'Vercel'],
    repo: 'https://github.com/freddyRM/NGD',
    demo: 'https://ngd-beta.vercel.app',
    featured: true,
  },
  {
    name: 'PS5 Customizer 3D',
    description: 'Configurador 3D interactivo para personalizar una consola PS5 en el navegador.',
    tags: ['TypeScript', '3D', 'Frontend'],
    repo: 'https://github.com/freddyRM/ps5-customizer-3d',
    demo: 'https://freddyrm.github.io/ps5-customizer-3d/',
    featured: true,
  },
  {
    name: 'ChatGPT Telegram Bot',
    description:
      'Integración de la API de OpenAI en un bot de Telegram ejecutado desde Google Apps Script.',
    tags: ['OpenAI', 'Telegram', 'Apps Script'],
    repo: 'https://github.com/freddyRM/ChatGPT-3',
  },
  {
    name: 'Chat DALL·E',
    description:
      'Bot de Telegram que genera imágenes con DALL·E usando la API de OpenAI y Google Apps Script.',
    tags: ['OpenAI', 'DALL·E', 'Telegram'],
    repo: 'https://github.com/freddyRM/Chat_Dall-e',
  },
  {
    name: 'ScraperPDF',
    description: 'Extracción automatizada de datos desde documentos PDF.',
    tags: ['Scraping', 'PDF', 'JavaScript'],
    repo: 'https://github.com/freddyRM/ScraperPDF',
    demo: 'https://freddyrm.github.io/ScraperPDF/',
  },
  {
    name: 'OCR',
    description: 'Reconocimiento óptico de caracteres para extraer texto de imágenes.',
    tags: ['OCR', 'JavaScript'],
    repo: 'https://github.com/freddyRM/OCR',
    demo: 'https://freddyrm.github.io/OCR/',
  },
  {
    name: 'TEG Febeca — Microformación',
    description:
      'Tesis de grado: aplicación multiplataforma de microformación (web en PHP y app Android en Java).',
    tags: ['PHP', 'Java', 'Android'],
    repo: 'https://github.com/freddyRM/TEG-Febeca-APP',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'C#'] },
  {
    group: 'Frontend & Móvil',
    items: ['React', 'Angular', 'React Native', 'Redux Toolkit', 'Vite', 'Next.js', 'HTML5 / CSS3'],
  },
  {
    group: 'Backend & APIs',
    items: [
      'NestJS',
      'Fastify',
      'Laravel',
      'FastAPI',
      'ASP.NET Core',
      'REST',
      'Microservicios',
      'JWT',
      'Swagger / OpenAPI',
    ],
  },
  {
    group: 'Enterprise & Integraciones',
    items: ['SAP Business One', 'Service Layer', 'DI API', 'POS', 'ERP', 'WMS', 'Middleware'],
  },
  {
    group: 'Bases de datos & ORM',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Redis', 'Prisma', 'Eloquent'],
  },
  {
    group: 'DevOps & Automatización',
    items: ['Docker', 'Docker Compose', 'Nginx', 'BullMQ', 'n8n', 'WebSockets', 'Web Scraping', 'Git / GitHub'],
  },
]

export const education = [
  { title: 'Licenciado en Computación', place: 'Universidad de Carabobo', period: '2008 — 2018' },
  {
    title: 'Instalación y mantenimiento de equipos informáticos',
    place: 'IUTEPAL',
    period: '2005 — 2008',
  },
]

export const courses = [
  { title: 'Curso de IA de 0 a Agentes', place: 'Big School', year: 2026 },
  { title: 'Up and Running with Node.js', place: 'Udemy', year: 2025 },
  { title: 'Desarrollo web. JavaScript desde cero', place: 'Udemy', year: 2024 },
  { title: 'Mes de datos', place: 'Microsoft', year: 2023 },
  { title: 'JavaScript y jQuery', place: 'Udemy', year: 2022 },
  { title: 'React + Firebase', place: 'Udemy', year: 2022 },
  { title: 'HTML y CSS', place: 'DevCode', year: 2018 },
  { title: 'Excel Avanzado', place: 'AyT', year: 2018 },
  { title: 'Fundamentos de Git y GitHub', place: 'DevCode', year: 2017 },
  { title: 'C#', place: 'Lourtec', year: 2009 },
]

export const softSkills = [
  'Adaptabilidad',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Aprendizaje continuo',
  'Scrum',
]
