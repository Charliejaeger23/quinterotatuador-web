"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold tracking-tight">
          Quinterotatuador
        </Link>

        {/* En páginas internas, muestra solo Home */}
        {isHome ? (
          <div className="flex gap-2 text-sm">
            <a href="#servicios" className="rounded px-3 py-2 hover:bg-neutral-100">Servicios</a>
            <a href="#proceso" className="rounded px-3 py-2 hover:bg-neutral-100">Proceso</a>
            <a href="#portafolio" className="rounded px-3 py-2 hover:bg-neutral-100">Portafolio</a>
            <a href="#testimonios" className="rounded px-3 py-2 hover:bg-neutral-100">Testimonios</a>
            <a href="#faq" className="rounded px-3 py-2 hover:bg-neutral-100">FAQ</a>
            <a href="#contacto" className="rounded bg-black px-3 py-2 text-white">Agenda</a>
          </div>
        ) : (
          <Link href="/" className="rounded bg-black px-3 py-2 text-sm text-white">Volver</Link>
        )}
      </nav>
    </header>
  );
}

