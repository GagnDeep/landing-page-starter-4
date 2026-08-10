import { MetadataRoute } from "next"
import { site } from "@/lib/site"

export const dynamic = "force-static"

const routes = [
  "",
  "/about",
  "/sam-registration",
  "/set-aside-certifications",
  "/set-aside-certifications/8a",
  "/set-aside-certifications/hubzone",
  "/set-aside-certifications/sdvosb",
  "/set-aside-certifications/wosb",
  "/gsa-schedules"
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
