import { Reveal } from "@/components/Reveal";
import { dataFlowSteps } from "@/lib/trust";

export function DataFlow() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/70 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How PHI moves through Medisight</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The clinician is always the last step
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-slate-300 md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-4">
            {dataFlowSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.08}
                className="flex list-none flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-sm font-bold text-white shadow-card">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 max-w-[13rem] text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
