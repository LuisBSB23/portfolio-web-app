import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import SpecialtyCard from "@/components/SpecialtyCard";

export default function Home() {
  return (
    <main className="relative z-10 pt-24 px-8 space-y-16"
      style={{ backgroundColor: 'var(--color-background)' }}>

      {/* ProjectCard destaque */}
      <section>
        <h2 className="text-white text-2xl mb-6">ProjectCard — Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <ProjectCard
            titulo="NeuralFlow Analytics"
            imagem="https://placehold.co/800x450/162030/E53E3E?text=Projeto"
            tecnologias={["React", "OpenAI API"]}
            variante="destaque"
          />
          <ProjectCard
            titulo="Mobile Hub"
            imagem="https://placehold.co/800x450/162030/E53E3E?text=Projeto"
            tecnologias={["React Native"]}
            variante="destaque"
          />
        </div>
      </section>

      {/* ProjectCard outros */}
      <section>
        <h2 className="text-white text-2xl mb-6">ProjectCard — Outros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          <ProjectCard
            titulo="MedControl"
            imagem="https://placehold.co/800x450/162030/E53E3E?text=Projeto"
            tecnologias={["Java", "Spring Boot"]}
            descricao="Sistema de gestão de estoque para saúde pública com foco em rastreabilidade."
            icone="inventory_2"
            variante="outros"
          />
          <ProjectCard
            titulo="TalentBridge"
            imagem="https://placehold.co/800x450/162030/E53E3E?text=Projeto"
            tecnologias={["Next.js", "OpenAI API"]}
            descricao="Banco de talentos potencializado por IA para matching inteligente de vagas."
            icone="psychology"
            variante="outros"
          />
        </div>
      </section>

      {/* SkillCard */}
      <section>
        <h2 className="text-white text-2xl mb-6">SkillCard — Spotlight</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          <SkillCard icone="javascript" nome="JavaScript" />
          <SkillCard icone="deployed_code" nome="Next.js" />
          <SkillCard icone="css" nome="Tailwind CSS" />
          <SkillCard icone="terminal" nome="Python" />
        </div>
      </section>

      {/* SpecialtyCard */}
      <section className="pb-16">
        <h2 className="text-white text-2xl mb-6">SpecialtyCard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <SpecialtyCard
            icone="layers"
            titulo="Full Stack Development"
            descricao="Domínio de ecossistemas modernos utilizando Python, Node.js e Laravel."
          />
          <SpecialtyCard
            icone="neurology"
            titulo="IA & Automação"
            descricao="Integração de LLMs e modelos preditivos para aplicações inteligentes."
          />
          <SpecialtyCard
            icone="architecture"
            titulo="Arquitetura de ADS"
            descricao="Análise e Desenvolvimento de Sistemas com foco em performance e segurança."
          />
        </div>
      </section>

    </main>
  );
}