/**
 * components/sections/Hero.tsx
 *
 * Seção hero (tela inicial).
 * Contém: nome com efeito glitch, cargo, descrição, botões de ação e contadores.
 */

import Counter        from "@/components/ui/Counter";
import { person, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 60px 60px",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Gradiente de fundo decorativo */}
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "55%", height: "100%",
        background: `
          radial-gradient(ellipse at 70% 50%, rgba(255,0,170,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 90% 20%, rgba(0,245,255,0.06) 0%, transparent 50%)
        `,
        pointerEvents: "none",
      }} />

      {/* Linha vertical pulsante (decoração) */}
      <div style={{
        position: "absolute",
        right: 200, top: "50%",
        transform: "translateY(-50%)",
        width: 2, height: 300,
        background: "linear-gradient(to bottom, transparent, var(--color-cyan), transparent)",
        boxShadow: "0 0 20px var(--color-cyan)",
        animation: "scanV 3s infinite",
      }} />

      {/* Conteúdo principal */}
      <div style={{ maxWidth: 700, position: "relative" }}>

        {/* Tag de cargo */}
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: 5,
          color: "var(--color-magenta)",
          textTransform: "uppercase",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ width: 40, height: 1, background: "var(--color-magenta)", boxShadow: "0 0 8px var(--color-magenta)", display: "block" }} />
          FULL STACK DEVELOPER
        </div>

        {/* Nome com efeito glitch */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(42px, 7vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: 2,
          marginBottom: 10,
          color: "#fff",
          textShadow: "0 0 40px rgba(0,245,255,0.3)",
        }}>
          OLÁ, SOU<br />
          <GlitchName name={person.name} />
        </h1>

        {/* Dica de edição — apenas visual */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-dim)",
          letterSpacing: 2,
          marginBottom: 24,
        }}>
          ↑ edite seu nome em{" "}
          <span style={{ color: "var(--color-cyan)" }}>src/data/portfolio.ts</span>
        </p>

        {/* Sub-tagline */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(14px, 2vw, 20px)",
          color: "var(--color-magenta)",
          letterSpacing: 6,
          marginBottom: 30,
          textTransform: "uppercase",
        }}>
          {person.tagline}
        </div>

        {/* Descrição curta */}
        <p style={{
          fontSize: 17,
          color: "var(--text-primary)",
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 40,
          fontWeight: 300,
        }}>
          Desenvolvedor Full Stack apaixonado por criar sistemas que unem{" "}
          <strong style={{ color: "var(--color-cyan)" }}>performance</strong> e{" "}
          <strong style={{ color: "var(--color-magenta)" }}>experiência visual</strong>.
          Do back-end ao front-end, transformo ideias em código real.
        </p>

        {/* Botões de ação */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a href="#projetos" className="btn btn-cyan">Ver Projetos</a>
          <a href="#contato"  className="btn btn-magenta">Contato</a>
        </div>
      </div>

      {/* Contadores (canto inferior direito) */}
      <div style={{
        position: "absolute",
        right: 60, bottom: 80,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}>
        {stats.map((s) => (
          <Counter key={s.label} target={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}

/* ── Sub-componente interno: nome com efeito glitch ──────────────────────── */
function GlitchName({ name }: { name: string }) {
  return (
    <span
      data-text={name}
      style={{
        color: "var(--color-cyan)",
        textShadow: "0 0 30px var(--color-cyan), 0 0 60px rgba(0,245,255,0.4)",
        position: "relative",
        display: "inline-block",
      }}
    >
      {name}
      {/* Camadas do glitch via pseudo-elementos emulados com spans */}
      <span style={glitchLayer("top")}    aria-hidden>{name}</span>
      <span style={glitchLayer("bottom")} aria-hidden>{name}</span>
    </span>
  );
}

// Gera o estilo de cada camada do efeito glitch
function glitchLayer(part: "top" | "bottom"): React.CSSProperties {
  return {
    position: "absolute",
    top: 0, left: 0,
    color: part === "top" ? "var(--color-cyan)" : "var(--color-magenta)",
    clipPath: part === "top"
      ? "polygon(0 0, 100% 0, 100% 35%, 0 35%)"
      : "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
    animation: part === "top"
      ? "glitch-top 3s infinite"
      : "glitch-bottom 3s infinite",
    pointerEvents: "none",
  };
}
