import type { CaseStudy } from "./caseStudies";

export const evoluirCase: CaseStudy = {
  "slug": "evoluir",
  "projectId": 3,
  "title": "EVOLUIR",
  "kind": "education",
  "accent": "#f7a886",
  "coverImage": "/cases/evoluir/landing.png",
  "category": [
    "Educação · Landing page, sistema e PNLD",
    "Education · Website, system and PNLD",
    "Educación · Sitio, sistema y PNLD"
  ],
  "summary": [
    "Projetos educacionais no Grupo Neiva: landing page Evoluir, evolução do sistema e catálogo PNLD de 2024. Comunicação institucional, interfaces e integrações com Vue, Nuxt e PHP/Laravel.",
    "Education projects at Grupo Neiva: the Evoluir website, system development and the 2024 PNLD catalog. Institutional communication, interfaces and integrations with Vue, Nuxt and PHP/Laravel.",
    "Proyectos educativos en Grupo Neiva: sitio Evoluir, evolución del sistema y catálogo PNLD de 2024. Comunicación, interfaces e integraciones con Vue, Nuxt y PHP/Laravel."
  ],
  "role": "Software Developer · Grupo Neiva",
  "evidence": "portfolio",
  "sourceNote": [
    "Stacks históricas e escopo informados pela autora e pela experiência profissional. Capturas públicas atuais e print de login fornecido pela autora; não representam necessariamente a versão de 2024. Sem acesso autenticado ao sistema.",
    "Historical stacks and scope provided by the author and work history. Current public screenshots and author-provided login image may differ from the 2024 version. No authenticated system access.",
    "Stacks históricas y alcance informados por la autora y experiencia profesional. Capturas actuales y login proporcionado por la autora; pueden diferir de 2024. Sin acceso autenticado al sistema."
  ],
  "challenge": [
    "Conectar a apresentação das soluções educacionais, a experiência da plataforma e a descoberta do catálogo editorial em projetos com públicos e stacks próprios.",
    "Connect educational product presentation, platform experience and book discovery across projects with distinct audiences and stacks.",
    "Conectar presentación de soluciones educativas, experiencia de plataforma y catálogo editorial en proyectos con públicos y stacks propios."
  ],
  "contributions": [
    [
      "Desenvolvimento e manutenção da landing page, com seções institucionais, soluções por perfil e acesso à plataforma.",
      "Website development and maintenance, with institutional sections, role-specific solutions and platform access.",
      "Desarrollo y mantenimiento del sitio, con secciones institucionales, soluciones por perfil y acceso a la plataforma."
    ],
    [
      "Desenvolvimento e manutenção de interfaces com Vue 2 e Vue 3.",
      "Interface development and maintenance with Vue 2 and Vue 3.",
      "Desarrollo y mantenimiento de interfaces con Vue 2 y Vue 3."
    ],
    [
      "Desenvolvimento backend e integrações com PHP e Laravel.",
      "Backend development and integrations with PHP and Laravel.",
      "Desarrollo backend e integraciones con PHP y Laravel."
    ],
    [
      "Desenvolvimento da landing page em 2024 com Nuxt 3, Vue 3 e TypeScript, com foco em modularidade, reutilização de componentes e separação de responsabilidades.",
      "Website development in 2024 with Nuxt 3, Vue 3 and TypeScript, focused on modularity, reusable components and separation of concerns.",
      "Desarrollo del sitio en 2024 con Nuxt 3, Vue 3 y TypeScript, con foco en modularidad, componentes reutilizables y separación de responsabilidades."
    ]
  ],
  "layers": [
    {
      "name": "PNLD · 2024",
      "tech": "Nuxt 3 · Vue 3 · TypeScript",
      "detail": [
        "Base tipada e modular para a landing page e o catálogo editorial.",
        "Typed, modular foundation for the website and book catalog.",
        "Base tipada y modular para el sitio y catálogo editorial."
      ],
      "evidence": "portfolio"
    },
    {
      "name": "PNLD · UI / dados",
      "tech": "Tailwind CSS · PrimeVue · Pinia · Axios · useFetch",
      "detail": [
        "Componentes de interface reutilizáveis, gerenciamento de estado e comunicação com APIs.",
        "Reusable interface components, state management and API communication.",
        "Componentes reutilizables, gestión de estado y comunicación con APIs."
      ],
      "evidence": "portfolio"
    },
    {
      "name": "PNLD · CMS / Analytics",
      "tech": "Strapi · Google Analytics · Microsoft Clarity",
      "detail": [
        "Gestão de conteúdo e acompanhamento do uso da aplicação.",
        "Content management and application usage analysis.",
        "Gestión de contenido y análisis de uso de la aplicación."
      ],
      "evidence": "portfolio"
    },
    {
      "name": "Landing page Evoluir",
      "tech": "Vue · Nuxt",
      "detail": [
        "Frontend institucional descrito na experiência profissional.",
        "Institutional frontend documented in the professional experience.",
        "Frontend institucional descrito en la experiencia profesional."
      ],
      "evidence": "portfolio"
    },
    {
      "name": "Sistema Evoluir",
      "tech": "Vue 2 · Vue 3 · PHP · Laravel",
      "detail": [
        "Interfaces, backend e integrações da plataforma educacional.",
        "Education platform interfaces, backend and integrations.",
        "Interfaces, backend e integraciones de la plataforma educativa."
      ],
      "evidence": "portfolio"
    }
  ],
  "decisions": [],
  "pending": [
    [
      "Adicionar Snyk (ou scanner equivalente) e testes automatizados (Jest/Playwright ou equivalente) na landing page e no sistema Evoluir; sem repositório consultado para confirmar o estado atual.",
      "Add Snyk (or an equivalent scanner) and automated tests (Jest/Playwright or equivalent) to the Evoluir website and system; no repository was reviewed to confirm the current state.",
      "Añadir Snyk (o un escáner equivalente) y pruebas automatizadas (Jest/Playwright o equivalente) en el sitio y el sistema Evoluir; sin repositorio consultado para confirmar el estado actual."
    ]
  ],
  "sources": [
    {
      "label": "Evoluir · Landing page",
      "url": "https://plataformaevoluir.com.br/"
    },
    {
      "label": "Evoluir · Sistema",
      "url": "https://app.plataformaevoluir.com.br/"
    },
    {
      "label": "MVC · PNLD",
      "url": "https://mvcpnld.com.br/"
    },
    {
      "label": "Grupo Neiva · MVC Editora",
      "url": "https://mvceditora.com.br/"
    }
  ],
  "subprojects": [
    {
      "id": "evoluir-landing",
      "title": [
        "Landing page Evoluir",
        "Evoluir website",
        "Sitio Evoluir"
      ],
      "url": "https://plataformaevoluir.com.br/",
      "summary": [
        "Apresentação do sistema educacional e de suas soluções para a comunidade escolar.",
        "Presentation of the education system and its solutions for the school community.",
        "Presentación del sistema educativo y sus soluciones para la comunidad escolar."
      ],
      "challenge": [
        "Organizar a comunicação do produto e conduzir escolas da descoberta das soluções à solicitação de uma demonstração.",
        "Organize product communication and guide schools from discovering solutions to requesting a demo.",
        "Organizar la comunicación del producto y llevar a las escuelas desde las soluciones hasta la solicitud de una demostración."
      ],
      "contributions": [
        [
          "Desenvolvimento e manutenção da landing page, com seções institucionais, soluções por perfil e acesso à plataforma.",
          "Website development and maintenance, with institutional sections, role-specific solutions and platform access.",
          "Desarrollo y mantenimiento del sitio, con secciones institucionales, soluciones por perfil y acceso a la plataforma."
        ],
        [
          "Interface responsiva para apresentar recursos educacionais e o formulário de demonstração.",
          "Responsive interface presenting educational resources and the demo request form.",
          "Interfaz responsiva para recursos educativos y formulario de demostración."
        ]
      ],
      "features": [
        {
          "title": [
            "Apresentação do produto",
            "Product presentation",
            "Presentación del producto"
          ],
          "description": [
            "Página pública que apresenta o Sistema Evoluir e conecta a comunicação institucional ao acesso à plataforma.",
            "Public page introducing Sistema Evoluir and connecting institutional communication to platform access.",
            "Página pública que presenta Sistema Evoluir y conecta comunicación institucional y acceso a la plataforma."
          ],
          "image": "/cases/evoluir/landing.png",
          "tags": [
            "Nuxt",
            "Vue",
            "TypeScript"
          ]
        },
        {
          "title": [
            "Soluções para a escola",
            "School solutions",
            "Soluciones para la escuela"
          ],
          "description": [
            "Conteúdo organizado para gestores, professores e estudantes, com recursos educacionais e acompanhamento da aprendizagem.",
            "Content organized for school leaders, teachers and students, with educational resources and learning support.",
            "Contenido para gestores, docentes y estudiantes, con recursos educativos y seguimiento del aprendizaje."
          ],
          "image": "/cases/evoluir/solutions.png",
          "tags": [
            "UI responsiva",
            "Componentes"
          ]
        }
      ],
      "decisions": [
        {
          "title": [
            "Site e sistema com escopos distintos",
            "Separate website and system scopes",
            "Sitio y sistema con alcances distintos"
          ],
          "detail": [
            "A landing page apresenta o produto e encaminha para demonstração ou login. Os fluxos da plataforma ficam no domínio próprio da aplicação.",
            "The website presents the product and directs visitors to demos or login. Platform workflows live on the application domain.",
            "El sitio presenta el producto y lleva a demostración o login. Los flujos de la plataforma viven en su propio dominio."
          ],
          "evidence": "portfolio"
        }
      ],
      "layers": [],
      "outcome": [
        "Apresentação do sistema educacional e de suas soluções para a comunidade escolar.",
        "Presentation of the education system and its solutions for the school community.",
        "Presentación del sistema educativo y sus soluciones para la comunidad escolar."
      ],
      "images": [
        {
          "src": "/cases/evoluir/landing.png",
          "caption": [
            "Apresentação do produto",
            "Product presentation",
            "Presentación del producto"
          ]
        },
        {
          "src": "/cases/evoluir/solutions.png",
          "caption": [
            "Soluções para a escola",
            "School solutions",
            "Soluciones para la escuela"
          ]
        }
      ]
    },
    {
      "id": "evoluir-sistema",
      "title": [
        "Sistema Evoluir",
        "Evoluir system",
        "Sistema Evoluir"
      ],
      "url": "https://app.plataformaevoluir.com.br/",
      "summary": [
        "Plataforma educacional do Grupo Neiva, com interfaces em Vue 2 e Vue 3 e backend em PHP/Laravel.",
        "Education platform owned by Grupo Neiva, with Vue 2 and Vue 3 interfaces and a PHP/Laravel backend.",
        "Plataforma educativa del Grupo Neiva, con interfaces Vue 2 y Vue 3 y backend PHP/Laravel."
      ],
      "challenge": [
        "Evoluir interfaces e integrações de uma plataforma educacional já existente, atendendo diferentes perfis da comunidade escolar.",
        "Evolve interfaces and integrations in an existing education platform serving different school community roles.",
        "Evolucionar interfaces e integraciones de una plataforma educativa existente para distintos perfiles escolares."
      ],
      "contributions": [
        [
          "Desenvolvimento e manutenção de interfaces com Vue 2 e Vue 3.",
          "Interface development and maintenance with Vue 2 and Vue 3.",
          "Desarrollo y mantenimiento de interfaces con Vue 2 y Vue 3."
        ],
        [
          "Desenvolvimento backend e integrações com PHP e Laravel.",
          "Backend development and integrations with PHP and Laravel.",
          "Desarrollo backend e integraciones con PHP y Laravel."
        ]
      ],
      "features": [
        {
          "title": [
            "Acesso à plataforma",
            "Platform access",
            "Acceso a la plataforma"
          ],
          "description": [
            "Tela de acesso com matrícula ou e-mail, recuperação de senha e primeiro acesso. Captura fornecida pela autora.",
            "Access screen with enrollment number or email, password recovery and first access. Screenshot provided by the author.",
            "Pantalla de acceso con matrícula o correo, recuperación de contraseña y primer acceso. Captura proporcionada por la autora."
          ],
          "image": "/cases/evoluir/system-login.png",
          "tags": [
            "Vue 2",
            "Vue 3",
            "PHP",
            "Laravel"
          ]
        },
        {
          "title": [
            "Acesso por perfil",
            "Role-based access",
            "Acceso por perfil"
          ],
          "description": [
            "Seleção da experiência de demonstração para professor ou aluno e família, com jornadas de entrada distintas. Captura fornecida pela autora.",
            "Demo experience selection for teachers or students and families, with distinct entry journeys. Screenshot provided by the author.",
            "Selección de demostración para docentes o estudiantes y familias, con recorridos de entrada distintos. Captura proporcionada por la autora."
          ],
          "image": "/cases/evoluir/system-profiles.png",
          "tags": [
            "Vue",
            "Perfis de acesso"
          ]
        }
      ],
      "decisions": [
        {
          "title": [
            "Evolução entre versões do Vue",
            "Evolution across Vue versions",
            "Evolución entre versiones de Vue"
          ],
          "detail": [
            "Atuação em interfaces com Vue 2 e Vue 3, preservando a integração com o backend PHP/Laravel. O case reúne o trabalho nas duas versões sem pressupor uma migração completa do sistema.",
            "Work on Vue 2 and Vue 3 interfaces while preserving PHP/Laravel backend integration. The case covers both versions without assuming a full system migration.",
            "Trabajo en interfaces Vue 2 y Vue 3 con integración PHP/Laravel. El caso reúne ambas versiones sin suponer una migración completa."
          ],
          "evidence": "portfolio"
        }
      ],
      "layers": [],
      "outcome": [
        "Plataforma educacional com interfaces em Vue 2 e Vue 3 e backend em PHP/Laravel.",
        "Education platform with Vue 2 and Vue 3 interfaces and a PHP/Laravel backend.",
        "Plataforma educativa con interfaces Vue 2 y Vue 3 y backend PHP/Laravel."
      ],
      "images": [
        {
          "src": "/cases/evoluir/system-login.png",
          "caption": [
            "Acesso à plataforma",
            "Platform access",
            "Acceso a la plataforma"
          ]
        },
        {
          "src": "/cases/evoluir/system-profiles.png",
          "caption": [
            "Acesso por perfil",
            "Role-based access",
            "Acceso por perfil"
          ]
        }
      ]
    },
    {
      "id": "evoluir-pnld",
      "title": [
        "PNLD · Catálogo editorial",
        "PNLD · Book catalog",
        "PNLD · Catálogo editorial"
      ],
      "url": "https://mvcpnld.com.br/",
      "summary": [
        "Projeto de 2024 reunido no case Evoluir: landing page para apresentação das obras da MVC Editora no PNLD.",
        "A 2024 project within the Evoluir case: a website presenting MVC Editora books for PNLD.",
        "Proyecto de 2024 dentro del caso Evoluir: sitio de obras de MVC Editora para PNLD."
      ],
      "challenge": [
        "Facilitar a consulta das obras por edição do programa, reunindo informações dos livros e acesso ao conteúdo em uma interface responsiva.",
        "Make books easy to browse by program edition, with book information and content access in a responsive interface.",
        "Facilitar la consulta por edición del programa, con información de libros y acceso al contenido en una interfaz responsiva."
      ],
      "contributions": [
        [
          "Desenvolvimento da landing page em 2024 com Nuxt 3, Vue 3 e TypeScript, com foco em modularidade, reutilização de componentes e separação de responsabilidades.",
          "Website development in 2024 with Nuxt 3, Vue 3 and TypeScript, focused on modularity, reusable components and separation of concerns.",
          "Desarrollo del sitio en 2024 con Nuxt 3, Vue 3 y TypeScript, con foco en modularidad, componentes reutilizables y separación de responsabilidades."
        ],
        [
          "Organização de capas, resumos, códigos e características das obras, com navegação por edição e links de leitura.",
          "Organization of covers, summaries, codes and book characteristics, with edition navigation and reading links.",
          "Organización de portadas, resúmenes, códigos y características, con navegación por edición y enlaces de lectura."
        ]
      ],
      "features": [
        {
          "title": [
            "Catálogo PNLD",
            "PNLD catalog",
            "Catálogo PNLD"
          ],
          "description": [
            "Apresentação das coleções e navegação entre edições do programa. Captura atual do site público.",
            "Collections and navigation across program editions. Current public-site screenshot.",
            "Colecciones y navegación por ediciones del programa. Captura actual del sitio público."
          ],
          "image": "/cases/evoluir/pnld.png",
          "tags": [
            "Nuxt 3",
            "Vue 3",
            "2024"
          ]
        },
        {
          "title": [
            "Obras e informações",
            "Books and information",
            "Obras e información"
          ],
          "description": [
            "Capas, códigos, resumos e acesso à leitura organizados por obra. A captura atual pode incluir conteúdo publicado após 2024.",
            "Covers, codes, summaries and reading access organized by book. The current screenshot may include content published after 2024.",
            "Portadas, códigos, resúmenes y lectura por obra. La captura actual puede incluir contenido posterior a 2024."
          ],
          "image": "/cases/evoluir/pnld-books.png",
          "tags": [
            "Tailwind CSS",
            "PrimeVue"
          ]
        }
      ],
      "decisions": [
        {
          "title": [
            "Componentes para um catálogo consistente",
            "Components for a consistent catalog",
            "Componentes para un catálogo consistente"
          ],
          "detail": [
            "Uma apresentação reutilizável para capas, metadados e ações de leitura mantém o catálogo consistente entre as edições do PNLD.",
            "Reusable presentation for covers, metadata and reading actions keeps the catalog consistent across PNLD editions.",
            "Una presentación reutilizable de portadas, metadatos y lectura mantiene consistencia entre ediciones del PNLD."
          ],
          "evidence": "portfolio"
        },
        {
          "title": [
            "Separação de responsabilidades",
            "Separation of concerns",
            "Separación de responsabilidades"
          ],
          "detail": [
            "Foco em princípios de Clean Architecture: separar apresentação, organização dos dados e integrações. Componentes cuidam da interface; a lógica de acesso aos dados fica desacoplada das telas, favorecendo manutenção e evolução do catálogo.",
            "Focus on Clean Architecture principles: separate presentation, data organization and integrations. Components handle the interface, while data access stays decoupled from screens to support catalog maintenance and evolution.",
            "Foco en principios de Clean Architecture: separar presentación, organización de datos e integraciones. Los componentes atienden la interfaz y el acceso a datos se desacopla de las pantallas para facilitar mantenimiento y evolución."
          ],
          "evidence": "portfolio"
        }
      ],
      "layers": [],
      "outcome": [
        "Projeto de 2024 reunido no case Evoluir: landing page para apresentação das obras da MVC Editora no PNLD.",
        "A 2024 project within the Evoluir case: a website presenting MVC Editora books for PNLD.",
        "Proyecto de 2024 dentro del caso Evoluir: sitio de obras de MVC Editora para PNLD."
      ],
      "images": [
        {
          "src": "/cases/evoluir/pnld.png",
          "caption": [
            "Catálogo PNLD",
            "PNLD catalog",
            "Catálogo PNLD"
          ]
        },
        {
          "src": "/cases/evoluir/pnld-books.png",
          "caption": [
            "Obras e informações",
            "Books and information",
            "Obras e información"
          ]
        }
      ]
    }
  ]
};
