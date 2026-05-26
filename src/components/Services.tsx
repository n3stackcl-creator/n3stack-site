import { brand } from "@/lib/brand";
import { services } from "@/lib/constants";
import { ServiceIcon } from "./icons";

export function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/[0.06] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className={brand.eyebrow}>Servicios</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Todo lo que necesitas para automatizar con confianza
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Desde el diagnóstico hasta la implementación y el soporte continuo.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className={`group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 ${brand.cardHover}`}
            >
              <div className={brand.iconTile}>
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-zinc-100">{service.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
