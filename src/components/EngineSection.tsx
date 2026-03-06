import { motion } from "motion/react";
import { Activity, Gauge, Zap, Play } from "lucide-react";
import { useState } from "react";

export function EngineSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative bg-slate-950 py-24 text-white overflow-hidden">
            {/* Abstract Design Elements */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="mb-4 inline-block text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">
                            Coração da Máquina
                        </span>
                        <h2 className="mb-8 text-4xl font-black md:text-6xl uppercase tracking-tighter leading-none">
                            Trabalho <br />
                            <span className="text-blue-500">Ininterrupto</span>
                        </h2>
                        <p className="mb-10 text-lg text-slate-400 font-medium leading-relaxed max-w-xl">
                            Evite o pesadelo de um veículo parado. Motor em pleno funcionamento e testado para garantir que cada partida seja imediata e segura. Tecnologia Chevrolet para quem não pode se dar ao luxo de falhar.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Consumo Eficiente</h4>
                                    <p className="text-xs text-slate-500 font-medium">Economia no transporte.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Potência Ideal</h4>
                                    <p className="text-xs text-slate-500 font-medium">Torque em baixa rotação.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative z-10 aspect-video lg:aspect-square overflow-hidden rounded-[3rem] bg-slate-900 border-4 border-white/10 shadow-2xl flex items-center justify-center">
                            {isPlaying ? (
                                <iframe
                                    src="https://player.vimeo.com/video/1171044324?h=120e2e9c12&color=2563eb&title=0&byline=0&portrait=0&dnt=1&autoplay=1"
                                    className="absolute inset-0 h-full w-full"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Motor Chevrolet Montana"
                                ></iframe>
                            ) : (
                                <div
                                    className="absolute inset-0 z-20 cursor-pointer overflow-hidden"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <img
                                        src="/imagens/WhatsApp Image 2026-03-03 at 11.46.30.jpeg"
                                        alt="Capa do Motor"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] transition-all duration-500 group-hover:bg-slate-950/60 flex items-center justify-center">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-4 border-white/10">
                                            <Play className="h-8 w-8 fill-current ml-1" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tech Decoration */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-blue-600 rounded-tr-[2rem] opacity-50"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-blue-600 rounded-bl-[2rem] opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
