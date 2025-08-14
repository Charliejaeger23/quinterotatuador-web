import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80svh] md:min-h-[90svh] overflow-hidden">
        <Image
          src="/img/hero-adrian.jpg"
          alt="Adrián tatuando"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay para lectura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative container py-16 md:py-28">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur">
            Blackwork • Realismo B&G • Tradicional
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl leading-tight font-[var(--font-cinzel)] font-extrabold">
            Tatuajes personalizados que cuentan tu historia
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
            Proceso claro, diseño anatómico y resultado que te representa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="px-5 py-3 rounded-xl bg-brand-red hover:brightness-110 transition shadow-lg shadow-black/30"
            >
              Cuéntame tu idea
            </a>
            <a
              href="#portafolio"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/15 hover:ring-brand-red transition"
            >
              Ver portafolio
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-white/70">
            <span>10+ años</span>
            <span>1000+ sesiones</span>
            <span>Atención 1:1</span>
          </div>
        </div>
      </section>

      {/* CASOS RECIENTES / PORTAFOLIO */}
      <section id="portafolio" className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-[var(--font-cinzel)] font-bold">
          Casos recientes
        </h2>
        <p className="mt-2 text-white/70">Selección de piezas recientes.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/img/work-lion-wolf-sleeve.jpg", label: "Blackwork simbólico" },
            { src: "/img/work-rose-arm.jpg", label: "Realismo B&G" },
            { src: "/img/work-roses-thigh.jpg", label: "Floral anatómico" },
            { src: "/img/work-mes-amis-1.jpg", label: "Mes Amis — Dotwork" },
            { src: "/img/work-snake.jpg", label: "Cobra — Detalle" },
            { src: "/img/proceso-01.jpg", label: "Proceso" },
          ].map((item) => (
            <figure key={item.src} className="card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-white/80">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* INFO / SELLING POINTS */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Diseño que te representa</h3>
            <p className="mt-2 text-white/70">
              Boceto y propuesta adaptada a tu anatomía y a tu historia.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Proceso claro</h3>
            <p className="mt-2 text-white/70">
              Comunicación directa 1:1 y recomendaciones honestas.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Higiene y técnica</h3>
            <p className="mt-2 text-white/70">
              Materiales descartables y técnica enfocada en cicatrizar bien.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-[var(--font-cinzel)] font-bold">
          Hablemos de tu idea
        </h2>
        <p className="mt-2 text-white/70">
          Completa el formulario y te respondo con recomendaciones y
          disponibilidad.
        </p>

        <form
          action="https://formspree.io/f/xeoznyke"
          method="POST"
          className="mt-8 grid gap-4 max-w-2xl"
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
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="container py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Quinterotatuador — Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
