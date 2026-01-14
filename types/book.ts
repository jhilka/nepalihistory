export interface Book {
  id: string;
  title: string;
  description: string;
  totalPages: number;
  coverImage?: string;
  author?: string;
  publisher?: string;
  publishedYear?: number;
  language?: string;
  isbn?: string;
  keywords?: string[];
  genre?: string;
}

export interface BookPage {
  pageNumber: number;
  content: string;
  title?: string;
}
