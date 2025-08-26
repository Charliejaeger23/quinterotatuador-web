export const metadata = { title: "Contacto — Quinterotatuador" };

export default function Contacto() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-2xl md:text-4xl font-[var(--font-cinzel)] font-bold">Hablemos de tu idea</h1>
        <p className="mb-6 text-white/70">
          Completa el formulario y te respondo con recomendaciones y disponibilidad.
        </p>
        <form
          action="https://formspree.io/f/xeoznyke"
          method="POST"
          className="grid gap-4"
        >
          <input type="hidden" name="_subject" value="Nueva consulta desde la web" />
          <input type="hidden" name="_next" value="/gracias" />

          <div>
            <label className="mb-1 block text-sm">Nombre</label>
            <input
              name="nombre"
              required
              placeholder="Tu nombre"
              className="w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 outline-none focus:ring-brand-red"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 outline-none focus:ring-brand-red"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Mensaje</label>
            <textarea
              name="mensaje"
              rows={5}
              placeholder="Cuéntame lo que tienes en mente"
              className="w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 outline-none focus:ring-brand-red"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-xl bg-brand-red px-5 py-3 font-medium hover:brightness-110 transition shadow-lg shadow-black/30"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
