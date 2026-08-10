"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon, CancelCircleIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

type Step = {
  id: string
  question: string
  description?: string
  options: {
    label: string
    nextId?: string
    isDisqualifier?: boolean
    disqualifierReason?: string
  }[]
}

const tree: Record<string, Step> = {
  "start": {
    id: "start",
    question: "Is your business registered as a for-profit entity?",
    description: "Most federal set-asides require a for-profit structure.",
    options: [
      { label: "Yes", nextId: "size" },
      { label: "No, we are non-profit", isDisqualifier: true, disqualifierReason: "Non-profits are generally not eligible for standard SBA small business set-asides." }
    ]
  },
  "size": {
    id: "size",
    question: "Do you meet the SBA size standards for your industry?",
    description: "Based on your NAICS code, usually defined by average annual receipts or employee count.",
    options: [
      { label: "Yes", nextId: "sam" },
      { label: "I don't know", nextId: "sam" },
      { label: "No, we exceed the limits", isDisqualifier: true, disqualifierReason: "You must meet the SBA size standard for your primary NAICS code to qualify for small business set-asides." }
    ]
  },
  "sam": {
    id: "sam",
    question: "Are you actively registered in SAM.gov?",
    description: "The System for Award Management (SAM) is required to bid on any federal contract.",
    options: [
      { label: "Yes, active", nextId: "success" },
      { label: "No, not yet", nextId: "success-sam-pending" }
    ]
  }
}

export function ReadinessChecklist() {
  const [currentStepId, setCurrentStepId] = useState<string>("start")
  const [history, setHistory] = useState<string[]>([])

  const step = tree[currentStepId]
  const isEnd = !step

  const handleOption = (nextId?: string, isDisqualifier?: boolean, disqualifierReason?: string) => {
    if (isDisqualifier) {
      setCurrentStepId(`disqualified:${disqualifierReason}`)
      return
    }
    if (nextId) {
      setHistory([...history, currentStepId])
      setCurrentStepId(nextId)
    }
  }

  const reset = () => {
    setCurrentStepId("start")
    setHistory([])
  }

  if (currentStepId.startsWith("disqualified:")) {
    const reason = currentStepId.split(":")[1]
    return (
      <div className="bg-destructive/10 border border-destructive p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-destructive">
          <HugeiconsIcon icon={CancelCircleIcon} className="h-8 w-8" />
          <h3 className="text-xl font-heading font-bold">Not Eligible Yet</h3>
        </div>
        <p className="text-body mb-6">{reason}</p>
        <button onClick={reset} className="text-sm font-medium underline underline-offset-4 text-destructive hover:text-destructive/80">
          Start Over
        </button>
      </div>
    )
  }

  if (currentStepId === "success" || currentStepId === "success-sam-pending") {
    return (
      <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-primary">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="h-8 w-8" />
          <h3 className="text-xl font-heading font-bold">You're ready to proceed</h3>
        </div>
        <p className="text-body mb-6">
          {currentStepId === "success-sam-pending"
            ? "Your next step is completing your SAM.gov registration. This is free but requires strict attention to detail."
            : "Your baseline eligibility looks good. You can now explore specific set-aside certifications or start searching for bids."}
        </p>
        <div className="flex gap-4">
          <a href="/sam-registration" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Guide to SAM.gov
          </a>
          <button onClick={reset} className="text-sm font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground">
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm flex flex-col min-h-[300px]">
      <div className="mb-8">
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Eligibility Check</div>
        <h3 className="text-h3 mb-2">{step.question}</h3>
        {step.description && <p className="text-muted-foreground text-sm">{step.description}</p>}
      </div>

      <div className="mt-auto flex flex-col gap-3">
        {step.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOption(opt.nextId, opt.isDisqualifier, opt.disqualifierReason)}
            className="flex items-center justify-between w-full text-left p-4 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <span className="font-medium text-foreground flex items-center gap-3">
              <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              {opt.label}
            </span>
            <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>
    </div>
  )
}
