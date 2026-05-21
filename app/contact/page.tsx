import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Icon } from "@/components/primitives/icon"
import { Jsonld } from "@/components/primitives/jsonld"
import { contactPageJsonLd } from "@/lib/jsonld"
import { site, whatsappLink, telLink } from "@/lib/config/site.config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact — phone, WhatsApp, Patiala office",
  description: `Reach ${site.name} in ${site.address.locality}. Phone ${site.phone}, WhatsApp, email ${site.email}. Mon–Sat 9:00–19:00. A real human, not a bot.`,
  path: "/contact/",
})

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact/" }]} />
        </div>
        <PageHero
          eyebrow="Contact"
          titleHtml="Sat sri akaal —<br/>let's <em>talk</em>."
          lead="A real human picks up the phone and answers WhatsApp within an hour, Monday to Saturday, 9 AM to 7 PM."
        />
        <section className="tight">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              <div className="card">
                <Eyebrow>Office</Eyebrow>
                <address style={{ marginTop: 16, fontStyle: "normal" }}>
                  {site.address.street}
                  <br />
                  {site.address.locality} {site.address.postalCode}
                  <br />
                  {site.address.region}, {site.address.countryName}
                </address>
              </div>
              <div className="card">
                <Eyebrow>Phone &amp; WhatsApp</Eyebrow>
                <p style={{ marginTop: 16 }}>
                  <a href={telLink()}>{site.phone}</a>
                </p>
                <p style={{ marginTop: 12 }}>
                  <a
                    href={whatsappLink()}
                    className="btn btn-gold btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.whatsapp /> WhatsApp
                  </a>
                </p>
              </div>
              <div className="card">
                <Eyebrow>Email</Eyebrow>
                <p style={{ marginTop: 16 }}>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
              <div className="card">
                <Eyebrow>Hours</Eyebrow>
                <p style={{ marginTop: 16 }}>{site.hoursHuman}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Jsonld data={contactPageJsonLd()} />
    </>
  )
}
