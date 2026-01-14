import { notFound } from "next/navigation";
import { books } from "@/data/books";
import { loadBookPage } from "@/lib/books/page-loader";
import BookReader from "./BookReader";

export async function generateStaticParams() {
  return books.flatMap((book) =>
    Array.from({ length: book.totalPages }, (_, i) => ({
      bookId: book.id,
      page: String(i + 1),
    }))
  );
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string; page: string }>;
}) {
  const { bookId, page } = await params;
  const book = books.find((b) => b.id === bookId);
  const pageNumber = parseInt(page);

  if (!book || isNaN(pageNumber) || pageNumber < 1 || pageNumber > book.totalPages) {
    notFound();
  }

  const content = await loadBookPage(book.id, pageNumber);

  return (
    <BookReader
      content={content}
      currentPage={pageNumber}
      totalPages={book.totalPages}
      bookTitle={book.title}
      bookId={book.id}
    />
  );
}
