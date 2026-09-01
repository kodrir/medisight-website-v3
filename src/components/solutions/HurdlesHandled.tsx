"use client";

import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

interface HurdlesHandledProps {
  eyebrow: string;
  heading: string;
  hurdles: string[];
  payoff: string;
}

/** Cascade: 0.5s between each row's fade-in start; all phase durations doubled. */
const STAGGER_S = 0.5;
const FADE_IN_S = 0.9;
const STRIKE_DELAY_S = 0.6;
const STRIKE_DURATION_S = 1.3;
const DEFOCUS_AFTER_START_S = 2.1;
const DEFOCUS_DURATION_S = 1.1;
const ICON_TRANSITION_S = 0.8;

function payoffDelayS(hurdleCount: number): number {
  const lastRowStart = Math.max(0, hurdleCount - 1) * STAGGER_S;
  return lastRowStart + DEFOCUS_AFTER_START_S + DEFOCUS_DURATION_S - 1.3;
}

export function HurdlesHandled({
  eyebrow,
  heading,
  hurdles,
  payoff,
}: HurdlesHandledProps) {
  // Trigger orchestration when the list enters view
  const listRef = useRef<HTMLUListElement>(null);
  const listInView = useInView(listRef, { once: true, margin: "-80px" });
  const [showPayoff, setShowPayoff] = useState(false);

  useEffect(() => {
    if (!listInView) return;
    const payoffDelayMs = payoffDelayS(hurdles.length) * 1000;
    const timer = setTimeout(() => setShowPayoff(true), payoffDelayMs);
    return () => clearTimeout(timer);
  }, [listInView, hurdles.length]);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50/70 py-20 md:py-28">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-200/25 blur-[90px]" />
        <div className="absolute right-[25%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-accent-200/20 blur-[70px]" />
      </div>

      <div className="container-content relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {heading}
            </h2>
          </div>
        </Reveal>

        {/* Hurdle list */}
        <ul ref={listRef} className="mx-auto mt-14 max-w-xl space-y-3">
          {hurdles.map((hurdle, i) => (
            <HurdleRow
              key={hurdle}
              text={hurdle}
              index={i}
              triggered={listInView}
              totalCount={hurdles.length}
            />
          ))}
        </ul>

        {/* Payoff — compositor-driven CSS transition (smooth even with clipped-gradient text) */}
        <div
          className="mx-auto mt-10 max-w-xl text-center"
          style={{
            opacity: showPayoff ? 1 : 0,
            transform: showPayoff
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            transition:
              "opacity 2000ms cubic-bezier(0.22, 1, 0.36, 1), transform 2000ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "opacity, transform",
          }}
        >
          <p
            className="text-xl font-bold tracking-tight md:text-2xl"
            style={{
              background: "linear-gradient(135deg, #00BFFF 0%, #5A3EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {payoff}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Per-row animation sequence ─── */

function HurdleRow({
  text,
  index,
  triggered,
}: {
  text: string;
  index: number;
  triggered: boolean;
  totalCount: number;
}) {
  const rowDelay = index * STAGGER_S;

  // strikethrough width: 0 → 100
  const strikeWidth = useMotionValue(0);
  const strikeWidthPct = useTransform(strikeWidth, (v) => `${v}%`);

  // border color interpolation: primary-500 → slate-200
  const [phase, setPhase] = useState<"idle" | "active" | "done">("idle");

  useEffect(() => {
    if (!triggered) return;

    // Phase 1: card slides up and border goes blue (instant on row start)
    const t1 = setTimeout(() => setPhase("active"), rowDelay * 1000);

    // Phase 2: strikethrough draws (overlaps fade-in)
    const t2 = setTimeout(() => {
      animate(strikeWidth, 100, { duration: STRIKE_DURATION_S, ease: "easeInOut" });
    }, (rowDelay + STRIKE_DELAY_S) * 1000);

    // Phase 3: defocus + border greys out (overlaps next row's fade-in)
    const t3 = setTimeout(() => setPhase("done"), (rowDelay + DEFOCUS_AFTER_START_S) * 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [triggered, rowDelay, strikeWidth]);

  const borderColor =
    phase === "active"
      ? "rgba(0, 191, 255, 0.8)"   // primary-500
      : phase === "done"
      ? "rgba(226, 232, 240, 1)"   // slate-200
      : "rgba(226, 232, 240, 1)";  // slate-200 (idle)

  const boxShadow =
    phase === "active"
      ? "0 0 0 1px rgba(0,191,255,0.4), 0 4px 14px rgba(0,191,255,0.15)"
      : "0 1px 2px rgba(16,16,16,0.04), 0 4px 14px rgba(16,16,16,0.06)";

  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 14 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: FADE_IN_S, delay: rowDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
        animate={{
          opacity: phase === "done" ? 0.42 : 1,
          filter: phase === "done" ? "saturate(0.4) blur(0.4px)" : "saturate(1) blur(0px)",
          borderColor,
          boxShadow,
        }}
        transition={{ duration: DEFOCUS_DURATION_S, ease: "easeInOut" }}
        style={{ border: "1px solid", borderColor }}
      >
        {/* Icon circle: blue when active, grey when done */}
        <motion.span
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          animate={{
            backgroundColor:
              phase === "active"
                ? "rgba(0,191,255,0.15)"
                : phase === "done"
                ? "rgb(226,232,240)"
                : "rgb(239,249,255)",
          }}
          transition={{ duration: ICON_TRANSITION_S }}
          aria-hidden
        >
          <motion.svg
            viewBox="0 0 14 14"
            className="h-3.5 w-3.5"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              stroke: phase === "active" ? "rgb(0,191,255)" : "rgb(148,163,184)",
            }}
            transition={{ duration: ICON_TRANSITION_S }}
          >
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </motion.svg>
        </motion.span>

        {/* Text + animated strikethrough */}
        <span className="relative flex-1 text-base font-medium text-slate-500">
          {text}
          <motion.span
            aria-hidden
            className="absolute left-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-slate-400/80"
            style={{ width: strikeWidthPct }}
          />
        </span>
      </motion.div>
    </motion.li>
  );
}
