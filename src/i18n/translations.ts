export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      techstack: "Tech Stack",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou",
      role: "Software Engineer",
      tagline: "Criando sistemas elegantes, acessíveis e de alta performance",
      availability: "Disponível",
      scroll: "Scroll",
    },
    about: {
      sectionNum: "01.",
      title: "Sobre Mim",
      whoAmI: "Quem sou eu",
      bioRole: "Engenheira de Software",
      bioIntro:
        "Engenheira de Software com experiência sólida em desenvolvimento fullstack, mobile e cloud, complementada por uma formação em Engenharia Elétrica.",
      bioDetails:
        "Atua com React, Vue, React Native, Node.js e PHP/Laravel no dia a dia, com forte domínio de infraestrutura AWS — EC2, ECS, Lambda, API Gateway e CloudWatch. Interesse especial em arquitetura de sistemas escaláveis, interfaces de alta performance e boas práticas de engenharia de software. Atualmente cursando pós-graduação em Engenharia de Software.",
      location: "Brasil",
      currentStudy: "Pós-graduação em Engenharia de Software",
      availabilityText: "Disponível",
      availablePill: "Disponível para trabalho",
      basedIn: "Baseada em",
      studying: "Estudando",
      techStackLabel: "Tech Stack",
      educationLabel: "Formação",
      languages: "Idiomas",
      langPt: "Português",
      langPtLevel: "Nativo",
      langEn: "Inglês",
      langEnLevel: "Intermediário/Avançado",
      langEs: "Espanhol",
      langEsLevel: "Intermediário",
      frontend: "Frontend",
      frontendDesc:
        "React, Vue, Next.js, Nuxt, TailwindCSS, Shadcn/UI, React Hook Form, Zustand, Zod, Framer Motion, TanStack Query",
      backend: "Backend",
      backendDesc:
        "Node.js • NestJS • Laravel • REST APIs • GraphQL • Authentication (JWT, cookies) • WebSockets • Payments (Stripe)",
      mobile: "Mobile",
      mobileDesc:
        "React Native • Expo • PWA • Push Notifications • Offline-first",
      databases: "Bases de Dados",
      databasesDesc: "PostgreSQL, MongoDB, MySQL, Prisma ORM",
      devops: "DevOps & Cloud",
      devopsDesc:
        "Docker • AWS (EC2, ECS, Lambda, API Gateway, S3, RDS, CloudWatch) • GitHub Actions CI/CD",
      architecture: "Arquitetura",
      architectureDesc:
        "Clean Architecture • SOLID • Microservices • DDD • Scalable SaaS systems • API Design",
      edu1Degree: "Bacharelado em Engenharia Elétrica",
      edu1Institution: "Universidade Federal de Campina Grande",
      edu1Period: "Jan 2018 - Dez 2024",
      edu1Highlights: [
        "Ênfase em desenvolvimento de software, Eletrônica, controle e automação",
        "Bolsista no LIEC - projetos de integração hardware e software",
        "Bolsista na Trybe - curso de Web Development (fullstack)",
      ],
      edu2Degree: "Formação Técnica em Análise e Desenvolvimento de Sistemas",
      edu2Institution: "SENAI",
      edu2Period: "2020 - 2022",
      edu2Highlights: [
        "Conhecimento sólido em modelagem de dados e bases relacionais",
        "Projetos integrativos com design de modelos ER e scripts de migração",
      ],
    },
    experience: {
      sectionNum: "02.",
      title: "Experiência",
      subtitle:
        "Trajetória profissional em desenvolvimento de software, desde projetos académicos até sistemas em produção.",
      current: "Atual",
      previous: "Anterior",
      jobs: [
        {
          company: "CopanestRIO",
          role: "Software Developer",
          period: "Atual",
          description: [
            "Desenvolvimento e manutenção de landing page e sistema de gestão da cooperativa utilizando Vue, HTML, CSS e JavaScript.",
            "Desenvolvimento backend com PHP e Laravel para APIs e integrações do sistema.",
            "Containerização com Docker e deploy em ambiente AWS (EC2, S3, RDS) com pipeline de CI/CD.",
            "Gestão de dados com MySQL para o sistema da cooperativa.",
          ],
        },
        {
          company: "Auclan Design",
          role: "Mobile Developer · Freelancer",
          period: "Anterior",
          description: [
            "Reconstrução do zero do app mobile DentalUni com React Native.",
            "Desenvolvimento de interfaces mobile modernas, performáticas e acessíveis para gestão odontológica.",
          ],
        },
        {
          company: "Horus",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Desenvolvimento de interfaces modernas e responsivas com React, Vue e TypeScript para o sistema de faturamento médico.",
            "Backend com PHP e Laravel — APIs RESTful, autenticação e regras de negócio do sistema hospitalar.",
            "Containerização com Docker (multi-stage builds) e deploy em AWS EC2 com pipelines de CI/CD via GitHub Actions.",
            "Gestão de infraestrutura AWS: EC2, S3 para assets e RDS MySQL em ambiente de produção.",
          ],
        },
        {
          company: "Grupo Neiva",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Projetos com Vue, Nuxt, Laravel, PHP, MySQL, React Native.",
            "Desenvolvimento de landing pages e sistemas como Evoluir EAD, PNLD, IDUCS.",
            "Participação ativa em code reviews, melhorias de UX e deploy contínuo.",
          ],
        },
        {
          company: "UFCG",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Desenvolvimento de aplicações com Next.js, NestJS, Node.js, React Native e MongoDB.",
            "Automação de processos laboratoriais e melhorias de performance.",
            "Aplicação de princípios de Clean Code e Clean Architecture.",
          ],
        },
      ],
    },
    projects: {
      sectionNum: "03.",
      title: "Projetos",
      subtitle:
        "Uma seleção de projetos que demonstram as minhas competências em diferentes áreas do desenvolvimento.",
      wipLabel: "Em desenvolvimento",
      items: [
        {
          title: "DENTAL UNI",
          subtitle: "App Mobile de Gestão Odontológica",
          description:
            "App mobile em desenvolvimento para a Auclan Design, voltado à gestão de planos odontológicos. Arquitetura moderna com navegação fluida e experiência de usuário otimizada.",
        },
        {
          title: "HORUS",
          subtitle: "Plataforma de Faturamento Médico",
          description:
            "Landing Page e Sistema de Faturamento Médico. Interface moderna para gestão de faturamento hospitalar.",
        },
        {
          title: "CoopanestRIO",
          subtitle: "Sistema de Gestão Cooperativa",
          description:
            "Desenvolvimento e manutenção do sistema para a cooperativa de anestesiologistas.",
        },
        {
          title: "EVOLUIR",
          subtitle: "Plataforma EAD",
          description:
            "Sistema EAD e Landing Page para a plataforma Evoluir de ensino à distância.",
        },
        {
          title: "ECONOWISE",
          subtitle: "Sistema de Automação IoT",
          description:
            "Aplicação de automação, monitoramento e controle de ar-condicionados. Projeto de TCC.",
        },
        {
          title: "PNLD",
          subtitle: "Plataforma de Livros",
          description:
            "Landing Page para a plataforma de livros da instituição. Design responsivo e acessível.",
        },
        {
          title: "IDUCS",
          subtitle: "Marketplace de Livros",
          description:
            "Marketplace de livros para a instituição, com sistema de busca e categorização.",
        },
      ],
    },
    techstack: {
      sectionNum: "05.",
      title: "Tech Stack",
      subtitle:
        "Tecnologias e ferramentas que utilizo para criar experiências digitais de alta qualidade.",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas & DevOps",
      stats: {
        technologies: "Tecnologias",
        projects: "Projetos",
        experience: "Experiência",
        frameworks: "Frameworks",
        experienceValue: "5+ anos",
      },
    },
    certifications: {
      sectionNum: "04.",
      title: "Certificações",
      subtitle: "Cursos e certificações concluídos ao longo da minha trajetória profissional.",
      copyLink: "Copiar link",
      copied: "Copiado!",
      download: "Download",
      view: "Ver certificado",
      statsCourses: "cursos",
      statsHours: "horas de conteúdo",
      statsInstitutions: "instituições",
    },
    contact: {
      sectionNum: "06.",
      title: "Contato",
      subtitle:
        "Interessado(a) em colaborar? Envie uma mensagem e responderei o mais breve possível.",
      info: "Informações",
      email: "Email",
      phone: "Telefone",
      locationLabel: "Localização",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      nameLabel: "Nome",
      namePlaceholder: "O teu nome",
      emailLabel: "Email",
      emailPlaceholder: "email@exemplo.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Assunto da mensagem",
      messageLabel: "Mensagem",
      messagePlaceholder: "Escreve a tua mensagem aqui...",
      send: "Enviar Mensagem",
      sending: "A enviar...",
      sent: "Enviado!",
      requiredFields: "Campos obrigatórios",
      requiredFieldsDesc: "Por favor, preencha todos os campos obrigatórios.",
      successTitle: "Mensagem enviada!",
      successDesc: "Obrigada pelo contacto. Responderei em breve!",
      errorTitle: "Erro ao enviar",
      errorDesc: "Ocorreu um problema. Tente novamente ou envie por email.",
    },
    footer: {
      navigation: "Navegação",
      connect: "Conecta",
      madeWith: "Feito com",
      by: "por",
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      techstack: "Tech Stack",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer",
      tagline: "Crafting elegant, accessible & high-performance systems",
      availability: "Available",
      scroll: "Scroll",
    },
    about: {
      sectionNum: "01.",
      title: "About Me",
      whoAmI: "Who am I",
      bioRole: "Software Engineer",
      bioIntro:
        "Software Engineer with hands-on experience in fullstack, mobile, and cloud development, backed by a background in Electrical Engineering.",
      bioDetails:
        "Works daily with React, Vue, React Native, Node.js and PHP/Laravel, with strong AWS infrastructure skills — EC2, ECS, Lambda, API Gateway and CloudWatch. Passionate about scalable system architecture, high-performance interfaces and software engineering best practices. Currently pursuing a postgraduate degree in Software Engineering.",
      location: "Brazil",
      currentStudy: "Postgraduate in Software Engineering",
      availabilityText: "Available",
      availablePill: "Available for work",
      basedIn: "Based in",
      studying: "Studying",
      techStackLabel: "Tech Stack",
      educationLabel: "Education",
      languages: "Languages",
      langPt: "Portuguese",
      langPtLevel: "Native",
      langEn: "English",
      langEnLevel: "Intermediate/Advanced",
      langEs: "Spanish",
      langEsLevel: "Intermediate",
      frontend: "Frontend",
      frontendDesc:
        "React, Vue, Next.js, Nuxt, TailwindCSS, Shadcn/UI, React Hook Form, Zustand, Zod, Framer Motion, TanStack Query",
      backend: "Backend",
      backendDesc:
        "Node.js • NestJS • Laravel • REST APIs • GraphQL • Authentication (JWT, cookies) • WebSockets • Payments (Stripe)",
      mobile: "Mobile",
      mobileDesc:
        "React Native • Expo • PWA • Push Notifications • Offline-first",
      databases: "Databases",
      databasesDesc: "PostgreSQL, MongoDB, MySQL, Prisma ORM",
      devops: "DevOps & Cloud",
      devopsDesc:
        "Docker • AWS (EC2, ECS, Lambda, API Gateway, S3, RDS, CloudWatch) • GitHub Actions CI/CD",
      architecture: "Architecture",
      architectureDesc:
        "Clean Architecture • SOLID • Microservices • DDD • Scalable SaaS systems • API Design",
      edu1Degree: "Bachelor's in Electrical Engineering",
      edu1Institution: "Federal University of Campina Grande",
      edu1Period: "Jan 2018 - Dec 2024",
      edu1Highlights: [
        "Emphasis on software development, Electronics, control and automation",
        "Scholarship at LIEC - hardware and software integration projects",
        "Scholarship at Trybe - Web Development course (fullstack)",
      ],
      edu2Degree: "Technical Degree in Systems Analysis and Development",
      edu2Institution: "SENAI",
      edu2Period: "2020 - 2022",
      edu2Highlights: [
        "Solid knowledge in data modeling and relational databases",
        "Integrative projects with ER model design and migration scripts",
      ],
    },
    experience: {
      sectionNum: "02.",
      title: "Experience",
      subtitle:
        "Professional journey in software development, from academic projects to production systems.",
      current: "Current",
      previous: "Previous",
      jobs: [
        {
          company: "CopanestRIO",
          role: "Software Developer",
          period: "Current",
          description: [
            "Development and maintenance of landing page and cooperative management system using Vue, HTML, CSS and JavaScript.",
            "Backend development with PHP and Laravel for APIs and system integrations.",
            "Containerization with Docker and deployment on AWS (EC2, S3, RDS) with CI/CD pipeline.",
            "Data management with MySQL for the cooperative system.",
          ],
        },
        {
          company: "Auclan Design",
          role: "Mobile Developer · Freelancer",
          period: "Previous",
          description: [
            "Rebuilt the DentalUni mobile app from scratch using React Native.",
            "Developed modern, performant and accessible mobile interfaces for dental management.",
          ],
        },
        {
          company: "Horus",
          role: "Software Developer",
          period: "Previous",
          description: [
            "Built modern, responsive interfaces with React, Vue and TypeScript for a medical billing platform.",
            "Backend with PHP and Laravel — RESTful APIs, authentication and hospital system business logic.",
            "Containerization with Docker (multi-stage builds) and deployment to AWS EC2 via GitHub Actions CI/CD pipelines.",
            "AWS infrastructure management: EC2, S3 for assets and RDS MySQL in production.",
          ],
        },
        {
          company: "Grupo Neiva",
          role: "Software Developer",
          period: "Previous",
          description: [
            "Projects with Vue, Nuxt, Laravel, PHP, MySQL, React Native.",
            "Development of landing pages and systems like Evoluir EAD, PNLD, IDUCS.",
            "Active participation in code reviews, UX improvements and continuous deployment.",
          ],
        },
        {
          company: "UFCG",
          role: "Software Developer",
          period: "Previous",
          description: [
            "Development of applications with Next.js, NestJS, Node.js, React Native and MongoDB.",
            "Automation of laboratory processes and performance improvements.",
            "Application of Clean Code and Clean Architecture principles.",
          ],
        },
      ],
    },
    projects: {
      sectionNum: "03.",
      title: "Projects",
      subtitle:
        "A selection of projects that demonstrate my skills across different areas of development.",
      wipLabel: "In development",
      items: [
        {
          title: "DENTAL UNI",
          subtitle: "Dental Management Mobile App",
          description:
            "Mobile app in development for Auclan Design, focused on dental plan management. Modern architecture with smooth navigation and optimized user experience.",
        },
        {
          title: "HORUS",
          subtitle: "Medical Billing Platform",
          description:
            "Landing Page and Medical Billing System. Modern interface for hospital billing management.",
        },
        {
          title: "CoopanestRIO",
          subtitle: "Cooperative Management System",
          description:
            "Development and maintenance of the system for the anesthesiologists cooperative.",
        },
        {
          title: "EVOLUIR",
          subtitle: "E-Learning Platform",
          description:
            "E-Learning system and Landing Page for the Evoluir distance education platform.",
        },
        {
          title: "ECONOWISE",
          subtitle: "IoT Automation System",
          description:
            "Automation, monitoring and control application for air conditioners. Final thesis project.",
        },
        {
          title: "PNLD",
          subtitle: "Book Platform",
          description:
            "Landing Page for the institution's book platform. Responsive and accessible design.",
        },
        {
          title: "IDUCS",
          subtitle: "Book Marketplace",
          description:
            "Book marketplace for the institution, with search and categorization system.",
        },
      ],
    },
    techstack: {
      sectionNum: "05.",
      title: "Tech Stack",
      subtitle:
        "Technologies and tools I use to create high-quality digital experiences.",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & DevOps",
      stats: {
        technologies: "Technologies",
        projects: "Projects",
        experience: "Experience",
        frameworks: "Frameworks",
        experienceValue: "5+ years",
      },
    },
    certifications: {
      sectionNum: "04.",
      title: "Certifications",
      subtitle: "Courses and certifications completed throughout my professional journey.",
      copyLink: "Copy link",
      copied: "Copied!",
      download: "Download",
      view: "View certificate",
      statsCourses: "courses",
      statsHours: "hours of content",
      statsInstitutions: "institutions",
    },
    contact: {
      sectionNum: "06.",
      title: "Contact",
      subtitle:
        "Interested in collaborating? Send a message and I'll reply as soon as possible.",
      info: "Information",
      email: "Email",
      phone: "Phone",
      locationLabel: "Location",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Message subject",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Sent!",
      requiredFields: "Required fields",
      requiredFieldsDesc: "Please fill in all required fields.",
      successTitle: "Message sent!",
      successDesc: "Thanks for reaching out. I'll respond shortly!",
      errorTitle: "Failed to send",
      errorDesc: "Something went wrong. Please try again or reach out via email.",
    },
    footer: {
      navigation: "Navigation",
      connect: "Connect",
      madeWith: "Made with",
      by: "by",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      techstack: "Tech Stack",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Software Engineer",
      tagline: "Creando interfaces elegantes, accesibles y de alto rendimiento",
      availability: "Disponible",
      scroll: "Scroll",
    },
    about: {
      sectionNum: "01.",
      title: "Sobre Mí",
      whoAmI: "Quién soy",
      bioRole: "Ingeniera de Software",
      bioIntro:
        "Ingeniera de Software con experiencia sólida en desarrollo fullstack, mobile y cloud, respaldada por una formación en Ingeniería Eléctrica.",
      bioDetails:
        "Trabaja con React, Vue, React Native, Node.js y PHP/Laravel, con dominio de infraestructura AWS — EC2, ECS, Lambda, API Gateway y CloudWatch. Apasionada por la arquitectura de sistemas escalables, interfaces de alto rendimiento y buenas prácticas de ingeniería de software. Actualmente cursando posgrado en Ingeniería de Software.",
      location: "Brasil",
      currentStudy: "Posgrado en Ingeniería de Software",
      availabilityText: "Disponible",
      availablePill: "Disponible para trabajar",
      basedIn: "Ubicada en",
      studying: "Estudiando",
      techStackLabel: "Tech Stack",
      educationLabel: "Formación",
      languages: "Idiomas",
      langPt: "Portugués",
      langPtLevel: "Nativo",
      langEn: "Inglés",
      langEs: "Español",
      langEnLevel: "Intermedio/Avanzado",
      langEsLevel: "Intermedio",
      frontend: "Frontend",
      frontendDesc:
        "React, Vue, Next.js, Nuxt, TailwindCSS, Shadcn/UI, React Hook Form, Zustand, Zod, Framer Motion, TanStack Query",
      backend: "Backend",
      backendDesc:
        "Node.js • NestJS • Laravel • REST APIs • GraphQL • Authentication (JWT, cookies) • WebSockets • Payments (Stripe)",
      mobile: "Mobile",
      mobileDesc:
        "React Native • Expo • PWA • Push Notifications • Offline-first",
      databases: "Bases de Datos",
      databasesDesc: "PostgreSQL, MongoDB, MySQL, Prisma ORM",
      devops: "DevOps & Cloud",
      devopsDesc:
        "Docker • AWS (EC2, ECS, Lambda, API Gateway, S3, RDS, CloudWatch) • GitHub Actions CI/CD",
      architecture: "Arquitectura",
      architectureDesc:
        "Clean Architecture • SOLID • Microservices • DDD • Scalable SaaS systems • API Design",
      edu1Degree: "Licenciatura en Ingeniería Eléctrica",
      edu1Institution: "Universidad Federal de Campina Grande",
      edu1Period: "Ene 2018 - Dic 2024",
      edu1Highlights: [
        "Énfasis en desarrollo de software, Electrónica, control y automatización",
        "Becaria en LIEC - proyectos de integración hardware y software",
        "Becaria en Trybe - curso de Web Development (fullstack)",
      ],
      edu2Degree: "Formación Técnica en Análisis y Desarrollo de Sistemas",
      edu2Institution: "SENAI",
      edu2Period: "2020 - 2022",
      edu2Highlights: [
        "Conocimiento sólido en modelado de datos y bases relacionales",
        "Proyectos integrativos con diseño de modelos ER y scripts de migración",
      ],
    },
    experience: {
      sectionNum: "02.",
      title: "Experiencia",
      subtitle:
        "Trayectoria profesional en desarrollo de software, desde proyectos académicos hasta sistemas en producción.",
      current: "Actual",
      previous: "Anterior",
      jobs: [
        {
          company: "CopanestRIO",
          role: "Software Developer",
          period: "Actual",
          description: [
            "Desarrollo y mantenimiento de landing page y sistema de gestión de la cooperativa utilizando Vue, HTML, CSS y JavaScript.",
            "Desarrollo backend con PHP y Laravel para APIs e integraciones del sistema.",
            "Containerización con Docker y deploy en AWS (EC2, S3, RDS) con pipeline de CI/CD.",
            "Gestión de datos con MySQL para el sistema de la cooperativa.",
          ],
        },
        {
          company: "Auclan Design",
          role: "Mobile Developer · Freelancer",
          period: "Dic 2025 - May 2026",
          description: [
            "Reconstrucción desde cero de la app mobile DentalUni con React Native.",
            "Desarrollo de interfaces mobile modernas, performáticas y accesibles para gestión odontológica.",
          ],
        },
        {
          company: "Horus",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Desarrollo de interfaces modernas y responsivas con React, Vue y TypeScript para el sistema de facturación médica.",
            "Backend con PHP y Laravel — APIs RESTful, autenticación y lógica de negocio del sistema hospitalario.",
            "Containerización con Docker (multi-stage builds) y deploy en AWS EC2 mediante pipelines CI/CD con GitHub Actions.",
            "Gestión de infraestructura AWS: EC2, S3 para assets y RDS MySQL en producción.",
          ],
        },
        {
          company: "Grupo Neiva",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Proyectos con Vue, Nuxt, Laravel, PHP, MySQL, React Native.",
            "Desarrollo de landing pages y sistemas como Evoluir EAD, PNLD, IDUCS.",
            "Participación activa en code reviews, mejoras de UX y deploy continuo.",
          ],
        },
        {
          company: "UFCG",
          role: "Software Developer",
          period: "Anterior",
          description: [
            "Desarrollo de aplicaciones con Next.js, NestJS, Node.js, React Native y MongoDB.",
            "Automatización de procesos de laboratorio y mejoras de rendimiento.",
            "Aplicación de principios de Clean Code y Clean Architecture.",
          ],
        },
      ],
    },
    projects: {
      sectionNum: "03.",
      title: "Proyectos",
      subtitle:
        "Una selección de proyectos que demuestran mis competencias en diferentes áreas del desarrollo.",
      wipLabel: "En desarrollo",
      items: [
        {
          title: "DENTAL UNI",
          subtitle: "App Mobile de Gestión Odontológica",
          description:
            "App mobile en desarrollo para Auclan Design, orientado a la gestión de planes dentales. Arquitectura moderna con navegación fluida y experiencia de usuario optimizada.",
        },
        {
          title: "HORUS",
          subtitle: "Plataforma de Facturación Médica",
          description:
            "Landing Page y Sistema de Facturación Médica. Interfaz moderna para gestión de facturación hospitalaria.",
        },
        {
          title: "CoopanestRIO",
          subtitle: "Sistema de Gestión Cooperativa",
          description:
            "Desarrollo y mantenimiento del sistema para la cooperativa de anestesiólogos.",
        },
        {
          title: "EVOLUIR",
          subtitle: "Plataforma E-Learning",
          description:
            "Sistema EAD y Landing Page para la plataforma Evoluir de enseñanza a distancia.",
        },
        {
          title: "ECONOWISE",
          subtitle: "Sistema de Automatización IoT",
          description:
            "Aplicación de automatización, monitoreo y control de aires acondicionados. Proyecto de TCC.",
        },
        {
          title: "PNLD",
          subtitle: "Plataforma de Libros",
          description:
            "Landing Page para la plataforma de libros de la institución. Diseño responsivo y accesible.",
        },
        {
          title: "IDUCS",
          subtitle: "Marketplace de Libros",
          description:
            "Marketplace de libros para la institución, con sistema de búsqueda y categorización.",
        },
      ],
    },
    techstack: {
      sectionNum: "05.",
      title: "Tech Stack",
      subtitle:
        "Tecnologías y herramientas que utilizo para crear experiencias digitales de alta calidad.",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas & DevOps",
      stats: {
        technologies: "Tecnologías",
        projects: "Proyectos",
        experience: "Experiencia",
        frameworks: "Frameworks",
        experienceValue: "5+ años",
      },
    },
    certifications: {
      sectionNum: "04.",
      title: "Certificaciones",
      subtitle: "Cursos y certificaciones completados a lo largo de mi trayectoria profesional.",
      copyLink: "Copiar enlace",
      copied: "¡Copiado!",
      download: "Descargar",
      view: "Ver certificado",
      statsCourses: "cursos",
      statsHours: "horas de contenido",
      statsInstitutions: "instituciones",
    },
    contact: {
      sectionNum: "06.",
      title: "Contacto",
      subtitle:
        "¿Interesado(a) en colaborar? Envía un mensaje y responderé lo antes posible.",
      info: "Información",
      email: "Email",
      phone: "Teléfono",
      locationLabel: "Ubicación",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "email@ejemplo.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Asunto del mensaje",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      sent: "¡Enviado!",
      requiredFields: "Campos obligatorios",
      requiredFieldsDesc: "Por favor, rellena todos los campos obligatorios.",
      successTitle: "¡Mensaje enviado!",
      successDesc: "¡Gracias por contactar! Responderé pronto.",
      errorTitle: "Error al enviar",
      errorDesc: "Algo salió mal. Inténtalo de nuevo o escríbeme por email.",
    },
    footer: {
      navigation: "Navegación",
      connect: "Conecta",
      madeWith: "Hecho con",
      by: "por",
      rights: "Todos los derechos reservados.",
    },
  },
};
