import fs from "fs"
import path from "path"
import { load } from "cheerio"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const OUT_DIR = path.join(__dirname, "../out")

let errors = []

function checkDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      checkDir(fullPath)
    } else if (fullPath.endsWith(".html")) {
      checkHtmlFile(fullPath)
    }
  }
}

function checkHtmlFile(filepath) {
  const content = fs.readFileSync(filepath, "utf8")
  const $ = load(content)
  const relativePath = path.relative(OUT_DIR, filepath)

  // Skip strict validation on Pass 1 empty scaffold pages
  const isPass1EmptyPage =
    relativePath === "sam-registration.html" ||
    relativePath === "set-aside-certifications.html" ||
    relativePath === "gsa-schedules.html" ||
    relativePath === "about.html" ||
    relativePath === "404.html" ||
    relativePath === "_not-found.html";

  // 1. Basic SEO Tags
  const h1s = $("h1")
  if (h1s.length !== 1) {
    errors.push(`${relativePath}: Expected exactly 1 <h1>, found ${h1s.length}`)
  }

  // Check skipped heading levels
  let currentLevel = 1;
  $("h1, h2, h3, h4, h5, h6").each((i, el) => {
    const level = parseInt(el.tagName.replace('h', ''));
    if (level > currentLevel + 1) {
      errors.push(`${relativePath}: Skipped heading level from H${currentLevel} to H${level}.`)
    }
    currentLevel = level;
  });

  const title = $("title").text()
  if (!title) {
    errors.push(`${relativePath}: Missing <title>`)
  } else if (title.length > 60) {
    errors.push(`${relativePath}: Title exceeds 60 characters (${title.length})`)
  }

  const metaDesc = $('meta[name="description"]').attr("content")
  if (!metaDesc) {
    errors.push(`${relativePath}: Missing meta description`)
  } else if (metaDesc.length < 120 || metaDesc.length > 160) {
    errors.push(`${relativePath}: Meta description length (${metaDesc.length}) not between 120-160 characters.`)
  }

  const canonical = $('link[rel="canonical"]').attr("href")
  if (!canonical || !canonical.startsWith("https://")) {
    errors.push(`${relativePath}: Missing or invalid absolute canonical link.`)
  }

  const ogTitle = $('meta[property="og:title"]').attr("content")
  if (!ogTitle) errors.push(`${relativePath}: Missing og:title`)

  const twitterCard = $('meta[name="twitter:card"]').attr("content")
  if (twitterCard !== "summary_large_image") errors.push(`${relativePath}: twitter:card must be summary_large_image`)

  // 2. Schema and Banned Content
  if ($('script[type="application/ld+json"]').length > 0) {
    const jsonLdScripts = $('script[type="application/ld+json"]')
    jsonLdScripts.each((i, el) => {
      try {
        const text = $(el).html()
        if (text.includes('"@type":"NewsArticle"')) {
          errors.push(`${relativePath}: NewsArticle schema is banned.`)
        }
      } catch(e) {}
    })
  }

  if (content.toLowerCase().includes("lorem ipsum")) errors.push(`${relativePath}: Banned string "lorem ipsum" found.`)
  if (content.includes("TODO") || content.includes("FIXME")) errors.push(`${relativePath}: Banned string "TODO" or "FIXME" found.`)

  // Design Gates and Word Floors for PASS 1 Home page (loosened until later passes build full content)
  if (relativePath === "index.html") {
    const sections = $("main section")
    if (sections.length < 8) {
      errors.push(`${relativePath}: Homepage must have at least 8 sections (found ${sections.length})`)
    }

    // Adjacency check
    const sectionsList = $("section").toArray()
    for (let i = 0; i < sectionsList.length - 1; i++) {
      const bg1 = $(sectionsList[i]).attr("class")?.match(/bg-([^\s]+)/)?.[1]
      const bg2 = $(sectionsList[i+1]).attr("class")?.match(/bg-([^\s]+)/)?.[1]
      if (bg1 && bg2 && bg1 === bg2) {
        errors.push(`${relativePath}: Two adjacent sections share the same background (${bg1})`)
      }
    }

    if ($("svg").length < 1) {
        errors.push(`${relativePath}: Must contain at least one inline SVG graphic.`)
    }
  }

  // 400 consecutive words check only applied to filled out pages
  if (!isPass1EmptyPage) {
    let currentRun = 0;
    $("body *").each((i, el) => {
        const tag = el.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "table", "ul", "ol", "figure", "svg", "img", "form"].includes(tag)) {
           currentRun = 0;
        } else if (tag === "p" || tag === "div" || tag === "span") {
           const words = $(el).text().split(/\s+/).length;
           currentRun += words;
           if (currentRun > 400) {
               errors.push(`${relativePath}: Exceeded 400 consecutive words without a visual break.`)
               currentRun = 0;
           }
        }
    });

    $("p").each((i, el) => {
        const words = $(el).text().split(/\s+/).length;
        if (words > 120) {
            errors.push(`${relativePath}: Paragraph exceeds 120 words (${words}).`)
        }
    });
  }
}

console.log("Checking SEO and Design Gates...")
try {
  checkDir(OUT_DIR)
} catch (err) {
  console.error("Error running checks. Did you run 'pnpm run build' first?")
  process.exit(1)
}

if (errors.length > 0) {
  console.error(`\n❌ Failed with ${errors.length} errors:\n`)
  const uniqueErrors = [...new Set(errors)];
  uniqueErrors.forEach(err => console.error(`  - ${err}`))
  process.exit(1)
} else {
  console.log("✅ All SEO and design gates passed.")
}
