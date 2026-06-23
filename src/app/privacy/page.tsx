import type { Metadata } from "next";
import {
  LegalContactBox,
  LegalLink,
  LegalSection,
  LegalSummary,
  LegalToc,
} from "@/components/legal/LegalBlocks";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import {
  LEGAL_COMPANY,
  LEGAL_CONTACT_EMAIL,
  LEGAL_PLATFORM_URL,
  LEGAL_WEBSITE,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Medisight collects, uses, and protects personal information across our website and clinical AI platform.",
  robots: { index: false, follow: true },
};

const toc = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Your Information" },
  { id: "how-we-share-information", label: "How We Share Your Information" },
  { id: "cookies-and-tracking", label: "Cookies and Tracking Technologies" },
  { id: "data-retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "your-rights", label: "Your Privacy Rights" },
  { id: "health-data", label: "Health Data Notice" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageShell label="Legal" title="Privacy Policy">
      <LegalSummary>
        <p>
          This Privacy Policy explains how {LEGAL_COMPANY} (&quot;Medisight,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects personal
          information when you use our website at{" "}
          <LegalLink href={LEGAL_WEBSITE}>medisight.ai</LegalLink> and our clinical AI platform at{" "}
          <LegalLink href={LEGAL_PLATFORM_URL} external>
            platform.medisight.ai
          </LegalLink>{" "}
          (collectively, the &quot;Services&quot;). By using the Services, you agree to the
          practices described in this policy.
        </p>
      </LegalSummary>

      <LegalToc items={toc} />

      <LegalSection id="information-we-collect" title="1. Information We Collect">
        <p>We collect the following categories of personal information:</p>
        <p>
          <strong>Information you provide directly:</strong>
        </p>
        <ul>
          <li>
            <strong>Identifiers:</strong> Name, email address, organization, and professional
            role, when you contact us or create an account.
          </li>
          <li>
            <strong>Account credentials:</strong> If you sign in with a third-party identity
            provider (such as Google), we receive profile information permitted by that provider.
            We do not receive your third-party password.
          </li>
          <li>
            <strong>Communications:</strong> Messages, demo requests, support inquiries, and other
            information you send us.
          </li>
        </ul>
        <p>
          <strong>Information collected automatically:</strong>
        </p>
        <ul>
          <li>
            <strong>Usage data:</strong> Pages visited, features accessed, interaction data, and
            general product usage patterns.
          </li>
          <li>
            <strong>Device and technical data:</strong> IP address, browser type, operating
            system, device identifiers, and referring URLs.
          </li>
          <li>
            <strong>Analytics data:</strong> Aggregated behavioral data collected through analytics
            tools, where enabled.
          </li>
        </ul>
        <p>
          <strong>Information from third parties:</strong>
        </p>
        <ul>
          <li>
            <strong>Identity providers:</strong> Authentication and profile data from providers you
            choose to use.
          </li>
          <li>
            <strong>Calendly:</strong> If you schedule a demo, scheduling information is processed
            by Calendly under its own privacy policy.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use-information" title="2. How We Use Your Information">
        <p>We use personal information to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Services.</li>
          <li>Create and manage accounts and authenticate users.</li>
          <li>Respond to inquiries, demo requests, and support needs.</li>
          <li>Send service-related notices, security alerts, and policy updates.</li>
          <li>
            Send optional marketing communications where permitted by law and where you have
            consented, when applicable.
          </li>
          <li>Analyze usage to improve performance, reliability, and user experience.</li>
          <li>Detect, investigate, and prevent fraud, abuse, or unauthorized activity.</li>
          <li>Comply with legal obligations and enforce our agreements.</li>
        </ul>
        <p>
          Where required by applicable law, we rely on appropriate legal bases such as contract
          performance, legitimate interests, legal obligation, and consent.
        </p>
      </LegalSection>

      <LegalSection id="how-we-share-information" title="3. How We Share Your Information">
        <p>
          We do not sell your personal information. We share personal information only as described
          below:
        </p>
        <ul>
          <li>
            <strong>Service providers:</strong> Vendors that process data on our behalf (for
            example, hosting, email, analytics, and customer support), subject to contractual
            obligations.
          </li>
          <li>
            <strong>Third-party integrations:</strong> Providers you choose to use with the
            Services, such as identity providers or scheduling tools.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger, acquisition,
            financing, or sale of assets, subject to appropriate notice where required.
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by law, regulation, legal process, or
            to protect rights, safety, and security.
          </li>
          <li>
            <strong>With your consent:</strong> For any other purpose disclosed at the time of
            collection.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies-and-tracking" title="4. Cookies and Tracking Technologies">
        <p>
          We use cookies and similar technologies to operate the Services, remember preferences,
          and understand how the Services are used. These may include:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Required for core functionality, such as
            authentication.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Used to collect aggregated usage statistics where
            enabled.
          </li>
          <li>
            <strong>Preference cookies:</strong> Used to remember settings across sessions.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling essential cookies may
          affect how parts of the Services function. Where required, we will request consent before
          placing non-essential cookies.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="5. Data Retention">
        <p>
          We retain personal information for as long as needed to provide the Services, comply with
          legal obligations, resolve disputes, and enforce our agreements. When you delete your
          account or request deletion, we will delete or anonymize personal information within a
          reasonable period, unless a longer retention period is required by law.
        </p>
        <p>
          Aggregated or de-identified data may be retained for analytics, security, and product
          improvement purposes.
        </p>
      </LegalSection>

      <LegalSection id="security" title="6. Security">
        <p>
          We implement administrative, technical, and organizational safeguards designed to protect
          personal information against unauthorized access, disclosure, alteration, or destruction.
          These measures may include encryption in transit, access controls, and security
          monitoring.
        </p>
        <p>
          No method of transmission or storage is completely secure. If we become aware of a data
          breach affecting your personal information, we will notify you as required by applicable
          law.
        </p>
      </LegalSection>

      <LegalSection id="childrens-privacy" title="7. Children's Privacy">
        <p>
          The Services are not directed to individuals under 18. We do not knowingly collect
          personal information from anyone under 18. If you believe we have collected information
          from a minor, contact us at{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink> and
          we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="8. Your Privacy Rights">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, restrict, or
          object to certain processing of your personal information, and to receive a portable copy
          of your data. You may also have the right to withdraw consent where processing is based on
          consent, and to lodge a complaint with a supervisory authority.
        </p>
        <p>
          California residents may have additional rights under applicable state privacy laws,
          including the right to know, delete, correct, and limit use of sensitive personal
          information. We do not sell personal information for cross-context behavioral advertising.
        </p>
        <p>
          To exercise your rights, email{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink>. We
          may need to verify your identity before processing a request.
        </p>
      </LegalSection>

      <LegalSection id="health-data" title="9. Health Data Notice">
        <p>
          The Services may process health-related or clinical information submitted by authorized
          users or their organizations, such as laboratory results, documentation, or workflow data.
          This information may be treated as sensitive personal information under applicable law.
        </p>
        <p>
          Medisight is a clinical decision-support and analytics platform. It is not intended to
          diagnose, treat, cure, or prevent any disease, and it does not replace professional
          medical judgment. Outputs are intended for review by qualified healthcare professionals.
        </p>
        <p>
          Organizational customers may have separate agreements governing protected health
          information. Where Medisight acts as a business associate or subprocessors are involved,
          processing will be governed by applicable contractual terms in addition to this policy.
        </p>
      </LegalSection>

      <LegalSection id="international-transfers" title="10. International Data Transfers">
        <p>
          Medisight is based in the United States. If you access the Services from outside the United
          States, your information may be transferred to, stored in, and processed in the United
          States or other countries where we or our service providers operate.
        </p>
        <p>
          Where required, we use appropriate safeguards for international transfers, such as
          Standard Contractual Clauses or equivalent mechanisms.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we
          will update the date at the top of this page and, where required, provide additional
          notice. Your continued use of the Services after an update becomes effective constitutes
          acceptance of the revised policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact Us">
        <p>
          Questions about this Privacy Policy or our data practices may be sent to{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink>.
        </p>
        <p>
          For privacy rights requests, include &quot;Privacy Request&quot; in the subject line and
          enough information for us to verify your identity.
        </p>
      </LegalSection>

      <LegalContactBox title="Questions about your privacy?" />
    </LegalPageShell>
  );
}
