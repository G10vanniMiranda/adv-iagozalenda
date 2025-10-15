export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900/50" style={{ backgroundColor: "var(--brand-black)" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 text-neutral-300">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Identificação e compliance */}
          <div>
            <h3 className="text-sm font-semibold text-white">Credibilidade e compliance</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>OAB/RO 13938</li>
              <li>CNPJ: 00.000.000/0000-00</li>
              <li>Porto Velho/RO — Centro</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </div>

          {/* Contatos e horários */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contato e horários</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Telefone/WhatsApp: (69) 9 0000-0000</li>
              <li>E-mail: contato@exemplo.adv.br</li>
              <li>Atendimento: seg–sex, 9h–18h</li>
              <li>Plantão: sob disponibilidade</li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold text-white">Links</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a href="#sobre" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Sobre</a></li>
              <li><a href="#atuacao" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Áreas de Atuação</a></li>
              <li><a href="#artigos" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Artigos</a></li>
              <li><a href="#termos" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Termos de Uso</a></li>
              <li><a href="#privacidade" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Privacidade (LGPD)</a></li>
              <li><a href="#aviso-legal" className="hover:underline" style={{ color: "var(--brand-gold)" }}>Aviso Legal</a></li>
            </ul>
          </div>

          {/* Aviso */}
          <div>
            <h3 className="text-sm font-semibold text-white">Aviso</h3>
            <p className="mt-3 text-sm text-neutral-300">
              Conteúdo informativo. Não substitui consulta individualizada.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Iago Zalenda — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
