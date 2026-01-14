import { notFound } from "next/navigation";
import { books } from "@/data/books";
import { loadBookPage } from "@/lib/books/page-loader";
import BookReader from "./BookReader";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return books.flatMap((book) =>
    Array.from({ length: book.totalPages }, (_, i) => ({
      bookId: book.id,
      page: String(i + 1),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string; page: string }>;
}): Promise<Metadata> {
  const { bookId, page } = await params;
  const book = books.find((b) => b.id === bookId);
  const pageNumber = parseInt(page);

  if (!book || isNaN(pageNumber)) return {};

  const pageTitle = `${book.title} - पृष्ठ ${pageNumber}`;
  const pageDescription = `${book.title}को पृष्ठ ${pageNumber} पढ्नुहोस्। ${book.author}द्वारा लिखित ${book.publishedYear ? `(${book.publishedYear})` : ''}। ${book.description.slice(0, 100)}...`;

  return {
    title: `${pageTitle} | Nepali History`,
    description: pageDescription,
    keywords: book.keywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'book',
      images: book.coverImage ? [{ url: book.coverImage, alt: book.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: book.coverImage ? [book.coverImage] : [],
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description,
    numberOfPages: book.totalPages,
    bookFormat: "https://schema.org/EBook",
    ...(book.author && { author: { "@type": "Person", name: book.author } }),
    ...(book.publishedYear && { datePublished: String(book.publishedYear) }),
    ...(book.language && { inLanguage: book.language }),
    ...(book.isbn && { isbn: book.isbn }),
    ...(book.coverImage && { image: book.coverImage }),
    ...(book.genre && { genre: book.genre }),
    ...(book.keywords && { keywords: book.keywords.join(", ") }),
    hasPart: {
      "@type": "WebPage",
      name: `पृष्ठ ${pageNumber}`,
      position: pageNumber,
      isPartOf: {
        "@type": "Book",
        name: book.title,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookReader
        content={content}
        currentPage={pageNumber}
        totalPages={book.totalPages}
        bookTitle={book.title}
        bookId={book.id}
      />
    </>
  );
}
