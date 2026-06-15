"use client";

import { useRef, useState } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s ease-out"
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // 1. BLOQUEIO PARA MOBILE: Não executa o efeito em ecrãs pequenos
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "none" 
    });
  };

  const handleMouseLeave = () => {
    // Apenas repõe o estado se não for mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out" 
    });
  };

  if (variante === "destaque") {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-xl border min-h-[300px] md:min-h-[450px]"
        style={{ 
          backgroundColor: "var(--color-surface-container)", 
          borderColor: "rgba(255,255,255,0.05)",
          ...tiltStyle 
        }}
        onMouseEnter={(e) => {
           if (typeof window !== "undefined" && window.innerWidth >= 768) {
               e.currentTarget.style.borderColor = "rgba(229,62,62,0.5)";
           }
        }}
        onMouseOut={(e) => {
           if (typeof window !== "undefined" && window.innerWidth >= 768) {
               e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
           }
        }}
      >
        <div className="aspect-video md:aspect-auto w-full h-full relative">
          <img src={imagem} alt={titulo} className="object-cover w-full h-full transition-all duration-700 grayscale md:group-hover:grayscale-0" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-surface-container) 0%, rgba(22,32,48,0.2) 50%, transparent 100%)", opacity: 0.9 }} />
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
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
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-xl border-x border-b border-t-2 p-5 md:p-6 flex flex-col gap-4 group"
      style={{ 
        backgroundColor: "var(--color-surface-container)", 
        borderColor: "rgba(255,255,255,0.05)", 
        borderTopColor: "var(--color-primary)",
        ...tiltStyle 
      }}
    >
      <div className="aspect-[16/9] rounded-lg overflow-hidden relative border pointer-events-none" style={{ backgroundColor: "var(--color-background)", borderColor: "rgba(255,255,255,0.05)" }}>
        <img src={imagem} alt={`${titulo} Mockup`} className="w-full h-full object-cover opacity-40 md:group-hover:opacity-60 transition-opacity" />
        {icone && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: "var(--color-on-surface-variant)" }}>
            <span className="material-symbols-outlined text-[48px] md:text-[64px] md:group-hover:scale-110 transition-transform duration-500">{icone}</span>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col pointer-events-none">
        <h3 className="font-bold mb-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(20px, 2.5vw, 24px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
          {titulo}
        </h3>
        {descricao && (
          <p className="mb-4 line-clamp-3" style={{ color: "var(--color-on-secondary-container)", fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.6 }}>
            {descricao}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto pointer-events-auto">
          {tecnologias.map((tech) => (
            <span key={tech} className="px-2 py-1 rounded" style={{ backgroundColor: "var(--color-surface-container-low)", color: "var(--color-on-surface-variant)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}>
              {tech}
            </span>
          ))}
        </div>
        <a href={linkRepositorio} className="inline-flex items-center gap-2 font-bold transition-all min-h-[48px] hover:gap-3 pointer-events-auto w-fit" style={{ color: "var(--color-primary)", fontFamily: "Inter, sans-serif" }}>
          Ver Repositório
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}