import {
  BookOpen,
  ShieldCheck,
  FlaskConical,
  FileCheck2,
  FileText,
  Cable,
  Fingerprint,
  Activity,
  Clock,
  Sparkles,
  Workflow,
  Inbox,
} from "lucide-react";
import type { ProofMetric } from "@/lib/metrics";
import type { NumberedHighlight } from "@/components/solutions/NumberedHighlights";
import type { FeatureGridItem } from "@/components/solutions/FeatureGrid";

export const diagnosticsMetrics: ProofMetric[] = [
  {
    value: "100%",
    label: "Every insight traceable to source",
    note: "Full audit trail from citation to chart — nothing a clinician can't verify in seconds.",
    icon: FileCheck2,
  },
  {
    value: "Peer-Reviewed",
    label: "Built on published clinical research",
    note: "Predictive models grounded in peer-reviewed literature, not black-box AI.",
    icon: BookOpen,
  },
  {
    value: "Epic",
    label: "Lives inside your existing EHR",
    note: "No rip-and-replace, no new login — works in the workflow your team already uses.",
    icon: Cable,
  },
];

export const operationsMetrics: ProofMetric[] = [
  {
    value: "100%",
    label: "Outputs source-linked for review",
    note: "ClearView audit traceability across the platform",
    icon: ShieldCheck,
  },
  {
    value: "Epic",
    label: "HL7/FHIR integration",
    note: "No rip-and-replace — works with your existing EHR",
    icon: Cable,
  },
  {
    value: "24/7",
    label: "Automation runs around the clock",
    note: "Admin work keeps moving between visits and after hours",
    icon: Clock,
  },
];

export const diagnosticsValueHighlights: NumberedHighlight[] = [
  {
    number: "01",
    title: "Clinicians get context, not noise",
    body: "Lab and biomarker panels read against each patient's own baseline, not population ranges.",
  },
  {
    number: "02",
    title: "A report clinicians can trust",
    body: "Personalized, cited insights — reviewed and signed off by your team.",
  },
  {
    number: "03",
    title: "One picture over time",
    body: "Follow-up context carried forward instead of reset at every visit.",
  },
];

export const diagnosticsLayerFeatures: FeatureGridItem[] = [
  {
    icon: FlaskConical,
    title: "Diagnostic intelligence",
    body: "Drift measured against personal baselines, not population averages.",
  },
  {
    icon: BookOpen,
    title: "Literature-grounded analysis",
    body: "TORAG-powered pathways grounded in published clinical literature.",
  },
  {
    icon: FileText,
    title: "Clinical records",
    body: "Auditable history with full source traceability.",
  },
  {
    icon: Cable,
    title: "Lab & EHR integration",
    body: "Connects to existing lab workflows and Epic HL7/FHIR — no rip-and-replace.",
  },
];

export const diagnosticsTrustItems: FeatureGridItem[] = [
  {
    icon: Activity,
    title: "Validated predictive models",
    body: "Purpose-built for health intelligence, not generic AI adapted for clinical use.",
  },
  {
    icon: Fingerprint,
    title: "ClearView traceability",
    body: "Every output cited to source data and literature for clinician review.",
  },
  {
    icon: FlaskConical,
    title: "Personal baseline analysis",
    body: "Drift detected against each patient's own history, not population noise.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned & Epic HL7/FHIR",
    body: "Built on a compliant, integration-ready foundation.",
  },
];

export const operationsValueHighlights: NumberedHighlight[] = [
  {
    number: "01",
    title: "Notes written before you leave the room",
    body: "Visit documentation drafted from the encounter and intake — your team reviews, edits, and signs off. Not transcribed after the fact.",
  },
  {
    number: "02",
    title: "Charts prepped before every patient",
    body: "Key labs, history, open orders, and relevant context pulled together automatically before you walk in the room.",
  },
  {
    number: "03",
    title: "Admin that runs itself",
    body: "Inbox triage, follow-up scheduling, and routine messages handled around the clock — without clinician involvement.",
  },
];

export const operationsAutomationFeatures: FeatureGridItem[] = [
  {
    icon: FileText,
    title: "Visit note automation",
    body: "Draft clinical notes generated from the encounter and intake, ready for clinician review and sign-off.",
  },
  {
    icon: Sparkles,
    title: "Pre-visit chart prep",
    body: "Labs, history, medications, and open orders surfaced automatically before every appointment.",
  },
  {
    icon: Inbox,
    title: "After-hours inbox management",
    body: "Routine inbox items triaged and handled without pulling clinicians back to the screen.",
  },
  {
    icon: Cable,
    title: "EHR-native workflow",
    body: "Works inside your existing EHR — no new system, no double entry, no rip-and-replace.",
  },
];

export const operationsValuePoints: FeatureGridItem[] = [
  {
    icon: Clock,
    title: "Less time on the computer",
    body: "The busywork — notes, inbox, prep, scheduling — gets handled for your team.",
  },
  {
    icon: Sparkles,
    title: "Sharper at every visit",
    body: "Key labs, history, and guidance summarized in one place, ready before you walk in.",
  },
  {
    icon: Workflow,
    title: "Everything in one flow",
    body: "One shared patient view, so nothing gets re-entered or lost between steps.",
  },
];

export const operationsHurdles: string[] = [
  "Typing up visit notes",
  "Digging through records",
  "After-hours inbox triage",
  "Manual chart prep before each patient",
];

export const operationsHurdlesPayoff = "What's left is time with patients.";
