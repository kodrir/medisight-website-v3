import { ArrowRight, ShieldCheck, Cable, BookOpen } from "lucide-react";
import { DEMO_URL } from "@/lib/links";
import { Reveal } from "./Reveal";
import { PartnerStrip } from "./PartnerStrip";
import { InvestigationalBadge } from "./ClinicalDisclaimer";

const trustBadges = [
  { icon: ShieldCheck, label: "HIPAA-aligned" },
  { icon: BookOpen, label: "Published research track record" },
  { icon: Cable, label: "Epic HL7/FHIR integration" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/heroes/home-clinical-team.jpg"
            alt=""
            className="hero-photo"
          />
        </div>
        <div className="hero-fade" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent lg:hidden" />
      </div>

      <div className="container-content py-[calc(7rem+20px)] md:py-[calc(9rem+20px)] lg:py-[calc(10rem+20px)]">
        <div className="flex min-h-[28rem] items-center md:min-h-[32rem] lg:min-h-[36rem]">
          <div className="mx-auto w-full max-w-lg text-center md:max-w-xl lg:mx-0 lg:max-w-2xl lg:text-left">
            <Reveal>
              <InvestigationalBadge className="mb-6" />
            </Reveal>

            <Reveal delay={0.03}>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                Chart Less.{" "}
                <span className="inline-block whitespace-nowrap bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Know what matters.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mx-auto mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-600 lg:mx-0 lg:text-xl">
                Cited clinical insight and automated workflows your team can trust.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:from-primary-700 hover:to-accent-700"
                >
                  Request a Demo
                  <ArrowRight size={18} strokeWidth={1.75} />
                </a>
                <a
                  href="#value"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-6 py-3 text-base font-semibold text-slate-700 backdrop-blur transition-colors hover:border-slate-400 hover:bg-white"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <Icon size={15} strokeWidth={1.75} className="text-primary-600" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <PartnerStrip />
    </section>
  );
}
