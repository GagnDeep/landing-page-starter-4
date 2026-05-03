import React from 'react'
import { termsContent } from '@/content/terms'

export default function TermsPage() {
  return (
    <article className="py-24 container mx-auto px-4 max-w-3xl">
      <div className="mb-16 border-b border-border/40 pb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{termsContent.header.title}</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">{termsContent.header.lastUpdated}</p>
      </div>

      <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
        {termsContent.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
