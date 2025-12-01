import type { Event } from "@/types/timeline"

export function parseDate(dateString: string) {
  // Handle BCE dates
  if (dateString.includes("BCE")) {
    const year = dateString.replace(" BCE", "")
    return { year: `-${year}`, month: null, day: null, isBCE: true }
  }

  // Handle YYYY-MM-DD format
  if (dateString.includes("-")) {
    const [year, month, day] = dateString.split("-")
    return { 
      year, 
      month: month && month !== "00" ? month : null, 
      day: day && day !== "00" ? day : null, 
      isBCE: false 
    }
  }

  // Handle year only
  return { year: dateString, month: null, day: null, isBCE: false }
}

export function groupEventsByYear(events: Event[]) {
  const groups: { [year: string]: Event[] } = {}

  events.forEach((event) => {
    const { year } = parseDate(event.date)
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(event)
  })

  return groups
}

export function formatDateDisplay(dateString: string) {
  const { year, month, day, isBCE } = parseDate(dateString)

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
  ]

  if (day && month) {
    const monthName = monthNames[Number.parseInt(month) - 1]
    return {
      year: isBCE ? `${year.replace("-", "")} BCE` : year,
      month: monthName.toUpperCase(),
      day,
    }
  }

  return {
    year: isBCE ? `${year.replace("-", "")} BCE` : year,
    month: null,
    day: null,
  }
}
