export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4"
      style={{ backgroundColor: 'var(--color-background)' }}>

      <p style={{ color: 'var(--color-on-surface)', fontFamily: 'Inter' }}
         className="text-2xl font-bold">
        Fundo preto + texto claro ✅
      </p>

      <div className="w-20 h-1" style={{ backgroundColor: 'var(--color-primary)' }} />

      <button
        className="primary-button-glow px-8 py-3 rounded-lg font-bold transition-all"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
        Hover para ver glow 🔴
      </button>

      <span className="material-symbols-outlined floating-icon text-[48px]"
            style={{ color: 'var(--color-primary)' }}>
        code
      </span>

      <p style={{ fontFamily: 'JetBrains Mono', color: 'var(--color-primary)' }}
         className="text-sm uppercase tracking-widest">
        JetBrains Mono ✅
      </p>

    </main>
  );
}