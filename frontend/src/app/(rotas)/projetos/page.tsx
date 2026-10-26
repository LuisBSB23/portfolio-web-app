import { getProjetos } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjetosPage() {
  const projetos = await getProjetos();

  return (
    <main className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Todos os Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </main>
  );
}