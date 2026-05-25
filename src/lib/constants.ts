/** Reemplaza con tu número internacional sin + ni espacios (ej. 5491123456789) */
export const WHATSAPP_NUMBER = "56976177680";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer cómo pueden automatizar procesos en mi negocio."
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const heroTrustIndicators = [
  {
    title: "IA aplicada a negocio",
    description:
      "Soluciones enfocadas en eficiencia, atención y escalabilidad real.",
  },
  {
    title: "Automatización escalable",
    description:
      "Diseñamos flujos que crecen con tus procesos y herramientas.",
  },
  {
    title: "Integraciones reales",
    description:
      "Conectamos APIs, plataformas y sistemas de forma estable.",
  },
] as const;

export const services = [
  {
    title: "Automatización de procesos",
    description:
      "Eliminamos tareas repetitivas con flujos inteligentes entre tus herramientas: CRM, hojas de cálculo, email y más.",
    icon: "workflow",
  },
  {
    title: "Agentes de IA",
    description:
      "Asistentes que atienden consultas, califican leads y ejecutan acciones 24/7 con el tono de tu marca.",
    icon: "bot",
  },
  {
    title: "Integraciones a medida",
    description:
      "Conectamos APIs, bases de datos y sistemas legacy en una arquitectura estable y escalable.",
    icon: "plug",
  },
  {
    title: "Consultoría estratégica",
    description:
      "Identificamos oportunidades de ROI, priorizamos quick wins y diseñamos la hoja de ruta de transformación.",
    icon: "chart",
  },
] as const;
