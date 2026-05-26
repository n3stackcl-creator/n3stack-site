import { whatsapp } from "@/lib/brand";
import { cta, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./icons";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          ¿Listo para el siguiente paso?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-400">
          Cuéntanos tu caso en un mensaje. Respondemos en menos de 24 horas con
          una propuesta clara y sin compromiso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-10 inline-flex h-14 items-center justify-center gap-3 px-10 text-base ${whatsapp.cta}`}
        >
          <IconWhatsApp className="h-5 w-5" />
          {cta.final}
        </a>
      </div>
    </section>
  );
}
