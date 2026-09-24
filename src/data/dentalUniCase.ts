import type { CaseStudy } from "./caseStudies";

export const dentalUniCase: CaseStudy = {
  "slug": "dental-uni",
  "projectId": 0,
  "title": "DENTAL UNI",
  "kind": "mobile",
  "accent": "#efa8b2",
  "coverImage": "/cases/dental-uni/welcome.png",
  "category": [
    "Auclan Design · Novo aplicativo mobile",
    "Auclan Design · New mobile app",
    "Auclan Design · Nueva app móvil"
  ],
  "summary": [
    "Novo aplicativo Dental Uni desenvolvido para a Auclan Design, com novo design e base white label em React Native e Expo. Existe um app em produção; esta nova versão aguarda o desenvolvimento do backend para integração e a publicação.",
    "New Dental Uni app developed for Auclan Design, with a new design and a white-label foundation in React Native and Expo. An app is already in production; this new version awaits backend development for integration and publication.",
    "Nueva app Dental Uni desarrollada para Auclan Design, con nuevo diseño y base white label en React Native y Expo. Ya existe una app en producción; esta nueva versión espera el desarrollo del backend para integración y publicación."
  ],
  "role": "Mobile Developer · Auclan Design",
  "status": [
    "Backend e publicação pendentes",
    "Backend and publication pending",
    "Backend y publicación pendientes"
  ],
  "sourceNote": [
    "Stack e arquitetura conferidas no repositório do novo app. A existência do app atual em produção e as pendências de backend e publicação foram informadas pela autora. Capturas fornecidas pela autora; home com desfoque visual leve.",
    "Stack and architecture checked in the new app repository. The existing production app and pending backend and publication were confirmed by the author. Author-provided screenshots; home shown with light visual blur.",
    "Stack y arquitectura verificadas en el repositorio de la nueva app. La autora confirmó la app actual en producción y las pendientes de backend y publicación. Capturas de la autora; inicio con desenfoque visual leve."
  ],
  "challenge": [
    "Criar uma nova experiência mobile para beneficiários, dentistas e empresas, com identidade visual renovada e uma base reutilizável. O desenvolvimento desta versão é separado do aplicativo que já está em produção.",
    "Create a new mobile experience for members, dentists and companies, with refreshed visual identity and a reusable foundation. This version is developed separately from the existing production app.",
    "Crear una nueva experiencia móvil para beneficiarios, dentistas y empresas, con identidad visual renovada y base reutilizable. Esta versión se desarrolla por separado de la app en producción."
  ],
  "contributions": [
    [
      "Implementação do novo design, das telas e dos fluxos mobile com React Native, Expo e TypeScript.",
      "Implementation of the new design, screens and mobile flows with React Native, Expo and TypeScript.",
      "Implementación del nuevo diseño, pantallas y flujos con React Native, Expo y TypeScript."
    ],
    [
      "Base white label com tema centralizado, componentes compartilhados e configurações de acesso por perfil.",
      "White-label foundation with centralized theme, shared components and role-specific access configuration.",
      "Base white label con tema centralizado, componentes compartidos y acceso configurable por perfil."
    ],
    [
      "Organização por funcionalidades, navegação com Expo Router e interfaces preparadas para a futura integração com o backend.",
      "Feature-based organization, Expo Router navigation and interfaces prepared for future backend integration.",
      "Organización por funcionalidades, navegación con Expo Router e interfaces preparadas para integrar el backend."
    ]
  ],
  "layers": [
    {
      "name": "Mobile",
      "tech": "React Native 0.81 · Expo SDK 54 · React 19 · TypeScript",
      "detail": [
        "Base do novo aplicativo para iOS e Android.",
        "Foundation of the new iOS and Android app.",
        "Base de la nueva app iOS y Android."
      ],
      "evidence": "repository"
    },
    {
      "name": "Navegação / estado",
      "tech": "Expo Router 6 · React Navigation · Context API",
      "detail": [
        "Rotas em src/app; AuthContext mantém o perfil em memória enquanto a autenticação real aguarda backend.",
        "Routes in src/app; AuthContext holds the role in memory while real authentication awaits the backend.",
        "Rutas en src/app; AuthContext mantiene el perfil en memoria mientras la autenticación real espera el backend."
      ],
      "evidence": "repository"
    },
    {
      "name": "UI / interação",
      "tech": "React Native StyleSheet · Reanimated 4 · Gesture Handler · @gorhom/bottom-sheet",
      "detail": [
        "Tema compartilhado, animações, gestos e painéis de seleção.",
        "Shared theme, animations, gestures and selection sheets.",
        "Tema compartido, animaciones, gestos y paneles de selección."
      ],
      "evidence": "repository"
    },
    {
      "name": "Recursos nativos",
      "tech": "React Native Maps · Expo Camera · Expo Image Picker · React Native SVG",
      "detail": [
        "Mapas, câmera, seleção de imagens e ícones vetoriais.",
        "Maps, camera, image selection and vector icons.",
        "Mapas, cámara, selección de imágenes e iconos vectoriales."
      ],
      "evidence": "repository"
    },
    {
      "name": "Integração",
      "tech": "Axios",
      "detail": [
        "Dependência disponível para comunicação HTTP; desenvolvimento do backend e integração ainda pendentes.",
        "Dependency available for HTTP communication; backend development and integration remain pending.",
        "Dependencia disponible para comunicación HTTP; desarrollo del backend e integración pendientes."
      ],
      "evidence": "repository"
    }
  ],
  "decisions": [
    {
      "title": [
        "Base white label reutilizável",
        "Reusable white-label foundation",
        "Base white label reutilizable"
      ],
      "detail": [
        "Tema centraliza cores e tipografia; src/ui concentra componentes e assets compartilhados. Essa separação forma a base para adaptar a identidade visual sem duplicar os fluxos. O repositório atual está configurado para Dental Uni.",
        "The theme centralizes colors and typography; src/ui holds shared components and assets. This separation provides a foundation for adapting visual identity without duplicating flows. The current repository is configured for Dental Uni.",
        "El tema centraliza colores y tipografía; src/ui reúne componentes y recursos compartidos. Esta separación permite adaptar identidad visual sin duplicar flujos. El repositorio actual está configurado para Dental Uni."
      ],
      "evidence": "repository"
    },
    {
      "title": [
        "Uma base, três perfis",
        "One foundation, three roles",
        "Una base, tres perfiles"
      ],
      "detail": [
        "PORTAL_CONFIGS define campos e textos para beneficiário, dentista e empresa. AuthContext informa o perfil à home, que adapta atalhos e seções sem criar três aplicativos independentes.",
        "PORTAL_CONFIGS defines fields and labels for members, dentists and companies. AuthContext supplies the role to the home screen, which adapts shortcuts and sections without three independent apps.",
        "PORTAL_CONFIGS define campos y textos para beneficiario, dentista y empresa. AuthContext informa el perfil al inicio, que adapta accesos y secciones sin crear tres apps independientes."
      ],
      "evidence": "repository"
    },
    {
      "title": [
        "Features separadas da navegação",
        "Features separated from navigation",
        "Features separadas de la navegación"
      ],
      "detail": [
        "src/app define as rotas; src/features reúne telas e lógica por domínio; src/ui mantém os recursos comuns. Dados de demonstração ficam separados da apresentação para apoiar a futura integração.",
        "src/app defines routes; src/features groups domain screens and logic; src/ui holds common resources. Demonstration data remains separate from presentation to support future integration.",
        "src/app define rutas; src/features reúne pantallas y lógica por dominio; src/ui mantiene recursos comunes. Los datos de demostración se separan de la presentación para la futura integración."
      ],
      "evidence": "repository"
    }
  ],
  "pending": [
    [
      "Desenvolvimento do backend e integração das APIs com os fluxos do novo app.",
      "Backend development and API integration with the new app flows.",
      "Desarrollo del backend e integración de APIs con los flujos de la nueva app."
    ],
    [
      "Publicação da nova versão; o aplicativo existente já está em produção.",
      "Publication of the new version; the existing app is already in production.",
      "Publicación de la nueva versión; la app existente ya está en producción."
    ]
  ],
  "sources": [],
  "gallery": {
    "id": "dental-uni",
    "title": [
      "Dental Uni · Novo app",
      "Dental Uni · New app",
      "Dental Uni · Nueva app"
    ],
    "url": "https://www.planosdentaluni.com.br/",
    "portrait": true,
    "features": [
      {
        "title": [
          "Boas-vindas",
          "Welcome",
          "Bienvenida"
        ],
        "description": [
          "Novo design de entrada com ações rápidas para encontrar dentistas, desbloquear o cartão e consultar unidades.",
          "New entry design with quick actions to find dentists, unlock the card and locate clinics.",
          "Nuevo diseño de entrada con acciones para buscar dentistas, desbloquear la tarjeta y consultar unidades."
        ],
        "tags": [
          "React Native",
          "Expo"
        ],
        "image": "/cases/dental-uni/welcome.png",
        "softened": false
      },
      {
        "title": [
          "Home por perfil",
          "Role-based home",
          "Inicio por perfil"
        ],
        "description": [
          "Atalhos e conteúdo adaptados a beneficiário, dentista ou empresa. A tela usa dados de demonstração enquanto aguarda a integração com o backend.",
          "Shortcuts and content tailored to members, dentists or companies. The screen uses demonstration data while backend integration is pending.",
          "Accesos y contenido adaptados a beneficiarios, dentistas o empresas. La pantalla usa datos de demostración mientras espera integración con el backend."
        ],
        "tags": [
          "Context API",
          "TypeScript"
        ],
        "image": "/cases/dental-uni/home.png",
        "softened": true
      },
      {
        "title": [
          "White label e nossas unidades",
          "White label and our clinics",
          "White label y nuestras unidades"
        ],
        "description": [
          "Configurações por perfil e componentes compartilhados formam a base white label. A experiência inclui seleção de portal e consulta de unidades por região, com endereço, contato e horário de atendimento.",
          "Role-specific configuration and shared components form the white-label foundation. The experience includes portal selection and clinics by region, with addresses, contact details and opening hours.",
          "Configuración por perfil y componentes compartidos forman la base white label. Incluye selección de portal y unidades por región, con dirección, contacto y horarios."
        ],
        "tags": [
          "White label",
          "Context API",
          "React Native"
        ],
        "image": "/cases/dental-uni/portals.png",
        "secondaryImage": "/cases/dental-uni/locations.png",
        "secondaryImageTitle": [
          "Nossas unidades",
          "Our clinics",
          "Nuestras unidades"
        ],
        "softened": true
      },
      {
        "title": [
          "Guias, notas fiscais e boletos",
          "Claims, invoices and bills",
          "Guías, facturas y pagos"
        ],
        "description": [
          "Acompanhamento de guias por status, busca e filtros. Os fluxos financeiros contemplam consulta de notas fiscais e boletos, com faturas pagas e pendentes. A geração efetiva de notas fiscais e a integração dos dados dependem do backend ainda pendente.",
          "Claim tracking by status, search and filters. Financial flows include invoices and bills, with paid and pending invoices. Actual invoice generation and data integration depend on the pending backend.",
          "Seguimiento de guías por estado, búsqueda y filtros. Los flujos financieros incluyen facturas y pagos realizados o pendientes. La generación efectiva de facturas y la integración de datos dependen del backend pendiente."
        ],
        "tags": [
          "Guias",
          "Notas fiscais",
          "Boletos"
        ],
        "image": "/cases/dental-uni/guides.png",
        "softened": true
      },
      {
        "title": [
          "Plano e cartão",
          "Plan and membership card",
          "Plan y tarjeta"
        ],
        "description": [
          "Detalhes do plano, vigência, cobertura, contrato e forma de pagamento, junto à carteirinha digital com identificação do titular e dados do plano. Telas do novo app preparadas para integração com o backend.",
          "Plan details, term, coverage, contract and payment method alongside the digital membership card with holder and plan information. New app screens prepared for backend integration.",
          "Detalles del plan, vigencia, cobertura, contrato y forma de pago junto a la tarjeta digital con datos del titular y del plan. Pantallas preparadas para integrar el backend."
        ],
        "tags": [
          "React Native",
          "TypeScript"
        ],
        "image": "/cases/dental-uni/plan.png",
        "secondaryImage": "/cases/dental-uni/card.png",
        "secondaryImageTitle": [
          "Cartão digital",
          "Digital membership card",
          "Tarjeta digital"
        ],
        "softened": true
      }
    ]
  }
};
