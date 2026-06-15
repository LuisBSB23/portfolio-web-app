"use client";

import { useEffect, useRef } from "react";
import ParticlesBackground from "../ParticlesBackground";

export default function SecaoHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Animação de entrada da Hero
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Pequeno delay para garantir que a animação seja visível
    const timer = setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ParticlesBackground />

      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-5 overflow-hidden"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {/* Ícones flutuantes decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div
            className="floating-icon absolute top-1/4 left-[5%] md:left-[10%] text-[40px] md:text-[64px]"
            style={{ color: "var(--color-on-surface)" }}
          >
            <span className="material-symbols-outlined">code</span>
          </div>
          <div
            className="floating-icon absolute top-1/3 right-[10%] md:right-[15%] text-[50px] md:text-[80px]"
            style={{
              color: "var(--color-on-surface)",
              animationDelay: "-2s",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
          <div
            className="floating-icon absolute bottom-1/4 left-[10%] md:left-[20%] text-[36px] md:text-[56px]"
            style={{
              color: "var(--color-on-surface)",
              animationDelay: "-4s",
            }}
          >
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <div
            className="floating-icon absolute bottom-1/3 right-[5%] md:right-[10%] text-[48px] md:text-[72px]"
            style={{
              color: "var(--color-on-surface)",
              animationDelay: "-1s",
            }}
          >
            <span className="material-symbols-outlined">database</span>
          </div>
        </div>

        {/* Conteúdo central */}
        <div className="max-w-[900px] text-center z-10">

          {/* Saudação */}
          <p
            className="uppercase mb-4 opacity-90"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--color-primary)",
            }}
          >
            Olá, eu sou o Luis Otávio
          </p>

          {/* Título principal */}
          <h1
            className="mb-4 leading-tight px-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#F3F4F6",
            }}
          >
            Desenvolvedor Full Stack | Estudante de ADS
          </h1>

          {/* Descrição */}
          <p
            className="max-w-[700px] mx-auto mb-16 px-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: 1.6,
              color: "var(--color-on-secondary-container)",
            }}
          >
            Especializado na construção de soluções web inteligentes e
            escaláveis, integrando tecnologias de ponta e Inteligência
            Artificial para transformar ideias complexas em experiências
            digitais fluidas.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto px-4">
            {/* Botão primário */}
            <a
              href="#projetos"
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 primary-button-glow flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Ver Meus Projetos
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>

            {/* Botão secundário */}
            <a
              href="#"
              className="w-full sm:w-auto min-h-[48px] border px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#F3F4F6] hover:text-[#121212] hover:[&>span]:text-[#121212]"
              style={{
                borderColor: "#F3F4F6",
                color: "#F3F4F6",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Baixar Currículo
              <span className="material-symbols-outlined" style={{ color: "inherit" }}>download</span>
            </a>
          </div>
        </div>

        {/* Seta animada para rolar */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span
            className="material-symbols-outlined"
            style={{ color: "var(--color-on-surface)" }}
          >
            expand_more
          </span>
        </div>
      </section>
    </>
  );
}