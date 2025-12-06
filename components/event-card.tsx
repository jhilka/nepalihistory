"use client";

import type { TimelineEntry } from "@/types/timeline";
import Link from "next/link";
import { formatDateDisplay } from "@/lib/date-utils";
import { EventMedia } from "./event-media";
import { EventInvolved } from "./event-involved";
import { EventTags } from "./event-tags";
import { EventLinks } from "./event-links";

interface EventCardProps {
  entry: TimelineEntry;
  entryNumber: number;
  totalEntries: number;
  isLast?: boolean;
}

export function EventCard({
  entry,
  entryNumber,
  totalEntries,
  isLast = false,
}: EventCardProps) {
  const { year, month, day } = formatDateDisplay(entry.date);

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
            {entryNumber}/{totalEntries}
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
        <Link
          href={`#${entry.title}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(entry.title)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3
            id={entry.title}
            className="text-lg my-3 font-semibold leading-snug font-oswald text-balance scroll-mt-26 sm:scroll-mt-28"
          >
            {entry.title}
          </h3>
        </Link>
        {entry.description &&
          (typeof entry.description === "string" ? (
            <div
              className="text-sm text-muted-foreground leading-relaxed prose-event"
              dangerouslySetInnerHTML={{ __html: entry.description }}
            />
          ) : (
            <div className="text-sm text-muted-foreground leading-relaxed prose-event">
              {entry.description}
            </div>
          ))}

        {!!entry?.media && <EventMedia media={entry?.media || []} />}
        {!!entry?.involved && <EventInvolved involved={entry.involved || []} />}
        {!!entry?.tags && <EventTags tags={entry.tags || []} />}
        {!!entry?.links && <EventLinks links={entry.links || []} />}
      </div>
    </div>
  );
}
