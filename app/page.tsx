import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline rounded-full border px-3 py-1 text-xs tracking-wide">
            Blackwork · Realismo B&G · Tradicional
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Tatuajes personalizados que cuentan tu historia
          </h1>
          <p className="text-neutral-600">
            Proceso claro, diseño anatómico y simbólico. Agenda una consulta breve
            y llevemos tu idea a una pieza única.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="rounded bg-black px-5 py-3 text-white">
              Agenda tu consulta
            </a>
            <a href="#portafolio" className="rounded border px-5 py-3">
              Ver portafolio
            </a>
          </div>

          <div className="flex gap-6 pt-4 text-xs text-neutral-500">
            <span>+10 años de experiencia</span>
            <span>Atención 1:1</span>
            <span>Valencia · Puerto Cabello</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/1200/900?grayscale&random=40"
            alt="Tatuaje personalizado"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Servicios</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Diseño Personalizado", d: "Exploración simbólica, boceto dirigido y ajuste anatómico.", p: "A consultar" },
            { t: "Blackwork / Linework", d: "Piezas gráficas, sólidas y limpias con alto contraste.", p: "A consultar" },
            { t: "Realismo Black & Grey", d: "Sombras detalladas, texturas y transiciones suaves.", p: "A consultar" },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border p-5">
              <h3 className="mb-2 font-medium">{c.t}</h3>
              <p className="mb-3 text-sm text-neutral-600">{c.d}</p>
              <p className="text-sm font-semibold">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Cómo trabajamos</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            { t: "1) Consulta", d: "Contexto, significado y referencias. Definimos alcance y medida." },
            { t: "2) Boceto", d: "Composición anatómica + estilo. Ajustes finos antes de tatuar." },
            { t: "3) Tatuaje", d: "Ejecución precisa, cuidado y seguimiento. Instrucciones de aftercare." },
          ].map((s) => (
            <li key={s.t} className="rounded-xl border p-5">
              <h3 className="mb-2 font-medium">{s.t}</h3>
              <p className="text-sm text-neutral-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-semibold">Portafolio</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/800/800?grayscale&random=${i + 60}`}
                alt={`Trabajo ${i + 1}`}
                className="aspect-square w-full rounded-xl object-cover"
              />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/portafolio" className="text-sm underline">
              Ver galería completa →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Personas que confiaron</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "María R.", t: "Buscaba un ritual de transición. Logramos una pieza simbólica que me acompaña." },
            { n: "Daniel V.", t: "El blackwork quedó impecable y el proceso fue clarísimo de principio a fin." },
            { n: "Lucía A.", t: "Mi tatuaje en B&G tiene vida. El sombreado y el cuidado post fue 10/10." },
          ].map((x) => (
            <figure key={x.n} className="rounded-xl border p-5">
              <blockquote className="text-sm text-neutral-700">“{x.t}”</blockquote>
              <figcaption className="mt-3 text-xs text-neutral-500">— {x.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {[
            { q: "¿Duele mucho?", a: "Depende de la zona y tu tolerancia. Trabajo por bloques y con descansos." },
            { q: "¿Cómo cuido el tatuaje?", a: "Plan de aftercare con limpieza, crema y tiempos de curación." },
            { q: "¿Repites diseños?", a: "No. Cada pieza es única y se ajusta a tu cuerpo e historia." },
          ].map((f, i) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Agenda tu consulta</h2>
            <p className="text-neutral-600">
              Cuéntame tu idea y te respondo con recomendaciones y disponibilidad.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>• Valencia / Puerto Cabello</li>
              <li>• Atención por cita · Diseño personalizado</li>
              <li>• WhatsApp al confirmar la consulta</li>
            </ul>
          </div>

<form
  action="https://formspree.io/f/xeoznyke"
  method="POST"
  className="space-y-4 rounded-xl border p-5"
>
  <input type="hidden" name="_subject" value="Nueva consulta desde la web" />
  <input type="hidden" name="_next" value="/gracias" />

  <div>
    <label className="mb-1 block text-sm">Nombre</label>
    <input
      name="nombre"
      required
      className="w-full rounded border p-2"
      placeholder="Tu nombre"
    />
  </div>

  <div>
    <label className="mb-1 block text-sm">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full rounded border p-2"
      placeholder="tu@email.com"
    />
  </div>

  <div>
    <label className="mb-1 block text-sm">Mensaje</label>
    <textarea
      name="mensaje"
      required
      className="w-full rounded border p-2"
      rows={4}
      placeholder="Escribe tu mensaje..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Enviar
  </button>
</form>

        </div>
      </section>

      {/* CTA FIJA MÓVIL */}
      <div className="fixed bottom-3 left-0 right-0 mx-auto w-full max-w-md px-4 sm:hidden">
        <a href="#contacto" className="block rounded-full bg-black py-3 text-center text-white shadow-lg">
          Agenda tu consulta
        </a>
      </div>
    </>
  );
}
