import { Check, ChevronDown } from "lucide-react";
import type { CSSProperties } from "react";
import type { Agent } from "@/lib/agents";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const Icon = agent.icon;
  const accentStyle = { "--accent": agent.accent } as CSSProperties;

  return (
    <article
      id={`agent-${agent.id}`}
      style={accentStyle}
      className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-slate-200 border-t-[3px] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-raised"
    >
      <div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 12%, white)",
          color: "var(--accent)",
        }}
      >
        <Icon size={24} strokeWidth={1.75} aria-hidden />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">{agent.name}</h3>
      <p
        className="mt-1 text-sm font-semibold"
        style={{ color: "var(--accent)" }}
      >
        {agent.role}
      </p>

      <div className="mt-5 space-y-1 border-t border-slate-100 pt-5">
        {agent.capabilities.map((cap) => (
          <details key={cap.term} className="group/cap rounded-lg">
            <summary className="flex cursor-pointer list-none items-center gap-2.5 rounded-lg px-1 py-2 text-sm transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
              <Check
                size={17}
                strokeWidth={2}
                className="shrink-0"
                style={{ color: "var(--accent)" }}
                aria-hidden
              />
              <span className="flex-1 font-semibold text-slate-800">{cap.term}</span>
              <ChevronDown
                size={16}
                strokeWidth={2}
                className="shrink-0 text-slate-400 transition-transform duration-200 group-open/cap:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="pb-2 pl-7 pr-1 text-sm leading-relaxed text-slate-600">
              {cap.desc}
            </p>
          </details>
        ))}
      </div>
    </article>
  );
}
