import Image from "next/image";
import Link from "next/link";
const WHATS_MESSAGE = "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.";
const WHATS_HREF = `https://wa.me/5569993309361?text=${encodeURIComponent(WHATS_MESSAGE)}`;
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Hero showEmergencyCTA={true} />

      {/* Sobre o Advogado */}
      <section id="sobre" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Sobre o advogado</p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-white">Dr. Iago Zalenda — OAB/RO 13938</h2>
              <p className="mt-3 text-neutral-300">Atuação focada em flagrantes, audiências de custódia e defesa técnica ao longo do processo penal. Linguagem simples, estratégia clara e resposta ágil.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>• Defesa em delegacia e fórum</li>
                <li>• Preparação para depoimentos e audiências</li>
                <li>• Canal seguro para documentos (LGPD)</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/zalenda.jpg"
                width={360}
                height={360}
                alt="Foto do advogado Iago Zalenda"
                className="h-auto w-64 md:w-80 rounded-xl ring-1 ring-neutral-800"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços (compacto) */}
      <section id="servicos" className="w-full bg-neutral-50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Atendimento emergencial</h3>
              <p className="mt-2 text-sm text-neutral-700">Flagrante e custódia no TJRO. Resposta ágil e orientações iniciais.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Defesa em processo</h3>
              <p className="mt-2 text-sm text-neutral-700">Atuação em delegacia e fórum, peças, audiências e estratégia por fase.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Documentos e privacidade</h3>
              <p className="mt-2 text-sm text-neutral-700">Canais seguros para envio de documentos. LGPD em vigor.</p>
            </div>
          </div>
          <div className="mt-6">
            {/* Botão de ação principal desta seção: agora abre WhatsApp com mensagem padrão */}
            <a href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Falar agora
            </a>
          </div>
        </div>
      </section>

      {/* Seção 5: Benefícios e resultados (sem prometer desfechos) */}
      <section id="beneficios" className="w-full scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              O que você ganha com uma defesa técnica ao seu lado
            </h2>

            <ul className="mt-8 space-y-4">
              {/* Bullet 1 */}
              <li className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-neutral-800 font-medium">Orientação desde o primeiro contato</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-700">preserva direitos</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-600">evita autoincriminação</span>
                </div>
              </li>

              {/* Bullet 2 */}
              <li className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-neutral-800 font-medium">Gestão de prazos e peças</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-700">previsibilidade</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-600">reduz riscos processuais</span>
                </div>
              </li>

              {/* Bullet 3 */}
              <li className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-neutral-800 font-medium">Negociação qualificada (ANPP/juizado)</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-700">alternativas penais</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-600">menor desgaste e custos</span>
                </div>
              </li>

              {/* Bullet 4 */}
              <li className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-neutral-800 font-medium">Preparação para depoimentos</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-700">confiança</span>
                  <span className="hidden md:inline" style={{ color: "var(--brand-gold)" }}>→</span>
                  <span className="text-neutral-600">melhor qualidade de prova</span>
                </div>
              </li>
            </ul>

            {/* Mini casos */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <p className="text-sm text-neutral-700">
                  “Atuação imediata em flagrante resultou em liberdade com cautelares em [tempo], seguindo a legislação vigente.”
                </p>
                <p className="mt-2 text-xs text-neutral-400">Caso anonimizado, divulgado com autorização.</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-sm text-neutral-500">
              Disclaimer: Cada caso tem particularidades e pode ter desfechos distintos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 6: Provas e confiança */}
      <section id="provas-confianca" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Provas e confiança</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Depoimentos exibidos apenas quando permitidos pela OAB e com consentimento.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {/* Indicadores objetivos */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Indicadores objetivos</p>
                <ul className="mt-3 space-y-2 text-neutral-200">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Tempo médio de resposta: [x] horas úteis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Satisfação (NPS/avaliações verificáveis): [x]</span>
                  </li>
                </ul>
              </div>

              {/* Autoridade */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Autoridade</p>
                <ul className="mt-3 space-y-2 text-neutral-200">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>OAB/RO 13938</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Artigos, palestras, participação em júris, publicações</span>
                  </li>
                </ul>
              </div>

              {/* Conformidade */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Conformidade</p>
                <ul className="mt-3 space-y-2 text-neutral-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>LGPD: canais criptografados, política de privacidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Verificação de conflito de interesses antes da contratação</span>
                  </li>
                </ul>
              </div>

              {/* Política de depoimentos */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Depoimentos</p>
                <p className="mt-3 text-neutral-300">
                  Publicados somente quando autorizados e em conformidade com as normas da OAB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7: Oferta e empacotamento */}
      <section id="oferta" className="w-full bg-neutral-50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-5xl">
            <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Oferta e empacotamento</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-900">Na consulta você recebe:</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Avaliação preliminar (tipificação, riscos e oportunidades)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Checklist de documentos e prazos relevantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Mapa de medidas cabíveis (HC, liberdade, cautelares, ANPP, juizado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Estimativa transparente de honorários por fase (referência Tabela OAB/RO)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Bônus (conteúdo informativo)</p>
                <ul className="mt-2 space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Guia prático: “Como se preparar para audiência de custódia no TJRO”</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Checklist de flagrante e direitos do custodiado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Redução de atrito</p>
                <ul className="mt-2 space-y-2 text-neutral-700">
                  <li>Contrato digital</li>
                  <li>Pagamento em etapas</li>
                  <li>Nota fiscal</li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Comparativo ético</p>
                <ul className="mt-2 space-y-2 text-neutral-700">
                  <li>“Sem advogado: maior risco de perda de prazos e prejuízos processuais”</li>
                  <li>“Modelos genéricos: não consideram prova, foro e jurisprudência local”</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              {/* Botão de conversão: abrir conversa no WhatsApp */}
              <a href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
                Agendar consulta agora
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Final */}
      <section id="cta-final" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Precisa de ajuda agora?</h2>
          <p className="mt-3 text-sm text-neutral-300">Resposta em até 24 horas • Confidencialidade • Contrato transparente</p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            {/* CTA primário: abrir WhatsApp com número e mensagem pré-preenchida */}
            <a href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Atendimento emergencial 24h
            </a>
            {/* CTA secundário: abrir WhatsApp para agendar */}
            <a href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Agendar consulta
            </a>
            {/* CTA alternativo: mensagem no WhatsApp */}
            <a href={WHATS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Enviar resumo do caso
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
