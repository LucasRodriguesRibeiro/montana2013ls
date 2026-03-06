import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Truck, Star, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Custo-Benefício Real",
    description: "Economize sem comprometer a seriedade. Desempenho superior com um dos menores custos de manutenção da categoria.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de Traslado",
    description: "Mecânica rigorosamente testada. Evite atrasos ou imprevistos durante o serviço — sua reputação em primeiro lugar.",
  },
  {
    icon: Star,
    title: "Presença Respeitosa",
    description: "Design sóbrio e acabamento impecável. Transmita confiança e acolhimento em cada serviço prestado.",
  },
  {
    icon: Award,
    title: "Adaptação Profissional",
    description: "Adaptada pela Atena Veículos, uma das empresas de capotas mais conceituadas do setor funerário. Estrutura de alto padrão para o transporte digno e seguro de urnas.",
  },
  {
    icon: CheckCircle2,
    title: "Durabilidade Chevrolet",
    description: "Motor LS conhecido pela sua força e resistência. Um parceiro de trabalho que não te deixa na mão.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24 text-slate-900 leading-normal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20 text-center">
          <span className="mb-3 sm:mb-4 inline-block text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            Compromisso com o Negócio
          </span>
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight sm:leading-none">
            Tranquilidade em <br className="hidden sm:block" /> Cada <span className="text-blue-600">Serviço</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
            Elimine as preocupações com manutenção e foque no que importa: prestar um serviço de excelência e honra.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-[2rem] sm:rounded-[3rem] border border-slate-100 bg-slate-50/50 p-8 sm:p-12 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 active:scale-[0.98] text-center flex flex-col items-center"
            >
              <div className="mb-6 sm:mb-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[1.2rem] sm:rounded-[1.5rem] bg-white text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <feature.icon className="h-7 w-7 sm:h-9 sm:w-9" />
              </div>
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight">{feature.title}</h3>
              <p className="text-slate-500 font-semibold leading-relaxed text-xs sm:text-sm max-w-[280px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
