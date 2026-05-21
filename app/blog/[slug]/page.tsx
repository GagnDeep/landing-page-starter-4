import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { posts, getPost } from "@/content/posts"
import { buildMetadata } from "@/lib/seo"
import { articleJsonLd } from "@/lib/jsonld"

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
    modifiedTime: p.date,
    authors: [p.author],
  })
}

function renderBody(body: string) {
  const blocks = body.split("\n\n")
  return blocks.map((b, i) => {
    if (b.startsWith("## ")) return <h2 key={i}>{b.slice(3)}</h2>
    if (b.startsWith("### ")) return <h3 key={i}>{b.slice(4)}</h3>
    if (b.startsWith("- ")) {
      const items = b.split("\n").map((l) => l.replace(/^- /, ""))
      return (
        <ul key={i}>
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      )
    }
    if (/^\d+\.\s/.test(b)) {
      const items = b.split("\n").map((l) => l.replace(/^\d+\.\s/, ""))
      return (
        <ol key={i}>
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      )
    }
    return (
      <p
        key={i}
        dangerouslySetInnerHTML={{
          __html: b.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    )
  })
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) notFound()
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Journal", path: "/blog/" },
              { name: p.title, path: `/blog/${p.slug}/` },
            ]}
          />
        </div>
        <PageHero
          eyebrow={`Journal · ${p.date}`}
          titleHtml={p.title}
          lead={p.excerpt}
        />
        <section className="tight">
          <article className="container prose">
            <time
              dateTime={p.date}
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Published {p.date} · by {p.author}
            </time>
            {renderBody(p.body)}
          </article>
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld
        data={articleJsonLd({
          title: p.title,
          description: p.excerpt,
          path: `/blog/${p.slug}/`,
          date: p.date,
          author: p.author,
        })}
      />
    </>
  )
}
