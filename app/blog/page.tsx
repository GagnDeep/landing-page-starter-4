import { blogContent } from "@/content/blog"
import { siteImages } from "@/lib/images"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedGradientMesh } from "@/components/visuals"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Journal Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-border bg-muted/20 px-6 pt-24 text-center md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 mx-auto max-w-3xl space-y-6">
          <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl">
            {blogContent.hero.heading}
          </h1>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-xl">
            {blogContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 05. Category Filters */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4">
          <ul className="flex min-w-max items-center gap-4 text-sm font-medium tracking-widest uppercase">
            {blogContent.categories.map((category, idx) => (
              <li key={idx}>
                <button
                  className={`rounded-full px-4 py-2 transition-colors ${idx === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="mx-auto w-full max-w-7xl space-y-24 px-6 py-24">
        {/* 04. Featured Article */}
        <div className="group grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Link
            href={`/blog/${blogContent.featuredPost.slug}`}
            className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/50 shadow-sm lg:order-1 lg:aspect-auto"
          >
            <Image
              src={siteImages.blog.post1.src}
              alt={siteImages.blog.post1.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2">
            <div className="flex items-center gap-4 text-xs tracking-widest text-muted-foreground uppercase">
              <span className="text-primary">
                {blogContent.featuredPost.category}
              </span>
              <span>&bull;</span>
              <span>{blogContent.featuredPost.date}</span>
            </div>
            <h2 className="font-heading text-4xl transition-colors group-hover:text-primary md:text-5xl">
              <Link href={`/blog/${blogContent.featuredPost.slug}`}>
                {blogContent.featuredPost.title}
              </Link>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {blogContent.featuredPost.excerpt}
            </p>
            <Button
              variant="link"
              className="w-fit px-0 text-xs tracking-widest text-foreground uppercase hover:text-primary"
              asChild
            >
              <Link href={`/blog/${blogContent.featuredPost.slug}`}>
                {blogContent.labels.readArticle} &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* 06-09. Article Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {blogContent.posts.slice(0, 3).map((post, idx) => (
            <div key={idx} className="group flex flex-col space-y-6">
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-sm"
              >
                <Image
                  src={
                    idx % 2 === 0
                      ? siteImages.blog.post2.src
                      : siteImages.blog.post1.src
                  }
                  alt="Blog thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col space-y-4">
                <div className="flex items-center gap-3 text-[10px] tracking-widest text-muted-foreground uppercase">
                  <span className="text-primary">{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-2xl transition-colors group-hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 10. Newsletter Signup Break */}
        <div className="space-y-8 rounded-[3rem] border border-accent/20 bg-accent/10 p-12 text-center md:p-24">
          <h2 className="font-heading text-4xl">
            {blogContent.newsletter.heading}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {blogContent.newsletter.description}
          </p>
          <form
            className="mx-auto flex w-full max-w-md items-center space-x-2 pt-4"
            action="/api/newsletter"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-full bg-background"
            />
            <Button type="submit" className="rounded-full px-6">
              {blogContent.newsletter.buttonLabel}
            </Button>
          </form>
        </div>

        {/* 11-13. Article Grid Continued */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {blogContent.posts.slice(3).map((post, idx) => (
            <div key={idx} className="group flex flex-col space-y-6">
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-sm"
              >
                <Image
                  src={siteImages.blog.post1.src}
                  alt="Blog thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col space-y-4">
                <div className="flex items-center gap-3 text-[10px] tracking-widest text-muted-foreground uppercase">
                  <span className="text-primary">{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-2xl transition-colors group-hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 14. Pagination */}
        <div className="flex justify-center border-t border-border/50 pt-8">
          <Button
            variant="outline"
            className="rounded-full text-xs tracking-widest uppercase"
          >
            {blogContent.labels.loadMore}
          </Button>
        </div>
      </section>
    </div>
  )
}
