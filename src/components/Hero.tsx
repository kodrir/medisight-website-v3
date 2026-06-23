import { ArrowRight, ShieldCheck, Layers, Cable } from "lucide-react";
import { DEMO_URL } from "@/lib/links";
import { Reveal } from "./Reveal";
import { PartnerStrip } from "./PartnerStrip";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Original brand background video, kept subtle behind the content */}
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.png"
        aria-hidden
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      {/* Legibility wash so dark text stays readable over the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mist/90 via-white/85 to-white/95"
      />

      <div className="container-content py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-7xl">
              Healthcare Precision,{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-8 max-w-2xl bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
              Advanced agentic automation for compliant healthcare.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                href="#agents"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-6 py-3 text-base font-semibold text-slate-700 backdrop-blur transition-colors hover:border-slate-400 hover:bg-white"
              >
                Explore the platform
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-20 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-200/80 pt-8 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} strokeWidth={1.75} className="text-primary-600" />
              HIPAA-aligned
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers size={18} strokeWidth={1.75} className="text-primary-600" />
              Orchestrated automation
            </span>
            <span className="inline-flex items-center gap-2">
              <Cable size={18} strokeWidth={1.75} className="text-primary-600" aria-hidden />
              Epic HL7/FHIR integration
            </span>
          </div>
        </Reveal>
      </div>

      <PartnerStrip />
    </section>
  );
}
