interface ClinicalDisclaimerProps {
  className?: string;
  /** When true, uses smaller text for inline placement under section intros. */
  compact?: boolean;
}

export function ClinicalDisclaimer({
  className = "",
  compact = false,
}: ClinicalDisclaimerProps) {
  return (
    <p
      className={`${compact ? "text-xs" : "text-sm"} leading-relaxed text-slate-500 ${className}`}
    >
      Medisight provides workflow automation and clinical decision-support tools for review by
      qualified professionals. Not FDA cleared or approved. Not intended to diagnose, treat, cure,
      or prevent any disease. AI outputs support, and do not replace, professional medical judgment.
    </p>
  );
}
