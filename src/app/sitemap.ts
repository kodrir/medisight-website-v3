import type { MetadataRoute } from "next";

const SITE_URL = "https://medisight.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/solutions/diagnostics`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions/operations`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/evidence`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/trust`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
