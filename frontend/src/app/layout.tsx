import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/layout/Cabecalho";
import Rodape from "@/components/layout/Rodape";

export const metadata: Metadata = {
  title: "Luis Otávio | Portfolio",
  description: "Desenvolvedor Full Stack especializado em soluções web inteligentes e escaláveis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-on-surface)' }}>
        <div id="particles-js" className="fixed inset-0 z-0 pointer-events-none" />
        <div className="fixed inset-0 grain-texture z-0" />
        <div className="fixed inset-0 hero-glow z-0" />
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}