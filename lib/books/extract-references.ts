export function extractReferences(markdown: string): Map<string, string> {
  const references = new Map<string, string>();

  // Match table rows with reference numbers and descriptions
  const tableRowRegex = /\|\s*([१२३४५६७८९०]+)\s*\|[^|]*\|\s*([^|]+)\s*\|/g;

  let match;
  while ((match = tableRowRegex.exec(markdown)) !== null) {
    const nepaliNumber = match[1].trim();
    let description = match[2].trim();

    // Skip header rows and empty descriptions
    if (description === "विवरण" || description === '"' || !description) {
      continue;
    }

    // Convert Nepali numerals to Arabic
    const arabicNumber = convertNepaliToArabic(nepaliNumber);

    if (arabicNumber) {
      // Clean up description: remove extra quotes and whitespace
      description = description.replace(/^["\s]+|["\s]+$/g, "");
      references.set(arabicNumber, description);
    }
  }

  return references;
}

function convertNepaliToArabic(nepali: string): string {
  const map: Record<string, string> = {
    "०": "0",
    "१": "1",
    "२": "2",
    "३": "3",
    "४": "4",
    "५": "5",
    "६": "6",
    "७": "7",
    "८": "8",
    "९": "9",
  };

  return nepali
    .split("")
    .map((char) => map[char] || char)
    .join("");
}
