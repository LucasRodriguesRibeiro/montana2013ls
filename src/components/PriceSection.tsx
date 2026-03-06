import { motion } from "motion/react";
import { Check } from "lucide-react";

export function PriceSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 text-slate-900 border-y border-slate-100 overflow-hidden leading-snug">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[3rem] border-[6px] sm:border-8 border-white bg-white shadow-2xl shadow-slate-200">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-14 md:p-20 text-center md:text-left">
              <span className="mb-4 inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-blue-600">
                Chevrolet Montana LS
              </span>
              <h2 className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1] uppercase tracking-tighter">
                R$ 49.900<span className="text-xl sm:text-2xl text-slate-300 font-sans">,00</span>
              </h2>
              <p className="mb-8 sm:mb-10 text-base sm:text-lg text-slate-500 font-semibold leading-relaxed max-w-md mx-auto md:mx-0">
                A oportunidade de renovar sua frota com um veículo de procedência estrita. Investimento inteligente para quem busca lucrar com baixo custo de aquisição.
              </p>

              <ul className="mb-10 space-y-4 text-left inline-block md:block mx-auto">
                {[
                  "Documentação em Dias",
                  "Transferência Imediata",
                  "Laudo Cautelar Aprovado",
                  "Garantia de Motor e Câmbio"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 sm:gap-4 text-[12px] sm:text-sm font-bold text-slate-700 uppercase tracking-tight">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[4]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5574999564177?text=Olá,%20vim%20pelo%20anúncio%20e%20tenho%20interesse%20no%20Montana."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-5 sm:px-10 sm:py-6 text-[12px] sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white shadow-xl shadow-green-600/20 transition-all active:scale-95"
              >
                Negociar Agora
              </a>
            </div>

            <div className="relative hidden md:block overflow-hidden">
              <img
                src="/imagens/WhatsApp Image 2026-03-03 at 11.46.27.jpeg"
                alt="Chevrolet Montana Funerária"
                className="absolute inset-0 h-full w-full object-cover contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
