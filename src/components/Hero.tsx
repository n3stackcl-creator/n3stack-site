import { cta, heroTrustIndicators, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./icons";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Agencia de automatización e IA
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Tu negocio,
          <span className="block bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
            en piloto automático.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Diseñamos flujos inteligentes y agentes de IA que liberan tiempo,
          reducen errores y escalan operaciones sin fricción.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-[#20bd5a] hover:shadow-emerald-900/40"
          >
            <IconWhatsApp className="h-5 w-5" />
            {cta.heroPrimary}
          </a>
          <a
            href="#servicios"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 px-8 text-base font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-zinc-100"
          >
            {cta.heroSecondary}
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-3 sm:gap-6">
          {heroTrustIndicators.map((indicator, index) => (
            <div
              key={indicator.title}
              className={
                index > 0
                  ? "sm:border-l sm:border-white/[0.06] sm:pl-6"
                  : undefined
              }
            >
              <dt className="text-base font-semibold leading-snug tracking-tight text-zinc-100 sm:text-lg">
                {indicator.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-500">
                {indicator.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
