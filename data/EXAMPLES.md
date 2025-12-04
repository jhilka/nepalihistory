# Timeline Examples

This file contains examples of how to create different types of timelines using the flexible `TimelineEntry` model.

## Example 1: Prime Ministers of Nepal (2008–Present)

```typescript
import type { Timeline } from "@/types/timeline";

export const primeMinisters: Timeline = {
  id: "prime-ministers",
  title: "Prime Ministers of Nepal (2008–Present)",
  description: "Leaders of the Federal Democratic Republic of Nepal",
  period: { start: 2008, end: 2024 },
  coverMedia: {
    url: "/pm-office.jpg",
    alt: "Office of the Prime Minister",
  },
  entries: [
    {
      id: "pm-1",
      date: "2008-08-18",
      endDate: "2009-05-25",
      title: "Pushpa Kamal Dahal (Prachanda)",
      description: "First PM of Federal Democratic Republic",
      tags: ["CPN-Maoist", "Federal Republic"],
      involved: [{ name: "Pushpa Kamal Dahal", role: "Prime Minister" }],
      durationDays: 280,
    },
    {
      id: "pm-2",
      date: "2009-05-25",
      endDate: "2011-02-06",
      title: "Madhav Kumar Nepal",
      description: "Second PM, led coalition government",
      tags: ["CPN-UML", "Coalition"],
      durationDays: 622,
    },
    // ... more entries
  ],
};
```

## Example 2: Major Earthquakes in Nepal

```typescript
import type { Timeline } from "@/types/timeline";

export const earthquakes: Timeline = {
  id: "nepal-earthquakes",
  title: "Major Earthquakes in Nepal",
  description: "Significant seismic events in Nepal's history",
  coverMedia: {
    url: "/earthquake-damage.jpg",
    alt: "Earthquake impact",
  },
  entries: [
    {
      id: "eq-1",
      date: "1934-01-15",
      title: "Nepal-Bihar Earthquake",
      magnitude: 8.0,
      casualties: 10700,
      description: "One of the worst earthquakes in Nepal's recorded history",
      tags: ["Natural Disaster", "Historic"],
      media: [
        {
          src: .*,
          alt: "Damage from 1934 earthquake",
        }
      ]
    },
    {
      id: "eq-2",
      date: "2015-04-25",
      title: "Gorkha Earthquake",
      magnitude: 7.8,
      casualties: 8964,
      description: "Devastating earthquake that destroyed historic monuments",
      tags: ["Natural Disaster", "UNESCO Heritage"],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/April_2015_Nepal_earthquake",
          label: "Wikipedia Article"
        }
      ]
    },
    {
      id: "eq-3",
      date: "2015-05-12",
      title: "Major Aftershock",
      magnitude: 7.3,
      casualties: 218,
      description: "Major aftershock near Dolakha",
      tags: ["Natural Disaster", "Aftershock"]
    }
  ]
};
```

## Example 3: Nepal GDP Over Time

```typescript
import type { Timeline } from "@/types/timeline";

export const nepalGDP: Timeline = {
  id: "nepal-gdp",
  title: "Nepal GDP Evolution (2000–2023)",
  description: "Economic growth of Nepal measured in USD billions",
  period: { start: 2000, end: 2023 },
  coverMedia: {
    url: "/economy-chart.jpg",
    alt: "Economic growth chart",
  },
  entries: [
    {
      id: "gdp-2000",
      date: 2000,
      title: "GDP: $5.45 billion",
      value: 5.45e9,
      description: "Nepal's GDP at the turn of the millennium",
    },
    {
      id: "gdp-2010",
      date: 2010,
      title: "GDP: $16.00 billion",
      value: 16.0e9,
      description: "Post-conflict economic recovery period",
    },
    {
      id: "gdp-2020",
      date: 2020,
      title: "GDP: $33.43 billion",
      value: 33.43e9,
      description: "Pre-COVID peak, significant growth",
    },
    {
      id: "gdp-2023",
      date: 2023,
      title: "GDP: $40.91 billion",
      value: 40.91e9,
      description: "Post-pandemic recovery and growth",
    },
  ],
};
```

## Example 4: Constitutions of Nepal

