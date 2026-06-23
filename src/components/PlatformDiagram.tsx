import { Fingerprint, History, Workflow, Cable } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { agents, type Agent } from "@/lib/agents";
import { Reveal } from "./Reveal";
interface Capability {
  icon: LucideIcon;
  title: string;
  body: string;
}

const capabilities: Capability[] = [
  {
    icon: Fingerprint,
    title: "Shared data layer",
    body: "Orchestrated agents run in parallel on the same patient context, so what one surfaces, the others can act on without starting over.",
  },
  {
    icon: History,
    title: "ClearView traceability",
    body: "Every AI action is logged to a consolidated audit trail. Outputs carry provenance: AI-generated, clinician reviewed.",
  },
  {
    icon: Workflow,
    title: "Event-driven orchestration",
    body: "Kafka-backed agentic queueing runs autonomous workflows in parallel without blocking care delivery, with reliable async processing at scale.",
  },
  {
    icon: Cable,
    title: "Epic HL7/FHIR integration",
    body: "Enterprise EHR integration pipeline designed to connect to existing hospital systems, not replace them.",
  },
];

export function PlatformDiagram() {
  return (
    <section id="platform" className="scroll-mt-20 bg-slate-50/70 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Five agents working in tandem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              My Assistant opens the day, My Patients routes you to the right chart, My Records and
              My Labs enrich the same context, and My Colleague picks up where they leave off,
              all orchestrated in parallel on one shared record.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="space-y-7">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <li key={cap.title} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-card">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                        {cap.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <PatientRecordDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PatientRecordDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        Working in tandem on one record
      </p>

      {/* Agent chips: 3 on top, 2 centered below */}
      <div className="mt-6 space-y-3">
        <ul className="grid grid-cols-3 gap-3">
          {agents.slice(0, 3).map((agent) => (
            <AgentChip key={agent.id} agent={agent} />
          ))}
        </ul>
        <ul className="flex justify-center gap-3">
          {agents.slice(3).map((agent) => (
            <AgentChip key={agent.id} agent={agent} className="w-[calc((100%-1.5rem)/3)]" />
          ))}
        </ul>
      </div>

      {/* Connector */}
      <div className="mx-auto my-4 h-6 w-px bg-gradient-to-b from-slate-200 to-primary-300" aria-hidden />

      {/* Central record node */}
      <div className="rounded-xl bg-gradient-to-r from-primary-700 to-accent-700 p-5 text-center text-white shadow-raised">
        <Fingerprint size={24} strokeWidth={1.75} className="mx-auto" aria-hidden />
        <p className="mt-2 text-base font-semibold">One unified patient record</p>
        <p className="mt-0.5 text-sm text-primary-100">
          Chart · labs · records · alerts for one person
        </p>
      </div>

      {/* Audit strip */}
      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 px-3 py-2.5 text-center text-xs font-medium text-slate-500">
        <History size={15} strokeWidth={1.75} className="text-primary-600" aria-hidden />
        Consolidated audit trail · AI-generated, clinician reviewed
      </div>
    </div>
  );
}

function AgentChip({ agent, className = "" }: { agent: Agent; className?: string }) {
  const Icon = agent.icon;
  return (
    <li
      className={`flex flex-col items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50/70 px-2 py-3 text-center ${className}`}
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `color-mix(in srgb, ${agent.accent} 12%, white)`,
          color: agent.accent,
        }}
      >
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </span>
      <span className="text-[11px] font-medium leading-tight text-slate-600">{agent.name}</span>
    </li>
  );
}
