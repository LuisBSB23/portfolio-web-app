"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Carrega particles.js dinamicamente no cliente
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (typeof window.particlesJS !== "undefined") {
        // @ts-ignore
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ["#E53E3E", "#4a4949"] },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#E53E3E",
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Limpa ao desmontar
      const canvas = document.querySelector("#particles-js canvas");
      if (canvas) canvas.remove();
      document.body.removeChild(script);
    };
  }, []);

  return null;
}