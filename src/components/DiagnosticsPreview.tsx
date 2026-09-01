"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Cable,
  CheckCircle2,
  Circle,
  TrendingUp,
  TrendingDown,
  MoveRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface Reading {
  month: string;
  value: number;
}

interface StatChip {
  label: string;
  value: string;
  delta: string;
  Icon: LucideIcon;
  tone: string;
}

interface CardData {
  id: string;
  patientLabel: string;
  flagText: string;
  headline: string;
  body: string;
  readings: Reading[];
  valMin: number;
  valMax: number;
  baselineLow: number;
  baselineHigh: number;
  baselineLabel: string;
  labNormal: number;
  labNormalLabel: string;
  calloutText: string;
  calloutHex: string;
  calloutBg: string;
  calloutBorder: string;
  chips: StatChip[];
  sourceText: string;
  footerNote?: string;
}

/* ------------------------------------------------------------------ */
/* Datasets                                                            */
/* ------------------------------------------------------------------ */

const creatinineData: CardData = {
  id: "creatinine",
  patientLabel: "Patient chart — J. Alvarez",
  flagText: "Flagged for review",
  headline: "Rising creatinine trend flagged",
  body: "22% rise over 3 months relative to this patient's personal baseline — flagged ahead of today's visit.",
  readings: [
    { month: "Jan", value: 0.92 },
    { month: "Feb", value: 0.95 },
    { month: "Mar", value: 0.98 },
    { month: "Apr", value: 1.07 },
    { month: "May", value: 1.19 },
    { month: "Jun", value: 1.31 },
  ],
  valMin: 0.8,
  valMax: 1.4,
  baselineLow: 0.85,
  baselineHigh: 1.05,
  baselineLabel: "Personal baseline",
  labNormal: 1.2,
  labNormalLabel: "Population average",
  calloutText: "1.31 mg/dL ↑22%",
  calloutHex: "#ef4444",
  calloutBg: "#fef2f2",
  calloutBorder: "#fecaca",
  chips: [
    { label: "Creatinine", value: "1.31 mg/dL", delta: "22%", Icon: TrendingUp,  tone: "text-red-600 bg-red-50 border-red-100" },
    { label: "eGFR",       value: "61 mL/min",  delta: "14%", Icon: TrendingDown, tone: "text-amber-600 bg-amber-50 border-amber-100" },
    { label: "BUN",        value: "19 mg/dL",   delta: "Stable", Icon: MoveRight, tone: "text-slate-500 bg-slate-50 border-slate-200" },
  ],
  sourceText: "Source: BMP · Jun 2, 2026 + KDIGO CKD guideline",
};

const heroIllustrativeCreatinineData: CardData = {
  id: "creatinine-hero",
  patientLabel: "Sample chart (illustrative)",
  flagText: "Surfaced for review",
  headline: "Rising creatinine trend surfaced",
  body: "22% rise over 3 months relative to a sample personal baseline, surfaced for clinician review.",
  readings: creatinineData.readings,
  valMin: creatinineData.valMin,
  valMax: creatinineData.valMax,
  baselineLow: creatinineData.baselineLow,
  baselineHigh: creatinineData.baselineHigh,
  baselineLabel: creatinineData.baselineLabel,
  labNormal: creatinineData.labNormal,
  labNormalLabel: creatinineData.labNormalLabel,
  calloutText: creatinineData.calloutText,
  calloutHex: creatinineData.calloutHex,
  calloutBg: creatinineData.calloutBg,
  calloutBorder: creatinineData.calloutBorder,
  chips: creatinineData.chips,
  sourceText: creatinineData.sourceText,
  footerNote:
    "Illustrative example. Not real patient data. Reviewed by a clinician before it reaches the chart.",
};

const egfrData: CardData = {
  id: "egfr",
  patientLabel: "Patient chart — J. Alvarez",
  flagText: "Flagged for review",
  headline: "Declining eGFR flagged",
  body: "eGFR has declined 26% over 6 months, approaching the CKD Stage 3 threshold — flagged ahead of today's visit.",
  readings: [
    { month: "Jan", value: 82 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 77 },
    { month: "Apr", value: 72 },
    { month: "May", value: 66 },
    { month: "Jun", value: 61 },
  ],
  valMin: 50,
  valMax: 95,
  baselineLow: 82,
  baselineHigh: 90,
  baselineLabel: "Personal baseline",
  labNormal: 60,
  labNormalLabel: "CKD threshold",
  calloutText: "61 mL/min ↓26%",
  calloutHex: "#f59e0b",
  calloutBg: "#fffbeb",
  calloutBorder: "#fde68a",
  chips: [
    { label: "eGFR",       value: "61 mL/min",  delta: "26%",  Icon: TrendingDown, tone: "text-amber-600 bg-amber-50 border-amber-100" },
    { label: "Creatinine", value: "1.31 mg/dL", delta: "22%",  Icon: TrendingUp,   tone: "text-red-600 bg-red-50 border-red-100" },
    { label: "BUN",        value: "19 mg/dL",   delta: "Stable", Icon: MoveRight,  tone: "text-slate-500 bg-slate-50 border-slate-200" },
  ],
  sourceText: "Source: BMP · Jun 2, 2026 + KDIGO CKD guideline",
};

