import { ContentCard } from "./content-card";
import type { Timeline } from "@/types/timeline";

interface TimelineCardProps {
  timeline: Timeline;
}

export function TimelineCard({ timeline }: TimelineCardProps) {
  return (
    <ContentCard
      href={`/timeline/${timeline.id}`}
      title={timeline.title}
      description={timeline.description}
      coverImage={timeline.coverMedia?.src}
      coverAlt={timeline.coverMedia?.alt}
      badge={{
        label: "entries",
        value: timeline.entries?.length || 0,
      }}
    />
  );
}
