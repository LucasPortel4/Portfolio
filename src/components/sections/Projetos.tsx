/**
 * components/sections/Projetos.tsx
 *
 * Seção de projetos.
 * Renderiza um card para cada projeto definido em src/data/portfolio.ts.
 */

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { projects }    from "@/data/portfolio";

export default function Projetos() {
  return (
    <section id="projetos" className="section" style={{ background: "var(--bg-primary)" }}>

      {/* Cabeçalho da seção */}
      <AnimateOnScroll>
        <div className="section__header">
          <span className="section__num">02 //</span>
          <h2 className="section__title">PROJETOS</h2>
          <div className="section__line" />
        </div>
      </AnimateOnScroll>

      {/* Grid de cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 24,
      }}>
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

/* ── Sub-componente: card individual de projeto ──────────────────────────── */
interface Project {
  id:     string;
  year:   string;
  title:  string;
  desc:   string;
  tags:   string[];
  github: string;
  demo:   string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">

      {/* Identificador e ano */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--text-dim)",
        letterSpacing: 3,
        marginBottom: 16,
      }}>
        {project.id} // {project.year}
      </p>

      {/* Título do projeto */}
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: 18,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 12,
        letterSpacing: 1,
      }}>
        {project.title}
      </h3>

      {/* Descrição */}
      <p style={{
        fontSize: 14,
        color: "var(--text-primary)",
        fontWeight: 300,
        lineHeight: 1.7,
        marginBottom: 24,
      }}>
        {project.desc}
      </p>

      {/* Tags de tecnologias */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {project.tags.map((tag, i) => (
          // Tags pares ficam em magenta para variar visualmente
          <span key={tag} className={`project-tag ${i % 2 !== 0 ? "project-tag--alt" : ""}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links para GitHub e Demo */}
      <div style={{ display: "flex", gap: 16 }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          → GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link--alt">
          → Demo
        </a>
      </div>
    </div>
  );
}
