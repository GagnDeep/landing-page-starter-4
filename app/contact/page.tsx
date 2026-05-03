"use client"

import { contactContent } from "@/content/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedGradientMesh, CTAGlow } from "@/components/visuals"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  CallIcon,
  Mail01Icon,
  Time02Icon,
} from "@hugeicons/core-free-icons"
import { useState } from "react"
import { toast } from "sonner" // Assuming sonner is installed from shadcn for toasts

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Note: we use "use client" so we can handle form submission state and toasts
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Contact Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden border-b border-border px-6 pt-24 text-center md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 mx-auto max-w-2xl space-y-6">
          <h1 className="font-heading text-5xl tracking-tight md:text-6xl">
            {contactContent.hero.heading}
          </h1>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-xl">
            {contactContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24">
        {/* Left Col: Contact Info */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* Address */}
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                <HugeiconsIcon icon={Location01Icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {contactContent.contactInfo.address.label}
                </h3>
                <p className="leading-relaxed">
                  {contactContent.contactInfo.address.value}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                <HugeiconsIcon icon={CallIcon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {contactContent.contactInfo.phone.label}
                </h3>
                <p className="leading-relaxed">
                  {contactContent.contactInfo.phone.value}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                <HugeiconsIcon icon={Mail01Icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {contactContent.contactInfo.email.label}
                </h3>
                <p className="leading-relaxed">
                  {contactContent.contactInfo.email.value}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                <HugeiconsIcon icon={Time02Icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {contactContent.contactInfo.hours.label}
                </h3>
                <p className="leading-relaxed whitespace-pre-wrap">
                  {contactContent.contactInfo.hours.value}
                </p>
              </div>
            </div>
          </div>

          {/* Practical Info (Parking/Transit) */}
          <div className="space-y-8 border-t border-border pt-12">
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
              <h4 className="mb-2 font-medium">
                {contactContent.practicalInfo.parking.heading}
              </h4>
              <p className="text-sm text-muted-foreground">
                {contactContent.practicalInfo.parking.text}
              </p>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
              <h4 className="mb-2 font-medium">
                {contactContent.practicalInfo.transit.heading}
              </h4>
              <p className="text-sm text-muted-foreground">
                {contactContent.practicalInfo.transit.text}
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Form */}
        <div className="rounded-[2.5rem] border bg-card p-8 shadow-sm md:p-12">
          <h2 className="mb-8 font-heading text-3xl">
            {contactContent.form.heading}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{contactContent.form.fields.name}</Label>
              <Input
                id="name"
                required
                className="rounded-xl border-transparent bg-muted/50 focus-visible:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  {contactContent.form.fields.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="rounded-xl border-transparent bg-muted/50 focus-visible:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  {contactContent.form.fields.phone}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  className="rounded-xl border-transparent bg-muted/50 focus-visible:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">
                {contactContent.form.fields.subject}
              </Label>
              <Select required>
                <SelectTrigger
                  id="subject"
                  className="rounded-xl border-transparent bg-muted/50 focus:ring-primary"
                >
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
              <Label htmlFor="message">
                {contactContent.form.fields.message}
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                className="resize-none rounded-xl border-transparent bg-muted/50 focus-visible:border-primary"
              />
            </div>

            <CTAGlow className="w-full pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl py-6 text-sm tracking-widest uppercase"
              >
                {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
              </Button>
            </CTAGlow>
          </form>
        </div>
      </section>
    </div>
  )
}
