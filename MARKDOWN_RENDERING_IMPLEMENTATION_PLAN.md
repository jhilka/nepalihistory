# Book Reader Implementation Plan - Divya Upadesh

**Project:** Nepali History - Book Reader Module  
**Date Started:** January 4, 2026  
**Objective:** Create `/books/dibyaupadesh` route to render 128 pages of extracted markdown content with minimal, clean architecture

**Data Source:** `scripts/dibya_upadesh_extracted/` (page_001.md to page_128.md)

---

## Architectural Overview

### Design Principles

- **Minimal Implementation**: Only what's needed for book reading experience
- **Static Generation**: Pre-render all 128 pages at build time
- **Type Safety**: TypeScript for book data structures
- **Performance-First**: Static pages, optimized navigation
- **Accessibility**: Semantic HTML, keyboard navigation
- **Reusable**: Architecture can extend to other books

### Architecture Layers

```
┌─────────────────────────────────────────────┐
│  Route Layer                                │
│  /books/dibyaupadesh (book index)           │
│  /books/dibyaupadesh/[page] (page reader)   │
├─────────────────────────────────────────────┤
│  Components Layer                           │
│  - BookReader (page display)                │
│  - PageNavigation (prev/next)               │
│  - TableOfContents (optional)               │
├─────────────────────────────────────────────┤
│  Data Layer                                 │
│  - Book metadata (title, pages, etc.)       │
│  - Page loader (read .md files)             │
├─────────────────────────────────────────────┤
│  Rendering Layer                            │
│  - react-markdown (simple setup)            │
│  - Tailwind typography (prose classes)      │
└─────────────────────────────────────────────┘
```

---

## Step 1: Setup Type Definitions for Book Data

- [x] Create `types/book.ts` with interfaces:
  - `Book` - book metadata (id, title, description, totalPages)
  - `BookPage` - page data (pageNumber, content, title)
- [x] Keep it minimal - only essential fields

**Status:** ✅ Completed  
**Notes:** Created minimal Book and BookPage interfaces

---

## Step 2: Install Dependencies

- [x] Install `react-markdown` for markdown rendering
- [x] Install `remark-gfm` for GitHub Flavored Markdown support
- [x] Verify compatibility with Next.js 16 and React 19

**Status:** ✅ Completed  
**Notes:** Dependencies installed via npm

---

## Step 3: Create Book Data Structure

- [x] Create `data/books/dibyaupadesh.ts`:
  - Export book metadata (title, description, totalPages: 128)
  - Function to get page file path
  - Function to load page content from markdown files
- [x] Create `data/books/index.ts` - Export all books

**Status:** ✅ Completed  
**Notes:** Created book metadata and page loader utility in lib/books/

---

## Step 4: Create Book Index Page

- [x] Create `app/books/dibyaupadesh/page.tsx`:
  - Display book title and description
  - Show total pages
  - "Start Reading" button → navigates to page 1
  - Use existing design patterns from timeline pages

**Status:** ✅ Completed  
**Notes:** Landing page with Nepali text and start reading button

---

## Step 5: Create Dynamic Page Route

- [x] Create `app/books/dibyaupadesh/[page]/page.tsx`:
  - Server component that loads markdown content
  - Use `generateStaticParams()` to pre-render all 128 pages
  - Pass content to client component
- [x] Create `app/books/dibyaupadesh/[page]/loading.tsx`:
  - Simple loading state

**Status:** ✅ Completed  
**Notes:** Static generation for all 128 pages with loading state

---

## Step 6: Create Book Reader Client Component

- [x] Create `app/books/dibyaupadesh/[page]/BookReader.tsx`:
  - Client component with "use client" directive
  - Render markdown using react-markdown
  - Apply Tailwind typography (prose classes)
  - Page navigation (Previous/Next buttons)
  - Page indicator (e.g., "Page 5 of 128")
  - Responsive design for mobile
- [x] **Tooltip Support** (see [TOOLTIP_IMPLEMENTATION.md](./TOOLTIP_IMPLEMENTATION.md)):
  - Custom `<sup>` component with Radix UI tooltips
  - Reference extraction from markdown tables
  - Works in code blocks and regular text
  - Mobile-friendly with tap support
  - Accessible with ARIA labels

**Status:** ✅ Completed  
**Notes:** Includes keyboard navigation (arrow keys, Home, End) and interactive tooltips for references

