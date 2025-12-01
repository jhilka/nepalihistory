import Image from "next/image";

interface EventMediaProps {
  media: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}

export function EventMedia({ media }: EventMediaProps) {
  if (!media || media.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {media.map((item, idx) => (
        <div key={idx} className="space-y-1 inline-block">
          <div className="relative max-h-64 rounded-md overflow-hidden shadow-md">
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
        </div>
      ))}
    </div>
  );
}
