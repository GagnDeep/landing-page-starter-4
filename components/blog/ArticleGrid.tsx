import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogContent } from '@/content/blog'
import { images } from '@/lib/images'

export function ArticleGrid() {
  const { articles } = blogContent

  const articleImages = [
    images.blogSkincare,
    images.doorstepService, // Reusing appropriate images for mock
    images.blogNails,
    images.blogBridal
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.link} className="group flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={articleImages[idx]?.src || images.studioInterior.src}
                  alt={articleImages[idx]?.alt || 'Blog article cover'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
