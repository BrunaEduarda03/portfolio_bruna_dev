import { coopanestProjects } from "./coopanestProjects";
export type CaseCopy = [pt: string, en: string, es: string];
export const localize = (value: CaseCopy, language: string) => value[language === "pt" ? 0 : language === "es" ? 2 : 1];
export type Evidence = "public" | "portfolio" | "mock" | "repository";
export interface CaseLayer {
  name: string;
  tech: string;
  detail: CaseCopy;
  evidence: Evidence;
}
export interface CaseFeature {
  softened?: boolean;
  title: CaseCopy;
  description: CaseCopy;
  tags: string[];
  image?: string;
}
export interface CaseSubproject {
  features: CaseFeature[];
  id: string;
  title: CaseCopy;
  url: string;
  summary: CaseCopy;
  challenge: CaseCopy;
  contributions: CaseCopy[];
  layers: CaseLayer[];
  decisions: { title: CaseCopy; detail: CaseCopy; evidence: Evidence; files?: string[] }[];
  outcome: CaseCopy;
  images: { src: string; caption: CaseCopy }[];
}
export interface CaseStudy {
  coverImage?: string;
  subprojects?: CaseSubproject[];
  slug: string;
  projectId: number;
  title: string;
  kind: "billing" | "mobile" | "cooperative" | "education" | "iot" | "catalog";
  accent: string;
  category: CaseCopy;
  summary: CaseCopy;
  role: string;
  challenge: CaseCopy;
  contributions: CaseCopy[];
  layers: CaseLayer[];
  decisions: { title: CaseCopy; detail: CaseCopy; evidence: Evidence; files?: string[] }[];
  pending: CaseCopy[];
  sources: { label: string; url: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "horus", projectId: 1, title: "HORUS", kind: "billing", accent: "#89bfff",
    category: ["Faturamento médico · Web", "Medical billing · Web", "Facturación médica · Web"],
    summary: ["Landing page e aplicação de apoio ao faturamento médico. Interfaces, autenticação, APIs e infraestrutura de produção.", "A public website and medical billing application. Interfaces, authentication, APIs and production infrastructure.", "Sitio público y aplicación de facturación médica. Interfaces, autenticación, APIs e infraestructura de producción."],
    role: "Software Developer · Full stack",
    challenge: ["Apoiar uma operação que envolve guias médicas, glosas e repasses. O site público apresenta esses serviços; os fluxos internos precisam ser documentados com telas autorizadas.", "Support an operation involving medical claims, denied claims and payment reconciliation. The public website describes these services; internal workflows still need authorized screenshots.", "Apoyar una operación con guías médicas, reclamaciones y conciliación de pagos. El sitio describe estos servicios; los flujos internos requieren capturas autorizadas."],
    contributions: [
      ["Interfaces responsivas com React, Vue e TypeScript.", "Responsive interfaces using React, Vue and TypeScript.", "Interfaces responsivas con React, Vue y TypeScript."],
      ["APIs REST, autenticação e regras de negócio com PHP/Laravel.", "REST APIs, authentication and business logic using PHP/Laravel.", "APIs REST, autenticación y reglas de negocio con PHP/Laravel."],
      ["Containers Docker, CI/CD com GitHub Actions e deploy em AWS.", "Docker containers, GitHub Actions CI/CD and AWS deployment.", "Contenedores Docker, CI/CD con GitHub Actions y despliegue en AWS."],
    ],
    layers: [
      { name: "Website", tech: "Vue 3", detail: ["Runtime Vue identificado no bundle público da landing page.", "Vue runtime identified in the public landing-page bundle.", "Runtime Vue identificado en el bundle público de la landing page."], evidence: "public" },
      { name: "Application", tech: "React · TypeScript", detail: ["React identificado no bundle público do login; TypeScript informado no portfólio.", "React identified in the public login bundle; TypeScript documented in the portfolio.", "React identificado en el bundle del login; TypeScript documentado en el portafolio."], evidence: "portfolio" },
      { name: "API", tech: "PHP · Laravel · REST", detail: ["Autenticação e regras de negócio descritas na experiência profissional.", "Authentication and business logic documented in the professional experience.", "Autenticación y lógica de negocio documentadas en la experiencia profesional."], evidence: "portfolio" },
      { name: "Data / Cloud", tech: "MySQL · AWS EC2 / S3 / RDS", detail: ["Infraestrutura e banco informados no portfólio; topologia a validar.", "Infrastructure and database documented in the portfolio; topology needs review.", "Infraestructura y base de datos documentadas; topología por validar."], evidence: "portfolio" },
      { name: "Delivery", tech: "Docker · GitHub Actions", detail: ["Builds multi-stage e pipeline de deploy descritos no histórico profissional.", "Multi-stage builds and deployment pipeline documented in the work history.", "Builds multi-stage y pipeline de despliegue documentados en la experiencia."], evidence: "portfolio" },
    ],
    decisions: [
      { title: ["Site e aplicação separados", "Separate website and application", "Sitio y aplicación separados"], detail: ["A landing page usa Vue e a aplicação pública de login usa React. A escolha de cada stack e sua autoria precisam ser confirmadas.", "The landing page uses Vue and the login application uses React. The rationale and ownership of each stack still need confirmation.", "La landing page usa Vue y el login usa React. Falta confirmar la elección y autoría de cada stack."], evidence: "public" },
      { title: ["Validação no cliente", "Client-side validation", "Validación en el cliente"], detail: ["O bundle público do login contém validação de e-mail e senha com Zod. Isso não comprova a validação do servidor nem a segurança de toda a autenticação.", "The public login bundle contains email and password validation using Zod. This does not establish server-side validation or the security of the entire authentication flow.", "El bundle del login contiene validación de correo y contraseña con Zod. No confirma la validación del servidor ni toda la seguridad de autenticación."], evidence: "public" },
      { title: ["Entrega conteinerizada", "Containerized delivery", "Entrega con contenedores"], detail: ["Docker e GitHub Actions constam na experiência. Etapas do pipeline, rollback e ambientes ainda precisam de detalhamento.", "Docker and GitHub Actions are documented in the work history. Pipeline stages, rollback and environments still need detail.", "Docker y GitHub Actions figuran en la experiencia. Faltan detalles del pipeline, rollback y entornos."], evidence: "portfolio" },
    ],
    pending: [
      ["Confirmar escopo individual, período e divisão entre React, Vue e Next.js.", "Confirm individual ownership, dates and the split between React, Vue and Next.js.", "Confirmar autoría, fechas y división entre React, Vue y Next.js."],
      ["Validar Laravel/MySQL: o card anterior listava Node.js/PostgreSQL, em conflito com a experiência profissional.", "Validate Laravel/MySQL: the previous card listed Node.js/PostgreSQL, conflicting with the professional experience.", "Validar Laravel/MySQL: la tarjeta anterior indicaba Node.js/PostgreSQL, en conflicto con la experiencia."],
      ["Adicionar telas internas autorizadas, testes executados e métricas reais.", "Add authorized internal screenshots, executed tests and real metrics.", "Añadir capturas internas autorizadas, pruebas realizadas y métricas reales."],
    ],
    sources: [{ label: "Horus · website", url: "https://horusfat.com/" }, { label: "Horus · login", url: "https://app.horusfat.com/auth/login" }],
  },
  {
    slug: "dental-uni", projectId: 0, title: "DENTAL UNI", kind: "mobile", accent: "#a5dfd4",
    category: ["Gestão odontológica · Mobile", "Dental services · Mobile", "Servicios dentales · Mobile"],
    summary: ["Reconstrução de aplicativo mobile para serviços e planos odontológicos, com React Native e Expo.", "A rebuilt mobile application for dental services and plans, using React Native and Expo.", "Reconstrucción de una aplicación móvil de servicios y planes dentales con React Native y Expo."],
    role: "Mobile Developer · Auclan Design",
    challenge: ["Reorganizar a experiência mobile e os fluxos de serviços odontológicos. Requisitos específicos e restrições da versão anterior estão pendentes.", "Reorganize the mobile experience and dental-service flows. Specific requirements and limitations of the previous version are pending.", "Reorganizar la experiencia móvil y los flujos dentales. Faltan requisitos específicos y limitaciones de la versión anterior."],
    contributions: [
      ["Reconstrução de interfaces com React Native, Expo e TypeScript.", "Interface rebuild using React Native, Expo and TypeScript.", "Reconstrucción de interfaces con React Native, Expo y TypeScript."],
      ["Estado, consumo de APIs e formulários com Zustand, TanStack Query, React Hook Form e Zod.", "State, API consumption and forms using Zustand, TanStack Query, React Hook Form and Zod.", "Estado, consumo de APIs y formularios con Zustand, TanStack Query, React Hook Form y Zod."],
      ["Preparação de builds e publicação nas lojas, conforme experiência informada.", "Build preparation and app-store release, as documented in the work history.", "Preparación de builds y publicación en tiendas, según la experiencia documentada."],
    ],
    layers: [
      { name: "Mobile", tech: "React Native · Expo · TypeScript", detail: ["Interface e ambiente mobile.", "Mobile interface and runtime.", "Interfaz y entorno móvil."], evidence: "portfolio" },
      { name: "State / Data", tech: "Zustand · TanStack Query", detail: ["Estado da aplicação e consumo de APIs.", "Application state and API consumption.", "Estado de la aplicación y consumo de APIs."], evidence: "portfolio" },
      { name: "Forms", tech: "React Hook Form · Zod", detail: ["Gerenciamento e validação de formulários.", "Form management and validation.", "Gestión y validación de formularios."], evidence: "portfolio" },
      { name: "Backend", tech: "REST API", detail: ["Tecnologia do servidor, endpoints e estratégia de cache a confirmar.", "Server technology, endpoints and caching strategy to confirm.", "Tecnología del servidor, endpoints y caché por confirmar."], evidence: "mock" },
    ],
    decisions: [{ title: ["Separação de responsabilidades", "Separation of responsibilities", "Separación de responsabilidades"], detail: ["Proposta de documentação: explicar a divisão entre estado local, dados remotos e validação. Confirmar como isso foi implementado.", "Documentation draft: explain the split between local state, remote data and validation. Confirm the implementation.", "Borrador: explicar la separación entre estado local, datos remotos y validación. Confirmar la implementación."], evidence: "mock" }],
    pending: [["Confirmar versões publicadas, fluxos entregues e incluir capturas reais do app.", "Confirm released versions and delivered flows; add real app screenshots.", "Confirmar versiones publicadas y flujos entregados; añadir capturas reales."], ["Detalhar acessibilidade, testes, persistência e tratamento de falhas de rede.", "Detail accessibility, testing, persistence and network-error handling.", "Detallar accesibilidad, pruebas, persistencia y gestión de errores de red."]],
    sources: [],
  },
  {
  "slug": "coopanestrio",
  coverImage: "/cases/coopanestrio/portal-login.png",
  "projectId": 2,
  "title": "CoopanestRIO",
  "kind": "cooperative",
  "accent": "#8aafff",
  "category": [
    "Cooperativa médica · Produtos digitais",
    "Medical cooperative · Digital products",
    "Cooperativa médica · Productos digitales"
  ],
  "summary": [
    "Do site institucional à rotina do cooperado: desenvolvimento de dois produtos com Nuxt, Vue e TypeScript no frontend e PHP no backend, principalmente no Portal do Cooperado, cada um com seus próprios fluxos e integrações.",
    "From the institutional website to member workflows: two products with Nuxt, Vue and TypeScript on the frontend and PHP on the backend, primarily in the Member Portal, each with its own flows and integrations.",
    "Del sitio institucional a la rutina del cooperado: dos productos con Nuxt, Vue y TypeScript en el frontend y PHP en el backend, principalmente en el Portal del Cooperado, cada uno con sus flujos e integraciones."
  ],
  "role": "Software Engineer · Full stack",
  "challenge": [
    "Atender duas jornadas complementares: apresentar a cooperativa ao público e oferecer aos cooperados ferramentas para suas rotinas operacionais e financeiras.",
    "Serve two complementary journeys: introduce the cooperative to the public and give members tools for operational and financial workflows.",
    "Atender dos recorridos complementarios: presentar la cooperativa al público y ofrecer herramientas para la operación y las finanzas de los cooperados."
  ],
  "contributions": [
    [
      "Landing page: elaboração das páginas, integração com Strapi para manutenção pelo marketing e formulários integrados.",
      "Website: page planning, Strapi integration for marketing content management and integrated forms.",
      "Sitio: elaboración de páginas, integración con Strapi para gestión por marketing y formularios integrados."
    ],
    [
      "Portal do Cooperado: dashboard, guias, consultas financeiras e componentes compartilhados.",
      "Member portal: dashboard, claims, financial queries and shared components.",
      "Portal: dashboard, guías, consultas financieras y componentes compartidos."
    ]
  ],
  "layers": [
  {
    "name": "Frontend",
    "tech": "Nuxt 4 · Vue 3 · TypeScript",
    "detail": [
      "Base dos dois produtos.",
      "Foundation of both products.",
      "Base de ambos productos."
    ],
    "evidence": "repository"
  },
  {
    "name": "UI",
    "tech": "Tailwind CSS 4 · PrimeVue · shadcn-nuxt · Reka UI",
    "detail": [
      "Interfaces responsivas; PrimeVue na landing page e shadcn/Reka no portal.",
      "Responsive interfaces; PrimeVue on the website and shadcn/Reka in the portal.",
      "Interfaces responsivas; PrimeVue en el sitio y shadcn/Reka en el portal."
    ],
    "evidence": "repository"
  },
  {
    "name": "Backend / CMS",
    "tech": "PHP · Strapi · REST API",
    "detail": [
      "PHP no backend do portal; Strapi para os conteúdos mantidos pelo marketing.",
      "PHP for the portal backend; Strapi for content maintained by marketing.",
      "PHP en el backend del portal; Strapi para contenido gestionado por marketing."
    ],
    "evidence": "portfolio"
  },
  {
    "name": "Estado / dados",
    "tech": "Pinia · Pinia Colada · Axios · useFetch",
    "detail": [
      "Estado da interface e consultas às APIs.",
      "Interface state and API queries.",
      "Estado de interfaz y consultas a APIs."
    ],
    "evidence": "repository"
  },
  {
    "name": "Portal",
    "tech": "Zod · vee-validate · TanStack Vue Table · Unovis",
    "detail": [
      "Validação de formulários e respostas, tabelas e gráficos.",
      "Form and response validation, tables and charts.",
      "Validación de formularios y respuestas, tablas y gráficos."
    ],
    "evidence": "repository"
  },
  {
    "name": "IA / Analytics",
    "tech": "n8n · Google Analytics · Microsoft Clarity",
    "detail": [
      "Assistente integrado com n8n; análise de uso nos dois produtos.",
      "Assistant integrated with n8n; usage analysis in both products.",
      "Asistente integrado con n8n; análisis de uso en ambos productos."
    ],
    "evidence": "portfolio"
  },
  {
    "name": "Qualidade",
    "tech": "Vitest · Playwright",
    "detail": [
      "Testes unitários e e2e presentes no repositório do portal.",
      "Unit and e2e tests present in the portal repository.",
      "Pruebas unitarias y e2e presentes en el repositorio del portal."
    ],
    "evidence": "repository"
  }
],
  "decisions": [
    {
      "title": [
        "Conteúdo separado da apresentação",
        "Content separate from presentation",
        "Contenido separado de la presentación"
      ],
      "detail": [
        "Composables específicos carregam banners, convênios e newsletters via API, mantendo as páginas focadas na apresentação.",
        "Dedicated composables load banners, health plans and newsletters through APIs, keeping pages focused on presentation.",
        "Composables específicos cargan banners, convenios y newsletters por API, manteniendo las páginas enfocadas en la presentación."
      ],
      "evidence": "repository"
    },
    {
      "title": [
        "Arquitetura por domínio",
        "Domain-based architecture",
        "Arquitectura por dominio"
      ],
      "detail": [
        "Nuxt Layers agrupa páginas, APIs, composables, schemas e stores por funcionalidade. Componentes comuns ficam em shared.",
        "Nuxt Layers groups pages, APIs, composables, schemas and stores by feature. Common components live in shared.",
        "Nuxt Layers agrupa páginas, APIs, composables, schemas y stores por funcionalidad. Los componentes comunes viven en shared."
      ],
      "evidence": "repository"
    }
  ],
  "pending": [],
  "sources": [
    {
      "label": "CoopanestRIO · Landing page",
      "url": "https://www.coopanestrio.org.br/"
    },
    {
      "label": "CoopanestRIO · Portal do Cooperado",
      "url": "https://portal-cooperado.coopanestrio.org.br/auth/login"
    },
    { label: "CoopanestRIO · Strapi CMS", url: "https://cms.coopanestrio.org.br/admin" }
  ],
  subprojects: coopanestProjects
},
  {
    slug: "evoluir", projectId: 3, title: "EVOLUIR", kind: "education", accent: "#f7c773",
    category: ["Educação · Web", "Education · Web", "Educación · Web"],
    summary: ["Landing page e manutenção evolutiva de plataforma EAD no ecossistema Grupo Neiva.", "A website and ongoing development of a learning platform within Grupo Neiva.", "Landing page y mantenimiento evolutivo de una plataforma educativa de Grupo Neiva."],
    role: "Software Developer · Grupo Neiva",
    challenge: ["Evoluir interfaces educacionais para diferentes perfis de usuários, mantendo consistência e usabilidade.", "Evolve educational interfaces for different user roles while maintaining consistency and usability.", "Evolucionar interfaces educativas para distintos perfiles manteniendo consistencia y usabilidad."],
    contributions: [["Implementação e manutenção com Vue, Nuxt e Laravel.", "Implementation and maintenance using Vue, Nuxt and Laravel.", "Implementación y mantenimiento con Vue, Nuxt y Laravel."], ["Componentes reutilizáveis e participação em code reviews, conforme experiência no grupo.", "Reusable components and code reviews, as documented in the group-level experience.", "Componentes reutilizables y code reviews, según la experiencia en el grupo."]],
    layers: [
      { name: "Frontend", tech: "Vue · Nuxt", detail: ["Interfaces educacionais.", "Educational interfaces.", "Interfaces educativas."], evidence: "portfolio" },
      { name: "Backend / Data", tech: "Laravel · MySQL", detail: ["Stack descrita no projeto e na experiência.", "Stack documented in the project and work history.", "Stack documentada en el proyecto y experiencia."], evidence: "portfolio" },
    ],
    decisions: [{ title: ["Reuso de componentes", "Component reuse", "Reutilización de componentes"], detail: ["Selecionar um componente real e documentar sua API, estados e uso em diferentes telas.", "Choose a real component and document its API, states and use across screens.", "Elegir un componente real y documentar su API, estados y uso en pantallas."], evidence: "mock" }],
    pending: [["Separar contribuições específicas do Evoluir das demais entregas do Grupo Neiva.", "Separate Evoluir-specific contributions from other Grupo Neiva work.", "Separar las contribuciones de Evoluir de otros trabajos del grupo."], ["Adicionar fluxos, capturas e evidências de qualidade.", "Add workflows, screenshots and quality evidence.", "Añadir flujos, capturas y evidencias de calidad."]], sources: [],
  },
  {
    slug: "econowise", projectId: 4, title: "ECONOWISE", kind: "iot", accent: "#96dfb4",
    category: ["Automação · Mobile + IoT", "Automation · Mobile + IoT", "Automatización · Mobile + IoT"],
    summary: ["Aplicação de TCC para controle e automação de ar-condicionado, integrando React Native e ESP32.", "A capstone application for air-conditioning control and automation, integrating React Native and ESP32.", "Aplicación de fin de grado para controlar aire acondicionado, integrando React Native y ESP32."],
    role: "Software Developer · UFCG / TCC",
    challenge: ["Conectar uma interface mobile a dispositivos físicos para controle de climatização.", "Connect a mobile interface to physical devices for climate control.", "Conectar una interfaz móvil a dispositivos físicos para controlar la climatización."],
    contributions: [["Aplicação mobile em React Native integrada a um microcontrolador ESP32.", "A React Native mobile application integrated with an ESP32 microcontroller.", "Aplicación React Native integrada con un microcontrolador ESP32."], ["Projeto de integração entre software e hardware para automação.", "Software/hardware integration for automation.", "Integración software/hardware para automatización."]],
    layers: [
      { name: "Mobile", tech: "React Native", detail: ["Interface de controle.", "Control interface.", "Interfaz de control."], evidence: "portfolio" },
      { name: "Device", tech: "ESP32", detail: ["Microcontrolador citado no CV.", "Microcontroller documented in the CV.", "Microcontrolador documentado en el CV."], evidence: "portfolio" },
      { name: "Backend / Data", tech: "Node.js · MongoDB", detail: ["Stack do card atual; confirmar participação no fluxo final.", "Stack from the current project card; confirm its role in the final flow.", "Stack de la tarjeta actual; confirmar su rol en el flujo final."], evidence: "portfolio" },
    ],
    decisions: [{ title: ["Comunicação com o dispositivo", "Device communication", "Comunicación con el dispositivo"], detail: ["Protocolo, confirmação de comandos e comportamento offline ainda precisam ser documentados; não assumimos MQTT ou WebSockets.", "Protocol, command acknowledgement and offline behavior still need documentation; MQTT or WebSockets are not assumed.", "Protocolo, confirmación de comandos y modo offline por documentar; no se asume MQTT ni WebSockets."], evidence: "mock" }],
    pending: [["Confirmar protocolo, esquema elétrico, backend e mecanismos de falha segura.", "Confirm protocol, wiring, backend and fail-safe behavior.", "Confirmar protocolo, esquema eléctrico, backend y manejo seguro de fallos."], ["Inserir demonstração real e medições de consumo, se disponíveis.", "Add a real demo and energy measurements, if available.", "Añadir una demo real y mediciones de consumo, si existen."]], sources: [],
  },
  {
    slug: "pnld", projectId: 5, title: "PNLD", kind: "catalog", accent: "#f1afa2",
    category: ["Catálogo editorial · Web", "Book catalog · Web", "Catálogo editorial · Web"],
    summary: ["Landing page para apresentação de livros institucionais, com foco em responsividade e acessibilidade.", "A website presenting institutional books, focused on responsiveness and accessibility.", "Landing page para libros institucionales, con foco en responsividad y accesibilidad."],
    role: "Software Developer · Grupo Neiva",
    challenge: ["Apresentar conteúdo editorial de forma clara e navegável em diferentes dispositivos.", "Present editorial content clearly across different devices.", "Presentar contenido editorial de forma clara en distintos dispositivos."],
    contributions: [["Desenvolvimento de landing page conforme projeto descrito no portfólio.", "Landing-page development as documented in the portfolio.", "Desarrollo de landing page según el portafolio."], ["Interfaces responsivas e atenção à acessibilidade.", "Responsive interfaces and attention to accessibility.", "Interfaces responsivas y atención a la accesibilidad."]],
    layers: [
      { name: "Frontend", tech: "Vue · TailwindCSS", detail: ["Stack informada no card do projeto.", "Stack documented in the project card.", "Stack documentada en la tarjeta."], evidence: "portfolio" },
      { name: "Backend", tech: "Laravel", detail: ["Tecnologia informada; responsabilidades e integrações a confirmar.", "Documented technology; responsibilities and integrations to confirm.", "Tecnología informada; responsabilidades e integraciones por confirmar."], evidence: "portfolio" },
    ],
    decisions: [{ title: ["Conteúdo e navegação", "Content and navigation", "Contenido y navegación"], detail: ["Mock de organização por coleção. Confirmar taxonomia e fluxos realmente entregues.", "Mock organization by collection. Confirm taxonomy and delivered workflows.", "Mock de organización por colección. Confirmar taxonomía y flujos entregados."], evidence: "mock" }],
    pending: [["Adicionar telas reais, escopo individual e auditorias de acessibilidade realizadas.", "Add real screenshots, individual scope and completed accessibility audits.", "Añadir capturas reales, alcance individual y auditorías de accesibilidad realizadas."]], sources: [],
  },
  {
    slug: "iducs", projectId: 6, title: "IDUCS", kind: "catalog", accent: "#b7bdf5",
    category: ["Marketplace de livros · Web", "Book marketplace · Web", "Marketplace de libros · Web"],
    summary: ["Marketplace de livros com busca e categorização, conforme descrição atual do portfólio.", "A book marketplace with search and categorization, as described in the portfolio.", "Marketplace de libros con búsqueda y categorización, según el portafolio."],
    role: "Software Developer · Grupo Neiva",
    challenge: ["Facilitar a descoberta e organização do catálogo de livros.", "Support discovery and organization of a book catalog.", "Facilitar el descubrimiento y organización del catálogo de libros."],
    contributions: [["Desenvolvimento de interfaces e participação no ecossistema de produtos do Grupo Neiva.", "Interface development within Grupo Neiva's product ecosystem.", "Desarrollo de interfaces en el ecosistema de Grupo Neiva."]],
    layers: [
      { name: "Frontend", tech: "React", detail: ["Card atual indica React; histórico do Grupo Neiva cita Vue/Nuxt. Validar a stack específica.", "The card lists React; the group work history mentions Vue/Nuxt. Validate this project's stack.", "La tarjeta indica React; la experiencia menciona Vue/Nuxt. Validar la stack específica."], evidence: "portfolio" },
      { name: "Backend / Data", tech: "Node.js · MongoDB", detail: ["Dados do card atual, pendentes de revisão pela autora.", "Current card data, pending author review.", "Datos de la tarjeta, pendientes de revisión."], evidence: "portfolio" },
    ],
    decisions: [{ title: ["Busca e categorias", "Search and categories", "Búsqueda y categorías"], detail: ["Estrutura visual proposta para o catálogo. Confirmar filtros, paginação e implementação da busca.", "Proposed catalog visual structure. Confirm filters, pagination and search implementation.", "Estructura visual propuesta. Confirmar filtros, paginación y búsqueda."], evidence: "mock" }],
    pending: [["Validar toda a stack e o escopo individual antes de tratar este case como versão final.", "Validate the entire stack and individual scope before treating this case as final.", "Validar toda la stack y el alcance individual antes de finalizar."], ["Adicionar capturas e evidências de entrega.", "Add screenshots and delivery evidence.", "Añadir capturas y evidencias de entrega."]], sources: [],
  },
];

export const findCaseByProject = (projectId: number) => caseStudies.find(item => item.projectId === projectId);
