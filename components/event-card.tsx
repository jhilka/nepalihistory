import type { Event } from "@/types/timeline";
import Image from "next/image";
import Link from "next/link";
import { formatDateDisplay } from "@/lib/date-utils";

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
        className="sticky top-14 flex items-center sm:gap-5 w-full border-border/40 bg-background/60 backdrop-blur-lg supports-backdrop-filter:bg-background/60 py-2 z-20 rounded-3xl"
        style={{
          mask: "linear-gradient(to right, black 0%, black 70%, transparent 90%)",
          WebkitMask:
            "linear-gradient(to right, black 0%, black 70%, transparent 90%)",
        }}
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 bg-foreground shadow-lg text-background rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">
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
          className="absolute left-3.5 sm:left-[18px] top-0 bottom-0 w-0.5 bg-border"
          aria-hidden="true"
        />
      )}

      <div className="pl-8 sm:pl-14 space-y-3">
        <Link href={`#${event.title}`}>
          <h3
            id={event.title}
            className="text-lg my-3 font-semibold leading-snug text-balance scroll-mt-28 sm:scroll-mt-30"
          >
            {event.title}
          </h3>
        </Link>
        <div
          className="text-sm text-muted-foreground leading-relaxed prose-event"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />

        {event.media && event.media.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-2">
            {event.media.map((item, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-video rounded-md overflow-hidden bg-muted"
              >
                <Image
                  src={item.url || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 336px"
                />
              </div>
            ))}
          </div>
        )}

        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {event.links && event.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {event.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.label}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
