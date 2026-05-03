import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { blogContent } from '@/content/blog'
import { images } from '@/lib/images'

// This is a minimal template for individual blog posts as required by Phase 7
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  // Combine featured and regular articles to find the matching post
  const allArticles = [blogContent.featuredArticle, ...blogContent.articles]

  // Try to match the slug against the link path (e.g. "/blog/post-monsoon-hair-care" -> "post-monsoon-hair-care")
  const article = allArticles.find(a => a.link.split('/').pop() === slug)

  if (!article) {
    notFound()
  }

  // Fallback to a default image for the template mockup
  const coverImage = images.blogMonsoon

  return (
    <article className="min-h-screen pb-24">
      {/* Header / Hero area */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-secondary">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-white/90">{article.date}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            {article.excerpt}
          </p>

          <p>
            This is a generated template for the blog post titled <strong>{article.title}</strong>.
            In a complete CMS integration, the full HTML or Markdown body content would be parsed and rendered here.
          </p>

          <h2>Understanding the Nuances</h2>
          <p>
            At Your Home Salon, we pride ourselves on offering bespoke solutions tailored specifically for the Chandigarh climate and lifestyle. Our experts continually update their methodologies to ensure you receive world-class care, whether in our tranquil studio or the comfort of your home.
          </p>

          <blockquote>
            "True beauty is an extension of health and relaxation. It cannot be rushed."
          </blockquote>

          <p>
            The premium products we select—from Dermalogica to Olaplex—are part of our commitment to sustainable, long-term vitality for your skin and hair.
          </p>
        </div>
      </div>
    </article>
  )
}

// Generate static params so the dynamic routes can be pre-rendered
export function generateStaticParams() {
  const allArticles = [blogContent.featuredArticle, ...blogContent.articles]
  return allArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  })).filter(param => param.slug !== '')
}
