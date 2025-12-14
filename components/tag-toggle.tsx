"use client";

import { Toggle } from "@/components/ui/toggle";

type TagToggleProps = {
  tag: string;
  active?: boolean;
  onToggle?: (active: boolean) => void;
};

export const TagToggle = ({
  tag,
  active = false,
  onToggle,
}: TagToggleProps) => {
  return (
    <Toggle
      pressed={active}
      onPressedChange={(val) => onToggle?.(Boolean(val))}
      aria-pressed={active}
      variant={"outline"}
      className="capitalize frosted data-[state=on]:bg-primary/80 data-[state=on]:text-primary-foreground text-xs py-1 h-6 cursor-pointer font-normal"
    >
      {tag}
    </Toggle>
  );
};

export default TagToggle;
