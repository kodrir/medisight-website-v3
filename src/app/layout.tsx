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
    default: "Medisight | Clinical Intelligence on Your EHR Data",
    template: "%s · Medisight",
  },
  description:
    "Medisight is a clinical intelligence layer on your existing EHR data. Cited diagnostic insights and workflow automation on one platform, with the clinician always in control.",
  keywords: [
    "clinical intelligence layer",
    "Epic FHIR integration",
    "clinical decision support",
    "ambient documentation",
    "personalized lab baselines",
    "healthcare AI",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Medisight",
    title: "Medisight | Clinical Intelligence on Your EHR Data",
    description:
      "Cited diagnostic insights and workflow automation, built on the EHR data your team already has.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medisight | Clinical Intelligence on Your EHR Data",
    description:
      "Cited diagnostic insights and workflow automation, built on the EHR data your team already has.",
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
