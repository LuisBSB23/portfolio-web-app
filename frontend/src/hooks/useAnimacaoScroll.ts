"use client";

import { useEffect, useRef } from "react";

interface OpcoesAnimacao {
  threshold?: number;
  rootMargin?: string;
  animacao?: "slide-up" | "fade-in";
}

export function useAnimacaoScroll<T extends HTMLElement>(
  opcoes: OpcoesAnimacao = {}
) {
  // Valores default idênticos aos do V2.html
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    animacao = "slide-up",
  } = opcoes;

  const ref = useRef<T>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    // Estado inicial: invisível e deslocado para baixo (equivalente a opacity-0 e translate-y-10)
    elemento.style.opacity = "0";
    elemento.style.transform =
      animacao === "slide-up" ? "translateY(40px)" : "translateY(0)";
    
    // Transição suave correspondente ao duration-1000
    elemento.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando entra na tela: fica visível e volta à posição original
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
            
            // Deixa de observar para que a animação ocorra apenas uma vez
            observer.unobserve(elemento);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(elemento);

    // Limpeza na desmontagem do componente
    return () => observer.disconnect();
  }, [threshold, rootMargin, animacao]);

  return ref;
}