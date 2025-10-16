// no client-side routing here; WhatsApp links open in new tab

type HeroProps = {
    showEmergencyCTA?: boolean;
};

export default function Hero({ showEmergencyCTA = true }: HeroProps) {
    const whatsMessage = "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.";
    const whatsHref = `https://wa.me/5569993309361?text=${encodeURIComponent(whatsMessage)}`;
    return (
        <section
            className="w-full"
            style={{ backgroundColor: "var(--brand-black)" }}
            aria-label="seção herói"
        >
            <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
                <div className="max-w-3xl">

                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        Defesa Penal Estratégica em Porto Velho/RO: do flagrante à audiência de custódia
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-neutral-300">
                        Resposta rápida, plano jurídico claro e acompanhamento próximo em inquéritos, medidas cautelares, ANPP e Tribunal do Júri.
                    </p>

                    <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center">
                        {showEmergencyCTA && (
                            <a
                                href={whatsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black"
                                style={{ backgroundColor: "var(--brand-gold)" }}
                            >
                                {/* Botão primário da hero: abre WhatsApp com mensagem padrão */}
                                Atendimento emergencial 24h
                            </a>
                        )}

                        <a
                            href={whatsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-neutral-700 hover:ring-neutral-500 transition"
                        >
                            {/* Botão secundário: abre WhatsApp para agendar */}
                            Agendar consulta
                        </a>
                        <a
                            href={whatsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/90 hover:text-white"
                        >
                            {/* Opção adicional: mensagem pré-preenchida no WhatsApp */}
                            Analisar meu caso
                        </a>
                    </div>

                    <div className="mt-6 text-xs md:text-sm text-neutral-400">
                        <p>
                            <span style={{ color: "var(--brand-gold)" }}>Confidencialidade garantida</span> • Sem compromisso após a consulta
                        </p>
                        <p className="mt-2">Nota ética: Sem garantias de resultado. Cada caso é único.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
