import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";

type ContentCardProps = {
  href: string;
  title: string;
  description?: string;
  coverImage?: string;
  coverAlt?: string;
  badge?: {
    label: string;
    value: number | string;
  };
  metadata?: string;
  className?: string;
  aspectRatio?: "landscape" | "portrait";
};

export function ContentCard({
  href,
  title,
  description,
  coverImage,
  coverAlt,
  badge,
  metadata,
  className,
  aspectRatio = "landscape",
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group bg-background block overflow-hidden shadow-md rounded-md hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full bg-muted",
          aspectRatio === "portrait" ? "aspect-10/16" : "aspect-16/10"
        )}
      >
        <Image
          src={assetPath(coverImage || "/placeholder.avif")}
          alt={coverAlt || title}
          fill
          sizes={
            aspectRatio === "portrait"
              ? "(max-width: 768px) 100vw, 200px"
              : "(max-width: 768px) 100vw, 400px"
          }
          className={cn(
            "object-cover group-hover:scale-105 transition-transform duration-300",
            aspectRatio === "portrait" ? "object-center" : "object-top",
            { "object-center": !coverImage }
          )}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {badge && (
          <div className="absolute top-4 right-4 sm:top-3 sm:right-3 text-[10px] text-black/80 px-1.5 py-0.5 bg-white rounded-2xl">
            <strong>{badge.value}</strong> {badge.label}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-3 text-white">
          <h2 className="text-md sm:text-lg font-oswald font-semibold line-clamp-2 leading-[1.15] mb-1">
            {title}
          </h2>
          {description && (
            <p className="text-xs text-white/80 line-clamp-1">{description}</p>
          )}
          {metadata && (
            <p className="text-[10px] text-white/60 mt-1">{metadata}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
