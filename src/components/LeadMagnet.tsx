"use client";

import { useState } from "react";
import Link from "next/link";

type LeadMagnetForm = {
  name: string;
  email: string;
  phone?: string;
  checklist: boolean;
  guia: boolean;
};

export default function LeadMagnet() {
  const [form, setForm] = useState<LeadMagnetForm>({
    name: "",
    email: "",
    phone: "",
    checklist: true,
    guia: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Informe seu nome.";
    if (!form.email.trim()) return "Informe seu e-mail.";
    // simples validação de e-mail
    const emailOk = /.+@.+\..+/.test(form.email);
    if (!emailOk) return "E-mail inválido.";
    if (!form.checklist && !form.guia) return "Selecione pelo menos um material.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const error = validate();
    if (error) {
      setMessage(error);
      return;
    }
    try {
      setSubmitting(true);
      // TODO: integrar com API/serviço de e-mail. Por ora, apenas simula sucesso.
      await new Promise((r) => setTimeout(r, 600));
      setMessage("Obrigado! Em breve enviaremos os materiais selecionados para o seu e-mail.");
      setForm({ name: "", email: "", phone: "", checklist: true, guia: false });
    } catch (err) {
      setMessage("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="materiais" className="w-full bg-neutral-50 rounded-2xl scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium" style={{ color: "var(--brand-gold)" }}>Recursos gratuitos</p>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-neutral-900">Alternativa para baixa intenção (lead magnet ético)</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="rounded-xl border border-neutral-200 bg-white p-5 cursor-pointer flex items-start gap-3">
              <input
                type="checkbox"
                name="checklist"
                checked={form.checklist}
                onChange={onChange}
                className="mt-1 h-4 w-4"
                aria-label="Selecionar checklist"
              />
              <div>
                <p className="font-medium text-neutral-900">Checklist: o que fazer em caso de prisão em flagrante em Porto Velho/RO</p>
                <p className="mt-1 text-sm text-neutral-600">Passos práticos e direitos essenciais nas primeiras horas.</p>
              </div>
            </label>
            <label className="rounded-xl border border-neutral-200 bg-white p-5 cursor-pointer flex items-start gap-3">
              <input
                type="checkbox"
                name="guia"
                checked={form.guia}
                onChange={onChange}
                className="mt-1 h-4 w-4"
                aria-label="Selecionar guia rápido"
              />
              <div>
                <p className="font-medium text-neutral-900">Guia rápido: audiência de custódia no TJRO — seus direitos e deveres</p>
                <p className="mt-1 text-sm text-neutral-600">Entenda o fluxo, o que esperar e como se preparar.</p>
              </div>
            </label>
          </div>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">Telefone (opcional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="(xx) xxxxx-xxxx"
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              />
            </div>

            <div className="md:col-span-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-neutral-600">Sem spam. Descadastre-se a qualquer momento.</p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black disabled:opacity-70"
                style={{ backgroundColor: "var(--brand-gold)" }}
              >
                {submitting ? "Enviando..." : "Receber por e-mail"}
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-4 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
              {message}
            </div>
          )}

          <p className="mt-4 text-xs text-neutral-500">
            Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD. <Link href="#privacidade" className="underline" style={{ color: "var(--brand-gold)" }}>Política de Privacidade</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
