import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Quinterotatuador",
  description: "Tatuajes personalizados que cuentan tu historia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${poppins.variable}`}>
      <body className="bg-brand-dark text-white antialiased font-sans">
        {/* Navbar simple */}
        <header className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
  <nav className="container flex h-14 items-center justify-between">
    {/* Antes: <a href="/" ...> */}
    <Link href="/" className="font-[var(--font-cinzel)] text-xl tracking-wide text-brand-red">
      Quinterotatuador
    </Link>

    <div className="flex items-center gap-6 text-sm text-white/80">
      {/* Son anclas de la misma página; Next permite Link con hash */}
      <Link href="#portafolio" className="hover:text-white">Portafolio</Link>
      <Link href="#contacto" className="hover:text-white">Contacto</Link>
      <Link href="#contacto" className="px-3 py-1.5 rounded-md bg-brand-red hover:brightness-110 transition">
        Reserva
      </Link>
    </div>
  </nav>
</header>


        {children}
      </body>
    </html>
  );
}
