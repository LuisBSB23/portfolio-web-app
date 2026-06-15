"use client";

import SpecialtyCard from "../SpecialtyCard";
import { useAnimacaoScroll } from "@/hooks/useAnimacaoScroll";

const areas = [
  { icone: "layers", titulo: "Full Stack Development", descricao: "Domínio de ecossistemas modernos utilizando Python, Node.js e Laravel para o desenvolvimento de aplicações web escaláveis." },
  { icone: "neurology", titulo: "IA & Automação", descricao: "Integração de LLMs e modelos preditivos para criar aplicações autônomas e inteligentes." },
  { icone: "architecture", titulo: "Arquitetura de ADS", descricao: "Análise e Desenvolvimento de Sistemas com foco em performance, segurança e padrões de código limpo." },
];

export default function SecaoAreasEspecialidade() {
  const ref = useAnimacaoScroll<HTMLElement>();

  return (
    <section ref={ref} id="areas-especialidade" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16">
          <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
            Áreas de Especialidade
          </h2>
          <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area) => (
            <SpecialtyCard key={area.titulo} icone={area.icone} titulo={area.titulo} descricao={area.descricao} />
          ))}
        </div>
      </div>
    </section>
  );
}