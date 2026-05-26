"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { brand, whatsapp } from "@/lib/brand";
import {
  agentDemo,
  cta,
  WHATSAPP_URL,
  type AgentDemoChatMessage,
  type AgentDemoQuickAction,
} from "@/lib/constants";

const CLEAR_DELAY_MS = 320;
const AGENT_WRITING_DELAY_MS = 520;
const AGENT_REPLY_DELAY_MS = 1000;

type ChatPhase = "idle" | "writing" | "conversation";

function ChatBubble({ message }: { message: AgentDemoChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`chat-fade-in flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[85%] sm:text-[0.9375rem] ${
          isUser
            ? "rounded-br-md border border-white/[0.08] bg-white/[0.06] text-zinc-200"
            : brand.chatAgentBubble
        }`}
      >
        {!isUser && (
          <p className={brand.chatAgentLabel}>Agente N3Stack</p>
        )}
        <p>{message.content}</p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="chat-fade-in flex justify-start">
      <div className={brand.chatTypingBubble}>
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-blue-400/90">
          Agente N3Stack
        </p>
        <div className="flex items-center gap-1.5" aria-label="Escribiendo">
          <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDotSm}`} />
          <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDotSm}`} />
          <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDotSm}`} />
        </div>
      </div>
    </div>
  );
}

function AgentWritingState() {
  return (
    <div className="chat-fade-in flex flex-col items-center justify-center gap-3 py-14">
      <div className="flex items-center gap-1.5">
        <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDot}`} />
        <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDot}`} />
        <span className={`typing-dot h-1.5 w-1.5 rounded-full ${brand.typingDot}`} />
      </div>
      <p className="text-sm font-medium text-zinc-400">
        {agentDemo.agentWritingLabel}
      </p>
    </div>
  );
}

export function AgentDemoChat() {
  const [messages, setMessages] = useState<AgentDemoChatMessage[]>([]);
  const [phase, setPhase] = useState<ChatPhase>("idle");
  const [typing, setTyping] = useState(false);
  const [activeActionId, setActiveActionId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const isBusy = phase === "writing" || typing;

  const clearScheduled = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
  }, []);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, phase, typing, scrollToBottom]);

  useEffect(() => clearScheduled, [clearScheduled]);

  const handleQuickAction = (action: AgentDemoQuickAction) => {
    if (isBusy) return;

    clearScheduled();
    setActiveActionId(action.id);
    setMessages([]);
    setTyping(false);
    setPhase("writing");

    const userMessage: AgentDemoChatMessage = {
      id: `${action.id}-user`,
      role: "user",
      content: action.userMessage,
    };
    const agentMessage: AgentDemoChatMessage = {
      id: `${action.id}-agent`,
      role: "agent",
      content: action.agentMessage,
    };

    schedule(() => {
      setMessages([userMessage]);
      setPhase("conversation");
      setTyping(true);
    }, CLEAR_DELAY_MS + AGENT_WRITING_DELAY_MS);

    schedule(() => {
      setMessages([userMessage, agentMessage]);
      setTyping(false);
    }, CLEAR_DELAY_MS + AGENT_WRITING_DELAY_MS + AGENT_REPLY_DELAY_MS);
  };

  const statusLabel =
    phase === "writing"
      ? agentDemo.agentWritingLabel
      : typing
        ? "Escribiendo…"
        : "Agente activo";

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-white/[0.08] bg-surface shadow-2xl shadow-black/50 ring-1 ring-blue-500/[0.06]">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface ${brand.avatarRing}`}
            >
              <BrandLogo variant="icon" className="h-7 w-7 object-contain" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-zinc-100">
                Agente N3Stack
              </p>
              <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isBusy ? brand.statusDotBusy : brand.statusDot
                  }`}
                />
                {statusLabel}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-300/90">
            Demo interactiva
          </span>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-white/[0.06] px-4 py-3 sm:px-5">
          {agentDemo.quickActions.map((action) => {
            const isActive = activeActionId === action.id;
            return (
              <button
                key={action.id}
                type="button"
                disabled={isBusy}
                onClick={() => handleQuickAction(action)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
                  isActive ? brand.pillActive : brand.pillIdle
                } disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {action.label}
              </button>
            );
          })}
        </div>

        <div
          ref={scrollRef}
          className={`max-h-[min(24rem,60vh)] overflow-y-auto px-4 py-5 transition-opacity duration-300 sm:max-h-[min(28rem,70vh)] sm:px-5 ${
            phase === "writing" ? "opacity-90" : "opacity-100"
          }`}
          aria-live="polite"
          aria-label="Conversación de demostración con agente N3Stack"
        >
          <div className="space-y-4">
            {phase === "idle" && messages.length === 0 && (
              <p className="chat-fade-in py-8 text-center text-sm text-zinc-500">
                {agentDemo.emptyHint}
              </p>
            )}

            {phase === "writing" && <AgentWritingState />}

            {phase === "conversation" &&
              messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}

            {phase === "conversation" && typing && <TypingIndicator />}
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="flex-1 text-sm text-zinc-500">
              {agentDemo.inputPlaceholder}
            </span>
            <span className={brand.demoBadge}>Demo</span>
          </div>
        </div>
      </div>

      <div className="chat-fade-in rounded-2xl border border-white/[0.06] bg-gradient-to-b from-blue-500/[0.04] via-transparent to-transparent p-6 text-center sm:p-8">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
          {agentDemo.chatCtaTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
          {agentDemo.chatCtaSubtitle}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex h-12 w-full items-center justify-center px-6 text-sm sm:mt-8 sm:h-14 sm:w-auto sm:px-10 sm:text-base ${whatsapp.cta} ${whatsapp.shadow}`}
        >
          {cta.primary}
        </a>
      </div>
    </div>
  );
}
