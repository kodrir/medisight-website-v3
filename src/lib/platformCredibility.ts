export interface CredibilityPillar {
  title: string;
  body: string;
  video: string;
  engineName: string;
  engineSubtitle: string;
}

export const credibilityPillars: CredibilityPillar[] = [
  {
    title: "Literature-grounded intelligence",
    engineName: "TORAG",
    engineSubtitle: "Tuned / Optimized RAG",
    video: "/videos/patent-pending-technology.mp4",
    body: "TORAG is a custom enterprise retrieval system purpose-built for healthcare, integrating scientific literature and EHR context with built-in compliance features so outputs stay grounded in verifiable sources.",
  },
  {
    title: "Fully traceable",
    engineName: "ClearView",
    engineSubtitle: "White-box validation",
    video: "/videos/traceable.mp4",
    body: "ClearView makes every output traceable and verifiable, linking summaries and references back to the data points and published sources behind them for clinician review before they reach the chart.",
  },
  {
    title: "EHR and lab integration",
    engineName: "AutoFocus",
    engineSubtitle: "Multi-agent orchestration",
    video: "/videos/easy-integration.mp4",
    body: "AutoFocus powers agentic orchestration across the platform, compensating for gaps in patient data in real time and routing lab and EHR inputs to the right automated workflow via HL7/FHIR integration.",
  },
];
