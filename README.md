# Full Stack Week - Donald's 🍔

![Full Stack Week](https://img.shields.io/badge/FullStackWeek-Next.js-blue.svg) ![Prisma](https://img.shields.io/badge/Prisma-ORM-green.svg) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility--first-blue.svg)

## 📌 Sobre o Projeto

Este projeto foi desenvolvido durante a **Full Stack Week**, evento organizado pelo **Felipe Rocha** do canal [Dicas para Devs](https://www.youtube.com/@dicasparadevs). O objetivo é criar uma aplicação **full stack** utilizando tecnologias modernas como **Next.js, Prisma e TailwindCSS**, proporcionando uma experiência otimizada e eficiente tanto para o front-end quanto para o back-end.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[Next.js 15](https://nextjs.org/)** - Framework React para aplicações full stack.
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces.
- **[Prisma](https://www.prisma.io/)** - ORM moderno para gerenciamento do banco de dados.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS para estilização rápida e eficiente.
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários otimizado.
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e estilizados.
- **[Zod](https://zod.dev/)** - Validação de schemas no front-end e back-end.

## 📂 Estrutura do Projeto

```
📁 full-stack-week-donalds
├── 📂 prisma         # Configuração do Prisma e seed do banco
├── 📂 public         # Arquivos estáticos
├── 📂 src
│   ├── 📂 components # Componentes reutilizáveis
│   ├── 📂 pages      # Rotas e páginas
│   ├── 📂 styles     # Estilos com TailwindCSS
│   ├── 📂 utils      # Funções auxiliares
├── .env             # Variáveis de ambiente
├── next.config.js   # Configuração do Next.js
├── tailwind.config.js # Configuração do TailwindCSS
├── tsconfig.json    # Configuração do TypeScript
└── package.json     # Dependências e scripts
```

## 🛠️ Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
  git clone https://github.com/Allaaxx/full-stack-week-donalds.git
  cd full-stack-week-donalds
```

### 2️⃣ Instalar dependências
```bash
  npm install  # ou yarn install
```

### 3️⃣ Configurar o banco de dados
- Criar um arquivo **.env** baseado no **.env.example**.
- Rodar as migrations do Prisma:
```bash
  npx prisma migrate dev
```
- Gerar os modelos do Prisma:
```bash
  npx prisma generate
```
- (Opcional) Rodar o seed para popular o banco:
```bash
  npm run seed
```

### 4️⃣ Rodar a aplicação
```bash
  npm run dev  # ou yarn dev
```
Acesse **http://localhost:3000** no navegador.

## ✅ Funcionalidades
- Autenticação de usuários
- Gerenciamento de produtos
- Sistema de pedidos e pagamentos
- Interface responsiva e estilizada com Tailwind CSS
- Banco de dados integrado com Prisma ORM

## 🔥 Contribuição
Sinta-se à vontade para contribuir com melhorias, ajustes e novas funcionalidades!

1. Faça um **fork** do repositório
2. Crie uma **branch** (`feature/nova-funcionalidade`)
3. Faça um **commit** das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça um **push** da branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request** 🚀

---

Feito com ❤️ durante a **Full Stack Week** 🚀

