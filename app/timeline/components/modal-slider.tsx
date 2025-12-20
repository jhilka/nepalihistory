"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Media } from "@/types/timeline";
import { SafeImage } from "@/components/safe-image";
import { CrossIcon } from "lucide-react";

export type ModalSliderProps = {
  media: Media[];
};

const ModalSlider: React.FC<ModalSliderProps> = ({ media }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

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

  return (
    <>
      {/* stacked thumbnails preview (always visible) */}
      <div className="relative w-[220px] h-42 mx-auto">
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
              <div className="relative w-56 h-36 overflow-hidden rounded-md shadow-lg border-4 border-white">
                <SafeImage
                  src={m.src || "/placeholder.svg"}
                  alt={m.alt || ""}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </button>
          );
        })}

        {media.length && (
          <div className="absolute -top-2 right-0 frosted rounded px-2 py-1 text-sm shadow-lg z-1">
            +{media.length - 1}
          </div>
        )}
      </div>

      {/* modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs m-0!"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="max-w-[90vw] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* stacked thumbnails in normal flow above the slider inside modal */}
            {/* <div className="mb-4 flex justify-center pointer-events-auto">
              <div className="relative w-[160px] h-14">
                {media.slice(0, 4).map((m, i) => {
                  const z = 100 - i;
                  const rot = (i - 1.5) * 3;
                  return (
                    <button
                      key={i}
                      onClick={() =>
                        (modalInstanceRef.current as any)?.moveToIdx?.(i)
                      }
                      className="absolute focus:outline-none"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%,-50%) translate(${i * 6}px, ${-i * 3}px) rotate(${rot}deg)`,
                        zIndex: z,
                        width: 96,
                        height: 56,
                      }}
                      aria-label={`Jump to photo ${i + 1}`}
                    >
                      <div className="h-14 w-auto overflow-hidden rounded-md shadow-lg border-2 border-white">
                        <SafeImage
                          src={m.src || "/placeholder.svg"}
                          alt={m.alt}
                          width={192}
                          height={128}
                          sizes="96px"
                          className="h-full w-auto rounded-md"
                        />
                      </div>
                    </button>
                  );
                })}

                {media.length > 4 && (
                  <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-gray-800 rounded px-2 py-1 text-xs shadow">
                    +{media.length - 4}
                  </div>
                )}
              </div>
            </div> */}

            <button
              aria-label="Close gallery"
              onClick={close}
              className="float-right px-3 py-1 text-white/90 rounded cursor-pointer"
            >
              ✕
            </button>

            <div ref={modalRef} className="keen-slider">
              {media.map((item, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide flex flex-col items-center justify-center"
                >
                  <div className="w-full flex items-center justify-center px-4">
                    <div className="max-w-[90vw] sm:max-w-[900px] max-h-[70vh] md:max-h-[80vh] w-full flex items-center justify-center">
                      <SafeImage
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 90vw, 80vw"
                        className="max-w-full max-h-full object-contain rounded-md"
                      />
                    </div>
                  </div>
                  {item?.caption && (
                    <figcaption className="text-xs text-center text-gray-200 mt-4 leading-tight w-full">
                      {item.caption}
                    </figcaption>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSlider;
