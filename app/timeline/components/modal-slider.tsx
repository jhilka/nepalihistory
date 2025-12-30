"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { CrossIcon } from "lucide-react";

import { Media } from "@/types/timeline";

import { SafeImage } from "@/components/safe-image";

export type ModalSliderProps = {
  media: Media[];
};

const ModalSlider: React.FC<ModalSliderProps> = ({ media }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    return () => {
      // reset body overflow when unmounting
      if (!isOpen) return;
      document.body.style.overflow = "auto";
    };
  }, []);

  const openAt = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
    // attempt to move slider after it initializes
    setTimeout(() => (modalInstanceRef.current as any)?.moveToIdx?.(index), 0);
    // set body overflow hidden to prevent background scroll
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const [modalRef, modalInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: startIndex,
    loop: true,
    slides: { perView: 1, spacing: 10 },
  });

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (media.length === 0) return null;

  return (
    <>
      {/* stacked thumbnails preview (always visible) */}
      <div className="relative w-[220px] h-68 mx-auto">
        {media.slice(0, 4).map((m, i) => {
          const zIndex = 1 - i;
          const rotation = i * 4;

          return (
            <button
              key={i}
              onClick={() => openAt(i)}
              aria-label={`Open photo ${i + 1} of ${media.length}`}
              className="absolute focus:outline-none"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                zIndex,
              }}
            >
              {/* IMAGE CARD */}
              <div className="relative size-[260px] sm:size-70 overflow-hidden rounded-md shadow-lg border-4 border-white">
                <SafeImage
                  src={m.src}
                  alt={m.alt || ""}
                  fill
                  sizes="220px"
                  className="object-cover aspect-auto w-full h-full"
                />
              </div>
            </button>
          );
        })}

        {media.length > 1 && (
          <div className="absolute -top-4 -right-4 frosted rounded px-2 py-1 text-sm shadow-lg z-1">
            +{media.length - 1}
          </div>
        )}
      </div>

      {/* modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg m-0!"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="max-w-[90vw] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close gallery"
              onClick={close}
              className="float-right px-3 py-1 text-white/90 rounded cursor-pointer"
            >
              ✕
            </button>

            <div ref={modalRef} className="keen-slider">
              {media.map((item, idx) => (
                <figure
                  key={idx}
                  className="keen-slider__slide px-2 media-frame"
                >
                  <div className="zoom-layer">
                    <SafeImage
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 80vw"
                      className="object-contain"
                    />
                  </div>
                  {item?.caption && (
                    <figcaption className="absolute bottom-0 text-xs text-center text-gray-200 mt-4 leading-tight max-w-[90vw]">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSlider;
