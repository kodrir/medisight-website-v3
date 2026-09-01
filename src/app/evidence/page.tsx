import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EvidenceSection } from "@/components/EvidenceSection";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Peer-reviewed publications, independent benchmarks, and pilot deployment outcomes behind the Medisight platform.",
  openGraph: {
    title: "Evidence · Medisight",
    description:
      "Peer-reviewed publications, independent benchmarks, and pilot deployment outcomes behind the Medisight platform.",
  },
};

export default function EvidencePage() {
  return (
    <>
      <Nav />
      <main>
        <EvidenceSection />
      </main>
      <Footer />
    </>
  );
}
