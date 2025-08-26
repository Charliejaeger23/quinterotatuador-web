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
  metadataBase: new URL("https://quinterotatuador.vercel.app"),
  title: {
    default: "Quinterotatuador",
    template: "%s — Quinterotatuador",
  },
  description: "Tatuajes personalizados que cuentan tu historia",
  openGraph: {
    title: "Quinterotatuador",
    description: "Tatuajes personalizados que cuentan tu historia",
    url: "https://quinterotatuador.vercel.app",
    siteName: "Quinterotatuador",
    images: [
      {
        url: "/img/hero-adrian.jpg",
        width: 1200,
        height: 630,
        alt: "Adrián tatuando",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinterotatuador",
    description: "Tatuajes personalizados que cuentan tu historia",
    images: ["/img/hero-adrian.jpg"],
  },
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

        {/* CTA flotante WhatsApp */}
        <Link
          href="https://wa.me/573000000000"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-black/30 hover:brightness-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M16.01 4.018c-6.627 0-12 5.373-12 12 0 2.115.55 4.106 1.51 5.832L4 28l6.354-1.493c1.676.918 3.594 1.449 5.646 1.449 6.627 0 12-5.373 12-12s-5.373-11.938-12-11.938zm6.834 17.105c-.29.81-1.698 1.555-2.351 1.653-.6.09-1.35.13-2.182-.138-.51-.162-1.17-.38-2.013-.74-3.542-1.532-5.843-5.102-6.022-5.34-.18-.24-1.44-1.92-1.44-3.668s.91-2.602 1.233-2.963c.321-.36.7-.45.93-.45.23 0 .46.003.66.012.21.01.49-.08.77.6.29.71.99 2.46 1.08 2.643.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.75.21.36.93 1.54 2 2.49 1.37 1.22 2.52 1.6 2.88 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.68z" />
          </svg>
        </Link>
      </body>
    </html>
  );
}
