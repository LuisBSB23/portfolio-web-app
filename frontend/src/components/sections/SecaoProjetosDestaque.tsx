import { getProjetos } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';

export default async function SecaoProjetosDestaque() {
  const todosProjetos = await getProjetos();
  const projetosDestaque = todosProjetos.slice(0, 2);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projetosDestaque.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}