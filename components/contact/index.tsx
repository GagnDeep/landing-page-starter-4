"use client";

import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DotMatrixGrid } from "@/components/visuals";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export function ContactDetails() {
  const details = contactContent.sections.details;
  const hours = contactContent.sections.hours;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-heading font-bold mb-8">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">{details.phone.title}</p>
              <a href={details.phone.link} className="text-muted-foreground hover:text-primary transition-colors">{details.phone.value}</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">{details.email.title}</p>
              <a href={details.email.link} className="text-muted-foreground hover:text-primary transition-colors">{details.email.value}</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">{details.address.title}</p>
              <p className="text-muted-foreground leading-relaxed">{details.address.value}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-bold mb-6">{hours.headline}</h2>
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-2">{hours.weekdays}</p>
            <p className="text-muted-foreground">{hours.weekends}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const form = contactContent.sections.form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
      <h2 className="text-3xl font-heading font-bold mb-8">{form.headline}</h2>
      {isSubmitted ? (
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
          <h3 className="text-xl font-heading font-bold text-primary mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">{form.nameLabel}</label>
            <Input id="name" required type="text" className="h-12 bg-background border-border" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">{form.emailLabel}</label>
              <Input id="email" required type="email" className="h-12 bg-background border-border" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">{form.phoneLabel}</label>
              <Input id="phone" type="tel" className="h-12 bg-background border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">{form.serviceLabel}</label>
            <Input id="service" type="text" className="h-12 bg-background border-border" placeholder="e.g. Hair Botox, Balayage" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">{form.messageLabel}</label>
            <Textarea id="message" required rows={5} className="bg-background border-border resize-none" />
          </div>
          <Button disabled={isSubmitting} size="lg" className="w-full h-14 rounded-xl text-base" type="submit">
            {isSubmitting ? "Sending..." : form.submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
}

export function ContactLayout() {
  return (
    <section className="py-24 relative overflow-hidden">
      <DotMatrixGrid opacity={0.3} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function ContactMap() {
  const content = contactContent.sections.location;
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">{content.headline}</h2>
        <div className="w-full aspect-video md:aspect-[21/9] bg-secondary/50 rounded-3xl overflow-hidden border border-border flex items-center justify-center">
          <p className="text-muted-foreground">[ Stylized Map Placeholder ]</p>
        </div>
        <Button variant="outline" className="mt-12 rounded-full px-8 h-12">
           {content.directionsCta?.label || "Get Directions"}
        </Button>
      </div>
    </section>
  );
}
