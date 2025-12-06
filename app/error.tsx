"use client";

import { ErrorLayout } from "@/components/error-layout";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorLayout
      code="500"
      title="Something Went Wrong"
      description="An unexpected error occurred while loading this timeline."
      action={
        <button
          onClick={reset}
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      }
    />
  );
}
