import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5574999564177?text=Olá,%20vim%20pelo%20anúncio%20e%20tenho%20interesse%20no%20Montana."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-white"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  );
}
