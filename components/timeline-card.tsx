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
      className="group bg-background block overflow-hidden shadow-md rounded-md"
    >
      {timeline.media && (
        <div className="relative w-full aspect-16/10 bg-muted">
          <Image
            src={timeline.media.url || "/placeholder.svg"}
            alt={timeline.media.alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 sm:top-3 sm:right-3 text-[10px] text-black/80 px-1.5 py-0.5 bg-white rounded-2xl">
            <strong>{timeline.events.length}</strong> events
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-3 text-white">
            <h2 className="text-xl sm:text-lg font-oswald font-semibold line-clamp-2">
              {timeline.title}
            </h2>
            {timeline.media.caption && (
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                {timeline.media.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
