export interface Book {
  id: string;
  title: string;
  description: string;
  totalPages: number;
  coverImage?: string;
}

export interface BookPage {
  pageNumber: number;
  content: string;
  title?: string;
}
