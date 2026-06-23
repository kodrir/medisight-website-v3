import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

// TODO: Replace these {{PLACEHOLDER}} testimonials with real, attributed quotes
//       (name, role, organization) before launch. Keep clearly labeled until then.
const testimonials = [
  { quote: "{{PLACEHOLDER}}", name: "{{PLACEHOLDER}}", role: "CMIO, {{PLACEHOLDER}}" },
  { quote: "{{PLACEHOLDER}}", name: "{{PLACEHOLDER}}", role: "Lab Director, {{PLACEHOLDER}}" },
  { quote: "{{PLACEHOLDER}}", name: "{{PLACEHOLDER}}", role: "Practice Administrator, {{PLACEHOLDER}}" },
];

export function Testimonials() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/70 py-20 md:py-24">
      <div className="container-content">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate-400">
            Placeholder testimonials. Replace with attributed quotes before launch.
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl border border-dashed border-slate-300 bg-white p-6 shadow-card">
                <Quote size={22} strokeWidth={1.75} className="text-primary-300" aria-hidden />
                <blockquote className="mt-3 grow text-[15px] leading-relaxed text-slate-400">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm">
                  <span className="block font-semibold text-slate-400">{t.name}</span>
                  <span className="block text-slate-400">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
