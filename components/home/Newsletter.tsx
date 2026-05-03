import React from 'react';
import { homeContent } from '@/content/home';
import { MagneticButton } from '@/components/visuals';

export function Newsletter() {
  const { newsletter } = homeContent;

  return (
    <section className="py-24 bg-secondary/30 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {newsletter.headline}
        </h2>
        <p className="font-sans text-muted-foreground font-light mb-8">
          {newsletter.description}
        </p>

        <form className="w-full flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={newsletter.placeholder}
            className="flex-grow h-12 bg-background border border-border px-4 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow rounded-none"
            required
          />
          <MagneticButton strength={15}>
            <button
              type="submit"
              className="w-full sm:w-auto h-12 bg-foreground text-background px-8 font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:bg-foreground/90 rounded-none"
            >
              {newsletter.cta}
            </button>
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