const hba1cData: CardData = {
  id: "hba1c",
  patientLabel: "Patient chart — J. Alvarez",
  flagText: "Flagged for review",
  headline: "HbA1c elevation flagged",
  body: "HbA1c has risen to 7.4% over 6 months, above the pre-diabetes threshold — flagged for endocrinology review.",
  readings: [
    { month: "Jan", value: 5.6 },
    { month: "Feb", value: 5.8 },
    { month: "Mar", value: 6.1 },
    { month: "Apr", value: 6.4 },
    { month: "May", value: 6.8 },
    { month: "Jun", value: 7.4 },
  ],
  valMin: 5.0,
  valMax: 8.0,
  baselineLow: 5.0,
  baselineHigh: 5.7,
  baselineLabel: "Personal baseline",
  labNormal: 6.5,
  labNormalLabel: "Pre-diabetes",
  calloutText: "7.4% ↑32%",
  calloutHex: "#ef4444",
  calloutBg: "#fef2f2",
  calloutBorder: "#fecaca",
  chips: [
    { label: "HbA1c",   value: "7.4%",      delta: "32%",    Icon: TrendingUp, tone: "text-red-600 bg-red-50 border-red-100" },
    { label: "Glucose", value: "148 mg/dL", delta: "High",   Icon: TrendingUp, tone: "text-amber-600 bg-amber-50 border-amber-100" },
    { label: "A1C avg", value: "6.6%",      delta: "Rising", Icon: TrendingUp, tone: "text-slate-500 bg-slate-50 border-slate-200" },
  ],
  sourceText: "Source: HbA1c panel · Jun 2, 2026 + ADA guidelines",
};

/* ------------------------------------------------------------------ */
/* Chart geometry helpers (parameterised per card)                    */
/* ------------------------------------------------------------------ */

const VIEW_W = 560;
const VIEW_H = 224;
const PLOT_LEFT = 50;
const PLOT_RIGHT = 510;
const PLOT_TOP = 22;
const PLOT_BOTTOM = 182;

function makeChart(data: CardData) {
  const { readings, valMin, valMax } = data;
  const n = readings.length;
  const xAt = (i: number) => PLOT_LEFT + (i * (PLOT_RIGHT - PLOT_LEFT)) / (n - 1);
  const yAt = (v: number) => PLOT_TOP + ((valMax - v) / (valMax - valMin)) * (PLOT_BOTTOM - PLOT_TOP);
  const points = readings.map((r, i) => ({ ...r, x: xAt(i), y: yAt(r.value) }));
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  return { xAt, yAt, points, linePath };
}

function dotFill(i: number, total: number, calloutHex: string) {
  if (i === total - 1) return calloutHex;
  if (i === total - 2) return "#f59e0b";
  return "#94a3b8";
}

/* ------------------------------------------------------------------ */
/* Animation timing (seconds)                                         */
/* ------------------------------------------------------------------ */

const T_BAND     = 0.2;
const T_LINE     = 0.5;
const LINE_DUR   = 1.2;
const T_CALLOUT  = T_LINE + LINE_DUR + 0.1;
const T_CHIPS    = T_CALLOUT + 0.25;
const T_SHIMMER  = T_CHIPS + 0.4;

const dotDelay = (i: number, n: number) => T_LINE + LINE_DUR * (i / (n - 1));

/* Delay (ms) after viewport entry before side cards slide out.
   T_SHIMMER (~2.45s) + shimmer duration (0.8s) + 1s intentional pause. */
const SIDE_SLIDE_DELAY_MS = 4250;
/* Final horizontal offset for side cards (70% of prior ±52%). */
const SIDE_SLIDE_X = "36%";

/* ------------------------------------------------------------------ */
/* DiagnosticsCard                                                     */
/* ------------------------------------------------------------------ */

interface DiagnosticsCardProps {
  data: CardData;
  /** Whether to play the internal whileInView animation sequence. */
  animate?: boolean;
  interactive?: boolean;
  className?: string;
}

