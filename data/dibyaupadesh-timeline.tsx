import type { Timeline } from "@/types/timeline";

export const divyaUpadesh: Timeline = {
  id: "dibyaupadesh",
  title: "Divya Upadesh",
  description:
    "The Divine Counsel delivered by the founder of modern Nepal in 1774-1775 remains one of the most quoted and debated political texts in Nepali history. Written in classical Nepali, it is both a nationalist manifesto and a pragmatic guide to statecraft, astonishingly relevant to Nepal's current political instability, corruption, and ethnic/regional infighting.",
  period: { start: 1774, end: 1775 },
  tags: [
    "national",
    "political",
    "diplomatic",
    "cultural",
    "social",
    "constitutional",
  ],
  involved: [
    {
      name: "Prithvi Narayan Shah",
      role: "Founder of modern Nepal and sole author",
      avatar: "/timelines/dibyaupadesh/prithvi-narayan.avif",
    },
    {
      name: "Bahadur Shah",
      role: "Son who preserved and transmitted the teachings",
    },
  ],
  coverMedia: {
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Prithvi_Narayan_Shah_1960_%28restoration%29.png/900px-Prithvi_Narayan_Shah_1960_%28restoration%29.png",
    alt: "Prithvi Narayan Shah delivering Divya Upadesh",
    caption:
      "Prithvi Narayan Shah (1723-1775), architect of unified Nepal and author of Divya Upadesh.",
    attribution: "Restored 1960 portrait, public domain",
  },
  entries: [
    {
      id: "1",
      date: "1774",
      title: "Context of Delivery",
      description: (
        <>
          <p>
            In the final year of his life, a gravely ill{" "}
            <strong>Prithvi Narayan Shah</strong>
            gathered his courtiers, commanders, and sons at Borlang Gorkha. He
            spoke for several days, knowing the fragile kingdom he had forged
            from dozens of warring principalities could easily collapse after
            his death.
          </p>
          <ul>
            <li>
              Nepal had just completed unification of the Kathmandu Valley
              (1769)
            </li>
            <li>
              British East India Company and Qing China were rising threats
            </li>
            <li>Internal ethnic, caste, and regional rivalries were intense</li>
          </ul>
        </>
      ),
      tags: ["Statecraft", "Succession"],
      involved: [{ name: "Prithvi Narayan Shah", role: "Dying King" }],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Gorkha_Palace_durbar.jpg",
          alt: "Gorkha Durbar",
          caption: "Gorkha Palace, where the Upadesh was delivered.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Divyopadesh",
          label: "Divyopadesh, Wikipedia",
        },
      ],
    },
    {
      id: "2",
      date: "1774",
      title: "Nepal as a Garden of Four Varnas and Thirty-Six Jats",
      description: (
        <>
          <p>
            The most famous line: "Nepal is a yam between two boulders" (China
            and British India) and "a garden of four varnas and thirty-six
            jats", a deliberate policy of inclusion.
          </p>
          <ul>
            <li>
              Recognised ethnic and caste diversity as Nepal's strength, not
              weakness
            </li>
            <li>
              Ordered the state to protect indigenous languages, customs, and
              land rights
            </li>
            <li>Prohibited forced cultural assimilation</li>
          </ul>
          <p>
            Modern relevance: Directly counters today's Madhesi, Janajati, and
            Dalit grievances over exclusion and cultural suppression.
          </p>
        </>
      ),
      tags: ["Inclusion", "Diversity"],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Traditional_Nepali_dress.jpg",
          alt: "Diverse ethnic groups of Nepal",
          caption:
            "Nepal's diversity, exactly what Prithvi Narayan celebrated.",
        },
      ],
      links: [
        {
          url: "https://www.nepjol.info/index.php/DSJ/article/view/33445",
          label: "Academic analysis of the 'yam' and 'garden' metaphors",
        },
      ],
    },
    {
      id: "3",
      date: "1774",
      title: "Anti-Corruption and Meritocracy",
      description: (
        <>
          <p>
            "Do not leave the poor to die of hunger. Do not let the rich become
            too rich." Repeated warnings against bribery, nepotism, and palace
            courtiers who "eat the kingdom".
          </p>
          <ul>
            <li>Officials must be paid well so they do not take bribes</li>
            <li>Promote people on merit, not caste or connection</li>
            <li>King himself must live simply</li>
          </ul>
          <p>
            2025 context: Nepal ranks 108/180 on Corruption Perceptions Index.
            Political musical chairs, coalition extortion, and patronage
            networks are exactly what the Upadesh warned against.
          </p>
        </>
      ),
      tags: ["Governance", "Corruption"],
    },
    {
      id: "4",
      date: "1774",
      title: "Balanced Foreign Policy: The Yam Theory",
      description: (
        <>
          <p>
            "Nepal is a yam between two boulders. Never lean too much toward the
            south or the north. Maintain equal distance and friendship with
            both."
          </p>
          <ul>
            <li>
              Do not let foreign powers establish military or economic dominance
            </li>
            <li>Never fully trust either neighbour</li>
            <li>Use diplomacy, not war, unless survival is threatened</li>
          </ul>
          <p>
            2025 relevance: Amid China's BRI projects and India's security
            concerns, Nepal's current leaders swing wildly between Beijing and
            Delhi, precisely the imbalance Prithvi Narayan warned would destroy
            the country.
          </p>
        </>
      ),
      tags: ["Diplomacy", "Non-alignment"],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nepal_sandwiched_between_India_and_China.svg",
          alt: "Nepal between India and China",
          caption: "The original geopolitical 'yam' in 2025.",
        },
      ],
    },
    {
      id: "5",
      date: "1774",
      title: "National Unity Above All",
      description: (
        <>
          <p>
            "If the people are united, no external force can harm Nepal. If the
            kingdom is divided, even a small enemy can swallow it."
          </p>
          <ul>
            <li>
              Do not let regional, ethnic, or party rivalries weaken the centre
            </li>
            <li>King and government must treat all regions fairly</li>
            <li>Internal fighting invites foreign intervention</li>
          </ul>
          <p>
            Direct diagnosis of 2025 Nepal: constant government collapses (14
            prime ministers in 17 years), province-centre disputes,
            identity-based parties, and foreign actors exploiting divisions.
          </p>
        </>
      ),
      tags: ["Unity", "Stability"],
    },
    {
      id: "6",
      date: "2025",
      title: "Why Divya Upadesh Matters Today",
      description: (
        <>
          <p>
            In an era of endless coalition infighting, corruption scandals,
            identity politics, and geopolitical tug-of-war, Prithvi Narayan
            Shah's 250-year-old counsel reads like a modern crisis prescription:
          </p>
          <ul>
            <li>Enforce inclusion without fracturing unity</li>
            <li>Pay civil servants well and punish corruption ruthlessly</li>
            <li>
              Stop treating politics as a business for personal enrichment
            </li>
            <li>Adopt genuine equidistance in foreign policy</li>
            <li>Put national interest above party, region, or ethnicity</li>
          </ul>
          <p>
            If Nepal's current leaders took even half of the Upadesh seriously,
            many of today's political crises would lose their oxygen.
          </p>
        </>
      ),
      tags: ["Relevance", "2025"],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Nepal_parliament_2024.jpg",
          alt: "Nepali parliament in session",
          caption:
            "Federal parliament, where the Upadesh is still quoted in every major debate.",
        },
      ],
      links: [
        {
          url: "https://www.setopati.com/opinion/329150",
          label:
            "Setopati: Prithvi Narayan's advice Nepal needs today (Nepali)",
        },
        {
          url: "https://kathmandupost.com/columns/2023/01/11/the-relevance-of-divya-upadesh",
          label: "Kathmandu Post: The relevance of Divya Upadesh (2023)",
        },
      ],
    },
  ],
};
