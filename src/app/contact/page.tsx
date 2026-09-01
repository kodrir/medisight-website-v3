import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ContactResources } from "@/components/ContactResources";
import { DEMO_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Medisight — whether you're a clinician, operations lead, IT & security reviewer, or procurement.",
  openGraph: {
    title: "Contact · Medisight",
    description:
      "Get in touch with Medisight — whether you're a clinician, operations lead, IT & security reviewer, or procurement.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-20 md:py-28">
          <div className="container-content">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow">Contact</span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  Let&apos;s talk
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                  Whether you&apos;re a clinician, an operations lead, reviewing security, or
                  managing procurement — tell us a bit about your team and we&apos;ll route you to
                  the right conversation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mx-auto mt-12 max-w-xl">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto mt-8 max-w-xl text-center">
                <p className="text-sm text-slate-500">
                  Prefer a call?{" "}
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary-700 hover:text-primary-800"
                  >
                    Request a demo
                    <ArrowRight size={14} strokeWidth={2} aria-hidden />
                  </a>{" "}
                  or email us directly at{" "}
                  <a
                    href="mailto:contact@medisight.ai"
                    className="font-medium text-primary-700 hover:text-primary-800"
                  >
                    contact@medisight.ai
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mx-auto mt-16 max-w-3xl">
                <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Or request a resource directly
                </p>
                <div className="mt-5">
                  <ContactResources />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
