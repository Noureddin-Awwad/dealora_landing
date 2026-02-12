import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dealoraapp.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://dealoraapp.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: "https://dealoraapp.com/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}

