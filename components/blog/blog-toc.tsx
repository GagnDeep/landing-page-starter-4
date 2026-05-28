"use client"

import { useEffect, useState } from "react"

interface TocItem {
  level: 2 | 3
  text: string
  id: string
}

interface Props {
  items: TocItem[]
}

export function BlogToc({ items }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "")

  useEffect(() => {
    if (!items.length) return
    const headings = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!headings.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: [0, 1] },
    )
    headings.forEach((h) => obs.observe(h))
    return () => obs.disconnect()
  }, [items])

  if (items.length < 2) return null

  const list = (
    <ol className="blog-toc-list">
      {items.map((it) => (
        <li
          key={it.id}
          className={
            "blog-toc-item" +
            (it.level === 3 ? " blog-toc-item--sub" : "") +
            (active === it.id ? " is-active" : "")
          }
        >
          <a href={`#${it.id}`}>{it.text}</a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <aside className="blog-toc blog-toc--desk" aria-label="Table of contents">
        <p className="blog-toc-label mono">On this page</p>
        {list}
      </aside>
      <details className="blog-toc blog-toc--mob">
        <summary className="blog-toc-label mono">On this page</summary>
        {list}
      </details>
    </>
  )
}
