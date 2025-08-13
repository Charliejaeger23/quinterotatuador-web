"use client";
import { useState } from "react";

export default function LightboxClient({ images }: { images: {src:string; alt:string}[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, i) => (
          <button key={img.src} onClick={() => { setIdx(i); setOpen(true); }}
            className="overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:scale-[1.01] hover:ring-brand-red/60">
            {/* img para grid */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="aspect-square w-full object-cover" />
            <figcaption className="p-3 text-xs text-white/70 text-left">{img.alt}</figcaption>
          </button>
        ))}
      </div>

      {/* overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/90">
          <button onClick={() => setOpen(false)} className="absolute right-5 top-5 rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">Cerrar</button>

          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <button onClick={() => setIdx((i)=> (i-1+images.length)%images.length)} className="px-3 py-2 text-white/60 hover:text-white">‹</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[idx].src} alt={images[idx].alt} className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl" />
            <button onClick={() => setIdx((i)=> (i+1)%images.length)} className="px-3 py-2 text-white/60 hover:text-white">›</button>
          </div>
        </div>
      )}
    </>
  );
}
