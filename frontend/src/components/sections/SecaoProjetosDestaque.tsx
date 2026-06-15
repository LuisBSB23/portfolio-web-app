import ProjectCard from "../ProjectCard";

const projetos = [
  {
    titulo: "NeuralFlow Analytics",
    imagem:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlkKT4VyOE87DJCO70rZCot3aIrXGSbNQzANkJoFJDJ1gP_rCD6UQ0_ywtUl4tFhJZvDFbmw1_NprwHRmDxWk3V4MuJp4itMe2mqWbE2CJk-iIEh3fbL6UJA5bpq7U_mtgB3a44pbtMcutVRkFlTPve2t08OnO7qhR0YuEAeZZCYwNfIDRW_CKIUqEP27_UaWqw5QQL1zrb0-m6bR_plbE_L5O16nLhSt94ubXGDvvMCDxIi02hsazxditHF5-J8k9vjV6i37nNwo",
    tecnologias: ["React", "OpenAI API"],
  },
  {
    titulo: "Mobile Hub",
    imagem:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZithTy5dkGK86OEVvCOhZkp_km9YmgxlaGyYWlehcxHhiX6D-iUrTwX9-R1kjcwm9bjKFfTitk4mVi5uVIlbvGXTcCGV-UO2O0T4WCcL1S42DM_tsLNikrHDBjPT1i7NfSa_jCytE1hEY8jhbDyupiVlTRUXsbf3aFP099nFD5mUVYgd9sphjdOLjbOs1dEL6tDcLtHMyIYBCIZ3IY_RibhKR0mVP6qcFyndZEJKQRb4-ABeKttVkwmy9f2bvx33tqmaQmkGPSU",
    tecnologias: ["React Native"],
  },
];

export default function SecaoProjetosDestaque() {
  return (
    <section id="projetos" className="relative py-16 md:py-24 z-10">
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
            Projetos em Destaque
          </h2>
          <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <ProjectCard
              key={projeto.titulo}
              titulo={projeto.titulo}
              imagem={projeto.imagem}
              tecnologias={projeto.tecnologias}
              variante="destaque"
            />
          ))}
        </div>
      </div>
    </section>
  );
}