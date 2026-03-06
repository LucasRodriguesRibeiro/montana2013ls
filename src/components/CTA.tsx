import { motion } from "motion/react";
import { MessageCircle, Calendar, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-32 text-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-100/30 blur-[130px] rounded-full -z-10"></div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-6 inline-block text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">
            Pronta para Trabalhar
          </span>
          <h2 className="mb-8 text-5xl sm:text-8xl text-slate-900 leading-[0.9] font-black uppercase tracking-tighter">
            Não perca esta <br className="hidden sm:block" /> exclusividade.
          </h2>
          <p className="mb-12 text-lg text-slate-500 max-w-2xl mx-auto font-semibold leading-relaxed">
            Veículos com esta configuração e estado de conservação são raros no mercado. Garanta agora a evolução da sua empresa.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="https://wa.me/5574999564177?text=Olá,%20vim%20pelo%20anúncio%20e%20tenho%20interesse%20no%20Montana."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-4 rounded-3xl bg-[#25D366] hover:bg-[#20ba59] px-12 py-7 text-sm font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-green-600/30 transition-all active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-base sm:text-2xl uppercase tracking-tighter">Telefone: <span className="text-slate-900">(74) 99956-4177</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
