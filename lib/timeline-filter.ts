import type { Timeline } from "@/types/timeline";

export const filterTimelines = (
  timelines: Timeline[],
  query: string,
  tags: string[] = []
) => {
  const q = query.trim().toLowerCase();
  const hasTagFilters = Array.isArray(tags) && tags.length > 0;

  return timelines.filter((tl) => {
    if (hasTagFilters) {
      const tlTags = tl.tags || [];
      const intersects = tags.some((t) => tlTags.includes(t as any));
      if (!intersects) return false;
    }

    if (!q) return true;

    const parts: string[] = [];
    if (tl.title) parts.push(tl.title);
    if (tl.description) parts.push(String(tl.description || ""));
    if (tl.tags) parts.push(tl.tags.join(" "));
    if (tl.entries) {
      tl.entries.forEach((e) => {
        if (e.title) parts.push(e.title);
        if (e.description) parts.push(String(e.description || ""));
      });
    }

    const hay = parts.join(" ").toLowerCase();
    return hay.includes(q);
  });
};

export default filterTimelines;
