import Link from 'next/link';
import { dibyaupadesh } from '@/data/books/dibyaupadesh';

export default function DibyaupadeshPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {dibyaupadesh.title}
          </h1>
          
          <p className="text-xl text-muted-foreground text-center mb-8">
            {dibyaupadesh.description}
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <span>{dibyaupadesh.totalPages} पृष्ठहरू</span>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/books/dibyaupadesh/1"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              पढ्न सुरु गर्नुहोस्
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
