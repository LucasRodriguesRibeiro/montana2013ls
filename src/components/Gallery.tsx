import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.26.jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.26 (1).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.27.jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.27 (1).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.27 (2).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.27 (3).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.27 (4).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.28.jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.28 (1).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.28 (2).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.28 (3).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.28 (4).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.29.jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.29 (1).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.29 (2).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.29 (3).jpeg",
  "/imagens/WhatsApp Image 2026-03-03 at 11.46.30.jpeg",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-slate-50 py-24 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">
            Visão 360 Graus
          </span>
          <h2 className="mb-6 text-4xl font-black md:text-6xl uppercase tracking-tighter">
            Galeria de <span className="text-blue-600">Fotos</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Transparência total. Explore cada ângulo do veículo em alta resolução.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-200 border-4 border-white shadow-xl shadow-slate-200/50 transition-all active:scale-[0.98]"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Foto do veículo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 transition-colors group-hover:bg-blue-600/20 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 bg-white shadow-xl px-6 py-3 rounded-2xl">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Ampliar</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-8 top-8 rounded-full bg-white/10 hover:bg-white/20 p-4 text-white transition-all outline-none"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Visualização ampliada"
            className="max-h-[85vh] w-auto max-w-[95vw] rounded-[3rem] object-contain shadow-2xl border-2 border-white/20"
          />
        </div>
      )}
    </section>
  );
}
