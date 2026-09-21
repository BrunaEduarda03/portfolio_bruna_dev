export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  availability: string;
  currentStudy: string;
}

export interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  span: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: null | string;
  link?: string;
  github?: string;
  wip?: boolean;
}

export interface TechItem {
  name: string;
  color: string;
}

export interface TechStack {
  frontend: TechItem[];
  backend: TechItem[];
  tools: TechItem[];
  ai: TechItem[];
  testing: TechItem[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export const personalInfo: PersonalInfo = {
  name: "Bruna Eduarda Cruz Maciel",
  role: "Software Engineer",
  tagline: "Crafting elegant, accessible & high-performance systems",
  bio: "Engenheira de Software com formação em Engenharia Elétrica e experiência sólida em desenvolvimento fullstack, mobile e cloud. Atua com React, React Native, Node.js e PHP/Laravel no dia a dia, com forte domínio de infraestrutura AWS — EC2, ECS, Lambda, API Gateway e CloudWatch. Interesse especial em arquitetura de sistemas escaláveis, interfaces de alta performance e boas práticas de engenharia de software. Atualmente cursando pós-graduação em Engenharia de Software.",
  email: "brunaecmaciel@gmail.com",
  phone: "+55 (83) 9 96635326",
  location: "Brasil",
  github: "https://github.com/BrunaEduarda03",
  linkedin: "https://www.linkedin.com/in/brunaecmaciel/",
  availability: "Disponível para trabalho remoto",
  currentStudy: "Pós-graduação em Engenharia de Software",
};

export const aboutCards: AboutCard[] = [
  {
    id: 1,
    title: "Frontend",
    description: "React, Vue, Next.js, Nuxt, TailwindCSS, Shadcn/UI",
    icon: "Monitor",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "Backend",
    description: "Node.js, NestJS, Laravel, PHP, Python, C#",
    icon: "Server",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Mobile",
    description: "React Native, PWA, Service Workers",
    icon: "Smartphone",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Segurança & Observabilidade",
    description: "Snyk, Sentry, Microsoft Clarity, New Relic, Google Analytics",
    icon: "ShieldCheck",
    span: "col-span-1",
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    description:
      "Docker, AWS (EC2, ECS, Lambda, API Gateway, S3, RDS, CloudWatch), GitHub Actions CI/CD",
    icon: "Cloud",
    span: "col-span-2",
  },
  {
    id: 6,
    title: "Arquitetura",
    description: "Clean Code, Clean Architecture, Microservices, SOLID",
    icon: "Layers",
    span: "col-span-1",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CopanestRIO",
    role: "Software Engineer",
    period: "Atual",
    description: [
      "Desenvolvimento e manutenção de landing page e sistema de gestão da cooperativa utilizando Vue, HTML, CSS e JavaScript.",
      "Desenvolvimento backend com PHP e Laravel para APIs e integrações do sistema.",
      "Containerização com Docker e deploy em ambiente AWS (EC2, S3, RDS) com pipeline de CI/CD.",
      "Gestão de dados com MySQL para o sistema da cooperativa.",
    ],
    technologies: [
      "Vue",
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JS",
      "Docker",
      "AWS",
      "MySQL",
    ],
  },
  {
    id: 2,
    company: "Auclan Design",
    role: "Mobile Developer · Freelancer",
    period: "Anterior",
    description: [
      "Reconstrução do zero do app mobile DentalUni com React Native.",
      "Desenvolvimento de interfaces mobile modernas, performáticas e acessíveis para gestão odontológica.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Expo Router",
      "Reanimated",
    ],
  },
  {
    id: 3,
    company: "Horus",
    role: "Software Developer",
    period: "Anterior",
    description: [
      "Desenvolvimento de interfaces modernas e responsivas com React, Vue e TypeScript para o sistema de faturamento médico.",
      "Backend com PHP e Laravel — APIs RESTful, autenticação e regras de negócio do sistema hospitalar.",
      "Containerização com Docker (multi-stage builds) e deploy em AWS EC2 com pipelines de CI/CD via GitHub Actions.",
      "Gestão de infraestrutura AWS: EC2, S3 para assets e RDS MySQL em ambiente de produção.",
    ],
    technologies: [
      "React",
      "Vue",
      "PHP",
      "Laravel",
      "TypeScript",
      "Docker",
      "AWS",
      "MySQL",
    ],
  },
  {
    id: 4,
    company: "Grupo Neiva",
    role: "Software Developer",
    period: "Anterior",
    description: [
      "Projetos com Vue, Nuxt, Laravel, PHP, MySQL, React Native.",
      "Desenvolvimento de landing pages e sistemas como Evoluir EAD, PNLD, IDUCS.",
      "Participação ativa em code reviews, melhorias de UX e deploy contínuo.",
    ],
    technologies: ["Vue", "Nuxt", "Laravel", "PHP", "MySQL", "React Native"],
  },
  {
    id: 5,
    company: "UFCG",
    role: "Software Developer",
    period: "Anterior",
    description: [
      "Desenvolvimento de aplicações com Next.js, NestJS, Node.js, React Native e MongoDB.",
      "Automação de processos laboratoriais e melhorias de performance.",
      "Aplicação de princípios de Clean Code e Clean Architecture.",
    ],
    technologies: ["Next.js", "NestJS", "Node.js", "React Native", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "DENTAL UNI",
    subtitle: "Dental Management Mobile App",
    description:
      "App mobile em desenvolvimento para a Auclan Design, voltado à gestão de planos odontológicos. Arquitetura moderna com navegação fluida e experiência de usuário otimizada.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Expo Router",
      "Reanimated",
      "Zod",
    ],
    image: null,
    link: "https://www.planosdentaluni.com.br/",
    wip: true,
  },
  {
    id: 1,
    title: "HORUS",
    subtitle: "Medical Billing Platform",
    description:
      "Landing Page e Sistema de Faturamento Médico. Interface moderna para gestão de faturamento hospitalar.",
    technologies: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
    image: null,
    link: "https://horusfat.com/",
  },
  {
    id: 2,
    title: "CoopanestRIO",
    subtitle: "Cooperative Management System",
    description:
      "Desenvolvimento da landing page e do sistema para a cooperativa de anestesiologistas.",
    technologies: ["Vue", "Nuxt", "Laravel", "PostgreSQL", "Docker"],
    image: null,
    link: "https://www.coopanestrio.org.br/",
  },
  {
    id: 3,
    title: "EVOLUIR",
    subtitle: "EAD Platform",
    description:
      "Sistema EAD e Landing Page para a plataforma Evoluir de ensino à distância.",
    technologies: ["Vue", "Nuxt", "Laravel", "MySQL"],
    image: null,
    link: "https://plataformaevoluir.com.br/",
  },
  {
    id: 4,
    title: "ECONOWISE",
    subtitle: "IoT Automation System",
    description:
      "Aplicação de automação, monitoramento e controle de ar-condicionados. Projeto de TCC.",
    technologies: ["React Native", "Node.js", "IoT", "MongoDB"],
    image: null,
    github: "https://github.com/BrunaEduarda03/SmartAir",
  },
  {
    id: 5,
    title: "PNLD",
    subtitle: "Book Platform",
    description:
      "Landing Page para a plataforma de livros da instituição. Design responsivo e acessível.",
    technologies: ["Vue", "TailwindCSS", "Laravel"],
    image: null,
    link: "https://mvcpnld.com.br/",
  },
  {
    id: 6,
    title: "IDUCS",
    subtitle: "Book Marketplace",
    description:
      "Marketplace de livros para a instituição, com sistema de busca e categorização.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: null,
    link: "https://dev.iducs.com.br/login",
  },
];

export const techStack: TechStack = {
  frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Vue", color: "#4FC08D" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Nuxt", color: "#00DC82" },
    { name: "TailwindCSS", color: "#06B6D4" },
    { name: "Vite", color: "#646CFF" },
    { name: "Shadcn/UI", color: "#ffffff" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Laravel", color: "#FF2D20" },
    { name: "Python", color: "#3776AB" },
    { name: "PHP", color: "#777BB4" },
    { name: "C#", color: "#512BD4" },
    { name: "Express", color: "#ffffff" },
    { name: "Prisma", color: "#2D3748" },
  ],
  tools: [
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Git", color: "#F05032" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Redis", color: "#DC382D" },
    { name: "WebSockets", color: "#f59e0b" },
    { name: "RabbitMQ", color: "#FF6600" },
  ],
  ai: [
    { name: "Prompt Engineering", color: "#10A37F" },
    { name: "RAG (Retrieval-Augmented Generation)", color: "#8A63D2" },
    { name: "LLM APIs (OpenAI, Claude)", color: "#D97757" },
    { name: "Embeddings & Busca Semântica", color: "#3B82F6" },
  ],
  testing: [
    { name: "Vitest", color: "#6E9F18" },
    { name: "Playwright", color: "#2EAD33" },
    { name: "Cypress", color: "#17202C" },
    { name: "Testes Unitários", color: "#f59e0b" },
    { name: "Testes de Integração", color: "#f59e0b" },
    { name: "Testes E2E", color: "#f59e0b" },
  ],
};

export const education: EducationItem[] = [
  {
    id: 1,
    institution: "Universidade Federal de Campina Grande",
    degree: "Bacharelado em Engenharia Elétrica",
    period: "Jan 2018 - Dez 2024",
    highlights: [
      "Ênfase em desenvolvimento de software, controle e automação",
      "Bolsista no LIEC - projetos de integração hardware e software",
      "Bolsista na Trybe - formação FullStack com foco prático",
      "Monitora e iniciação científica em sistemas embarcados e IoT",
    ],
  },
  {
    id: 2,
    institution: "SENAI",
    degree: "Formação Técnica em Análise e Desenvolvimento de Sistemas",
    period: "2020 - 2022",
    highlights: [
      "Conhecimento sólido em modelagem de dados e bases relacionais",
      "Projetos integrativos com design de modelos ER e scripts de migração",
    ],
  },
];

export const languages: Language[] = [
  { name: "Português", level: "Nativo", percentage: 100 },
  { name: "Inglês", level: "Intermediário/Avançado", percentage: 75 },
];

export interface Certification {
  id: number;
  title: string;
  institution: string;
  date: string;
  duration?: string;
  type: string;
  link: string;
  downloadLink?: string;
  previewImage: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "WebSockets e Cronjobs Serverless na AWS",
    institution: "JStack",
    date: "28/03/2025",
    duration: "4h 34m",
    type: "Curso",
    link: "https://drive.google.com/file/d/16VRGQg1HrFce1ciE15dENe_Eo266ni4z/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=16VRGQg1HrFce1ciE15dENe_Eo266ni4z",
    previewImage:
      "https://drive.google.com/thumbnail?id=16VRGQg1HrFce1ciE15dENe_Eo266ni4z&sz=w800",
  },
  {
    id: 2,
    title: "Filas na AWS para Processamento Assíncrono com Lambda e SQS",
    institution: "JStack",
    date: "06/03/2025",
    duration: "4h 15m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1bjpjYLmgc87fEi6bUvj3Y7LG0yWz6rOF/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1bjpjYLmgc87fEi6bUvj3Y7LG0yWz6rOF",
    previewImage:
      "https://drive.google.com/thumbnail?id=1bjpjYLmgc87fEi6bUvj3Y7LG0yWz6rOF&sz=w800",
  },
  {
    id: 3,
    title: "Upload para o S3 com Lambda Functions e Presigned URLs",
    institution: "JStack",
    date: "22/02/2025",
    duration: "2h 19m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1qtVieiPT09yhhM1LW_6EmBGsZMhKE9-J/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1qtVieiPT09yhhM1LW_6EmBGsZMhKE9-J",
    previewImage:
      "https://drive.google.com/thumbnail?id=1qtVieiPT09yhhM1LW_6EmBGsZMhKE9-J&sz=w800",
  },
  {
    id: 4,
    title: "Fluxo completo de upload para o S3 com Presigned URLs",
    institution: "JStack",
    date: "17/02/2025",
    duration: "3h 1m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1JJLEnhZNEkq6X1W1Z9GI0Wv4hrfkHcIh/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1JJLEnhZNEkq6X1W1Z9GI0Wv4hrfkHcIh",
    previewImage:
      "https://drive.google.com/thumbnail?id=1JJLEnhZNEkq6X1W1Z9GI0Wv4hrfkHcIh&sz=w800",
  },
  {
    id: 5,
    title: "Login Social (Federated) com AWS Cognito",
    institution: "JStack",
    date: "02/02/2025",
    duration: "4h 53m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1MWpT2EN6KkGn0LKOPZPQ8PJMUaM4gj7P/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1MWpT2EN6KkGn0LKOPZPQ8PJMUaM4gj7P",
    previewImage:
      "https://drive.google.com/thumbnail?id=1MWpT2EN6KkGn0LKOPZPQ8PJMUaM4gj7P&sz=w800",
  },
  {
    id: 6,
    title: "DynamoDB e Serverless Framework: o par perfeito",
    institution: "JStack",
    date: "14/06/2025",
    duration: "2h 53m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1MgFEEjHcpUiVRvJnfleyMJPSCvngRz98/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1MgFEEjHcpUiVRvJnfleyMJPSCvngRz98",
    previewImage:
      "https://drive.google.com/thumbnail?id=1MgFEEjHcpUiVRvJnfleyMJPSCvngRz98&sz=w800",
  },
  {
    id: 7,
    title: "Autenticação em APIs com Serverless e AWS Cognito",
    institution: "JStack",
    date: "16/01/2025",
    duration: "3h 22m",
    type: "Curso",
    link: "https://drive.google.com/file/d/1ViQZtT0NGeXng6OBWyrT7aZ6xrhDN3hP/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1ViQZtT0NGeXng6OBWyrT7aZ6xrhDN3hP",
    previewImage:
      "https://drive.google.com/thumbnail?id=1ViQZtT0NGeXng6OBWyrT7aZ6xrhDN3hP&sz=w800",
  },
  {
    id: 8,
    title: "Bacharel em Engenharia Elétrica",
    institution: "UFCG",
    date: "03/02/2025",
    type: "Diploma",
    link: "https://drive.google.com/file/d/1U6kWFnVQIF-A8o2P8IXW-Nc2-Pr39qSe/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1U6kWFnVQIF-A8o2P8IXW-Nc2-Pr39qSe",
    previewImage:
      "https://drive.google.com/thumbnail?id=1U6kWFnVQIF-A8o2P8IXW-Nc2-Pr39qSe&sz=w800",
  },
  {
    id: 9,
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI",
    date: "22/10/2020",
    type: "Diploma",
    link: "https://drive.google.com/file/d/1ttb1-sxS9NGHqkokqShGln_abUhztSUg/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/uc?export=download&id=1ttb1-sxS9NGHqkokqShGln_abUhztSUg",
    previewImage:
      "https://drive.google.com/thumbnail?id=1ttb1-sxS9NGHqkokqShGln_abUhztSUg&sz=w800",
  },
];

export const navLinks: NavLink[] = [
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Certificações", href: "#certifications" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Contacto", href: "#contact" },
];
