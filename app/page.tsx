import { Suspense } from "react";

import { timelines } from "@/data";

import Hero from "./components/Hero";
import TimelineSearch from "./components/TimelineSearch";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div
          role="status"
          aria-live="polite"
          className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground"
        >
          <Spinner className="size-4" />
          <span>Loading...</span>
        </div>
      }
    >
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 relative">
        <Hero />
        <TimelineSearch timelines={timelines} />
      </div>
    </Suspense>
  );
}
