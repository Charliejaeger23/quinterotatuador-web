import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Quinterotatuador — Tatuajes personalizados",
  description:
    "Blackwork, realismo en black & grey y tradicional. Diseños únicos que cuentan tu historia.",
  openGraph: {
    title: "Quinterotatuador — Tatuajes personalizados",
    description:
      "Blackwork, realismo en black & grey y tradicional. Diseños únicos que cuentan tu historia.",
    url: "https://tu-dominio.vercel.app",
    siteName: "Quinterotatuador",
    locale: "es_ES",
    type: "website",
  },
  metadataBase: new URL("https://tu-dominio.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-6xl p-6">{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl p-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} Quinterotatuador · Valencia / Puerto Cabello
          </div>
        </footer>
      </body>
    </html>
  );
}
