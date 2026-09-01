export type OrgTone = "medisight" | "xai" | "openai" | "google" | "meta";

export interface MedAgentBenchEntry {
  rank: number;
  model: string;
  organization: string;
  organizationTone: OrgTone;
  accuracyLabel: string;
  accuracyValue: number;
  runDate: string;
  isMedisight?: boolean;
}

export const medAgentBenchEntries: MedAgentBenchEntry[] = [
  {
    rank: 0,
    model: "DeepSeek-V4-Flash",
    organization: "Medisight",
    organizationTone: "medisight",
    accuracyLabel: "99%+",
    accuracyValue: 99,
    runDate: "Aug 2026",
    isMedisight: true,
  },
  {
    rank: 2,
    model: "Grok 4.6",
    organization: "Medicalsphere",
    organizationTone: "xai",
    accuracyLabel: "95.9%",
    accuracyValue: 95.9,
    runDate: "Aug 17, 2026",
  },
  {
    rank: 3,
    model: "GPT-5.6 Sol",
    organization: "Medicalsphere",
    organizationTone: "openai",
    accuracyLabel: "94.7%",
    accuracyValue: 94.7,
    runDate: "Jul 17, 2026",
  },
  {
    rank: 4,
    model: "Grok 4.5",
    organization: "Medicalsphere",
    organizationTone: "xai",
    accuracyLabel: "93.4%",
    accuracyValue: 93.4,
    runDate: "Jul 8, 2026",
  },
];
