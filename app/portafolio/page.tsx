import Image from "next/image";

export const metadata = { title: "Portafolio — Quinterotatuador" };

const works = [
  { src: "/img/work-lion-wolf-sleeve.jpg", alt: "Blackwork simbólico" },
  { src: "/img/work-rose-arm.jpg", alt: "Realismo B&G" },
  { src: "/img/work-roses-thigh.jpg", alt: "Floral anatómico" },
  { src: "/img/work-mes-amis-1.jpg", alt: "Mes Amis — Dotwork" },
  { src: "/img/work-snake.jpg", alt: "Cobra — Detalle" },
  { src: "/img/proceso-01.jpg", alt: "Proceso" },
  { src: "/img/proceso-02.jpg", alt: "Proceso 2" },
  { src: "/img/hero-adrian.jpg", alt: "Adrián tatuando" },
];

export default function Portafolio() {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="mb-4 text-2xl md:text-4xl font-[var(--font-cinzel)] font-bold">Portafolio</h1>
      <p className="mb-6 text-white/70">Selección de piezas recientes.</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {works.map((w) => (
          <figure key={w.src} className="card">
            <div className="relative aspect-square">
              <Image
                src={w.src}
                alt={w.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <figcaption className="p-3 text-sm text-white/80">{w.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
