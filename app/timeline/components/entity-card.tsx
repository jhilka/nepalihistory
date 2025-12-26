"use client";

import type { TimelineEntry } from "@/types/timeline";

import DateComponent from "@/app/components/DateComponent";
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

export function EntityCard({
  entry,
  entryNumber,
  totalEntries,
  isLast = false,
}: EntityCardProps) {
  const id = `${entry.title.toLocaleLowerCase()}-${entry.id}`;
  return (
    <div data-testid="event" className="relative group">
      {/* dot and title row */}
      <div
        className="sticky top-14 flex items-center sm:gap-3 w-full border border-border/60 dark:border-border/40 frosted p-1 -ml-2 rounded-l-3xl z-20 shadow-md"
        style={{
          mask: "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
          WebkitMask:
            "linear-gradient(to right, black 0%, black 85%, transparent 100%)",
        }}
      >
        {/* dot */}
        <div className="size-6 sm:size-7 bg-national-blue shadow-lg text-white rounded-full shrink-0 flex items-center justify-center font-oswald text-[10px] font-bold leading-none">
          <span className="tabular-nums">
            {entryNumber}/{totalEntries}
          </span>
        </div>
        <a
          className="w-full"
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <h3 className="w-full text-base sm:text-lg ml-2 sm:ml-0 font-semibold leading-none font-oswald text-balance text-shadow-md">
            {entry.title}
          </h3>
        </a>
      </div>

      {/* line */}
      <div
        id={`${entry.title.toLocaleLowerCase()}-${entry.id}`}
        className="absolute left-2 sm:left-2.5 top-0 bottom-0 w-px sm:w-0.5 bg-national-blue scroll-mt-14 scroll-smooth"
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

      <div className="pl-7 sm:pl-9 space-y-5">
        <div className="flex gap-2 items-center my-2">
          <DateComponent date={entry.date} />
          {entry.endDate && (
            <>
              <span className="text-muted-foreground">-</span>
              <DateComponent date={entry.endDate} />
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
