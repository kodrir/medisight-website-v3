"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { DEMO_URL, SIGN_IN_URL } from "@/lib/links";

const links = [
  { label: "Agents", href: "/#agents" },
  { label: "Platform", href: "/#platform" },
  { label: "Results", href: "/results" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav
        className="container-content grid h-16 grid-cols-[1fr_auto_1fr] items-center"
        aria-label="Primary"
      >
        <a
          href="/"
          className="flex items-center gap-2.5 justify-self-start"
          aria-label="Medisight home"
        >
          <BrandMark size={32} />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Medisight
          </span>
        </a>

        <ul className="hidden items-center gap-8 justify-self-center md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 hidden items-center gap-3 justify-self-end md:flex">
          <a
            href={SIGN_IN_URL}
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Sign in
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:from-primary-700 hover:to-accent-700"
          >
            Request a Demo
          </a>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="container-content flex flex-col py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-2 pb-2">
              <a
                href={SIGN_IN_URL}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                Sign in
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Request a Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
