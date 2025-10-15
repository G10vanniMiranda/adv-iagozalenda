import Link from "next/link";

type HeroProps = {
    showEmergencyCTA?: boolean;
};

export default function Hero({ showEmergencyCTA = true }: HeroProps) {
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

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        {showEmergencyCTA && (
                            <Link
                                href="#contato"
                                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black"
                                style={{ backgroundColor: "var(--brand-gold)" }}
                            >
                                Atendimento emergencial 24h
                            </Link>
                        )}

                        <Link
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-neutral-700 hover:ring-neutral-500 transition"
                        >
                            Agendar consulta
                        </Link>
                        <Link
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/90 hover:text-white"
                        >
                            Analisar meu caso
                        </Link>
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
