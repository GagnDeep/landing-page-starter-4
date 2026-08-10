"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RFQDesk() {
  const [step, setStep] = useState(1)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) setStep(step + 1)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm border-border bg-card">
      <CardHeader className="bg-muted/30 border-b border-border py-6 px-8">
        <CardTitle className="font-heading uppercase tracking-tight text-xl text-foreground">RFQ Intake</CardTitle>
        <CardDescription className="font-sans text-muted-foreground mt-1">Submit your wire harness spec. Vetted US shops will quote within 24 hours.</CardDescription>
        <div className="flex gap-2 mt-4">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-muted'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-muted'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-muted'}`} />
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleNext} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="space-y-2">
                <Label htmlFor="req-type">Requirement Type</Label>
                <select id="req-type" name="reqType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                  <option>New Design / Prototype</option>
                  <option>Production Run (Existing Spec)</option>
                  <option>Reverse Engineering</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry / Application</Label>
                <select id="industry" name="industry" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                  <option>EV High-Voltage</option>
                  <option>Aerospace / Defense (AS9100)</option>
                  <option>Medical Device</option>
                  <option>Industrial Robotics</option>
                </select>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 font-heading uppercase tracking-wide">Continue to Specs</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="qty">Target Quantity</Label>
                  <Input id="qty" name="qty" type="number" placeholder="e.g. 500" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-date">Target Delivery</Label>
                  <Input id="target-date" name="targetDate" type="date" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="compliance">Required Certifications</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['IPC/WHMA-A-620', 'UL Listed', 'AS9100', 'ITAR', 'Nadcap'].map(cert => (
                    <label key={cert} className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" name="certs" value={cert} className="rounded border-input" />
                      <span>{cert}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 font-heading uppercase tracking-wide">Back</Button>
                <Button type="submit" className="flex-1 bg-foreground text-background hover:bg-foreground/90 font-heading uppercase tracking-wide">Contact Info</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 font-heading uppercase tracking-wide">Back</Button>
                <Button type="submit" className="flex-[2] bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wide">Submit for Quotes</Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
