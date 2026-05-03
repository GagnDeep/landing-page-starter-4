import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogContent } from '@/content/blog'
import { images } from '@/lib/images'

export function BlogHero() {
  const { hero, featuredArticle } = blogContent

  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4">

        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">{hero.heading}</h1>
          <p className="text-xl text-muted-foreground">{hero.subheadline}</p>
        </div>

        <Link href={featuredArticle.link} className="group block relative rounded-[2rem] overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={images.blogMonsoon.src}
                alt={images.blogMonsoon.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20">
              <div className="flex items-center gap-3 text-sm font-semibold text-primary uppercase tracking-widest mb-6">
                <span>{featuredArticle.category}</span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span>{featuredArticle.date}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 group-hover:text-primary transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
