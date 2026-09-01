import { ArrowRight, FlaskConical, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

const solutions = [
  {
    slug: "diagnostics",
    icon: FlaskConical,
    title: "Diagnostics",
    description: "Personalized insights from labs, records, and patient context.",
    href: "/solutions/diagnostics",
  },
  {
    slug: "operations",
    icon: Workflow,
    title: "Operations",
    description: "More time with patients, better equipped than ever.",
    href: "/solutions/operations",
  },
];

export function SolutionCards() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Solutions</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              One platform, two ways it pays for itself
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Reveal as="li" key={solution.slug} delay={i * 0.06} className="list-none">
                <a
                  href={solution.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-raised"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon size={24} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{solution.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                    {solution.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
                    Explore {solution.title.toLowerCase()}
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
