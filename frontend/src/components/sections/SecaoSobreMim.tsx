"use client"; // Importante: Hooks do React requerem o modo client no Next.js

import { useAnimacaoScroll } from "@/hooks/useAnimacaoScroll";

export default function SecaoSobreMim() {
  // 1. Inicializamos o hook que retorna a referência
  const ref = useAnimacaoScroll<HTMLElement>();

  return (
    // 2. Passamos a referência (ref={ref}) para a tag <section> principal
    <section ref={ref} id="sobre-mim" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16">
          <h2 className="font-bold mb-4 text-[#F3F4F6] tracking-tight" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)" }}>
            Sobre Mim
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 profile-red-glow">
              <img 
                alt="Luis Otávio Portrait" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" 
                src="/assets/images/profile.jpg" /* Certifique-se de ajustar o caminho da imagem real */
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col gap-6 text-on-secondary-container">
            <p className="font-body-lg leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas no Senac-DF, trago para o desenvolvimento de software a disciplina e o foco forjados durante meu tempo no Exército Brasileiro.
            </p>
            <p className="font-body-lg leading-relaxed">
              Minha atuação é pautada pela aplicação prática de Clean Architecture e padrões de projeto robustos, buscando sempre a excelência técnica em cada linha de código para entregar soluções que realmente geram valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}