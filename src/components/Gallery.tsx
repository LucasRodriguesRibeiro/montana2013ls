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
    <section className="bg-slate-50 py-16 sm:py-24 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20 text-center leading-tight">
          <span className="mb-3 sm:mb-4 inline-block text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            Visão 360 Graus
          </span>
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Galeria de <span className="text-blue-600">Fotos</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
            Transparência total. Explore cada ângulo do veículo em alta resolução.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border-2 sm:border-4 border-white shadow-lg sm:shadow-xl shadow-slate-200/50 transition-all active:scale-[0.98]"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Foto do veículo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 transition-colors group-hover:bg-blue-600/20 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 bg-white shadow-xl px-4 py-2 sm:px-6 sm:py-3 rounded-[1rem] sm:rounded-2xl">
                  <span className="text-blue-600 font-black text-[8px] sm:text-[10px] uppercase tracking-widest">Ampliar</span>
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
            className="absolute right-4 top-4 sm:right-8 sm:top-8 rounded-full bg-white/10 hover:bg-white/20 p-3 sm:p-4 text-white transition-all outline-none"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Visualização ampliada"
            className="max-h-[85vh] w-auto max-w-[95vw] rounded-[2rem] sm:rounded-[3rem] object-contain shadow-2xl border-2 border-white/20"
          />
        </div>
      )}
    </section>
  );
}
