"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/config/site";

type Props = {
    phone?: string; // E.164 sem sinais, ex: 5569999999999
    message?: string;
};

export default function FloatingWhatsApp({
    phone = SITE.phoneE164,
    message = SITE.whatsMessage,
}: Props) {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
        <a
            href={href}
            aria-label="Abrir WhatsApp para atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg focus:outline-none focus:ring-2 text-white"
            style={{ backgroundColor: "#25D366" }}
        >
            <FaWhatsapp size={28} />
            <span className="sr-only">WhatsApp</span>
        </a>
    );
}
