const partners = [
  { src: "/trust-logos/google.png", alt: "Google", variant: "default" },
  { src: "/trust-logos/caleo-biotechnologies.png", alt: "Caleo Biotechnologies", variant: "default" },
  {
    src: "/trust-logos/janelia-research-campus.png",
    alt: "Janelia Research Campus",
    variant: "mono",
  },
  { src: "/trust-logos/medicise.png", alt: "Medicise SA", variant: "medicise" },
  { src: "/trust-logos/glucolight.png", alt: "Glucolight", variant: "default" },
  {
    src: "/trust-logos/technology-digest.png",
    alt: "Technology Digest",
    variant: "mono",
  },
] as const;

const logoClass: Record<(typeof partners)[number]["variant"], string> = {
  default: "trust-logo",
  mono: "trust-logo trust-logo--mono",
  medicise: "trust-logo trust-logo--medicise",
};

function LogoItem({
  partner,
  decorative = false,
}: {
  partner: (typeof partners)[number];
  decorative?: boolean;
}) {
  return (
    <div className={decorative ? "trust-logos__item trust-logos__item--dup" : "trust-logos__item"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.src}
        alt={decorative ? "" : partner.alt}
        aria-hidden={decorative}
        className={logoClass[partner.variant]}
        loading="lazy"
        width={120}
        height={80}
      />
    </div>
  );
}

export function PartnerStrip() {
  return (
    <div className="trust-logos" aria-label="Research and pilot partners">
      <div className="trust-logos__track">
        {partners.map((partner) => (
          <LogoItem key={partner.src} partner={partner} />
        ))}
        {partners.map((partner) => (
          <LogoItem key={`${partner.src}-dup`} partner={partner} decorative />
        ))}
      </div>
    </div>
  );
}
