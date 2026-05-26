import Image from "next/image";

const LOGO = {
  full: {
    src: "/logo-full.png",
    width: 793,
    height: 323,
    alt: "N3Stack — Tecnología nivel experto",
  },
  icon: {
    src: "/logo-icon.png",
    width: 379,
    height: 352,
    alt: "N3Stack",
  },
} as const;

type BrandLogoVariant = keyof typeof LOGO | "mark";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
};

/** Isotipo + wordmark — sin tagline (navbar, etc.) */
function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}
    >
      <Image
        src={LOGO.icon.src}
        alt=""
        width={LOGO.icon.width}
        height={LOGO.icon.height}
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
        priority
      />
      <span
        className="flex items-baseline gap-0 text-lg font-semibold tracking-tight sm:text-xl"
        aria-hidden
      >
        <span className="text-zinc-50">N3</span>
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Stack
        </span>
      </span>
      <span className="sr-only">N3Stack</span>
    </span>
  );
}

export function BrandLogo({
  variant = "full",
  className,
  priority,
}: BrandLogoProps) {
  if (variant === "mark") {
    return <LogoMark className={className} />;
  }

  const logo = LOGO[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={className}
    />
  );
}
