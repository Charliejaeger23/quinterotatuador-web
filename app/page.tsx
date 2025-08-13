import Nav from "./components/Nav";
import LightboxClient from "./components/LightboxClient";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO fullscreen con overlay y KPIs */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-adrian.jpg" alt="" className="absolute inset-0 h-[86vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="container relative flex min-h-[86vh] flex-col justify-center">
          <p className="mb-3 inline rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            Blackwork · Realismo B&G · Tradicional
          </p>
          <h1 className="max-w-2xl font-[var(--font-cinzel)] text-4xl leading-tight md:text-6xl">
            Tatuajes personalizados que cuentan tu historia
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Proceso claro, diseño anatómico y resultado que te representa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contacto" className="rounded bg-brand-red px-5 py-3 text-white hover:bg-white hover:text-black transition">
              Agenda tu consulta
            </a>
            <a href="#portafolio" className="rounded border border-white/30 px-5 py-3 text-white/90 hover:bg-white/10">
              Ver portafolio
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-xs text-white/70">
            <div><span className="text-white font-semibold">10+</span> años</div>
            <div><span className="text-white font-semibold">1000+</span> sesiones</div>
            <div><span className="text-white font-semibold">1:1</span> atención</div>
          </div>
        </div>
      </section>

      {/* Barra de confianza */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="container grid grid-cols-1 gap-4 py-4 text-sm text-white/80 md:grid-cols-3">
          <div>💉 Agujas estériles · Descartables</div>
          <div>🛡️ Bioseguridad certificada</div>
          <div>📄 Diseño 100% original</div>
        </div>
      </section>

      {/* PROCESO con fotos reales + cards */}
      <section id="proceso" className="container py-12">
        <h2 className="mb-6 font-[var(--font-cinzel)] text-2xl">Cómo trabajamos</h2>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {["/images/proceso-01.jpg","/images/proceso-02.jpg","/images/hero-adrian.jpg"].map(src => (
            <div key={src} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Proceso de tatuaje — Quinterotatuador" className="aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t:"Consulta", d:"Contexto, significado y medidas." },
            { t:"Boceto", d:"Composición anatómica y ajustes." },
            { t:"Tatuaje", d:"Ejecución precisa + aftercare." },
          ].map(s => (
            <div key={s.t} className="card p-5">
              <h3 className="mb-1 font-medium">{s.t}</h3>
              <p className="text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTAFOLIO con LIGHTBOX */}
      <section id="portafolio" className="bg-[#0F0F0F]">
        <div className="container py-12">
          <h2 className="mb-6 font-[var(--font-cinzel)] text-2xl">Portafolio</h2>
          <LightboxClient
            images={[
              { src:"/images/work-snake.jpg", alt:"Cobra — Black & Grey" },
              { src:"/images/work-rose-arm.jpg", alt:"Rosa en antebrazo — Linework" },
              { src:"/images/work-roses-thigh.jpg", alt:"Rosas en muslo — B&G" },
              { src:"/images/work-lion-wolf-sleeve.jpg", alt:"Sleeve León y Lobo — Realismo" },
              { src:"/images/work-mes-amis-1.jpg", alt:"Mes Amis — Blackwork" },
              { src:"/images/proceso-01.jpg", alt:"Proceso — detalle" },
            ]}
          />
        </div>
      </section>

      {/* BIO breve y autoridad */}
      <section id="bio" className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-adrian.jpg" alt="Adrián Quintero — Quinterotatuador" className="card aspect-[4/3] w-full object-cover" />
          <div>
            <h2 className="mb-3 font-[var(--font-cinzel)] text-2xl">Adrián Quintero</h2>
            <p className="text-white/75">
              Tatuador especializado en Blackwork, Realismo B&amp;G y tradicional. Mi enfoque une
              concepto, composición anatómica y técnica para crear piezas únicas que
              cuentan tu historia. Atención uno a uno y proceso claro de principio a fin.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#contacto" className="rounded bg-brand-red px-4 py-2 font-medium hover:bg-white hover:text-black transition">Reserva ahora</a>
              <a href="#portafolio" className="rounded border border-white/30 px-4 py-2">Ver trabajos</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO corporativo */}
      <section id="contacto" className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-[var(--font-cinzel)] text-2xl">Agenda tu consulta</h2>
            <p className="text-white/70">Cuéntame tu idea y te respondo con recomendaciones y disponibilidad.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Valencia / Puerto Cabello</li>
              <li>• Atención por cita · Diseño personalizado</li>
              <li>• Respuesta en &lt; 24h</li>
            </ul>
          </div>

          <form action="https://formspree.io/f/xeoznyke" method="POST" className="card p-6">
            <input type="hidden" name="_subject" value="Nueva consulta desde la web" />
            <input type="hidden" name="_next" value="/gracias" />
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/80">Nombre</label>
                <input name="nombre" required className="w-full rounded border border-white/15 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red/60" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" name="email" required className="w-full rounded border border-white/15 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red/60" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Mensaje</label>
                <textarea name="mensaje" rows={4} required className="w-full rounded border border-white/15 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-red/60" placeholder="Estilo, tamaño y zona del cuerpo" />
              </div>
              <button className="rounded bg-brand-red px-4 py-3 font-medium hover:bg-white hover:text-black transition">Enviar</button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA móvil pegajoso */}
      <div className="fixed bottom-3 left-0 right-0 mx-auto w-full max-w-md px-4 sm:hidden">
        <a href="#contacto" className="block rounded-full bg-brand-red py-3 text-center font-medium text-white shadow-lg">Agenda tu consulta</a>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="container flex flex-col items-center gap-3 py-8 md:flex-row md:justify-between">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Quinterotatuador. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#portafolio" className="hover:text-white">Portafolio</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <a href="https://instagram.com/quinterotatuador" target="_blank" className="hover:text-white">@quinterotatuador</a>
          </div>
        </div>
      </footer>
    </>
  );
}

