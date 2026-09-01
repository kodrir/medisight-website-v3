import type { LucideIcon } from "lucide-react";

/**
 * Marker for figures that are not yet substantiated. The UI renders these in a
 * muted, obviously-placeholder style so nothing ships as a real, unbacked claim.
 */
export const FIGURE_PLACEHOLDER = "[ADD FIGURE]";

export function isPlaceholder(value: string): boolean {
  return value.trim() === FIGURE_PLACEHOLDER;
}

export interface ProofMetric {
  /** Headline figure, e.g. "40%" or the placeholder marker. */
  value: string;
  label: string;
  /** Short qualifier that keeps the claim honest and non-clinical. */
  note: string;
  icon: LucideIcon;
}
