// Página de pós-conversão (Obrigado)
// Diretrizes de tom (para referência interna):
// - Humano, objetivo e discreto
// - Autoridade sem alarmismo; empatia sem sensacionalismo
// - Transparência sobre prazos, limites e custos
// Sugestões de A/B tests (para referência interna):
// - Headline: "Defesa em flagrante e custódia" vs. "Do inquérito ao júri: estratégia completa"
// - CTA: "Atendimento emergencial 24h" vs. "Agendar consulta"
// - Prova social: tempo de resposta vs. artigos/publicações
// - Lead magnet: checklist de flagrante vs. guia de custódia no TJRO

export default function Obrigado() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Hero/Confirmação */}
      <section className="w-full border-b border-neutral-900/50" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>OAB/RO 13938 • LGPD em vigor</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Obrigado. Sua solicitação foi recebida.</h1>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Confirmamos seu agendamento e enviaremos os próximos passos por e-mail. Enquanto isso, você pode antecipar informações úteis abaixo.
          </p>
          <p className="mt-3 text-sm text-neutral-400">Resposta em até [x] horas úteis (plantão sujeito a disponibilidade).</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/#contato" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Atendimento emergencial 24h
            </a>
            <a href="/#contato" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Agendar consulta
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-400">Sem garantias de resultado. Cada caso é único.</p>
        </div>
      </section>

      {/* Próximos passos */}
      <section className="w-full max-w-7xl px-4 py-16 md:py-20 scroll-mt-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">1) Questionário de triagem</h2>
            <p className="mt-2 text-sm text-neutral-700">Opcional, mas ajuda a acelerar a análise inicial do caso.</p>
            <a href="/questionario" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Preencher questionário
            </a>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">2) Envio seguro de documentos</h2>
            <p className="mt-2 text-sm text-neutral-700">Envie boletim/auto, documentos pessoais e quaisquer registros relevantes.</p>
            <a href="/enviar-documentos" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium" style={{ color: "var(--brand-gold)", border: "1px solid var(--brand-gold)" }}>
              Enviar documentos
            </a>
            <p className="mt-2 text-xs text-neutral-500">Canais criptografados e política de privacidade em conformidade com a LGPD.</p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">3) Orientações de chegada</h2>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>Endereço: Rua Exemplo, 123 — Centro, Porto Velho/RO</li>
              <li>Horário: seg–sex, 9h–18h (plantão sob disponibilidade)</li>
              <li>Contato direto: (69) 9 0000-0000 • contato@exemplo.adv.br</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-500">Se preferir, podemos realizar atendimento online.</p>
          </div>
        </div>
      </section>

      {/* Responsável pelo caso */}
      <section className="w-full border-y border-neutral-900/50" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-white">Responsável pelo seu caso</h2>
          <p className="mt-2 text-neutral-300">Dr. Iago Zalenda — OAB/RO 13938</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-sm text-neutral-300">Canal direto (prioridade):</p>
              <p className="mt-1 text-sm" style={{ color: "var(--brand-gold)" }}>(69) 9 0000-0000 • contato@exemplo.adv.br</p>
              <p className="mt-2 text-xs text-neutral-500">Use para urgências, dúvidas imediatas ou orientações iniciais.</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-sm text-neutral-300">Expectativas e prazos</p>
              <p className="mt-1 text-sm text-neutral-400">Resposta em até [x] horas úteis (plantão sujeito a disponibilidade). Transparência sobre limites e custos.</p>
              <p className="mt-2 text-xs text-neutral-500">Sem garantias de resultado. Cada caso é único.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso rápido */}
      <section className="w-full max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="text-base font-semibold text-neutral-900">Precisa acelerar?</h3>
            <p className="mt-2 text-sm text-neutral-700">Se houver risco imediato (flagrante/custódia), acione o atendimento emergencial.</p>
            <a href="/#contato" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Atendimento emergencial 24h
            </a>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="text-base font-semibold text-neutral-900">Agendar ou reagendar</h3>
            <p className="mt-2 text-sm text-neutral-700">Defina o melhor horário para consulta presencial ou online.</p>
            <a href="/#contato" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium" style={{ color: "var(--brand-gold)", border: "1px solid var(--brand-gold)" }}>
              Agendar consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
