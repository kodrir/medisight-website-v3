export interface CredibilityPillar {
  title: string;
  body: string;
  video: string;
  engineName: string;
  engineSubtitle: string;
  /** Optional object-fit positioning for videos that need custom framing. */
  videoClassName?: string;
}

export const credibilityPillars: CredibilityPillar[] = [
  {
    title: "Grounded in real literature and records",
    engineName: "TORAG",
    engineSubtitle: "Tuned / Optimized RAG",
    video: "/videos/patent-pending-technology.mp4",
    body: "Every insight is checked against the patient's own chart and published clinical literature — not guessed from patterns alone.",
  },
  {
    title: "You can see exactly why",
    engineName: "ClearView",
    engineSubtitle: "Source-linked review",
    video: "/videos/traceable.mp4",
    body: "Every output links back to the note, lab, or paper it came from, so your team can verify it before it reaches the chart.",
  },
  {
    title: "Works with the systems you have",
    engineName: "AutoFocus",
    engineSubtitle: "Automated data routing",
    video: "/videos/easy-integration.mp4",
    body: "Lab and EHR data routed to the right workflow via HL7/FHIR — nothing to rip out or replace.",
  },
];
