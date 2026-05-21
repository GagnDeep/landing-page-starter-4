import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Icon } from "@/components/primitives/icon"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="404"
          titleHtml="That page<br/>isn't <em>here</em>."
          lead="It might have moved, or never existed. Try the calculator, or go back home."
        >
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary btn-lg">
              Back home <Icon.arrow />
            </Link>
            <Link href="/calculator/" className="btn btn-ghost btn-lg">
              Solar calculator
            </Link>
          </div>
        </PageHero>
      </main>
      <SiteFooter />
    </>
  )
}
