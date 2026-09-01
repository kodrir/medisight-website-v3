import { AlertCircle, Star, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { Reveal } from "./Reveal";
const sectionIcons: LucideIcon[] = [AlertCircle, Star, TrendingUp];

export function CaseStudies() {
  return (
    <div className="pb-4">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pilot partners</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Results in the{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              field
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Pilot deployments across healthcare and research settings. Outcomes describe specific
            engagements and may not reflect typical results.
          </p>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal as="li" key={study.id} delay={i * 0.06} className="list-none">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex min-h-[4.5rem] items-center justify-center rounded-xl bg-slate-50 px-4 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.logoSrc}
                  alt={study.institution}
                  className={`w-auto max-w-full object-contain opacity-90 ${
                    study.logoClass ?? "h-12"
                  } ${study.logoClass?.includes("mono") ? "" : ""}`}
                  style={
                    study.id === "janelia"
                      ? { filter: "brightness(0) saturate(100%)" }
                      : undefined
                  }
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-ink">{study.institution}</h3>
                <p className="text-sm text-slate-500">{study.type}</p>
              </div>

              {(["challenge", "solution"] as const).map((key, idx) => {
                const Icon = sectionIcons[idx];
                const label = key === "challenge" ? "Challenge" : "Solution";
                const text = study[key];
                return (
                  <div key={key} className="mt-5 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2">
                      <Icon size={16} strokeWidth={1.75} className="text-primary-600" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                );
              })}

              <div className="mt-5 flex-1 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} strokeWidth={1.75} className="text-primary-600" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Outcome
                  </span>
                </div>
                <p
                  className={`mt-2 text-base font-semibold ${
                    study.outcomeTitle.startsWith("{{")
                      ? "font-mono text-slate-300"
                      : "text-primary-700"
                  }`}
                >
                  {study.outcomeTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.outcomeBody}</p>
                {study.isPilot && (
                  <p className="mt-3 text-xs text-slate-400">Pilot deployment · illustrative results</p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
