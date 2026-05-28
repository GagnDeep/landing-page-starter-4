import Link from "next/link"

interface Props {
  title: string
}

export function BlogBreadcrumbRow({ title }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="blog-breadcrumb-row">
      <ol>
        <li>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
        </li>
        <li>
          <Link href="/blog/">Journal</Link>
          <span aria-hidden="true">/</span>
        </li>
        <li>
          <span aria-current="page">{title}</span>
        </li>
      </ol>
    </nav>
  )
}
