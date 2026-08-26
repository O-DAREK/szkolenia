import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const BASE = "https://soc.dag.pl";

// Statyczny eksport — sitemap generuje się do out/sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/o-nas/", "/cennik/", "/faq/", "/kontakt/"];
  const coursePaths = courses.map((c) => `/kursy/${c.slug}/`);

  return [...staticPaths, ...coursePaths].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
