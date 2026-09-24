import type { CaseSubproject } from "./caseStudies";

export const coopanestProjects: CaseSubproject[] = [
  {
    "id": "landing-page",
    "title": [
      "Landing page institucional",
      "Institutional website",
      "Sitio institucional"
    ],
    "url": "https://www.coopanestrio.org.br/",
    "summary": [
      "Elaboração e desenvolvimento do site institucional, integrado ao Strapi para a equipe de marketing manter os conteúdos da cooperativa.",
      "Planning and development of the institutional website, integrated with Strapi so the marketing team can maintain the cooperative’s content.",
      "Elaboración y desarrollo del sitio institucional, integrado con Strapi para que marketing mantenga los contenidos de la cooperativa."
    ],
    "challenge": [
      "Organizar informações, serviços e campanhas da CoopanestRIO em uma experiência responsiva e dar autonomia à equipe de marketing para manter o conteúdo editorial, sem depender de alterações no código a cada atualização.",
      "Organize CoopanestRIO’s information, services and campaigns into a responsive experience and give marketing autonomy to maintain editorial content without code changes for each update.",
      "Organizar información, servicios y campañas de CoopanestRIO en una experiencia responsiva y dar autonomía a marketing para mantener contenido editorial sin modificar código en cada actualización."
    ],
    "contributions": [
      [
        "Elaboração da estrutura das páginas e implementação de navegação, seções institucionais, banners e componentes responsivos, conectando comunicação, serviços e adesão à cooperativa.",
        "Planning the page structure and implementing navigation, institutional sections, banners and responsive components, connecting communication, services and membership.",
        "Elaboración de la estructura de páginas e implementación de navegación, secciones institucionales, banners y componentes responsivos, conectando comunicación, servicios y adhesión."
      ],
      [
        "Integração do frontend Nuxt com as APIs do Strapi para disponibilizar banners, comunicados, newsletter, FAQ, galeria e convênios mantidos pela equipe de marketing.",
        "Integration of the Nuxt frontend with Strapi APIs to present banners, announcements, newsletters, FAQs, galleries and health plans maintained by marketing.",
        "Integración del frontend Nuxt con las APIs de Strapi para mostrar banners, comunicados, newsletter, FAQ, galería y convenios mantenidos por marketing."
      ],
      [
        "Mapeamento de textos, imagens, links, arquivos e relações do CMS para os componentes do site, com ordenação de conteúdo e tratamento de carregamento e erro.",
        "Mapping CMS text, images, links, files and relations to website components, with content ordering and loading and error handling.",
        "Mapeo de textos, imágenes, enlaces, archivos y relaciones del CMS a los componentes del sitio, con ordenación y estados de carga y error."
      ],
      [
        "Formulário de adesão em etapas com dados pessoais, bancários e anexos; integração do pré-cadastro e dos canais de contato e denúncia.",
        "Multi-step membership form with personal and banking details and attachments; pre-registration and contact/reporting integrations.",
        "Formulario de adhesión por etapas con datos personales, bancarios y adjuntos; integración de prerregistro y canales de contacto y denuncia."
      ],
      [
        "Integração de Google Analytics e Microsoft Clarity para acompanhar o uso e apoiar a evolução da experiência.",
        "Google Analytics and Microsoft Clarity integration to monitor usage and support experience improvements.",
        "Integración de Google Analytics y Microsoft Clarity para observar el uso y mejorar la experiencia."
      ]
    ],
    "layers": [
      {
        "name": "Frontend",
        "tech": "Nuxt 4 · Vue 3 · TypeScript",
        "detail": [
          "Páginas e composables com Composition API; aplicação configurada com renderização no cliente.",
          "Pages and composables using Composition API; client-side rendering configuration.",
          "Páginas y composables con Composition API; renderizado en el cliente."
        ],
        "evidence": "repository"
      },
      {
        "name": "UI",
        "tech": "Tailwind CSS 4 · PrimeVue 4",
        "detail": [
          "Estilização responsiva, componentes de formulário, tema Aura e carrosséis.",
          "Responsive styling, form components, Aura theme and carousels.",
          "Estilos responsivos, formularios, tema Aura y carruseles."
        ],
        "evidence": "repository"
      },
      {
        "name": "Estado / API",
        "tech": "Pinia · Axios · useFetch",
        "detail": [
          "Estado dos formulários e integração com APIs de conteúdo e pré-cadastro.",
          "Form state and integration with content and pre-registration APIs.",
          "Estado de formularios e integración con APIs de contenido y prerregistro."
        ],
        "evidence": "repository"
      },
      {
        "name": "Analytics",
        "tech": "Google Analytics · Microsoft Clarity",
        "detail": [
          "Integração com nuxt-gtag e nuxt-clarity-analytics declarada na configuração Nuxt para análise de uso do produto.",
          "nuxt-gtag and nuxt-clarity-analytics integrated through Nuxt configuration for product usage analysis.",
          "Integración de nuxt-gtag y nuxt-clarity-analytics en la configuración Nuxt para analizar el uso del producto."
        ],
        "evidence": "repository"
      },
      {
        "name": "CMS",
        "tech": "Strapi · REST API",
        "detail": [
          "Gestão editorial pela equipe de marketing em um painel separado do frontend. O Nuxt consome coleções, mídias e relações do CMS por API.",
          "Marketing manages editorial content in a panel separate from the frontend. Nuxt consumes CMS collections, media and relations through APIs.",
          "Marketing gestiona contenido editorial en un panel separado del frontend. Nuxt consume colecciones, medios y relaciones del CMS por API."
        ],
        "evidence": "repository"
      }
    ],
    "decisions": [
      {
        "title": [
          "Conteúdo gerenciado pelo marketing",
          "Content managed by marketing",
          "Contenido gestionado por marketing"
        ],
        "detail": [
          "Strapi mantém textos, imagens e publicações; o Nuxt apresenta o conteúdo via API. A equipe de marketing atualiza o site sem alterar o frontend.",
          "Strapi holds text, images and publications; Nuxt presents them through APIs. Marketing updates content without changing the frontend.",
          "Strapi gestiona textos, imágenes y publicaciones; Nuxt los presenta por API. Marketing actualiza contenido sin modificar el frontend."
        ],
        "evidence": "repository"
      },
      {
        "title": [
          "Componentes e integrações reutilizáveis",
          "Reusable components and integrations",
          "Componentes e integraciones reutilizables"
        ],
        "detail": [
          "Componentes responsivos e composables de conteúdo padronizam as páginas. O formulário de adesão usa etapas e estado compartilhado em Pinia.",
          "Responsive components and content composables standardize pages. The membership form uses steps and shared Pinia state.",
          "Componentes responsivos y composables estandarizan las páginas. El formulario de adhesión usa etapas y estado compartido en Pinia."
        ],
        "evidence": "repository"
      }
    ],
    "outcome": [
      "Site institucional com gestão editorial no Strapi: a equipe de marketing mantém os conteúdos, enquanto o frontend preserva a identidade visual, a navegação e os fluxos de serviço e pré-cadastro.",
      "Institutional website with editorial management in Strapi: marketing maintains content while the frontend preserves visual identity, navigation, services and pre-registration flows.",
      "Sitio institucional con gestión editorial en Strapi: marketing mantiene contenidos y el frontend conserva identidad visual, navegación, servicios y prerregistro."
    ],
    "images": [
      {
        "src": "/cases/coopanestrio/landing-page.png",
        "caption": [
          "Landing page institucional — captura do site público em 23/09/2026.",
          "Institutional website — public site captured on 2026-09-23.",
          "Sitio institucional — captura del sitio público el 23/09/2026."
        ]
      }
    ],
    "features": [
      {
        "title": [
          "Presença institucional",
          "Institutional presence",
          "Presencia institucional"
        ],
        "description": [
          "Banners, atalhos de serviços e navegação conectam as diferentes jornadas da cooperativa.",
          "Banners, service shortcuts and navigation connect the cooperative’s different journeys.",
          "Banners, accesos a servicios y navegación conectan los recorridos de la cooperativa."
        ],
        "tags": [
          "Nuxt 4",
          "Vue 3",
          "PrimeVue"
        ],
        "image": "/cases/coopanestrio/landing-page.png"
      },
      {
        "title": [
          "Rede de convênios",
          "Health plan network",
          "Red de convenios"
        ],
        "description": [
          "Consulta de convênios com conteúdo obtido por API e apresentação organizada para o cooperado.",
          "Health plan directory with API-driven content organized for members.",
          "Consulta de convenios con contenido por API organizado para el cooperado."
        ],
        "tags": [
          "API",
          "Composables"
        ],
        "image": "/cases/coopanestrio/agreements.png"
      },
      {
        "title": [
          "Jornada de adesão",
          "Membership journey",
          "Proceso de adhesión"
        ],
        "description": [
          "Cadastro dividido em etapas, com estado compartilhado e envio de dados e anexos ao pré-cadastro.",
          "Multi-step registration with shared state and submission of data and attachments.",
          "Registro por etapas con estado compartido y envío de datos y adjuntos."
        ],
        "tags": [
          "Pinia",
          "FormData",
          "Axios"
        ],
        "image": "/cases/coopanestrio/membership.png"
      },
      {
        "title": [
          "Conteúdo editorial",
          "Editorial content",
          "Contenido editorial"
        ],
        "description": [
          "A equipe de marketing mantém edições, matérias, imagens e PDFs no Strapi. O site consulta esse conteúdo por API e o apresenta na estrutura editorial da newsletter.",
          "Marketing maintains editions, articles, images and PDFs in Strapi. The website queries that content through APIs and presents it in the newsletter layout.",
          "Marketing mantiene ediciones, artículos, imágenes y PDFs en Strapi. El sitio consulta el contenido por API y lo presenta en la estructura de newsletter."
        ],
        "tags": [
          "Strapi",
          "REST API",
          "Marketing"
        ],
        "image": "/cases/coopanestrio/newsletter.png"
      }
    ]
  },
  {
    "id": "portal-cooperado",
    "title": [
      "Portal do Cooperado",
      "Member portal",
      "Portal del cooperado"
    ],
    "url": "https://portal-cooperado.coopanestrio.org.br/auth/login",
    "summary": [
      "Uma área de trabalho para acompanhar guias, produção e recebimentos.",
      "A workspace for tracking medical claims, activity and payments.",
      "Un espacio de trabajo para consultar guías, producción y cobros."
    ],
    "challenge": [
      "Reunir rotinas operacionais e financeiras em uma interface que permita ao cooperado emitir guias, acompanhar pendências e consultar seus recebimentos.",
      "Bring operational and financial workflows into an interface where members can issue claims, track pending items and check payments.",
      "Reunir procesos operativos y financieros en una interfaz para emitir guías, seguir pendientes y consultar cobros."
    ],
    "contributions": [
      [
        "Desenvolvimento do dashboard com totais de faturamento, recebimentos, glosas e próximos pagamentos, filtros por período e convênio e controle de exibição dos valores.",
        "Dashboard development with billing, payments, denied claims and upcoming payments, period and health-plan filters and amount visibility controls.",
        "Desarrollo del dashboard con facturación, cobros, glosas y próximos pagos, filtros por período y convenio y control de visibilidad de valores."
      ],
      [
        "Fluxos de emissão e consulta de guias, rascunhos, anexos e PDFs; listagem com busca, filtros, ordenação, paginação e visualização em tabela ou cards.",
        "Claim creation and lookup, drafts, attachments and PDFs; listing with search, filters, sorting, pagination and table or card views.",
        "Emisión y consulta de guías, borradores, adjuntos y PDFs; listado con búsqueda, filtros, ordenación, paginación y vistas de tabla o tarjetas."
      ],
      [
        "Integração dos módulos de demonstrativos, previsão de pagamentos, IR, INSS e perfil; formulários validados e tratamento de sessão expirada.",
        "Integration of statements, payment forecasts, income tax, social security and profile modules; validated forms and expired-session handling.",
        "Integración de módulos de comprobantes, previsión de pagos, IR, INSS y perfil; formularios validados y gestión de sesión caducada."
      ],
      [
        "Integração de Google Analytics e Microsoft Clarity para acompanhar o uso e apoiar a evolução da experiência.",
        "Google Analytics and Microsoft Clarity integration to monitor usage and support experience improvements.",
        "Integración de Google Analytics y Microsoft Clarity para observar el uso y mejorar la experiencia."
      ],
      [
        "Integração da Cooper IA com n8n, incluindo interface de chat, conversas recentes, histórico de mensagens e tratamento de falhas no envio.",
        "Cooper IA integration with n8n, including chat interface, recent conversations, message history and send-error handling.",
        "Integración de Cooper IA con n8n, con interfaz de chat, conversaciones recientes, historial y gestión de errores de envío."
      ],
      [
        "Desenvolvimento backend em PHP e integração das APIs com os fluxos do Portal do Cooperado.",
        "Backend development in PHP and API integration with Member Portal workflows.",
        "Desarrollo backend en PHP e integración de APIs con los flujos del Portal del Cooperado."
      ]
    ],
    "layers": [
      {
        "name": "Aplicação",
        "tech": "Nuxt 4 · Vue 3 · TypeScript",
        "detail": [
          "Nuxt Layers separa domínios como autenticação, dashboard, guias e pagamentos; shared reúne recursos comuns.",
          "Nuxt Layers separates authentication, dashboard, claims and payments; shared holds common resources.",
          "Nuxt Layers separa autenticación, dashboard, guías y pagos; shared reúne recursos comunes."
        ],
        "evidence": "repository"
      },
      {
        "name": "Interface",
        "tech": "Tailwind CSS 4 · shadcn-nuxt · Reka UI",
        "detail": [
          "Componentes compartilhados, tabelas com TanStack Vue Table e gráficos com Unovis.",
          "Shared components, TanStack Vue Table tables and Unovis charts.",
          "Componentes compartidos, tablas con TanStack Vue Table y gráficos con Unovis."
        ],
        "evidence": "repository"
      },
      {
        "name": "Estado / integração",
        "tech": "Pinia · Pinia Colada · REST",
        "detail": [
          "Stores para sessão e preferências; consultas remotas, filtros e estados de carregamento organizados por domínio.",
          "Stores for session and preferences; remote queries, filters and loading states organized by domain.",
          "Stores para sesión y preferencias; consultas remotas, filtros y estados de carga por dominio."
        ],
        "evidence": "repository"
      },
      {
        "name": "Validação",
        "tech": "Zod · vee-validate",
        "detail": [
          "Schemas tipados para formulários e dados recebidos das APIs.",
          "Typed schemas for forms and API responses.",
          "Schemas tipados para formularios y respuestas de API."
        ],
        "evidence": "repository"
      },
      {
        "name": "Qualidade",
        "tech": "Vitest · Playwright",
        "detail": [
          "Repositório com testes unitários e e2e para fluxos como login, dashboard, guias e demonstrativos; sem alegação de cobertura ou execução nesta análise.",
          "Repository includes unit and e2e tests for login, dashboard, claims and statements; no coverage or execution claim is made in this review.",
          "Repositorio con pruebas unitarias y e2e de login, dashboard, guías y comprobantes; sin afirmar cobertura ni ejecución en este análisis."
        ],
        "evidence": "repository"
      },
      {
        "name": "Analytics",
        "tech": "Google Analytics · Microsoft Clarity",
        "detail": [
          "Integração com nuxt-gtag e nuxt-clarity-analytics declarada na configuração Nuxt para análise de uso do produto.",
          "nuxt-gtag and nuxt-clarity-analytics integrated through Nuxt configuration for product usage analysis.",
          "Integración de nuxt-gtag y nuxt-clarity-analytics en la configuración Nuxt para analizar el uso del producto."
        ],
        "evidence": "repository"
      },
      {
        "name": "Assistente virtual",
        "tech": "n8n · REST API · Zod",
        "detail": [
          "Cooper IA integrada com n8n. O frontend consome endpoints de conversas e mensagens e valida as respostas da API com Zod.",
          "Cooper IA integrated with n8n. The frontend consumes conversation and message endpoints and validates API responses with Zod.",
          "Cooper IA integrada con n8n. El frontend consume endpoints de conversaciones y mensajes y valida respuestas con Zod."
        ],
        "evidence": "portfolio"
      },
      {
        "name": "Backend",
        "tech": "PHP · REST API",
        "detail": [
          "Desenvolvimento backend em PHP, principalmente para as APIs e integrações do Portal do Cooperado.",
          "Backend development in PHP, primarily for the Member Portal APIs and integrations.",
          "Desarrollo backend en PHP, principalmente para las APIs e integraciones del Portal del Cooperado."
        ],
        "evidence": "portfolio"
      }
    ],
    "decisions": [
      {
        "title": [
          "Módulos por domínio",
          "Domain modules",
          "Módulos por dominio"
        ],
        "detail": [
          "Nuxt Layers organiza guias, pagamentos e autenticação; shared concentra os recursos comuns. PHP sustenta o backend e as APIs do portal.",
          "Nuxt Layers organizes claims, payments and authentication; shared holds common resources. PHP supports the portal backend and APIs.",
          "Nuxt Layers organiza guías, pagos y autenticación; shared reúne recursos comunes. PHP sustenta el backend y las APIs."
        ],
        "evidence": "repository"
      },
      {
        "title": [
          "Estado e comunicação com as APIs",
          "State and API communication",
          "Estado y comunicación con APIs"
        ],
        "detail": [
          "Pinia mantém sessão e preferências; Pinia Colada organiza consultas remotas. Busca com debounce evita chamadas excessivas, e o cliente HTTP centraliza a detecção de sessão expirada.",
          "Pinia holds session and preferences; Pinia Colada organizes remote queries. Debounced search avoids excessive requests, and the HTTP client centralizes expired-session detection.",
          "Pinia guarda sesión y preferencias; Pinia Colada organiza consultas remotas. El debounce evita peticiones excesivas y el cliente HTTP centraliza la detección de sesión caducada."
        ],
        "evidence": "repository"
      },
      {
        "title": [
          "Cooper IA integrada com n8n",
          "Cooper IA integrated with n8n",
          "Cooper IA integrada con n8n"
        ],
        "detail": [
          "O chat consome uma API de conversas integrada com n8n. Histórico, envio e erros ficam no composable, e Zod valida as respostas recebidas.",
          "The chat consumes a conversation API integrated with n8n. A composable handles history, sending and errors; Zod validates responses.",
          "El chat consume una API integrada con n8n. Un composable gestiona historial, envío y errores; Zod valida las respuestas."
        ],
        "evidence": "portfolio"
      }
    ],
    "outcome": [
      "Fluxos de guias e consultas financeiras reunidos em módulos, com filtros, estados de erro e preferências de visualização.",
      "Claims and financial workflows brought together in modules with filters, error states and display preferences.",
      "Procesos de guías y consultas financieras reunidos en módulos, con filtros, estados de error y preferencias visuales."
    ],
    "images": [
      {
        "src": "/cases/coopanestrio/portal-dashboard.png",
        "caption": [
          "Dashboard do Portal do Cooperado — captura fornecida pela autora.",
          "Member portal dashboard — screenshot provided by the author.",
          "Dashboard del portal — captura proporcionada por la autora."
        ]
      },
      {
        "src": "/cases/coopanestrio/portal-guides.png",
        "caption": [
          "Controle de guias — captura fornecida pela autora.",
          "Claim management — screenshot provided by the author.",
          "Control de guías — captura proporcionada por la autora."
        ]
      },
      {
        "src": "/cases/coopanestrio/portal-login.png",
        "caption": [
          "Acesso ao Portal do Cooperado — captura fornecida pela autora.",
          "Member portal access — screenshot provided by the author.",
          "Acceso al portal — captura proporcionada por la autora."
        ]
      },
      {
        "src": "/cases/coopanestrio/portal-assistant.png",
        "caption": [
          "Cooper IA — assistente virtual integrado com n8n. Captura fornecida pela autora.",
          "Cooper IA — virtual assistant integrated with n8n. Screenshot provided by the author.",
          "Cooper IA — asistente virtual integrado con n8n. Captura proporcionada por la autora."
        ]
      }
    ],
    "features": [
      {
        "title": [
          "Acesso ao portal",
          "Portal access",
          "Acceso al portal"
        ],
        "description": [
          "Entrada para cooperados e administradores, com identificação por CRM, senha e acesso à recuperação de senha.",
          "Entry for members and administrators, with CRM identification, password and password recovery access.",
          "Acceso para cooperados y administradores, con identificación por CRM, contraseña y recuperación de contraseña."
        ],
        "tags": [
          "Nuxt 4",
          "Autenticação",
          "Zod"
        ],
        "image": "/cases/coopanestrio/portal-login.png"
      },
      {
        "title": [
          "Dashboard",
          "Dashboard",
          "Dashboard"
        ],
        "description": [
          "Totais de faturamento, glosas e recebimentos respondem aos filtros de período e convênio. A exibição de valores segue uma preferência compartilhada.",
          "Billing, denied claims and payment totals respond to period and health-plan filters. Amount visibility follows a shared preference.",
          "Los totales de facturación, glosas y cobros responden a filtros de período y convenio. La visibilidad de importes es una preferencia compartida."
        ],
        "tags": [
          "Dashboard",
          "Pinia",
          "REST"
        ],
        "image": "/cases/coopanestrio/portal-dashboard.png",
        "softened": true
      },
      {
        "title": [
          "Cooper IA",
          "Cooper IA",
          "Cooper IA"
        ],
        "description": [
          "Assistente integrado com n8n para apoiar o cooperado. A interface permite iniciar conversas, enviar perguntas e retomar o histórico; a API retorna a resposta do assistente na mesma operação de envio.",
          "Assistant integrated with n8n to support members. The interface supports new conversations, questions and conversation history; the API returns the assistant reply in the same send operation.",
          "Asistente integrado con n8n para apoyar al cooperado. Permite iniciar conversaciones, enviar preguntas y retomar el historial; la API devuelve la respuesta en la misma operación de envío."
        ],
        "tags": [
          "n8n",
          "REST API",
          "Pinia Colada"
        ],
        "image": "/cases/coopanestrio/portal-assistant.png",
        "softened": true
      },
      {
        "title": [
          "Controle de guias",
          "Claim management",
          "Control de guías"
        ],
        "description": [
          "Controle de guias com busca, filtros, ordenação e paginação. Ações para emitir e editar guias, consultar detalhes e anexos, visualizar PDFs e cancelar guias, integrando o acompanhamento à emissão de documentos.",
          "Claim management with search, filters, sorting and pagination. Actions to issue and edit claims, inspect details and attachments, view PDFs and cancel claims, connecting tracking with document issuance.",
          "Control de guías con búsqueda, filtros, ordenación y paginación. Acciones para emitir y editar guías, consultar detalles y adjuntos, visualizar PDFs y cancelar guías, conectando el seguimiento con la emisión de documentos."
        ],
        "tags": [
          "VueUse",
          "TanStack Table",
          "Nuxt Layers"
        ],
        "image": "/cases/coopanestrio/portal-guides.png",
        "softened": true
      }
    ]
  }
];
