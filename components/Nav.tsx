"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`rounded px-3 py-2 text-sm transition ${
        active ? "bg-black text-white" : "hover:bg-neutral-100"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold tracking-tight">Quinterotatuador</Link>
        <div className="flex gap-2">
          <NavLink href="/portafolio">Portafolio</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </div>
      </nav>
    </header>
  );
}
