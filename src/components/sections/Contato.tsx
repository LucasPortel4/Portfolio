/**
 * components/sections/Contato.tsx
 *
 * Seção de contato.
 * Contém: links de redes sociais e formulário de mensagem.
 * O formulário usa um Client Component separado (ContactForm) por precisar de estado.
 */

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm     from "@/components/ui/ContactForm";
import { social }      from "@/data/portfolio";

// Definição dos links sociais exibidos
const SOCIAL_LINKS = [
  { icon: "⌥", label: "GITHUB",    href: "https://github.com/LucasPortel4"  },
  { icon: "▣", label: "LINKEDIN",  href: "https://www.linkedin.com/in/lucas-portela-a74a41387"  },
  { icon: "◈", label: "EMAIL",     href: `<mailto:1>portelalucas061@gmail.com</mailto:1>` },
  { icon: "◉", label: "WHATSAPP",  href: "https://wa.me/5543991014605"  },
];

export default function Contato() {
  return (
    <section id="contato" className="section" style={{ background: "var(--bg-secondary)" }}>

      {/* Cabeçalho da seção */}
      <AnimateOnScroll>
        <div className="section__header">
          <span className="section__num">03 //</span>
          <h2 className="section__title">CONTATO</h2>
          <div className="section__line" />
        </div>
      </AnimateOnScroll>

      {/* Grid: info + formulário */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: 80,
        alignItems: "start",
      }}>

        {/* Coluna esquerda: texto + links sociais */}
        <AnimateOnScroll delay={100}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              letterSpacing: 2,
            }}>
              VAMOS CONSTRUIR<br />ALGO JUNTOS?
            </h3>

            <p style={{
              color: "var(--text-primary)",
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: 40,
              fontSize: 15,
            }}>
              Aberto a projetos freelance, oportunidades de trabalho e colaborações.
              Manda uma mensagem!
            </p>

            {/* Lista de links de contato/redes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span style={{ fontSize: 16 }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Coluna direita: formulário (Client Component) */}
        <AnimateOnScroll delay={200}>
          <ContactForm />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
