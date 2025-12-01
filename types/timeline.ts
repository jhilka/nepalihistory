export type Event = {
  id: string
  date: string // "YYYY-MM-DD" format
  title: string
  description: string
  tags?: string[]
  links?: Array<{
    url: string
    label: string
  }>
  media?: Array<{
    url: string
    alt: string
    caption?: string
  }>
}

export type Timeline = {
  id: string
  title: string
  description?: string
  media?: {
    url: string
    alt: string
    caption?: string
  }
  events: Event[]
}
