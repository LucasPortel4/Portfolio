/**
 * app/page.tsx
 *
 * Página principal do portfólio.
 * Apenas monta os componentes de layout e seções — sem lógica aqui.
 */

import Navbar      from "@/components/layout/Navbar";
import Footer      from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero        from "@/components/sections/Hero";
import Sobre       from "@/components/sections/Sobre";
import Projetos    from "@/components/sections/Projetos";
import Contato     from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      {/* Cursor animado personalizado (cyber) */}
      <CustomCursor />

      {/* Barra de navegação fixa no topo */}
      <Navbar />

      {/* Conteúdo principal */}
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
