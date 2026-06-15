/** Reemplaza con tu número internacional sin + ni espacios (ej. 5491123456789) */
export const WHATSAPP_NUMBER = "56976177680";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola N3Stack, quiero conocer cómo podrían ayudarme a automatizar procesos en mi negocio."
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Resuelve anclas de la home (ej. #demo → /#demo) desde cualquier ruta. */
export function siteHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export const cta = {
  primary: "Agenda una conversación",
  secondary: "Ver servicios",
  demo: "Prueba un escenario",
} as const;

export const navLinks = [
  { href: "#proceso", label: "Proceso" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#demo", label: "Demo" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const site = {
  tagline: "Automatización · IA · Integraciones",
} as const;

export const company = {
  legalName: "N3Stack SpA",
  tradeName: "N3Stack",
  rut: "78.434.803-2",
  address:
    "Fernando Rioja 145, Depto 203, La Cisterna, Región Metropolitana, Chile.",
  email: "contacto@n3stack.cl",
  website: "n3stack.cl",
  websiteUrl: "https://n3stack.cl",
  country: "Chile",
  jurisdiction: "República de Chile",
  description:
    "automatización de procesos, inteligencia artificial, CRM, sitios web e integraciones digitales",
} as const;

export const legalLinks = [
  { href: "/privacidad", label: "Política de Privacidad" },
  { href: "/terminos", label: "Términos y Condiciones" },
] as const;

export const legalPrivacyUpdatedAt = "15 de junio de 2026";
export const legalTermsUpdatedAt = "15 de junio de 2026";

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

export const howWeWork = {
  title: "Cómo trabajamos",
  subtitle:
    "Un proceso simple para transformar necesidades reales en soluciones automatizadas, escalables y medibles.",
  steps: [
    {
      title: "Diagnóstico",
      description:
        "Entendemos tu operación, procesos, herramientas actuales y oportunidades de automatización.",
    },
    {
      title: "Diseño de solución",
      description:
        "Definimos el flujo ideal, las integraciones necesarias y el rol que tendrá la IA en el proceso.",
    },
    {
      title: "Implementación",
      description:
        "Construimos, conectamos y desplegamos la solución usando tecnología moderna y escalable.",
    },
    {
      title: "Optimización continua",
      description:
        "Medimos resultados, ajustamos flujos y mejoramos la solución según el uso real del negocio.",
    },
  ],
} as const;

export const agentDemo = {
  title: "Prueba un agente N3Stack",
  subtitle:
    "Visualiza cómo una IA puede responder consultas, detectar oportunidades y activar procesos comerciales en segundos.",
  emptyHint: cta.demo,
  inputPlaceholder: "Elige un escenario arriba para iniciar la demo",
  agentWritingLabel: "Agente escribiendo...",
  chatCtaTitle: "¿Quieres algo así en tu negocio?",
  chatCtaSubtitle:
    "Diseñamos agentes, automatizaciones e integraciones que conectan procesos reales con resultados medibles.",
  quickActions: [
    {
      id: "whatsapp",
      label: "Automatizar WhatsApp",
      userMessage:
        "Hola, quiero automatizar la atención de clientes por WhatsApp.",
      agentMessage:
        "Perfecto. Podemos ayudarte a responder consultas frecuentes, capturar datos de clientes y derivar oportunidades al equipo comercial.",
    },
    {
      id: "crm",
      label: "Integrar CRM",
      userMessage: "¿También se puede conectar con mi CRM?",
      agentMessage:
        "Sí. Integramos formularios, WhatsApp, CRM, agendas y herramientas internas para que el flujo sea automático y medible.",
    },
    {
      id: "manual",
      label: "Reducir tareas manuales",
      userMessage:
        "Quiero reducir tareas manuales repetitivas en mi operación.",
      agentMessage:
        "Mapeamos los procesos que más tiempo consumen y los automatizamos con flujos e IA, para que tu equipo se enfoque en lo que genera valor.",
    },
  ],
} as const;

export type AgentDemoQuickAction = (typeof agentDemo.quickActions)[number];

export type AgentDemoChatMessage = {
  id: string;
  role: "user" | "agent";
  content: string;
};

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

export const pricingPlans = {
  title: "Planes de inversión",
  subtitle: "Elige el nivel de digitalización que mejor se adapta a tu negocio.",
  plans: [
    {
      id: "presencia-digital",
      name: "Presencia Digital",
      recommended: false,
      monthly: 39990,
      monthlyActivation: 149990,
      annual: 399990,
      annualLabel: "Plan anual",
      features: [
        "Hosting Premium",
        "Dominio .cl o .com",
        "Sitio Web Profesional",
        "Monitoreo 24/7",
        "Soporte Correctivo",
        "Ajustes menores",
      ],
      cta: "Contratar anual",
      whatsappMessage:
        "Hola N3Stack, quiero contratar el plan anual Presencia Digital.",
    },
    {
      id: "empleado-digital",
      name: "Empleado Digital",
      recommended: true,
      monthly: 69990,
      monthlyActivation: 249990,
      annual: 699990,
      annualLabel: "Plan anual recomendado",
      features: [
        "Todo lo de Presencia Digital",
        "Asistente IA Avanzado",
        "WhatsApp Inteligente",
        "Auto-respuestas 24/7",
        "Optimización continua",
      ],
      cta: "Activar plan anual",
      whatsappMessage:
        "Hola N3Stack, quiero activar el plan anual Empleado Digital.",
    },
    {
      id: "fuerza-comercial",
      name: "Fuerza Comercial",
      recommended: false,
      monthly: 99990,
      monthlyActivation: 399990,
      annual: 999990,
      annualLabel: "Plan anual",
      features: [
        "Todo lo de Empleado Digital",
        "CRM Comercial Completo",
        "Seguimiento de Leads",
        "Automatización de Ventas",
        "Gestión de Oportunidades",
      ],
      cta: "Contratar anual",
      whatsappMessage:
        "Hola N3Stack, quiero contratar el plan anual Fuerza Comercial.",
    },
  ],
} as const;

export type PricingPlan = (typeof pricingPlans.plans)[number];
