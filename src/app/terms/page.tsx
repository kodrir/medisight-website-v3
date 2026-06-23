import type { Metadata } from "next";
import {
  LegalContactBox,
  LegalLink,
  LegalNotice,
  LegalSection,
  LegalToc,
} from "@/components/legal/LegalBlocks";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LEGAL_COMPANY, LEGAL_CONTACT_EMAIL, LEGAL_PLATFORM_URL, LEGAL_WEBSITE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing use of the Medisight website and clinical AI platform.",
  robots: { index: false, follow: true },
};

const toc = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "description", label: "Description of Services" },
  { id: "accounts", label: "Accounts and Registration" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "clinical-disclaimer", label: "Clinical and Medical Disclaimer" },
  { id: "ai-limitations", label: "AI Limitations and Accuracy" },
  { id: "user-content", label: "User Content and Data" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "fees", label: "Fees and Payment" },
  { id: "termination", label: "Termination" },
  { id: "disclaimers", label: "Disclaimers of Warranty" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing Law and Disputes" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPageShell label="Legal" title="Terms of Service">
      <LegalNotice>
        <p>
          <strong>Please read these Terms carefully before using Medisight.</strong> By accessing
          or using our website at medisight.ai or our platform at platform.medisight.ai (the
          &quot;Services&quot;), you agree to be bound by these Terms of Service
          (&quot;Terms&quot;). If you do not agree, do not use the Services.
        </p>
        <p>
          <strong>Clinical disclaimer:</strong> Medisight provides clinical decision-support and
          analytics tools. The Services are not intended to diagnose, treat, cure, or prevent any
          disease or medical condition, and they do not replace professional medical judgment.
        </p>
      </LegalNotice>

      <LegalToc items={toc} />

      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <p>
          These Terms are a binding agreement between you (&quot;User,&quot; &quot;you,&quot; or
          &quot;your&quot;) and {LEGAL_COMPANY} (&quot;Medisight,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By creating an account, signing in, scheduling a
          demo, or otherwise using the Services, you confirm that you have read, understood, and
          agree to these Terms and our{" "}
          <LegalLink href="/privacy">Privacy Policy</LegalLink>, which is incorporated by reference.
        </p>
        <p>
          If you use the Services on behalf of an organization, you represent that you have authority
          to bind that organization to these Terms.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Eligibility">
        <p>
          You must be at least 18 years old to use the Services. By using the Services, you
          represent that you meet this requirement and have the legal capacity to enter into a
          binding agreement.
        </p>
        <p>
          The Services are intended for qualified healthcare professionals, health systems, and
          authorized business users. You are responsible for ensuring your use complies with
          applicable laws and professional obligations in your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="description" title="3. Description of Services">
        <p>
          Medisight provides a clinical AI platform with specialized agents for workflows such as
          documentation support, lab intelligence, patient summarization, coding support, and
          compliance monitoring. The Services may include analytics, workflow automation, audit
          trails, and integrations with third-party systems.
        </p>
        <p>
          We may modify, suspend, or discontinue any part of the Services at any time. We are not
          liable for any modification, suspension, or discontinuation of the Services.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="4. Accounts and Registration">
        <p>
          Access to certain features requires an account. You may authenticate through methods we
          support, including third-party identity providers. You are responsible for maintaining the
          confidentiality of your account and for all activity under it.
        </p>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and current registration information.</li>
          <li>Promptly update account information when it changes.</li>
          <li>
            Notify us at{" "}
            <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink> if
            you suspect unauthorized access.
          </li>
          <li>Not share your account credentials or misrepresent your identity.</li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these Terms or pose a security or legal
          risk.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="5. Acceptable Use">
        <p>You agree to use the Services only for lawful purposes. You agree not to:</p>
        <ul>
          <li>
            Use the Services as a substitute for independent professional judgment where such
            judgment is required.
          </li>
          <li>Submit false, misleading, unauthorized, or unlawful data or content.</li>
          <li>
            Reverse engineer, scrape, or attempt to extract source code, models, or underlying
            systems except as permitted by law.
          </li>
          <li>
            Use the Services to develop or train a competing product without our written consent.
          </li>
          <li>Interfere with the security, integrity, or availability of the Services.</li>
          <li>Violate applicable privacy, healthcare, or professional regulations.</li>
        </ul>
      </LegalSection>

      <LegalSection id="clinical-disclaimer" title="6. Clinical and Medical Disclaimer">
        <p>
          Medisight supports clinical workflows but does not provide medical advice, diagnosis, or
          treatment. All outputs are intended for review by qualified healthcare professionals who
          remain responsible for clinical decisions.
        </p>
        <p>
          Do not use the Services in emergencies. If you believe you are experiencing a medical
          emergency, contact local emergency services immediately.
        </p>
        <p>
          Medisight does not guarantee that any output is complete, accurate, or current. Clinical
          information should always be interpreted in the context of the full patient record and
          applicable standards of care.
        </p>
      </LegalSection>

      <LegalSection id="ai-limitations" title="7. AI Limitations and Accuracy">
        <p>The Services use artificial intelligence and machine learning. You acknowledge that:</p>
        <ul>
          <li>AI-generated outputs may contain errors, omissions, or outdated information.</li>
          <li>Output quality depends on the completeness and accuracy of input data.</li>
          <li>Models may not reflect the most recent medical literature or local protocols.</li>
          <li>No AI system can replace the judgment of a qualified clinician or care team.</li>
        </ul>
      </LegalSection>

      <LegalSection id="user-content" title="8. User Content and Data">
        <p>
          You retain ownership of content and data you submit to the Services (&quot;User
          Content&quot;), subject to any rights of patients, employers, or other third parties.
        </p>
        <p>
          You grant Medisight a limited license to host, process, and analyze User Content solely
          to provide, secure, and improve the Services, in accordance with our{" "}
          <LegalLink href="/privacy">Privacy Policy</LegalLink> and any applicable enterprise
          agreement.
        </p>
        <p>
          You represent that you have the rights and permissions needed to submit User Content and
          that doing so does not violate applicable law or third-party rights.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="9. Intellectual Property">
        <p>
          The Services, including software, models, branding, design, documentation, and other
          materials, are owned by Medisight or its licensors and are protected by intellectual
          property laws.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to access and
          use the Services in accordance with these Terms. You may not copy, modify, distribute,
          sell, or create derivative works from the Services except as expressly permitted.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="10. Third-Party Services">
        <p>
          The Services may integrate with or link to third-party services, including identity
          providers, scheduling tools, analytics providers, and EHR or lab systems. Your use of
          third-party services is governed by their own terms and privacy policies.
        </p>
        <p>
          We are not responsible for third-party services and do not endorse them unless expressly
          stated.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="11. Fees and Payment">
        <p>
          Some features may require a paid subscription or enterprise agreement. Fees, billing
          cycles, and payment terms will be described at purchase or in your order form.
        </p>
        <p>
          Unless otherwise stated in writing or required by law, fees are non-refundable. Failure to
          pay may result in suspension of paid features.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="12. Termination">
        <p>
          You may stop using the Services at any time. You may request account closure by contacting{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink>.
        </p>
        <p>
          We may suspend or terminate access if you violate these Terms, create risk for other
          users, or as required by law. Provisions that by their nature should survive termination
          will survive, including disclaimers, limitations of liability, and indemnification.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="13. Disclaimers of Warranty">
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
          OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Services will be uninterrupted, error-free, secure, or that any
          output will be accurate or suitable for any clinical purpose.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="14. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDISIGHT AND ITS AFFILIATES, OFFICERS, EMPLOYEES,
          AGENTS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR
          BUSINESS OPPORTUNITY.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDISIGHT&apos;S TOTAL LIABILITY FOR ANY CLAIM
          ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF
          (A) THE AMOUNT YOU PAID TO MEDISIGHT IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE
          HUNDRED U.S. DOLLARS ($100).
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="15. Indemnification">
        <p>
          You agree to defend, indemnify, and hold harmless Medisight from claims, damages, losses,
          and expenses (including reasonable attorneys&apos; fees) arising out of your use of the
          Services, your User Content, your violation of these Terms, or your violation of applicable
          law.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="16. Governing Law and Disputes">
        <p>
          These Terms are governed by the laws of the United States, without regard to conflict of law
          principles, except where mandatory local law requires otherwise.
        </p>
        <p>
          Before initiating formal proceedings, you agree to contact us at{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink> and
          allow a reasonable period to resolve the dispute informally.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="17. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we make material changes, we will update
          the date at the top of this page and, where appropriate, provide additional notice. Your
          continued use of the Services after changes become effective constitutes acceptance of the
          revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="18. Contact">
        <p>
          Questions about these Terms may be sent to{" "}
          <LegalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</LegalLink> or
          submitted through{" "}
          <LegalLink href={LEGAL_WEBSITE}>medisight.ai</LegalLink>.
        </p>
      </LegalSection>

      <LegalContactBox title="Questions about these Terms?" />
    </LegalPageShell>
  );
}
