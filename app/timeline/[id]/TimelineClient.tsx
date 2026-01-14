import { ChevronsDown } from "lucide-react";
import { EntityCard } from "@/app/timeline/components/entity-card";
import { EntityInvolved } from "@/app/timeline/components/entity-involved";
import { TableOfContents } from "@/app/timeline/components/table-of-contents";
import Link from "next/link";
import { SafeImage } from "@/components/safe-image";
import { Timeline } from "@/types/timeline";
import { TimelineNavigation } from "@/components/timeline-navigation";
import { groupEntriesByYear } from "@/lib/date-utils";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

interface TimelinePageProps {
  params: string;
  timeline: Timeline;
}

export default async function TimelineClient({
  params,
  timeline,
}: TimelinePageProps) {
  // Support both entries and events (backward compatibility)
  const entries = timeline.entries || [];

  const groupedEntries = groupEntriesByYear(entries);
  const years = Object.keys(groupedEntries).sort((a, b) => {
    const yearA = a.includes("-") ? Number.parseInt(a) : Number.parseInt(a);
    const yearB = b.includes("-") ? Number.parseInt(b) : Number.parseInt(b);
    return yearA - yearB;
  });

  const totalEntries = entries.length;
  let entryCounter = 0;

  return (
    <>
      <TimelineNavigation />
      <div className="p-4 md:py-4 relative">
        <header className="page-content-width mb-8 flex flex-col items-center gap-6">
          <Link
            href="/"
            className="inline-flex self-start items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
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
          {timeline.coverMedia && (
            <div className="relative size-32 shrink-0 rounded-lg overflow-hidden bg-muted shadow-lg">
              <SafeImage
                src={timeline.coverMedia?.src || "/placeholder.avif"}
                alt={timeline.coverMedia?.alt || ""}
                fill
                className={cn("object-cover", {
                  "scale-125": !timeline.coverMedia?.src,
                })}
              />
            </div>
          )}
          <div className="flex-1 text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl md:text-3xl font-oswald font-bold tracking-tight text-balance text-shadow-md">
              {timeline.title}
            </h1>

            {timeline.description && (
              <p className="text-muted-foreground text-sm leading-snug">
                {timeline.description}
              </p>
            )}
            <p className="flex w-full justify-center gap-1 text-xs text-muted-foreground">
              <ChevronsDown className="size-4" aria-hidden="true" />
              <strong>{totalEntries}</strong> entries
            </p>
          </div>
        </header>

        <div className="grid grid-cols-[1fr_auto_1fr]">
          <div></div>
          <div className="page-content-width px-4 justify-self-center">
            {years.map((year) => {
              const yearEntries = groupedEntries[year];

              return (
                <div key={year} className="relative">
                  <>
                    {yearEntries.map((entry) => {
                      entryCounter++;
                      const isLastOverall = entryCounter === totalEntries;

                      return (
                        <EntityCard
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
          </div>
          <TableOfContents
            entries={entries}
            className="hidden xl:block w-64 shrink-0 sticky top-24 self-start justify-self-start pl-8"
          />
        </div>
        {timeline.involved && timeline.involved.length > 0 && (
          <>
            <div className="text-xs text-center my-2">Key figures:</div>
            <div className="flex flex-wrap justify-center gap-4 my-3 sm:my-4">
              <EntityInvolved involved={timeline.involved} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
