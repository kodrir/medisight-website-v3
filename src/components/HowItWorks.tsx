import { Cable, FileSearch, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface Step {
  icon: LucideIcon;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    icon: Cable,
    title: "Connect",
    body: "Medisight links to your EHR over HL7/FHIR — no rip-and-replace, no new system to learn.",
  },
  {
    icon: FileSearch,
    title: "Understand",
    body: "It reads the record and returns insights cited back to the lab, note, or literature they came from.",
  },
  {
    icon: Zap,
    title: "Act",
    body: "Notes, prep, and busywork are handled automatically — reviewed and signed off by your team.",
  },
];

export function HowItWorks() {
  return (
    <section id="value" className="scroll-mt-20 overflow-hidden border-b border-slate-200 bg-white">
      <div className="grid min-h-[28rem] lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[16rem] overflow-hidden lg:min-h-full lg:self-stretch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/heroes/hero-smiling-doctor.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/60 via-30% to-transparent to-50%"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-14 md:px-8 lg:py-20">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Connecting the clinical picture.
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={0.04 + i * 0.06} className="list-none">
                  <article className="flex gap-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
