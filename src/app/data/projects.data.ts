export type ProjectCategory = 'Backend' | 'Frontend' | 'Fullstack';

export interface Project {
  title: string;
  description: string;
  descriptionEn?: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Atlantes Software',
    description:
      'Sitio web corporativo de Atlantes Software S.A.S — estudio boutique especializado en SaaS, IA y automatización. Diseño moderno con Angular y Tailwind CSS, con secciones de servicios, portafolio y contacto.',
    descriptionEn:
      'Corporate website for Atlantes Software S.A.S — a boutique studio specializing in SaaS, AI and automation. Modern design built with Angular and Tailwind CSS, featuring services, portfolio and contact sections.',
    image: 'devicon-angular-plain',
    tags: ['Angular', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    featured: true,
    link: 'https://www.atlantes.dev',
  },
  {
    title: 'Looping',
    description:
      'Plataforma SaaS para automatizar publicaciones en redes sociales. App de escritorio multiplataforma con Electron, portal en Angular con suscripciones vía Mercado Pago y licenciamiento automático por hardware ID.',
    descriptionEn:
      'SaaS platform to automate social media publishing. Cross-platform desktop app with Electron, Angular portal, subscriptions via Mercado Pago, and automatic hardware ID-based licensing.',
    image: 'devicon-angular-plain',
    tags: ['Angular', 'Electron', 'Mercado Pago', 'SaaS'],
    category: 'Fullstack',
    featured: true,
    link: 'https://looping.atlantes.dev/',
  },
  {
    title: 'Construmedicis',
    description:
      'Sitio web corporativo para una constructora con catálogo de proyectos, servicios y formulario de contacto.',
    descriptionEn:
      'Corporate website for a construction company with project catalog, services and contact form.',
    image: 'devicon-angular-plain',
    tags: ['Angular', 'Vercel', 'Tailwind CSS'],
    category: 'Frontend',
    featured: true,
    link: 'https://construmedicis.vercel.app/',
  },
  {
    title: 'CDA del Putumayo',
    description:
      'Sitio web institucional para un Centro de Diagnóstico Automotor con información de servicios, normativa y contacto.',
    descriptionEn:
      'Institutional website for an Automotive Diagnostic Center with service information, regulations and contact.',
    image: 'devicon-angular-plain',
    tags: ['Angular', 'Vercel', 'Tailwind CSS'],
    category: 'Frontend',
    link: 'https://www.cdadelputumayo.com/site/',
  },
  {
    title: 'Portal de Turismo Putumayo',
    description:
      'Portal web de turismo para descubrir destinos, paquetes y experiencias en el Putumayo amazónico. Diseñado para agencias de viajes locales.',
    descriptionEn:
      'Tourism web portal to discover destinations, packages and experiences in the Amazonian Putumayo. Designed for local travel agencies.',
    image: 'devicon-angular-plain',
    tags: ['Angular', 'Vercel', 'Tailwind CSS'],
    category: 'Frontend',
    link: 'https://turismo-putumayo.vercel.app/',
  },
  {
    title: 'archsoftmeasure',
    description:
      'Modelo de medición de las habilidades técnicas y blandas de un arquitecto de software. Incluye evaluaciones y métricas para determinar el nivel de madurez arquitectónica.',
    descriptionEn:
      'Measurement model for the technical and soft skills of a software architect. Includes assessments and metrics to determine the level of architectural maturity.',
    image: 'devicon-java-plain',
    tags: ['Java', 'Spring Boot', 'Arquitectura de Software'],
    category: 'Backend',
    featured: true,
    github: 'https://github.com/Juan-MZ/archsoftmeasure',
  },
  {
    title: 'BuildTracking',
    description:
      'Backend para una herramienta destinada a constructoras o profesionales que deseen llevar seguimiento a una obra de construcción. Gestión de etapas, materiales y avances.',
    descriptionEn:
      'Backend for a tool aimed at construction companies or professionals who wish to track a construction project. Management of stages, materials and progress.',
    image: 'devicon-java-plain',
    tags: ['Java', 'Spring Boot', 'REST API'],
    category: 'Backend',
    featured: true,
    github: 'https://github.com/Juan-MZ/BuildTracking',
  },
  {
    title: 'TaxReturn',
    description:
      'Aplicación para recuperar y calcular impuestos desde facturas extraídas directamente de tu Gmail. Automatiza el procesamiento de facturas electrónicas.',
    descriptionEn:
      'Application to retrieve and calculate taxes from invoices extracted directly from your Gmail. Automates electronic invoice processing.',
    image: 'devicon-java-plain',
    tags: ['Java', 'Gmail API', 'Automatización'],
    category: 'Backend',
    featured: true,
    github: 'https://github.com/Juan-MZ/TaxReturn',
  },
  {
    title: 'SistemaDistribuidoCompras',
    description:
      'Sistema distribuido que gestiona tres entidades: dos servidores que se comunican con CORBA y un cliente que interopera con API REST. Implementa patrones de comunicación heterogénea.',
    descriptionEn:
      'Distributed system that manages three entities: two servers communicating via CORBA and a client that interoperates with REST API. Implements heterogeneous communication patterns.',
    image: 'devicon-java-plain',
    tags: ['Java', 'CORBA', 'REST API', 'Sistemas Distribuidos'],
    category: 'Backend',
    github: 'https://github.com/Juan-MZ/SistemaDistribuidoCompras',
  },
  {
    title: 'UnicaucaCodes',
    description:
      'Repositorio con proyectos realizados durante los primeros semestres de Ingeniería de Sistemas en la Universidad del Cauca. Incluye prácticas y trabajos académicos.',
    descriptionEn:
      'Repository with projects done during the first semesters of Systems Engineering at Universidad del Cauca. Includes practical work and academic assignments.',
    image: 'devicon-html5-plain',
    tags: ['HTML', 'Java', 'JavaScript', 'Proyectos Académicos'],
    category: 'Fullstack',
    github: 'https://github.com/Juan-MZ/UnicaucaCodes',
  },
  {
    title: 'TiendaLibros',
    description:
      'Programa que simula una tienda de libros con interfaz gráfica, subida de portadas y almacenamiento en archivos de texto. Manejo de GUI con Java Swing.',
    descriptionEn:
      'Program that simulates a bookstore with a graphical interface, cover image uploads and storage in text files. GUI handling with Java Swing.',
    image: 'devicon-java-plain',
    tags: ['Java', 'Swing', 'GUI'],
    category: 'Frontend',
    github: 'https://github.com/Juan-MZ/TiendaLibros',
  },
];
