import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return books.map((book) => ({ bookId: book.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string }>;
}): Promise<Metadata> {
  const { bookId } = await params;
  const book = books.find((b) => b.id === bookId);

  if (!book) return {};

  return {
    title: `${book.title} | Nepali History`,
    description: book.description,
    keywords: book.keywords,
    openGraph: {
      title: book.title,
      description: book.description,
      type: "book",
      images: book.coverImage
        ? [{ url: book.coverImage, alt: `${book.title} book cover` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description,
      images: book.coverImage ? [book.coverImage] : [],
    },
  };
}

export default async function BookLandingPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;
  const book = books.find((b) => b.id === bookId);

  if (!book) notFound();

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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {book.title}
            </h1>

            <p className="text-xl text-muted-foreground text-center mb-8">
              {book.description}
            </p>

            <div className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <span>{book.totalPages} पृष्ठहरू</span>
            </div>

            <div className="flex justify-center">
              <Link
                href={`/books/${bookId}/1`}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                पढ्न सुरु गर्नुहोस्
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
