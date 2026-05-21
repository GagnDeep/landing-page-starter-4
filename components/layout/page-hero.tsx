import type { ReactNode } from "react"
import { Eyebrow } from "@/components/primitives/eyebrow"

interface Props {
  eyebrow: string
  titleHtml: string
  lead?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, titleHtml, lead, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="display"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
