import { motion } from "motion/react";
import { Calendar, Car, Settings } from "lucide-react";

const specs = [
  { label: "Modelo", value: "Chevrolet Montana LS", icon: Car },
  { label: "Ano", value: "2013", icon: Calendar },
  { label: "Adaptação", value: "Funerária Luxo (2 Urnas)", icon: Settings },
];

export function Specs() {
  return (
    <section id="details" className="bg-white py-24 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">
              Ficha Técnica
            </span>
            <h2 className="mb-8 text-4xl font-black md:text-6xl uppercase tracking-tighter">
              Agilidade no <br />
              <span className="text-blue-600">Traslado</span>
            </h2>
            <p className="mb-10 text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              Equipada para atender às necessidades logísticas da sua empresa com eficiência. Um veículo que une economia de combustível com a robustez necessária para o transporte especializado.
            </p>

            <div className="grid gap-4">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 active:bg-slate-100"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm border border-slate-100">
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 sm:mb-0">{spec.label}</p>
                    <p className="text-base font-bold text-slate-900 uppercase tracking-tight">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-200 border-8 border-white"
          >
            <div className="aspect-[4/5] w-full">
              <img
                src="/imagens/WhatsApp Image 2026-03-03 at 11.46.29.jpeg"
                alt="Interior do Veículo"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-12">
                <div>
                  <p className="mb-2 text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Interior Exclusive</p>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Acabamento Superior</h3>
                  <div className="mt-4 h-1 w-12 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
