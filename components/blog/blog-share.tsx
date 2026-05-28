"use client"

import { useState } from "react"

interface Props {
  url: string
  title: string
}

export function BlogShare({ url, title }: Props) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // fall through silently
    }
  }

  const tw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const em = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`

  return (
    <aside className="blog-share" aria-label="Share this article">
      <p className="blog-share-label mono">Share</p>
      <ul className="blog-share-list">
        <li>
          <button
            type="button"
            className="blog-share-btn"
            onClick={copyLink}
            aria-label="Copy link"
          >
            {copied ? "✓ Copied" : "Copy link"}
          </button>
        </li>
        <li>
          <a
            className="blog-share-btn"
            href={tw}
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
        </li>
        <li>
          <a
            className="blog-share-btn"
            href={li}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a className="blog-share-btn" href={em}>
            Email
          </a>
        </li>
      </ul>
    </aside>
  )
}
