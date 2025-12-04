import { timelines } from "@/data";

import { TimelineCard } from "@/components/timeline-card";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 relative">
      <Hero />
      <div className="grid sm:grid-cols-3 gap-4 items-center-safe">
        {timelines.map((timeline) => (
          <TimelineCard key={timeline.id} timeline={timeline} />
        ))}
        {/* {[...timelines].splice(0, 2).map((timeline) => (
          <TimelineCard key={timeline.id} timeline={timeline} />
        ))} */}
      </div>
    </div>
  );
}
