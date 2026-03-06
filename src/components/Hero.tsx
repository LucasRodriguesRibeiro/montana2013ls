import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85dvh] flex items-center pt-24 pb-12 w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 blur-[80px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] bg-blue-50/60 blur-[80px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2">
              <div className="h-px w-6 sm:w-8 bg-blue-600"></div>
              <span className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                Oportunidade Relevante
              </span>
            </div>

            <h2 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] sm:leading-[1] text-slate-900 uppercase">
              Confira a <br />
              <span className="text-blue-600">Performance</span>
            </h2>

            <p className="mb-8 sm:mb-10 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dignidade em cada quilômetro. Equilibre o orçamento da sua frota com uma Montana robusta, pronta para traslados imediatos e com o visual impecável que seus clientes esperam.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-10 max-w-md mx-auto lg:mx-0">
              {[
                "Ano 2013",
                "Baixa KM",
                "Documentação em Dias",
                "Pronta Entrega"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] sm:text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Car Image with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 sm:px-0"
          >
            <div className="relative z-10 overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-[6px] sm:border-8 border-white">
              <img
                src="/imagens/WhatsApp Image 2026-03-03 at 11.46.26.jpeg"
                alt="Chevrolet Montana LS"
                className="w-full h-auto object-cover scale-105"
              />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 -z-10 w-full h-full border-2 border-blue-600/20 rounded-[2rem] sm:rounded-[3rem]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

