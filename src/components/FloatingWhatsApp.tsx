"use client";

import { FaWhatsapp } from "react-icons/fa";

type Props = {
    phone?: string; // E.164 sem sinais, ex: 5569999999999
    message?: string;
};

export default function FloatingWhatsApp({
    phone = "5569993309361",
    message = "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.",
}: Props) {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
        <a
            href={href}
            aria-label="Abrir WhatsApp para atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg focus:outline-none focus:ring-2"
            style={{ backgroundColor: "var(--brand-gold)", color: "#0b0b0b" }}
        >
            <FaWhatsapp size={28} />
            <span className="sr-only">WhatsApp</span>
        </a>
    );
}
