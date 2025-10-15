export default function TopBar() {
    return (
        <div
            className="w-full text-neutral-100"
            style={{ backgroundColor: "var(--brand-black)" }}
            aria-label="barra superior"
        >
            <div className="mx-auto max-w-7xl px-4 py-2 text-xs md:text-sm">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-x-2">
                        <span className="font-medium" style={{ color: "var(--brand-gold)" }}>OAB/RO 13938</span>
                        <span aria-hidden="true" style={{ color: "var(--brand-gold)" }}>•</span>
                        <span>Atuação em flagrantes e audiências de custódia no TJRO</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2">
                        <span>LGPD em vigor</span>
                        <span aria-hidden="true" style={{ color: "var(--brand-gold)" }}>•</span>
                        <span className="font-medium" style={{ color: "var(--brand-gold)" }}>Atendimento humanizado</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
