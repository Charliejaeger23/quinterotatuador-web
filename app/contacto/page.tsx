export const metadata = { title: "Contacto — Quinterotatuador" };

export default function Contacto() {
  return (
    <div className="max-w-lg">
      <h1 className="mb-4 text-2xl font-semibold">Hablemos de tu idea</h1>
      <p className="mb-6 text-neutral-600">
        Completa el formulario y te respondo con recomendaciones y disponibilidad.
      </p>
      {/* Por ahora sin backend: cambia la URL de action por tu Formspree cuando lo tengas */}
      <form action="https://formspree.io/f/XXXXABCD" method="POST" className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Nombre</label>
          <input name="nombre" required className="w-full rounded border p-3" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input type="email" name="email" required className="w-full rounded border p-3" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm">Mensaje</label>
          <textarea name="mensaje" required className="h-32 w-full rounded border p-3" placeholder="Cuéntame lo que tienes en mente" />
        </div>
        <input type="text" name="_gotcha" className="hidden" />
        <button className="rounded bg-black px-4 py-2 text-white">Enviar</button>
      </form>
    </div>
  );
}
