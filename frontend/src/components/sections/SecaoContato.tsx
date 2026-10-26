import InputContato from '@/components/InputContato';

export default function SecaoContato() {
  return (
    <section id="contato" className="py-20 px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-400">
          Tem algum projeto em mente ou quer apenas dar um oi? Preencha o formulário abaixo.
        </p>
      </div>
      
      {/* O componente agora renderiza o formulário completo do Formspree */}
      <InputContato />
    </section>
  );
}