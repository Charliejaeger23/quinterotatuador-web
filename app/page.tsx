import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Tatuajes personalizados que cuentan tu historia
          </h1>
          <p className="mb-6">
            Blackwork, realismo en black & grey y tradicional. Proceso claro, diseño pensado en tu cuerpo y un resultado que te representa.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded">
              Cuéntame tu idea
            </button>
            <button className="border px-6 py-2 rounded">
              Ver portafolio
            </button>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt="Tatuaje personalizado"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>

      {/* Casos Recientes */}
      <section className="w-full max-w-6xl px-8">
        <h2 className="text-2xl font-bold mb-6">Casos recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow">
            <Image src="/images/blackwork.jpg" alt="Blackwork simbólico" width={400} height={300} />
            <p className="p-4">Blackwork simbólico</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <Image src="/images/realismo.jpg" alt="Realismo B&G" width={400} height={300} />
            <p className="p-4">Realismo B&G</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <Image src="/images/tradicional.jpg" alt="Tradicional" width={400} height={300} />
            <p className="p-4">Tradicional</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-black text-white text-center p-12 mt-12 w-full">
        <h2 className="text-3xl font-bold mb-4">¿Listo para tu próximo tatuaje?</h2>
        <p className="mb-6">Transforma tu idea en una obra de arte única en tu piel.</p>
        <button className="bg-white text-black px-8 py-3 rounded">Agendar ahora</button>
      </section>
    </main>
  );
}
