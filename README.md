# N3Stack — Landing

Landing minimalista para agencia de automatización e IA. Stack: Next.js (App Router) + Tailwind CSS v4.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## WhatsApp

Edita el número y el mensaje inicial en `src/lib/constants.ts`:

```ts
export const WHATSAPP_NUMBER = "5491123456789"; // sin + ni espacios
```

## Estructura

- `src/components/Hero.tsx` — Hero fullscreen, estética oscura premium
- `src/components/Services.tsx` — Grid de servicios
- `src/components/Contact.tsx` — CTA final WhatsApp
- `src/components/WhatsAppFloat.tsx` — Botón flotante
