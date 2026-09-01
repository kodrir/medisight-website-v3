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
      "Manually reviewing complex cardiopulmonary exercise data slowed clinicians down.",
    solution:
      "Real-time dashboards and AI-assisted agents built for exercise physiology workflows.",
    outcomeTitle: "Faster review, same clinical control",
    outcomeBody:
      "Higher-resolution views surfaced patterns clinicians could act on immediately.",
  },
  {
    id: "caleo",
    institution: "Caleo Biotechnologies",
    type: "Biotechnology Research · Pilot",
    logoSrc: "/trust-logos/caleo-biotechnologies.png",
    logoClass: "h-12 md:h-14",
    isPilot: true,
    challenge:
      "Manual cell-image interpretation bottlenecked research throughput and reproducibility.",
    solution:
      "AI-assisted image analysis for cell segmentation, morphology, and stain quantification.",
    outcomeTitle: "Days → Minutes in analysis time",
    outcomeBody:
      "The team processed a full image set with consistently reproducible results.",
  },
  {
    id: "janelia",
    institution: "Janelia Research Campus",
    type: "Advanced Research Institute · Pilot",
    logoSrc: "/trust-logos/janelia-research-campus.png",
    logoClass: "trust-logo--mono h-12 md:h-14",
    isPilot: true,
    challenge:
      "Diverse datasets meant manual handling and inconsistent workflows across research groups.",
    solution:
      "A universal data platform with automated visualization and one-click reporting.",
    outcomeTitle: "Hours → Seconds in dataset analysis",
    outcomeBody:
      "Every research group now runs the same fast, consistent analysis pipeline.",
  },
];
