/**
 * components/layout/Footer.tsx
 *
 * Rodapé da página.
 * Exibe o nome (lido dos dados) e o ano atual automaticamente.
 */

import { person } from "@/data/portfolio";

export default function Footer() {
  // Ano atual calculado em tempo de execução
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copy">
        © {year} — <span>{person.name}</span> // ALL SYSTEMS ONLINE
      </p>
      <span className="footer__tag">FULL STACK DEVELOPER</span>
    </footer>
  );
}
