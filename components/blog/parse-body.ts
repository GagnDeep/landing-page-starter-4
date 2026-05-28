/**
 * Blog body parser.
 * --------------------------------------------------------------
 * `MarketPost.body` is a plain string that mixes a slim markdown
 * subset (h2/h3/lists/bold/links) with `:::name ...` fenced widget
 * blocks. This parser tokenises the body into a flat AST that
 * `BlogBody` walks to render.
 *
 * Syntax:
 *   ## Heading                  → h2
 *   ### Subheading              → h3
 *   - item                      → ul
 *   1. item                     → ol
 *   :::name key="val" k2=v2     ← opens a widget
 *   …content…
 *   :::                         ← closes
 *
 * Inline (within paragraphs and list items): **bold**, [text](href).
 */

export type BlogBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "widget"
      name: string
      attrs: Record<string, string>
      lines: string[]
    }

export interface ParsedBody {
  blocks: BlogBlock[]
  /** Flat TOC entries (h2 + h3). */
  toc: { level: 2 | 3; text: string; id: string }[]
  /** Approx reading time in minutes (≥1). */
  readingMinutes: number
  /** Approx word count of plain-text body (no fences, no markup). */
  wordCount: number
  /** Whether the body contains at least one :::faq block (used to emit FAQPage JSON-LD). */
  hasFaq: boolean
  /** FAQ items aggregated from all :::faq blocks. */
  faqItems: { q: string; a: string }[]
}

const WIDGET_OPEN = /^:::([a-z]+)(.*)$/
const WIDGET_CLOSE = /^:::\s*$/

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60)
}

function parseAttrs(rest: string): Record<string, string> {
  const out: Record<string, string> = {}
  const re = /([a-zA-Z][\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/g
  let m: RegExpExecArray | null
  while ((m = re.exec(rest)) !== null) {
    out[m[1]] = m[2] ?? m[3] ?? m[4] ?? ""
  }
  return out
}

/** Escape HTML so a paragraph body never injects raw markup. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Inline markdown subset: **bold**, [text](href). */
export function inlineHtml(raw: string): string {
  let s = escapeHtml(raw)
  // Links: [text](href) — href is left as-is (already escaped).
  s = s.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, text: string, href: string) => {
      const safeHref = href.startsWith("http")
        ? href
        : href.startsWith("/") || href.startsWith("#")
          ? href
          : "#"
      return `<a href="${safeHref}">${text}</a>`
    },
  )
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>")
  return s
}

/** Strip widget fences and markup so we can word-count cleanly. */
export function plainText(body: string): string {
  const lines = body.split("\n")
  const out: string[] = []
  let inWidget = false
  for (const line of lines) {
    if (WIDGET_OPEN.test(line)) {
      inWidget = true
      continue
    }
    if (WIDGET_CLOSE.test(line)) {
      inWidget = false
      continue
    }
    if (inWidget) continue
    out.push(
      line
        .replace(/^#+\s+/, "")
        .replace(/^-\s+/, "")
        .replace(/^\d+\.\s+/, "")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/`([^`]+)`/g, "$1"),
    )
  }
  return out.join(" ").replace(/\s+/g, " ").trim()
}

export function parseBody(body: string): ParsedBody {
  const lines = body.split("\n")
  const blocks: BlogBlock[] = []
  const toc: ParsedBody["toc"] = []
  const faqItems: ParsedBody["faqItems"] = []

  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    // Widget fence
    const open = line.match(WIDGET_OPEN)
    if (open) {
      const name = open[1]
      const attrs = parseAttrs(open[2] ?? "")
      const widgetLines: string[] = []
      i++
      while (i < lines.length && !WIDGET_CLOSE.test(lines[i])) {
        widgetLines.push(lines[i])
        i++
      }
      // skip closing :::
      if (i < lines.length) i++
      blocks.push({ type: "widget", name, attrs, lines: widgetLines })
      if (name === "faq") {
        // collect items so we can emit FAQPage JSON-LD on the page
        for (const item of parseFaqLines(widgetLines)) faqItems.push(item)
      }
      continue
    }

    // Blank line — skip
    if (line.trim() === "") {
      i++
      continue
    }

    // Heading 2
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim()
      const id = slugify(text)
      blocks.push({ type: "h2", text, id })
      toc.push({ level: 2, text, id })
      i++
      continue
    }

    // Heading 3
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim()
      const id = slugify(text)
      blocks.push({ type: "h3", text, id })
      toc.push({ level: 3, text, id })
      i++
      continue
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim())
        i++
      }
      blocks.push({ type: "ul", items })
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, "").trim())
        i++
      }
      blocks.push({ type: "ol", items })
      continue
    }

    // Paragraph — collect until blank line, widget fence, or heading
    const buf: string[] = [line]
    i++
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !WIDGET_OPEN.test(lines[i]) &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      buf.push(lines[i])
      i++
    }
    blocks.push({ type: "p", html: inlineHtml(buf.join(" ")) })
  }

  const text = plainText(body)
  const wordCount = text ? text.split(/\s+/).length : 0
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 220))

  return {
    blocks,
    toc,
    readingMinutes,
    wordCount,
    hasFaq: faqItems.length > 0,
    faqItems,
  }
}

/** Public helper for `:::faq` content. Exported so widget and JSON-LD share parsing. */
export function parseFaqLines(
  lines: string[],
): { q: string; a: string }[] {
  const out: { q: string; a: string }[] = []
  let q = ""
  let a = ""
  for (const raw of lines) {
    const line = raw.trim()
    if (line.startsWith("Q:")) {
      if (q) {
        out.push({ q, a: a.trim() })
        a = ""
      }
      q = line.slice(2).trim()
    } else if (line.startsWith("A:")) {
      a = line.slice(2).trim()
    } else if (line && a) {
      a += " " + line
    }
  }
  if (q) out.push({ q, a: a.trim() })
  return out
}
