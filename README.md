# Agendei

Sistema de agendamentos online e gerenciamento de clientes desenvolvido como Trabalho de Conclusão de Curso.

O objetivo do Agendei é facilitar a gestão de agendamentos, clientes e informações empresariais em um só lugar, oferecendo uma solução simples, intuitiva e eficiente para empresas que precisam otimizar seu tempo e melhorar o atendimento aos clientes.

## Funcionalidades

- **Dashboard**: visão geral do negócio com indicadores e acesso rápido às principais funcionalidades.
- **Gestão de Agendamentos**: crie, edite e gerencie agendamentos de forma prática e rápida.
- **Criação de Agenda em etapas**: configure informações básicas, dias e horários, serviços e revise antes de finalizar.
- **Gestão de Clientes**: mantenha todas as informações dos seus clientes organizadas, com busca e filtros por status.
- **Perfil do Usuário**: visualize e edite suas informações pessoais e da empresa.
- **Cadastro e Login**: criação de conta com validação dos dados via Zod e máscaras automáticas para telefone e CNPJ.
- **Relatórios**: acompanhe estatísticas e indicadores importantes do seu negócio.

## Arquitetura

Monorepo gerenciado com pnpm workspaces, organizado em `apps/` (aplicações) e `packages/` (bibliotecas compartilhadas).

```
agendei/
├── apps/
│   ├── api/        # Backend (Elysia + better-auth + Drizzle)
│   └── web/        # Frontend (React 19 + Vite)
├── packages/
│   ├── auth/       # Autenticação better-auth (cliente e servidor)
│   ├── config/     # Configurações compartilhadas (TypeScript)
│   ├── drizzle/    # Schema, cliente e migrações do banco de dados
│   ├── env/        # Variáveis de ambiente tipadas (cliente e servidor)
│   └── logger/     # Logger da aplicação
├── .husky/         # Hooks de pre-commit (husky + lint-staged)
├── biome.json
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Tecnologias

| Tecnologia       | Descrição                                             |
| ---------------- | ----------------------------------------------------- |
| React 19         | Biblioteca para construção de interfaces              |
| Vite             | Ferramenta de build e servidor de desenvolvimento     |
| React Router 7   | Roteamento entre as páginas da aplicação              |
| React Hook Form  | Gerenciamento de formulários                          |
| Elysia           | Framework HTTP para o backend                         |
| better-auth      | Autenticação de usuários (cliente e servidor)         |
| Drizzle ORM      | ORM e migrações de banco de dados (SQLite)            |
| Zod              | Validação de dados e schemas                          |
| tslog            | Logging estruturado                                   |
| @t3-oss/env-core | Validação de variáveis de ambiente em tempo de execução |
| use-mask-input   | Máscaras de entrada (telefone, CNPJ, etc.)            |
| @brazilian-utils | Utilitários de validação brasileiros (CNPJ, telefone) |
| CSS Modules      | Estilização isolada por componente                    |
| Tabler Icons     | Conjunto de ícones                                    |
| Biome            | Formatação e linting do código                        |
| husky            | Hooks de git                                          |
| pnpm             | Gerenciador de pacotes e executor de scripts          |

## Primeiros passos

### Instalando o pnpm

O projeto utiliza o pnpm como gerenciador de pacotes. Se você ainda não o possui instalado, siga as instruções abaixo.

**Windows**

Abra o **PowerShell como administrador** e execute os comandos abaixo:

```powershell
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
Add-MpPreference -ExclusionPath $(pnpm store path)
```

**Linux e macOS**

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

**Verificando a instalação**

Após instalar, reinicie o terminal e confirme que o pnpm está disponível:

```bash
pnpm --version
```

### Instalação

Clone o repositório e acesse a raiz do projeto. Em seguida, instale as dependências:

```bash
pnpm install
```

### Variáveis de ambiente

Copie os arquivos `.env.example` de cada aplicação para `.env`:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

### Executando

Inicie o backend e o frontend em paralelo:

```bash
pnpm dev
```

## Scripts

| Comando          | Descrição                                        |
| ---------------- | ------------------------------------------------ |
| `pnpm dev`       | Inicia todas as aplicações em paralelo           |
| `pnpm lint`      | Executa o linter do Biome com correção automática |
| `pnpm check`     | Executa a checagem do Biome com correção automática |
| `pnpm db:generate` | Gera migrações de banco de dados                |
| `pnpm db:migrate`  | Aplica migrações de banco de dados              |
| `pnpm db:studio`   | Abre o Drizzle Studio do banco de dados         |

Hooks de pre-commit (husky + lint-staged) executam o Biome sobre os arquivos staged a cada commit.

## Variáveis de ambiente por aplicação

### apps/api

| Variável             | Descrição                                          |
| -------------------- | -------------------------------------------------- |
| `BETTER_AUTH_URL`    | URL base do servidor de autenticação (better-auth) |
| `BETTER_AUTH_SECRET` | Segredo usado para assinar os tokens de autenticação |
| `DATABASE_URL`       | Caminho do arquivo SQLite                          |
| `PORT`               | Porta do servidor                                  |
| `FRONTEND_URL`       | URL do frontend permitida no CORS                  |

### apps/web

| Variável           | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `VITE_BACKEND_URL` | URL base do backend (better-auth)             |

## Rotas do frontend

| Rota            | Página                        |
| --------------- | ----------------------------- |
| `/`             | Apresentação (Hero Section)   |
| `/login`        | Login                         |
| `/register`     | Criação de conta              |
| `/home`         | Início                        |
| `/agenda`       | Agendas                       |
| `/nova-agenda`  | Criação de nova agenda        |
| `/clientes`     | Clientes                      |
| `/profile`      | Perfil do usuário             |
| `/about`        | Sobre nós                     |

## Equipe

| Membro            | Papel         |
| ----------------- | ------------- |
| Vitor Felipe      | Designer      |
| Vitor Felicio     | Back-end      |
| Nelson Francisco  | Front-end     |
| Lucas Alves       | Documentação  |
| Moisés Marques    | Front-end     |