interface ClinicalDisclaimerProps {
  className?: string;
  /** When true, uses smaller text for inline placement under section intros. */
  compact?: boolean;
}

export function InvestigationalBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-800 ${className}`}
    >
      Investigational · Research use only
    </span>
  );
}

export function ClinicalDisclaimer({
  className = "",
  compact = false,
}: ClinicalDisclaimerProps) {
  return (
    <p
      className={`${compact ? "text-xs" : "text-sm"} leading-relaxed text-slate-500 ${className}`}
    >
      Medisight is investigational software intended for research use. Not FDA cleared or approved.
      Not intended to diagnose, treat, cure, or prevent any disease. All outputs require review by
      qualified healthcare professionals and do not replace professional medical judgment.
    </p>
  );
}
