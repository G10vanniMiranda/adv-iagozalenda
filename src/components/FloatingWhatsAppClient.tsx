"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), {
  ssr: false,
});

export default function FloatingWhatsAppClient() {
  return <FloatingWhatsApp />;
}
