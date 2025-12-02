import type { Event } from "@/types/timeline";
import Link from "next/link";
import { formatDateDisplay } from "@/lib/date-utils";
import { EventMedia } from "./event-media";
import { EventInvolved } from "./event-involved";
import { EventTags } from "./event-tags";
import { EventLinks } from "./event-links";

interface EventCardProps {
  event: Event;
  eventNumber: number;
  totalEvents: number;
  isLast?: boolean;
}

export function EventCard({
  event,
  eventNumber,
  totalEvents,
  isLast = false,
}: EventCardProps) {
  const { year, month, day } = formatDateDisplay(event.date);

  return (
    <div data-testid="event" className="relative pb-6 sm:pb-8 group">
      {/* dot and time row */}
      <div
        className="sticky top-14 flex items-center sm:gap-5 w-full border-border/40 frosted p-2 -ml-2 rounded-l-3xl z-20"
        style={{
          mask: "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
          WebkitMask:
            "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
        }}
      >
        {/* dot */}
        <div
          className="size-6 sm:size-7 bg-
        q-blue shadow-lg text-white rounded-full flex items-center justify-center font-oswald text-[10px] sm:text-xs font-bold"
        >
          <span className="tabular-nums">
            {eventNumber}/{totalEvents}
          </span>
        </div>
        <time className="flex-1 -ml-5 sm:ml-0 font-mono text-sm sm:text-sm text-center sm:text-left font-medium text-muted-foreground tabular-nums tracking-wide">
          {day && `${day}.`}
          {month && `${month}.`}
          {year}
        </time>
      </div>

      {/* line */}
      {!isLast && (
        <div
          className="absolute left-3 sm:left-3.5 top-0 bottom-0 w-px sm:w-0.5 bg-national-blue drop-shadow-xs drop-shadow-white/20"
          aria-hidden="true"
        />
      )}

      <div className="pl-8 sm:pl-14 space-y-3">
        <Link href={`#${event.title}`}>
          <h3
            id={event.title}
            className="text-lg my-3 font-semibold leading-snug font-oswald text-balance scroll-mt-28"
          >
            {event.title}
          </h3>
        </Link>
        <div
          className="text-sm text-muted-foreground leading-relaxed prose-event"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />

        {!!event?.media && <EventMedia media={event.media || []} />}
        {!!event?.involved && <EventInvolved involved={event.involved || []} />}
        {!!event?.tags && <EventTags tags={event.tags || []} />}
        {!!event?.links && <EventLinks links={event.links || []} />}
      </div>
    </div>
  );
}
