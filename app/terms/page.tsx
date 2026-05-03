import { termsContent } from "@/content/terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: termsContent.seo.title,
  description: termsContent.seo.description,
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-3xl mx-auto w-full space-y-16">
          <header className="border-b border-border pb-8">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">{termsContent.heading}</h1>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">{termsContent.lastUpdated}</p>
          </header>

          <div className="space-y-12">
              {termsContent.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                      <h2 className="font-semibold text-lg tracking-wide">{section.heading}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                          {section.text}
                      </p>
                  </section>
              ))}
          </div>
      </div>
    </div>
  );
}
