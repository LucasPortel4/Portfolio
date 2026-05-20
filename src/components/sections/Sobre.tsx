/**
 * components/sections/Sobre.tsx
 *
 * Seção "Sobre mim".
 * Contém: bio em parágrafos, chips de habilidades e placeholder de foto.
 * Os dados vêm de src/data/portfolio.ts.
 */

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { person, skills } from "@/data/portfolio";
import Image from "next/image";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)" }}
    >
      {/* Cabeçalho da seção */}
      <AnimateOnScroll>
        <div className="section__header">
          <span className="section__num">01 //</span>
          <h2 className="section__title">SOBRE MIM</h2>
          <div className="section__line" />
        </div>
      </AnimateOnScroll>

      {/* Grid de duas colunas: texto | foto */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}>

        {/* Coluna esquerda: bio + skills */}
        <AnimateOnScroll delay={100}>
          <div>
            {/* Parágrafos da bio (lidos do data) */}
            {person.bio.map((paragraph, i) => (
              <p key={i} style={{
                color: "var(--text-primary)",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.9,
                marginBottom: 20,
              }}>
                {paragraph}
              </p>
            ))}

            {/* Grid de chips de habilidades */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              gap: 16,
              marginTop: 36,
            }}>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-chip ${skill.highlight ? "skill-chip--highlight" : ""}`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Coluna direita: foto ou placeholder */}
        <AnimateOnScroll delay={200}>
          <AvatarBox src={person.avatar} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── Sub-componente: caixa da foto (com bordas decorativas) ──────────────── */
function AvatarBox({ src }: { src: string | null }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 260, height: 320, position: "relative" }}>

        {/* Foto real (se fornecida) ou placeholder */}
        {src ? (
          <Image
            src={src}
            alt="Foto de perfil"
            fill
            style={{
              objectFit: "cover",
              clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
            }}
          />
        ) : (
          /* Placeholder quando não há foto */
          <div style={{
            width: "100%", height: "100%",
            background: "var(--bg-panel)",
            border: "1px solid var(--border-default)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Fundo shimmer */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(255,0,170,0.05))",
              animation: "shimmer 4s infinite",
            }} />
            <span style={{ fontSize: 60, opacity: 0.3 }}>⬡</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 3,
              color: "var(--text-dim)",
              textTransform: "uppercase",
            }}>
              // sua foto aqui
            </span>
          </div>
        )}

        {/* Bordas decorativas nos cantos (estética cyberpunk) */}
        <Corner position="tl" />
        <Corner position="tr" />
        <Corner position="bl" />
        <Corner position="br" />
      </div>
    </div>
  );
}

/* ── Sub-componente: canto decorativo ────────────────────────────────────── */
type CornerPos = "tl" | "tr" | "bl" | "br";

function Corner({ position }: { position: CornerPos }) {
  // Define qual par de bordas exibir para cada canto
  const borderMap: Record<CornerPos, React.CSSProperties> = {
    tl: { borderTopWidth: 2,    borderLeftWidth: 2,   top: -4,    left: -4   },
    tr: { borderTopWidth: 2,    borderRightWidth: 2,  top: -4,    right: -4  },
    bl: { borderBottomWidth: 2, borderLeftWidth: 2,   bottom: -4, left: -4   },
    br: { borderBottomWidth: 2, borderRightWidth: 2,  bottom: -4, right: -4  },
  };

  return (
    <div style={{
      position: "absolute",
      width: 20, height: 20,
      borderColor: "var(--color-cyan)",
      borderStyle: "solid",
      borderWidth: 0,
      ...borderMap[position],
    }} />
  );
}
