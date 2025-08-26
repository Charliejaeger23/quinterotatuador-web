// app/gracias/GraciasClient.tsx  (CLIENT)
"use client";

import Link from "next/link";

export default function GraciasClient() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-brand-dark px-6 text-center">
      <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-lg shadow-black/40">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-600/20">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-green-500">
            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
        </div>
        <h1 className="mb-2 text-3xl font-semibold text-white">¡Gracias por tu mensaje!</h1>
        <p className="mb-6 text-white/70">
          Lo recibí correctamente. Te responderé en menos de 24 horas con los siguientes pasos.
        </p>
        <Link
          href="/"
          className="inline-block rounded border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
