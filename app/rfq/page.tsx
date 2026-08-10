import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs"
import { RFQDesk } from "@/components/sections/RFQDesk"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "RFQ Desk",
  description: "Submit your wire harness specifications for quoting.",
})

export default function RFQPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-muted border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Breadcrumbs items={[{ name: "RFQ Desk", url: "/rfq/" }]} className="mb-4" />
            <h1 className="text-foreground">RFQ Desk</h1>
            <p className="text-muted-foreground font-sans mt-2 max-w-xl">
              Submit your requirements below. We&apos;ll parse the data and securely route it to 2-3 vetted US facilities with the exact tooling and capacity you need.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex justify-center">
          <RFQDesk />
        </div>
      </main>
      <Footer />
    </>
  )
}
