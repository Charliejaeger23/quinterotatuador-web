export const metadata = { title: "Portafolio — Quinterotatuador" };

const works = Array.from({ length: 9 }, (_, i) => ({
  src: `https://picsum.photos/600/600?random=${i + 10}`,
  alt: `Trabajo ${i + 1}`,
}));

export default function Portafolio() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Portafolio</h1>
      <p className="mb-6 text-neutral-600">Selección de piezas recientes.</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {works.map((w) => (
          <img key={w.src} src={w.src} alt={w.alt} className="aspect-square w-full rounded-xl object-cover" />
        ))}
      </div>
    </div>
  );
}
