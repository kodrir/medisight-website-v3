import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import type { FeatureGridItem } from "@/components/solutions/FeatureGrid";

interface TrustHubProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: FeatureGridItem[];
}

type PanelCorner = "bottom-right" | "top-right" | "bottom-left" | "top-left";

export function TrustHub({ eyebrow, heading, intro, items }: TrustHubProps) {
  const [topLeft, bottomLeft, topRight, bottomRight] = items;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundColor: "#f0f4f8",
        backgroundImage: [
          "linear-gradient(rgba(186, 214, 247, 0.45) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(186, 214, 247, 0.45) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container-content relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1a3560] md:text-4xl">
              {heading}
            </h2>
            {intro && (
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-500">{intro}</p>
            )}
          </div>
        </Reveal>

        {/* Desktop hub */}
        <div className="relative mx-auto mt-16 hidden max-w-[920px] lg:block">
          <div className="grid grid-cols-[1fr_72px_160px_72px_1fr] grid-rows-2 items-center gap-y-10">
            <Reveal delay={0.05} className="col-start-1 row-start-1 justify-self-end">
              <HubPanel item={topLeft} />
            </Reveal>

            <Reveal delay={0.1} className="col-start-1 row-start-2 justify-self-end">
              <HubPanel item={bottomLeft} />
            </Reveal>

            <Connector direction="right-down" className="col-start-2 row-start-1" />
            <Connector direction="right-up" className="col-start-2 row-start-2" />

            <Reveal
              delay={0}
              className="col-start-3 row-start-1 row-end-3 flex items-center justify-center"
            >
              <HubCenter />
            </Reveal>

            <Connector direction="left-down" className="col-start-4 row-start-1" />
            <Connector direction="left-up" className="col-start-4 row-start-2" />

            <Reveal delay={0.05} className="col-start-5 row-start-1 justify-self-start">
              <HubPanel item={topRight} />
            </Reveal>

            <Reveal delay={0.1} className="col-start-5 row-start-2 justify-self-start">
              <HubPanel item={bottomRight} />
            </Reveal>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-12 lg:hidden">
          <Reveal className="mx-auto mb-10 flex flex-col items-center">
            <HubCenter size="sm" />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <HubPanel item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HubPanel({ item }: { item: FeatureGridItem }) {
  return (
    <div className="w-full max-w-[320px] rounded-2xl bg-gradient-to-r from-[#3b82f6] via-[#0ea5e9] to-[#22d3ee] p-6 shadow-[0_6px_28px_rgba(59,130,246,0.22)] transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-[0.95rem] font-bold leading-snug text-white">{item.title}</p>
      <p className="mt-2.5 text-sm leading-relaxed text-white/90">{item.body}</p>
    </div>
  );
}

type ConnectorDirection = "right-down" | "right-up" | "left-down" | "left-up";

function Connector({
  direction,
  className = "",
}: {
  direction: ConnectorDirection;
  className?: string;
}) {
  const paths: Record<ConnectorDirection, string> = {
    "right-down": "M 4 4 L 60 52 M 60 52 L 48 52 M 60 52 L 60 40",
    "right-up": "M 4 52 L 60 4 M 60 4 L 48 4 M 60 4 L 60 16",
    "left-down": "M 64 4 L 8 52 M 8 52 L 20 52 M 8 52 L 8 40",
    "left-up": "M 64 52 L 8 4 M 8 4 L 20 4 M 8 4 L 8 16",
  };

  return (
    <div className={`flex h-full items-center justify-center ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 68 56"
        className="h-14 w-[4.5rem] text-[#7eb8f7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={paths[direction]} />
      </svg>
    </div>
  );
}

function HubCenter({ size = "md" }: { size?: "md" | "sm" }) {
  const logoSize = size === "sm" ? 80 : 104;

  return (
    <div className="flex flex-col items-center gap-4">
      <BrandMark size={logoSize} className="drop-shadow-[0_8px_24px_rgba(59,130,246,0.35)]" />

      <span className="rounded-full bg-white px-5 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-[#2563eb] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        Medisight
      </span>
    </div>
  );
}
