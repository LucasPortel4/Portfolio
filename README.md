# Portfólio Cyberpunk — Full Stack

Portfólio pessoal com estética cyberpunk/futurista, construído com **Next.js 14** + **TypeScript**.

---

## 🚀 Rodando o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+ instalado

### Passos

```bash
# 1. Entre na pasta do projeto
cd portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

---

## ✏️ Como personalizar

**Tudo que você precisa editar está em um único arquivo:**

```
src/data/portfolio.ts
```

Abra esse arquivo e substitua:
- `name` → seu nome
- `bio` → seus parágrafos de apresentação
- `social` → seus links (GitHub, LinkedIn, WhatsApp, e-mail)
- `skills` → suas tecnologias
- `projects` → seus projetos
- `stats` → seus números (projetos, anos de experiência, etc.)

### Adicionar sua foto
1. Coloque o arquivo em `/public/avatar.jpg`
2. No `portfolio.ts`, troque `avatar: null` por `avatar: "/avatar.jpg"`

### Adicionar seu currículo
1. Coloque o PDF em `/public/curriculo.pdf`
2. O link já está configurado automaticamente

---

## 📁 Estrutura de pastas

```
portfolio/
├── public/                     # Arquivos estáticos (foto, PDF, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz (importa CSS, metadados)
│   │   └── page.tsx            # Página principal (monta os componentes)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navegação fixa no topo
│   │   │   └── Footer.tsx      # Rodapé
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Seção inicial (nome, botões, contadores)
│   │   │   ├── Sobre.tsx       # Seção sobre mim (bio + skills + foto)
│   │   │   ├── Projetos.tsx    # Seção de projetos (cards)
│   │   │   └── Contato.tsx     # Seção de contato (redes + formulário)
│   │   └── ui/
│   │       ├── CustomCursor.tsx    # Cursor animado neon
│   │       ├── AnimateOnScroll.tsx # Wrapper de animação ao scrollar
│   │       ├── Counter.tsx         # Contador numérico animado
│   │       └── ContactForm.tsx     # Formulário de contato interativo
│   ├── data/
│   │   └── portfolio.ts        # ← EDITE AQUI os seus dados
│   └── styles/
│       ├── globals.css         # Variáveis, reset, animações globais
│       ├── layout.css          # Nav, seções, footer, responsividade
│       └── components.css      # Botões, chips, cards, formulário
└── README.md
```

---

## 🛠️ Para fazer deploy

```bash
npm run build   # Gera a versão de produção
npm start       # Roda a versão de produção localmente
```

Para publicar online, use [Vercel](https://vercel.com) — conecte seu repositório GitHub e o deploy é automático.
