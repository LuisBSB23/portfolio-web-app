export default function Rodape() {
  return (
    <footer
      className="relative border-t pt-8 pb-8 z-20"
      id="contato"
      style={{
        backgroundColor: 'var(--color-background)',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      <div className="mx-auto px-4 sm:px-5" style={{ maxWidth: '1200px' }}>

        {/* Rodapé inferior simplificado */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
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
        </div>

      </div>
    </footer>
  );
}