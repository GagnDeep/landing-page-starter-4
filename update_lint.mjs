import fs from 'fs'

// Update jsonld
let jsonld = fs.readFileSync('components/primitives/jsonld.tsx', 'utf8')
jsonld = jsonld.replace('data: any', 'data: Record<string, unknown> | Record<string, unknown>[]')
fs.writeFileSync('components/primitives/jsonld.tsx', jsonld)

// Update page.tsx unescaped entities
let page = fs.readFileSync('app/page.tsx', 'utf8')
page = page.replace("don't cause cache misses", "don&apos;t cause cache misses")
page = page.replace("import { CassetteDiff } from '@/components/cassette-diff'\n", "")
page = page.replace("import { Separator } from \"@/components/ui/separator\"\n", "")
fs.writeFileSync('app/page.tsx', page)
