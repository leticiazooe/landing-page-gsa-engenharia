<div align="center">

# GSA Engenharia

### Engenharia estrutural, análise FEA, BIM e detalhamento técnico em uma experiência web industrial de alto impacto.

![Status](https://img.shields.io/badge/status-ativo-103f5d?style=for-the-badge)
![Projeto](https://img.shields.io/badge/tipo-landing%20page-f5b51b?style=for-the-badge&labelColor=071522)
![Responsivo](https://img.shields.io/badge/layout-responsivo-32c0db?style=for-the-badge&labelColor=071522)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=071522)
![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## Sobre o projeto

A **GSA Engenharia** é uma landing page institucional criada para apresentar serviços de engenharia com uma identidade visual técnica, industrial e premium.

A experiência foi construída para comunicar precisão, confiabilidade e capacidade de execução, combinando conteúdo comercial com elementos visuais inspirados em engenharia estrutural, modelagem, análise por elementos finitos e ambientes industriais.

O site apresenta desde a proposta de valor da empresa até suas especialidades, projetos selecionados, método de trabalho, tecnologias utilizadas e um formulário de contato para novos projetos.

## Preview

![GSA Engenharia — Preview](docs/screenshots/gsa-preview.jpg)

## Principais seções

- **Hero institucional** — posicionamento da GSA, proposta de valor e CTAs principais.
- **Engenharia aplicada** — visão geral das competências em FEA, BIM, 2D/3D e integração com fabricação.
- **Especialidades** — Engenharia Estrutural, Análise FEA, BIM e Modelagem 3D e Detalhamento Técnico.
- **Projetos selecionados** — aplicações em infraestrutura ferroviária, mineração, automotivo e automação industrial.
- **Método GSA** — entendimento, desenvolvimento, validação e entrega.
- **Tecnologia aplicada** — ferramentas de engenharia utilizadas nos projetos.
- **Setores de atuação** — automotivo, mineração, ferroviário, estruturas metálicas, automação industrial e infraestrutura.
- **Contato comercial** — formulário para solicitação de análise inicial do projeto.

## Screenshots

O preview abaixo reúne a página inicial, a vitrine de projetos e o bloco do método GSA.

![Preview completo da GSA Engenharia](docs/screenshots/gsa-preview.jpg)

## Tecnologias

| Tecnologia | Uso no projeto |
|---|---|
| **React 19** | Construção da interface e composição dos componentes |
| **Next.js 16** | Estrutura da aplicação e metadados |
| **TypeScript 5.9** | Tipagem e desenvolvimento da aplicação |
| **Vite 8** | Tooling e ambiente de desenvolvimento |
| **Vinext** | Runtime/build para integração com Cloudflare |
| **Tailwind CSS 4** | Base disponível no pipeline de estilos |
| **CSS customizado** | Identidade visual, responsividade, animações e microinterações |
| **Cloudflare Wrangler** | Runtime e infraestrutura compatível com Cloudflare |
| **Drizzle ORM** | Estrutura preparada para persistência quando necessária |

## Identidade visual

O projeto trabalha uma linguagem visual inspirada em engenharia industrial e documentação técnica.

**Paleta principal:**

- `#071522` — Ink / fundo principal
- `#0B2132` — Ink secundário
- `#103F5D` — Azul técnico
- `#32C0DB` — Ciano tecnológico
- `#F5B51B` — Amarelo de destaque e CTA
- `#F4F4EF` — Papel / fundo claro

**Tipografia:**

- **Manrope** — textos e interface
- **Space Grotesk** — títulos, números e elementos técnicos

## Recursos de interface

- Layout totalmente responsivo
- Navegação por âncoras
- Hero com composição industrial e blueprint
- Hierarquia tipográfica de alto contraste
- Cards de projetos com imagens reais
- Animação de entrada no hero
- Linha de varredura no bloco BIM
- Estados de hover em serviços e projetos
- Respeito a `prefers-reduced-motion`
- Formulário com CTA comercial
- Carregamento lazy em imagens fora da primeira dobra
- Metadados e favicon configurados

## Estrutura do projeto

```text
landing-page-gsa-engenharia/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── db/
├── docs/
│   └── screenshots/
├── drizzle/
├── examples/
├── public/
│   ├── projects/
│   └── favicon.svg
├── scripts/
├── tests/
├── worker/
├── package.json
├── next.config.ts
├── vite.config.ts
└── README.md
```

## Como executar localmente

### Pré-requisitos

- **Node.js 22.13 ou superior**
- **npm 10 ou superior**

### Instalação

```bash
git clone https://github.com/leticiazooe/landing-page-gsa-engenharia.git
cd landing-page-gsa-engenharia
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Testes

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run install:ci` | Instala as dependências do projeto |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera e valida o build |
| `npm run start` | Inicia a aplicação após o build |
| `npm test` | Executa build e testes de HTML renderizado |
| `npm run lint` | Executa o ESLint |
| `npm run validate:artifact` | Valida o artefato de publicação |
| `npm run db:generate` | Gera migrations via Drizzle |

## Conteúdo de engenharia apresentado

### Especialidades

`Engenharia Estrutural` · `Análise FEA` · `BIM` · `Modelagem 3D` · `Detalhamento 2D` · `Projeto Executivo`

### Ferramentas destacadas

`SAP2000` · `Autodesk Robot` · `Ansys` · `Advanced Steel` · `Navisworks` · `CATIA` · `NX`

### Setores

`Automotivo` · `Mineração` · `Ferroviário` · `Estruturas Metálicas` · `Automação Industrial` · `Infraestrutura`

## Rótulos do projeto

`engenharia` `landing-page` `react` `nextjs` `typescript` `industrial-design` `fea` `bim` `engenharia-estrutural` `cloudflare` `responsive-design` `portfolio-corporativo`

## Contato GSA

**E-mail:** `contato@gsaengenharia.com.br`

O formulário da página também direciona solicitações para o contato comercial configurado no projeto.

---

<div align="center">

**GSA Engenharia**  
*Engenharia com foco em qualidade.*

</div>
