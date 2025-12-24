"use client";

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Media } from "@/types/timeline";
import { SafeImage } from "@/components/safe-image";
import ModalSlider from "./modal-slider";

interface EntityMediaProps {
  media: Array<Media>;
}

const SingleImage: React.FC<{ item: Media }> = ({ item }) => (
  <figure className="block mx-auto max-w-[336px]">
    <div className="relative max-h-64 overflow-hidden rounded-md shadow-lg border-4 border-white">
      <SafeImage
        src={item.src || "/placeholder.svg"}
        alt={item.alt}
        width={500}
        height={500}
        sizes="(max-width: 768px) 50vw, 336px"
        className="h-auto w-full"
      />
    </div>
    {item?.caption && (
      <figcaption className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1 leading-tight">
        {item.caption}
      </figcaption>
    )}
  </figure>
);

export function EntityMedia({ media }: EntityMediaProps) {
  if (!media || media.length === 0) return null;

  return <ModalSlider media={media} />;
}
