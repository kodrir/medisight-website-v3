import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { DataFlow } from "@/components/trust/DataFlow";
import { PlatformCredibility } from "@/components/PlatformCredibility";
import { FeatureGrid } from "@/components/solutions/FeatureGrid";
import { Cta } from "@/components/Cta";
import { trustPoints } from "@/lib/trust";
import { DEMO_URL } from "@/lib/links";

const TRUST_HERO_IMAGE = "/images/trust/clinical-team.jpg";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How Medisight handles PHI: HIPAA compliance, validated Epic integration, source-linked outputs, and a clinician who reviews every insight before it reaches the chart.",
  openGraph: {
    title: "Trust & Security · Medisight",
    description:
      "HIPAA compliance, validated Epic integration, and a clinician always in the loop — how Medisight is built for how healthcare actually works.",
  },
};

export default function TrustPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative isolate overflow-hidden border-b border-slate-200">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TRUST_HERO_IMAGE}
              alt=""
              className="h-full w-full scale-[1.30] translate-y-[12%] object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/90 via-45% to-transparent to-80% lg:via-white/85 lg:via-50% lg:to-transparent lg:to-70%" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent lg:hidden" />
          </div>

          <div className="container-content relative flex min-h-[44rem] items-center py-24 md:min-h-[48rem] md:py-32 lg:min-h-[52rem] lg:py-40">
            <Reveal>
              <div className="w-full max-w-lg text-left md:max-w-xl lg:max-w-2xl lg:-translate-x-20 lg:pl-12 xl:-translate-x-24 xl:pl-20 2xl:-translate-x-28 2xl:pl-28">
                <span className="eyebrow">Trust &amp; security</span>
                <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
                  Built for how healthcare{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    actually works.
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                  HIPAA-aligned, Epic-integrated, and clinician-reviewed before anything reaches the chart.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-start gap-3">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:from-primary-700 hover:to-accent-700"
                  >
                    Request a Demo
                    <ArrowRight size={18} strokeWidth={1.75} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <DataFlow />

        <PlatformCredibility />

        <FeatureGrid
          eyebrow="What that means in practice"
          heading="Compliance and data protection"
          items={trustPoints}
        />

        <section className="bg-white py-4">
          <div className="container-content">
            <Reveal>
              <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-500">
                Have a question your security or compliance team needs answered? Email{" "}
                <a
                  href="mailto:contact@medisight.ai"
                  className="font-medium text-primary-700 hover:text-primary-800"
                >
                  contact@medisight.ai
                </a>{" "}
                or reach out through our{" "}
                <Link href="/contact" className="font-medium text-primary-700 hover:text-primary-800">
                  contact page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
