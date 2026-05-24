/**
 * data/portfolio.ts
 *
 * Centraliza todos os dados do portfólio em um único lugar.
 * Para personalizar o site, edite apenas este arquivo.
 */

// ─── Informações pessoais ────────────────────────────────────────────────────
export const person = {
  name: "Lucas Portela",
  role: "Full Stack Developer",
  tagline: "// CONSTRUINDO O FUTURO",
  bio: [
    // Cada string vira um parágrafo na seção "Sobre"
    "Desenvolvedor Vibing Code Back-End com foco em criar soluções completas — do banco de dados à interface. Acredito que bom software precisa ser rápido, escalável e visualmente impactante.",
    "Trabalho com arquiteturas modernas, APIs RESTful e interfaces reativas. Meu objetivo é entregar produtos que funcionem de verdade e que deixem as pessoas impressionadas.",
    "Sempre explorando novas tecnologias, padrões de design e formas de escrever código mais limpo e eficiente.",
  ],
  // Foto sua: coloque o arquivo em /public/avatar.jpg e troque para "/avatar.jpg"
  avatar: "/lucas-portela.png",
  // Currículo: coloque o arquivo em /public/curriculo.pdf
  curriculum: "/curriculo.pdf",
};

// ─── Links das redes sociais ─────────────────────────────────────────────────
export const social = {
  github:    "https://github.com/LucasPortel4",
  linkedin:  "https://linkedin.com/in/lucas-portela",
  email:     "portelalucas061@gmail.com",
  whatsapp:  "https://wa.me/5543991014605", // formato: 55 + DDD + número
};

// ─── Números de destaque na hero ─────────────────────────────────────────────
export const stats = [
  { value: 3, suffix: "+", label: "Projetos" },
  { value: 2,  suffix: "+", label: "Anos Exp." },
  { value: 12, suffix: "+", label: "Tecnologias" },
];

// ─── Habilidades técnicas ─────────────────────────────────────────────────────
// highlight: true = destaca com cor magenta
export const skills = [
  { name: "Docker",     highlight: false },
  { name: "Python",     highlight: true  },
  { name: "PHP",        highlight: false },
  { name: "Laravel",    highlight: false },
  { name: "HTML",       highlight: true  },
  { name: "JavaScript", highlight: true  },
  { name: "CSS",        highlight: true  },
];

// ─── Projetos ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id:     "PRJ-001",
    year:   "2026",
    title:  "EcoMonitor ",
    desc:   "Plataforma de monitoramento ambiental para fazendas inteligentes. Coleta dados de sensores IoT, armazena em banco de dados e exibe dashboards interativos para otimizar o uso de recursos naturais.",
    tags:   ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/LucasPortel4/Projeto_Agrinho_2026.git",
    demo:   "https://projeto-agrinho-2026-three.vercel.app/",
  },
  {
    id:     "PRJ-002",
    year:   "2026",
    title:  "Sistema de chamados",
    desc:   "Sistema de gerenciamento de chamados para suporte técnico. Permite criar, atribuir e acompanhar tickets de atendimento, com notificações em tempo real e relatórios de desempenho.",
    tags:   ["Next.js", "TypeScript", "Docker"],
    github: "https://github.com/LucasPortel4/Sistema-Chamados",
    demo:   "",
  },
];
