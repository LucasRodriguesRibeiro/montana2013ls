import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/20">
              <Car className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Chevrolet Montana LS</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Veículo Funerário Premium</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
            <nav className="flex gap-8 mb-4">
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors">Início</a>
              <a href="#features" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors">Diferenciais</a>
              <a href="#details" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors">Ficha Técnica</a>
            </nav>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Irecê - BA • Brasil</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mt-4 border-t border-white/5 pt-4">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
