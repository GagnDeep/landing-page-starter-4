/**
 * RSS 2.0 feed for the journal.
 *
 * Referenced from the root metadata `alternates.types['application/rss+xml']`
 * so feed readers and AI ingestion tools can discover the canonical blog
 * stream without scraping the HTML index. Validates against the W3C feed
 * validator with strict 0 warnings.
 */
import { site, absUrl } from "@/lib/config/site.config"
import { posts } from "@/content/posts"
import { plainText } from "@/components/blog/parse-body"

export const dynamic = "force-static"

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function rfc822(iso: string) {
  const d = new Date(iso + "T00:00:00Z")
  if (Number.isNaN(d.getTime())) return new Date().toUTCString()
  return d.toUTCString()
}

export async function GET() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
  const latest = sorted[0]?.updated ?? sorted[0]?.date ?? new Date().toISOString().slice(0, 10)
  const feedUrl = absUrl("/blog/rss.xml")
  const channelTitle = `${site.name} Journal`
  const channelDescription = `Long-form notes on rooftop solar in ${site.copy.regionName}: ${site.incentive.short} walkthroughs, NEM 3.0 economics, battery payback, install field notes.`

  const items = sorted
    .map((p) => {
      const url = absUrl(`/blog/${p.slug}/`)
      const fullText = plainText(p.body).slice(0, 1200)
      const categoryXml = p.category
        ? `      <category><![CDATA[${p.category}]]></category>\n`
        : ""
      const enclosure = p.image
        ? `      <enclosure url="${absUrl(p.image)}" type="image/jpeg" length="0"/>\n`
        : ""
      const keywords = p.keywords?.length
        ? `      <media:keywords xmlns:media="http://search.yahoo.com/mrss/">${escapeXml(p.keywords.join(", "))}</media:keywords>\n`
        : ""
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/"><![CDATA[${p.author}]]></dc:creator>
${categoryXml}      <description><![CDATA[${p.excerpt}]]></description>
      <content:encoded xmlns:content="http://purl.org/rss/1.0/modules/content/"><![CDATA[${fullText}]]></content:encoded>
${enclosure}${keywords}    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${absUrl("/blog/")}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(channelDescription)}</description>
    <language>${site.hreflang.primary}</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(site.legalName)}</copyright>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
    <generator>Next.js ${site.name} feed builder</generator>
    <ttl>60</ttl>
    <image>
      <url>${absUrl(site.ogImage)}</url>
      <title>${escapeXml(channelTitle)}</title>
      <link>${absUrl("/blog/")}</link>
    </image>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
