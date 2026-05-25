import { howWeWork } from "@/lib/constants";

export function HowWeWork() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400/90">
            Proceso
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {howWeWork.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {howWeWork.subtitle}
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howWeWork.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-emerald-400/20 hover:bg-white/[0.04] sm:p-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-sm font-semibold tabular-nums text-emerald-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-medium text-zinc-100 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
