export type Involved = {
  name: string
  role?: string
  avatar?: string
}

export type Event = {
  id: string
  date: string // "YYYY-MM-DD" format
  title: string
  description: string
  tags?: string[]
  involved?: Involved[]
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
  involved?: Involved[]
  media?: {
    url: string
    alt: string
    caption?: string
  }
  events: Event[]
}
