export interface CaseStudy {
  id: string;
  institution: string;
  type: string;
  logoSrc: string;
  logoClass?: string;
  challenge: string;
  solution: string;
  outcomeTitle: string;
  outcomeBody: string;
  /** When true, card shows a pilot / illustrative-results note. */
  isPilot?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "medicise",
    institution: "Medicise SA",
    type: "Clinical Practice · Pilot",
    logoSrc: "/trust-logos/medicise.png",
    logoClass: "h-14 md:h-16",
    isPilot: true,
    challenge:
      "The clinic needed to process complex cardiopulmonary exercise data efficiently while keeping clinicians in control of interpretation, without manual review bottlenecks.",
    solution:
      "Deployed an analytics platform with real-time dashboards, AI-assisted analytical agents, and workflow tooling tailored to exercise physiology teams.",
    outcomeTitle: "Faster workflow for complex data review",
    outcomeBody:
      "In this pilot, higher-resolution data views surfaced patterns for clinician review that were impractical to spot manually, supporting the team's own assessment and workflow.",
  },
  {
    id: "caleo",
    institution: "Caleo Biotechnologies",
    type: "Biotechnology Research · Pilot",
    logoSrc: "/trust-logos/caleo-biotechnologies.png",
    logoClass: "h-12 md:h-14",
    isPilot: true,
    challenge:
      "Manual cell-image interpretation created significant bottlenecks, limiting research throughput and reproducibility while constraining the ability to surface subtle patterns.",
    solution:
      "Deployed an AI-assisted image analysis platform for cell segmentation, morphology quantification, and stain analysis in a research setting, converting cellular imagery into reproducible, review-ready outputs.",
    outcomeTitle: "Days → Minutes in analysis time",
    outcomeBody:
      "In this pilot study, the team reported high reproducibility across a large image set and faster experimental throughput. Results are illustrative and may not reflect typical outcomes.",
  },
  {
    id: "janelia",
    institution: "Janelia Research Campus",
    type: "Advanced Research Institute · Pilot",
    logoSrc: "/trust-logos/janelia-research-campus.png",
    logoClass: "trust-logo--mono h-12 md:h-14",
    isPilot: true,
    challenge:
      "Teams needed a flexible solution to process, analyze, and visualize diverse, complex datasets without manual manipulation or inconsistent workflows across research groups.",
    solution:
      "Built a universal tabular data processing platform with automated visualization, statistical modules, and one-click report generation designed around scientific research workflows.",
    outcomeTitle: "Hours → Seconds in dataset analysis",
    outcomeBody:
      "In this pilot, teams reported faster dataset processing and more consistent reporting across groups. Results are illustrative and may not reflect typical outcomes.",
  },
];
