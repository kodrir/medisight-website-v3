import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Users, Lock, BookOpen } from "lucide-react";

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const trustPoints: TrustPoint[] = [
  {
    icon: ShieldCheck,
    title: "Built under our HIPAA program",
    body: "Medisight operates under a documented HIPAA compliance program covering how PHI and PII are handled across our systems.",
  },
  {
    icon: Users,
    title: "Clinician always in the loop",
    body: "Every insight and draft is reviewed and signed off by your team before it reaches the chart. Medisight never acts unsupervised.",
  },
  {
    icon: Lock,
    title: "Access scoped to your organization",
    body: "Access to patient data is scoped to your organization and governed alongside your existing controls.",
  },
  {
    icon: BookOpen,
    title: "Research-backed",
    body: "Peer-reviewed models and a published research track record — not generic AI adapted for clinical use.",
  },
];

export interface DataFlowStep {
  title: string;
  body: string;
}

export const dataFlowSteps: DataFlowStep[] = [
  { title: "Connect", body: "Your Epic data connects over HL7/FHIR." },
  { title: "Analyze", body: "Medisight reads the record and drafts a cited insight." },
  { title: "Clinician reviews", body: "Your team checks the insight against its sources." },
  { title: "Sign-off", body: "Only after approval does it reach the chart." },
];
