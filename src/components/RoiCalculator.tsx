"use client";

import { useMemo, useState } from "react";

interface RoiCalculatorProps {
  className?: string;
}

function formatHours(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

export function RoiCalculator({ className = "" }: RoiCalculatorProps) {
  const [clinicians, setClinicians] = useState(10);
  const [adminHours, setAdminHours] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(120);
  const [automationPct, setAutomationPct] = useState(40);

  const results = useMemo(() => {
    const hoursPerWeek = clinicians * adminHours * (automationPct / 100);
    const hoursPerYear = hoursPerWeek * 52;
    const dollarsPerYear = hoursPerYear * hourlyCost;
    return { hoursPerWeek, hoursPerYear, dollarsPerYear };
  }, [clinicians, adminHours, hourlyCost, automationPct]);

  return (
    <div
      className={`mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ${className}`}
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="space-y-6 p-8">
          <div>
            <label
              htmlFor="roi-clinicians"
              className="flex items-center justify-between text-sm font-semibold text-slate-700"
            >
              Clinicians on your team
              <span className="tabular-nums text-primary-700">{clinicians}</span>
            </label>
            <input
              id="roi-clinicians"
              type="range"
              min={1}
              max={200}
              step={1}
              value={clinicians}
              onChange={(e) => setClinicians(Number(e.target.value))}
              className="mt-3 w-full accent-primary-600"
            />
          </div>

          <div>
            <label
              htmlFor="roi-admin-hours"
              className="flex items-center justify-between text-sm font-semibold text-slate-700"
            >
              Admin hours per clinician, per week
              <span className="tabular-nums text-primary-700">{adminHours}</span>
            </label>
            <input
              id="roi-admin-hours"
              type="range"
              min={1}
              max={25}
              step={1}
              value={adminHours}
              onChange={(e) => setAdminHours(Number(e.target.value))}
              className="mt-3 w-full accent-primary-600"
            />
          </div>

          <div>
            <label
              htmlFor="roi-hourly-cost"
              className="flex items-center justify-between text-sm font-semibold text-slate-700"
            >
              Loaded cost per clinician hour
              <span className="tabular-nums text-primary-700">{formatCurrency(hourlyCost)}</span>
            </label>
            <input
              id="roi-hourly-cost"
              type="range"
              min={40}
              max={300}
              step={5}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              className="mt-3 w-full accent-primary-600"
            />
          </div>

          <div>
            <label
              htmlFor="roi-automation-pct"
              className="flex items-center justify-between text-sm font-semibold text-slate-700"
            >
              Share of admin time automated
              <span className="tabular-nums text-primary-700">{automationPct}%</span>
            </label>
            <input
              id="roi-automation-pct"
              type="range"
              min={10}
              max={70}
              step={5}
              value={automationPct}
              onChange={(e) => setAutomationPct(Number(e.target.value))}
              className="mt-3 w-full accent-primary-600"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-slate-50/80 p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Hours returned, per week
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
              {formatHours(results.hoursPerWeek)}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Hours returned, per year
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
              {formatHours(results.hoursPerYear)}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Estimated value, per year
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
              {formatCurrency(results.dollarsPerYear)}
            </p>
          </div>
        </div>
      </div>

      <p className="border-t border-slate-200 px-8 py-4 text-xs leading-relaxed text-slate-400">
        Illustrative estimate based on the numbers you enter — not a guarantee of results. We track
        actual time returned from day one of every engagement.
      </p>
    </div>
  );
}
