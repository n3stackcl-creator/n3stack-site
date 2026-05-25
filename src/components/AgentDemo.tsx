import { agentDemo } from "@/lib/constants";
import { AgentDemoChat } from "./AgentDemoChat";

export function AgentDemo() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(6,182,212,0.1),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400/90">
            Demo interactiva
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {agentDemo.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {agentDemo.subtitle}
          </p>
        </div>

        <AgentDemoChat />
      </div>
    </section>
  );
}
