// app/gracias/GraciasClient.tsx  (CLIENT)
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GraciasClient() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-green-600">
            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
        </motion.div>

        <h1 className="mb-2 text-3xl font-semibold text-green-700">¡Gracias por tu mensaje!</h1>
        <p className="mb-6 text-neutral-600">
          Lo recibí correctamente. Te responderé en menos de 24 horas con los siguientes pasos.
        </p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <Link href="/" className="inline-block rounded border px-4 py-2 text-sm hover:bg-neutral-50">
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
