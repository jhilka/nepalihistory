import type { Timeline } from "@/types/timeline";
import type { Book } from "@/types/book";

type FilterableContent = Timeline | Book;

function isTimeline(item: FilterableContent): item is Timeline {
  return "entries" in item;
}

function isBook(item: FilterableContent): item is Book {
  return "totalPages" in item;
}

export function filterContent<T extends FilterableContent>(
  items: T[],
  query: string,
  tags: string[] = []
): T[] {
  const q = query.trim().toLowerCase();
  const hasTagFilters = Array.isArray(tags) && tags.length > 0;

  return items.filter((item) => {
    // Exclude archived timelines
    if (isTimeline(item) && item.state === "archived") return false;

    // Tag filtering
    if (hasTagFilters) {
      const itemTags = isTimeline(item) 
        ? item.tags || [] 
        : isBook(item) 
        ? item.keywords || [] 
        : [];
      const intersects = tags.some((t) => itemTags.includes(t as any));
      if (!intersects) return false;
    }

    if (!q) return true;

    // Build searchable text
    const parts: string[] = [];
    parts.push(item.title);
    if (item.description) parts.push(String(item.description));

    if (isTimeline(item)) {
      if (item.tags) parts.push(item.tags.join(" "));
      if (item.entries) {
        item.entries.forEach((e) => {
          if (e.title) parts.push(e.title);
          if (e.description) parts.push(String(e.description));
        });
      }
    } else if (isBook(item)) {
      if (item.author) parts.push(item.author);
      if (item.keywords) parts.push(item.keywords.join(" "));
      if (item.genre) parts.push(item.genre);
    }

    const hay = parts.join(" ").toLowerCase();
    return hay.includes(q);
  });
}

// Backward compatibility
export const filterTimelines = (
  timelines: Timeline[],
  query: string,
  tags: string[] = []
) => filterContent(timelines, query, tags);

export default filterContent;
