"use client";

import { useAnimacaoScroll } from "@/hooks/useAnimacaoScroll";

export default function SecaoSobreMim() {
  const ref = useAnimacaoScroll<HTMLElement>();

  return (
    <section ref={ref} id="sobre-mim" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16">
          <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
            Sobre Mim
          </h2>
          <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border-2 profile-red-glow" style={{ borderColor: "rgba(229,62,62,0.3)" }}>
              <img alt="Luis Otávio Portrait" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB01Ef4-_-eX0qx2a4jsPTNQzIbejgZspu_Og4PmUnm7VKrFV1Iu6O4cgKmg0zvfm8VRUGReQLwRDuILTjI8UGoUs6ns8CbWwa1NTHaKx2FJCeVuG715iQlgFTgjMKAkSN3mzVE3boYriL8a3ZWBfzptA91lyg2vTDOgrBNbwVYy9ypzJO7gBRdbNs_jWfUCNtmN0knobUNjfgmmUe5rA760HBRmuwz_DtHXhthfyPGV4h2Mit87nL9N09nlKv0WsoOxM-TKOTx4-k" />
              <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: "rgba(229,62,62,0.1)" }} />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: "var(--color-on-secondary-container)" }}>
              Estudante de Análise e Desenvolvimento de Sistemas no Senac-DF, trago para o desenvolvimento de software a disciplina e o foco forjados durante meu tempo no Exército Brasileiro.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: "var(--color-on-secondary-container)" }}>
              Minha atuação é pautada pela aplicação prática de Clean Architecture e padrões de projeto robustos, buscando sempre a excelência técnica em cada linha de código para entregar soluções que realmente geram valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}