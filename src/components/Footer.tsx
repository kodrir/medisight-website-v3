import { BrandMark } from "./BrandMark";
import { ClinicalDisclaimer } from "./ClinicalDisclaimer";

const solutionsLinks = [
  { label: "Diagnostics", href: "/solutions/diagnostics" },
  { label: "Operations", href: "/solutions/operations" },
];

const productLinks = [
  { label: "Evidence", href: "/evidence" },
  { label: "Trust & Security", href: "/trust" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Demo", href: "/#demo" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Email", href: "mailto:contact@medisight.ai" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5" aria-label="Medisight home">
              <BrandMark size={32} />
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                Medisight
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              A clinical intelligence layer on your existing EHR data. Diagnostics and operations,
              unified — with the clinician always in control.
            </p>
          </div>

          <nav aria-label="Solutions">
            <h3 className="text-sm font-semibold text-slate-900">Solutions</h3>
            <ul className="mt-4 space-y-2.5">
              {solutionsLinks.map((l) => (
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

        <div className="mt-12 border-t border-slate-200 pt-6">
          <ClinicalDisclaimer compact className="max-w-3xl" />
          <p className="mt-3 text-xs text-slate-400">
            © {new Date().getFullYear()} Medisight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
