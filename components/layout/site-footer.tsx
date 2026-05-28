import Link from "next/link"
import { SunMotif } from "@/components/primitives/sun-motif"
import {
  site,
  telLink,
  whatsappLink,
} from "@/lib/config/site.config"

/**
 * Footer rebuilt as a real internal-link hub.
 *
 * The prior version was four i18n placeholder columns with no outbound
 * links — a missed opportunity on the highest trust-bearing region of
 * any page. Now ships visible NAP (name / address / phone) that matches
 * the LocalBusiness JSON-LD verbatim, plus a service-area index that
 * surfaces every district as a crawlable link. This is the single most
 * impactful local-SEO change in the layout layer.
 */
export function SiteFooter() {
  const districts = site.content.districts
  const halfway = Math.ceil(districts.length / 2)
  const colA = districts.slice(0, halfway)
  const colB = districts.slice(halfway)

  return (
    <footer className="site-foot">
      <div className="container foot-grid">
        <div className="foot-brand">
          <SunMotif size={36} />
          <div>
            <div className="serif foot-name">{site.name}</div>
            <div className="mono foot-sub">
              {site.address.locality} · since {site.foundingYear}
            </div>
            {site.rating.count > 0 && (
              <a
                href={site.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="foot-rating mono"
                aria-label={`Read ${site.rating.count} Google reviews — rated ${site.rating.value}`}
              >
                ★ {site.rating.value.toFixed(1)} ·{" "}
                {site.rating.count.toLocaleString()} reviews
              </a>
            )}
          </div>
        </div>

        <nav aria-labelledby="foot-areas" className="foot-col foot-col-areas">
          <div id="foot-areas" className="label">
            Service areas
          </div>
          <div className="foot-area-cols">
            <ul>
              {colA.map((d) => (
                <li key={d.slug}>
                  <Link href={`/service-areas/${d.slug}/`}>
                    Solar in {d.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {colB.map((d) => (
                <li key={d.slug}>
                  <Link href={`/service-areas/${d.slug}/`}>
                    Solar in {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav aria-labelledby="foot-resources" className="foot-col">
          <div id="foot-resources" className="label">
            Resources
          </div>
          <ul>
            <li>
              <Link href="/calculator/">Savings calculator</Link>
            </li>
            <li>
              <Link href="/packages/">Solar packages</Link>
            </li>
            <li>
              <Link href="/how-it-works/">How it works</Link>
            </li>
            <li>
              <Link href="/subsidy/">Federal tax credit</Link>
            </li>
            <li>
              <Link href="/case-studies/">Case studies</Link>
            </li>
            <li>
              <Link href="/blog/">Journal</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ</Link>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="foot-company" className="foot-col">
          <div id="foot-company" className="label">
            Company
          </div>
          <ul>
            <li>
              <Link href="/about/">About us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="/privacy/">Privacy policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms</Link>
            </li>
            <li>
              <a href="/sitemap.xml">Sitemap</a>
            </li>
            <li>
              <a href="/blog/rss.xml">RSS feed</a>
            </li>
          </ul>
        </nav>

        <div className="foot-col foot-col-contact">
          <div className="label">Contact</div>
          <address className="foot-nap">
            <span className="foot-nap-name serif">{site.legalName}</span>
            <span>
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.regionCode}{" "}
              {site.address.postalCode}
            </span>
            <a href={telLink()} className="foot-link">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="foot-link">
              {site.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="foot-link"
            >
              WhatsApp us
            </a>
            <span className="foot-hours mono">{site.hoursHuman}</span>
            <span className="foot-license mono">
              {site.businessIdLabel}: {site.businessId}
            </span>
          </address>
        </div>
      </div>
      <div className="foot-bottom mono container">
        <span>
          © {new Date().getFullYear()} {site.legalName}. All rights
          reserved.
        </span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  )
}
