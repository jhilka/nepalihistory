"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { assetPath } from "@/lib/asset-path";

interface SafeImageProps extends Omit<ImageProps, "src" | "onError"> {
  src?: string;
}

export function SafeImage({ src, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(assetPath(src || ""));

  if (!imgSrc) return null;

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      loading={props.loading ?? "lazy"}
      onError={() => setImgSrc("")}
    />
  );
}
