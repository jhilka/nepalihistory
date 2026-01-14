export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background/80 font-dev">
      <div className="container page-content-width mx-auto px-4! py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-32 bg-muted animate-pulse rounded" />
          <div className="h-6 w-20 bg-muted animate-pulse rounded" />
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-muted animate-pulse rounded w-full" />
          <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
          <div className="h-4 bg-muted animate-pulse rounded w-4/6" />
        </div>
      </div>
    </div>
  );
}
