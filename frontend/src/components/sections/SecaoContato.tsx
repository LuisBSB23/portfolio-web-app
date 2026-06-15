"use client";

import { useState } from "react";
import InputContato from "../InputContato";

export default function SecaoContato() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!form.nome || !form.email || !form.mensagem) return;
        setEnviando(true);
        await new Promise((r) => setTimeout(r, 1200));
        setEnviando(false);
        setEnviado(true);
        setForm({ nome: "", email: "", mensagem: "" });
    }

    return (
        <section id="contato" className="relative py-16 md:py-24 z-10">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
                {/* Título */}
                <div className="mb-8 md:mb-16">
                    <h2 className="font-bold mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 32px)", color: "#F3F4F6", letterSpacing: "-0.02em" }}>
                        Entre em Contato
                    </h2>
                    <div className="h-1 w-20" style={{ backgroundColor: "var(--color-primary)" }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {/* Informações */}
                    <div className="flex flex-col gap-6">
                        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: "var(--color-on-secondary-container)" }}>
                            Estou sempre aberto a novos desafios e colaborações em projetos inovadores. Entre em contato e vamos construir algo juntos!
                        </p>

                        <a href="mailto:luisferreira301104@gmail.com" className="flex items-center gap-4 group min-h-[48px] px-2 w-full max-w-sm rounded-lg transition-colors hover:bg-white/5">
                            <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center transition-colors group-hover:bg-red-500" style={{ backgroundColor: "var(--color-surface-container)", color: "var(--color-primary)" }}>
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <span className="text-[16px] break-all" style={{ color: "var(--color-on-surface)", fontFamily: "Inter, sans-serif" }}>luisferreira301104@gmail.com</span>
                        </a>

                        <a href="tel:+5561900000000" className="flex items-center gap-4 group min-h-[48px] px-2 w-full max-w-sm rounded-lg transition-colors hover:bg-white/5">
                            <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center transition-colors group-hover:bg-red-500" style={{ backgroundColor: "var(--color-surface-container)", color: "var(--color-primary)" }}>
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <span className="text-[16px]" style={{ color: "var(--color-on-surface)", fontFamily: "Inter, sans-serif" }}>+55 (61) 9XXXX-XXXX</span>
                        </a>

                        <div className="flex items-center gap-4 min-h-[48px] px-2 w-full max-w-sm">
                            <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--color-surface-container)", color: "var(--color-primary)" }}>
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <span className="text-[16px]" style={{ color: "var(--color-on-surface)", fontFamily: "Inter, sans-serif" }}>Brasília, DF</span>
                        </div>

                        <div className="flex gap-4 mt-2">
                            <a href="#" className="flex items-center gap-2 min-h-[48px] px-3 rounded-lg transition-colors hover:bg-white/5" style={{ color: "var(--color-on-surface-variant)", fontFamily: "JetBrains Mono, monospace", fontSize: "14px" }}>
                                <span className="material-symbols-outlined text-[20px]">link</span>LinkedIn
                            </a>
                            <a href="#" className="flex items-center gap-2 min-h-[48px] px-3 rounded-lg transition-colors hover:bg-white/5" style={{ color: "var(--color-on-surface-variant)", fontFamily: "JetBrains Mono, monospace", fontSize: "14px" }}>
                                <span className="material-symbols-outlined text-[20px]">terminal</span>GitHub
                            </a>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="rounded-xl p-6 md:p-8 border flex flex-col gap-5" style={{ backgroundColor: "var(--color-surface-container)", borderColor: "rgba(255,255,255,0.05)" }}>
                        {enviado ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                                <span className="material-symbols-outlined text-[56px]" style={{ color: "var(--color-primary)" }}>check_circle</span>
                                <p className="font-bold text-[20px]" style={{ color: "#F3F4F6", fontFamily: "Inter, sans-serif" }}>Mensagem enviada!</p>
                                <p style={{ color: "var(--color-on-secondary-container)", fontFamily: "Inter, sans-serif" }}>Entrarei em contato em breve.</p>
                                <button onClick={() => setEnviado(false)} className="mt-2 text-sm underline" style={{ color: "var(--color-primary)", fontFamily: "Inter, sans-serif" }}>
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <>
                                <InputContato id="nome" name="nome" label="Nome" value={form.nome} placeholder="Seu nome" onChange={handleChange} />
                                <InputContato id="email" name="email" label="Email" type="email" value={form.email} placeholder="seu@email.com" onChange={handleChange} />
                                <InputContato id="mensagem" name="mensagem" label="Mensagem" value={form.mensagem} placeholder="Conte-me sobre seu projeto..." onChange={handleChange} textarea rows={5} />

                                <button
                                    onClick={handleSubmit}
                                    disabled={enviando}
                                    className="w-full min-h-[48px] py-3 rounded-lg font-bold transition-all primary-button-glow flex items-center justify-center gap-2 disabled:opacity-60"
                                    style={{ backgroundColor: "var(--color-primary)", color: "#ffffff", fontFamily: "Inter, sans-serif", fontSize: "16px" }}
                                >
                                    {enviando ? (
                                        <><span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>Enviando...</>
                                    ) : (
                                        <>Enviar Mensagem<span className="material-symbols-outlined text-[20px]">send</span></>
                                    )}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}