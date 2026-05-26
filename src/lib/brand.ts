/**
 * N3Stack brand tokens (Tailwind class strings).
 * Electric blue + cyan for UI; WhatsApp green is isolated below.
 */
export const brand = {
  eyebrow:
    "text-sm font-medium uppercase tracking-widest text-blue-400/90",
  cardHover:
    "transition hover:border-blue-400/20 hover:bg-white/[0.04]",
  stepBadge:
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-semibold tabular-nums text-blue-300",
  iconTile:
    "mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 text-blue-300 ring-1 ring-white/[0.08] transition group-hover:ring-blue-400/25",
  focusRing:
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400/50",
  heroGradient:
    "block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent",
  heroBadgeDot:
    "h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.75)]",
  chatAgentBubble:
    "rounded-bl-md border border-blue-400/20 bg-blue-500/[0.08] text-zinc-100",
  chatAgentLabel:
    "mb-1.5 text-[10px] font-medium uppercase tracking-wider text-blue-400/90",
  chatTypingBubble:
    "rounded-2xl rounded-bl-md border border-blue-400/20 bg-blue-500/[0.08] px-4 py-3",
  pillActive:
    "border-blue-400/40 bg-blue-500/15 text-blue-200",
  pillIdle:
    "border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-blue-400/25 hover:bg-white/[0.06] hover:text-zinc-200",
  demoBadge:
    "shrink-0 rounded-lg bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-400/80 ring-1 ring-blue-400/20",
  avatarRing: "ring-1 ring-blue-400/25",
  statusDot:
    "bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.75)]",
  statusDotBusy:
    "animate-pulse bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)]",
  typingDot: "bg-blue-400",
  typingDotSm: "bg-blue-300",
  navMark: "py-1",
  navCta:
    "inline-flex max-w-[10.5rem] items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.04] px-3 py-2 text-center text-xs font-medium leading-snug text-blue-200/90 transition hover:border-cyan-400/30 hover:bg-blue-500/[0.08] hover:text-cyan-100 sm:max-w-none sm:px-4 sm:text-sm",
  heroWatermark:
    "pointer-events-none absolute z-0 h-[min(42vh,380px)] w-auto select-none opacity-[0.06] mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_72%)] sm:h-[min(48vh,440px)] sm:opacity-[0.07] lg:h-[min(58vh,520px)] lg:opacity-[0.08]",
} as const;

/** WhatsApp-only greens — do not use for general branding. */
export const whatsapp = {
  solid: "bg-[#25D366] hover:bg-[#20bd5a]",
  shadow: "shadow-lg shadow-[#25D366]/25",
  float:
    "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-[#20bd5a] md:bottom-8 md:right-8",
  cta: "inline-flex items-center justify-center rounded-full bg-[#25D366] font-semibold text-white transition hover:bg-[#20bd5a]",
} as const;
