import SecaoHero from "@/components/sections/SecaoHero";
import SecaoProjetosDestaque from "@/components/sections/SecaoProjetosDestaque";
import SecaoSobreMim from "@/components/sections/SecaoSobreMim";
import SecaoHabilidades from "@/components/sections/SecaoHabilidades";
import SecaoAreasEspecialidade from "@/components/sections/SecaoAreasEspecialidade";
import SecaoOutrosProjetos from "@/components/sections/SecaoOutrosProjetos";

export default function Home() {
  return (
    <main className="relative z-10 pt-16">
      <SecaoHero />
      <SecaoProjetosDestaque />
      <SecaoSobreMim />
      <SecaoHabilidades />
      <SecaoAreasEspecialidade />
      <SecaoOutrosProjetos />
    </main>
  );
}