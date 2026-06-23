import { BrandMark } from "./BrandMark";
import { ClinicalDisclaimer } from "./ClinicalDisclaimer";
import { agents } from "@/lib/agents";
const productLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Agents", href: "/#agents" },
  { label: "Results", href: "/results" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:contact@medisight.ai" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-content py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5" aria-label="Medisight home">
              <BrandMark size={32} />
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                Medisight
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Advanced agentic automation on one clinical platform. One shared patient record,
              one audit trail; the clinician always in control.
            </p>
          </div>

          <nav aria-label="Product">
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Agents">
            <h3 className="text-sm font-semibold text-slate-900">Agents</h3>
            <ul className="mt-4 space-y-2.5">
              {agents.map((a) => (
                <li key={a.id}>
                  <a
                    href={`/#agent-${a.id}`}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-700"
                  >
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 space-y-4 border-t border-slate-200 pt-6">
          <ClinicalDisclaimer compact className="max-w-3xl" />
          <div className="flex flex-col gap-3 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Medisight. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
