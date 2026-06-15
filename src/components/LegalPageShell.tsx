import Link from "next/link";
import type { ReactNode } from "react";
import { brand } from "@/lib/brand";

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
