import { ReactNode } from "react";

export type Involved = {
  name: string;
  role?: string;
  avatar?: string;
};

export type Media = {
  src?: string;
  sourceUrl: string;
  alt: string;
  caption?: string;
};

/**
 * TimelineEntry represents a single item in a timeline.
 * Flexible enough to represent historical events, prime ministers, reigns,
 * earthquakes, GDP data, constitutions, and more.
 */
export type TimelineEntry = {
  id: string;
  /** Flexible date: full date string ("YYYY-MM-DD") or year (number or "YYYY") */
  date: string | number;
  title: string;
  description?: ReactNode | string;
  tags?: string[];
  involved?: Involved[];

  /** Optional end date for periods (reigns, PM terms, Rana regime, etc.) */
  endDate?: string | number;

  /** Numeric value for data-driven timelines (GDP in USD, population, etc.) */
  value?: number;

  /** Specific to earthquakes */
  magnitude?: number;
  casualties?: number;

  /** Useful metadata */
  links?: Array<{
    url: string;
    label: string;
  }>;
  media?: Array<Media>;

  /** Auto-calculated or explicit duration in days (for reigns, PM terms, etc.) */
  durationDays?: number;
};

/** @deprecated Use TimelineEntry instead */
export type Event = TimelineEntry;

export type Timeline = {
  id: string;
  title: string;
  description?: string;

  /** Optional overall period covered by this timeline */
  period?: { start: string | number; end?: string | number };

  involved?: Involved[];
  coverMedia?: Media;

  entries: TimelineEntry[];
  /** @deprecated Use entries instead */
  events?: TimelineEntry[];
};
