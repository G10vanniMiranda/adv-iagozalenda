import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso Legal do site do Zalenda Advogados: caráter informativo do conteúdo e limites de responsabilidade.",
};

export default function AvisoLegalPage() {
  return (
    <main className="w-full" style={{ backgroundColor: "var(--brand-black)" }}>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-neutral-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Aviso Legal</h1>
        <p className="mt-3 text-neutral-300 text-sm">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-neutral mt-8 max-w-none">
          <h2>1. Natureza Informativa do Conteúdo</h2>
          <p>
            As informações disponibilizadas neste site ("Site") têm natureza exclusivamente informativa e
            caráter geral, sendo destinadas a apresentar a atuação profissional de {SITE.name} na área de
            Direito Criminal. O conteúdo não tem por objetivo prestar consultoria jurídica individual,
            aconselhamento ou atendimento online.
          </p>

          <h2>2. Ausência de Vínculo Advogado–Cliente</h2>
          <p>
            O mero acesso ao Site, bem como o envio de mensagens, dados ou informações por meio de
            formulários, e-mails ou aplicativos de mensagens, não cria, por si só, vínculo
            advogado–cliente. A relação profissional depende de contratação formal e aceite mútuo,
            com definição de escopo e condições específicas.
          </p>

          <h2>3. Particularidades de Cada Caso</h2>
          <p>
            Cada caso possui suas particularidades fáticas e jurídicas. As informações publicadas no Site
            não substituem a análise individualizada do caso concreto, a consulta presencial ou digital e
            a avaliação técnica por profissional habilitado. Antes de tomar qualquer decisão, procure
            orientação jurídica específica.
          </p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            Embora envidemos esforços para manter o conteúdo atualizado e acurado, {SITE.name} não
            garante a integralidade, precisão ou atualidade de todas as informações. O escritório não se
            responsabiliza por quaisquer danos diretos ou indiretos, de qualquer natureza, decorrentes do
            uso do conteúdo do Site, de interpretações equivocadas, de decisões tomadas com base nas
            informações publicadas, de indisponibilidades técnicas, falhas de sistemas, vírus ou outros
            eventos fora de nosso controle razoável.
          </p>

          <h2>5. Linguagem e Clareza</h2>
          <p>
            Buscamos adotar linguagem jurídica profissional, formal e clara, sem excesso de termos
            técnicos, para que o conteúdo seja compreensível ao público em geral, preservando a
            precisão necessária ao contexto jurídico.
          </p>

          <h2>6. Direitos Autorais e Propriedade Intelectual</h2>
          <p>
            Salvo indicação em contrário, os textos, imagens, marcas e demais conteúdos do Site são de
            titularidade de {SITE.name} ou utilizados mediante autorização, sendo vedada a reprodução,
            distribuição, modificação ou uso para fins diversos sem autorização prévia e por escrito.
          </p>

          <h2>7. Contato</h2>
          <p>
            Para esclarecimentos adicionais, dúvidas sobre conteúdo ou solicitações, entre em contato
            pelo e-mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>

        {/* Navegação do Footer (atalhos) */}
        <nav className="mt-10 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/#sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/#cta-final">Ajuda agora</Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
