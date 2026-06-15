"use client";

import { useRef } from "react";

interface SkillCardProps {
  icone: string;
  nome: string;
  preenchido?: boolean; // para ícones com FILL=1
}

export default function SkillCard({ icone, nome, preenchido = false }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="skill-card p-6 rounded-xl backdrop-blur-md border-b-2 flex flex-col items-center justify-center text-center gap-3 group transition-all min-h-[140px]"
      style={{
        backgroundColor: "rgba(22,32,48,0.4)",
        borderColor: "rgba(255,255,255,0.05)",
        borderBottomColor: "var(--color-primary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(22,32,48,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(22,32,48,0.4)";
      }}
    >
      <span
        className="material-symbols-outlined text-[32px] md:text-[40px]"
        style={{
          color: "var(--color-primary)",
          fontVariationSettings: preenchido ? "'FILL' 1" : "'FILL' 0",
        }}
      >
        {icone}
      </span>
      <span
        className="text-[14px]"
        style={{
          fontFamily: "JetBrains Mono, monospace",
          color: "var(--color-on-surface)",
        }}
      >
        {nome}
      </span>
    </div>
  );
}