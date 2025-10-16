export default function EnviarDocumentos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="w-full max-w-3xl px-4 py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900">Envio seguro de documentos</h1>
        <p className="mt-3 text-sm text-neutral-700">
          Em breve, esta página permitirá o upload seguro de arquivos (criptografia em trânsito e em repouso). Por ora, envie por e-mail para
          <a href="mailto:zalendaadvogados@gmail.com" className="ml-1 underline" style={{ color: "var(--brand-gold)" }}>zalendaadvogados@gmail.com</a> ou utilize um link seguro fornecido diretamente pela equipe.
        </p>
        <p className="mt-2 text-xs text-neutral-500">Conforme a LGPD, trataremos seus dados com confidencialidade e finalidade específica.</p>
      </section>
    </div>
  );
}
