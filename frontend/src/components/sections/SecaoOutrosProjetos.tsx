import { getProjetos } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';

export default async function SecaoOutrosProjetos() {
  const todosProjetos = await getProjetos();
  const outrosProjetos = todosProjetos.slice(2);

  if (outrosProjetos.length === 0) return null;

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Outros Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outrosProjetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}