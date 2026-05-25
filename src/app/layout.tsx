import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "N3Stack | Automatización e IA para tu negocio",
  description:
    "Agencia especializada en automatización de procesos, agentes de IA e integraciones a medida.",
  openGraph: {
    title: "N3Stack | Automatización e IA",
    description: "Tu negocio, en piloto automático.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050508] text-zinc-100">{children}</body>
    </html>
  );
}
