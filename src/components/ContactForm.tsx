"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Role = "Clinician" | "Operations" | "IT & Security" | "Procurement";

const roles: { id: Role; label: string; note: string }[] = [
  {
    id: "Clinician",
    label: "Clinician",
    note: "We'll walk through exactly what a shift with Medisight looks like.",
  },
  {
    id: "Operations",
    label: "Operations",
    note: "We'll map admin time saved to your team's own numbers.",
  },
  {
    id: "IT & Security",
    label: "IT & Security",
    note: "We'll bring our security and integration documentation to the call.",
  },
  {
    id: "Procurement",
    label: "Procurement",
    note: "We'll come prepared with pricing, contracts, and rollout timelines.",
  },
];

function encodeForm(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function ContactForm() {
  const [role, setRole] = useState<Role>("Clinician");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const activeRole = roles.find((r) => r.id === role);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(payload),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
      setRole("Clinician");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-card">
        <CheckCircle2 size={32} strokeWidth={1.75} className="text-emerald-600" aria-hidden />
        <h2 className="text-lg font-semibold text-slate-900">Thanks — we&apos;ll be in touch</h2>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          Your message has been sent to our team. We typically respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="organization" className="text-sm font-semibold text-slate-700">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <span className="text-sm font-semibold text-slate-700">I&apos;m reaching out as a...</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              aria-pressed={role === r.id}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                role === r.id
                  ? "border-primary-600 bg-primary-50 text-primary-700"
                  : "border-slate-300 text-slate-600 hover:border-slate-400"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="role" value={role} />
        {activeRole && (
          <p className="mt-2.5 text-xs leading-relaxed text-slate-500">{activeRole.note}</p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:from-primary-700 hover:to-accent-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        <ArrowRight size={18} strokeWidth={1.75} />
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please email us directly at contact@medisight.ai.
        </p>
      )}
    </form>
  );
}
