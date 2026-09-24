import type { CaseStudy } from "./caseStudies";

export const horusCase: CaseStudy = {
  "slug": "horus",
  "projectId": 1,
  "title": "HORUS",
  "kind": "billing",
  "accent": "#89bfff",
  "coverImage": "/cases/horus/login.png",
  "category": [
    "Faturamento médico · Web",
    "Medical billing · Web",
    "Facturación médica · Web"
  ],
  "summary": [
    "Site institucional e aplicação de faturamento médico para clínicas, médicos e laboratórios: landing page em Vue, aplicação em React com dashboards de faturamento e API REST em Laravel.",
    "Institutional website and medical billing application for clinics, doctors and laboratories: a Vue website, a React application with billing dashboards and a Laravel REST API.",
    "Sitio institucional y aplicación de facturación médica para clínicas, médicos y laboratorios: sitio en Vue, aplicación en React con dashboards de facturación y API REST en Laravel."
  ],
  "role": "Software Developer · Full stack",
  "sourceNote": [
    "Repositórios consultados somente para leitura em /Users/brunaeduarda/Documents/workspace/Horus (landing-page-horus-faturamento, portal-frontend, backend) em 24/09/2026, para conferir package.json, composer.json e index.html. Capturas do site e do login são reais, fornecidas pela autora — substituem a reconstrução visual usada antes. Sem acesso autenticado à aplicação e sem alterações nos repositórios reais; esta atualização ficou restrita ao conteúdo do portfólio, por decisão da autora.",
    "Repositories reviewed read-only at /Users/brunaeduarda/Documents/workspace/Horus (landing-page-horus-faturamento, portal-frontend, backend) on 2026-09-24, to check package.json, composer.json and index.html. Website and login screenshots are real, provided by the author — replacing the earlier visual reconstruction. No authenticated application access and no changes to the real repositories; this update was limited to portfolio content, per the author's decision.",
    "Repositorios consultados solo lectura en /Users/brunaeduarda/Documents/workspace/Horus (landing-page-horus-faturamento, portal-frontend, backend) el 24/09/2026, para revisar package.json, composer.json e index.html. Las capturas del sitio y del login son reales, provistas por la autora, y reemplazan la reconstrucción visual anterior. Sin acceso autenticado y sin cambios en los repositorios reales; esta actualización se limitó al contenido del portafolio, por decisión de la autora."
  ],
  "challenge": [
    "Apoiar uma operação de faturamento médico que envolve guias, glosas e conciliação de repasses, com um site institucional que converte visitantes e uma aplicação com autenticação, dashboards e regras de negócio.",
    "Support a medical billing operation involving claims, denied claims and payment reconciliation, with an institutional website that converts visitors and an application with authentication, dashboards and business rules.",
    "Apoyar una operación de facturación médica con guías, reclamaciones y conciliación de pagos, con un sitio institucional que convierte visitantes y una aplicación con autenticación, dashboards y reglas de negocio."
  ],
  "contributions": [
    [
      "Desenvolvimento do site institucional com Vue 3, Vite e Tailwind CSS, incluindo o banner de consentimento de cookies e a página de rastreamento de conversão.",
      "Institutional website development with Vue 3, Vite and Tailwind CSS, including the cookie consent banner and the conversion tracking page.",
      "Desarrollo del sitio institucional con Vue 3, Vite y Tailwind CSS, incluyendo el banner de consentimiento de cookies y la página de rastreo de conversión."
    ],
    [
      "Interfaces da aplicação com React, TanStack Router/Query/Table e componentes Radix UI para dashboards de faturamento.",
      "Application interfaces with React, TanStack Router/Query/Table and Radix UI components for billing dashboards.",
      "Interfaces de la aplicación con React, TanStack Router/Query/Table y componentes Radix UI para dashboards de facturación."
    ],
    [
      "APIs REST, autenticação e regras de negócio com PHP e Laravel, incluindo permissões, filas e observabilidade.",
      "REST APIs, authentication and business logic with PHP and Laravel, including permissions, queues and observability.",
      "APIs REST, autenticación y reglas de negocio con PHP y Laravel, incluyendo permisos, colas y observabilidad."
    ],
    [
      "Containers Docker, CI/CD com GitHub Actions e análise estática com SonarQube nos três repositórios.",
      "Docker containers, GitHub Actions CI/CD and SonarQube static analysis across the three repositories.",
      "Contenedores Docker, CI/CD con GitHub Actions y análisis estático con SonarQube en los tres repositorios."
    ]
  ],
  "layers": [
    { "name": "Website", "tech": "Vue 3.5 · Vite 7 · Tailwind CSS 4", "detail": ["VueUse, reka-ui, axios e maska confirmados no package.json da landing page.", "VueUse, reka-ui, axios and maska confirmed in the website's package.json.", "VueUse, reka-ui, axios y maska confirmados en el package.json del sitio."], "evidence": "repository" },
    { "name": "Aplicação (portal)", "tech": "React 19 · TanStack Router / Query / Table · Zustand", "detail": ["Confirmado no package.json do portal-frontend; roteamento e cache de dados via TanStack.", "Confirmed in the portal-frontend package.json; routing and data caching via TanStack.", "Confirmado en el package.json de portal-frontend; enrutamiento y caché de datos con TanStack."], "evidence": "repository" },
    { "name": "UI / formulários", "tech": "Radix UI · React Hook Form · Zod · ApexCharts", "detail": ["Componentes acessíveis, validação de formulários e gráficos de faturamento no portal.", "Accessible components, form validation and billing charts in the portal.", "Componentes accesibles, validación de formularios y gráficos de facturación en el portal."], "evidence": "repository" },
    { "name": "API", "tech": "PHP 8.2 · Laravel 12 · Sanctum · JWT Auth · Spatie Permission", "detail": ["composer.json lista Sanctum e php-open-source-saver/jwt-auth juntos; a divisão de uso entre os dois ainda precisa ser confirmada.", "composer.json lists Sanctum and php-open-source-saver/jwt-auth together; how each is used still needs confirmation.", "composer.json lista Sanctum y php-open-source-saver/jwt-auth juntos; falta confirmar el uso de cada uno."], "evidence": "repository" },
    { "name": "Observabilidade / operação", "tech": "Sentry · Laravel Horizon · Laravel Pulse · Laravel Auditing · S3 (log driver)", "detail": ["Monitoramento de filas, performance, trilha de auditoria e logs em S3 confirmados no composer.json.", "Queue monitoring, performance, audit trail and S3 logging confirmed in composer.json.", "Monitoreo de colas, rendimiento, auditoría y logs en S3 confirmados en composer.json."], "evidence": "repository" },
    { "name": "Qualidade / segurança", "tech": "SonarQube · Pest · GitHub Actions", "detail": ["Análise estática (sonar-project.properties + workflow) nos três repositórios; testes automatizados com Pest hoje só no backend. Snyk, Jest e Playwright ainda não estão configurados.", "Static analysis (sonar-project.properties + workflow) in all three repositories; automated Pest tests exist only in the backend today. Snyk, Jest and Playwright are not configured yet.", "Análisis estático (sonar-project.properties + workflow) en los tres repositorios; pruebas automatizadas con Pest solo en el backend hoy. Snyk, Jest y Playwright aún no están configurados."], "evidence": "repository" },
    { "name": "Marketing / analytics", "tech": "Google Tag Manager · Google Ads & Analytics (gtag) · Microsoft Clarity · Meta Pixel", "detail": ["Scripts confirmados no index.html do site. O banner de consentimento salva a preferência em localStorage, mas não bloqueia o carregamento desses scripts.", "Scripts confirmed in the website's index.html. The consent banner saves the preference in localStorage but does not gate these scripts from loading.", "Scripts confirmados en el index.html del sitio. El banner de consentimiento guarda la preferencia en localStorage, pero no bloquea la carga de esos scripts."], "evidence": "repository" }
  ],
  "decisions": [
    { "title": ["Site e aplicação separados", "Separate website and application", "Sitio y aplicación separados"], "detail": ["O site institucional usa Vue e a aplicação usa React, confirmados nos respectivos package.json. São dois repositórios com stacks e ciclos de deploy independentes.", "The institutional website uses Vue and the application uses React, confirmed in each package.json. They are two repositories with independent stacks and deploy cycles.", "El sitio institucional usa Vue y la aplicación usa React, confirmados en cada package.json. Son dos repositorios con stacks y despliegues independientes."], "evidence": "repository" },
    { "title": ["Dois mecanismos de autenticação na API", "Two authentication mechanisms in the API", "Dos mecanismos de autenticación en la API"], "detail": ["Sanctum e JWT (php-open-source-saver/jwt-auth) estão presentes no mesmo backend. O case não presume qual fluxo usa cada um até essa divisão ser confirmada.", "Sanctum and JWT (php-open-source-saver/jwt-auth) are present in the same backend. The case does not assume which flow uses each one until that split is confirmed.", "Sanctum y JWT (php-open-source-saver/jwt-auth) están presentes en el mismo backend. El caso no asume qué flujo usa cada uno hasta confirmar esa división."], "evidence": "repository" },
    { "title": ["Análise estática antes do scanner de dependências", "Static analysis before a dependency scanner", "Análisis estático antes del escáner de dependencias"], "detail": ["SonarQube já roda via GitHub Actions nos três repositórios. Um scanner de vulnerabilidades de dependências como o Snyk ainda não está configurado.", "SonarQube already runs via GitHub Actions in all three repositories. A dependency vulnerability scanner such as Snyk is not configured yet.", "SonarQube ya corre por GitHub Actions en los tres repositorios. Un escáner de vulnerabilidades de dependencias como Snyk aún no está configurado."], "evidence": "repository" }
  ],
  "pending": [
    [
      "Adicionar Snyk (ou scanner equivalente) para checagem de vulnerabilidades de dependências nos três repositórios; hoje a análise estática usa SonarQube.",
      "Add Snyk (or an equivalent scanner) for dependency vulnerability checks across the three repositories; static analysis today uses SonarQube.",
      "Añadir Snyk (o un escáner equivalente) para revisar vulnerabilidades de dependencias en los tres repositorios; hoy el análisis estático usa SonarQube."
    ],
    [
      "Adicionar testes automatizados com Jest e Playwright no frontend (site e portal); o backend já conta com testes em Pest.",
      "Add automated Jest and Playwright tests to the frontend (website and portal); the backend already has Pest tests.",
      "Añadir pruebas automatizadas con Jest y Playwright en el frontend (sitio y portal); el backend ya cuenta con pruebas en Pest."
    ],
    [
      "Conectar o banner de consentimento de cookies ao carregamento dos scripts de rastreamento (Google Tag Manager, gtag, Clarity, Meta Pixel), hoje carregados de forma incondicional.",
      "Connect the cookie consent banner to the loading of tracking scripts (Google Tag Manager, gtag, Clarity, Meta Pixel), which currently load unconditionally.",
      "Conectar el banner de consentimiento de cookies a la carga de los scripts de rastreo (Google Tag Manager, gtag, Clarity, Meta Pixel), hoy cargados de forma incondicional."
    ],
    [
      "Confirmar a divisão de uso entre Sanctum e JWT na autenticação da API.",
      "Confirm how Sanctum and JWT are each used in API authentication.",
      "Confirmar la división de uso entre Sanctum y JWT en la autenticación de la API."
    ]
  ],
  "sources": [
    { "label": "Horus · website", "url": "https://horusfat.com/" },
    { "label": "Horus · login", "url": "https://app.horusfat.com/auth/login" }
  ],
  "subprojects": [
    {
      "id": "horus-website",
      "title": [
        "Website institucional",
        "Institutional website",
        "Sitio institucional"
      ],
      "url": "https://horusfat.com/",
      "summary": [
        "Site público que apresenta os serviços de faturamento médico da Horus para clínicas, médicos e laboratórios.",
        "Public website presenting Horus's medical billing services to clinics, doctors and laboratories.",
        "Sitio público que presenta los servicios de facturación médica de Horus para clínicas, médicos y laboratorios."
      ],
      "challenge": [
        "Converter visitantes em contatos comerciais para o serviço de faturamento, integrando múltiplos scripts de marketing sem comprometer a performance nem a comunicação com a pessoa usuária.",
        "Convert visitors into sales contacts for the billing service, integrating multiple marketing scripts without harming performance or user communication.",
        "Convertir visitantes en contactos comerciales para el servicio de facturación, integrando varios scripts de marketing sin afectar el rendimiento ni la comunicación con la persona usuaria."
      ],
      "contributions": [
        [
          "Desenvolvimento do site com Vue 3, Vite e Tailwind CSS, com seções institucionais, serviços e plano de investimento.",
          "Website development with Vue 3, Vite and Tailwind CSS, with institutional sections, services and an investment plan.",
          "Desarrollo del sitio con Vue 3, Vite y Tailwind CSS, con secciones institucionales, servicios y plan de inversión."
        ],
        [
          "Integração e manutenção do Google Tag Manager, gtag (Ads e GA4), Microsoft Clarity e Meta Pixel, além do banner de consentimento de cookies e da página de rastreamento de conversão.",
          "Integration and maintenance of Google Tag Manager, gtag (Ads and GA4), Microsoft Clarity and Meta Pixel, plus the cookie consent banner and the conversion tracking page.",
          "Integración y mantenimiento de Google Tag Manager, gtag (Ads y GA4), Microsoft Clarity y Meta Pixel, además del banner de consentimiento de cookies y la página de rastreo de conversión."
        ]
      ],
      "layers": [],
      "decisions": [
        {
          "title": [
            "Consentimento sem bloqueio de scripts",
            "Consent without script gating",
            "Consentimiento sin bloqueo de scripts"
          ],
          "detail": [
            "O CookieConsentBar salva a escolha da pessoa usuária em localStorage, mas o Google Tag Manager, o gtag, o Clarity e o Meta Pixel carregam de forma incondicional no index.html, sem depender dessa escolha.",
            "CookieConsentBar saves the user's choice in localStorage, but Google Tag Manager, gtag, Clarity and Meta Pixel load unconditionally in index.html, independent of that choice.",
            "CookieConsentBar guarda la elección de la persona usuaria en localStorage, pero Google Tag Manager, gtag, Clarity y Meta Pixel cargan de forma incondicional en index.html, sin depender de esa elección."
          ],
          "evidence": "repository"
        }
      ],
      "outcome": [
        "Site público que apresenta os serviços de faturamento médico da Horus para clínicas, médicos e laboratórios.",
        "Public website presenting Horus's medical billing services to clinics, doctors and laboratories.",
        "Sitio público que presenta los servicios de facturación médica de Horus para clínicas, médicos y laboratorios."
      ],
      "images": [
        { "src": "/cases/horus/landing.png", "caption": ["Apresentação institucional", "Institutional presentation", "Presentación institucional"] }
      ],
      "features": [
        {
          "title": ["Apresentação institucional", "Institutional presentation", "Presentación institucional"],
          "description": [
            "Página pública com a apresentação dos serviços de faturamento médico. Captura real do site em produção.",
            "Public page presenting the medical billing services. Real screenshot of the production website.",
            "Página pública con la presentación de los servicios de facturación médica. Captura real del sitio en producción."
          ],
          "image": "/cases/horus/landing.png",
          "tags": ["Vue 3", "Vite", "Tailwind CSS"]
        },
        {
          "title": ["Consentimento e rastreamento", "Consent and tracking", "Consentimiento y rastreo"],
          "description": [
            "Banner de cookies com preferência salva em localStorage. Google Tag Manager, gtag (Ads e GA4), Microsoft Clarity e Meta Pixel confirmados no index.html do site.",
            "Cookie banner with the preference saved in localStorage. Google Tag Manager, gtag (Ads and GA4), Microsoft Clarity and Meta Pixel confirmed in the website's index.html.",
            "Banner de cookies con la preferencia guardada en localStorage. Google Tag Manager, gtag (Ads y GA4), Microsoft Clarity y Meta Pixel confirmados en el index.html del sitio."
          ],
          "tags": ["Google Analytics", "Microsoft Clarity", "Cookie consent"]
        }
      ]
    },
    {
      "id": "horus-app",
      "title": [
        "Aplicação Horus",
        "Horus application",
        "Aplicación Horus"
      ],
      "url": "https://app.horusfat.com/auth/login",
      "summary": [
        "Aplicação React com dashboards de faturamento, autenticada por uma API REST em Laravel.",
        "React application with billing dashboards, authenticated by a Laravel REST API.",
        "Aplicación React con dashboards de facturación, autenticada por una API REST en Laravel."
      ],
      "challenge": [
        "Oferecer autenticação e dashboards responsivos para uma operação de faturamento com guias, glosas e conciliação de repasses, integrados a uma API com permissões e observabilidade.",
        "Provide authentication and responsive dashboards for a billing operation involving claims, denied claims and payment reconciliation, integrated with an API with permissions and observability.",
        "Ofrecer autenticación y dashboards responsivos para una operación de facturación con guías, reclamaciones y conciliación de pagos, integrados a una API con permisos y observabilidad."
      ],
      "contributions": [
        [
          "Interfaces com React 19, TanStack Router/Query/Table, Radix UI e ApexCharts para dashboards de faturamento.",
          "Interfaces with React 19, TanStack Router/Query/Table, Radix UI and ApexCharts for billing dashboards.",
          "Interfaces con React 19, TanStack Router/Query/Table, Radix UI y ApexCharts para dashboards de facturación."
        ],
        [
          "APIs REST, autenticação, permissões e regras de negócio com Laravel, Sanctum, JWT e Spatie Permission.",
          "REST APIs, authentication, permissions and business logic with Laravel, Sanctum, JWT and Spatie Permission.",
          "APIs REST, autenticación, permisos y reglas de negocio con Laravel, Sanctum, JWT y Spatie Permission."
        ],
        [
          "Observabilidade com Sentry, Laravel Horizon, Pulse e Auditing, e entrega com Docker e GitHub Actions.",
          "Observability with Sentry, Laravel Horizon, Pulse and Auditing, and delivery with Docker and GitHub Actions.",
          "Observabilidad con Sentry, Laravel Horizon, Pulse y Auditing, y entrega con Docker y GitHub Actions."
        ]
      ],
      "layers": [],
      "decisions": [
        {
          "title": [
            "Observabilidade e infraestrutura",
            "Observability and infrastructure",
            "Observabilidad e infraestructura"
          ],
          "detail": [
            "Sentry, Laravel Horizon, Pulse e Auditing, mais logs em S3, confirmados no composer.json. Docker e GitHub Actions cuidam do build e do deploy.",
            "Sentry, Laravel Horizon, Pulse and Auditing, plus S3 logging, confirmed in composer.json. Docker and GitHub Actions handle the build and deployment.",
            "Sentry, Laravel Horizon, Pulse y Auditing, además de logs en S3, confirmados en composer.json. Docker y GitHub Actions se encargan del build y el despliegue."
          ],
          "evidence": "repository"
        }
      ],
      "outcome": [
        "Aplicação React com dashboards de faturamento, autenticada por uma API REST em Laravel.",
        "React application with billing dashboards, authenticated by a Laravel REST API.",
        "Aplicación React con dashboards de facturación, autenticada por una API REST en Laravel."
      ],
      "images": [
        { "src": "/cases/horus/login.png", "caption": ["Acesso à plataforma", "Platform access", "Acceso a la plataforma"] }
      ],
      "features": [
        {
          "title": ["Acesso à plataforma", "Platform access", "Acceso a la plataforma"],
          "description": [
            "Tela de login real de app.horusfat.com, com e-mail, senha e recuperação de acesso. Captura fornecida pela autora.",
            "Real login screen from app.horusfat.com, with email, password and account recovery. Screenshot provided by the author.",
            "Pantalla de login real de app.horusfat.com, con correo, contraseña y recuperación de acceso. Captura proporcionada por la autora."
          ],
          "image": "/cases/horus/login.png",
          "tags": ["React", "TanStack Router", "Zod"]
        },
        {
          "title": ["API e regras de negócio", "API and business logic", "API y reglas de negocio"],
          "description": [
            "Autenticação, permissões e regras de negócio da operação de faturamento, com Sanctum, JWT e Spatie Permission.",
            "Authentication, permissions and business logic for the billing operation, with Sanctum, JWT and Spatie Permission.",
            "Autenticación, permisos y reglas de negocio de la operación de facturación, con Sanctum, JWT y Spatie Permission."
          ],
          "tags": ["Laravel", "Sanctum", "Spatie Permission"]
        }
      ]
    }
  ]
};
