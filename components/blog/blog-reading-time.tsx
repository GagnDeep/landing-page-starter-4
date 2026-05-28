interface Props {
  minutes: number
}

export function BlogReadingTime({ minutes }: Props) {
  return (
    <span className="blog-reading-time mono" aria-label={`${minutes} minute read`}>
      {minutes} min read
    </span>
  )
}
