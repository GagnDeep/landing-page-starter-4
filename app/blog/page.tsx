import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { blogContent } from "@/content/blog"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
}

export default function BlogPage() {
  const content = blogContent

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-background px-4 py-20">
        <div className="container mx-auto max-w-7xl">
          <h1 className="mb-4 font-heading text-5xl font-bold md:text-6xl lg:text-7xl">
            {content.header.headline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {content.header.subheadline}
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-background px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="group grid cursor-pointer grid-cols-1 items-center gap-8 overflow-hidden rounded-md bg-secondary/20 transition-colors hover:bg-secondary/40 lg:grid-cols-3">
            <div className="relative h-[400px] overflow-hidden md:h-[500px] lg:col-span-2">
              <Image
                src={images.portfolio.gallery[1].url}
                alt={images.portfolio.gallery[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-4 text-xs font-semibold tracking-widest text-primary uppercase">
                <span>{content.featuredArticle.category}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="text-muted-foreground">
                  {content.featuredArticle.date}
                </span>
              </div>
              <h2 className="mb-4 font-heading text-3xl leading-tight font-bold transition-colors group-hover:text-primary md:text-4xl">
                {content.featuredArticle.title}
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                {content.featuredArticle.excerpt}
              </p>
              <span className="text-sm font-semibold tracking-wider text-foreground uppercase underline-offset-4 group-hover:underline">
                Read Article &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-20 z-40 border-b border-border/50 bg-background/80 px-4 py-8 backdrop-blur-md">
        <div className="container mx-auto no-scrollbar flex max-w-7xl gap-6 overflow-x-auto">
          {content.categories.map((cat, i) => (
            <button
              key={i}
              className={`border-b-2 pb-2 text-sm font-semibold tracking-widest whitespace-nowrap uppercase transition-colors ${
                i === 0
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {content.articles.map((article, i) => (
              <div key={i} className="group flex cursor-pointer flex-col">
                <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-md bg-muted">
                  {/* Placeholder imagery mapping */}
                  <Image
                    src={
                      images.portfolio.gallery[i + 2]?.url ||
                      images.portfolio.gallery[0].url
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-widest text-primary uppercase">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mb-4 line-clamp-3 leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-4">
            <Button
              variant="outline"
              disabled
              className="rounded-none text-xs font-semibold tracking-widest uppercase"
            >
              {content.pagination.prevText}
            </Button>
            <Button
              variant="outline"
              className="rounded-none text-xs font-semibold tracking-widest uppercase"
            >
              {content.pagination.nextText}
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="border-t border-border bg-secondary/30 px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-4 font-heading text-4xl font-bold">
            {content.newsletter.headline}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {content.newsletter.subheadline}
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder={content.newsletter.placeholder}
              className="h-12 rounded-none border-border bg-background"
              required
            />
            <Button
              type="submit"
              className="h-12 rounded-none px-8 text-xs font-semibold tracking-widest uppercase"
            >
              {content.newsletter.buttonText}
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
