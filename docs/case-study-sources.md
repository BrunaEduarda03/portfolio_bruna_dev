# Estudos de caso — fontes e revisão

Conteúdo editável: `src/data/caseStudies.ts`. Textos em arrays `[português, inglês, espanhol]`.
Interface compartilhada: `src/components/CaseStudyPage.tsx` e `src/cases.css`.
URLs: `#/cases/horus`, `#/cases/dental-uni`, `#/cases/coopanestrio`, `#/cases/evoluir`, `#/cases/econowise`, `#/cases/pnld`, `#/cases/iducs`.
As rotas por hash permitem abrir e recarregar os cases em hospedagem estática sem configurar rewrites.

## Horus — consulta em 2026-09-21

Fontes públicas fornecidas pela autora:
- https://horusfat.com/
- https://app.horusfat.com/auth/login

Método: leitura HTTP do HTML e dos bundles JavaScript referenciados por essas páginas. Não houve acesso autenticado, envio de formulário ou inspeção de dados privados. O navegador conectado não estava disponível; a reconstrução do login não é uma captura de tela.

Evidências coletadas:
- O HTML da landing page descreve serviços de faturamento para médicos, clínicas e laboratórios.
- Textos de apresentação no bundle incluem guias, glosas, conciliação de repasses, relatórios e contratos. São descrições comerciais, não comprovação de módulos da aplicação ou resultados do trabalho individual.
- `https://horusfat.com/assets/index-Cv4tdS_Q.js`: identificação explícita do runtime Vue 3.5.17.
- `https://app.horusfat.com/assets/index-D4ATninQ.js`: runtime React; código do formulário de login com campos de e-mail e senha, mensagens de validação e biblioteca Zod. A presença de código no bundle não comprova a execução de fluxos protegidos ou garantias de segurança do servidor.
- Imagem institucional: `https://horusfat.com/assets/hero-light-1024-CKp7QOV9.webp`, copiada para `public/cases/horus/public-hero.webp`. É uma imagem de marketing do site, não screenshot do software.

## Contribuições e infraestrutura

Fontes: experiências em `src/data/mock.ts`, traduções e CVs já existentes no repositório. React, Vue, TypeScript, PHP/Laravel, MySQL, AWS, Docker e GitHub Actions são usados conforme esse histórico. Não houve inspeção do repositório Horus nem da infraestrutura.

Divergências preservadas como itens de revisão:
- Horus: o card antigo indicava Node.js/PostgreSQL, enquanto a experiência descreve Laravel/MySQL. Card alinhado à experiência; case sinaliza a divergência.
- CoopanestRIO: o card antigo indicava PostgreSQL, enquanto a experiência descreve MySQL. Mesmo tratamento.
- IDUCS: o card indica React/Node.js/MongoDB, enquanto o histórico do grupo menciona Vue/Nuxt/Laravel. Case mantém a informação do card e solicita validação explícita.
- Dental Uni: confirmar versão publicada e estado atual; o card e as experiências têm diferenças sobre o status de entrega.

## Mocks e limites

Todos os painéis, gráficos, aparelhos, livros e telas mobile são composições ilustrativas em HTML/CSS, com identificação visível de mock. Os gráficos não representam dados reais. O login Horus é uma reconstrução estática baseada nos campos do código público e não faz requisições.

Os diagramas representam camadas da stack, não uma topologia validada de produção. Não são afirmadas métricas, cobertura de testes, protocolos de IoT ou ganhos financeiros sem evidência. Os três campos de resultados permanecem vazios, com indicação “A medir”.

Para finalizar cada case: validar autoria e stack, substituir os mocks por telas autorizadas, detalhar decisões e testes e preencher resultados com método de medição.

## CoopanestRIO — 23/09/2026

Case organizado em dois subprojetos: landing page institucional e Portal do Cooperado. Conteúdo em `src/data/coopanestProjects.ts`. Os repositórios de origem foram consultados somente para leitura.

