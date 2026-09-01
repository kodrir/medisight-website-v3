import { ShieldCheck, FileText, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Resource {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
}

const resources: Resource[] = [
  {
    icon: ShieldCheck,
    title: "Security packet",
    body: "Our HIPAA program, data handling practices, and Epic integration details.",
    href: "mailto:contact@medisight.ai?subject=Request%3A%20Security%20packet",
  },
  {
    icon: FileText,
    title: "One-page overview",
    body: "A shareable summary for the rest of your buying committee.",
    href: "mailto:contact@medisight.ai?subject=Request%3A%20One-page%20overview",
  },
  {
    icon: Calculator,
    title: "ROI summary",
    body: "A written summary of your numbers from our ROI calculator.",
    href: "mailto:contact@medisight.ai?subject=Request%3A%20ROI%20summary",
  },
];

export function ContactResources() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {resources.map((resource) => {
        const Icon = resource.icon;
        return (
          <a
            key={resource.title}
            href={resource.href}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-primary-300 hover:bg-primary-50/40"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">{resource.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{resource.body}</p>
          </a>
        );
      })}
    </div>
  );
}
