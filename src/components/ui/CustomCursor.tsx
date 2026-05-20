/**
 * components/ui/CustomCursor.tsx
 *
 * Cursor personalizado com efeito neon (ponto + anel que segue suavemente).
 * É um Client Component porque usa eventos do DOM (mousemove) e requestAnimationFrame.
 */

"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  // Referências para os dois elementos do cursor no DOM
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Posição real do mouse
    let mx = 0, my = 0;
    // Posição atual do anel (interpolada suavemente)
    let rx = 0, ry = 0;

    // Atualiza posição do mouse a cada movimento
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    // Loop de animação: ponto segue o mouse direto, anel faz lerp (suavização)
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx - 6 + "px";
        dotRef.current.style.top  = my - 6 + "px";
      }
      if (ringRef.current) {
        // Interpolação linear: anel "persegue" o mouse lentamente
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ringRef.current.style.left = rx - 18 + "px";
        ringRef.current.style.top  = ry - 18 + "px";
      }
      requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);

    // Limpeza ao desmontar o componente
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Ponto central do cursor */}
      <div ref={dotRef} style={styles.dot} />
      {/* Anel externo que acompanha com suavidade */}
      <div ref={ringRef} style={styles.ring} />
    </>
  );
}

// Estilos inline para não criar dependência de CSS adicional
const styles: Record<string, React.CSSProperties> = {
  dot: {
    position: "fixed",
    width: 12, height: 12,
    background: "var(--color-cyan)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: "difference",
    boxShadow: "0 0 12px var(--color-cyan), 0 0 30px var(--color-cyan)",
    transition: "transform 0.1s ease",
  },
  ring: {
    position: "fixed",
    width: 36, height: 36,
    border: "1px solid var(--color-cyan)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9998,
    opacity: 0.5,
  },
};
