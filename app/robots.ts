import type { MetadataRoute } from "next"
import { site, absUrl } from "@/lib/config/site.config"

export const dynamic = "force-static"

/**
 * Robots policy:
 *  - All standard crawlers: allow everything except /thanks and /api.
 *  - AI training crawlers: governed by site.aiPolicy.allowTraining.
 *  - Citation-friendly AI (Perplexity, OAI-SearchBot) always allowed.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "Google-Extended",
    "ClaudeBot",
    "Claude-Web",
    "CCBot",
    "Applebot-Extended",
    "Bytespider",
    "anthropic-ai",
    "FacebookBot",
    "Amazonbot",
    "Bingbot",
  ]

  const citationBots = ["OAI-SearchBot", "PerplexityBot", "ChatGPT-User"]

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thanks", "/api/"],
      },
      ...citationBots.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/thanks", "/api/"],
      })),
      ...aiBots.map((ua) =>
        site.aiPolicy.allowTraining
          ? { userAgent: ua, allow: "/", disallow: ["/thanks", "/api/"] }
          : { userAgent: ua, disallow: "/" },
      ),
    ],
    sitemap: absUrl("/sitemap.xml"),
    host: site.url.replace(/^https?:\/\//, ""),
  }
}
