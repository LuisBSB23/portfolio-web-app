import SkillCard from "../SkillCard";

const habilidades = [
  { icone: "javascript", nome: "JavaScript" },
  { icone: "deployed_code", nome: "Next.js" },
  { icone: "css", nome: "Tailwind CSS" },
  { icone: "terminal", nome: "Python" },
  { icone: "coffee", nome: "Java" },
  { icone: "database", nome: "PostgreSQL" },
  { icone: "description", nome: "Pacote Office" },
  { icone: "groups", nome: "Scrum" },
];

export default function SecaoHabilidades() {
  return (
    <section id="habilidades" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        {/* Título */}
        <div className="mb-8 md:mb-16">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 32px)",
              color: "#F3F4F6",
              letterSpacing: "-0.02em",
            }}
          >
            Minhas Habilidades
          </h2>
          <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {habilidades.map((skill) => (
            <SkillCard key={skill.nome} icone={skill.icone} nome={skill.nome} />
          ))}
        </div>
      </div>
    </section>
  );
}