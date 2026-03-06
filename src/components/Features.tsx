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
    description: "Não é apenas uma caçamba, é uma estrutura preparada para o transporte digno e seguro de urnas.",
  },
  {
    icon: CheckCircle2,
    title: "Durabilidade Chevrolet",
    description: "Motor LS conhecido pela sua força e resistência. Um parceiro de trabalho que não te deixa na mão.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-24 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">
            Compromisso com o Negócio
          </span>
          <h2 className="mb-6 text-4xl font-black md:text-6xl uppercase tracking-tighter">
            Tranquilidade em <br className="hidden sm:block" /> Cada <span className="text-blue-600">Serviço</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Elimine as preocupações com manutenção e foque no que importa: prestar um serviço de excelência e honra.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-[3rem] border border-slate-100 bg-slate-50/50 p-12 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 active:scale-[0.98] text-center flex flex-col items-center"
            >
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <feature.icon className="h-9 w-9" />
              </div>
              <h3 className="mb-4 text-2xl font-black text-slate-900 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 font-semibold leading-relaxed text-sm max-w-[280px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
