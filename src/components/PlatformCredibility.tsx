import { Reveal } from "./Reveal";
import { credibilityPillars } from "@/lib/platformCredibility";

export function PlatformCredibility() {
  return (
    <section id="credibility" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it&apos;s built</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Clinical-grade by design
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Traceable, literature-grounded, built for healthcare.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {credibilityPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 0.06} className="list-none">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-raised">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <video
                    className={`h-full w-full object-cover ${pillar.videoClassName ?? ""}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden
                  >
                    <source src={pillar.video} type="video/mp4" />
                  </video>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-700">
                    {pillar.engineName}
                    <span className="align-super text-[10px] font-normal text-slate-400">™</span>
                    {" · "}
                    {pillar.engineSubtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
