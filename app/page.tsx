"use client";

import { useState, useMemo } from "react";

import { timelines } from "@/data";

import { TimelineCard } from "@/components/timeline-card";
import Hero from "./components/Hero";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTimelines = useMemo(() => {
    if (!searchQuery) return timelines;
    const query = searchQuery.toLowerCase();
    return timelines.filter(
      (timeline) =>
        timeline.title.toLowerCase().includes(query) ||
        timeline.description?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 relative">
      <Hero />
      {filteredTimelines.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          No timelines found matching your search.
        </p>
      ) : (
        <div className="grid sm:grid-cols-3 gap-4 items-center-safe">
          {filteredTimelines.map((timeline) => (
            <TimelineCard key={timeline.id} timeline={timeline} />
          ))}
          {[...filteredTimelines].splice(0, 2).map((timeline) => (
            <TimelineCard key={timeline.id} timeline={timeline} />
          ))}
        </div>
      )}
    </div>
  );
}
