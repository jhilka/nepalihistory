"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface SupWithTooltipProps {
  children: ReactNode;
  references?: Map<string, string>;
}

export function SupWithTooltip({ children, references }: SupWithTooltipProps) {
  const refNumber = typeof children === "string" ? children : String(children);
  const tooltipContent = references?.get(refNumber);

  if (!tooltipContent) {
    return <sup className="text-primary/70 text-xs">{children}</sup>;
  }

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <sup
            className="text-primary cursor-help underline decoration-dotted text-xs touch-manipulation select-none"
            aria-label={tooltipContent}
            role="button"
            tabIndex={0}
            onTouchStart={(e) => e.preventDefault()}
          >
            {children}
          </sup>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="z-50 max-w-xs rounded-md bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md border border-border animate-in fade-in-0 zoom-in-95"
            sideOffset={5}
            role="tooltip"
          >
            <div className="leading-relaxed">{tooltipContent}</div>
            <TooltipPrimitive.Arrow className="fill-popover" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
