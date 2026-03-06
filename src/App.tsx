import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { PriceSection } from "@/components/PriceSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Specs } from "@/components/Specs";
import { EngineSection } from "@/components/EngineSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <VideoSection />
      <Hero />
      <Features />
      <Gallery />
      <Specs />
      <EngineSection />
      <PriceSection />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
