"use client";

import { useState } from "react";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  function toggleMenu() {
    setMenuAberto((prev) => !prev);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b h-16"
      style={{
        backgroundColor: 'var(--color-background)',
        borderColor: 'rgba(255,255,255,0.05)',
        opacity: 0.9,
      }}
    >
      <div
        className="mx-auto px-4 md:px-5 flex justify-between items-center h-full"
        style={{ maxWidth: '1200px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold text-[24px] flex items-center min-h-[48px] transition-colors"
          style={{ color: 'var(--color-on-surface)', fontFamily: 'Inter, sans-serif' }}
        >
          Luis Otávio
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4">
            <a
              href="#projetos"
              className="font-bold text-[14px] transition-colors duration-300 flex items-center min-h-[48px] px-2 hover:opacity-80"
              style={{ color: 'var(--color-primary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}
            >
              Projetos
            </a>
            <a
              href="#sobre-mim"
              className="text-[14px] transition-colors duration-300 flex items-center min-h-[48px] px-2 hover:opacity-80"
              style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-[14px] transition-colors duration-300 flex items-center min-h-[48px] px-2 hover:opacity-80"
              style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}
            >
              Contato
            </a>
          </div>

          <button
            className="px-6 py-2 min-h-[48px] rounded-lg font-bold text-[14px] transition-all active:opacity-80 hover:opacity-90 primary-button-glow"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Baixar Currículo
          </button>
        </div>

        {/* Botão menu mobile */}
        <button
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          onClick={toggleMenu}
          className="md:hidden w-[48px] h-[48px] flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
          style={{ color: 'var(--color-on-surface)' }}
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuAberto ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <MenuMobile aberto={menuAberto} aoFechar={fecharMenu} />
    </nav>
  );
}