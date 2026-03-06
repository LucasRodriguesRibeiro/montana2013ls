import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center pt-20 pb-20 w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px w-8 bg-blue-600"></div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">
                Oportunidade Relevante
              </span>
            </div>

            <h2 className="mb-6 text-5xl md:text-7xl font-black leading-[1] text-slate-900 uppercase">
              Confira a <br />
              <span className="text-blue-600">Performance</span>
            </h2>

            <p className="mb-10 text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Dignidade em cada quilômetro. Equilibre o orçamento da sua frota com uma Montana robusta, pronta para traslados imediatos e com o visual impecável que seus clientes esperam.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                "Ano 2013",
                "Baixa KM",
                "Procedência Garantida",
                "Pronta Entrega"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#details"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Ver Detalhes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Car Image with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
              <img
                src="/imagens/WhatsApp Image 2026-03-03 at 11.46.26.jpeg"
                alt="Chevrolet Montana LS"
                className="w-full h-auto object-cover scale-105"
              />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-blue-600/20 rounded-[3rem]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

