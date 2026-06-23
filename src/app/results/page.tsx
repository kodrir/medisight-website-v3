import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ResultsSection } from "@/components/ResultsSection";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Pilot deployments across healthcare and research settings. Outcomes from Medisight partner engagements.",
  openGraph: {
    title: "Results · Medisight",
    description:
      "Pilot deployments across healthcare and research settings. Outcomes from Medisight partner engagements.",
  },
};

export default function ResultsPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="container-content pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden />
            Back to Home
          </Link>
        </div>
        <ResultsSection />
      </main>
      <Footer />
    </>
  );
}
