import { BrandLogo } from "@/components/BrandLogo";
import { brand, whatsapp } from "@/lib/brand";
import { cta, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./icons";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-[4.25rem] sm:pt-[4.5rem]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.18),transparent)]"
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
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden
      />

      {/* Isotipo watermark — balance visual derecho */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(52vw,640px)] md:block"
        aria-hidden
      >
        <div className="relative flex h-full items-center justify-end pr-4 lg:pr-8">
          <BrandLogo
            variant="icon"
            className={`${brand.heroWatermark} translate-x-[8%] lg:translate-x-[4%]`}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-400">
          <span className={brand.heroBadgeDot} />
          Agencia de automatización e IA
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Tu negocio,
          <span className={brand.heroGradient}>en piloto automático.</span>
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
            className={`group inline-flex h-14 items-center justify-center gap-3 px-8 text-base ${whatsapp.cta} ${whatsapp.shadow}`}
          >
            <IconWhatsApp className="h-5 w-5" />
            {cta.primary}
          </a>
          <a
            href="#servicios"
            className={`h-14 px-8 text-base ${brand.secondaryCta}`}
          >
            {cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
