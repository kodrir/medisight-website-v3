import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { DEMO_URL } from "@/lib/links";
import { Reveal } from "@/components/Reveal";

interface SolutionHeroProps {
  eyebrow?: string;
  headline: string;
  highlight?: string;
  subcopy?: string;
  tags?: string[];
  /** Plain-language framing of what actually shows up in the clinician's workflow. */
  clinicianNote?: string;
  withVideoBackground?: boolean;
  children?: ReactNode;
  /** When children are present, render the demo CTA below them instead of under the headline. */
  ctaAfterChildren?: boolean;
  showDemoCta?: boolean;
  extraBottomPx?: number;
}

export function SolutionHero({
  eyebrow,
  headline,
  highlight,
  subcopy,
  tags,
  clinicianNote,
  withVideoBackground = false,
  children,
  ctaAfterChildren = false,
  showDemoCta = true,
  extraBottomPx = 0,
}: SolutionHeroProps) {
  const demoCta = (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:from-primary-700 hover:to-accent-700"
    >
      Request a Demo
      <ArrowRight size={18} strokeWidth={1.75} />
    </a>
  );

  return (
    <section
      className={`relative isolate overflow-x-hidden border-b border-slate-200 ${
        children ? "pt-20 pb-16 md:pt-28 md:pb-20" : "py-20 md:py-28"
      } ${withVideoBackground ? "" : "bg-gradient-to-b from-slate-50/80 to-white"}`}
      style={
        children && extraBottomPx > 0
          ? { paddingBottom: `calc(5rem + ${extraBottomPx}px)` }
          : undefined
      }
    >
      {withVideoBackground && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover object-bottom scale-110 -translate-y-[6%]"
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
      )}

      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1 className={`text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl ${eyebrow ? "mt-3" : ""}`}>
              {headline}
              {highlight ? (
                <>
                  {" "}
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </>
              ) : null}
            </h1>
            {subcopy ? (
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {subcopy}
              </p>
            ) : null}
            {tags && tags.length > 0 && (
              <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {clinicianNote && (
              <p className="mx-auto mt-8 max-w-xl rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-600">
                <span className="font-semibold text-primary-700">What a clinician sees: </span>
                {clinicianNote}
              </p>
            )}
            {!ctaAfterChildren && showDemoCta ? <div className="mt-10">{demoCta}</div> : null}
          </div>
        </Reveal>
        {children ? (
          <>
            <Reveal delay={0.08} className="mt-16 md:mt-20">
              {children}
            </Reveal>
            {ctaAfterChildren && showDemoCta ? (
              <Reveal delay={0.12} className="mt-10 text-center">
                {demoCta}
              </Reveal>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
