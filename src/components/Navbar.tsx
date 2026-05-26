import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";
import { cta, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-6 sm:h-[4.5rem]">
        <Link
          href="/"
          className={`group flex shrink-0 items-center ${brand.navMark} ${brand.focusRing}`}
        >
          <BrandLogo variant="mark" priority />
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#demo" className="transition-colors hover:text-zinc-100">
            Demo
          </a>
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
          className={brand.navCta}
        >
          {cta.whatsapp}
        </a>
      </nav>
    </header>
  );
}
