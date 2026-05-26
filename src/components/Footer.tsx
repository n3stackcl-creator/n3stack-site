import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <BrandLogo variant="full" className="h-9 w-auto sm:h-10" />
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            © {year} N3Stack. Todos los derechos reservados.
          </p>
        </div>
        <p className="text-center text-sm text-zinc-600 sm:text-right">
          Automatización · IA · Integraciones
        </p>
      </div>
    </footer>
  );
}
