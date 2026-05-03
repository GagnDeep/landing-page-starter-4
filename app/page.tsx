import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  hero,
  valueProposition,
  servicesOverview,
  featurePainlessRootCanals,
  featurePediatric,
  meetDrBansal,
  testimonialsSection,
  newPatientExperience,
  finalCta
} from '@/content/home';
import { generalFaq } from '@/content/faq';
import { clinicInfo } from '@/content/contact';
import { images } from '@/lib/images';

import {
  AnimatedGradientMesh,
  LogoMarquee,
  ToothIconSet,
  AnimatedStatCounter,
  CTAGlow,
  HowItWorksDiagram,
  FloatingBlobs,
  AvatarStack
} from '@/components/visuals';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Clock01Icon } from '@hugeicons/core-free-icons';

export default function HomePage() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* Background Visuals */}
      <AnimatedGradientMesh />
      <FloatingBlobs />

      {/* 3. Hero Section */}
      <section className="relative px-4 pt-24 pb-32 md:pt-32 md:pb-40 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center z-10">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tight leading-tight mb-6">
          {hero.heading}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mb-12 leading-relaxed">
          {hero.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={hero.cta!.href}>
            <CTAGlow variant="primary">{hero.cta!.label}</CTAGlow>
          </Link>
          <Link href="/features" className="px-8 py-4 font-sans font-medium text-foreground hover:text-primary transition-colors">
            Explore Services
          </Link>
        </div>
      </section>

      {/* 4. Trust Indicators */}
      <section className="w-full z-10">
        <LogoMarquee
          logos={[
            { id: '1', name: 'Indian Dental Association' },
            { id: '2', name: 'Invisalign Certified' },
            { id: '3', name: 'SST Nagar Health Network' },
            { id: '4', name: 'Punjab Medical Council' },
          ]}
          speed="slow"
        />
      </section>

      {/* 5. Value Proposition */}
      <section className="px-4 py-24 md:py-32 lg:px-8 max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          {valueProposition.heading}
        </h2>
        <p className="text-lg text-muted-foreground font-sans leading-relaxed">
          {valueProposition.content}
        </p>
      </section>

      {/* 6. Services Overview Grid */}
      <section className="px-4 pb-24 md:pb-32 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesOverview.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col items-start p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ToothIconSet
                variant={index === 0 ? 'clean' : index === 1 ? 'sparkle' : 'shield'}
                className="mb-6"
              />
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans mb-6">
                {service.description}
              </p>
              <span className="mt-auto font-sans font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform">
                Learn more <span className="ml-2">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Highlight Feature: Painless Root Canals */}
      <section className="px-4 py-24 md:py-32 lg:px-8 bg-primary/5 border-y border-primary/10 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={images.dentalTools.src}
              alt={images.dentalTools.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {featurePainlessRootCanals.heading}
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8 leading-relaxed">
              {featurePainlessRootCanals.content}
            </p>
            <Link href={featurePainlessRootCanals.cta!.href}>
              <CTAGlow variant="secondary">{featurePainlessRootCanals.cta!.label}</CTAGlow>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Highlight Feature: Pediatric Dentistry */}
      <section className="px-4 py-24 md:py-32 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={images.pediatricCare.src}
              alt={images.pediatricCare.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {featurePediatric.heading}
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8 leading-relaxed">
              {featurePediatric.content}
            </p>
            <Link href={featurePediatric.cta!.href}>
              <CTAGlow variant="secondary">{featurePediatric.cta!.label}</CTAGlow>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Meet Dr. Bansal & 10. Clinic Atmosphere */}
      <section className="px-4 py-24 md:py-32 lg:px-8 bg-card border-y border-border z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Dr. Bansal Info */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-background shadow-lg mx-auto lg:mx-0">
               <Image
                  src={images.drBansalHeadshot.src}
                  alt={images.drBansalHeadshot.alt}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center lg:text-left">
                {meetDrBansal.heading}
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed text-center lg:text-left">
                {meetDrBansal.content}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link href={meetDrBansal.cta!.href}>
                <span className="font-sans font-medium text-primary hover:text-foreground transition-colors flex items-center">
                  {meetDrBansal.cta!.label} <span className="ml-2">→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Stats & Clinic Atmosphere Image */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-12">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-background rounded-2xl border border-border p-6 shadow-sm">
                 <AnimatedStatCounter value={15} label="Years Experience" suffix="+" />
               </div>
               <div className="bg-background rounded-2xl border border-border p-6 shadow-sm">
                 <AnimatedStatCounter value={10} label="Happy Patients" suffix="k+" />
               </div>
            </div>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
               <Image
                  src={images.clinicInterior.src}
                  alt={images.clinicInterior.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
            </div>
          </div>

        </div>
      </section>

      {/* 11. Patient Testimonials & 12. Technology */}
      <section className="px-4 py-24 md:py-32 lg:px-8 max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Testimonials */}
        <div className="flex flex-col items-start space-y-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">
            {testimonialsSection.heading}
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            {testimonialsSection.subheading}
          </p>
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <div className="flex items-center space-x-1 text-primary mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-foreground font-sans text-lg italic leading-relaxed mb-8">
              &quot;Dr. Bansal completely changed my perspective on going to the dentist. The clinic is incredibly peaceful, and the root canal was genuinely painless. I highly recommend them to anyone in Patiala!&quot;
            </p>
            <AvatarStack
              avatars={['', '', '']} // Placeholders to trigger fallback UI
              totalCount={1500}
            />
          </div>
        </div>

        {/* Technology & Emergency */}
        <div className="flex flex-col space-y-12">
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
             <h3 className="text-xl font-heading font-bold text-foreground mb-4">Modern Technology</h3>
             <ul className="space-y-4 font-sans text-muted-foreground">
               <li className="flex items-center space-x-3">
                 <ToothIconSet variant="shield" className="w-10 h-10 shrink-0" />
                 <span>Digital low-radiation X-Rays</span>
               </li>
               <li className="flex items-center space-x-3">
                 <ToothIconSet variant="clean" className="w-10 h-10 shrink-0" />
                 <span>Advanced sterilization protocols</span>
               </li>
             </ul>
          </div>

          {/* 14. Emergency Callout */}
          <div className="bg-card rounded-3xl p-8 border-l-4 border-destructive shadow-sm">
             <h3 className="text-xl font-heading font-bold text-foreground mb-2">Emergency Dental Care</h3>
             <p className="font-sans text-muted-foreground mb-6 text-sm">
               Experiencing severe pain or a knocked-out tooth? We accommodate urgent cases.
             </p>
             <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}>
               <CTAGlow variant="secondary" className="w-full justify-center border-destructive/20 text-destructive hover:bg-destructive/10">
                 Call Now
               </CTAGlow>
             </a>
          </div>
        </div>
      </section>

      {/* 15. New Patient Experience */}
      <section className="px-4 py-24 md:py-32 lg:px-8 bg-card border-y border-border z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {newPatientExperience.heading}
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            {newPatientExperience.content}
          </p>
        </div>
        <HowItWorksDiagram
          steps={[
            { title: "Consultation", description: "A comprehensive, no-rush exam." },
            { title: "Treatment Plan", description: "Transparent options & costs." },
            { title: "Gentle Care", description: "Pain-free procedures." }
          ]}
        />
      </section>

      {/* 16. Location & Contact Quick-View */}
      <section className="px-4 py-24 md:py-32 lg:px-8 max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">Find Us</h2>
          <div className="flex flex-col space-y-6 font-sans text-lg text-muted-foreground">
            <div className="flex items-start space-x-4">
               <HugeiconsIcon icon={Location01Icon} className="w-6 h-6 text-primary shrink-0 mt-1" />
               <p>
                 {clinicInfo.address.line1}, {clinicInfo.address.line2}<br />
                 {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.pin}
               </p>
            </div>
            <div className="flex items-start space-x-4">
               <HugeiconsIcon icon={Clock01Icon} className="w-6 h-6 text-primary shrink-0 mt-1" />
               <div className="flex flex-col space-y-2">
                 {clinicInfo.hours.map((hour, idx) => (
                   <span key={idx}>{hour}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
        {/* Mock Map Placeholder */}
        <div className="w-full aspect-video bg-muted rounded-3xl border border-border flex items-center justify-center relative overflow-hidden shadow-sm">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] opacity-50 bg-cover bg-center grayscale" />
           <div className="z-10 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full font-sans font-medium text-foreground shadow-lg flex items-center space-x-2 border border-border">
             <HugeiconsIcon icon={Location01Icon} className="w-5 h-5 text-primary" />
             <span>SST Nagar, Patiala</span>
           </div>
        </div>
      </section>

      {/* 17. FAQ Snippets */}
      <section className="px-4 pb-24 md:pb-32 lg:px-8 max-w-3xl mx-auto z-10 w-full">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
          Common Questions
        </h2>
        <Accordion type="single" collapsible className="w-full border border-border rounded-2xl bg-card px-6 py-2 shadow-sm">
          {generalFaq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
              <AccordionTrigger className="font-sans font-medium text-left hover:text-primary transition-colors py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8 font-sans text-muted-foreground">
          Still have questions? <Link href="/faq" className="text-primary hover:underline font-medium">Read all FAQs</Link>
        </div>
      </section>

      {/* 18. Final Call to Action */}
      <section className="px-4 py-24 md:py-32 lg:px-8 bg-primary/10 border-t border-primary/20 text-center z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {finalCta.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans mb-10 leading-relaxed">
            {finalCta.subheading}
          </p>
          <Link href={finalCta.cta!.href}>
            <CTAGlow variant="primary" className="text-lg px-12 py-5 shadow-xl">
              {finalCta.cta!.label}
            </CTAGlow>
          </Link>
        </div>
      </section>
    </div>
  );
}
