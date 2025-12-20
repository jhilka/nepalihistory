"use client";

import type { TimelineEntry } from "@/types/timeline";

import { formatDateDisplay } from "@/lib/date-utils";

import { EntityMedia } from "./entity-media";
import { EntityInvolved } from "./entity-involved";
import { EntityTags } from "./entity-tags";
import { EntityLinks } from "./entity-links";

interface EntityCardProps {
  entry: TimelineEntry;
  entryNumber: number;
  totalEntries: number;
  isLast?: boolean;
}

const Date = ({ date }: { date: string | number }) => {
  const { year, month, day } = formatDateDisplay(date);
  return (
    <time className="block font-mono text-xs sm:text-sm text-center sm:text-left font-bold my-2 tabular-nums tracking-wide">
      {day && `${day}.`}
      {month && `${month}.`}
      {year}
    </time>
  );
};

export function EntityCard({
  entry,
  entryNumber,
  totalEntries,
  isLast = false,
}: EntityCardProps) {
  return (
    <div data-testid="event" className="relative group">
      {/* dot and time row */}
      <div
        className="sticky top-14 flex items-center sm:gap-5 w-full border-border/40 frosted p-2 -ml-2 rounded-l-3xl z-20 shadow-md"
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
        <a
          href={`#${entry.title.toLocaleLowerCase()}-${entry.id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(`${entry.title.toLocaleLowerCase()}-${entry.id}`)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <h3 className="text-base sm:text-lg ml-2 font-semibold leading-tight font-oswald text-balance">
            {entry.title}
          </h3>
        </a>
      </div>

      {/* line */}
      <div
        id={`${entry.title.toLocaleLowerCase()}-${entry.id}`}
        className="absolute left-3 sm:left-3.5 top-0 bottom-0 w-px sm:w-0.5 bg-national-blue drop-shadow-xs drop-shadow-white/20 scroll-mt-14 scroll-smooth"
        style={
          isLast
            ? {
                mask: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                WebkitMask:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
              }
            : undefined
        }
        aria-hidden="true"
      />

      <div className="pl-8 sm:pl-14 space-y-5">
        <div className="flex gap-2 items-center my-2">
          <Date date={entry.date} />
          {entry.endDate && (
            <>
              <span className="text-muted-foreground">-</span>
              <Date date={entry.endDate} />
            </>
          )}
        </div>
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

        {!!entry?.media && <EntityMedia media={entry?.media || []} />}
        {!!entry?.involved && (
          <EntityInvolved involved={entry.involved || []} />
        )}
        {/* {!!entry?.tags && <EntityTags tags={entry.tags || []} />} */}
        {!!entry?.links && <EntityLinks links={entry.links || []} />}
      </div>
    </div>
  );
}
