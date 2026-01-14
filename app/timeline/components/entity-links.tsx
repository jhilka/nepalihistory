import Link from "next/link";

import { Link as LinkIcon } from "lucide-react";

interface EntityLinksProps {
  links: Array<{
    url: string;
    label: string;
  }>;
}

export function EntityLinks({ links }: EntityLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-muted-foreground transition-colors underline"
        >
          {link.label}
          <LinkIcon className="size-3" />
        </Link>
      ))}
    </div>
  );
}
