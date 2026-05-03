import { blogContent } from "@/content/blog"
import { siteImages } from "@/lib/images"
import { AnimatedGradientMesh } from "@/components/visuals"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = [blogContent.featuredPost, ...blogContent.posts].find(
    (p) => p.slug === resolvedParams.slug
  )
  if (!post) return {}
  return {
    title: `${post.title} | The Journal`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = [blogContent.featuredPost, ...blogContent.posts].find(
    (p) => p.slug === resolvedParams.slug
  )

  if (!post) {
    notFound()
  }

  return (
    <article className="flex min-h-screen flex-col pt-24 pb-32">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-muted/10 px-6 py-24 text-center md:px-12">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <div className="flex items-center justify-center gap-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span className="text-primary">{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-heading text-4xl leading-tight md:text-6xl lg:text-7xl">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative z-20 mx-auto -mt-12 w-full max-w-5xl px-6">
        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border shadow-xl md:aspect-[21/9]">
          <Image
            src={siteImages.blog.post1.src}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content (Simulated rich text block) */}
      <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-normal prose-a:text-primary hover:prose-a:text-primary/80 mx-auto w-full max-w-3xl px-6 py-24">
        <p className="lead mb-12 text-xl text-muted-foreground">
          {post.excerpt}
        </p>
        <p>{post.content}</p>
        <blockquote>
          &ldquo;The essence of boho-modern aesthetic is finding the perfect
          balance between organic warmth and clinical precision.&rdquo;
        </blockquote>
      </div>
    </article>
  )
}
