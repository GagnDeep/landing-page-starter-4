"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  Alert02Icon,
  File01Icon
} from "@hugeicons/core-free-icons"

const STATEMENTS = [
  { id: 1, text: "Custodian feeds are reconciled daily without manual intervention.", weight: 3, category: "Reconciliation" },
  { id: 2, text: "We maintain a documented data lineage map for all PII.", weight: 4, category: "Data Lineage" },
  { id: 3, text: "MFA is enforced across 100% of internal applications.", weight: 5, category: "Cybersecurity" },
  { id: 4, text: "Our backup restore procedures are tested at least quarterly.", weight: 4, category: "Cybersecurity" },
  { id: 5, text: "We have an SEC-compliant AI acceptable use policy.", weight: 4, category: "AI Use" },
  { id: 6, text: "No single employee holds exclusive knowledge of our core systems.", weight: 3, category: "Key-Person Risk" },
  { id: 7, text: "Trade files are processed entirely systematically.", weight: 3, category: "Reconciliation" },
  { id: 8, text: "We conduct annual third-party penetration testing.", weight: 4, category: "Cybersecurity" },
  { id: 9, text: "Client data is encrypted both in transit and at rest.", weight: 5, category: "Data Lineage" },
  { id: 10, text: "Generative AI tools cannot access client trading histories.", weight: 4, category: "AI Use" },
  { id: 11, text: "Vendor risk assessments are updated annually.", weight: 3, category: "Cybersecurity" },
  { id: 12, text: "We have a documented incident response plan.", weight: 5, category: "Cybersecurity" },
  { id: 13, text: "Advisors do not use personal devices for firm business.", weight: 4, category: "Cybersecurity" },
  { id: 14, text: "Performance reporting data is reconciled to the custodian monthly.", weight: 5, category: "Reconciliation" },
  { id: 15, text: "Data retention policies match regulatory requirements systematically.", weight: 4, category: "Data Lineage" },
  { id: 16, text: "System access is revoked within 24 hours of employee termination.", weight: 5, category: "Cybersecurity" },
  { id: 17, text: "We have secondary administrators for all critical systems.", weight: 4, category: "Key-Person Risk" },
  { id: 18, text: "LLM prompts are logged and monitored for PII leakage.", weight: 3, category: "AI Use" },
  { id: 19, text: "Shadow IT (unsanctioned apps) is actively blocked.", weight: 3, category: "Cybersecurity" },
  { id: 20, text: "Firm-wide cybersecurity training is conducted annually.", weight: 4, category: "Cybersecurity" },
  { id: 21, text: "We maintain an up-to-date software inventory.", weight: 3, category: "Data Lineage" },
  { id: 22, text: "Billing calculations are automated and auditable.", weight: 5, category: "Reconciliation" },
]

export function ExposureReview() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const [step, setStep] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: boolean) => {
    const current = STATEMENTS[step]
    setAnswers(prev => ({ ...prev, [current.id]: value }))
    if (step < STATEMENTS.length - 1) {
      setStep(s => s + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (showResults) {
    const exposures = STATEMENTS.filter(s => answers[s.id] === false)
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 2)

    return (
      <Card className="p-8 max-w-2xl mx-auto border-border bg-card">
        <h3 className="font-heading text-2xl mb-2">Examination Exposure Review</h3>
        <p className="text-muted-foreground mb-8">Based on your responses, these are the two operational exposures most likely to surface in an SEC examination.</p>

        <div className="space-y-6 mb-8">
          {exposures.length === 0 ? (
            <div className="p-4 bg-muted/50 rounded-lg flex items-start gap-3">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">No critical exposures detected.</p>
                <p className="text-sm text-muted-foreground">Your technology posture appears aligned with current examination priorities.</p>
              </div>
            </div>
          ) : exposures.map(exp => (
            <div key={exp.id} className="p-4 bg-destructive/10 text-destructive-foreground rounded-lg flex items-start gap-3 border border-destructive/20">
              <HugeiconsIcon icon={Alert02Icon} className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <span className="text-xs font-mono tracking-wider uppercase text-destructive/80 font-semibold">{exp.category}</span>
                <p className="font-medium text-foreground mt-1">{exp.text}</p>
                <p className="text-sm text-muted-foreground mt-1">This represents a high-priority operational risk.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 print:hidden">
          <Button onClick={handlePrint} variant="outline" className="w-full sm:w-auto">
            <HugeiconsIcon icon={File01Icon} className="w-4 h-4 mr-2" />
            Print for Consultation
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <a href="/consultation/">Discuss These Findings</a>
          </Button>
        </div>
      </Card>
    )
  }

  const current = STATEMENTS[step]
  const progress = ((step) / STATEMENTS.length) * 100

  return (
    <Card className="p-8 max-w-2xl mx-auto border-border bg-card">
      <div className="mb-8">
        <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
          <span>Statement {step + 1} of {STATEMENTS.length}</span>
          <span>{current.category}</span>
        </div>
        <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
          <div className="bg-primary h-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h3 className="font-sans text-xl md:text-2xl font-medium mb-8 min-h-[4rem]">
        {current.text}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleAnswer(false)}
          className="h-16 text-base"
        >
          No / Unsure
        </Button>
        <Button
          variant="default"
          size="lg"
          onClick={() => handleAnswer(true)}
          className="h-16 text-base"
        >
          Yes
        </Button>
      </div>
    </Card>
  )
}
