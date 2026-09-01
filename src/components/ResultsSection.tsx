import { CaseStudies } from "./CaseStudies";
import { RoiCalculator } from "./RoiCalculator";
import { Reveal } from "./Reveal";

export function ResultsSection() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover object-top scale-110"
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
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-mist/90 via-white/85 to-white/95"
          />
        </div>
        <div className="container-content">
          <CaseStudies />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Estimate your ROI</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                See what it could mean for your team
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                Enter your team&apos;s numbers below. We track actual time returned from day one
                of every engagement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <RoiCalculator />
          </Reveal>
        </div>
      </section>
    </>
  );
}