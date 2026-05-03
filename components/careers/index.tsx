"use client";

import { careersContent } from "@/content/careers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotMatrixGrid } from "@/components/visuals";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function WhyWorkWithUs() {
  const content = careersContent.sections.whyWorkWithUs;

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30 border-y border-border">
      <DotMatrixGrid opacity={0.3} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">{content.headline}</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{content.body}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {content.benefits?.map((benefit: any, idx: number) => (
            <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OpenPositions() {
  const content = careersContent.sections.openPositions;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold mb-10">{content.headline}</h2>
        <div className="space-y-4">
          {content.positions?.map((pos: any, idx: number) => (
            <div key={idx} className="group border border-border rounded-2xl p-6 hover:border-primary hover:bg-muted/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{pos.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                  <span className="px-2 py-1 rounded-md bg-secondary/50">{pos.type}</span>
                  <span>•</span>
                  <span>{pos.experience}</span>
                </div>
              </div>
              <Button variant="ghost" className="sm:opacity-0 group-hover:opacity-100 transition-opacity self-start sm:self-auto">
                Apply <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApplicationForm() {
  const form = careersContent.sections.applicationForm;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4">{form.headline}</h2>
            <p className="text-muted-foreground">{form.body}</p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Application Received!</h3>
              <p className="text-muted-foreground">Thank you for your interest in joining Amil's Hair Lounge. We will review your application and be in touch soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{form.nameLabel}</label>
                  <Input id="name" required type="text" className="h-12 bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{form.emailLabel}</label>
                  <Input id="email" required type="email" className="h-12 bg-background border-border" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">{form.phoneLabel}</label>
                  <Input id="phone" required type="tel" className="h-12 bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="position" className="text-sm font-medium">{form.positionLabel}</label>
                  <Input id="position" required type="text" className="h-12 bg-background border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="portfolio" className="text-sm font-medium">{form.portfolioLabel}</label>
                <Input id="portfolio" type="url" className="h-12 bg-background border-border" />
              </div>
              <div className="space-y-2 pb-4">
                <label htmlFor="resume" className="text-sm font-medium">{form.resumeLabel}</label>
                <Input id="resume" type="file" className="h-12 bg-background border-border file:mt-2 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
              </div>
              <Button disabled={isSubmitting} size="lg" className="w-full h-14 rounded-xl text-base" type="submit">
                {isSubmitting ? "Submitting..." : form.submitLabel}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  const content = careersContent.sections.testimonials;
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest font-medium mb-12 opacity-80">{content.headline}</h2>
        <p className="text-2xl md:text-4xl font-heading leading-snug mb-8">
          {content.quote}
        </p>
        <p className="text-lg font-medium opacity-90">— {content.author}</p>
      </div>
    </section>
  );
}
