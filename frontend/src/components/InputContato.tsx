'use client';

import { useState } from 'react';
import Botao from './ui/Botao';
import Input from './ui/Input';

export default function InputContato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Substitua pela URL fornecida pelo Formspree
      const response = await fetch('https://formspree.io/f/xljjjnop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto w-full">
      <Input
        name="nome"
        placeholder="Seu Nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Seu E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="mensagem"
        placeholder="Sua Mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white transition-colors min-h-[120px] resize-y text-white"
      />
      <Botao type="submit" disabled={status === 'loading'} className="w-full justify-center mt-2">
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
      </Botao>
      
      {status === 'success' && <p className="text-green-400 text-center mt-2">Mensagem enviada com sucesso!</p>}
      {status === 'error' && <p className="text-red-400 text-center mt-2">Erro ao enviar. Tente novamente.</p>}
    </form>
  );
}