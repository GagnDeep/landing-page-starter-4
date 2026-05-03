interface LegalSection {
  title: string;
  content: string;
}

interface LegalContent {
  meta: { title: string; description: string };
  header: { title: string; lastUpdated: string };
  sections: LegalSection[];
}

export function LegalLayout({ content }: { content: LegalContent }) {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <header className="mb-16 border-b border-border pb-12 text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4 font-medium tracking-tight">
            {content.header.title}
          </h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {content.header.lastUpdated}
          </p>
        </header>

        <main className="space-y-12">
          {content.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="font-heading text-2xl text-foreground font-medium">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
