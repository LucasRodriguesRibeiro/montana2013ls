import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-white pt-32 pb-16 text-slate-900 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -z-0 opacity-[0.05]">
        <div className="w-[800px] h-[800px] bg-blue-600 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full bg-blue-600 px-6 py-2.5 text-[10px] font-black text-white uppercase tracking-[0.4em] shadow-lg shadow-blue-600/20"
          >
            Oportunidade para Funerárias
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-5xl font-black md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase"
          >
            O Reforço que sua <br />
            <span className="text-blue-600 font-extrabold text-[0.8em]">Frota Merece</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto"
          >
            <div className="inline-block border-y-2 border-slate-900/5 py-8 px-12 mb-10">
              <p className="text-xl md:text-4xl text-slate-900 font-black uppercase tracking-[0.2em]">
                Montana 2013 | <span className="text-blue-600">Compre e Opere Hoje</span>
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-500 font-bold leading-relaxed">
              Chega de perder serviços por frota reduzida ou manutenções caras. Garanta a robustez de uma Chevrolet adaptada com perícia, unindo o menor custo por km rodado ao visual impecável que o traslado de honra exige.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative max-w-6xl mx-auto group"
        >
          <div className="relative aspect-video overflow-hidden rounded-[3rem] bg-slate-900 shadow-[0_40px_100px_-15px_rgba(37,99,235,0.15)] border-8 border-white">
            <iframe
              src={`https://player.vimeo.com/video/1171043621?h=74686e00cd&color=2563eb&title=0&byline=0&portrait=0&dnt=1${isPlaying ? '&autoplay=1' : ''}`}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Chevrolet Montana Tour"
            ></iframe>

            {/* Custom Thumbnail Overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 z-20 cursor-pointer overflow-hidden"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="/imagens/WhatsApp Image 2026-03-03 at 11.46.29.jpeg"
                  alt="Thumbnail"
                  className="h-full w-full object-cover scale-[1.12] origin-top transition-transform duration-700 group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-slate-900/50 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-4 border-white/20">
                    <Play className="h-10 w-10 fill-current ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Decorative badge */}
          <div className="absolute -bottom-6 -right-6 hidden lg:flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-2xl font-black text-[10px] uppercase tracking-widest rotate-12 group-hover:rotate-0 transition-transform duration-500">
            Tour 4K
          </div>
        </motion.div>
      </div>
    </section>
  );
}
