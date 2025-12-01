import Link from "next/link";

interface EventLinksProps {
  links: Array<{
    url: string;
    label: string;
  }>;
}

export function EventLinks({ links }: EventLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 pt-1">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
        >
          {link.label}
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ))}
    </div>
  );
}
