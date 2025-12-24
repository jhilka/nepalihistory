import Link from "next/link";
import Image from "next/image";
import type { Timeline } from "@/types/timeline";
import { assetPath } from "@/lib/asset-path";

interface TimelineCardProps {
  timeline: Timeline;
}

export function TimelineCard({ timeline }: TimelineCardProps) {
  const media = timeline.coverMedia;

  return (
    <Link
      href={`/timeline/${timeline.id}`}
      className="group bg-background block overflow-hidden shadow-md rounded-md"
    >
      {media && (
        <div className="relative w-full aspect-16/10 bg-muted">
          <Image
            src={assetPath(media.src || "/placeholder.svg")}
            alt={media.alt}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 sm:top-3 sm:right-3 text-[10px] text-black/80 px-1.5 py-0.5 bg-white rounded-2xl">
            <strong>{timeline?.entries?.length}</strong> entries
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-3 text-white">
            <h2 className="text-xl sm:text-lg font-oswald font-semibold line-clamp-2 leading-[1.15] mb-1">
              {timeline.title}
            </h2>
            {/* {timeline.involved && timeline.involved.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {timeline.involved.slice(0, 3).map((entity, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full"
                  >
                    {entity.name}
                  </span>
                ))}
                {timeline.involved.length > 3 && (
                  <span className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full">
                    +{timeline.involved.length - 3}
                  </span>
                )}
              </div>
            )} */}
            {timeline.description && (
              <p className="text-xs text-white/80 line-clamp-1">
                {timeline.description}
              </p>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
