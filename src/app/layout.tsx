/**
 * app/layout.tsx
 *
 * Layout raiz da aplicação Next.js (App Router).
 * Importa os estilos globais e define os metadados da página (SEO).
 */

import type { Metadata } from "next";
import type { ReactNode } from "react"; // importa o tipo correto do React
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/components.css";

// Metadados exibidos na aba do navegador e em compartilhamentos
export const metadata: Metadata = {
  title: "Portfólio | Full Stack Developer",
  description: "Portfólio pessoal de desenvolvedor Full Stack.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
