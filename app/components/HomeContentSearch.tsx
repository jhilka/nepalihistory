"use client";

import type { Timeline } from "@/types/timeline";
import type { Book } from "@/types/book";
import ContentSearch from "@/components/content-search";
import { TimelineCard } from "@/components/timeline-card";
import { BookCard } from "@/components/book-card";

type HomeContentSearchProps = {
  items: (Timeline | Book)[];
};

export default function HomeContentSearch({ items }: HomeContentSearchProps) {
  const books = items.filter((item): item is Book => "totalPages" in item);
  const timelines = items.filter((item): item is Timeline => "entries" in item);

  return (
    <ContentSearch
      items={timelines}
      placeholder="Search timelines (title, tags, events)"
      searchLabel="Search timelines"
      emptyTitle="No timelines found"
      emptyDescription="Try a different search term or clear the filter."
      renderCard={(timeline) => <TimelineCard timeline={timeline} />}
      bookContent={
        books.length > 0 ? (
          <div>
            <h2 className="text-xl font-oswald font-semibold mb-4 text-center">
              Books
            </h2>
            <div className="flex justify-center gap-4">
              <div className="w-full max-w-[200px]">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        ) : undefined
      }
    />
  );
}
