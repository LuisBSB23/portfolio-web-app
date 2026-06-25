"use client";

interface MenuMobileProps {
  aberto: boolean;
  aoFechar: () => void;
}

export default function MenuMobile({ aberto, aoFechar }: MenuMobileProps) {
  return (
    <div
      id="mobile-menu"
      className="md:hidden absolute top-16 left-0 w-full border-b shadow-2xl transition-all duration-300 backdrop-blur-xl"
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.7)',
        borderColor: 'rgba(255,255,255,0.1)',
        opacity: aberto ? 1 : 0,
        visibility: aberto ? 'visible' : 'hidden',
        transform: aberto ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents: aberto ? 'auto' : 'none',
      }}
    >
      <div className="flex flex-col p-4 gap-2">
        <a
          href="#projetos"
          onClick={aoFechar}
          className="font-bold text-[16px] hover:bg-white/10 p-4 rounded-lg transition-colors flex items-center min-h-[48px]"
          style={{ color: 'var(--color-primary)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          Projetos
        </a>
         {/* Link Habilidades Adicionado */}
        <a
          href="#habilidades"
          onClick={aoFechar}
          className="text-[16px] hover:bg-white/10 p-4 rounded-lg transition-colors flex items-center min-h-[48px] text-white"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Habilidades
        </a>
        <a
          href="#sobre-mim"
          onClick={aoFechar}
          className="text-[16px] hover:bg-white/10 p-4 rounded-lg transition-colors flex items-center min-h-[48px] text-white"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Sobre
        </a>
        <a
          href="#contato"
          onClick={aoFechar}
          className="text-[16px] hover:bg-white/10 p-4 rounded-lg transition-colors flex items-center min-h-[48px] text-white"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Contato
        </a>
        <button
          className="px-4 py-3 mt-2 min-h-[48px] w-full rounded-lg font-bold text-[16px] transition-all active:opacity-80 hover:opacity-90 primary-button-glow"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          Baixar Currículo
        </button>
      </div>
    </div>
  );
}