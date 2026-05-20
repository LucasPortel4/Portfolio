/**
 * components/ui/AnimateOnScroll.tsx
 *
 * Componente wrapper que aplica uma animação de entrada (fade + subida)
 * quando o elemento entra na área visível da tela (scroll).
 *
 * Uso:
 *   <AnimateOnScroll delay={200}>
 *     <MeuComponente />
 *   </AnimateOnScroll>
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number; // atraso em ms antes da animação iniciar
}

export default function AnimateOnScroll({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver: detecta quando o elemento entra na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Aplica o atraso se especificado
          setTimeout(() => setVisible(true), delay);
          // Para de observar após a primeira vez (anima só uma vez)
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // dispara quando 10% do elemento está visível
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}
