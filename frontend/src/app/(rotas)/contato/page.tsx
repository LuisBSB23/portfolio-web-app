import InputContato from '@/components/InputContato';

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
      <InputContato />
    </main>
  );
}