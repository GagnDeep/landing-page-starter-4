"use client";

import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedGradientMesh, CTAGlow } from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CallIcon, Mail01Icon, Time02Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { toast } from "sonner"; // Assuming sonner is installed from shadcn for toasts

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Note: we use "use client" so we can handle form submission state and toasts
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Message sent successfully!", {
            description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Contact Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 text-center border-b border-border">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 max-w-2xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-6xl tracking-tight">
            {contactContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {contactContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

         {/* Left Col: Contact Info */}
         <div className="space-y-16">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                 {/* Address */}
                 <div className="space-y-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                        <HugeiconsIcon icon={Location01Icon} className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider uppercase text-xs mb-2 text-muted-foreground">{contactContent.contactInfo.address.label}</h3>
                        <p className="leading-relaxed">{contactContent.contactInfo.address.value}</p>
                    </div>
                 </div>

                 {/* Phone */}
                 <div className="space-y-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                        <HugeiconsIcon icon={CallIcon} className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider uppercase text-xs mb-2 text-muted-foreground">{contactContent.contactInfo.phone.label}</h3>
                        <p className="leading-relaxed">{contactContent.contactInfo.phone.value}</p>
                    </div>
                 </div>

                 {/* Email */}
                 <div className="space-y-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                        <HugeiconsIcon icon={Mail01Icon} className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider uppercase text-xs mb-2 text-muted-foreground">{contactContent.contactInfo.email.label}</h3>
                        <p className="leading-relaxed">{contactContent.contactInfo.email.value}</p>
                    </div>
                 </div>

                 {/* Hours */}
                 <div className="space-y-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                        <HugeiconsIcon icon={Time02Icon} className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider uppercase text-xs mb-2 text-muted-foreground">{contactContent.contactInfo.hours.label}</h3>
                        <p className="leading-relaxed whitespace-pre-wrap">{contactContent.contactInfo.hours.value}</p>
                    </div>
                 </div>
             </div>

             {/* Practical Info (Parking/Transit) */}
             <div className="pt-12 border-t border-border space-y-8">
                 <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
                     <h4 className="font-medium mb-2">{contactContent.practicalInfo.parking.heading}</h4>
                     <p className="text-sm text-muted-foreground">{contactContent.practicalInfo.parking.text}</p>
                 </div>
                 <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
                     <h4 className="font-medium mb-2">{contactContent.practicalInfo.transit.heading}</h4>
                     <p className="text-sm text-muted-foreground">{contactContent.practicalInfo.transit.text}</p>
                 </div>
             </div>
         </div>

         {/* Right Col: Form */}
         <div className="bg-card border rounded-[2.5rem] p-8 md:p-12 shadow-sm">
             <h2 className="font-heading text-3xl mb-8">{contactContent.form.heading}</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="space-y-2">
                     <Label htmlFor="name">{contactContent.form.fields.name}</Label>
                     <Input id="name" required className="rounded-xl bg-muted/50 border-transparent focus-visible:border-primary" />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <Label htmlFor="email">{contactContent.form.fields.email}</Label>
                         <Input id="email" type="email" required className="rounded-xl bg-muted/50 border-transparent focus-visible:border-primary" />
                     </div>
                     <div className="space-y-2">
                         <Label htmlFor="phone">{contactContent.form.fields.phone}</Label>
                         <Input id="phone" type="tel" className="rounded-xl bg-muted/50 border-transparent focus-visible:border-primary" />
                     </div>
                 </div>

                 <div className="space-y-2">
                     <Label htmlFor="subject">{contactContent.form.fields.subject}</Label>
                     <Select required>
                        <SelectTrigger id="subject" className="rounded-xl bg-muted/50 border-transparent focus:ring-primary">
                            <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="booking">Booking Inquiry</SelectItem>
                            <SelectItem value="bridal">Bridal Package</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                     </Select>
                 </div>

                 <div className="space-y-2">
                     <Label htmlFor="message">{contactContent.form.fields.message}</Label>
                     <Textarea
                        id="message"
                        required
                        rows={6}
                        className="rounded-xl bg-muted/50 border-transparent focus-visible:border-primary resize-none"
                     />
                 </div>

                 <CTAGlow className="w-full pt-4">
                     <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-6 tracking-widest uppercase text-sm">
                         {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
                     </Button>
                 </CTAGlow>
             </form>
         </div>
      </section>
    </div>
  );
}
