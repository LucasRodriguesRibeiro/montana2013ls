import { motion } from "motion/react";
import { Play, MessageCircle } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-white pt-20 pb-12 sm:pt-32 sm:pb-16 text-slate-900 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -z-0 opacity-[0.03] sm:opacity-[0.05]">
        <div className="w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-blue-600 blur-[80px] sm:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6 inline-block rounded-full bg-blue-600 px-4 py-2 sm:px-6 sm:py-2.5 text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] shadow-lg shadow-blue-600/20"
          >
            Oportunidade para Funerárias
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[1.1] sm:leading-[0.85] uppercase font-black"
          >
            O Reforço que sua <br />
            <span className="text-blue-600 font-extrabold text-[0.85em] sm:text-[0.8em]">Frota Merece</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative max-w-6xl mx-auto group mb-12 sm:mb-20"
          >
            <div className="relative aspect-video overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-slate-900 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] sm:shadow-[0_40px_100px_-15px_rgba(37,99,235,0.15)] border-4 sm:border-8 border-white">
              <iframe
                src={`https://player.vimeo.com/video/1171098596?color=2563eb&title=0&byline=0&portrait=0&dnt=1${isPlaying ? '&autoplay=1' : ''}`}
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
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] sm:backdrop-blur-[2px] transition-all duration-500 group-hover:bg-slate-900/50 flex items-center justify-center">
                    <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-2 sm:border-4 border-white/20">
                      <Play className="h-6 w-6 sm:h-10 sm:w-10 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-2 hidden sm:flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-2xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest rotate-6 sm:rotate-12 group-hover:rotate-0 transition-transform duration-500">
              Tour 4K
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row mb-12 sm:mb-16">
              <a
                href="https://wa.me/5574999564177?text=Olá,%20vim%20pelo%20anúncio%20e%20tenho%20interesse%20no%20Montana."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full max-w-sm sm:max-w-none sm:w-auto items-center justify-center gap-3 sm:gap-4 rounded-xl sm:rounded-3xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-5 sm:px-12 sm:py-7 text-[12px] sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white shadow-xl shadow-green-600/30 transition-all active:scale-95"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                Entrar em Contato
              </a>
            </div>

            <div className="inline-block border-y border-slate-900/10 sm:border-y-2 sm:border-slate-900/5 py-4 sm:py-8 px-6 sm:px-12 mb-8 sm:mb-10">
              <p className="text-lg sm:text-2xl md:text-4xl text-slate-900 font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                Montana 2013 | <span className="text-blue-600">Compre e Opere Hoje</span>
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-slate-500 font-bold leading-relaxed px-2 sm:px-0">
              Chega de perder serviços por frota reduzida ou manutenções caras. Garanta a robustez de uma Chevrolet adaptada com perícia, unindo o menor custo por km rodado ao visual impecável que o traslado de honra exige.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