### Landing page
- Repositório: `/Users/brunaeduarda/Documents/workspace/copanestRIO/landingpage-copanestRIO`.
- `app/package.json` e `app/nuxt.config.ts`: Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4, PrimeVue 4, Pinia, Axios e renderização no cliente (`ssr: false`). Não se atribui SSR ou ganhos de SEO a essa configuração.
- `app/pages/`, `app/components/SejaUmCooperado/`, `app/stores/beAMemberForm.ts`: páginas institucionais e adesão por etapas.
- `app/composables/`: conteúdo via API, newsletter, convênios, pré-cadastro, canais de contato e denúncia.
- Captura real do site público https://www.coopanestrio.org.br/ com Playwright, armazenada em `public/cases/coopanestrio/landing-page.png`.

### Portal do Cooperado
- Repositório: `/Users/brunaeduarda/Documents/workspace/copanestRIO/portal-cooperado`.
- `src/package.json` e `src/nuxt.config.ts`: Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4, shadcn-nuxt/Reka UI, Pinia, Pinia Colada, Zod, vee-validate, TanStack Vue Table e Unovis.
- `src/layers/`: organização por domínios, com recursos comuns em `shared`.
- `layers/dashboard/app/composables/useHomeOverview.ts`: filtros, totais, próximos recebimentos, preferência de ocultar valores e descarte de respostas antigas.
- `layers/guias/app/composables/useGuidesListing.ts`: busca com debounce de 400 ms, filtros, paginação, ordenação e cards em telas menores.
- `layers/shared/app/composables/useProcedimentos.ts`: busca de catálogo sob demanda e cancelamento com AbortController.
- `src/tests/`, `vitest.config.ts`, `playwright.config.ts`: testes presentes; não executados no repositório de origem e sem afirmação de cobertura.
- URL pública de referência: https://portal-cooperado.coopanestrio.org.br/auth/login. Sem autenticação ou acesso a dados privados durante esta análise.

### Limites de atribuição
O usuário identifica esses produtos como projetos que desenvolve para a empresa. As responsabilidades publicadas descrevem as entregas presentes no código, sem alegar autoria exclusiva de cada módulo. Os repositórios frontend não comprovam Laravel, banco de dados ou AWS. Em esclarecimento posterior, a autora confirmou desenvolvimento em PHP, principalmente no backend do Portal do Cooperado; essa informação foi incorporada como declaração da autora. Não foram inventadas métricas de desempenho ou impacto operacional.

### Galeria e decisões de arquitetura — atualização 23/09/2026
- Galeria da landing page com quatro capturas reais: início, `/convenios`, `/seja-um-cooperado` e `/newsletter`. Capturas por navegação pública, sem envio de formulários.
- Portal: navegação por quatro funcionalidades documentadas no código. Dashboard e controle de guias usam os dois prints originais fornecidos pela autora, recuperados dos anexos desta conversa. As duas funcionalidades sem captura mantêm painéis explicativos identificados como visão da funcionalidade.
- Google Analytics e Microsoft Clarity estão declarados em ambos os `nuxt.config.ts`, por `nuxt-gtag` e `nuxt-clarity-analytics`. A utilização foi informada pela autora e a integração foi confirmada no código; não foi validada a coleta em contas de analytics.
- Portal: `gtag.initMode: manual`, `useCookieConsent.ts` e `cookieConsentStore.ts` evidenciam inicialização do gtag por aceite/restauração de consentimento. Esse fluxo não comprova controle equivalente de Clarity.
- Landing: `plugins/api.ts` cria o cliente `$fetch`, injeta `$api` e configura cabeçalhos do Axios. `useApi.ts` reaproveita o cliente; composables de newsletter e pré-cadastro usam Axios.
- Portal: `shared/app/services/http.ts` detecta sessão expirada e chama um listener; `auth/app/plugins/expiredSession.client.ts` implementa logout/redirecionamento. O transporte compartilhado não depende da feature auth.
- A regra de dependência `feature → shared` está documentada em `docs/FEATURE_ARCHITECTURE.md`; não se afirma uma auditoria exaustiva de todos os imports.
- Pinia guarda sessão e preferências; Pinia Colada aparece em consultas como `payments/app/composables/usePaymentForecast.ts`. Nem toda requisição usa Colada.

