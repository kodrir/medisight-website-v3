import { agents } from "@/lib/agents";
import { AgentCard } from "./AgentCard";
import { Reveal } from "./Reveal";

export function AgentsGrid() {
  return (
    <section id="agents" className="scroll-mt-20 bg-slate-50/70 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Agentic offerings</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Specialized assistants, one platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Autonomous, multi-step workflows that automate documentation, retrieval, labs, and
              consult support while keeping clinicians in the loop.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {agents.map((agent, i) => (
            <Reveal
              as="li"
              key={agent.id}
              delay={(i % 3) * 0.06}
              className={`h-full lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <AgentCard agent={agent} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
