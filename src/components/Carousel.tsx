"use client";

import { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

type CarouselProps = {
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function Carousel({ ariaLabel = "carrossel", children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9; // scroll nearly a viewport of the track
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <div className="relative" aria-label={ariaLabel}>
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 bg-neutral-900/70 hover:bg-neutral-900 text-black"
        style={{ color: "var(--brand-gold)" }}
      >
        <HiOutlineChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 bg-neutral-900/70 hover:bg-neutral-900 text-black"
        style={{ color: "var(--brand-gold)" }}
      >
        <HiOutlineChevronRight size={20} />
      </button>
    </div>
  );
}
