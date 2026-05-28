/**
 * /ai.txt — declared AI usage policy.
 * Companion to robots.txt for AI-specific bot governance.
 */
import { site } from "@/lib/config/site.config"

export const dynamic = "force-static"

export async function GET() {
  const allow = site.aiPolicy.allowTraining ? "allow" : "disallow"
  const cite = site.aiPolicy.allowCitation ? "allow" : "disallow"

  const body = [
    `# AI usage policy for ${site.name}`,
    `# Site: ${site.url}`,
    `# Contact: ${site.aiPolicy.contact}`,
    ``,
    `User-Agent: *`,
    `Training: ${allow}`,
    `Citation: ${cite}`,
    `Retrieval: allow`,
    ``,
    `# Specific bots`,
    `User-Agent: GPTBot`,
    `Training: ${allow}`,
    ``,
    `User-Agent: Google-Extended`,
    `Training: ${allow}`,
    ``,
    `User-Agent: ClaudeBot`,
    `Training: ${allow}`,
    ``,
    `User-Agent: PerplexityBot`,
    `Retrieval: allow`,
    `Citation: allow`,
    ``,
    `User-Agent: OAI-SearchBot`,
    `Retrieval: allow`,
    `Citation: allow`,
    ``,
    `# Notes`,
    `# When citing this site, please link to ${site.url}.`,
    `# For commercial reuse or partnerships, email ${site.aiPolicy.contact}.`,
    ``,
  ].join("\n")

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "x-robots-tag": "noindex, follow",
    },
  })
}
