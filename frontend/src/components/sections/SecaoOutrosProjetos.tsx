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
}

const fallbackOutrosProjetos: Projeto[] = [
  { titulo: "MedControl", imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC-kIpptCc8tafp6bHU5NE0ku09wjsjhwHjhbS9XpyqM5wPiRuNJJAQqD4egCuui25n1lK3tUt7crRmaqpIU7Gv5eYc6PqIXT-QPg_luOqdYOwMWEl_7HQfetweHsMe1V18YJS2oQmUFdAfs-WyE9Ch2CtKfRnhigrxe99LW6BdWUHu4XMdjhO8Qhv9f6Epi54YmKn1bIsfGR0Y0Q1dUSH78zB-8UtnVYAWZAwmgU16vWeV5_ZPP3NPPRLRGqY8aWO02IO5SDrnI4", tecnologias: ["Java", "Spring Boot"], descricao: "Sistema de gestão de estoque para saúde pública com foco em rastreabilidade e eficiência.", icone: "inventory_2" },
  { titulo: "TalentBridge", imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNWKv-Qk3Zl1gqBntewPepTFszAAqfiWInAJqzhV9Z2Wp7XSe4ZkKT2X3-u32c3zGVjL_EAa9pweqGaY7h-ZrF7FA_KG6A_r22c8xi1C3nkqfO5zUQRhjhB7YQ8PCIr4R3cwtpjilrXzYgM3gxQANr4DTsmPdOLQAR9YUBAn4ELHGh5jKStvhq_UtdIZKpirgQSSAurpbRd2zWb8mJYvKFQkmdUSA_WJB9ceQsU3h_7gb0m6Vt-V2r8UmTMheSO00UlnndTIjZv8A", tecnologias: ["Next.js", "OpenAI API"], descricao: "Banco de talentos e currículos potencializado por IA para matching inteligente de vagas.", icone: "psychology" },
  { titulo: "InventaAI", imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7W5-nwF9hFHA5GHmnFt4tkHP3aemJypHr9aXQos_iuGGMPbBvxz9HAAd7dfSnmKp1rzU1sY5JsDHRJYOnvGpQE5a6fs_fU7e1kuhPgrw8IbmgHcFyPquhrl-MkUaYNg8mgj9xPUg4oxZUAZXoHUmeU2RQPPNFVzupOFyv8u3NLBYSPAyYN5grX7uDFFZ3Q5WLrm1-9nfvedMcXAXNCbeRS5PZq8ijsfUfKTmnyPs5qcBUH6YR07Ie8WgDCEeQgRs7Ry6QISvTUws", tecnologias: ["React Native", "Python"], descricao: "Aplicativo móvel que utiliza IA para sugerir receitas baseadas nos ingredientes disponíveis.", icone: "restaurant" },
  { titulo: "API Financeira", imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuAilzjJHivKYjuyfLEHkRCo2CgokP5kRqOwNAR9fPVvUaxxteMbJclPJhf4dUlMLaTfntGcgO-d-oqcqa5s4ylQ5g3dz7dFoTdDVXKOlS6wZ5D7V-CaSe84FfWhYqmf9OcC3Vh0xZbFtRSPKy8khaZMRuT-uReMjd3HTgYvkwxjJqK2VBtbMDrFhU_fDNpoKcjW7YmSlNVtzGM1165_FgaWDuroWnqvu5aEc7C-FumKSWUZ5j405iWzZ4-_m4_nWUXP1zvQ7kia3xA", tecnologias: ["Java", "Clean Architecture"], descricao: "Sistema bancário robusto desenvolvido com Clean Architecture e testes automatizados.", icone: "account_balance" },
];

export default function SecaoOutrosProjetos() {
  const ref = useAnimacaoScroll<HTMLElement>();
  const [projetos, setProjetos] = useState<Projeto[]>(fallbackOutrosProjetos);
  const [carregando, setCarregando] = useState(true);
  
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
        }));

        // A lógica de separação: os 2 primeiros vão para Destaque. Do 3º em diante, vêm para cá.
        if (projetosFormatados.length > 2) {
          setProjetos(projetosFormatados.slice(2));
        } else {
          setProjetos([]); // Esvazia se só houver 2 ou menos na API
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
    <section ref={ref} id="projetos-adicionais" className="relative py-16 md:py-24 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="mb-8 md:mb-16 flex items-center justify-between">
          <div>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
              Outros Projetos
            </h2>
            <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>
          {/* Ícone de loading igual ao da secção de destaque */}
          {carregando && <span className="material-symbols-outlined animate-spin text-gray-500">sync</span>}
        </div>
        
        {/* Mostra mensagem clara em vez de esconder tudo se estiver vazio */}
        {!carregando && projetos.length === 0 ? (
          <div className="p-6 border rounded-lg text-center" style={{ backgroundColor: "var(--color-surface-container)", borderColor: "rgba(255,255,255,0.05)" }}>
            <p style={{ color: "var(--color-on-surface-variant)", fontFamily: "Inter, sans-serif" }}>
              Para que os projetos apareçam aqui, adicione 3 ou mais projetos na sua Base de Dados. Os 2 primeiros ficam em destaque.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projetos.map((projeto, index) => (
              <ProjectCard 
                key={projeto.id ? `outros-${projeto.id}` : `outros-fallback-${index}`} 
                titulo={projeto.titulo} 
                imagem={projeto.imagem} 
                tecnologias={projeto.tecnologias} 
                descricao={projeto.descricao} 
                icone={projeto.icone} 
                variante="outros" 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}