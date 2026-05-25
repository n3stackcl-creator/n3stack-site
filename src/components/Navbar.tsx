import Link from "next/link";
import { cta, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050508]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 ring-1 ring-emerald-400/30">
            <span className="text-xs font-semibold text-emerald-300">N3</span>
          </span>
          <span className="text-sm font-medium tracking-tight text-zinc-100">
            N3Stack
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#proceso" className="transition-colors hover:text-zinc-100">
            Proceso
          </a>
          <a href="#servicios" className="transition-colors hover:text-zinc-100">
            Servicios
          </a>
          <a href="#contacto" className="transition-colors hover:text-zinc-100">
            Contacto
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/25 transition hover:bg-emerald-500/20"
        >
          {cta.whatsapp}
        </a>
      </nav>
    </header>
  );
}
