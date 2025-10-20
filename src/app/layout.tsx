import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppClient from "@/components/FloatingWhatsAppClient";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://" + (SITE.domain || "example.com")),
  title: {
    template: "%s | " + SITE.name,
    default: SITE.name,
  },
  description: "Defesa Penal Estratégica em Porto Velho/RO. Atendimento emergencial, estratégia clara e acompanhamento próximo.",
  keywords: [
    "advogado criminal",
    "defesa penal",
    "Porto Velho",
    "audiência de custódia",
    "flagrante",
    "ANPP",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: SITE.name,
    description: "Defesa Penal Estratégica em Porto Velho/RO.",
    type: "website",
    locale: "pt_BR",
    url: "https://" + (SITE.domain || "example.com"),
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: "Defesa Penal Estratégica em Porto Velho/RO.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip to content for keyboard users */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-3 py-2 rounded-md text-sm"
          style={{ backgroundColor: "var(--brand-gold)", color: "var(--brand-black)" }}
        >
          Ir para o conteúdo
        </a>
        <TopBar />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <FloatingWhatsAppClient />
        <Footer />
      </body>
    </html>
  );
}
