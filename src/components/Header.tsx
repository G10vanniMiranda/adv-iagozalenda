"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// Navegação principal
const nav = [
    { href: "/", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#cta-final", label: "Ajuda agora" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-neutral-800"
            style={{ backgroundColor: "var(--brand-black)" }}
        >

            <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between gap-6">
                    <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                        {/* Avatar com foto do advogado (coloque o arquivo em /public/zalenda.jpg) */}
                        <Image
                            src="/zalenda1.jpeg"
                            alt="Foto do advogado Iago Zalenda"
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-full ring-1 ring-neutral-800 object-cover"
                            style={{ objectPosition: "50% 40%" }}
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm text-neutral-300">Dr. Iago Zalenda</span>
                            <span className="text-base font-semibold" style={{ color: "var(--brand-gold)" }}>
                                OAB/RO 13938
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav - pode apontar para seções ou páginas futuras */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-neutral-200 hover:text-white transition-colors"
                                style={{
                                    textDecorationColor: "var(--brand-gold)",
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile toggle - abre/fecha o menu no celular */}
                    <button
                        type="button"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-[var(--brand-gold)]"
                        style={{ color: "var(--brand-gold)" }}
                    >
                        {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
                    </button>

                </div>

            </div>

            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-neutral-800 ${open ? "max-h-96" : "max-h-0"}`}
                style={{ backgroundColor: "var(--brand-black)" }}
            >
                <div className="mx-auto max-w-7xl px-4 py-3">
                    <nav className="flex flex-col gap-2 text-sm">
                        {nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded px-2 py-2 text-neutral-200 hover:text-white hover:bg-neutral-800"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
