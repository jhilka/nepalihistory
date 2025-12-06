import { Media } from "@/types/timeline";
import { SafeImage } from "./safe-image";

interface EventMediaProps {
  media: Array<Media>;
}

export function EventMedia({ media }: EventMediaProps) {
  if (!media || media.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {media.map((item, idx) => (
        <div key={idx} className="space-y-1 inline-block">
          <div className="relative max-h-64 rounded-md overflow-hidden shadow-md">
            <SafeImage
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={500}
              height={500}
              className="h-auto max-h-64 w-auto rounded-md"
              sizes="(max-width: 768px) 50vw, 336px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
