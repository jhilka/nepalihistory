import type { Involved } from "@/types/timeline";

import { SafeImage } from "@/components/safe-image";

interface EntityInvolvedProps {
  involved: Involved[];
}

export function EntityInvolved({ involved }: EntityInvolvedProps) {
  if (!involved || involved.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {involved.map((entity, idx) => (
        <div
          key={idx}
          className="flex items-center gap-1 px-3 py-1.5 frosted bg-muted-foreground/5! rounded-full text-xs shadow-sm"
        >
          {entity.avatar && (
            <SafeImage
              src={entity.avatar}
              alt={entity.name}
              width={24}
              height={24}
              className="max-w-6 max-h-6 aspect-square object-cover rounded-full"
            />
          )}
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-medium leading-tight">{entity.name}</span>
            {entity.role && (
              <span className="text-[10px] text-muted-foreground leading-tight">
                {entity.role}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
