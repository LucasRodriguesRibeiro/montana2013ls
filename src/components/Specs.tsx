import { motion } from "motion/react";
import { Calendar, Car, Settings } from "lucide-react";

const specs = [
  { label: "Modelo", value: "Chevrolet Montana LS", icon: Car },
  { label: "Ano", value: "2013", icon: Calendar },
  { label: "Adaptação", value: "Funerária Luxo (2 Urnas)", icon: Settings },
];

export function Specs() {
  return (
    <section id="details" className="bg-white py-16 sm:py-24 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="mb-3 sm:mb-4 inline-block text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              Ficha Técnica
            </span>
            <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight sm:leading-none">
              Agilidade no <br />
              <span className="text-blue-600">Traslado</span>
            </h2>
            <p className="mb-8 sm:mb-10 text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Equipada para atender às necessidades logísticas da sua empresa com eficiência. Um veículo que une economia de combustível com a robustez necessária para o transporte especializado.
            </p>

            <div className="grid gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 sm:gap-6 rounded-[1.2rem] sm:rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4 sm:p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 active:bg-slate-100 text-left"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-blue-600 shadow-sm border border-slate-100">
                    <spec.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
                    <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-0">{spec.label}</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-tight">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200 border-4 sm:border-8 border-white mx-2 sm:mx-0"
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] w-full">
              <img
                src="/imagens/WhatsApp Image 2026-03-03 at 11.46.29.jpeg"
                alt="Interior do Veículo"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6 sm:p-12">
                <div>
                  <p className="mb-2 text-[9px] sm:text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Interior Exclusive</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-tight">Acabamento Superior</h3>
                  <div className="mt-4 h-1 w-10 sm:w-12 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
