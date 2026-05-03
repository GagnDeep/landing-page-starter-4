"use client"

import { useState } from "react"
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
import { contactContent } from "@/content/contact"

export default function ContactClient() {
  const content = contactContent
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <h1 className="mb-6 font-heading text-5xl font-bold md:text-7xl">
            {content.header.headline}
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            {content.header.subheadline}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-background px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Form Side */}
            <div className="rounded-sm border border-border bg-secondary/20 p-8 md:p-12">
              {isSuccess ? (
                <div className="flex h-full flex-col items-center justify-center py-20 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-heading text-3xl font-bold">
                    Inquiry Received
                  </h3>
                  <p className="text-muted-foreground">
                    Our concierge team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold tracking-widest uppercase"
                    >
                      {content.form.nameLabel}
                    </Label>
                    <Input
                      id="name"
                      required
                      className="h-12 rounded-none border-border bg-background focus-visible:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold tracking-widest uppercase"
                      >
                        {content.form.emailLabel}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="h-12 rounded-none border-border bg-background focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold tracking-widest uppercase"
                      >
                        {content.form.phoneLabel}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        className="h-12 rounded-none border-border bg-background focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiryType"
                      className="text-xs font-semibold tracking-widest uppercase"
                    >
                      {content.form.inquiryTypeLabel}
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-12 rounded-none border-border bg-background focus:ring-primary">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {content.form.inquiryOptions.map((opt, i) => (
                          <SelectItem
                            key={i}
                            value={opt.toLowerCase().replace(/\s/g, "-")}
                          >
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold tracking-widest uppercase"
                    >
                      {content.form.messageLabel}
                    </Label>
                    <Textarea
                      id="message"
                      required
                      className="min-h-[150px] resize-none rounded-none border-border bg-background focus-visible:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 w-full rounded-none text-xs font-semibold tracking-widest uppercase"
                  >
                    {isSubmitting ? "Sending..." : content.form.submitButton}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-between space-y-12 py-4">
              <div className="space-y-10">
                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                    {content.info.addressHeadline}
                  </h3>
                  <p className="font-heading text-xl text-foreground">
                    {content.info.addressDetails}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                      {content.info.phoneHeadline}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {content.info.phoneDetails}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                      {content.info.emailHeadline}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {content.info.emailDetails}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                    {content.info.hoursHeadline}
                  </h3>
                  <p className="text-lg leading-relaxed whitespace-pre-line text-foreground">
                    {content.info.hoursDetails}
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative flex h-[300px] w-full items-center justify-center border border-border bg-muted">
                <div className="m-4 rounded-sm border border-border/50 bg-background/80 p-6 text-center shadow-sm backdrop-blur-sm">
                  <p className="font-heading text-lg font-semibold">
                    {content.locationNotes.headline}
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    {content.locationNotes.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
