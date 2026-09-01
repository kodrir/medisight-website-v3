"use client";

import { useState } from "react";
import { Cable, CheckCircle2, Circle } from "lucide-react";

interface ProductPreviewProps {
  patientLabel?: string;
  flag?: string;
  insightTitle: string;
  insightBody: string;
  citation: string;
  className?: string;
}

export function ProductPreview({
  patientLabel = "Patient chart",
  flag = "Flagged for review",
  insightTitle,
  insightBody,
  citation,
  className = "",
}: ProductPreviewProps) {
  const [reviewed, setReviewed] = useState(false);

  return (
    <div
      className={`mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </span>
          <span className="ml-2 text-xs font-semibold text-slate-500">{patientLabel}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">
          <Cable size={12} strokeWidth={2} className="text-primary-600" aria-hidden />
          Connected to Epic
        </span>
      </div>

      <div className="space-y-4 p-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
          {flag}
        </span>
        <h3 className="text-lg font-semibold leading-snug text-ink">{insightTitle}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{insightBody}</p>
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-500">
          Source: {citation}
        </span>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Reviewed by a clinician before it reaches the chart.
        </p>
        <button
          type="button"
          onClick={() => setReviewed((v) => !v)}
          className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
            reviewed
              ? "bg-emerald-50 text-emerald-700"
              : "border border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50"
          }`}
        >
          {reviewed ? (
            <>
              <CheckCircle2 size={15} strokeWidth={2} aria-hidden />
              Signed off · just now
            </>
          ) : (
            <>
              <Circle size={15} strokeWidth={2} aria-hidden />
              Mark reviewed
            </>
          )}
        </button>
      </div>
    </div>
  );
}
