import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alterlaboratory.com",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": "https://alterlaboratory.com",
          en: "https://alterlaboratory.com/en",
        },
      },
    },
    {
      url: "https://alterlaboratory.com/en",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "pt-BR": "https://alterlaboratory.com",
          en: "https://alterlaboratory.com/en",
        },
      },
    },
    {
      url: "https://alterlaboratory.com/skinos",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "pt-BR": "https://alterlaboratory.com/skinos",
          en: "https://alterlaboratory.com/en/skinos",
        },
      },
    },
    {
      url: "https://alterlaboratory.com/en/skinos",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "pt-BR": "https://alterlaboratory.com/skinos",
          en: "https://alterlaboratory.com/en/skinos",
        },
      },
    },
  ];
}
