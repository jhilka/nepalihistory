import { timelines } from "@/data"
import TimelineClient from "./TimelineClient"

export async function generateStaticParams() {
  return timelines.map((timeline) => ({
    id: timeline.id,
  }))
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  return <TimelineClient params={resolvedParams} />
}
