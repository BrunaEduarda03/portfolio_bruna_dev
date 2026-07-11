<h1 align="center">
  <br />
  bruna.dev — Portfolio
  <br />
</h1>

<p align="center">
  Portfólio pessoal de <strong>Bruna Eduarda</strong>, Software Engineer.<br />
  Desenvolvido com React 19, TypeScript, TailwindCSS, Framer Motion e Three.js.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-E10098?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-0.183-white?style=flat-square&logo=threedotjs&logoColor=black" />
</p>

---

## ✨ Sobre o Projeto

Portfólio profissional com design dark/minimal, animações fluidas e suporte a múltiplos idiomas (PT / EN / ES). A interface foi construída com foco em performance, acessibilidade e responsividade mobile-first.

### Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com cena 3D interativa em background |
| **Sobre** | Bio, habilidades por área (bento grid), formação acadêmica e idiomas |
| **Experiência** | Timeline de experiências profissionais com tecnologias utilizadas |
| **Projetos** | Grid de projetos com links para GitHub e demo |
| **Tech Stack** | Carrossel animado de tecnologias por categoria |
| **Contacto** | Formulário funcional com validação e toast de feedback |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + **TypeScript 6**
- **TailwindCSS 3.4** — utilitários, tema dark, animações customizadas
- **Framer Motion 12** — animações de scroll e mount
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — cena 3D no Hero
- **Radix UI** — primitivos acessíveis (Toast, Dialog, etc.)
- **Lucide React** — ícones
- **shadcn/ui** — componentes base de UI

### Tooling
- **CRACO** — customização do CRA sem eject
- **PostCSS** + **Autoprefixer**
- **ESLint** — linting com plugins React e a11y

### i18n & Tema
- Sistema próprio de internacionalização com `LanguageContext` (PT/EN/ES)
- Alternância de tema dark/light via `ThemeContext`

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes das seções do portfolio
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Scene3D.tsx      # Cena Three.js do Hero
│   └── ui/              # Componentes shadcn/ui
├── data/
│   └── mock.ts          # Dados tipados do portfolio (info, projetos, experiências)
├── hooks/
│   └── use-toast.ts     # Hook de toast notifications
├── i18n/
│   ├── LanguageContext.tsx  # Contexto de idioma (PT/EN/ES)
│   ├── ThemeContext.tsx     # Contexto de tema (dark/light)
│   └── translations.ts     # Strings traduzidas
├── lib/
│   └── utils.ts         # Utilitários (cn, classnames)
├── App.tsx
└── index.tsx
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** ≥ 18
- **npm** ≥ 9

### Instalação

```bash
# Clone o repositório
git clone https://github.com/BrunaEduarda03/portfolio_bruna_dev.git
cd portfolio_bruna_dev

# Instale as dependências
npm install --legacy-peer-deps

# Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm test` | Executa os testes |

---

## 🌐 Internacionalização

O portfolio suporta 3 idiomas, alternáveis pelo seletor no header:

| Código | Idioma |
|--------|--------|
| `pt` | Português (padrão) |
| `en` | English |
| `es` | Español |

Todas as strings estão centralizadas em `src/i18n/translations.ts`.

---

## 📱 Responsividade

Layout mobile-first com breakpoints Tailwind:

- **Mobile** (`< 640px`) — layout em coluna única, tipografia reduzida, menu hamburguer
- **Tablet** (`sm` / `md`) — grids de 2 colunas, espaçamentos ajustados
- **Desktop** (`lg` / `xl`) — layout completo com cenas 3D e efeitos visuais

---

## 📬 Contacto

**Bruna Eduarda Cruz Maciel**

- 📧 [brunaecmaciel@gmail.com](mailto:brunaecmaciel@gmail.com)
- 💼 [linkedin.com/in/brunaecmaciel](https://www.linkedin.com/in/brunaecmaciel/)
- 🐙 [github.com/BrunaEduarda03](https://github.com/BrunaEduarda03)
- 📍 Brasil — disponível para trabalho remoto

---

<p align="center">
  Feito com ❤️ por <strong>Bruna Eduarda</strong>
</p>
