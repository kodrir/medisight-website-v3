import {
  Bot,
  FlaskConical,
  Users,
  Brain,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface Capability {
  term: string;
  desc: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  valueProp: string;
  icon: LucideIcon;
  /** Accent hex, applied via the --accent CSS variable on each card. */
  accent: string;
  accentName: string;
  capabilities: Capability[];
}

export const agents: Agent[] = [
  {
    id: "assistant",
    name: "My Assistant",
    role: "Administrative AI agent",
    valueProp:
      "A proactive, always-on executive assistant for healthcare professionals. Manages email, scheduling, and ambient documentation so providers can focus on patient care rather than logistics.",
    icon: Bot,
    accent: "#00BFFF",
    accentName: "brand blue",
    capabilities: [
      {
        term: "Email intelligence",
        desc: "AI-driven triage, drafting, and response management with priority sorting and auto-drafted replies.",
      },
      {
        term: "Calendar & schedule",
        desc: "Intelligent scheduling that respects clinical urgency, provider availability, and patient preference, with waitlist and conflict handling.",
      },
      {
        term: "Listening for notes",
        desc: "Ambient capture of clinical encounters with real-time transcription and structured SOAP notes for review before charting.",
      },
      {
        term: "Queueing service",
        desc: "Kafka-backed event processing for reliable async workflows, audit trails, and scale under high-volume clinic loads.",
      },
    ],
  },
  {
    id: "patients",
    name: "My Patients",
    role: "Patient hub",
    valueProp:
      "Hosts all patient-specific information in one place, including My Records and My Labs. Select an upcoming patient and move straight into the chart summary, record search, or lab view you need.",
    icon: Users,
    accent: "#3B82F6",
    accentName: "blue",
    capabilities: [
      {
        term: "Patient selection",
        desc: "Upcoming patient list and name search to open the right chart quickly.",
      },
      {
        term: "Lab and record views",
        desc: "Choose between personalized lab insights and searchable clinical records for the same patient.",
      },
      {
        term: "Pre-visit brief",
        desc: "A one-page \"What You Need to Know\" summary: reason for visit, relevant history, labs flagged for review, medications, and items for clinician follow-up.",
      },
    ],
  },
  {
    id: "records",
    name: "My Records",
    role: "Documentation and retrieval",
    valueProp:
      "The intelligent bridge between legacy medical records and organized clinical context, turning fragmented histories into a structured, editable, and searchable longitudinal narrative.",
    icon: FileText,
    accent: "#10B981",
    accentName: "teal",
    capabilities: [
      {
        term: "Smart chart summary",
        desc: "Automated longitudinal overviews from historical data, fully editable and updated after each encounter.",
      },
      {
        term: "Contextual RAG search",
        desc: "Natural-language search across the full record with instant jump-to-source links in original documentation.",
      },
      {
        term: "EHR enrichment",
        desc: "Shared data layer that syncs new encounter data in real time and keeps the chart summary current across agents.",
      },
      {
        term: "Information discovery",
        desc: "Surfaces historical trends and links prior documented findings to current chart context for clinician review.",
      },
    ],
  },
  {
    id: "labs",
    name: "My Labs",
    role: "Lab triage and review support",
    valueProp:
      "Organizes routine lab data against each patient's longitudinal biomarker history, using personalized baselines instead of population ranges alone for clinician review.",
    icon: FlaskConical,
    accent: "#2D9CFF",
    accentName: "azure",
    capabilities: [
      {
        term: "Literature-informed models",
        desc: "Analysis pathways grounded in published clinical literature for common chronic-care lab panels, surfaced for clinician review.",
      },
      {
        term: "Advanced insights",
        desc: "Trend analysis, trajectory views, and deviation highlighting against a patient's personal baseline rather than generic normal ranges.",
      },
      {
        term: "Personalized baselines",
        desc: "Longitudinal biomarker tracking built from patient history and documented clinical context where available.",
      },
      {
        term: "Automated processing",
        desc: "New results from EHR integration organized automatically, with deviations and trajectory indicators queued for clinician review.",
      },
    ],
  },
  {
    id: "colleague",
    name: "My Colleague",
    role: "Evidence-based consult support",
    valueProp:
      "Literature-grounded reference support mapped to institutional guidelines and the patient's chart context. Outputs are for qualified clinicians to review, not standalone medical advice.",
    icon: Brain,
    accent: "#6366F1",
    accentName: "indigo",
    capabilities: [
      {
        term: "Protocol and guideline support",
        desc: "Evidence-based references tailored to presentation, with structured considerations, test options, and escalation criteria for clinician review.",
      },
      {
        term: "Knowledge synthesis",
        desc: "TORAG-powered literature retrieval with citation-grounded references and institutional knowledge integration.",
      },
      {
        term: "ClearView traceability",
        desc: "Every output linked to the sources behind it so clinicians can verify the evidence base before acting.",
      },
    ],
  },
];
