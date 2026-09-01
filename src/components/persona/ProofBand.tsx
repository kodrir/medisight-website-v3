import { Reveal } from "../Reveal";
import { isPlaceholder, type ProofMetric } from "@/lib/metrics";

interface ProofBandProps {
  metrics: ProofMetric[];
  /** Optional heading shown above the metrics. */
  heading?: string;
  intro?: string;
}

export function ProofBand({ metrics, heading, intro }: ProofBandProps) {
  const hasRealFigures = metrics.some((m) => !isPlaceholder(m.value));

  return (
    <section className="border-y border-slate-200 bg-white py-16 md:py-20">
      <div className="container-content">
        {(heading || intro) && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              {heading && (
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {heading}
                </h2>
              )}
              {intro && (
                <p className="mt-3 text-base leading-relaxed text-slate-600">{intro}</p>
              )}
            </div>
          </Reveal>
        )}

        <ul
          className={`grid grid-cols-1 gap-6 sm:grid-cols-3 ${heading || intro ? "mt-12" : ""}`}
        >
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const placeholder = isPlaceholder(metric.value);
            return (
              <Reveal as="li" key={metric.label} delay={i * 0.06} className="list-none">
                <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-8 text-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  {placeholder ? (
                    <>
                      <span className="mt-4 text-base font-semibold leading-snug text-slate-800">
                        {metric.label}
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-slate-500">
                        {metric.note}
                      </span>
                      <span className="mt-4 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                        Reported per pilot
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="mt-4 text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
                        {metric.value}
                      </span>
                      <span className="mt-2 text-sm font-semibold text-slate-800">
                        {metric.label}
                      </span>
                      <span className="mt-1 text-xs leading-relaxed text-slate-500">
                        {metric.note}
                      </span>
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-400">
          {hasRealFigures
            ? "Figures reflect investigational pilot and integration settings, are not FDA-validated, and may not reflect typical results."
            : "Tracked from day one of every engagement and shared with prospective partners as pilots progress."}
        </p>
      </div>
    </section>
  );
}
