import { timelines } from "@/data";

import Hero from "./components/Hero";
import TimelineSearch from "./components/TimelineSearch";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 relative">
      <Hero />
      <TimelineSearch timelines={timelines} />
    </div>
  );
}
