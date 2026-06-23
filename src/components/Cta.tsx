import { ArrowRight } from "lucide-react";
import { DEMO_URL } from "@/lib/links";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section id="demo" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 to-accent-700 px-8 py-16 text-center shadow-raised md:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              See agentic automation in action
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-100">
              From autonomous morning prep to post-visit records, labs, and consult support on your
              workflows.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-accent-700 shadow-sm transition-colors hover:bg-mist"
              >
                Request a Demo
                <ArrowRight size={18} strokeWidth={1.75} />
              </a>
              <a
                href="#agents"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore the platform
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
