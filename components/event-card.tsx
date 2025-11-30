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
        className="sticky top-14 flex items-center sm:gap-5 w-full border-border/40 frosted p-2 -ml-2 rounded-l-3xl z-20"
        style={{
          mask: "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
          WebkitMask:
            "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
        }}
      >
        {/* dot */}
        <div className="size-6 sm:size-7 bg-national-blue shadow-lg text-white rounded-full flex items-center justify-center font-oswald text-[10px] sm:text-xs font-bold">
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
            className="text-lg my-3 font-semibold leading-snug font-oswald text-balance scroll-mt-28 sm:scroll-mt-30"
          >
            {event.title}
          </h3>
        </Link>
        <div
          className="text-sm text-muted-foreground leading-relaxed prose-event"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />

        {event.media && event.media.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {event.media.map((item, idx) => (
              <div
                key={idx}
                className="relative max-h-64 rounded-md overflow-hidden shadow-md"
              >
                <Image
                  src={item.url || "/placeholder.svg"}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="h-auto max-h-64 w-auto rounded-md"
                  sizes="(max-width: 768px) 50vw, 336px"
                  loading="lazy"
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
                className="text-[10px] px-2 py-0.5 bg-muted-foreground/20 text-muted-foreground rounded-full font-medium"
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
