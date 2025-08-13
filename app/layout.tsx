import "./globals.css";
import { Cinzel, Poppins } from "next/font/google";

const cinzel = Cinzel({ subsets:["latin"], weight:["700","800","900"], variable:"--font-cinzel" });
const poppins = Poppins({ subsets:["latin"], weight:["300","400","500","600"], variable:"--font-poppins" });

export const metadata = {
  title: "Quinterotatuador — Blackwork & Realismo",
  description: "Tatuajes personalizados con proceso profesional y diseño anatómico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cinzel.variable} ${poppins.variable} bg-brand-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
