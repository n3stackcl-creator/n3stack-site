import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";
import { cta, navLinks, siteHref, WHATSAPP_URL } from "@/lib/constants";

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

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={siteHref(link.href)}
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={brand.navCta}
        >
          {cta.primary}
        </a>
      </nav>
    </header>
  );
}
