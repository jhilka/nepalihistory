import type { TimelineEntry } from "@/types/timeline";

export function parseDate(date: string | number) {
  const dateString = String(date);

  // Handle BCE dates
  if (dateString.includes("BCE")) {
    const year = dateString.replace(" BCE", "");
    return { year: `-${year}`, month: null, day: null, isBCE: true };
  }

  // Handle YYYY-MM-DD format
  if (dateString.includes("-")) {
    const [year, month, day] = dateString.split("-");
    return {
      year,
      month: month && month !== "00" ? month : null,
      day: day && day !== "00" ? day : null,
      isBCE: false,
    };
  }

  // Handle year only (string or number)
  return { year: dateString, month: null, day: null, isBCE: false };
}

export function groupEntriesByYear(entries: TimelineEntry[]) {
  const groups: { [year: string]: TimelineEntry[] } = {};

  entries.forEach((entry) => {
    const { year } = parseDate(entry.date);
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(entry);
  });

  return groups;
}

/** @deprecated Use groupEntriesByYear instead */
export const groupEventsByYear = groupEntriesByYear;

export function formatDateDisplay(date: string | number) {
  const dateString = String(date);
  const { year, month, day, isBCE } = parseDate(date);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (day && month) {
    const monthName = monthNames[Number.parseInt(month) - 1];
    return {
      year: isBCE ? `${year.replace("-", "")} BCE` : year,
      month: monthName.toUpperCase(),
      day,
    };
  }

  return {
    year: isBCE ? `${year.replace("-", "")} BCE` : year,
    month: null,
    day: null,
  };
}
