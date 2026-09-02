"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { DEMO_URL } from "@/lib/links";

const solutionsLinks = [
  {
    label: "Diagnostics",
    description: "Cited insights from the labs and records you already have",
    href: "/solutions/diagnostics",
  },
  {
    label: "Operations",
    description: "Less time on the computer, more time with patients",
    href: "/solutions/operations",
  },
];

const primaryLinks = [
  { label: "Trust & Security", href: "/trust" },
  { label: "Evidence", href: "/evidence" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav
        className="container-content relative grid h-16 grid-cols-[1fr_auto_1fr] items-center"
        aria-label="Primary"
      >
        <a
          href="/"
          className="flex items-center gap-2.5 justify-self-start"
          aria-label="Medisight home"
        >
          <BrandMark size={32} />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Medisight</span>
        </a>

        <ul className="hidden items-center gap-8 justify-self-center lg:flex">
          <li
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <ChevronDown
                size={15}
                strokeWidth={2}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-raised">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    By application
                  </p>
                  <ul>
                    {solutionsLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                        >
                          <span className="text-sm font-semibold text-slate-800">{link.label}</span>
                          <span className="mt-0.5 block text-xs text-slate-500">
                            {link.description}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {primaryLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 hidden items-center gap-3 justify-self-end lg:flex">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:from-primary-700 hover:to-accent-700"
          >
            Request a Demo
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>

        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 top-16 z-40 bg-slate-900/20 lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-raised lg:hidden">
              <ul className="flex flex-col p-2">
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                    aria-expanded={mobileSolutionsOpen}
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                  >
                    Solutions
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <ul className="mb-1 ml-2 border-l border-slate-200 pl-2">
                      {solutionsLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                <li className="mt-1 flex flex-col gap-2 border-t border-slate-100 px-1 pb-1 pt-2">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-2 text-center text-sm font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    Request a Demo
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
