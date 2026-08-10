import fs from 'fs'
let content = fs.readFileSync('app/page.tsx', 'utf8')

content = content.replace(
  'import { DatabaseIcon, Layers01Icon, ZapIcon, Settings02Icon } from "@hugeicons/core-free-icons"',
  'import { DatabaseIcon, Layers01Icon, ZapIcon, Settings02Icon, ArrowRight01Icon, QuestionCircleIcon, CheckmarkCircle01Icon, ZapCircleIcon, PlayCircleIcon } from "@hugeicons/core-free-icons"'
)

// Add icon to Stat Strip (Section 1)
content = content.replace(
  '<p className="font-heading text-4xl font-bold text-foreground mb-2">0ms</p>',
  '<p className="font-heading text-4xl font-bold text-foreground mb-2"><HugeiconsIcon icon={ZapCircleIcon} className="w-8 h-8 mx-auto mb-2 text-primary" />0ms</p>'
)

// Add icon to Numbered Process Stepper (Section 5)
// Actually, let's just add it to the heading of section 5
content = content.replace(
  '<h2 className="font-heading text-3xl md:text-4xl font-bold">Three steps to deterministic tests</h2>',
  '<h2 className="font-heading text-3xl md:text-4xl font-bold flex items-center justify-center gap-3"><HugeiconsIcon icon={PlayCircleIcon} className="w-10 h-10 text-primary" /> Three steps to deterministic tests</h2>'
)

// Add icon to Accordion FAQ (Section 6)
content = content.replace(
  '<h2 className="font-heading text-3xl font-bold">Frequently Asked Questions</h2>',
  '<h2 className="font-heading text-3xl font-bold flex items-center gap-3"><HugeiconsIcon icon={QuestionCircleIcon} className="w-8 h-8 text-primary" /> Frequently Asked Questions</h2>'
)

// Add icon to Final Conversion Band (Section 7)
content = content.replace(
  '<h2 className="font-heading text-4xl font-bold mb-6">Stop paying for CI flakes.</h2>',
  '<h2 className="font-heading text-4xl font-bold mb-6 flex items-center justify-center gap-4"><HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-12 h-12" /> Stop paying for CI flakes.</h2>'
)

fs.writeFileSync('app/page.tsx', content)
