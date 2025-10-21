import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site Zalenda Advogados: uso permitido do conteúdo, limitações de responsabilidade, direitos autorais e foro de eleição.",
};

export default function TermosPage() {
  return (
    <main className="w-full" style={{ backgroundColor: "var(--brand-black)" }}>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-neutral-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Termos de Uso</h1>
        <p className="mt-3 text-neutral-300 text-sm">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-neutral mt-8 max-w-none">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar este site ("Site") operado por {SITE.name}, localizado em {SITE.city},
            você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso.
            Se você não concordar com quaisquer condições aqui previstas, orientamos que interrompa o
            acesso e a navegação no Site.
          </p>

          <h2>2. Finalidade do Site</h2>
          <p>
            O Site possui finalidade estritamente informativa e institucional, destinado a apresentar
            informações sobre a atuação profissional do escritório em Direito Criminal, notícias e
            publicações de caráter geral. O conteúdo disponibilizado não constitui, em nenhuma hipótese,
            orientação jurídica específica, aconselhamento ou consultoria online e não substitui a
            análise técnica individualizada de um caso concreto.
          </p>

          <h2>3. Uso Permitido do Conteúdo</h2>
          <p>
            O visitante compromete-se a utilizar o Site de forma ética e lícita, abstendo-se de praticar
            quaisquer atos que possam violar a legislação vigente, os direitos de terceiros ou as
            disposições destes Termos. O uso do conteúdo é permitido exclusivamente para fins pessoais e
            informativos, vedada a sua exploração comercial sem autorização prévia e expressa do
            {" "}{SITE.name}.
          </p>

          <h2>4. Direitos Autorais e Propriedade Intelectual</h2>
          <p>
            Salvo indicação em contrário, todos os textos, fotografias, imagens, logotipos, marcas e
            demais materiais disponibilizados neste Site são de titularidade exclusiva de {SITE.name} ou
            utilizados mediante autorização dos respectivos titulares, sendo protegidos pela legislação
            aplicável de direitos autorais, propriedade intelectual e concorrência. É proibida a cópia,
            reprodução, distribuição, modificação, publicação ou qualquer forma de uso, total ou parcial,
            do conteúdo sem autorização prévia e por escrito do escritório.
          </p>

          <h2>5. Proibições de Uso Indevido</h2>
          <p>
            É vedado ao usuário, entre outras condutas: (i) utilizar o Site para fins ilícitos; (ii)
            violar a privacidade, a honra, a imagem ou quaisquer direitos de terceiros; (iii) remover ou
            alterar avisos de direitos autorais ou marcas; (iv) realizar engenharia reversa, varredura
            automatizada, scraping ou coleta massiva de dados sem consentimento; (v) inserir códigos
            maliciosos ou comprometer a segurança do Site; e (vi) distorcer, descontextualizar ou
            manipular conteúdo aqui publicado.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            {SITE.name} envida esforços razoáveis para manter as informações do Site atualizadas e
            corretas. Todavia, não garante a precisão, integralidade ou atualidade de todo o conteúdo.
            O escritório não se responsabiliza por decisões tomadas com base nas informações disponibilizadas,
            tampouco por danos de qualquer natureza decorrentes de falhas técnicas, indisponibilidades,
            vírus, ou utilização inadequada do Site pelo usuário. A navegação aqui não cria, por si só,
            vínculo advogado-cliente, o qual depende de contratação formal e aceite mútuo.
          </p>

          <h2>7. Proteção de Dados e LGPD</h2>
          <p>
            O tratamento de dados pessoais eventualmente coletados por meio do Site observará a Lei
            Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e a legislação aplicável. Dados
            fornecidos voluntariamente por formulários, e-mails ou aplicativos de mensagens serão usados
            exclusivamente para as finalidades informadas, com base legal adequada e medidas de segurança
            compatíveis. O usuário poderá exercer seus direitos previstos na LGPD por meio de contato em
            {" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>8. Links para Terceiros</h2>
          <p>
            O Site pode conter links para páginas externas mantidas por terceiros. {SITE.name} não se
            responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses sites, nem por
            quaisquer danos decorrentes de seu uso. Recomenda-se a leitura atenta dos respectivos termos
            e políticas antes da utilização.
          </p>

          <h2>9. Atualizações e Alterações</h2>
          <p>
            {SITE.name} poderá, a seu critério, atualizar, alterar ou substituir estes Termos de Uso a
            qualquer tempo, sem aviso prévio, passando as novas versões a vigorar imediatamente após a
            sua publicação no Site. Recomendamos a verificação periódica deste documento.
          </p>

          <h2>10. Foro de Eleição</h2>
          <p>
            Fica eleito o foro da Comarca de Porto Velho, Estado de Rondônia (RO), com renúncia a
            qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias
            decorrentes da interpretação ou execução destes Termos.
          </p>

          <h2>11. Disposições Finais</h2>
          <p>
            Estes Termos de Uso são de propriedade exclusiva de {SITE.name}. O acesso e uso do Site
            implicam na aceitação integral e irrestrita das condições aqui estabelecidas.
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
