import { brand } from "@/lib/brand";
import {
  getWhatsAppUrl,
  pricingPlans,
  type PricingPlan,
} from "@/lib/constants";

function formatPrice(amount: number) {
  return `$${amount.toLocaleString("es-CL")}`;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardClass = plan.recommended ? brand.planCardFeatured : brand.planCard;
  const ctaClass = plan.recommended ? brand.planCtaFeatured : brand.planCta;

  return (
    <article className={cardClass}>
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-blue-400/40 bg-blue-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          Recomendado
        </span>
      )}

      <header className="mt-1">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
          {plan.name}
        </h3>
      </header>

      <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400/80">
          {plan.annualLabel}
        </p>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {formatPrice(plan.annual)}
        </p>
        <div className="mt-3">
          <span className={brand.activationBadge}>Activación $0</span>
        </div>
      </div>

      <div className="mt-5 space-y-1.5 text-sm text-zinc-500">
        <p>
          Plan mensual:{" "}
          <span className="text-zinc-400">{formatPrice(plan.monthly)}</span>
        </p>
        <p>
          Activación:{" "}
          <span className="text-zinc-400">
            {formatPrice(plan.monthlyActivation)}
          </span>
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3 border-t border-white/[0.06] pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/90" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppUrl(plan.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${ctaClass} mt-8`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export function PricingPlans() {
  return (
    <section
      id="planes"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(37,99,235,0.1),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className={brand.eyebrow}>Inversión</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {pricingPlans.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {pricingPlans.subtitle}
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.plans.map((plan) => (
            <li key={plan.id} className={plan.recommended ? "lg:-mt-1" : undefined}>
              <PricingCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
