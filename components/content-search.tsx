"use client";

import { Suspense, useEffect, useMemo, useState, ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ChevronsDown, Search } from "lucide-react";

import { filterContent } from "@/lib/content-filter";
import { Input } from "@/components/ui/input";
import {
  Empty,
  EmptyContent,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import TagToggle from "@/components/tag-toggle";

type ContentItem = {
  id: string;
  title: string;
  tags?: string[];
  keywords?: string[];
};

type ContentSearchProps<T extends ContentItem> = {
  items: T[];
  placeholder?: string;
  searchLabel?: string;
  emptyTitle?: string;
  emptyDescription?: string;
  renderCard: (item: T) => ReactNode;
};

export default function ContentSearch<T extends ContentItem>({
  items,
  placeholder = "Search content (title, tags, description)",
  searchLabel = "Search content",
  emptyTitle = "No results found",
  emptyDescription = "Try a different search term or clear the filter.",
  renderCard,
}: ContentSearchProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initial = searchParams?.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [debounced, setDebounced] = useState(initial);
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams?.getAll("tag") || []
  );

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 250);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (debounced) {
      params.set("q", debounced);
    } else {
      params.delete("q");
    }

    params.delete("tag");
    selectedTags.forEach((t) => params.append("tag", t));

    router.replace(params.toString() ? `?${params.toString()}` : "?");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced, selectedTags]);

  const filtered = useMemo(
    () => filterContent(items, debounced, selectedTags),
    [items, debounced, selectedTags]
  );

  const allTags = useMemo(
    () =>
      Array.from(
        new Set(
          items.flatMap((item) => [
            ...(item.tags || []),
            ...(item.keywords || []),
          ])
        )
      ).sort((a, b) => a.localeCompare(b)),
    [items]
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-8">
        <label className="sr-only" htmlFor="content-search">
          {searchLabel}
        </label>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-1" />
          <Input
            id="content-search"
            className="px-10 bg-muted/50 backdrop-blur-lg shadow-sm"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-6 inline-flex items-center justify-center text-muted-foreground rounded-md hover:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer"
              onClick={() => {
                setQuery("");
                const el = document.getElementById(
                  "content-search"
                ) as HTMLInputElement | null;
                el?.focus();
              }}
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 gap-y-1.5 my-4">
            {allTags.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <TagToggle
                  key={tag}
                  tag={tag}
                  active={active}
                  onToggle={(val) => {
                    setSelectedTags((s) =>
                      val
                        ? Array.from(new Set([...s, tag]))
                        : s.filter((x) => x !== tag)
                    );
                  }}
                />
              );
            })}

            {selectedTags.length > 0 && (
              <button
                aria-label="Clear selected tags"
                className="frosted flex items-center gap-1 text-xs py-1 h-6 px-2 rounded-md border border-input text-muted-foreground hover:bg-muted cursor-pointer"
                onClick={() => setSelectedTags([])}
              >
                <X className="size-3" />
                Clear tags
              </button>
            )}
          </div>
        )}

        <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground my-6 sm:my-8">
          <ChevronsDown className="size-4" aria-hidden="true" />
          <div>
            Showing{" "}
            <strong className="text-foreground">{filtered.length}</strong> of{" "}
            {items.length}
          </div>
        </div>

        {filtered.length === 0 ? (
          <Empty>
            <EmptyContent>
              <EmptyTitle>{emptyTitle}</EmptyTitle>
              <EmptyDescription>{emptyDescription}</EmptyDescription>
            </EmptyContent>
          </Empty>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center-safe">
            {filtered.map((item) => (
              <div key={item.id}>{renderCard(item)}</div>
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}
