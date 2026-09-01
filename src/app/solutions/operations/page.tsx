import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { OperationsPreviewStack } from "@/components/solutions/OperationsPreviewStack";
import { FeatureGrid } from "@/components/solutions/FeatureGrid";
import { NumberedHighlights } from "@/components/solutions/NumberedHighlights";
import { ProofBand } from "@/components/persona/ProofBand";
import { Cta } from "@/components/Cta";
import {
  operationsMetrics,
  operationsValueHighlights,
  operationsAutomationFeatures,
} from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Operations",
  description:
    "Medisight takes the busywork off your team's plate and puts the facts that matter in front of them — less screen time, more time with patients.",
  openGraph: {
    title: "Operations · Medisight",
    description:
      "Less time on the computer, sharper at every visit — Medisight helps clinical teams spend more time with patients.",
  },
};

export default function OperationsPage() {
  return (
    <>
      <Nav />
      <main>
        <SolutionHero
          headline="More time with patients."
          highlight="Better equipped than ever."
          withVideoBackground
          showDemoCta={false}
          extraBottomPx={380}
        >
          <OperationsPreviewStack />
        </SolutionHero>

        <FeatureGrid
          eyebrow="How it works"
          heading="Automation built for clinical workflows"
          intro="Medisight connects to your EHR and handles the repetitive work automatically — so your team focuses on patients, not paperwork."
          items={operationsAutomationFeatures}
        />

        <NumberedHighlights
          eyebrow="What Medisight automates"
          heading="What Medisight takes off your team's plate"
          items={operationsValueHighlights}
          videoSrc="/videos/problem-background.mp4"
          videoPoster="/images/problem-poster.png"
        />

        <ProofBand
          metrics={operationsMetrics}
          heading="Time back, every week"
          intro="Minutes saved on admin are minutes returned to patients."
        />

        <Cta />
      </main>
      <Footer />
    </>
  );
}
