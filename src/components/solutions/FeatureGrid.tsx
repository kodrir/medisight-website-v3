import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface FeatureGridProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: FeatureGridItem[];
  closingLine?: string;
  variant?: "default" | "muted";
}

function gridColsClass(count: number): string {
  if (count % 3 === 0 && count !== 4) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count >= 4) return "sm:grid-cols-2 lg:grid-cols-4";
  if (count === 2) return "sm:grid-cols-2";
  return "grid-cols-1";
}

export function FeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  closingLine,
  variant = "default",
}: FeatureGridProps) {
  const isMuted = variant === "muted";

  return (
    <section
      className={
        isMuted
          ? "border-y border-slate-200 bg-slate-50/70 py-20 md:py-28"
          : "bg-white py-20 md:py-28"
      }
    >
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{heading}</h2>
            {intro && (
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
            )}
          </div>
        </Reveal>

        <ul className={`mx-auto mt-14 grid gap-6 ${gridColsClass(items.length)}`}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="list-none">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {closingLine && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-xl text-center text-sm font-medium text-slate-500">
              {closingLine}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
