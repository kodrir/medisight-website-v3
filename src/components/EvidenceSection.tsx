import { BookOpen, ExternalLink, Award, BarChart3, ZoomIn, ShieldCheck } from "lucide-react";
import { CaseStudies } from "./CaseStudies";
import { MedAgentBenchLeaderboard } from "./MedAgentBenchLeaderboard";
import { Reveal } from "./Reveal";

const IEEE_DOI_URL = "https://ieeexplore.ieee.org/document/11569537";
const MEDAGENTBENCH_URL = "https://medicalsphere.ai/benchmarks/medagentbench";
const BENEFITS_IMAGE = "/images/evidence/what-this-means-doctor.jpg";

const benefits = [
  {
    icon: BookOpen,
    title: "Evidence you can defend",
    body: "Peer-reviewed research gives clinical and procurement teams credible evidence when evaluating the platform.",
  },
  {
    icon: BarChart3,
    title: "High accuracy at an accessible cost",
    body: "A 99%+ MedAgentBench score demonstrates strong performance without relying on a premium closed model.",
  },
  {
    icon: ShieldCheck,
    title: "Faster validation, less guesswork",
    body: "Direct links to publications, benchmarks, and pilot outcomes make every claim easier to verify and share.",
  },
];

export function EvidenceSection() {
  return (
    <>
      {/* ── Featured research (page h1) ── */}
      <section className="relative isolate overflow-hidden pt-20 pb-[calc(5rem+200px)] md:pt-28">
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
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Featured research</span>
              <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
                Evidence behind{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  the platform
                </span>
              </h1>
            </div>
          </Reveal>

          <div className="mx-[-35px] mt-[calc(4rem+20px)] grid w-[calc(100%+70px)] gap-[calc(2rem+30px)] md:mt-[calc(5rem+20px)] lg:grid-cols-2 lg:items-stretch">
            {/* IEEE card */}
            <Reveal delay={0.04} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
                <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-slate-50 px-6 py-4 border-b border-slate-100">
                  <Award size={20} strokeWidth={1.75} className="shrink-0 text-primary-600" aria-hidden />
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">
                    Peer-reviewed publication
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-ink">
                    The Advanced Health Risk Predictor: Ensemble Machine Learning System for
                    Multi Disease Clinical Decision Support
                  </h3>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-semibold text-slate-500">Venue</dt>
                      <dd className="text-slate-700">IEEE AIIoT 2026</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-semibold text-slate-500">Award</dt>
                      <dd className="font-semibold text-primary-700">
                        Best Presenter — Session 5<br />
                        <span className="font-normal text-slate-500">Awarded to Shruti Bhandari</span>
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-semibold text-slate-500">DOI</dt>
                      <dd>
                        <a
                          href={IEEE_DOI_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary-600 underline underline-offset-2 hover:text-primary-800 transition-colors"
                        >
                          IEEE Xplore 11569537
                          <ExternalLink size={13} strokeWidth={2} aria-hidden />
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <a
                      href="/images/evidence/best-presenter-certificate.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-28 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                      aria-label="View Best Presenter certificate (opens full size)"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/evidence/best-presenter-certificate.jpg"
                        alt="Certificate of Best Presenter awarded to Shruti Bhandari for the paper 'The Advanced Health Risk Predictor' at IEEE AIIoT 2026, Session 5"
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors duration-200 group-hover:bg-slate-900/15 rounded-xl">
                        <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                          <ZoomIn size={13} strokeWidth={2} aria-hidden />
                          View certificate
                        </div>
                      </div>
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    This paper presents an ensemble machine learning architecture for multi-disease
                    clinical decision support, demonstrating the research methodology underlying
                    Medisight&apos;s diagnostic intelligence layer.
                  </p>
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <a
                    href={IEEE_DOI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    Read on IEEE Xplore
                    <ExternalLink size={14} strokeWidth={2} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>

            {/* MedAgentBench card */}
            <Reveal delay={0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
                <div className="flex items-center gap-3 bg-gradient-to-r from-accent-50 to-slate-50 px-6 py-4 border-b border-slate-100">
                  <BarChart3 size={20} strokeWidth={1.75} className="shrink-0 text-accent-600" aria-hidden />
                  <span className="text-sm font-semibold text-accent-700 uppercase tracking-wide">
                    Independent benchmark
                  </span>
                </div>

                <div className="flex min-h-[32rem] flex-1 flex-col p-6 md:p-8">
                  <h3 className="text-lg font-bold leading-snug text-ink">
                    MedAgentBench Evaluation
                  </h3>

                  <div className="mt-6 flex flex-1 flex-col">
                    <MedAgentBenchLeaderboard />

                    <p className="mt-auto pt-6 text-sm leading-relaxed text-slate-600">
                      99%+ across all 10 EHR task categories using DeepSeek-V4-Flash,
                      an open-weight model. Competitor scores from the MedicalSphere
                      public leaderboard (Aug 2026).
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-6 py-5 md:px-8">
                  <a
                    href={MEDAGENTBENCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    View benchmark results
                    <ExternalLink size={14} strokeWidth={2} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What this means for you ── */}
      <section className="overflow-hidden border-t border-slate-200 bg-white">
        <div className="grid min-h-[28rem] lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[16rem] overflow-hidden lg:min-h-full lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BENEFITS_IMAGE}
              alt="Doctor reviewing clinical information with a patient"
              className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center"
              loading="lazy"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:from-white lg:via-white/25 lg:to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:hidden"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:order-1 lg:px-16 lg:pl-20 lg:py-20 xl:pl-24">
            <div className="mx-auto w-full max-w-md lg:max-w-lg">
            <Reveal>
              <span className="eyebrow">For your team</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                What this means for you
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
                Independent evidence helps your team evaluate accuracy, reliability, and
                value before deployment.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Reveal as="li" key={benefit.title} delay={0.04 + i * 0.06} className="list-none">
                    <article className="flex gap-5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                        <Icon size={22} strokeWidth={1.75} aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                          {benefit.body}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 md:py-24">
        <div className="container-content">
          <CaseStudies />
        </div>
      </section>
    </>
  );
}
