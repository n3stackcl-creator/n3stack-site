import Link from "next/link";
import type { ReactNode } from "react";
import { brand } from "@/lib/brand";
import { company } from "@/lib/constants";

export function CompanyInfoBlock() {
  return (
    <aside className="mb-10 rounded-xl border border-blue-400/15 bg-blue-500/[0.04] p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-widest text-blue-400/80">
        Información del titular
      </p>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-zinc-500">Razón social</dt>
          <dd className="font-medium text-zinc-200">{company.legalName}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">RUT</dt>
          <dd className="text-zinc-200">{company.rut}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Domicilio</dt>
          <dd className="text-zinc-200">{company.address}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Correo</dt>
          <dd>
            <a
              href={`mailto:${company.email}`}
              className="text-blue-400 transition-colors hover:text-cyan-300"
            >
              {company.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Sitio web</dt>
          <dd>
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition-colors hover:text-cyan-300"
            >
              {company.websiteUrl}
            </a>
          </dd>
        </div>
      </dl>
    </aside>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 scroll-mt-28">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
    </section>
  );
}

export function LegalPageShell({
  title,
  description,
  updatedAt,
  children,
}: {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <article className="relative mx-auto max-w-3xl px-6 pb-28 pt-[calc(4.5rem+4rem)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative">
        <Link
          href="/"
          className={`inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-200 ${brand.focusRing}`}
        >
          ← Volver al inicio
        </Link>

        <p className={`mt-8 ${brand.eyebrow}`}>Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
        <p className="mt-3 text-sm text-zinc-600">
          Última actualización: {updatedAt}
        </p>

        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
          {children}
        </div>
      </div>
    </article>
  );
}
