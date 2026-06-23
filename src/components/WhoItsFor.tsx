import { Stethoscope, Building2, Clock, AlertCircle, Layers, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface Audience {
  icon: LucideIcon;
  title: string;
  points: { icon: LucideIcon; term: string; desc: string }[];
}

const audiences: Audience[] = [
  {
    icon: Stethoscope,
    title: "For clinicians",
    points: [
      {
        icon: Clock,
        term: "Reduce patient prep time",
        desc: "My Assistant and My Patients use agentic automation to deliver prioritized schedules and pre-built chart summaries so you spend less time preparing and more time with patients.",
      },
      {
        icon: AlertCircle,
        term: "Walk in prepared",
        desc: "My Patients, My Records, and My Labs combine pre-visit summaries, searchable history, and personalized lab baselines in one flow.",
      },
    ],
  },
  {
    icon: Building2,
    title: "For health systems",
    points: [
      {
        icon: Layers,
        term: "Enterprise-ready",
        desc: "Deploy orchestrated agentic workflows at enterprise scale with Epic HL7/FHIR integration inside existing hospital systems.",
      },
      {
        icon: ShieldCheck,
        term: "Governance built in",
        desc: "ClearView traceability and a shared audit trail across the platform for review and oversight.",
      },
    ],
  },
];

export function WhoItsFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who it&apos;s for</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              One platform, two clear wins
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">{a.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-5">
                    {a.points.map((p) => {
                      const PIcon = p.icon;
                      return (
                        <li key={p.term} className="flex gap-3.5">
                          <PIcon
                            size={20}
                            strokeWidth={1.75}
                            className="mt-0.5 shrink-0 text-primary-600"
                            aria-hidden
                          />
                          <p className="text-[15px] leading-relaxed text-slate-600">
                            <span className="font-semibold text-slate-800">{p.term}.</span>{" "}
                            {p.desc}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
