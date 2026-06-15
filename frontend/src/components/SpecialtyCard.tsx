"use client";

interface SpecialtyCardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function SpecialtyCard({ icone, titulo, descricao }: SpecialtyCardProps) {
  return (
    <div
      className="border border-white/5 p-8 rounded-xl flex flex-col items-start gap-4 transition-all duration-300"
      style={{ backgroundColor: "#1A1A1A" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(229,62,62,0.3)";
        e.currentTarget.style.borderColor = "rgba(229,62,62,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
      }}
    >
      <span className="material-symbols-outlined text-[40px]" style={{ color: "var(--color-primary)" }}>
        {icone}
      </span>
      <h3 className="font-bold" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(20px, 2vw, 24px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
        {titulo}
      </h3>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.6, color: "var(--color-on-secondary-container)" }}>
        {descricao}
      </p>
    </div>
  );
}