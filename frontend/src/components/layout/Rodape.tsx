export default function Rodape() {
  return (
    <footer
      className="relative border-t pt-16 pb-8 z-20"
      id="contato"
      style={{
        backgroundColor: 'var(--color-background)',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      <div className="mx-auto px-4 sm:px-5" style={{ maxWidth: '1200px' }}>

        {/* Conteúdo superior */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 mb-12">

          {/* Texto esquerdo */}
          <div className="text-center md:text-left">
            <h2
              className="font-bold text-[28px] md:text-[32px] mb-4"
              style={{ color: '#F3F4F6', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              Vamos construir algo juntos?
            </h2>
            <p
              className="text-[16px] md:text-[18px] max-w-[400px] mx-auto md:mx-0"
              style={{ color: 'var(--color-on-secondary-container)', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
            >
              Estou sempre aberto a novos desafios e colaborações em projetos inovadores.
            </p>
          </div>

          {/* Contatos */}
          <div className="flex flex-col gap-6 md:gap-4 items-center md:items-start">
            {/* Email */}
            <a
              href="mailto:luisferreira301104@gmail.com"
              className="flex items-center gap-4 group min-h-[48px] px-2 w-full max-w-sm rounded-lg transition-colors hover:bg-white/5"
            >
              <div
                className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors group-hover:bg-red-500"
                style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-primary)' }}
              >
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span
                className="text-[16px] break-all"
                style={{ color: 'var(--color-on-surface)', fontFamily: 'Inter, sans-serif' }}
              >
                luisferreira301104@gmail.com
              </span>
            </a>

            {/* Telefone */}
            <a
              href="tel:+55619XXXX-XXXX"
              className="flex items-center gap-4 group min-h-[48px] px-2 w-full max-w-sm rounded-lg transition-colors hover:bg-white/5"
            >
              <div
                className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors group-hover:bg-red-500"
                style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-primary)' }}
              >
                <span className="material-symbols-outlined">call</span>
              </div>
              <span
                className="text-[16px]"
                style={{ color: 'var(--color-on-surface)', fontFamily: 'Inter, sans-serif' }}
              >
                +55 (61) 9XXXX-XXXX
              </span>
            </a>

            {/* Localização */}
            <div className="flex items-center gap-4 min-h-[48px] px-2 w-full max-w-sm">
              <div
                className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-primary)' }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span
                className="text-[16px]"
                style={{ color: 'var(--color-on-surface)', fontFamily: 'Inter, sans-serif' }}
              >
                Brasília, DF
              </span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span
              className="font-bold text-[14px] min-h-[48px] flex items-center"
              style={{ color: 'var(--color-on-surface)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              Luis Otávio
            </span>
            <span className="hidden md:block h-4 w-[1px] bg-white/10" />
            <p
              className="text-[14px]"
              style={{ color: 'var(--color-on-secondary-container)', fontFamily: 'Inter, sans-serif' }}
            >
              © 2024 Luis Otávio. Desenvolvido com precisão.
            </p>
          </div>

          {/* Links sociais */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-[12px] md:text-[14px] transition-colors duration-300 min-h-[48px] px-2 hover:opacity-80"
              style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="material-symbols-outlined text-[20px]">link</span>
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[12px] md:text-[14px] transition-colors duration-300 min-h-[48px] px-2 hover:opacity-80"
              style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="material-symbols-outlined text-[20px]">terminal</span>
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}