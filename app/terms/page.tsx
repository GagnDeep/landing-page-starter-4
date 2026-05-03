import { Metadata } from "next"
import { termsContent } from "@/content/terms"

export const metadata: Metadata = {
  title: termsContent.meta.title,
  description: termsContent.meta.description,
}

export default function TermsPage() {
  const content = termsContent

  return (
    <div className="min-h-screen w-full bg-background">
      <section className="border-b border-border/40 bg-secondary/20 px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            {content.header.headline}
          </h1>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {content.lastUpdated}
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
            {content.sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="mb-6 border-b border-border/50 pb-2 text-2xl">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
