import { evoluirCase } from "./evoluirCase";
import { dentalUniCase } from "./dentalUniCase";
import { horusCase } from "./horusCase";
import { econowiseCase } from "./econowiseCase";
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
  secondaryImage?: string;
  secondaryImageTitle?: CaseCopy;
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
export interface CaseGallery {
  id: string;
  title: CaseCopy;
  url: string;
  features: CaseFeature[];
  portrait?: boolean;
}
export interface CaseStudy {
  evidence?: Evidence;
  gallery?: CaseGallery;
  status?: CaseCopy;
  sourceNote?: CaseCopy;
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
  horusCase,
  dentalUniCase,
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
  "pending": [
    [
      "Adicionar Snyk (ou scanner equivalente) para checagem de vulnerabilidades de dependências nos dois repositórios.",
      "Add Snyk (or an equivalent scanner) for dependency vulnerability checks in both repositories.",
      "Añadir Snyk (o un escáner equivalente) para revisar vulnerabilidades de dependencias en ambos repositorios."
    ],
    [
      "Estender os testes automatizados (Vitest/Playwright) para a landing page; hoje presentes só no Portal do Cooperado.",
      "Extend automated tests (Vitest/Playwright) to the website; currently present only in the Member Portal.",
      "Extender las pruebas automatizadas (Vitest/Playwright) al sitio institucional; hoy presentes solo en el Portal del Cooperado."
    ]
  ],
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
  evoluirCase,
  econowiseCase,

];

export const findCaseByProject = (projectId: number) => caseStudies.find(item => item.projectId === projectId);
