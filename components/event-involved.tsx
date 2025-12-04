import Image from "next/image";
import type { Involved } from "@/types/timeline";
import { assetPath } from "@/lib/asset-path";

interface EventInvolvedProps {
  involved: Involved[];
}

export function EventInvolved({ involved }: EventInvolvedProps) {
  if (!involved || involved.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 my-2">
      {involved.map((entity, idx) => (
        <div
          key={idx}
          className="flex items-center gap-1 px-3 py-1.5 bg-muted-foreground/10 rounded-full text-xs"
        >
          {entity.avatar && (
            <Image
              src={assetPath(entity.avatar)}
              alt={entity.name}
              width={24}
              height={24}
              className="aspect-square object-cover rounded-full"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium text-left">{entity.name}</span>
            {entity.role && (
              <span className="text-[10px] text-muted-foreground">
                {entity.role}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
