import { Suspense } from "react";

import { timelines } from "@/data";
import { books } from "@/data/books";

import Hero from "./components/Hero";
import HomeContentSearch from "./components/HomeContentSearch";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  const allContent = [...books, ...timelines];

  console.log("Books:", books.length, "Timelines:", timelines.length);

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
        <HomeContentSearch items={allContent} />
      </div>
    </Suspense>
  );
}
