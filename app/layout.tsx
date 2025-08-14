import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";

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
            <a href="/" className="font-[var(--font-cinzel)] text-xl tracking-wide text-brand-red">Quinterotatuador</a>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a href="#portafolio" className="hover:text-white">Portafolio</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
              <a href="#contacto" className="px-3 py-1.5 rounded-md bg-brand-red hover:brightness-110 transition">
                Reserva
              </a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
