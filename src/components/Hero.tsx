// no client-side routing here; WhatsApp links open in new tab

type HeroProps = {
    showEmergencyCTA?: boolean;
};

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero({ showEmergencyCTA = true }: HeroProps) {
    const whatsMessage = "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.";
    const whatsHref = `https://wa.me/5569993309361?text=${encodeURIComponent(whatsMessage)}`;
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: "var(--brand-black)" }}
            aria-label="seção herói"
        >
            {/* Mobile blurred background image */}
            <div className="absolute inset-0 md:hidden" aria-hidden="true">
                <Image
                    src="/zalenda1.jpeg"
                    alt="Foto do advogado Iago Zalenda"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover blur-[20px] opacity-30"
                />
                <div className="absolute inset-0 " />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
                {/* Desktop two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    {/* Text column */}
                    <div className="max-w-3xl">
                        <Reveal as="h1" direction="up">
                            <span className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                                Defesa Penal Estratégica em Porto Velho/RO: do flagrante à audiência de custódia
                            </span>
                        </Reveal>

                        <Reveal as="p" delay={0.1} direction="up" className="mt-4">
                            <span className="text-base md:text-lg text-neutral-300">
                                Resposta rápida, plano jurídico claro e acompanhamento próximo em inquéritos, medidas cautelares, ANPP e Tribunal do Júri.
                            </span>
                        </Reveal>

                        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center">
                            {showEmergencyCTA && (
                                <Reveal as="a" direction="up" delay={0.15}
                                    href={whatsHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    Atendimento emergencial 24h
                                </Reveal>
                            )}

                            <Reveal as="a" direction="up" delay={0.2}
                                    href={whatsHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                                >
                                Agendar consulta
                            </Reveal>
                            <Reveal as="a" direction="up" delay={0.25}
                                href={whatsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/90 hover:text-white"
                            >
                                Analisar meu caso
                            </Reveal>
                        </div>

                        <Reveal className="mt-6" direction="up" delay={0.3}>
                            <div className="text-xs md:text-sm text-neutral-400">
                                <p>
                                    <span style={{ color: "var(--brand-gold)" }}>Confidencialidade garantida</span> • Sem compromisso após a consulta
                                </p>
                                <p className="mt-2">Nota ética: Sem garantias de resultado. Cada caso é único.</p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Desktop image column */}
                    <div className="hidden md:block">
                        <Reveal className="relative w-full h-[380px] md:h-[440px] lg:h-[520px] rounded-xl overflow-hidden ring-1 ring-neutral-800" direction="left">
                            <Image
                                src="/zalenda1.jpeg"
                                alt="Foto do advogado Iago Zalenda"
                                fill
                                priority
                                sizes="(min-width: 1024px) 40vw, 50vw"
                                className="object-cover"
                                style={{ objectPosition: "50% 40%" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
