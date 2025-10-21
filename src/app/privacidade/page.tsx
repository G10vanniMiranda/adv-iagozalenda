import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD)",
  description:
    "Política de Privacidade do Zalenda Advogados: como coletamos, tratamos e protegemos dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <main className="w-full" style={{ backgroundColor: "var(--brand-black)" }}>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-neutral-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Política de Privacidade (LGPD)</h1>
        <p className="mt-3 text-neutral-300 text-sm">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-neutral mt-8 max-w-none">
          <h2>1. Introdução e Compromisso com a Privacidade</h2>
          <p>
            Esta Política de Privacidade descreve como {SITE.name}, com sede em {SITE.city}, coleta,
            utiliza, armazena e protege dados pessoais obtidos por meio deste site ("Site"), em
            conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).
            Nosso compromisso é tratar informações com sigilo, segurança e respeito, observando o dever
            ético da advocacia e a confidencialidade inerente à relação advogado–cliente.
          </p>

          <h2>2. Dados Pessoais Coletados</h2>
          <p>
            Podemos coletar dados pessoais fornecidos voluntariamente pelo usuário, tais como nome,
            e-mail, telefone e informações inseridas em formulários ou mensagens (por exemplo, via
            e-mail ou aplicativos de mensagens). Também poderemos coletar dados de navegação por meio de
            cookies e tecnologias semelhantes, e dados estatísticos de acesso em ferramentas de
            analytics, sem identificar diretamente o usuário quando não necessário.
          </p>

          <h2>3. Finalidade do Tratamento</h2>
          <p>
            Os dados pessoais serão tratados exclusivamente para: (i) atendimento a dúvidas e
            solicitações; (ii) comunicação referente a serviços jurídicos; (iii) eventual execução de
            medidas pré-contratuais ou contratuais; e (iv) cumprimento de obrigações legais ou
            regulatórias. Não realizamos uso dos dados para fins distintos daqueles informados, salvo com
            novo consentimento do titular quando aplicável.
          </p>

          <h2>4. Base Legal</h2>
          <p>
            As atividades de tratamento se apoiam, conforme o caso, nas seguintes bases legais da LGPD:
            (i) consentimento do titular; (ii) execução de contrato ou de procedimentos preliminares
            relacionados a contrato do qual seja parte o titular; (iii) legítimo interesse do
            controlador, observado o equilíbrio com direitos e liberdades fundamentais do titular; e
            (iv) cumprimento de obrigação legal ou regulatória.
          </p>

          <h2>5. Armazenamento e Proteção</h2>
          <p>
            Adotamos medidas técnicas e administrativas razoáveis para proteger dados pessoais contra
            acessos não autorizados, perda, alteração ou divulgação indevida. O acesso às informações é
            restrito a profissionais devidamente autorizados e comprometidos com a confidencialidade.
          </p>

          <h2>6. Compartilhamento com Terceiros</h2>
          <p>
            Poderemos compartilhar dados com parceiros estritamente necessários à operação do Site e da
            comunicação (por exemplo, provedores de hospedagem, serviços de e-mail ou ferramentas de
            analytics), sempre que tais terceiros observarem padrões adequados de segurança e privacidade
            e atuarem conforme nossas instruções.
          </p>

          <h2>7. Direitos do Titular</h2>
          <p>
            O titular dos dados poderá exercer os direitos previstos na LGPD, incluindo confirmação de
            tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade e
            informação sobre compartilhamentos. As solicitações poderão ser feitas pelo e-mail
            <a href={`mailto:${SITE.email}`}> {SITE.email}</a>.
          </p>

          <h2>8. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Utilizamos cookies para viabilizar funcionalidades essenciais do Site e melhorar a
            experiência de navegação. O usuário pode gerenciar preferências no navegador. Ferramentas de
            analytics podem coletar métricas agregadas de uso sem identificação direta do titular, salvo
            quando autorizado ou necessário.
          </p>

          <h2>9. Prazo de Armazenamento</h2>
          <p>
            Os dados serão mantidos apenas pelo período necessário ao cumprimento das finalidades
            informadas e observância de obrigações legais aplicáveis. Decorrido o prazo, os dados serão
            eliminados ou anonimizados, salvo hipóteses legais de conservação.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para dúvidas ou solicitações relativas a esta Política e à LGPD, entre em contato pelo e-mail
            <a href={`mailto:${SITE.email}`}> {SITE.email}</a>.
          </p>

          <h2>11. Alterações nesta Política</h2>
          <p>
            Esta Política poderá ser alterada a qualquer tempo para refletir melhorias, atualizações
            legais ou mudanças operacionais. As versões atualizadas serão publicadas nesta página com a
            indicação da data da última atualização.
          </p>

          <h2>12. Foro de Eleição</h2>
          <p>
            Fica eleito o foro da Comarca de Porto Velho, Estado de Rondônia (RO), para dirimir
            quaisquer controvérsias relacionadas a esta Política.
          </p>

          <h2>13. Informações Sensíveis</h2>
          <p>
            {SITE.name} não solicita nem coleta dados sensíveis sem necessidade. Caso tais informações
            sejam imprescindíveis para a análise jurídica, seu tratamento observará estritamente a base
            legal aplicável e o dever de sigilo profissional, em ambiente seguro e com acesso restrito.
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
