"use client";

import type { Timeline } from "@/types/timeline";
import { TimelineCard } from "@/components/timeline-card";
import ContentSearch from "@/components/content-search";

type Props = {
  timelines: Timeline[];
};

export default function TimelineSearch({ timelines }: Props) {
  return (
    <ContentSearch
      items={timelines}
      placeholder="Search timelines (title, tags, events)"
      searchLabel="Search timelines"
      emptyTitle="No timelines found"
      emptyDescription="Try a different search term or clear the filter."
      renderCard={(timeline) => <TimelineCard timeline={timeline} />}
    />
  );
}
