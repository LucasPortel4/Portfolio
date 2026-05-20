/**
 * components/ui/Counter.tsx
 *
 * Contador numérico animado.
 * O número cresce de 0 até `target` em `duration` milissegundos.
 * Começa a animar quando o elemento entra na viewport (IntersectionObserver).
 *
 * Uso:
 *   <Counter target={42} suffix="+" label="Projetos" />
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;   // valor final
  suffix?: string;  // texto após o número, ex: "+"
  label: string;    // descrição abaixo do número
  duration?: number; // duração da animação em ms (padrão 1800)
}

export default function Counter({ target, suffix = "", label, duration = 1800 }: Props) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Inicia a animação quando o elemento fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Anima o número quando `started` vira true
  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing: desacelera no final (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <div ref={ref} style={{ textAlign: "right", borderRight: "2px solid var(--border-default)", paddingRight: 20 }}>
      {/* Número animado */}
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 28,
        fontWeight: 900,
        color: "var(--color-cyan)",
        textShadow: "0 0 20px var(--color-cyan)",
      }}>
        {count}{suffix}
      </div>
      {/* Label descritivo */}
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: 3,
        color: "var(--text-dim)",
        textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}
