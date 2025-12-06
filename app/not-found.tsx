import Link from "next/link";
import { ErrorLayout } from "@/components/error-layout";

export default function NotFound() {
  return (
    <ErrorLayout
      code="404"
      title="Page Not Found"
      description="The timeline you're looking for doesn't exist in history."
      action={
        <Link
          href="/"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      }
    />
  );
}
