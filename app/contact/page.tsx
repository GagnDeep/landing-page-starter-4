import { contactContent } from "@/content/contact";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <AnimatedGradientMesh />
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-primary mb-6 tracking-tight">
            {contactContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {contactContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 2. Emergency Contact Block */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold text-destructive mb-3 flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              {contactContent.emergencyBlock.heading}
            </h2>
            <p className="text-muted-foreground mb-6">
              {contactContent.emergencyBlock.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-3xl font-heading font-bold text-foreground">
                {contactContent.emergencyBlock.phone}
              </span>
              <Button size="lg" variant="destructive" className="rounded-full">
                {contactContent.emergencyBlock.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* 3. Contact Form */}
            <div className="space-y-8 bg-card p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <div>
                <h3 className="text-3xl font-heading font-medium text-foreground mb-2">
                  {contactContent.contactForm.heading}
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you during operating hours.
                </p>
              </div>

              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{contactContent.contactForm.fields.name}</label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{contactContent.contactForm.fields.phone}</label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{contactContent.contactForm.fields.email}</label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{contactContent.contactForm.fields.subject}</label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{contactContent.contactForm.fields.message}</label>
                  <Textarea id="message" name="message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  {contactContent.contactForm.submitButton}
                </Button>
              </form>
            </div>

            {/* 4. Clinic Details & 6. Social Links */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-heading font-medium text-foreground mb-8">
                  {contactContent.details.heading}
                </h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{contactContent.details.address.title}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed mt-1">
                        {contactContent.details.address.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{contactContent.details.hours.title}</h4>
                      <div className="text-muted-foreground mt-1 space-y-1">
                        <p>{contactContent.details.hours.standard}</p>
                        <p>{contactContent.details.hours.sunday}</p>
                        <p className="text-destructive font-medium mt-2 block">{contactContent.details.hours.emergency}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{contactContent.details.email.title}</h4>
                      <p className="text-muted-foreground text-lg mt-1">
                        {contactContent.details.email.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Mock Map Integration */}
              <div className="rounded-2xl overflow-hidden border border-border h-[250px] bg-muted/30 relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center transition-colors group-hover:bg-black/10">
                  <div className="bg-background/95 backdrop-blur px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    View on Google Maps
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
                {/* Normally an iframe to Google Maps would go here */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
