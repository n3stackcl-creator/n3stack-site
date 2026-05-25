import { WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-[#20bd5a] md:bottom-8 md:right-8"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
