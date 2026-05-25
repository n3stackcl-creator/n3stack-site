export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>© {year} N3Stack. Todos los derechos reservados.</p>
        <p className="text-zinc-600">Automatización · IA · Integraciones</p>
      </div>
    </footer>
  );
}
