/** Reemplaza con tu número internacional sin + ni espacios (ej. 5491123456789) */
export const WHATSAPP_NUMBER = "56976177680";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer cómo pueden automatizar procesos en mi negocio."
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const cta = {
  heroPrimary: "Agenda una conversación",
  heroSecondary: "Ver servicios",
  whatsapp: "Cuéntanos qué quieres automatizar",
  final: "Agenda una conversación",
} as const;

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
  emptyHint: "Selecciona un escenario para iniciar la demo.",
  inputPlaceholder: "Selecciona un escenario para probar el agente…",
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
