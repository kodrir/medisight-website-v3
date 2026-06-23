import { Reveal } from "./Reveal";

export function WorkflowContext() {
  return (
    <section id="context" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="grid min-h-[28rem] lg:grid-cols-2">
        <div className="relative min-h-[16rem] lg:min-h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/problem-poster.png"
            aria-hidden
          >
            <source src="/videos/problem-background.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/80 lg:bg-gradient-to-l lg:from-transparent lg:to-white"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-14 md:px-8 lg:py-20">
          <Reveal>
            <span className="eyebrow">Clinical workflow</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              One connected{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                clinical workflow
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
              <p>
                Medisight applies advanced agentic automation to laboratory and EHR data,
                transforming it into personalized insights using individual longitudinal baselines
                rather than population averages alone.
              </p>
              <p>
                A clinician&apos;s day begins with My Assistant on a prioritized overview, moves
                through My Patients into My Records or My Labs, and continues with My Colleague for
                literature-grounded consult support. Orchestrated workflows keep records, labs, and
                next-step references in sync across the shared data layer after each visit.
              </p>
              <p>
                All offerings operate under a HIPAA-aligned, multi-tenant architecture with Epic
                integration via HL7/FHIR. Intelligent workflow automation and decision support for
                healthcare teams, not an FDA-cleared diagnostic device.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
