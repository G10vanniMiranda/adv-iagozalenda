export default function Questionario() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="w-full max-w-3xl px-4 py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900">Questionário de triagem</h1>
        <p className="mt-3 text-sm text-neutral-700">
          Este questionário ajuda a organizar informações essenciais do caso. Preenchimento opcional.
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
          <li>Dados básicos: nome, contato</li>
          <li>Resumo dos fatos (data, local, circunstâncias)</li>
          <li>Documentos disponíveis (boletim/auto, laudos, registros)</li>
          <li>Medidas urgentes em curso (fiança, medidas cautelares, custódia)</li>
        </ul>
        <p className="mt-3 text-xs text-neutral-500">Não envie dados sensíveis além do necessário nesta etapa.</p>
      </section>
    </div>
  );
}
