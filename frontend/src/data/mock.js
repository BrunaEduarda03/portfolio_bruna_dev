import { Code2, Layers, Globe, Smartphone, Server, Database, Cloud, Terminal, GitBranch, Cpu, Monitor, Wifi, Zap, Mail, MapPin, Briefcase, GraduationCap, ExternalLink, Github, Linkedin, ArrowRight } from 'lucide-react';

export const personalInfo = {
  name: 'Bruna Eduarda',
  role: 'Software Engineer',
  tagline: 'Crafting elegant, accessible & high-performance interfaces',
  bio: 'Desenvolvedora de software com formação em Engenharia Elétrica, com experiência em projetos fullstack, mobile e automação de processos. Interesse especial em Front-end/Mobile, combinando lógica e criatividade para criar interfaces elegantes, acessíveis e de alta performance. Atualmente cursando pós-graduação em Engenharia de Software.',
  email: 'brunaecmaciel@gmail.com',
  phone: '+55 (83) 9 96635326',
  location: 'Brasil',
  github: 'https://github.com/brunaeduarda',
  linkedin: 'https://linkedin.com/in/brunaeduarda',
  availability: 'Disponível para trabalho remoto',
  currentStudy: 'Pós-graduação em Engenharia de Software',
};

export const aboutCards = [
  {
    id: 1,
    title: 'Frontend',
    description: 'React, Vue, Next.js, Nuxt, TailwindCSS, Shadcn/UI',
    icon: 'Monitor',
    span: 'col-span-2',
  },
  {
    id: 2,
    title: 'Backend',
    description: 'Node.js, NestJS, Laravel, PHP, Python, C#',
    icon: 'Server',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'Mobile',
    description: 'React Native, PWA, Service Workers',
    icon: 'Smartphone',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Bases de Dados',
    description: 'PostgreSQL, MongoDB, MySQL, Prisma ORM',
    icon: 'Database',
    span: 'col-span-1',
  },
  {
    id: 5,
    title: 'DevOps & Cloud',
    description: 'Docker, AWS (EC2, RDS, S3, Amplify), CI/CD',
    icon: 'Cloud',
    span: 'col-span-2',
  },
  {
    id: 6,
    title: 'Arquitetura',
    description: 'Clean Code, Clean Architecture, Microservices, SOLID',
    icon: 'Layers',
    span: 'col-span-1',
  },
];

export const experiences = [
  {
    id: 1,
    company: 'Horus & Copanest',
    role: 'Software Developer',
    period: 'Atual',
    description: [
      'Criação de interfaces modernas e responsivas com React, Vue, Nuxt, React Native, Zustand, TanStack Query, TailwindCSS e Shadcn/UI.',
      'Desenvolvimento backend com Node.js, Express, Prisma, PostgreSQL, PHP e Laravel.',
      'Integração real-time com WebSockets, PWA, Service Workers e filas com Redis.',
      'Containerização e deploy com Docker, Docker Compose e AWS (EC2, RDS, Amplify, S3).',
    ],
    technologies: ['React', 'Vue', 'Node.js', 'Docker', 'AWS', 'PostgreSQL'],
  },
  {
    id: 2,
    company: 'Grupo Neiva',
    role: 'Software Developer',
    period: 'Anterior',
    description: [
      'Projetos com Vue, Nuxt, Laravel, PHP, MySQL, React Native.',
      'Desenvolvimento de landing pages e sistemas como Evoluir EAD, PNLD, IDUCS.',
      'Participação ativa em code reviews, melhorias de UX e deploy contínuo.',
    ],
    technologies: ['Vue', 'Nuxt', 'Laravel', 'PHP', 'MySQL', 'React Native'],
  },
  {
    id: 3,
    company: 'UFCG',
    role: 'Software Developer',
    period: 'Anterior',
    description: [
      'Desenvolvimento de aplicações com Next.js, NestJS, Node.js, React Native e MongoDB.',
      'Automação de processos laboratoriais e melhorias de performance.',
      'Aplicação de princípios de Clean Code e Clean Architecture.',
    ],
    technologies: ['Next.js', 'NestJS', 'Node.js', 'React Native', 'MongoDB'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'HORUS',
    subtitle: 'Medical Billing Platform',
    description: 'Landing Page e Sistema de Faturamento Médico. Interface moderna para gestão de faturamento hospitalar.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    image: null,
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'CoopanestRIO',
    subtitle: 'Cooperative Management System',
    description: 'Desenvolvimento e manutenção do sistema para a cooperativa de anestesiologistas.',
    technologies: ['Vue', 'Nuxt', 'Laravel', 'PostgreSQL', 'Docker'],
    image: null,
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'EVOLUIR',
    subtitle: 'EAD Platform',
    description: 'Sistema EAD e Landing Page para a plataforma Evoluir de ensino à distância.',
    technologies: ['Vue', 'Nuxt', 'Laravel', 'MySQL'],
    image: null,
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'ECONOWISE',
    subtitle: 'IoT Automation System',
    description: 'Aplicação de automação, monitoramento e controle de ar-condicionados. Projeto de TCC.',
    technologies: ['React Native', 'Node.js', 'IoT', 'MongoDB'],
    image: null,
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'PNLD',
    subtitle: 'Book Platform',
    description: 'Landing Page para a plataforma de livros da instituição. Design responsivo e acessível.',
    technologies: ['Vue', 'TailwindCSS', 'Laravel'],
    image: null,
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'IDUCS',
    subtitle: 'Book Marketplace',
    description: 'Marketplace de livros para a instituição, com sistema de busca e categorização.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: null,
    link: '#',
    github: '#',
  },
];

export const techStack = {
  frontend: [
    { name: 'React', color: '#61DAFB' },
    { name: 'Vue', color: '#4FC08D' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Nuxt', color: '#00DC82' },
    { name: 'TailwindCSS', color: '#06B6D4' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'Shadcn/UI', color: '#ffffff' },
  ],
  backend: [
    { name: 'Node.js', color: '#339933' },
    { name: 'NestJS', color: '#E0234E' },
    { name: 'Laravel', color: '#FF2D20' },
    { name: 'Python', color: '#3776AB' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'C#', color: '#512BD4' },
    { name: 'Express', color: '#ffffff' },
    { name: 'Prisma', color: '#2D3748' },
  ],
  tools: [
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Git', color: '#F05032' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'WebSockets', color: '#f59e0b' },
    { name: 'RabbitMQ', color: '#FF6600' },
  ],
};

export const education = [
  {
    id: 1,
    institution: 'Universidade Federal de Campina Grande',
    degree: 'Bacharelado em Engenharia Elétrica',
    period: 'Jan 2018 - Dez 2024',
    highlights: [
      'Ênfase em desenvolvimento de software, controle e automação',
      'Bolsista no LIEC - projetos de integração hardware e software',
      'Bolsista na Trybe - formação FullStack com foco prático',
      'Monitora e iniciação científica em sistemas embarcados e IoT',
    ],
  },
  {
    id: 2,
    institution: 'SENAI',
    degree: 'Análise e Desenvolvimento de Sistemas',
    period: '2020 - 2022',
    highlights: [
      'Conhecimento sólido em modelagem de dados e bases relacionais',
      'Projetos integrativos com design de modelos ER e scripts de migração',
    ],
  },
];

export const languages = [
  { name: 'Português', level: 'Nativo', percentage: 100 },
  { name: 'Inglês', level: 'Intermediário/Avançado', percentage: 75 },
];

export const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'Contacto', href: '#contact' },
];