---

## Step 7: Create Page Navigation Component

- [ ] Create `app/books/dibyaupadesh/components/page-navigation.tsx`:
  - Previous/Next buttons with proper disabled states
  - Page number display
  - Keyboard navigation support (arrow keys)
  - Mobile-friendly touch targets

**Status:** Not Started  
**Notes:**

---

## Step 8: Style Book Reader

- [x] Add book-specific styles to `globals.css`:
  - Nepali font support (ensure proper rendering)
  - Typography for book content
  - Page layout (max-width, padding, line-height)
  - Dark mode support
- [x] Use Tailwind prose classes for markdown
- [x] Ensure readability on mobile devices

**Status:** ✅ Completed  
**Notes:** Added prose typography with enhanced line-height for readability

---

## Step 9: Add Book to Navigation

- [ ] Update navbar to include link to `/books/dibyaupadesh`
- [ ] Add "Books" section to homepage
- [ ] Create book card component (similar to timeline-card)
- [ ] List available books on homepage

**Status:** Not Started  
**Notes:**

---

## Step 10: Implement Keyboard Navigation

- [ ] Add keyboard event listeners:
  - Left arrow → Previous page
  - Right arrow → Next page
  - Home → First page
  - End → Last page
- [ ] Add visual indicators for keyboard shortcuts
- [ ] Ensure accessibility (focus management)

**Status:** Not Started  
**Notes:**

---

## Step 11: Optional Enhancements

- [ ] Table of Contents (extract headings from all pages)
- [ ] Search within book
- [ ] Bookmark/progress tracking (localStorage)
- [ ] Print-friendly view
- [ ] Share specific page (URL with page number)
- [ ] Reading progress indicator

**Status:** Not Started  
**Notes:** These are optional - implement only if time permits

---

## Step 12: Testing & Validation

- [ ] Test all 128 pages render correctly
- [ ] Test navigation (first page, last page, middle pages)
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Verify Nepali text renders properly
- [ ] Check performance (page load times)

**Status:** Not Started  
**Notes:**

---

## Step 13: Documentation

- [ ] Update README.md with book reader feature
- [ ] Document how to add new books
- [ ] Add comments to code for future maintainers
- [ ] Create BOOKS.md with book data structure guide

**Status:** Not Started  
**Notes:**

---

## Summary of Changes

### New Files to Create

**Type Definitions:**
- `types/book.ts` - Book and BookPage interfaces

**Data Layer:**
- `data/books/dibyaupadesh.ts` - Book metadata and page loader
- `data/books/index.ts` - Export all books

**Routes:**
- `app/books/dibyaupadesh/page.tsx` - Book index page
- `app/books/dibyaupadesh/[page]/page.tsx` - Dynamic page route (server)
- `app/books/dibyaupadesh/[page]/BookReader.tsx` - Page reader (client)
- `app/books/dibyaupadesh/[page]/loading.tsx` - Loading state

**Components:**
- `app/books/dibyaupadesh/components/page-navigation.tsx` - Navigation controls
- `app/books/dibyaupadesh/components/sup-with-tooltip.tsx` - ✅ Tooltip for references
- `app/books/dibyaupadesh/components/code-block.tsx` - ✅ Code block with tooltip support
- `components/book-card.tsx` - Book preview card (optional)

**Utilities:**
- `lib/books/page-loader.ts` - Load markdown files from disk
- `lib/books/extract-references.ts` - ✅ Extract references from tables

### Files to Modify

- `app/page.tsx` - Add books section to homepage
- `components/navbar.tsx` - Add books link (optional)
- `app/globals.css` - Add book typography styles
- `package.json` - Add react-markdown and remark-gfm

### Dependencies to Install

- `react-markdown` - Markdown rendering
- `remark-gfm` - GitHub Flavored Markdown support

---

## Key Architectural Decisions

