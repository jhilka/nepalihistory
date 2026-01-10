import fs from 'fs';
import path from 'path';

export async function loadBookPage(bookId: string, pageNumber: number): Promise<string> {
  const paddedPage = String(pageNumber).padStart(3, '0');
  const filePath = path.join(process.cwd(), 'scripts', `${bookId}_extracted`, `page_${paddedPage}.md`);
  
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    throw new Error(`Failed to load page ${pageNumber} for book ${bookId}`);
  }
}

export function getPageFilePath(bookId: string, pageNumber: number): string {
  const paddedPage = String(pageNumber).padStart(3, '0');
  return path.join(process.cwd(), 'scripts', `${bookId}_extracted`, `page_${paddedPage}.md`);
}
