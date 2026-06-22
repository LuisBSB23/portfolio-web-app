"use client";

import { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import { useAnimacaoScroll } from "@/hooks/useAnimacaoScroll";

interface Projeto {
  id?: number;
  titulo: string;
  imagem: string;
  tecnologias: string[];
  descricao?: string;
  icone?: string;
  destaque?: boolean;
}

export default function SecaoOutrosProjetos() {
  const ref = useAnimacaoScroll<HTMLElement>();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${apiUrl}/api/projetos`);
        if (!res.ok) throw new Error("Erro ao buscar projetos");
        const data = await res.json();
        
        const projetosFormatados: Projeto[] = data.map((p: any) => ({
          id: p.id,
          titulo: p.titulo,
          imagem: p.imagem_url || "https://via.placeholder.com/800x600?text=Projeto",
          tecnologias: typeof p.tecnologias === 'string' 
            ? p.tecnologias.split(',').map((t: string) => t.trim()).filter(Boolean)
            : (p.tecnologias || []),
          descricao: p.descricao,
          icone: "terminal", 
          destaque: p.destaque
        }));

        // Filtra para exibir APENAS os projetos que NÃO são destaque (destaque === false)
        const projetosNormais = projetosFormatados.filter((p) => p.destaque === false);
        
        setProjetos(projetosNormais);
      } catch (error) {
        console.error("Falha ao carregar API em Outros Projetos.", error);
      } finally {
        setCarregando(false);
      }
    }
    fetchProjetos();
  }, []);

  // Variável derivada: se 'mostrarTodos' for true, mostra tudo. Senão, recorta os primeiros 4.
  const projetosVisiveis = mostrarTodos ? projetos : projetos.slice(0, 4);

  return (
    <section ref={ref} id="projetos-adicionais" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16 flex items-center justify-between">
          <div>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
              Outros Projetos
            </h2>
            <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>
          {carregando && <span className="material-symbols-outlined animate-spin text-gray-500">sync</span>}
        </div>
        
        {!carregando && projetos.length === 0 ? (
          <div className="p-6 border rounded-lg text-center" style={{ backgroundColor: "var(--color-surface-container)", borderColor: "rgba(255,255,255,0.05)" }}>
            <p style={{ color: "var(--color-on-surface-variant)", fontFamily: "Inter, sans-serif" }}>
              Nenhum projeto adicional no momento.
            </p>
          </div>
        ) : (
          // Restaurado para grid-cols-1 sm:grid-cols-2 original
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projetosVisiveis.map((projeto, index) => (
              <ProjectCard 
                key={projeto.id ? `outros-${projeto.id}` : `outros-fallback-${index}`} 
                titulo={projeto.titulo} 
                imagem={projeto.imagem} 
                tecnologias={projeto.tecnologias} 
                descricao={projeto.descricao} // Restaurado: essencial para o visual original
                icone={projeto.icone}         // Restaurado: essencial para o visual original
                variante="outros" 
              />
            ))}
          </div>
        )}

        {/* Renderiza o botão "Ver mais" APENAS se houver mais de 4 projetos no total */}
        {projetos.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setMostrarTodos(!mostrarTodos)}
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: "transparent", 
                color: "var(--color-on-surface)",
                border: "1px solid var(--color-on-surface-variant)"
              }}
            >
              {mostrarTodos ? "Ver menos" : "Ver mais projetos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}