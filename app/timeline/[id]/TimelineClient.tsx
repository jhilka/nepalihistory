import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { timelines } from "@/data";
import { groupEntriesByYear } from "@/lib/date-utils";

import { EventCard } from "@/components/event-card";
import { EventInvolved } from "@/components/event-involved";

interface TimelinePageProps {
  params: { id: string };
}

export default function TimelineClient({ params }: TimelinePageProps) {
  const timeline = timelines.find((t) => t.id === params.id);

  if (!timeline) {
    notFound();
  }

  // Support both entries and events (backward compatibility)
  const entries = timeline.entries || timeline.events || [];
  const groupedEntries = groupEntriesByYear(entries);
  const years = Object.keys(groupedEntries).sort((a, b) => {
    const yearA = a.includes("-") ? Number.parseInt(a) : Number.parseInt(a);
    const yearB = b.includes("-") ? Number.parseInt(b) : Number.parseInt(b);
    return yearA - yearB;
  });

  const totalEntries = entries.length;
  let entryCounter = 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-8 relative">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </Link>

      <header className="mb-8 flex flex-col items-center gap-6">
        {timeline.coverMedia && (
          <div className="relative size-32 shrink-0 rounded-lg overflow-hidden bg-muted shadow">
            <Image
              src={timeline.coverMedia?.src || "/placeholder.svg"}
              alt={timeline.coverMedia?.alt || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl md:text-3xl font-oswald font-bold tracking-tight text-balance">
            {timeline.title}
          </h1>

          {timeline.description && (
            <p className="text-muted-foreground text-sm leading-snug">
              {timeline.description}
            </p>
          )}
          {timeline.involved && timeline.involved.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <EventInvolved involved={timeline.involved} />
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            <strong>{totalEntries}</strong> entries
          </p>
        </div>
      </header>

      <>
        {years.map((year) => {
          const yearEntries = groupedEntries[year];

          return (
            <div key={year} className="relative">
              <>
                {yearEntries.map((entry, idx) => {
                  entryCounter++;
                  const isLastOverall = entryCounter === totalEntries;

                  return (
                    <EventCard
                      key={entry.id}
                      entry={entry}
                      entryNumber={entryCounter}
                      totalEntries={totalEntries}
                      isLast={isLastOverall}
                    />
                  );
                })}
              </>
            </div>
          );
        })}
      </>
    </div>
  );
}