| Decision                    | Rationale                                             | Fallback                                       |
| --------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Static Generation           | Pre-render all 128 pages for instant loading          | Dynamic rendering (slower)                     |
| File-based Content          | Markdown files in scripts/ directory                  | Database storage (more complex)                |
| react-markdown              | Simple, reliable, well-maintained                     | Custom markdown parser (reinventing wheel)     |
| Tailwind Typography         | Consistent styling with existing app                  | Custom CSS (more maintenance)                  |
| Dynamic Routes [page]       | Clean URLs like /books/dibyaupadesh/5                 | Query params (?page=5)                         |
| Client Component for Reader | Interactivity (navigation, keyboard)                  | Server-only (no interactivity)                 |
| Minimal Features First      | Ship fast, iterate based on usage                     | Over-engineer upfront (slower delivery)        |-------------------------------------------- | ---------------------------------------------- |
| Plugin Architecture         | Extensibility for future markdown features            | Monolithic approach with harder future changes |
| React Context for Config    | Type-safe, performant, follows React patterns         | Prop drilling (verbose, prone to errors)       |
| Radix UI Tooltip (existing) | Leverages existing UI library, consistent design      | react-tooltip library (unnecessary duplicate)  |
| Custom Hooks                | Logic reuse, easier testing, separation of concerns   | Component-level logic (harder to test/reuse)   |
| Error Boundary              | Prevents entire page crash from markdown parse errors | Unhandled errors break page                    |
| Memoization                 | Performance optimization for large timelines          | Component re-renders on every parent change    |

---

## Project Structure

```
app/
├── books/
│   └── dibyaupadesh/
│       ├── page.tsx                    # Book index/landing page
│       ├── [page]/
│       │   ├── page.tsx                # Server component (loads content)
│       │   ├── BookReader.tsx          # Client component (renders + nav)
│       │   └── loading.tsx             # Loading state
│       └── components/
│           └── page-navigation.tsx     # Prev/Next navigation
├── components/
│   └── book-card.tsx                   # Book preview card (optional)
data/
├── books/
│   ├── dibyaupadesh.ts                 # Book metadata
│   └── index.ts                        # Export all books
types/
└── book.ts                             # Book type definitions
lib/
└── books/
    └── page-loader.ts                  # Load markdown from files
scripts/
└── dibya_upadesh_extracted/
    ├── page_001.md                     # Source content
    ├── page_002.md
    └── ... (128 pages total)
```

---

## Data Flow

1. User visits `/books/dibyaupadesh` → sees book landing page
2. Clicks "Start Reading" → navigates to `/books/dibyaupadesh/1`
3. Server component loads `page_001.md` from disk
4. Content passed to BookReader client component
5. react-markdown renders Nepali text with Tailwind prose
6. User clicks "Next" → navigates to `/books/dibyaupadesh/2`
7. Process repeats for all 128 pages

---

## Progress Log

| Date | Step | Status | Notes |
| ---- | ---- | ------ | ----- |
| Jan 4, 2026 | Step 1 | ✅ Complete | Type definitions created |
| Jan 4, 2026 | Step 2 | ✅ Complete | Dependencies installed (react-markdown, remark-gfm) |
| Jan 4, 2026 | Step 3 | ✅ Complete | Book data structure and page loader |
| Jan 4, 2026 | Step 4 | ✅ Complete | Book landing page |
| Jan 4, 2026 | Step 5 | ✅ Complete | Dynamic page route with static generation |
| Jan 4, 2026 | Step 6 | ✅ Complete | BookReader component with keyboard nav + tooltips |
| Jan 4, 2026 | Tooltips | ✅ Complete | See TOOLTIP_IMPLEMENTATION.md for details |
| Jan 4, 2026 | Step 7 | ⏭️ Skipped | Navigation inline in BookReader |
| Jan 4, 2026 | Step 8 | ✅ Complete | Typography styles added |
| | Step 9 | 🔜 Next | Add to navbar/homepage |
| | Step 10 | ✅ Complete | Keyboard nav already in Step 6 |
| | Step 11-13 | ⏸️ Pending | Optional enhancements |

---

## Future Enhancements (Post-MVP)

- Add more books (same architecture, different data)
- Table of contents with chapter markers
- Search across all pages
- Annotations/notes system
- Reading progress tracking
- Export to PDF
- Audio narration (text-to-speech for Nepali)
- Multi-language support (if translations available)

---

## Related Documentation

- **[TOOLTIP_IMPLEMENTATION.md](./TOOLTIP_IMPLEMENTATION.md)** - Detailed documentation of the tooltip system for reference numbers
- **[BOOK_READER_SUMMARY.md](./BOOK_READER_SUMMARY.md)** - Quick reference guide for the book reader implementation
