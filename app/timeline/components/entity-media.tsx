import { Media } from "@/types/timeline";
import { SafeImage } from "@/components/safe-image";

interface EntityMediaProps {
  media: Array<Media>;
}

export function EntityMedia({ media }: EntityMediaProps) {
  if (!media || media.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {media.map((item, idx) => (
        <figure key={idx} className="inline-block max-w-[336px]">
          <div className="relative max-h-64 overflow-hidden rounded-md shadow-lg border-4 border-white">
            <SafeImage
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={500}
              height={500}
              sizes="(max-width: 768px) 50vw, 336px"
              className="h-auto w-full rounded-md"
            />
          </div>
          {item?.caption && (
            <figcaption className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1 leading-tight">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
