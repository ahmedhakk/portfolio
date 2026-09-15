import { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
