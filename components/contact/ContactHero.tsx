"use client"

import React from 'react'
import { contactContent } from '@/content/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactHero() {
  const { hero, form, locationDetails } = contactContent

  return (
    <section className="relative py-24 md:py-32 bg-secondary/10 border-b border-border/40">
      <DotMatrixGrid className="opacity-40" />
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">{hero.headline}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{hero.subheadline}</p>
        </div>

        {/* Split Layout: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">

          {/* Form Column */}
          <div className="bg-card p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-xl">
            <h2 className="font-heading text-3xl font-bold mb-8">{form.heading}</h2>
            <form className="space-y-6" action="/api/contact" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{form.fields.name.label}</Label>
                  <Input id="name" placeholder={form.fields.name.placeholder} className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{form.fields.email.label}</Label>
                  <Input id="email" type="email" placeholder={form.fields.email.placeholder} className="bg-background/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{form.fields.phone.label}</Label>
                <Input id="phone" type="tel" placeholder={form.fields.phone.placeholder} className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">{form.fields.inquiryType.label}</Label>
                <Select>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {form.fields.inquiryType.options.map((opt) => (
                      <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{form.fields.message.label}</Label>
                <Textarea id="message" placeholder={form.fields.message.placeholder} className="min-h-[150px] bg-background/50" />
              </div>

              <Button size="lg" className="w-full rounded-full h-14 text-lg">
                {form.submitButton}
              </Button>
            </form>
          </div>

          {/* Info & Location Column */}
          <div className="flex flex-col gap-12 justify-center">

            <div className="space-y-8">
              <h2 className="font-heading text-4xl font-bold">{locationDetails.heading}</h2>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {locationDetails.address.line1}<br />
                    {locationDetails.address.line2}<br />
                    {locationDetails.address.city}, {locationDetails.address.pin}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Operating Hours</h3>
                  <ul className="text-muted-foreground space-y-1">
                    {locationDetails.hours.map((h, i) => (
                      <li key={i}><span className="font-medium text-foreground">{h.days}:</span> {h.time}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Direct Contact</h3>
                  <p className="text-muted-foreground mb-1">{locationDetails.contactInfo.phone}</p>
                  <p className="text-muted-foreground">{locationDetails.contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-secondary border border-border/50 shadow-inner flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center grayscale mix-blend-multiply dark:mix-blend-screen"
                style={{ backgroundImage: `url(${contactContent.locationDetails.mapPlaceholderUrl || 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'})` }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground">
                <MapPin className="w-8 h-8 opacity-50" />
                <span className="text-sm font-medium uppercase tracking-widest">Interactive Map Enabled</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
