import Link from "next/link"
import type { MarketPost } from "@/lib/config/market"

interface Props {
  current: MarketPost
  all: MarketPost[]
  max?: number
}

export function BlogRelated({ current, all, max = 3 }: Props) {
  const others = all.filter((p) => p.slug !== current.slug)
  const sameCat = current.category
    ? others.filter((p) => p.category === current.category)
    : []
  const fillers = others
    .filter((p) => !sameCat.includes(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  const picks = [...sameCat, ...fillers].slice(0, max)
  if (!picks.length) return null

  return (
    <section className="blog-related" aria-label="Related articles">
      <p className="blog-related-label mono">Keep reading</p>
      <ul className="blog-related-list">
        {picks.map((p) => (
          <li className="blog-related-item" key={p.slug}>
            <Link href={`/blog/${p.slug}/`}>
              <span className="blog-related-meta mono">
                {p.category ?? "Journal"} · {p.date}
              </span>
              <span className="blog-related-title serif">{p.title}</span>
              <span className="blog-related-excerpt">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
