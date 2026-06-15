"use client";

import Image from "next/image";

interface ProjectCardProps {
  titulo: string;
  imagem: string;
  tecnologias: string[];
  descricao?: string;
  linkRepositorio?: string;
  variante?: "destaque" | "outros";
  icone?: string;
}

export default function ProjectCard({
  titulo,
  imagem,
  tecnologias,
  descricao,
  linkRepositorio = "#",
  variante = "destaque",
  icone,
}: ProjectCardProps) {
  if (variante === "destaque") {
    return (
      <div
        className="group relative overflow-hidden rounded-xl border transition-all duration-500 min-h-[300px] md:min-h-[450px]"
        style={{ backgroundColor: "var(--color-surface-container)", borderColor: "rgba(255,255,255,0.05)" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(229,62,62,0.5)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
      >
        <div className="aspect-video md:aspect-auto w-full h-full relative">
          <img src={imagem} alt={titulo} className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-surface-container) 0%, rgba(22,32,48,0.2) 50%, transparent 100%)", opacity: 0.9 }} />
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            {tecnologias.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded font-mono" style={{ backgroundColor: "var(--color-surface-container-highest)", color: "var(--color-on-surface-variant)", fontSize: "11px", fontFamily: "JetBrains Mono, monospace" }}>
                {tech}
              </span>
            ))}
          </div>
          <h3 className="font-bold" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(24px, 3vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
            {titulo}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border-x border-b border-t-2 p-5 md:p-6 flex flex-col gap-4 transition-all duration-300 group hover:-translate-y-1"
      style={{ backgroundColor: "var(--color-surface-container)", borderColor: "rgba(255,255,255,0.05)", borderTopColor: "var(--color-primary)" }}
    >
      <div className="aspect-[16/9] rounded-lg overflow-hidden relative border" style={{ backgroundColor: "var(--color-background)", borderColor: "rgba(255,255,255,0.05)" }}>
        <img src={imagem} alt={`${titulo} Mockup`} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
        {icone && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: "var(--color-on-surface-variant)" }}>
            <span className="material-symbols-outlined text-[48px] md:text-[64px] group-hover:scale-110 transition-transform duration-500">{icone}</span>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold mb-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(20px, 2.5vw, 24px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
          {titulo}
        </h3>
        {descricao && (
          <p className="mb-4 line-clamp-3" style={{ color: "var(--color-on-secondary-container)", fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.6 }}>
            {descricao}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tecnologias.map((tech) => (
            <span key={tech} className="px-2 py-1 rounded" style={{ backgroundColor: "var(--color-surface-container-low)", color: "var(--color-on-surface-variant)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}>
              {tech}
            </span>
          ))}
        </div>
        <a href={linkRepositorio} className="inline-flex items-center gap-2 font-bold transition-all min-h-[48px] hover:gap-3" style={{ color: "var(--color-primary)", fontFamily: "Inter, sans-serif" }}>
          Ver Repositório
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}