import Link from "next/link";
import Image from "next/image";
import type { Timeline } from "@/types/timeline";

interface TimelineCardProps {
  timeline: Timeline;
}

export function TimelineCard({ timeline }: TimelineCardProps) {
  return (
    <Link
      href={`/timeline/${timeline.id}`}
      className="group block p-5 border border-border rounded-lg hover:border-foreground transition-colors"
    >
      <div className="flex items-start gap-4">
        {timeline.media && (
          <div className="relative w-14 h-14 shrink-0 rounded-md overflow-hidden bg-muted">
            <Image
              src={timeline.media.url || "/placeholder.svg"}
              alt={timeline.media.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-1 group-hover:text-foreground/80 transition-colors">
            {timeline.title}
          </h2>
          {timeline.description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {timeline.description}
            </p>
          )}
          <div className="mt-2 text-xs text-muted-foreground">
            {timeline.events.length} events
          </div>
        </div>
      </div>
    </Link>
  );
}
