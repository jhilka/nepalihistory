"use client";

import type { TimelineEntry } from "@/types/timeline";

interface TableOfContentsProps {
  entries: TimelineEntry[];
  className?: string;
}

export function TableOfContents({ entries, className }: TableOfContentsProps) {
  return (
    <nav className={className}>
      <table className="max-w-fit">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-sm font-semibold pl-2 pb-2 text-muted-foreground text-left"
            >
              Table of Contents
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            const id = `${entry.title.toLowerCase()}-${entry.id}`;
            return (
              <tr
                key={entry.id}
                className="text-sm text-muted-foreground hover:text-foreground hover:text-shadow-sm transition-colors"
              >
                <td className="pr-2 text-right py-0.5">{index + 1}</td>
                <td className="py-0.5 line-clamp-1">
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {entry.title}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
    </nav>
  );
}
