"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Cable,
  CheckCircle2,
  ExternalLink,
  FileText,
  Loader2,
  Search,
  Send,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared window chrome                                                */
/* ------------------------------------------------------------------ */

interface AgentWindowProps {
  agent: string;
  dotClass: string;
  label: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

function AgentWindow({ agent, dotClass, label, children, footer, className = "" }: AgentWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </span>
          <span className={`ml-1 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-ink shadow-sm`}>
            <span className={`h-2 w-2 rounded-full ${dotClass}`} aria-hidden />
            {agent}
          </span>
          <span className="truncate text-xs font-semibold text-slate-500">{label}</span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">
          <Cable size={12} strokeWidth={2} className="text-primary-600" aria-hidden />
          Epic
        </span>
      </div>

      {children}

      {footer}
    </div>
  );
}

/* Shared fade + lift row reveal */
function RevealRow({
  delay,
  className = "",
  children,
}: {
  delay: number;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* My Assistant — schedule + triaged inbox                             */
/* ------------------------------------------------------------------ */

const scheduleRows = [
  { time: "1:45 PM", name: "R. Patel", detail: "Follow-up", highlight: false },
  { time: "2:30 PM", name: "J. Alvarez", detail: "Annual physical", highlight: true },
  { time: "3:15 PM", name: "M. Chen", detail: "Lab review", highlight: false },
] as const;

const inboxRows = [
  "Refill request — response drafted",
  "Referral fax — filed to chart",
] as const;

/** Fixed body height for background panels — locks size so flex stretch / Labs
    dataset switches never resize My Assistant. */
const BACK_PANEL_BODY_H = 236;

function AssistantWindow({ className = "" }: { className?: string }) {
  return (
    <AgentWindow
      agent="My Assistant"
      dotClass="bg-agent-assistant"
      label="Today's schedule"
      className={className}
    >
      <div className="space-y-1.5 overflow-hidden p-4" style={{ height: BACK_PANEL_BODY_H }}>
        {scheduleRows.map((row, i) => (
          <RevealRow
            key={row.time}
            delay={0.1 + i * 0.08}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs ${
              row.highlight
                ? "border border-primary-200 bg-primary-50 font-semibold text-primary-900"
                : "bg-slate-50 text-slate-600"
            }`}
          >
            <span className="font-mono font-semibold">{row.time}</span>
            <span className="font-semibold">{row.name}</span>
            <span className="ml-auto truncate opacity-70">{row.detail}</span>
            {row.highlight && (
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-700 shadow-sm">
                Prepping
              </span>
            )}
          </RevealRow>
        ))}

        <RevealRow delay={0.34}>
          <p className="pt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Inbox — triaged overnight
          </p>
        </RevealRow>
        {inboxRows.map((item, i) => (
          <RevealRow
            key={item}
            delay={0.42 + i * 0.08}
            className="flex items-center gap-2 px-3 py-1 text-xs text-slate-600"
          >
            <CheckCircle2 size={14} strokeWidth={2} className="shrink-0 text-emerald-500" aria-hidden />
            <span className="truncate">{item}</span>
          </RevealRow>
        ))}
      </div>
    </AgentWindow>
  );
}

/* ------------------------------------------------------------------ */
/* My Labs — mini baseline sparkline (parameterized)                  */
/* ------------------------------------------------------------------ */

interface LabsChartData {
  label: string;
  values: readonly number[];
  valMin: number;
  valMax: number;
  baselineLow: number;
  baselineHigh: number;
  months: readonly string[];
  populationAvg: number;
  ariaLabel: string;
  summaryValue: string;
}

const creatinineLabData: LabsChartData = {
  label: "J. Alvarez — Creatinine",
  values: [0.92, 0.96, 1.05, 1.19, 1.31],
  valMin: 0.8,
  valMax: 1.4,
  baselineLow: 0.85,
  baselineHigh: 1.05,
  months: ["Jan", "Feb", "Mar", "Apr", "May"],
  populationAvg: 1.1,
  ariaLabel: "Creatinine sparkline rising from 0.92 to 1.31 mg/dL, above the personal baseline band.",
  summaryValue: "1.31 mg/dL ↑22%",
};

const hba1cLabData: LabsChartData = {
  label: "J. Alvarez — HbA1c",
  values: [6.5, 6.8, 7.1, 7.4],
  valMin: 6.0,
  valMax: 7.8,
  baselineLow: 5.7,
  baselineHigh: 6.4,
  months: ["Aug '24", "Mar '25", "Sep '25", "Mar '26"],
  populationAvg: 5.7,
  ariaLabel: "HbA1c sparkline rising from 6.5% to 7.4%, above the personal baseline band.",
  summaryValue: "7.4% ↑",
};

/* ViewBox aspect (~2.55) matches the rendered panel body (~500x192px), so the
   chart fills the full width with no horizontal letterboxing. */
const LAB_W = 410;
const LAB_H = 160;
const LAB_AXIS_Y = 148;
const LAB_PLOT_BOTTOM = 136;
const LAB_PLOT_TOP = 14;
/* Left gutter reserved for y-axis tick labels; right edge mirrors the old
   8px margin used by the baseline band / population-average line. */
const LAB_PLOT_LEFT = 30;
const LAB_PLOT_RIGHT = LAB_W - 8;
const LAB_LINE_DELAY = 0.4;
const LAB_LINE_DUR = 0.9;
const LAB_PILL_DELAY = 1.4;

function dotFill(i: number, n: number): string {
  if (i === n - 1) return "#ef4444";
  if (i === n - 2) return "#f97316";
  return "#94a3b8";
}

function LabsWindow({
  data,
  animKey,
  className = "",
}: {
  data: LabsChartData;
  animKey: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const n = data.values.length;
  const plotH = LAB_PLOT_BOTTOM - LAB_PLOT_TOP;
  const lX = (i: number) =>
    LAB_PLOT_LEFT + (i * (LAB_PLOT_RIGHT - LAB_PLOT_LEFT)) / (n - 1);
  const lY = (v: number) =>
    LAB_PLOT_TOP + ((data.valMax - v) / (data.valMax - data.valMin)) * plotH;
  const labLine = data.values.map((v, i) => `${i === 0 ? "M" : "L"} ${lX(i)} ${lY(v)}`).join(" ");
  const popAvgY = lY(data.populationAvg);
  const gradId = `lab-grad-${animKey}`;
  const pillText = data.summaryValue;
  const pillW = Math.max(pillText.length * 5.8 + 14, 72);
  const pillH = 18;
  const pillX = LAB_W - pillW - 10;
  const pillY = LAB_PLOT_TOP - 2;
  const yTicks = [data.valMax, (data.valMin + data.valMax) / 2, data.valMin];

  return (
    <AgentWindow
      agent="My Labs"
      dotClass="bg-agent-labs"
      label={data.label}
      className={className}
    >
      {/* Fixed-height content area — never changes size regardless of dataset or animation phase */}
      <div className="overflow-hidden p-4" style={{ height: BACK_PANEL_BODY_H }}>
        {/* Keyed on animKey so only the chart content remounts on dataset switch,
            while the outer AgentWindow stays mounted and stable. */}
        <div
          key={animKey}
          className="h-full min-h-0 rounded-lg border border-slate-100 bg-slate-50/60 p-1.5"
        >
          <svg
            viewBox={`0 0 ${LAB_W} ${LAB_H}`}
            className="block h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={data.ariaLabel}
          >
            <defs>
              <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="60%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* X-axis month labels — static, visible from frame 0 */}
            {data.months.map((m, i) => (
              <text
                key={`${m}-${i}`}
                x={lX(i)}
                y={LAB_AXIS_Y}
                fontSize={8}
                textAnchor="middle"
                fill="#94a3b8"
              >
                {m}
              </text>
            ))}

            {/* Y-axis — static, visible from frame 0 */}
            <line
              x1={LAB_PLOT_LEFT}
              x2={LAB_PLOT_LEFT}
              y1={LAB_PLOT_TOP}
              y2={LAB_PLOT_BOTTOM}
              stroke="#cbd5e1"
              strokeWidth={1}
            />
            {yTicks.map((v, i) => {
              const y = lY(v);
              return (
                <g key={i}>
                  <line
                    x1={LAB_PLOT_LEFT - 3}
                    x2={LAB_PLOT_LEFT}
                    y1={y}
                    y2={y}
                    stroke="#cbd5e1"
                    strokeWidth={1}
                  />
                  <text x={LAB_PLOT_LEFT - 6} y={y + 3} fontSize={7.5} textAnchor="end" fill="#94a3b8">
                    {v.toFixed(1)}
                  </text>
                </g>
              );
            })}

            <motion.g
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <rect
                x={LAB_PLOT_LEFT}
                y={lY(data.baselineHigh)}
                width={LAB_PLOT_RIGHT - LAB_PLOT_LEFT}
                height={lY(data.baselineLow) - lY(data.baselineHigh)}
                rx={4}
                fill="#e0f2fe"
                fillOpacity={0.7}
              />
              <text x={LAB_PLOT_LEFT + 4} y={lY(data.baselineLow) - 4} fontSize={9} fill="#0369a1" fontWeight={600}>
                Personal baseline
              </text>

              <line
                x1={LAB_PLOT_LEFT}
                x2={LAB_PLOT_RIGHT}
                y1={popAvgY}
                y2={popAvgY}
                stroke="#94a3b8"
                strokeWidth={1}
                strokeDasharray="4 3"
              />
              <text x={LAB_PLOT_LEFT + 4} y={popAvgY - 4} fontSize={8} fill="#94a3b8">
                Population average
              </text>
            </motion.g>

            <motion.path
              d={labLine}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: LAB_LINE_DELAY, duration: LAB_LINE_DUR, ease: "easeOut" }}
            />

            {data.values.map((v, i) => (
              <motion.circle
                key={i}
                cx={lX(i)}
                cy={lY(v)}
                r={i === n - 1 ? 4.5 : 3}
                fill={dotFill(i, n)}
                stroke="#fff"
                strokeWidth={1.5}
                initial={reduceMotion ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: LAB_LINE_DELAY + LAB_LINE_DUR * (i / (n - 1)),
                  type: "spring",
                  stiffness: 320,
                  damping: 18,
                }}
                style={{ transformOrigin: `${lX(i)}px ${lY(v)}px` }}
              />
            ))}

            <motion.g
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: LAB_PILL_DELAY, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={6}
                fill="#fef2f2"
                stroke="#fca5a5"
                strokeWidth={1}
              />
              <text
                x={pillX + pillW / 2}
                y={pillY + pillH / 2 + 3.5}
                fontSize={9}
                fontWeight={700}
                textAnchor="middle"
                fill="#dc2626"
              >
                {pillText}
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </AgentWindow>
  );
}

/* ------------------------------------------------------------------ */
/* My Records — RAG chart search (foreground)                          */
/* ------------------------------------------------------------------ */

const searchResults = [
  {
    date: "Aug 19, 2024",
    source: "Annual Lab Panel",
    value: "HbA1c — 6.5% · first flag",
    highlight: false,
  },
  {
    date: "Mar 2, 2025",
    source: "Comprehensive Metabolic Panel",
    value: "HbA1c — 6.8%",
    highlight: false,
  },
  {
    date: "Sep 6, 2025",
    source: "Annual Lab Panel",
    value: "HbA1c — 7.1%",
    highlight: false,
  },
  {
    date: "Mar 14, 2026",
    source: "Comprehensive Metabolic Panel",
    value: "HbA1c — 7.4%",
    highlight: true,
  },
] as const;

type ChatPhase = "idle" | "typing" | "sent" | "spinnerIn" | "atTop" | "results";

const CHAT_QUERY = "What's the patient's HbA1c history?";
const TYPE_START_MS = 400;
const CHAR_MS = 32;
const TYPE_DUR_MS = CHAT_QUERY.length * CHAR_MS;

/* Distance (px) from the bubble's final resting spot at the top of the
   body down to just above the input bar — where it first appears. */
const BUBBLE_BOTTOM_Y = 268;
/* Bubble's position once the spinner slides in beneath it and nudges it up. */
const BUBBLE_PUSHED_Y = 208;
/* Spinner's resting spot at the bottom, right where the bubble used to sit. */
const SPINNER_BOTTOM_Y = 268;
/* Spinner starts further below the frame before sliding up into view. */
const SPINNER_HIDDEN_Y = 320;
/* Shared top resting spot for both bubble (y=0 baseline) and spinner/results. */
const TOP_Y = 58;

/* Fixed body height — all chat motion stays inside this box. */
const RECORDS_BODY_H = 352;

const BUBBLE_UP_DURATION = 0.7;

/* Delay after results finish staggering before the bottom pill auto-presses.
   Last row stagger: (4-1)*0.15 + 0.55s ≈ 1.0s, plus a short pause. */
const JUMP_PRESS_DELAY_MS = 1200;

function RecordsWindow({
  className = "",
  onJumpToSource,
}: {
  className?: string;
  onJumpToSource?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<ChatPhase>("idle");
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [phase, setPhase] = useState<ChatPhase>("idle");
  const [typedCount, setTypedCount] = useState(0);
  const [jumpPressed, setJumpPressed] = useState(false);
  const jumpFiredRef = useRef(false);

  phaseRef.current = phase;

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setPhase("results");
      return;
    }
    const sentAt = TYPE_START_MS + TYPE_DUR_MS + 350;
    const timers = [
      setTimeout(() => setPhase("typing"), TYPE_START_MS),
      setTimeout(() => setPhase("sent"), sentAt),
      setTimeout(() => setPhase("spinnerIn"), sentAt + 450),
      setTimeout(() => setPhase("atTop"), sentAt + 1750),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView, reduceMotion]);

  // Type the query into the input one character at a time.
  useEffect(() => {
    if (phase !== "typing") return;
    const interval = setInterval(() => {
      setTypedCount((n) => {
        if (n >= CHAT_QUERY.length) {
          clearInterval(interval);
          return n;
        }
        return n + 1;
      });
    }, CHAR_MS);
    return () => clearInterval(interval);
  }, [phase]);

  // Auto-press the bottom "Jump to source" pill once results are visible.
  useEffect(() => {
    if (phase !== "results") return;
    if (jumpFiredRef.current) return;
    if (reduceMotion) {
      jumpFiredRef.current = true;
      onJumpToSource?.();
      return;
    }
    const t = setTimeout(() => {
      setJumpPressed(true);
    }, JUMP_PRESS_DELAY_MS);
    return () => clearTimeout(t);
  }, [phase, reduceMotion, onJumpToSource]);

  const showResults = phase === "results";
  const isTypingInInput = phase === "typing";
  const hasInputText = isTypingInInput && typedCount > 0;
  const sendActive = hasInputText;
  // "sent" phase: button was just pressed — show the press flash before going grey
  const sendJustPressed = phase === "sent";

  // Bubble: opacity + translate only — positioned absolute so layout never shifts.
  const bubbleAnimate =
    phase === "idle" || phase === "typing"
      ? { opacity: 0, y: BUBBLE_BOTTOM_Y }
      : phase === "sent"
        ? { opacity: 1, y: BUBBLE_BOTTOM_Y }
        : phase === "spinnerIn"
          ? { opacity: 1, y: BUBBLE_PUSHED_Y }
          : { opacity: 1, y: 0 };

  const bubbleTransition =
    phase === "spinnerIn"
      ? { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      : phase === "atTop" || phase === "results"
        ? { duration: BUBBLE_UP_DURATION, ease: [0.65, 0, 0.35, 1] }
        : { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

  // Spinner: enters from below after send; fades out in place when bubble moves up.
  const spinnerAnimate =
    phase === "idle" || phase === "typing" || phase === "sent"
      ? { opacity: 0, y: SPINNER_HIDDEN_Y }
      : phase === "spinnerIn"
        ? { opacity: 1, y: SPINNER_BOTTOM_Y }
        : { opacity: 0, y: SPINNER_BOTTOM_Y };

  const spinnerTransition =
    phase === "spinnerIn"
      ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      : phase === "atTop"
        ? { duration: BUBBLE_UP_DURATION, ease: [0.65, 0, 0.35, 1] }
        : { duration: 0.3, ease: "easeOut" };

  const handleBubbleAnimationComplete = () => {
    if (phaseRef.current === "atTop") {
      setPhase("results");
    }
  };

  return (
    <div ref={ref} className={className}>
      <AgentWindow
        agent="My Records"
        dotClass="bg-agent-colleague"
        label="J. Alvarez — chart search"
        className="w-full"
        footer={
          <div className="border-t border-slate-200 px-4 py-3">
            <div
              className={`flex min-h-[42px] items-center gap-2 rounded-xl border bg-slate-50 px-3.5 py-2.5 transition-colors duration-300 ${
                isTypingInInput ? "border-primary-300 bg-white" : "border-slate-200"
              }`}
            >
              <Search size={14} strokeWidth={2} className="shrink-0 text-slate-400" aria-hidden />
              {isTypingInInput ? (
                <p className="flex-1 truncate text-sm font-medium text-ink">
                  {CHAT_QUERY.slice(0, typedCount)}
                  <motion.span
                    aria-hidden
                    className="ml-px inline-block h-[1em] w-[1.5px] translate-y-[2px] bg-primary-600"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                  />
                </p>
              ) : (
                <p className="flex-1 text-sm text-slate-400">Ask about this patient&apos;s records…</p>
              )}
              <motion.button
                type="button"
                aria-label="Send message"
                disabled
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                  sendActive || sendJustPressed
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-slate-200 text-slate-400"
                }`}
                animate={
                  sendJustPressed && !reduceMotion
                    ? { scale: [1, 0.82, 1] }
                    : { scale: 1 }
                }
                transition={{
                  duration: 0.55,
                  times: [0, 0.18, 1],
                  ease: ["easeIn", "easeOut"],
                }}
              >
                <Send size={15} strokeWidth={2.25} aria-hidden />
              </motion.button>
            </div>
          </div>
        }
      >
        <div
          className="relative overflow-hidden p-5"
          style={{ height: RECORDS_BODY_H }}
        >
          {/* User message — absolute; glide uses transform only */}
          <motion.div
            className="absolute right-5 top-0 z-20 flex justify-end"
            style={{ left: "1.25rem" }}
            initial={reduceMotion ? false : { opacity: 0, y: BUBBLE_BOTTOM_Y }}
            animate={reduceMotion ? { opacity: 1, y: 0 } : bubbleAnimate}
            transition={bubbleTransition}
            onAnimationComplete={handleBubbleAnimationComplete}
          >
            <div className="rounded-2xl rounded-tr-sm bg-primary-600 px-5 py-3 shadow-card">
              <p className="text-sm font-medium text-white">
                What&apos;s the patient&apos;s HbA1c history?
              </p>
            </div>
          </motion.div>

          {/* Spinner — slides in from below after send; fades out when bubble moves up */}
          <motion.div
            className="absolute left-5 top-0 z-10"
            initial={reduceMotion ? false : { opacity: 0, y: SPINNER_HIDDEN_Y }}
            animate={reduceMotion ? { opacity: 0, y: TOP_Y } : spinnerAnimate}
            transition={spinnerTransition}
          >
            <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5">
              <Loader2 size={15} strokeWidth={2.25} className="animate-spin text-primary-600" aria-hidden />
              <p className="text-sm font-medium text-slate-500">Searching records…</p>
            </div>
          </motion.div>

          {/* Result rows — reserved from first frame; opacity-only reveal */}
          <div className="absolute inset-x-5 flex flex-col gap-2" style={{ top: TOP_Y }}>
            {searchResults.map(({ date, source, value, highlight }, i) => {
              const isBottom = i === searchResults.length - 1;
              return (
                <motion.div
                  key={date}
                  className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 ${
                    highlight ? "border-amber-100 bg-amber-50" : "border-slate-100"
                  }`}
                  initial={false}
                  animate={
                    showResults || reduceMotion ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      highlight ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <FileText size={16} strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {date} · {source}
                    </p>
                    <p className="truncate text-sm font-bold text-ink">{value}</p>
                  </div>
                  {isBottom ? (
                    <motion.span
                      className={`ml-auto inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300 ${
                        jumpPressed
                          ? "bg-primary-600 text-white"
                          : "bg-primary-50 text-primary-700"
                      }`}
                      animate={jumpPressed ? { scale: [1, 0.82, 1] } : { scale: 1 }}
                      transition={
                        jumpPressed
                          ? { duration: 0.55, times: [0, 0.18, 1], ease: ["easeIn", "easeOut"] }
                          : undefined
                      }
                      onAnimationComplete={() => {
                        if (jumpPressed && !jumpFiredRef.current) {
                          jumpFiredRef.current = true;
                          onJumpToSource?.();
                        }
                      }}
                    >
                      Jump to source
                      <ExternalLink size={11} strokeWidth={2} aria-hidden />
                    </motion.span>
                  ) : (
                    <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-700">
                      Jump to source
                      <ExternalLink size={11} strokeWidth={2} aria-hidden />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </AgentWindow>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stack                                                               */
/* ------------------------------------------------------------------ */

export function OperationsPreviewStack() {
  const [labsDataset, setLabsDataset] = useState<"creatinine" | "hba1c">("creatinine");

  return (
    <div className="mx-auto mb-[-96px] w-full max-w-5xl origin-center translate-y-[24px] scale-[1] px-2 md:px-4">
      <div className="relative h-[560px]">
        <div className="absolute inset-x-0 top-0 z-0 flex items-start justify-center gap-[200px]">
          <AssistantWindow className="w-[52%] shrink-0 origin-top-left scale-[0.85] -translate-y-[10px] opacity-80" />
          <LabsWindow
            data={labsDataset === "creatinine" ? creatinineLabData : hba1cLabData}
            animKey={labsDataset}
            className="w-[52%] shrink-0 origin-top-right scale-[0.95625] translate-y-[10px] opacity-80"
          />
        </div>

        <RecordsWindow
          className="absolute left-1/2 top-[160px] z-10 w-[52%] -translate-x-1/2"
          onJumpToSource={() => setLabsDataset("hba1c")}
        />
      </div>
    </div>
  );
}
