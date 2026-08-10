import fs from 'fs'
let content = fs.readFileSync('app/page.tsx', 'utf8')

content = content.replace(
  'import { DatabaseIcon, Layers01Icon, ZapIcon, Settings02Icon, ArrowRight01Icon, QuestionCircleIcon, CheckmarkCircle01Icon, ZapCircleIcon, PlayCircleIcon } from "@hugeicons/core-free-icons"',
  'import { DatabaseIcon, Layers01Icon, ZapIcon, Settings02Icon, ArrowRight01Icon, QuestionIcon, CheckmarkCircle01Icon, ZapIcon as ZapCircleIcon, PlayCircleIcon } from "@hugeicons/core-free-icons"'
)

// actually let's just use known good icons
content = content.replace(
  'QuestionCircleIcon', 'QuestionIcon'
)
content = content.replace(
  'ZapCircleIcon', 'ZapIcon'
)

fs.writeFileSync('app/page.tsx', content)