export function DiagnosticsCard({
  data,
  animate = true,
  interactive = true,
  className = "",
}: DiagnosticsCardProps) {
  const reduceMotion = useReducedMotion();
  const [reviewed, setReviewed] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const { yAt, points, linePath } = makeChart(data);
  const last = points[points.length - 1];
  const n = points.length;

  /* When animate=false the card renders in its settled state — no
     whileInView hooks are applied. We achieve this by spreading an
     empty object when animate is off so motion elements are inert. */
  const ia = <T extends object>(props: T): T | Record<string, never> =>
    animate && !reduceMotion ? props : {};

  const gradId = `trendStroke-${data.id}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </span>
          <span className="ml-2 text-xs font-semibold text-slate-500">
            {data.patientLabel}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">
          <Cable size={12} strokeWidth={2} className="text-primary-600" aria-hidden />
          Connected to Epic
        </span>
      </div>

      <div className="space-y-4 p-6">
        {/* Flag badge */}
        <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
          {data.flagText}
          {animate && !reduceMotion && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: T_SHIMMER, duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </span>

        <h3 className="text-lg font-semibold leading-snug text-ink">{data.headline}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{data.body}</p>

        {/* Longitudinal chart */}
        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="h-auto w-full"
            role="img"
            aria-label={`${data.headline} chart.`}
            style={{ pointerEvents: interactive ? undefined : "none" }}
          >
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#94a3b8" />
                <stop offset="65%"  stopColor="#f59e0b" />
                <stop offset="100%" stopColor={data.calloutHex} />
              </linearGradient>
            </defs>

            {/* Baseline band, lab normal line, month labels */}
            <motion.g
              {...ia({
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { delay: T_BAND, duration: 0.6 },
              })}
            >
              <rect
                x={PLOT_LEFT - 10}
                y={yAt(data.baselineHigh)}
                width={PLOT_RIGHT - PLOT_LEFT + 20}
                height={yAt(data.baselineLow) - yAt(data.baselineHigh)}
                rx={6}
                fill="#e0f2fe"
                fillOpacity={0.6}
              />
              <text
                x={PLOT_LEFT - 2}
                y={yAt(data.baselineLow) - 6}
                fontSize={11}
                fill="#0369a1"
                fontWeight={600}
              >
                {data.baselineLabel}
              </text>

              <line
                x1={PLOT_LEFT - 10}
                x2={PLOT_RIGHT + 10}
                y1={yAt(data.labNormal)}
                y2={yAt(data.labNormal)}
                stroke="#cbd5e1"
                strokeWidth={1.5}
                strokeDasharray="5 4"
              />
              <text
                x={PLOT_LEFT - 2}
                y={yAt(data.labNormal) - 6}
                fontSize={11}
                fill="#94a3b8"
                fontWeight={600}
              >
                {data.labNormalLabel}
              </text>

              {points.map((p) => (
                <text
                  key={p.month}
                  x={p.x}
                  y={PLOT_BOTTOM + 24}
                  fontSize={11}
                  fill="#94a3b8"
                  textAnchor="middle"
                >
                  {p.month}
                </text>
              ))}
            </motion.g>

            {/* Trend line */}
            <motion.path
              d={linePath}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...ia({
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: true },
                transition: { delay: T_LINE, duration: LINE_DUR, ease: "easeOut" },
              })}
            />

            {/* Data points */}
            {points.map((p, i) => {
              const isCurrent = i === n - 1;
              return (
                <g key={p.month}>
                  {isCurrent && animate && !reduceMotion && (
                    <motion.circle
                      cx={p.x} cy={p.y} r={7}
                      fill="none"
                      stroke={data.calloutHex}
                      strokeWidth={2}
                      initial={{ scale: 1, opacity: 0 }}
                      whileInView={{ scale: 2.4, opacity: [0, 0.55, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: T_CALLOUT + 0.15, duration: 1.1, ease: "easeOut" }}
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                  )}
                  <motion.circle
                    cx={p.x} cy={p.y}
                    r={isCurrent ? 6 : 4.5}
                    fill={dotFill(i, n, data.calloutHex)}
                    stroke="#ffffff"
                    strokeWidth={2}
                    className={interactive ? "cursor-pointer" : undefined}
                    {...ia({
                      initial: { scale: 0 },
                      whileInView: { scale: hovered === i ? 1.25 : 1 },
                      viewport: { once: true },
                      transition: { delay: dotDelay(i, n), type: "spring", stiffness: 300, damping: 18 },
                    })}
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    onMouseEnter={interactive ? () => setHovered(i) : undefined}
                    onMouseLeave={interactive ? () => setHovered(null) : undefined}
                  />
                </g>
              );
            })}

            {/* Current-reading callout */}
            <motion.g
              {...ia({
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: T_CALLOUT, type: "spring", stiffness: 260, damping: 20 },
              })}
              style={{ transformOrigin: `${last.x - 70}px ${last.y - 24}px` }}
            >
              <rect
                x={last.x - 132}
                y={last.y - 38}
                width={118}
                height={28}
                rx={14}
                fill={data.calloutBg}
                stroke={data.calloutBorder}
              />
              <text
                x={last.x - 73}
                y={last.y - 19}
                fontSize={12.5}
                fontWeight={700}
                fill={data.calloutHex}
                textAnchor="middle"
              >
                {data.calloutText}
              </text>
            </motion.g>

            {/* Hover tooltip (interactive cards only) */}
            {interactive && (
              <AnimatePresence>
                {hovered !== null && (
                  <motion.g
                    key={hovered}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    pointerEvents="none"
                  >
                    <rect
                      x={points[hovered].x - 34}
                      y={points[hovered].y + 12}
                      width={68}
                      height={24}
                      rx={12}
                      fill="#0f172a"
                      fillOpacity={0.92}
                    />
                    <text
                      x={points[hovered].x}
                      y={points[hovered].y + 28}
                      fontSize={11.5}
                      fontWeight={600}
                      fill="#ffffff"
                      textAnchor="middle"
                    >
                      {points[hovered].value} {data.id === "creatinine" ? "mg/dL" : data.id === "egfr" ? "mL/min" : "%"}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            )}
          </svg>
        </div>

        {/* Biomarker summary chips */}
        {data.chips.length > 0 && (
          <div className="grid grid-cols-3 gap-2.5">
            {data.chips.map(({ label, value, delta, Icon, tone }, i) => (
              <motion.div
                key={label}
                className={`rounded-xl border px-3 py-2.5 ${tone}`}
                {...ia({
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: {
                    delay: T_CHIPS + i * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                })}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-bold text-ink">{value}</p>
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold">
                  <Icon size={13} strokeWidth={2.5} aria-hidden />
                  {delta}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-500">
          {data.sourceText}
        </span>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          {data.footerNote ?? "Reviewed by a clinician before it reaches the chart."}
        </p>
        {interactive ? (
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
                <motion.span
                  initial={reduceMotion ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-flex"
                >
                  <CheckCircle2 size={15} strokeWidth={2} aria-hidden />
                </motion.span>
                Signed off · just now
              </>
            ) : (
              <>
                <Circle size={15} strokeWidth={2} aria-hidden />
                Mark reviewed
              </>
            )}
          </button>
        ) : (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-400">
            <Circle size={15} strokeWidth={2} aria-hidden />
            Mark reviewed
          </span>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DiagnosticsCarousel                                                 */
/* ------------------------------------------------------------------ */

export function DiagnosticsCarousel({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sideVisible, setSideVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setSideVisible(true);
      return;
    }
    const timer = setTimeout(() => setSideVisible(true), SIDE_SLIDE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [inView, reduceMotion]);

  const sideTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 1.3, ease: [0.22, 1, 0.36, 1] };

  return (
    <div
      ref={ref}
      className={`relative mx-auto w-full max-w-2xl ${className}`}
    >
      {/* Left side card — eGFR */}
      <motion.div
        className="absolute inset-0 z-[5] origin-center"
        initial={{ opacity: 0, x: "0%", scale: 1 }}
        animate={
          sideVisible
            ? { opacity: 0.75, x: `-${SIDE_SLIDE_X}`, scale: 0.9, filter: "blur(1.5px) brightness(0.82)" }
            : { opacity: 0, x: "0%", scale: 1, filter: "blur(0px) brightness(1)" }
        }
        transition={sideTransition}
        aria-hidden
      >
        <DiagnosticsCard data={egfrData} animate={false} interactive={false} />
      </motion.div>

      {/* Center card — Creatinine (foreground) */}
      <div className="relative z-10">
        <DiagnosticsCard data={creatinineData} animate interactive />
      </div>

      {/* Right side card — HbA1c */}
      <motion.div
        className="absolute inset-0 z-[5] origin-center"
        initial={{ opacity: 0, x: "0%", scale: 1 }}
        animate={
          sideVisible
            ? { opacity: 0.75, x: SIDE_SLIDE_X, scale: 0.9, filter: "blur(1.5px) brightness(0.82)" }
            : { opacity: 0, x: "0%", scale: 1, filter: "blur(0px) brightness(1)" }
        }
        transition={sideTransition}
        aria-hidden
      >
        <DiagnosticsCard data={hba1cData} animate={false} interactive={false} />
      </motion.div>
    </div>
  );
}

/* Backwards-compatible alias — keeps any other import of DiagnosticsPreview working. */
export { DiagnosticsCarousel as DiagnosticsPreview };
export {
  creatinineData,
  heroIllustrativeCreatinineData,
  egfrData,
  hba1cData,
  SIDE_SLIDE_DELAY_MS,
};