```typescript
import type { Timeline } from "@/types/timeline";

export const constitutions: Timeline = {
  id: "nepal-constitutions",
  title: "Constitutions of Nepal",
  description: "Evolution of Nepal's constitutional framework",
  coverMedia: {
    url: "/constitution-book.jpg",
    alt: "Constitution of Nepal",
  },
  entries: [
    {
      id: "const-1",
      date: "1948-01-26",
      title: "Constitution of the Kingdom of Nepal 1948",
      description: "First constitution, granted by King Tribhuvan",
      tags: ["Monarchy", "Historic"],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal",
          label: "Learn more"
        }
      ]
    },
    {
      id: "const-2",
      date: "1951-02-18",
      title: "Interim Government of Nepal Act 1951",
      description: "Interim constitution after end of Rana regime",
      tags: ["Interim", "Democracy"]
    },
    {
      id: "const-3",
      date: "1959-02-12",
      title: "Constitution of Nepal 1959",
      description: "First democratic constitution with parliamentary system",
      tags: ["Democracy", "Parliamentary"]
    },
    {
      id: "const-4",
      date: "2015-09-20",
      title: "Constitution of Nepal 2015",
      description: "Current constitution establishing federal democratic republic",
      tags: ["Federal", "Republic", "Current"],
      media: [
        {
          src: .*,
          alt: "Constitution promulgation ceremony",
        }
      ]
    }
  ]
};
```

## Example 5: Rana Regime Timeline

```typescript
import type { Timeline } from "@/types/timeline";

export const ranaRegime: Timeline = {
  id: "rana-regime",
  title: "Rana Regime (1846–1951)",
  description: "104 years of hereditary prime ministerial rule",
  period: { start: 1846, end: 1951 },
  coverMedia: {
    url: "/rana-palace.jpg",
    alt: "Rana palace",
  },
  entries: [
    {
      id: "rana-1",
      date: 1846,
      endDate: 1877,
      title: "Jang Bahadur Rana",
      description: "Founder of Rana dynasty, ruled for 31 years",
      tags: ["Founder", "Autocracy"],
      involved: [{ name: "Jang Bahadur Rana", role: "Prime Minister" }],
      durationDays: 11315,
    },
    {
      id: "rana-end",
      date: "1951-02-18",
      title: "End of Rana Regime",
      description: "Democratic revolution ends 104 years of Rana rule",
      tags: ["Revolution", "Democracy"],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Rana_dynasty",
          label: "Learn more",
        },
      ],
    },
  ],
};
```

## Example 6: Shah Dynasty Lineage

```typescript
import type { Timeline } from "@/types/timeline";

export const shahDynasty: Timeline = {
  id: "shah-dynasty",
  title: "Shah Dynasty of Nepal",
  description: "Royal lineage from unification to republic",
  period: { start: 1768, end: 2008 },
  coverMedia: {
    url: "/shah-crown.jpg",
    alt: "Royal crown",
  },
  entries: [
    {
      id: "shah-1",
      date: 1768,
      endDate: 1775,
      title: "Prithvi Narayan Shah",
      description: "Founder and unifier of modern Nepal",
      tags: ["Founder", "Unification"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
          avatar: "/prithvi-narayan-shah.jpg",
        },
      ],
    },
    {
      id: "shah-last",
      date: 2001,
      endDate: 2008,
      title: "Gyanendra Shah",
      description: "Last king of Nepal before abolition of monarchy",
      tags: ["Last King", "Republic"],
      involved: [{ name: "Gyanendra Shah", role: "King" }],
    },
  ],
};
```

## Key Patterns

### For Period-Based Timelines (PM, Kings, Regimes)

- Use `date` for start
- Use `endDate` for end
- Optionally calculate `durationDays`

### For Data Timelines (GDP, Population)

- Use numeric `date` (year)
- Use `value` for the metric
- Keep `title` descriptive with the value

### For Event Timelines (Earthquakes, Disasters)

- Use full date string `"YYYY-MM-DD"`
- Use specialized fields (`magnitude`, `casualties`)
- Include `media` for visual impact

### For Document Timelines (Constitutions, Treaties)

- Use full date for adoption/signing
- Use `tags` for categorization
- Include `links` to full text

## Tips

1. **Flexible Dates**: Use `string | number` as needed

   - Full dates: `"2023-01-15"`
   - Year only: `2023` or `"2023"`
   - Year ranges: Use `date` and `endDate`

2. **Optional Fields**: Only include what's relevant

   - Don't force `description` if title is self-explanatory
   - Use specialized fields (`magnitude`, `value`) when appropriate

3. **Consistency**: Within a timeline, maintain consistent formatting

   - All entries should use similar date formats
   - Tag naming should be consistent

4. **Rich Content**: Leverage all available fields
   - `involved` for key people/organizations
   - `media` for visual storytelling
   - `links` for additional resources
   - `tags` for filtering and categorization
