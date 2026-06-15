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
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "N3Stack | Automatización e IA",
    description: "Tu negocio, en piloto automático.",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "61pu7ebamkmlbxz6ub1siymrjzuby7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} h-full antialiased`}>
      <head><meta name="facebook-domain-verification" content="61pu7ebamkmlbxz6ub1siymrjzuby7" /></head>
      <body className="min-h-full bg-background text-zinc-100">{children}</body>
    </html>
  );
}
