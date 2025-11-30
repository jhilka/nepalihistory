import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { timelines } from "@/data";
import { groupEventsByYear } from "@/lib/date-utils";

import { EventCard } from "@/components/event-card";

interface TimelinePageProps {
  params: { id: string };
}

export default function TimelineClient({ params }: TimelinePageProps) {
  const timeline = timelines.find((t) => t.id === params.id);

  if (!timeline) {
    notFound();
  }

  const groupedEvents = groupEventsByYear(timeline.events);
  const years = Object.keys(groupedEvents).sort((a, b) => {
    const yearA = a.includes("-") ? Number.parseInt(a) : Number.parseInt(a);
    const yearB = b.includes("-") ? Number.parseInt(b) : Number.parseInt(b);
    return yearA - yearB;
  });

  const totalEvents = timeline.events.length;
  let eventCounter = 0;

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

      <header className="mb-8 flex flex-col items-center gap-4">
        {timeline.media && (
          <div className="relative size-20 shrink-0 rounded-lg overflow-hidden bg-muted shadow">
            <Image
              src={timeline.media.url || "/placeholder.svg"}
              alt={timeline.media.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="space-y-2 flex-1 text-center">
          <h1 className="text-2xl md:text-3xl font-oswald font-bold tracking-tight text-balance">
            {timeline.title}
          </h1>

          {timeline.description && (
            <p className="text-muted-foreground text-sm leading-snug">
              {timeline.description}
            </p>
          )}
          <p className="text-xs text-muted-foreground">{totalEvents} events</p>
        </div>
      </header>

      <>
        {years.map((year) => {
          const yearEvents = groupedEvents[year];

          return (
            <div key={year} className="relative">
              <>
                {yearEvents.map((event, idx) => {
                  eventCounter++;
                  const isLastOverall = eventCounter === totalEvents;

                  return (
                    <EventCard
                      key={event.id}
                      event={event}
                      eventNumber={eventCounter}
                      totalEvents={totalEvents}
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
