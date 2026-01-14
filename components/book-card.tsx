import { ContentCard } from "./content-card";
import type { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <ContentCard
      href={`/books/${book.id}`}
      title={book.title}
      description={book.description}
      className="font-dev"
      coverImage={book.coverImage}
      coverAlt={`${book.title} cover`}
      aspectRatio="portrait"
      badge={{
        label: "pages",
        value: book.totalPages,
      }}
      metadata={
        book.author && book.publishedYear
          ? `${book.author} • ${book.publishedYear}`
          : book.author ||
            (book.publishedYear ? String(book.publishedYear) : undefined)
      }
    />
  );
}
