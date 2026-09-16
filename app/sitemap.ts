import type { MetadataRoute } from "next";
import { siteUrl, teamMembers } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    ...teamMembers.map(({ slug }) => ({
      path: `/team/${slug}`,
      priority: 0.8,
    })),
  ];
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
