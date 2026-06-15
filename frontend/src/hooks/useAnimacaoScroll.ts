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
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    animacao = "slide-up",
  } = opcoes;

  const ref = useRef<T>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    // Estado inicial: invisível e deslocado
    elemento.style.opacity = "0";
    elemento.style.transform =
      animacao === "slide-up" ? "translateY(40px)" : "translateY(0)";
    elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
            // Para de observar após a primeira animação
            observer.unobserve(elemento);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, [threshold, rootMargin, animacao]);

  return ref;
}