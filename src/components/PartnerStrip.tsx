interface Partner {
  src: string;
  alt: string;
  variant: "default" | "mono" | "medicise" | "onyx" | "caleo";
  label?: string;
}

const partners: Partner[] = [
  { src: "/trust-logos/caleo-biotechnologies.png", alt: "Caleo Biotechnologies", variant: "caleo" },
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
  {
    src: "/trust-logos/onyx-biopartners.png",
    alt: "Onyx Biopartners",
    variant: "onyx",
    label: "Onyx Biopartners",
  },
];

const logoClass: Record<Partner["variant"], string> = {
  default: "trust-logo",
  mono: "trust-logo trust-logo--mono",
  medicise: "trust-logo trust-logo--medicise",
  onyx: "trust-logo trust-logo--onyx",
  caleo: "trust-logo trust-logo--caleo",
};

function LogoItem({
  partner,
  decorative = false,
}: {
  partner: Partner;
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
      {partner.label ? (
        <span className="trust-logos__label trust-logos__label--onyx" aria-hidden={decorative}>
          {partner.label}
        </span>
      ) : null}
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
