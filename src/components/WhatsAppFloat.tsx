import { whatsapp } from "@/lib/brand";
import { WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={whatsapp.float}
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
