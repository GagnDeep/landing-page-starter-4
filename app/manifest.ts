import type { MetadataRoute } from "next"
import { site } from "@/lib/config/site.config"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: site.brand.paper,
    theme_color: site.brand.primary,
    orientation: "portrait",
    categories: ["business", "utilities", "lifestyle"],
    lang: site.defaultLocale,
    dir: "ltr",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
