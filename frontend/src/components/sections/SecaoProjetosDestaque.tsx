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

const fallbackProjetos: Projeto[] = [
  {
    titulo: "NeuralFlow Analytics",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlkKT4VyOE87DJCO70rZCot3aIrXGSbNQzANkJoFJDJ1gP_rCD6UQ0_ywtUl4tFhJZvDFbmw1_NprwHRmDxWk3V4MuJp4itMe2mqWbE2CJk-iIEh3fbL6UJA5bpq7U_mtgB3a44pbtMcutVRkFlTPve2t08OnO7qhR0YuEAeZZCYwNfIDRW_CKIUqEP27_UaWqw5QQL1zrb0-m6bR_plbE_L5O16nLhSt94ubXGDvvMCDxIi02hsazxditHF5-J8k9vjV6i37nNwo",
    tecnologias: ["React", "OpenAI API"],
    destaque: true,
  },
  {
    titulo: "Mobile Hub",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZithTy5dkGK86OEVvCOhZkp_km9YmgxlaGyYWlehcxHhiX6D-iUrTwX9-R1kjcwm9bjKFfTitk4mVi5uVIlbvGXTcCGV-UO2O0T4WCcL1S42DM_tsLNikrHDBjPT1i7NfSa_jCytE1hEY8jhbDyupiVlTRUXsbf3aFP099nFD5mUVYgd9sphjdOLjbOs1dEL6tDcLtHMyIYBCIZ3IY_RibhKR0mVP6qcFyndZEJKQRb4-ABeKttVkwmy9f2bvx33tqmaQmkGPSU",
    tecnologias: ["React Native"],
    destaque: true,
  },
];

export default function SecaoProjetosDestaque() {
  const ref = useAnimacaoScroll<HTMLElement>();
  const [projetos, setProjetos] = useState<Projeto[]>(fallbackProjetos);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${apiUrl}/api/projetos`);
        if (!res.ok) throw new Error("Erro ao buscar projetos");
        const data = await res.json();
        
        // Formatação dos dados vindos da API
        const projetosFormatados: Projeto[] = data.map((p: any) => ({
          id: p.id,
          titulo: p.titulo,
          imagem: p.imagem_url || "https://via.placeholder.com/800x600?text=Projeto",
          tecnologias: typeof p.tecnologias === 'string' 
            ? p.tecnologias.split(',').map((t: string) => t.trim()).filter(Boolean)
            : (p.tecnologias || []),
          descricao: p.descricao,
          icone: "code",
          destaque: p.destaque // Captura a nova propriedade do backend
        }));

        // Filtra apenas os projetos com destaque e limita a um máximo de 2
        const projetosDestaque = projetosFormatados
          .filter((p) => p.destaque === true)
          .slice(0, 2);

        if (projetosDestaque.length > 0) {
          setProjetos(projetosDestaque);
        } else if (projetosFormatados.length > 0 && projetosDestaque.length === 0) {
          setProjetos([]); // Define como vazio se houver projetos na API, mas nenhum for destaque
        }
      } catch (error) {
        console.error("Falha ao carregar API, utilizando dados estáticos.", error);
      } finally {
        setCarregando(false);
      }
    }
    fetchProjetos();
  }, []);

  return (
    <section ref={ref} id="projetos" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16 flex items-center justify-between">
          <div>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
              Projetos em Destaque
            </h2>
            <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>
          {carregando && <span className="material-symbols-outlined animate-spin text-gray-500">sync</span>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.length > 0 ? (
            projetos.map((projeto, index) => (
              <ProjectCard 
                key={projeto.id ? `destaque-${projeto.id}` : `destaque-fallback-${index}`}
                titulo={projeto.titulo} 
                imagem={projeto.imagem} 
                tecnologias={projeto.tecnologias} 
                variante="destaque" 
              />
            ))
          ) : (
            <p className="text-gray-400">Nenhum projeto em destaque no momento.</p>
          )}
        </div>
      </div>
    </section>
  );
}