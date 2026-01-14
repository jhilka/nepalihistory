"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode, useState, useEffect } from "react";

interface AbbrWithTooltipProps {
  children: ReactNode;
  title: string;
}

export function AbbrWithTooltip({ children, title }: AbbrWithTooltipProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
        <TooltipPrimitive.Trigger asChild>
          <abbr
            className="underline decoration-dotted cursor-help select-none touch-manipulation text-amber-700 dark:text-amber-400"
            aria-label={title}
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            {children}
          </abbr>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="z-50 max-w-xs rounded-md bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md border border-border animate-in fade-in-0 zoom-in-95"
            sideOffset={5}
            role="tooltip"
            onPointerDownOutside={() => setOpen(false)}
          >
            <div className="leading-relaxed">{title}</div>
            <TooltipPrimitive.Arrow className="fill-popover" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
