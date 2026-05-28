import { notFound } from "next/navigation"
import Image from "next/image"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { BlogBody } from "@/components/blog/blog-body"
import { BlogToc } from "@/components/blog/blog-toc"
import { BlogShare } from "@/components/blog/blog-share"
import { BlogRelated } from "@/components/blog/blog-related"
import { BlogReadingTime } from "@/components/blog/blog-reading-time"
import { BlogBreadcrumbRow } from "@/components/blog/blog-breadcrumb-row"
import { parseBody } from "@/components/blog/parse-body"
import { posts, getPost } from "@/content/posts"
import { buildMetadata } from "@/lib/seo"
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld"
import { absUrl } from "@/lib/config/site.config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) return {}
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}/`,
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated ?? p.date,
    authors: [p.author],
    keywords: p.keywords,
    image: p.image,
  })
}

function formatDate(iso: string) {
  // ISO "YYYY-MM-DD" → "Mar 18, 2026"
  const d = new Date(iso + "T00:00:00")
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) notFound()

  const parsed = parseBody(p.body)
  const url = absUrl(`/blog/${p.slug}/`)
  const hasUpdated = p.updated && p.updated !== p.date

  const ld: Record<string, unknown>[] = [
    articleJsonLd({
      title: p.title,
      description: p.excerpt,
      path: `/blog/${p.slug}/`,
      date: p.date,
      modified: p.updated ?? p.date,
      author: p.author,
      image: p.image,
      keywords: p.keywords,
      articleSection: p.category,
      wordCount: parsed.wordCount,
    }),
    breadcrumbJsonLd([
      { name: "Journal", path: "/blog/" },
      { name: p.title, path: `/blog/${p.slug}/` },
    ]),
  ]
  if (parsed.hasFaq) ld.push(faqJsonLd(parsed.faqItems))

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <BlogBreadcrumbRow title={p.title} />
        </div>
        <PageHero
          eyebrow={`Journal · ${p.category ?? "Article"}`}
          titleHtml={p.title}
          lead={p.excerpt}
        />
        <section className="tight">
          <div className="container blog-shell">
            <BlogToc items={parsed.toc} />
            <article className="prose blog-article">
              <div className="blog-meta-row">
                <time className="mono blog-meta-date" dateTime={p.date}>
                  Published {formatDate(p.date)}
                </time>
                {hasUpdated && (
                  <time className="mono blog-meta-updated" dateTime={p.updated}>
                    · Updated {formatDate(p.updated!)}
                  </time>
                )}
                <span className="blog-meta-sep" aria-hidden="true">
                  ·
                </span>
                <span className="mono blog-meta-author">by {p.author}</span>
                <span className="blog-meta-sep" aria-hidden="true">
                  ·
                </span>
                <BlogReadingTime minutes={parsed.readingMinutes} />
              </div>
              {p.image && (
                <figure className="blog-hero-image">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={630}
                    priority
                  />
                </figure>
              )}
              <BlogBody blocks={parsed.blocks} />
              <BlogShare url={url} title={p.title} />
              <BlogRelated current={p} all={posts} />
            </article>
          </div>
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={ld} />
    </>
  )
}