### Strapi e manutenção editorial
- A autora confirmou a elaboração e integração da landing page com Strapi, utilizado pela equipe de marketing da empresa, e forneceu https://cms.coopanestrio.org.br/admin.
- `useBanners.ts`: textos, imagens, links de CTA, página e ordem editorial obtidos da coleção de banners.
- `useAnnouncements.ts`: comunicados com paginação, `populate` e ordenação por data.
- `useNewsletterEditions.ts` e `useNewsletterMaterias.ts`: edições, matérias, citações, imagens e PDFs relacionados.
- Contexto de uso por marketing informado pela autora; contratos de consumo conferidos no frontend. Sem acesso autenticado ao painel Strapi ou afirmação sobre configuração interna de permissões e publicação.
- Prints originais do portal salvos sem edição em `portal-dashboard.png` e `portal-guides.png`, sob `public/cases/coopanestrio/`.

### Portal: acesso e Cooper IA — 24/09/2026
- Novos prints originais enviados pela autora: `portal-login.png` e `portal-assistant.png`, recuperados dos anexos sem edição. Login escolhido como capa do card CoopanestRIO na página inicial.
- Integração do assistente com n8n informada explicitamente pela autora. Não foi inspecionado o workflow de n8n; não se atribuem modelos, ferramentas ou topologia interna.
- Frontend conferido em `layers/ia/app/api/cooperIaApi.ts` e `composables/useCooperIaChat.ts`: API de conversas/mensagens, histórico, envio com retorno do assistente, schemas Zod e gestão de estado do chat.

### PHP — esclarecimento da autora
PHP incluído no resumo do case, card e stack/responsabilidades do portal por confirmação explícita da autora. Atuação atualizada para full stack, sem inferir framework PHP ou detalhes de implementação do backend.

## Dental Uni / Auclan Design — 24/09/2026
- Repositório consultado somente para leitura: `/Users/brunaeduarda/Documents/workspace/Auclan/dental-uni-mobile-rn`.
- `package.json`: React Native 0.81.5, React 19.1, Expo SDK 54, TypeScript 5.9, Expo Router 6, React Navigation, Axios, Reanimated 4, Gesture Handler, Bottom Sheet, React Native Maps, Expo Camera e Image Picker. Zustand, React Hook Form, Zod e TanStack Query removidos das stacks deste projeto/experiência porque não constam no manifesto consultado.
- `src/app`, `src/features`, `src/ui`: organização por funcionalidades com rotas e componentes compartilhados separados.
- `src/ui/styles/theme/index.ts`: tema centralizado com cores e tipografia. `src/config/portal.config.ts`: campos e textos por perfil; `src/hooks/usePortalLogin.ts`: formulário orientado por configuração. `src/contexts/AuthContext.tsx`: perfil e estado em memória, sem autenticação de backend implementada nesse contexto.
- Arquitetura white label informada pela autora; documentação descreve a base reutilizável encontrada (tema, UI e configurações), sem alegar múltiplas marcas publicadas ou provisionamento de tenants. `app.config.ts` ainda define a identidade Dental Uni.
- Status fornecido pela autora: novo app e novo design, distinto do app já em produção; desenvolvimento do backend para integração e publicação da nova versão pendentes.
- Capturas originais fornecidas na conversa: `welcome.png`, `home.png`, `portals.png`. Home recebe desfoque visual leve; arquivos originais não foram anonimizados.
- IDUCS removido da listagem, do case e das menções na experiência, conforme solicitação.

