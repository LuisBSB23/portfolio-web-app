import SecaoHero from '@/components/sections/SecaoHero';
import SecaoSobreMim from '@/components/sections/SecaoSobreMim';
import SecaoHabilidades from '@/components/sections/SecaoHabilidades';
import SecaoAreasEspecialidade from '@/components/sections/SecaoAreasEspecialidade';
import SecaoProjetosDestaque from '@/components/sections/SecaoProjetosDestaque';
import SecaoOutrosProjetos from '@/components/sections/SecaoOutrosProjetos';
import SecaoContato from '@/components/sections/SecaoContato';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SecaoHero />
      <SecaoSobreMim />
      <SecaoHabilidades />
      <SecaoAreasEspecialidade />
      <SecaoProjetosDestaque />
      <SecaoOutrosProjetos />
      <SecaoContato />
    </main>
  );
}