"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { extractReferences } from "@/lib/books/extract-references";
import { SupWithTooltip } from "../components/sup-with-tooltip";
import { CodeBlock } from "../components/code-block";

interface BookReaderProps {
  content: string;
  currentPage: number;
  totalPages: number;
  bookTitle: string;
}

export default function BookReader({
  content,
  currentPage,
  totalPages,
  bookTitle,
}: BookReaderProps) {
  const router = useRouter();
  const references = useMemo(() => extractReferences(content), [content]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentPage > 1) {
        router.push(`/books/dibyaupadesh/${currentPage - 1}`);
      } else if (e.key === "ArrowRight" && currentPage < totalPages) {
        router.push(`/books/dibyaupadesh/${currentPage + 1}`);
      } else if (e.key === "Home") {
        router.push(`/books/dibyaupadesh/1`);
      } else if (e.key === "End") {
        router.push(`/books/dibyaupadesh/${totalPages}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, router]);

  return (
    <div className="min-h-screen bg-background/80">
      <div className="container page-content-width mx-auto px-4! py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/books/dibyaupadesh"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← {bookTitle}
          </Link>
          <span className="text-sm text-muted-foreground">
            पृष्ठ {currentPage} / {totalPages}
          </span>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert mb-8 space-y-3 text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              sup: ({ children }) => (
                <SupWithTooltip references={references}>
                  {children}
                </SupWithTooltip>
              ),
              abbr: (props) => (
                <abbr
                  className="underline decoration-dotted cursor-help"
                  {...props}
                />
              ),
              span: (props) => {
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
              div: (props) => <div {...props} />,
              p: (props) => <p {...props} />,
              pre: ({ children }) => {
                return (
                  <CodeBlock references={references}>{children}</CodeBlock>
                );
              },
              code: (props) => {
                const { children } = props;
                return <>{children}</>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {currentPage > 1 ? (
            <Link
              href={`/books/dibyaupadesh/${currentPage - 1}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              ← अघिल्लो
            </Link>
          ) : (
            <div className="w-24"></div>
          )}

          <span className="text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={`/books/dibyaupadesh/${currentPage + 1}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              अर्को →
            </Link>
          ) : (
            <div className="w-24"></div>
          )}
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>← → तीरहरू प्रयोग गरेर पृष्ठहरू नेभिगेट गर्नुहोस्</p>
        </div>
      </div>
    </div>
  );
}
