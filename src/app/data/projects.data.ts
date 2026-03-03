export type ProjectCategory = 'Backend' | 'Frontend' | 'Fullstack';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'archsoftmeasure',
    description:
      'Modelo de medición de las habilidades técnicas y blandas de un arquitecto de software. Incluye evaluaciones y métricas para determinar el nivel de madurez arquitectónica.',
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
    image: 'devicon-java-plain',
    tags: ['Java', 'CORBA', 'REST API', 'Sistemas Distribuidos'],
    category: 'Backend',
    github: 'https://github.com/Juan-MZ/SistemaDistribuidoCompras',
  },
  {
    title: 'UnicaucaCodes',
    description:
      'Repositorio con proyectos realizados durante los primeros semestres de Ingeniería de Sistemas en la Universidad del Cauca. Incluye prácticas y trabajos académicos.',
    image: 'devicon-html5-plain',
    tags: ['HTML', 'Java', 'JavaScript', 'Proyectos Académicos'],
    category: 'Fullstack',
    github: 'https://github.com/Juan-MZ/UnicaucaCodes',
  },
  {
    title: 'TiendaLibros',
    description:
      'Programa que simula una tienda de libros con interfaz gráfica, subida de portadas y almacenamiento en archivos de texto. Manejo de GUI con Java Swing.',
    image: 'devicon-java-plain',
    tags: ['Java', 'Swing', 'GUI'],
    category: 'Frontend',
    github: 'https://github.com/Juan-MZ/TiendaLibros',
  },
];
