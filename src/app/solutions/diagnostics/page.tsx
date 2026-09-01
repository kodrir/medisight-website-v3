import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { DiagnosticsCarousel } from "@/components/DiagnosticsPreview";
import { NumberedHighlights } from "@/components/solutions/NumberedHighlights";
import { FeatureGrid } from "@/components/solutions/FeatureGrid";
import { ProofBand } from "@/components/persona/ProofBand";
import { Cta } from "@/components/Cta";
import {
  diagnosticsValueHighlights,
  diagnosticsLayerFeatures,
  diagnosticsMetrics,
} from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Diagnostics",
  description:
    "Personalized, cited clinical insights from the labs and records your team already has — built on peer-reviewed models and personal baselines.",
  openGraph: {
    title: "Diagnostics · Medisight",
    description:
      "Turn patient data into a clinical edge with personalized insights, literature-grounded analysis, and full traceability.",
  },
};

export default function DiagnosticsPage() {
  return (
    <>
      <Nav />
      <main>
        <SolutionHero
          headline="Turn patient data into a"
          highlight="clinical edge."
          withVideoBackground
          showDemoCta={false}
          extraBottomPx={200}
        >
          <DiagnosticsCarousel />
        </SolutionHero>

        <NumberedHighlights
          eyebrow="What Medisight adds"
          heading="What Medisight adds to diagnostics"
          items={diagnosticsValueHighlights}
          videoSrc="/videos/easy-integration.mp4"
          videoPoster="/images/problem-poster.png"
        />

        <FeatureGrid
          eyebrow="How it works"
          heading="A clinical intelligence layer built for care teams"
          intro="Medisight integrates with your existing lab workflow and EHR. No rip-and-replace — it reads the data your team already generates and returns personalized, cited clinical intelligence."
          items={diagnosticsLayerFeatures}
        />

        <ProofBand metrics={diagnosticsMetrics} />

        <Cta />
      </main>
      <Footer />
    </>
  );
}
