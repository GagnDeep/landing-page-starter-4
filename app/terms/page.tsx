import { termsContent } from "@/content/terms"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: termsContent.seo.title,
  description: termsContent.seo.description,
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col px-6 pt-24 pb-32">
      <div className="mx-auto w-full max-w-3xl space-y-16">
        <header className="border-b border-border pb-8">
          <h1 className="mb-4 font-heading text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {termsContent.heading}
          </h1>
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            {termsContent.lastUpdated}
          </p>
        </header>

        <div className="space-y-12">
          {termsContent.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-lg font-semibold tracking-wide">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
