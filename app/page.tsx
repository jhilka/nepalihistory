"use client";

import { useState, useMemo } from "react";

import { timelines } from "@/data";

import { TimelineCard } from "@/components/timeline-card";

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
    <>
      {/* <Navbar
        onSearch={setSearchQuery}
        showSearch
        searchPlaceholder="Search timelines..."
      /> */}

      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 relative">
        <header className="mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Timeline Explorer
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
            Explore historical events through clean, minimal timelines
          </p>
        </header>

        {filteredTimelines.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No timelines found matching your search.
          </p>
        ) : (
          <div className="grid gap-4">
            {filteredTimelines.map((timeline) => (
              <TimelineCard key={timeline.id} timeline={timeline} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
