import Image from "next/image";

interface BrandMarkProps {
  className?: string;
  /** Pixel size of the square logo. */
  size?: number;
  title?: string;
}

/**
 * Medisight brand mark: the original eye logo (blue -> purple gradient).
 */
export function BrandMark({ className, size = 36, title = "Medisight" }: BrandMarkProps) {
  return (
    <Image
      src="/medisight-logo.png"
      alt={title}
      width={size}
      height={size}
      priority
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
