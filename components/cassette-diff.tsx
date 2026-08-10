"use client"
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function CassetteDiff() {
  const [cassetteA, setCassetteA] = useState("")
  const [cassetteB, setCassetteB] = useState("")
  const [diff, setDiff] = useState<string | null>(null)

  const handleDiff = () => {
    // Basic mock diff logic for UI representation
    if (cassetteA === cassetteB) {
      setDiff("Cassettes match byte-identically.")
    } else {
      setDiff("Drift detected: \n- /id\n- /created\n- /choices/0/message/tool_calls/0/id")
    }
  }

  return (
    <Card className="p-6 bg-card border-border shadow-sm max-w-4xl mx-auto w-full">
      <h3 className="font-heading font-semibold text-lg mb-4">Cassette Diff</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium mb-2 block" htmlFor="c-a">Run A (JSON)</label>
          <Textarea
            name="c-a"
            id="c-a"
            className="font-mono text-sm h-32"
            placeholder="{...}"
            value={cassetteA}
            onChange={(e) => setCassetteA(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block" htmlFor="c-b">Run B (JSON)</label>
          <Textarea
            name="c-b"
            id="c-b"
            className="font-mono text-sm h-32"
            placeholder="{...}"
            value={cassetteB}
            onChange={(e) => setCassetteB(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleDiff} className="w-full mb-4">Compare Runs</Button>
      {diff && (
        <div className="p-4 bg-muted/50 rounded-md border border-border">
          <pre className="font-mono text-sm whitespace-pre-wrap">{diff}</pre>
        </div>
      )}
    </Card>
  )
}
