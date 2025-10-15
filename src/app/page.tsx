import Image from "next/image";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import LeadMagnet from "@/components/LeadMagnet";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Hero showEmergencyCTA={true} />

      {/* Seção 2: Enquadramento do problema */}
      <section id="o-que-esta-em-jogo" className="w-full border-y border-neutral-900/50" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              O que está em jogo no seu caso criminal
            </h2>
            <p className="mt-3 text-neutral-300">
              Prazos são curtos, decisões são técnicas e qualquer palavra pode ter impacto. Uma ação correta nas primeiras horas faz diferença.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                <span className="text-neutral-200">Flagrante e custódia em até 24h</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                <span className="text-neutral-200">Risco de falar sem advogado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                <span className="text-neutral-200">Medidas cautelares restritivas (tornozeleira, afastamento, fiança)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                <span className="text-neutral-200">Exposição e impactos no trabalho/família</span>
              </li>
            </ul>

            <p className="mt-8 text-neutral-300">
              <span style={{ color: "var(--brand-gold)" }}>Ponte:</span> Minha função é transformar urgência e incerteza em um plano jurídico claro e executável.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Proposta de valor única (UVP) */}
      <section id="uvp" className="w-full bg-neutral-50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>
              Proposta de valor única
            </p>
            <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-neutral-900">
              Defesa penal com resposta ágil, estratégia transparente e comunicação em linguagem simples.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <span className="text-neutral-800">Resposta em até 24 horas</span>
                <p className="text-sm text-neutral-500">Plantão para urgências.</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <span className="text-neutral-800">Plano de ação por fase</span>
                <p className="text-sm text-neutral-500">Policial, processual, júri e execução.</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <span className="text-neutral-800">Preparação para audiências e depoimentos</span>
                <p className="text-sm text-neutral-500">Simulação e roteiro de perguntas.</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <span className="text-neutral-800">Canal seguro para documentos e atualizações</span>
                <p className="text-sm text-neutral-500">Envio protegido e acompanhamento contínuo.</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-neutral-700">
                <span className="font-medium" style={{ color: "var(--brand-gold)" }}>Para quem:</span> pessoas físicas e empresas em Porto Velho e região metropolitana.
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Expectativa realista: Prazos e medidas variam conforme o caso, foro e complexidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="w-full max-w-7xl px-4 py-24 bg-neutral-50 rounded-2xl scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Como funciona</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-neutral-900">3 passos simples</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Passo 1 */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>1</span>
                <h3 className="text-base font-semibold text-neutral-900">Triagem e consulta</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Coleta dos fatos essenciais, documentos e análise preliminar de riscos e prazos (inclui orientações imediatas).
              </p>
              <a href="#cta-final" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
                Agendar consulta
              </a>
            </div>

            {/* Passo 2 */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>2</span>
                <h3 className="text-base font-semibold text-neutral-900">Plano jurídico</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Estratégia por fase, lista de documentos, medidas cabíveis (habeas corpus, liberdade provisória, ANPP, cautelares), cronograma e honorários conforme Tabela OAB/RO.
              </p>
              <a href="#cta-final" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium" style={{ color: "var(--brand-gold)", border: "1px solid var(--brand-gold)" }}>
                Receber plano
              </a>
            </div>

            {/* Passo 3 */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>3</span>
                <h3 className="text-base font-semibold text-neutral-900">Execução e acompanhamento</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Atuação em delegacia e fórum (protocolos, audiências, negociações), relatórios e revisão contínua da estratégia.
              </p>
              <a href="#cta-final" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#111", border: "1px solid var(--brand-gold)" }}>
                Iniciar acompanhamento
              </a>
            </div>
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
                <a href="#casos" className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
                  Ver casos & depoimentos
                </a>
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
              <a href="#cta-final" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
                Agendar consulta agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="honorarios" className="w-full max-w-7xl px-4 py-24 bg-neutral-50 rounded-2xl scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Honorários e formatos</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-neutral-900">Transparência de honorários</h2>

          <p className="mt-2 text-sm text-neutral-600">Formatos usuais (conforme Código de Ética e Tabela OAB/RO):</p>

          {/* Mobile: Carousel */}
          <div className="mt-6 md:hidden">
            <Carousel ariaLabel="Honorários e formatos">
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <ul className="space-y-2 text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Consulta avulsa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Por fase: policial / instrução / recursos / júri / execução penal</span>
                  </li>
                </ul>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <ul className="space-y-2 text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Acompanhamento contínuo (empresas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                    <span>Atendimento emergencial (plantão e deslocamento quando aplicável)</span>
                  </li>
                </ul>
              </div>
            </Carousel>
          </div>

          {/* Desktop: grid */}
          <div className="mt-6 hidden md:grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                  <span>Consulta avulsa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                  <span>Por fase: policial / instrução / recursos / júri / execução penal</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                  <span>Acompanhamento contínuo (empresas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
                  <span>Atendimento emergencial (plantão e deslocamento quando aplicável)</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-neutral-600">
            Nota: Valores definidos após análise do caso e complexidade. Emitimos contrato e recibos.
          </p>
        </div>
      </section>

      <section id="faq" className="w-full max-w-7xl px-4 py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Objeções e FAQ</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-neutral-900">Perguntas frequentes</h2>

          {/* Mobile: Carousel */}
          <div className="mt-8 md:hidden">
            <Carousel ariaLabel="FAQ">
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Atende emergências 24h em Porto Velho?</h3>
                <p className="mt-2 text-sm text-neutral-700">Sim. Há política de plantão com canais de contato priorizados para urgências. Consulte a disponibilidade no momento do chamado.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Quanto tempo até a audiência de custódia?</h3>
                <p className="mt-2 text-sm text-neutral-700">Como regra, até 24h a partir do flagrante, conforme legislação aplicável. O acompanhamento desde as primeiras horas é essencial.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Quais documentos preciso?</h3>
                <p className="mt-2 text-sm text-neutral-700">RG/CPF, comprovantes, boletim/auto e contatos de possíveis testemunhas. Outros documentos podem ser indicados após triagem.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Como são definidos os honorários?</h3>
                <p className="mt-2 text-sm text-neutral-700">Conforme Tabela OAB/RO, complexidade do caso e eventuais deslocamentos. Sempre de forma transparente e formalizada em contrato.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Você atua em quais comarcas?</h3>
                <p className="mt-2 text-sm text-neutral-700">Porto Velho e região metropolitana. Outras localidades podem ser avaliadas caso a caso.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Atendimento online é possível?</h3>
                <p className="mt-2 text-sm text-neutral-700">Sim. Utilizamos canais seguros para reuniões e troca de documentos, respeitando a LGPD.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">E se meu caso envolver violência doméstica ou crimes de trânsito?</h3>
                <p className="mt-2 text-sm text-neutral-700">O atendimento observa os limites éticos e legais, com orientação técnica sobre medidas cabíveis e fluxos específicos.</p>
              </div>
              <div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">Sigilo e proteção de dados?</h3>
                <p className="mt-2 text-sm text-neutral-700">Adotamos medidas técnicas e organizacionais de segurança sob a LGPD, com canais criptografados e política de privacidade.</p>
              </div>
            </Carousel>
          </div>

          {/* Desktop: grid */}
          <div className="mt-8 hidden md:grid grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Atende emergências 24h em Porto Velho?</h3>
              <p className="mt-2 text-sm text-neutral-700">Sim. Há política de plantão com canais de contato priorizados para urgências. Consulte a disponibilidade no momento do chamado.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Quanto tempo até a audiência de custódia?</h3>
              <p className="mt-2 text-sm text-neutral-700">Como regra, até 24h a partir do flagrante, conforme legislação aplicável. O acompanhamento desde as primeiras horas é essencial.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Quais documentos preciso?</h3>
              <p className="mt-2 text-sm text-neutral-700">RG/CPF, comprovantes, boletim/auto e contatos de possíveis testemunhas. Outros documentos podem ser indicados após triagem.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Como são definidos os honorários?</h3>
              <p className="mt-2 text-sm text-neutral-700">Conforme Tabela OAB/RO, complexidade do caso e eventuais deslocamentos. Sempre de forma transparente e formalizada em contrato.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Você atua em quais comarcas?</h3>
              <p className="mt-2 text-sm text-neutral-700">Porto Velho e região metropolitana. Outras localidades podem ser avaliadas caso a caso.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Atendimento online é possível?</h3>
              <p className="mt-2 text-sm text-neutral-700">Sim. Utilizamos canais seguros para reuniões e troca de documentos, respeitando a LGPD.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">E se meu caso envolver violência doméstica ou crimes de trânsito?</h3>
              <p className="mt-2 text-sm text-neutral-700">O atendimento observa os limites éticos e legais, com orientação técnica sobre medidas cabíveis e fluxos específicos.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">Sigilo e proteção de dados?</h3>
              <p className="mt-2 text-sm text-neutral-700">Adotamos medidas técnicas e organizacionais de segurança sob a LGPD, com canais criptografados e política de privacidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet ético */}
      <LeadMagnet />

      {/* CTA Final */}
      <section id="cta-final" className="w-full border-y border-neutral-900/50 scroll-mt-24" style={{ backgroundColor: "var(--brand-black)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Precisa de ajuda agora?</h2>
          <p className="mt-3 text-sm text-neutral-300">Resposta em até 24 horas • Confidencialidade • Contrato transparente</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#cta-final" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-black" style={{ backgroundColor: "var(--brand-gold)" }}>
              Atendimento emergencial 24h
            </a>
            <a href="#cta-final" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Agendar consulta
            </a>
            <a href="#cta-final" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ border: "1px solid var(--brand-gold)" }}>
              Enviar resumo do caso
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
