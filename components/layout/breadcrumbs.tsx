import Link from "next/link"
import { Jsonld } from "@/components/primitives/jsonld"
import { breadcrumbJsonLd } from "@/lib/jsonld"

export interface Crumb {
  name: string
  path: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items.length) return null
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Jsonld data={breadcrumbJsonLd(full)} />
      <ol>
        {full.map((c, i) => {
          const isLast = i === full.length - 1
          return (
            <li key={c.path}>
              {isLast ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <>
                  <Link href={c.path}>{c.name}</Link>
                  <span className="breadcrumbs-sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
