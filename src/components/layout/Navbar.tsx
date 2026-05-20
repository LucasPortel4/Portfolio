/**
 * components/layout/Navbar.tsx
 *
 * Barra de navegação fixa no topo.
 * Contém: logo, links âncora para cada seção e indicador de status "ONLINE".
 */

import Link from "next/link";

// Links da navegação — adicione ou remova conforme necessário
const NAV_LINKS = [
  { label: "home",     href: "#home"     },
  { label: "sobre",    href: "#sobre"    },
  { label: "projetos", href: "#projetos" },
  { label: "contato",  href: "#contato"  },
];

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Logo — clique leva ao topo */}
      <Link href="#home" className="nav__logo">
        SYS<span>.</span>DEV
      </Link>

      {/* Links de navegação */}
      <ul className="nav__links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Indicador de disponibilidade */}
      <span className="nav__status">ONLINE</span>
    </nav>
  );
}