## Horus — atualização 24/09/2026
- Case reestruturado em `src/data/horusCase.ts`, no mesmo modelo de subprojetos usado por CoopanestRIO e Evoluir. O bloco antigo em `caseStudies.ts` e o componente `HorusReferences` (mock de login e imagem institucional) foram removidos, junto das classes CSS `.horus-references`/`.horus-login-mock`, que ficaram sem uso.
- Capturas reais fornecidas pela autora substituem a reconstrução visual: `public/cases/horus/landing.png` (site público) e `public/cases/horus/login.png` (tela real de login de app.horusfat.com). Nenhuma autenticação foi realizada; login foi escolhido como capa do card, no mesmo tratamento dado ao CoopanestRIO.
- Repositórios consultados somente para leitura em `/Users/brunaeduarda/Documents/workspace/Horus`:
  - `landing-page-horus-faturamento/package.json`: Vue 3.5, Vite 7, Tailwind CSS 4, VueUse, reka-ui, axios, maska, vue-sonner.
  - `portal-frontend/package.json`: React 19, TanStack Router/Query/Table, Zustand, Zod, react-hook-form, Radix UI, ApexCharts, Axios.
  - `backend/composer.json`: PHP 8.2, Laravel 12, Sanctum, php-open-source-saver/jwt-auth, Spatie Permission, Laravel Horizon, Laravel Pulse, Laravel Auditing, Sentry, chrismcintosh/laravel-log-s3-driver; `pestphp/pest` e diretório `tests/` confirmam testes automatizados no backend.
  - `landing-page-horus-faturamento/index.html`: Google Tag Manager (GTM-TR838XG7), gtag (Google Ads AW-17998115881 e GA4 G-MMQBS55Y2H), Microsoft Clarity (v6l2fmmddt) e Meta Pixel confirmados no código, além de `CookieConsentBar.vue` e `ThankYouTrackingPage.vue`. O consentimento salva a preferência em localStorage, mas não bloqueia o carregamento desses scripts — os três repositórios usam SonarQube (`sonar-project.properties` + workflow) para análise estática.
  - Não encontrados em nenhum dos três repositórios: Snyk (ou scanner de vulnerabilidades equivalente), Jest, Playwright ou Vitest no frontend.
- Por decisão explícita da autora, esta atualização ficou restrita ao conteúdo do portfólio: nenhuma alteração foi feita nos repositórios reais do Horus. Os itens de Snyk e testes Jest/Playwright pedidos para adição entram como pendências documentadas no case (`pending`), em vez de serem descritos como já implementados.
- Mesmo tratamento de pendências (Snyk e testes automatizados) foi acrescentado aos cases CoopanestRIO (`pending` em `caseStudies.ts`) e Evoluir (`pending` em `evoluirCase.ts`), sem inventar o estado atual desses repositórios além do que já constava neste documento.
- `CaseStudyPage.tsx` ganhou uma seção de pendências para cases com subprojetos (antes só existia para cases sem subprojetos), reaproveitando o estilo `.case-review` já usado nessa página.

## Evoluir / PNLD — 24/09/2026
- PNLD reunido como subprojeto do Evoluir por instrução da autora. Removido o card/case independente; a rota antiga `#/cases/pnld` abre o case Evoluir.
- Três seções: landing page Evoluir, sistema Evoluir e PNLD (projeto de 2024).
- Fontes públicas: https://mvcpnld.com.br/, https://plataformaevoluir.com.br/ e https://app.plataformaevoluir.com.br/.
- Capturas atuais realizadas com Playwright. A data do projeto não é a data das capturas; o site PNLD atual inclui conteúdo de edições posteriores a 2024.
- Print do login enviado pela autora preservado em `public/cases/evoluir/system-login.png` e usado na galeria do sistema. Sem autenticação nem acesso às telas internas.
- Stack do PNLD informada pela autora como equivalente à landing page CoopanestRIO, com Nuxt 3 e versões antigas em 2024. Mantidos Vue 3, TypeScript, Tailwind CSS, PrimeVue, Pinia, Axios/useFetch, Strapi, Analytics e Clarity sem inventar números de versão das bibliotecas.
- Landing page Evoluir: Vue/Nuxt conforme experiência previamente registrada. Sistema: Vue 2, Vue 3, PHP/Laravel explicitamente informados pela autora. Não se atribui migração completa nem arquitetura interna não observada.
- Dados do case em `src/data/evoluirCase.ts`; imagens em `public/cases/evoluir/` para substituição posterior, se desejada.
