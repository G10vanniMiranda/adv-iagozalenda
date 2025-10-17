import Image from "next/image";
import Link from "next/link";
const WHATS_MESSAGE = "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.";
const WHATS_HREF = `https://wa.me/5569993309361?text=${encodeURIComponent(WHATS_MESSAGE)}`;
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Hero showEmergencyCTA={true} />

      {/* Sobre o Advogado */}
      <section id="sobre" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Texto: à direita no desktop */}
            <Reveal className="order-2 md:order-2" direction="up">
              <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Sobre o advogado</p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-white">Dr. Iago Zalenda — OAB/RO 13938</h2>
              <p className="mt-3 text-neutral-300">Atuação focada em flagrantes, audiências de custódia e defesa técnica ao longo do processo penal. Linguagem simples, estratégia clara e resposta ágil.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>• Defesa em delegacia e fórum</li>
                <li>• Preparação para depoimentos e audiências</li>
                <li>• Canal seguro para documentos (LGPD)</li>
              </ul>
            </Reveal>
            {/* Imagem: à esquerda no desktop */}
            <Reveal className="order-1 md:order-1 flex justify-center" direction="right">
              <Image
                src="/zalenda.jpg"
                width={360}
                height={360}
                alt="Foto do advogado Iago Zalenda"
                className="h-auto w-64 md:w-80 rounded-xl ring-1 ring-neutral-800"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center">
          <Reveal as="h2" direction="up" className="text-3xl md:text-4xl font-semibold text-white">Precisa de ajuda agora?</Reveal>
          <Reveal as="p" delay={0.1} direction="up" className="mt-3 text-sm text-neutral-300">Resposta em até 24 horas • Confidencialidade • Contrato transparente</Reveal>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            {/* CTA primário: abrir WhatsApp com número e mensagem pré-preenchida */}
            <Reveal as="a" direction="up" delay={0.15} href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
              Atendimento emergencial 24h
            </Reveal>
            {/* CTA secundário (cor original): aro dourado, sem preenchimento */}
            <Reveal as="a" direction="up" delay={0.2} href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Agendar consulta
            </Reveal>
            {/* CTA alternativo: mensagem no WhatsApp */}
            <Reveal as="a" direction="up" delay={0.25} href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Enviar resumo do caso
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
