import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import * as cheerio from 'cheerio'

const outDir = path.join(process.cwd(), 'out')

if (!fs.existsSync(outDir)) {
  console.error("❌ out/ directory not found. Did you run pnpm build?")
  process.exit(1)
}

const htmlFiles = globSync('**/*.html', { cwd: outDir, absolute: true })

let hasErrors = false

const complianceBannedStrings = [
  "trusted by",
  "used by teams at",
  "10x faster",
  "enterprise-grade"
]

const wordFloors = {
  // We mock the word count check for PASS 1 as we are just setting it up
}

function checkSeo(file) {
  const content = fs.readFileSync(file, 'utf8')
  const $ = cheerio.load(content)
  const relPath = path.relative(outDir, file)

  let localErrors = []

  // 1. Exactly one h1
  const h1Count = $('h1').length
  if (h1Count !== 1) {
    localErrors.push(`Expected exactly 1 <h1>, found ${h1Count}`)
  }

  // 2. Title < 60 chars
  const title = $('title').text()
  if (!title) {
    localErrors.push("Missing <title>")
  } else if (title.length > 60) {
    localErrors.push(`Title exceeds 60 chars: "${title}" (${title.length} chars)`)
  }

  // 3. Meta description length
  const desc = $('meta[name="description"]').attr('content')
  if (!desc) {
    localErrors.push("Missing meta description")
  } else if (desc.length < 120 || desc.length > 160) {
    // PASS 1: we might fail this strictly if we don't pad descriptions, let's just log it for now
    // Actually, brief says "fails with a specific message on every rule"
    // Let's ensure it's strictly enforced.
    localErrors.push(`Meta description length ${desc.length} not between 120-160 chars.`)
  }

  // 4. Canonical link
  const canonical = $('link[rel="canonical"]').attr('href')
  if (!canonical || !canonical.startsWith('http')) {
    localErrors.push("Missing or invalid absolute canonical link")
  }

  // 5. Open Graph tags
  const ogTitle = $('meta[property="og:title"]').attr('content')
  const ogDesc = $('meta[property="og:description"]').attr('content')
  const ogType = $('meta[property="og:type"]').attr('content')
  const ogUrl = $('meta[property="og:url"]').attr('content')
  const ogImg = $('meta[property="og:image"]').attr('content')

  if (!ogTitle || !ogDesc || !ogType || !ogUrl || !ogImg) {
    localErrors.push("Missing one or more Open Graph tags")
  }

  // 6. Twitter card
  const twCard = $('meta[name="twitter:card"]').attr('content')
  if (twCard !== "summary_large_image") {
    localErrors.push("twitter:card must be summary_large_image")
  }

  // 7. HTML lang
  const lang = $('html').attr('lang')
  if (!lang) {
    localErrors.push("Missing html lang attribute")
  }

  // 8. Banned strings
  const textContent = $('body').text().toLowerCase()
  complianceBannedStrings.forEach(str => {
    if (textContent.includes(str.toLowerCase())) {
      localErrors.push(`Banned string found: "${str}"`)
    }
  })

  // 9. Home page specific gates
  if (relPath === 'index.html') {
    const sections = $('main > section')
    if (sections.length < 8) {
      localErrors.push(`Home page must have at least 8 sections, found ${sections.length}`)
    }
    // Check backgrounds
    let prevBg = null
    sections.each((i, el) => {
      const cls = $(el).attr('class') || ''
      const bgMatch = cls.match(/bg-(\w+)/)
      const currentBg = bgMatch ? bgMatch[1] : 'transparent'
      if (prevBg && prevBg === currentBg && currentBg !== 'transparent') {
        localErrors.push(`Adjacent sections share background: ${currentBg} at section ${i}`)
      }
      prevBg = currentBg

      // Check visual element
      const visuals = $(el).find('svg, img, table, [class*="icon"]').length
      if (visuals === 0) {
        localErrors.push(`Section ${i} lacks visual elements (svg/icon/table)`)
      }
    })
  }

  if (localErrors.length > 0) {
    console.error(`\n❌ SEO/Design Failures in ${relPath}:`)
    localErrors.forEach(err => console.error(`   - ${err}`))
    hasErrors = true
  }
}

htmlFiles.forEach(checkSeo)

if (hasErrors) {
  process.exit(1)
} else {
  console.log("✅ All SEO and design gates passed.")
}
