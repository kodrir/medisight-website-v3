import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/legal";

interface LegalPageShellProps {
  label: string;
  title: string;
  children: ReactNode;
}

export function LegalPageShell({ label, title, children }: LegalPageShellProps) {
  return (
    <>
      <Nav />
      <main>
        <header className="legal-hero">
          <div className="container-content">
            <Link href="/" className="legal-back">
              <ArrowLeft size={16} strokeWidth={2} aria-hidden />
              Back to Home
            </Link>
            <p className="eyebrow text-primary-400">{label}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-slate-400">
              Effective Date: {LEGAL_EFFECTIVE_DATE} · Last Updated: {LEGAL_EFFECTIVE_DATE}
            </p>
          </div>
        </header>

        <article className="container-content legal-body">{children}</article>
      </main>
      <Footer />
    </>
  );
}
