"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-[var(--font-cinzel)] text-lg tracking-wider">Quinterotatuador</Link>
        <nav className="hidden gap-6 md:flex text-sm text-white/80">
          <a href="#portafolio" className="hover:text-white">Portafolio</a>
          <a href="#bio" className="hover:text-white">Sobre mí</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>
        <a href="#contacto" className="rounded bg-brand-red px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition">Reserva</a>
      </div>
    </header>
  );
}
