import React from 'react'
import { blogContent } from '@/content/blog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh'

export function Newsletter() {
  const { newsletter } = blogContent

  return (
    <section className="py-32 relative overflow-hidden bg-secondary/20">
      <AnimatedGradientMesh className="opacity-30 mix-blend-color-burn dark:mix-blend-screen" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <h2 className="font-heading text-4xl font-bold mb-6">{newsletter.heading}</h2>
        <p className="text-xl text-muted-foreground mb-10">{newsletter.description}</p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/newsletter" method="POST">
          <Input
            type="email"
            name="email"
            placeholder={newsletter.inputPlaceholder}
            className="h-12 rounded-full bg-background/80 backdrop-blur"
            required
          />
          <Button type="submit" size="lg" className="h-12 rounded-full px-8 shrink-0">
            {newsletter.buttonText}
          </Button>
        </form>
      </div>
    </section>
  )
}
