import type { MetadataRoute } from "next";
import { team } from "@/data/team";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { allAreas } from "@/data/areas";

const BASE_URL = "https://www.montecchiaperformancecenter.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pagine statiche principali
  const staticPages: MetadataRoute.Sitemap = [
    {
      // Senza slash finale: Next normalizza il canonical della home a
      // questa forma, e sitemap e canonical devono indicare la stessa
      // URL o Google le considera due pagine.
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Le quattro aree: lette da data/areas.ts, così una rinomina non
    // lascia indietro la sitemap.
    ...allAreas.map((a) => ({
      url: `${BASE_URL}${a.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${BASE_URL}/servizi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/chi-siamo`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contatti`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pagine team individuali
  const teamPages: MetadataRoute.Sitemap = team.map((m) => ({
    url: `${BASE_URL}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Pagine servizi individuali
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/servizi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Articoli blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...teamPages, ...servicePages, ...blogPages];
}
