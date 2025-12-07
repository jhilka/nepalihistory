"use client";

import { useEffect, useState } from "react";

const Button = ({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
} & React.ComponentProps<"button">) => (
  <button
    {...props}
    className="frosted size-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-background/60 transition-all cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);

export function TimelineNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    const entries = document.querySelectorAll("[data-entry-title]");
    setTotalEntries(entries.length);

    let timeout: NodeJS.Timeout;
    const updateIndex = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        let closestIndex = 0;
        let closestDistance = Infinity;

        entries.forEach((entry, index) => {
          const rect = entry.getBoundingClientRect();
          const distance = Math.abs(rect.top - 120);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setCurrentIndex(closestIndex);
      }, 300);
    };

    updateIndex();
    window.addEventListener("scroll", updateIndex, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", updateIndex);
    };
  }, []);

  const scrollToEntry = (index: number) => {
    const titles = document.querySelectorAll("[data-entry-title]");
    const target = titles[index] as HTMLElement;
    if (!target) return;
    setCurrentIndex(index);
    target.click();
  };

  const canGoUp = currentIndex > 0 || totalEntries > 1;
  const canGoDown = currentIndex < totalEntries - 1;

  if (totalEntries === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-30">
      {/* ▲ UP button — same SVG as your original */}
      <Button
        onClick={() => scrollToEntry(Math.max(0, currentIndex - 1))}
        aria-label="Previous entry"
        disabled={!canGoUp}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </Button>

      {/* ▼ DOWN button — same SVG as your original */}
      <Button
        onClick={() => scrollToEntry(currentIndex + 1)}
        disabled={!canGoDown}
        aria-label="Next entry"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
    </div>
  );
}
