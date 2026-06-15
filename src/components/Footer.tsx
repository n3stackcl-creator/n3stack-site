import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";
import { company, legalLinks, navLinks, site, siteHref } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3 md:items-start md:gap-8">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <BrandLogo variant="full" className="h-9 w-auto sm:h-10" />
            <p className="text-center text-sm text-zinc-500 md:text-left">
              © {year} {company.legalName}. Todos los derechos reservados.
            </p>
          </div>

          <nav
            className="flex flex-col items-center gap-3"
            aria-label="Enlaces del sitio"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
              Navegación
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={siteHref(link.href)} className={brand.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-center text-sm leading-relaxed text-zinc-600 md:text-right">
            {site.tagline}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={brand.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center text-xs text-zinc-600 sm:text-right">
            {company.tradeName} · {company.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
