"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

import { extractReferences } from "@/lib/books/extract-references";
import { CodeBlock } from "@/components/books/code-block";
import { ArrowLeftRight, ChevronLeft } from "lucide-react";

interface BookReaderProps {
  content: string;
  currentPage: number;
  totalPages: number;
  bookTitle: string;
  bookId: string;
}

export default function BookReader({
  content,
  currentPage,
  totalPages,
  bookTitle,
  bookId,
}: BookReaderProps) {
  const router = useRouter();
  const references = useMemo(() => extractReferences(content), [content]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentPage > 1) {
        router.push(`/books/${bookId}/${currentPage - 1}`);
      } else if (e.key === "ArrowRight" && currentPage < totalPages) {
        router.push(`/books/${bookId}/${currentPage + 1}`);
      } else if (e.key === "Home") {
        router.push(`/books/${bookId}/1`);
      } else if (e.key === "End") {
        router.push(`/books/${bookId}/${totalPages}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, bookId, router]);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background/80 font-dev">
      <div className="container page-content-width mx-auto px-4! py-8">
        <div className="mb-6 flex items-center justify-between text-lg font-bold">
          <Link
            href={`/books/${bookId}`}
            className="flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="size-4 stroke-3" aria-hidden="true" />{" "}
            <span className="-mb-1">{bookTitle}</span>
          </Link>
          <span className="text-muted-foreground">
            पृष्ठ{" "}
            <span className="text-base">
              {currentPage}/{totalPages}
            </span>
          </span>
        </div>

        <article className="prose prose-lg dark:prose-invert mb-8 space-y-3 text-sm sm:text-lg text-shadow-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              abbr: ({ node, ...props }) => (
                <abbr
                  className="underline decoration-dotted cursor-help"
                  {...props}
                />
              ),
              span: ({ node, ...props }) => {
                const { title } = props;
                if (title) {
                  return (
                    <span
                      className="underline decoration-dotted cursor-help"
                      {...props}
                    />
                  );
                }
                return <span {...props} />;
              },
              div: ({ node, ...props }) => <div {...props} />,
              em: ({ node, ...props }) => <em {...props} />,
              p: ({ node, ...props }) => <p {...props} />,
              pre: ({ children }) => {
                return (
                  <CodeBlock references={references}>{children}</CodeBlock>
                );
              },
              code: ({ node, children, ...props }) => <>{children}</>,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="flex items-center justify-between gap-4">
          {currentPage > 1 ? (
            <Link
              href={`/books/${bookId}/${currentPage - 1}`}
              className="flex items-center justify-center rounded-md bg-primary pl-1 pr-4 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft />
              <span className="leading-snug -mb-1">अघिल्लो</span>
            </Link>
          ) : (
            <div className="w-24"></div>
          )}

          <span className="text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={`/books/${bookId}/${currentPage + 1}`}
              className="flex items-center justify-center rounded-md bg-primary pr-1 pl-4 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span className="leading-snug -mb-1">अर्को</span>{" "}
              <ChevronLeft className="rotate-180" />
            </Link>
          ) : (
            <div className="w-24"></div>
          )}
        </div>

        <div className="flex items-center justify-center mt-8 text-sm sm:text-base text-muted-foreground leading-snug">
          <span className="leading-snug -mb-1">किबोर्डको</span>
          <ArrowLeftRight className="mx-2" />
          <span className="leading-snug -mb-1">
            प्रयोग गरेर पृष्ठहरू नेभिगेट गर्नुहोस्
          </span>
        </div>
      </div>
    </div>
  );
}
