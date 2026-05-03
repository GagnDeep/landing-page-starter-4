"use client";

import { contactContent } from "@/content/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactLayout() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would handle API post here
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact Form */}
          <StaggeredReveal>
            <StaggerItem>
              <h2 className="font-heading text-3xl text-foreground mb-8">
                {contactContent.form.title}
              </h2>
              {isSubmitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[400px]">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    {contactContent.form.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-muted-foreground">{contactContent.form.fields.name}</Label>
                      <Input id="name" required className="bg-muted/30 border-border focus-visible:ring-primary h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-muted-foreground">{contactContent.form.fields.email}</Label>
                      <Input id="email" type="email" required className="bg-muted/30 border-border focus-visible:ring-primary h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-muted-foreground">{contactContent.form.fields.phone}</Label>
                      <Input id="phone" type="tel" required className="bg-muted/30 border-border focus-visible:ring-primary h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-muted-foreground">{contactContent.form.fields.location}</Label>
                      <Input id="location" required className="bg-muted/30 border-border focus-visible:ring-primary h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-muted-foreground">{contactContent.form.fields.interest}</Label>
                    <Input id="interest" required className="bg-muted/30 border-border focus-visible:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-muted-foreground">{contactContent.form.fields.message}</Label>
                    <Textarea id="message" required className="bg-muted/30 border-border focus-visible:ring-primary min-h-[120px] resize-none" />
                  </div>
                  <div className="pt-4">
                    <MagneticButton type="submit" className="w-full sm:w-auto px-12">
                      {contactContent.form.submitLabel}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </StaggerItem>
          </StaggeredReveal>

          {/* Right: Direct Details */}
          <StaggeredReveal delay={0.2} className="space-y-16">
            <StaggerItem>
              <h2 className="font-heading text-3xl text-foreground mb-8">
                {contactContent.details.title}
              </h2>
              <div className="bg-muted/30 rounded-2xl border border-border p-8 space-y-8">
                <div>
                  <h3 className="font-medium text-foreground text-sm uppercase tracking-widest mb-3">
                    {contactContent.details.clinic.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {contactContent.details.clinic.address}
                  </p>
                </div>
                <div className="space-y-4">
                  {contactContent.details.communication.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-1">{item.type}</span>
                      <span className="text-foreground text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-heading text-2xl text-foreground mb-6">
                {contactContent.details.hours.title}
              </h3>
              <div className="space-y-4">
                {contactContent.details.hours.schedule.map((slot, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-border pb-4">
                    <span className="text-foreground font-medium">{slot.days}</span>
                    <span className="text-muted-foreground text-right">{slot.time}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggeredReveal>

        </div>
      </div>
    </section>
  );
}
