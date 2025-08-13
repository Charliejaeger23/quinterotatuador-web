// app/gracias/page.tsx  (SERVER)
import GraciasClient from "./GraciasClient";

export const metadata = {
  title: "Gracias — Quinterotatuador",
  description: "Confirmación de envío de formulario",
};

export default function GraciasPage() {
  return <GraciasClient />;
}
