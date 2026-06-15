"use client";

import { useState, useEffect } from "react";

export default function BarraProgressoScroll() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const atualizarScroll = () => {
      const alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollAtual = window.scrollY;
      
      if (alturaTotal > 0) {
        const percentual = (scrollAtual / alturaTotal) * 100;
        setProgresso(percentual);
      }
    };

    window.addEventListener("scroll", atualizarScroll);
    // Atualiza imediatamente no caso de a página ser carregada já com scroll
    atualizarScroll();

    return () => window.removeEventListener("scroll", atualizarScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progresso}%`,
          backgroundColor: 'var(--color-primary)',
          boxShadow: '0 0 10px var(--color-primary)' // Efeito de brilho
        }}
      />
    </div>
  );
}