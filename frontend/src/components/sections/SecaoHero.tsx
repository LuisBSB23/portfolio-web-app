"use client";

import { useEffect, useState, useRef } from "react";
import ParticlesBackground from "../ParticlesBackground";
import { useAnimacaoScroll } from "@/hooks/useAnimacaoScroll";

// --- Sub-componente: Botão Magnético ---
function MagneticButton({ children, href, className, style, download }: any) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = (e.clientX - centerX) * 0.2;
    const distanceY = (e.clientY - centerY) * 0.2;
    
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); 
  };

  return (
    <a
      href={href}
      download={download}
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.4s ease-out" : "transform 0.1s linear",
      }}
    >
      {children}
    </a>
  );
}

// --- Componente Principal ---
export default function SecaoHero() {
  const ref = useAnimacaoScroll<HTMLElement>();
  
  const textoOriginal = "Desenvolvedor Full Stack | Estudante de ADS";
  const [textoMostrado, setTextoMostrado] = useState("");
  const [digitando, setDigitando] = useState(true);

  useEffect(() => {
    let index = 0;
    const tempoLetra = 50; 

    const timerInicial = setTimeout(() => {
      const intervalo = setInterval(() => {
        setTextoMostrado(textoOriginal.slice(0, index + 1));
        index++;
        if (index >= textoOriginal.length) {
          clearInterval(intervalo);
          setDigitando(false);
        }
      }, tempoLetra);

      return () => clearInterval(intervalo);
    }, 800);

    return () => clearTimeout(timerInicial);
  }, []);

  return (
    <>
      <ParticlesBackground />

      <section
        ref={ref}
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-5 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="floating-icon absolute top-1/4 left-[5%] md:left-[10%] text-[32px] md:text-[64px]" style={{ color: "var(--color-on-surface)" }}>
            <span className="material-symbols-outlined">code</span>
          </div>
          <div className="floating-icon absolute top-1/3 right-[5%] md:right-[15%] text-[40px] md:text-[80px]" style={{ color: "var(--color-on-surface)", animationDelay: "-2s" }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="hidden md:block floating-icon absolute bottom-1/4 left-[20%] text-[56px]" style={{ color: "var(--color-on-surface)", animationDelay: "-4s" }}>
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <div className="hidden md:block floating-icon absolute bottom-1/3 right-[10%] text-[72px]" style={{ color: "var(--color-on-surface)", animationDelay: "-1s" }}>
            <span className="material-symbols-outlined">database</span>
          </div>
        </div>

        <div className="max-w-[900px] text-center z-10">
          <p className="uppercase mb-4 opacity-90" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", letterSpacing: "0.2em", color: "var(--color-primary)" }}>
            Olá, eu sou o Luis Otávio
          </p>

          <h1 className="mb-4 leading-tight px-2 min-h-[80px] md:min-h-[140px]" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#F3F4F6" }}>
            {textoMostrado}
            <span className="animate-pulse inline-block w-[3px] md:w-[6px] h-[30px] md:h-[60px] bg-primary ml-1 translate-y-2 md:translate-y-3" style={{ backgroundColor: 'var(--color-primary)' }}></span>
          </h1>

          <p className="max-w-[700px] mx-auto mb-16 px-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: "var(--color-on-secondary-container)" }}>
            Especializado na construção de soluções web inteligentes e escaláveis, integrando tecnologias de ponta e Inteligência Artificial para transformar ideias complexas em experiências digitais fluidas.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md sm:max-w-none mx-auto px-4">
             {/* Grupo de botões principais */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                <MagneticButton
                href="#projetos"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-shadow duration-300 primary-button-glow flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(229,62,62,0.15)] hover:shadow-[0_0_35px_rgba(229,62,62,0.4)]"
                style={{ backgroundColor: "var(--color-primary)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                >
                Ver Meus Projetos
                <span className="material-symbols-outlined pointer-events-none">arrow_forward</span>
                </MagneticButton>

                <MagneticButton
                href="/curriculo.pdf"
                download="Luis_Otavio_Curriculo.pdf"
                className="w-full sm:w-auto min-h-[48px] border border-[#F3F4F6] text-[#F3F4F6] hover:bg-[#F3F4F6] hover:text-[#121212] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
                >
                Baixar Currículo
                <span className="material-symbols-outlined pointer-events-none">download</span>
                </MagneticButton>
            </div>

            {/* Links Sociais no Hero (Adicionado conforme 3.7) */}
            <div className="flex gap-4 justify-center mt-2 w-full">
                <a
                  href="https://linkedin.com/in/seu-linkedin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] transition-colors duration-300 px-2 py-2 hover:opacity-80 rounded-lg hover:bg-white/5"
                  style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
                  aria-label="LinkedIn"
                >
                   <span className="material-symbols-outlined text-[24px]">link</span>
                </a>
                <a
                  href="https://github.com/seu-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] transition-colors duration-300 px-2 py-2 hover:opacity-80 rounded-lg hover:bg-white/5"
                  style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
                  aria-label="GitHub"
                >
                   <span className="material-symbols-outlined text-[24px]">terminal</span>
                </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="material-symbols-outlined" style={{ color: "var(--color-on-surface)" }}>expand_more</span>
        </div>
      </section>
    </>
  );
}