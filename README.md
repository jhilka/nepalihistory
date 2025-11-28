# Timeline Visualization App

A modern, minimal timeline visualization application for exploring historical events with a clean and mobile-friendly interface.

## Features

### Core Features

- **Timeline Exploration**: Browse multiple curated timelines (World History, Technology)
- **Event Details**: Each event includes:
  - Full date (DD-MM-YYYY format)
  - Title and rich-text descriptions with formatting support
  - Multiple media attachments (images)
  - Multiple external links
  - Tags for categorization
- **Search Functionality**: Real-time search across event titles, descriptions, and tags
- **Theme Toggle**: Switch between light and dark modes with animated background patterns
- **Responsive Design**: Fully mobile-friendly and adaptive layout

### Design Elements

- **Frosted Glass Navbar**: Modern, minimal navigation with backdrop blur
- **Sticky Year Headers**: Viber-style centered year indicators that stick while scrolling
- **Event Numbering**: Each event shows its position (e.g., 1/10, 2/10)
- **Timeline Visualization**: Clear connecting lines and numbered event indicators
- **Gradient Blobs**: Animated, theme-aware background gradients
- **Grid Pattern**: Subtle background grid that adapts to theme

## Tech Stack

### Framework & Runtime

- **Next.js 16** (App Router with React 19.2)
- **TypeScript** for type safety
- **Turbopack** as the build tool (default in Next.js 16)

### Styling

- **Tailwind CSS v4** with custom design tokens
- **CSS Variables** for theme customization
- **@tailwindcss/typography** (prose classes) for rich text rendering

### UI Components

- Custom-built minimal components
- **shadcn/ui** component patterns
- Next.js `Image` component for optimized image loading

### Features

- **Client-side search** with React hooks (useState, useMemo)
- **Static generation** with Next.js generateStaticParams
- **Theme persistence** using localStorage

## Project Structure

```
timeline-app/
├── app/
│   ├── timeline/
│   │   └── [id]/
│   │       ├── page.tsx          # Server component wrapper
│   │       ├── TimelineClient.tsx # Client component with search
│   │       └── loading.tsx        # Loading state
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout with fonts
│   └── globals.css                # Global styles and theme tokens
├── components/
│   ├── event-card.tsx             # Event display with numbering
│   ├── timeline-card.tsx          # Timeline preview card
│   ├── navbar.tsx                 # Navigation with search
│   └── theme-toggle.tsx           # Dark/light mode toggle
├── data/
│   ├── index.ts                   # Timeline exports
│   ├── world-history.tsx          # World history timeline data
│   └── technology.tsx             # Technology timeline data
├── types/
│   └── timeline.ts                # TypeScript type definitions
├── lib/
│   └── date-utils.ts              # Date formatting utilities
└── public/                        # Static images

```

## Data Structure

### Timeline Type

```typescript
type Timeline = {
  id: string;
  title: string;
  description?: string;
  media?: {
    url: string;
    alt: string;
  };
  events: Event[];
};
```

### Event Type

```typescript
type Event = {
  id: string;
  date: string; // "YYYY-MM-DD" format
  title: string;
  description: string; // Supports HTML with <strong>, <em>, <ul>, <li>
  tags?: string[];
  links?: Array<{
    url: string;
    label: string;
  }>;
  media?: Array<{
    url: string;
    alt: string;
  }>;
};
```

## Implemented Features

### Visual Design

- ✅ Minimal, modern, mobile-friendly design
- ✅ Theme toggle with light/dark mode support
- ✅ Animated gradient blobs that adapt to themes
- ✅ Grid pattern background
- ✅ Frosted glass navbar with backdrop blur
- ✅ Sticky centered year headers (Viber-style)
- ✅ Event numbering system (1/10 format)
- ✅ Visible timeline connecting lines

### Data & Content

- ✅ Full date support (DD-MM-YYYY)
- ✅ Year-based event grouping
- ✅ Rich text formatting (bold, italic, lists)
- ✅ Multiple media per event
- ✅ Multiple links per event
- ✅ Timeline media/icons
- ✅ Event tags

### Functionality

- ✅ Search events by title, description, tags
- ✅ Responsive layout for mobile and desktop
- ✅ Static generation for performance
- ✅ Client-side interactivity
- ✅ Type-safe data structures

## Possible Future Features

### Enhanced Functionality

- Timeline filtering by tags/categories
- Date range filtering
- Sort events (chronological, reverse chronological)
- Export timeline data (JSON, CSV)
- Share individual events or timelines
- Bookmark/favorite events

### Content Management

- Create custom timelines
- Add/edit/delete events via UI
- Import timeline data from files
- Database integration (Supabase, Neon)
- User authentication for personal timelines

### Visualization

- Alternative timeline layouts (horizontal, circular)
- Interactive timeline scrubber
- Zoom in/out on time periods
- Timeline comparison view
- Map integration for location-based events
- Media gallery view

### Social Features

- User-generated timelines
- Timeline sharing and collaboration
- Comments on events
- Rating/voting system
- Community timeline discovery

### Advanced Features

- Multi-language support (i18n)
- Accessibility improvements (ARIA labels, keyboard navigation)
- Offline support (PWA)
- Print-friendly view
- AI-generated event summaries
- Voice narration of timelines
- Animation/transition effects between events

## Getting Started

1. Install dependencies (handled automatically in v0)
2. Run the development server
3. Visit the homepage to see available timelines
4. Click on a timeline to explore events
5. Use the search icon in the navbar to find specific events
6. Toggle between light and dark themes

## Performance

- **Static Generation**: All timeline pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images loaded on-demand with blur placeholders
- **Minimal JavaScript**: Server components reduce client-side JS bundle

## Accessibility

- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly
