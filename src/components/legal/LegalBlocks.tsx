import Link from "next/link";
import type { ReactNode } from "react";

export interface TocItem {
  id: string;
  label: string;
}

export function LegalSummary({ children }: { children: ReactNode }) {
  return (
    <div className="legal-callout legal-callout-blue">
      <p className="legal-callout-label">Summary</p>
      <div className="legal-prose">{children}</div>
    </div>
  );
}

export function LegalNotice({ children }: { children: ReactNode }) {
  return (
    <div className="legal-callout legal-callout-amber">
      <p className="legal-callout-label">Important</p>
      <div className="legal-prose">{children}</div>
    </div>
  );
}

export function LegalToc({ items }: { items: TocItem[] }) {
  return (
    <nav className="legal-toc" aria-label="Table of contents">
      <p className="legal-toc-title">Contents</p>
      <ol className="legal-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="legal-section scroll-mt-24">
      <h2>{title}</h2>
      <div className="legal-prose">{children}</div>
    </section>
  );
}

export function LegalContactBox({ title }: { title: string }) {
  return (
    <div className="legal-contact-box">
      <h3>{title}</h3>
      <p>Our team typically responds within 2 business days.</p>
      <a href="mailto:contact@medisight.ai">Email contact@medisight.ai</a>
    </div>
  );
}

export function LegalLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
}
