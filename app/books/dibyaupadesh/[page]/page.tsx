import { notFound } from "next/navigation";
import { dibyaupadesh } from "@/data/books/dibyaupadesh";
import { loadBookPage } from "@/lib/books/page-loader";
import BookReader from "./BookReader";

export async function generateStaticParams() {
  return Array.from({ length: dibyaupadesh.totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = parseInt(page);

  if (
    isNaN(pageNumber) ||
    pageNumber < 1 ||
    pageNumber > dibyaupadesh.totalPages
  ) {
    notFound();
  }

  const content = await loadBookPage(dibyaupadesh.id, pageNumber);

  return (
    <BookReader
      content={content}
      currentPage={pageNumber}
      totalPages={dibyaupadesh.totalPages}
      bookTitle={dibyaupadesh.title}
    />
  );
}
