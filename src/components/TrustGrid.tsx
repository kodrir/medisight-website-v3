import { ShieldCheck, Cable, BookOpen, Fingerprint, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Fingerprint,
    title: "ClearView traceability",
    body: "Every output cites its source. Your team gets reasons, not guesses.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned",
    body: "Built for the compliance and privacy standards healthcare requires.",
  },
  {
    icon: Cable,
    title: "Epic HL7/FHIR",
    body: "Integrates with your EHR — no rip-and-replace.",
  },
  {
    icon: BookOpen,
    title: "Research-backed",
    body: "Peer-reviewed models and a published research track record.",
  },
];

export function TrustGrid() {
  return (
    <section className="border-t border-slate-200 bg-slate-50/70 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Built different, by design</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Technology your teams can trust
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="list-none">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href="/trust"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
            >
              See our full trust &amp; security overview
              <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
