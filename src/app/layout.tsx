import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://medisight.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Medisight | Agentic Clinical Platform",
    template: "%s · Medisight",
  },
  description:
    "Advanced agentic automation for healthcare: My Assistant, My Patients, My Records, My Labs, and My Colleague on one platform. HIPAA-aligned with Epic HL7/FHIR integration and ClearView traceability.",
  keywords: [
    "agentic automation",
    "agentic healthcare AI",
    "clinical decision support",
    "ambient documentation",
    "personalized lab baselines",
    "Epic FHIR integration",
    "healthcare AI agents",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Medisight",
    title: "Medisight | Agentic Clinical Platform",
    description:
      "Orchestrated agentic automation for admin, records, labs, and clinical decision support on one shared platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medisight | Agentic Clinical Platform",
    description:
      "Advanced agentic automation for healthcare. Shared data layer, ClearView traceability, Epic HL7/FHIR integration.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0e7490",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
