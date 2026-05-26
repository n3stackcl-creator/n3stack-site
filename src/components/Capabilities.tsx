import { heroTrustIndicators } from "@/lib/constants";

export function Capabilities() {
  return (
    <section
      id="capacidades"
      className="border-t border-white/[0.06] px-6 py-28"
      aria-label="Capacidades"
    >
      <div className="mx-auto max-w-6xl">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
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
