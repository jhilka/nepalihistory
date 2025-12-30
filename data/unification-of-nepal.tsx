import type { Timeline } from "@/types/timeline";

export const unificationOfNepal: Timeline = {
  id: "unification-nepal",
  title: "Unification of Nepal",
  description:
    "A timeline of the unification campaign led by Prithvi Narayan Shah of Gorkha and his successors, forming the foundations of modern Nepal.",
  tags: ["national", "political", "military", "diplomatic"],
  involved: [
    {
      name: "Prithvi Narayan Shah",
      role: "King of Gorkha and Unifier of Nepal",
      avatar: "/timelines/unification-nepal/0c29f787.avif",
    },
    {
      name: "Kalu Pande",
      role: "Commander-in-Chief of Gorkhali Army",
    },
    {
      name: "Pratap Singh Shah",
      role: "Successor King of Nepal",
    },
    {
      name: "Bahadur Shah",
      role: "Regent and Commander",
    },
  ],
  coverMedia: {
    src: "/timelines/unification-nepal/0c29f787.avif",
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Prithvi_Narayan_Shah_1960_%28restoration%29.png/900px-Prithvi_Narayan_Shah_1960_%28restoration%29.png",
    alt: "Founding father of Nepal - Prithivi Narayan Shah",
    caption:
      "Portrait of Prithvi Narayan Shah, the architect of Nepal's unification.",
  },
  entries: [
    {
      id: "1",
      date: "1743-04-03",
      title: "Prithvi Narayan Shah Ascends Throne",
      description: (
        <>
          <p>
            At age 20, Prithvi Narayan Shah became king of Gorkha following the
            death of his father, Nara Bhupal Shah. He recognized the fragmented
            political landscape of the region and began laying the groundwork
            for a unified Nepal. He strengthened his military, forged alliances
            with neighboring hill states, and focused on consolidating power and
            preparing for territorial expansion.
          </p>
          <ul>
            <li>Reorganized Gorkha administration</li>
            <li>Built strategic alliances, including with Lamjung</li>
            <li>Set the vision for a unified Nepal</li>
          </ul>
        </>
      ),
      tags: ["Leadership", "Gorkha"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "Newly Ascended King",
        },
        {
          name: "Nara Bhupal Shah",
          role: "Predecessor King",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/38cbaf5d.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Prithvi_Narayan_Shah_statue.jpg",
          alt: "Statue of Prithvi Narayan Shah",
          caption: "Statue of Prithvi Narayan Shah",
        },
        {
          src: "/timelines/unification-nepal/b499be1f.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Gorkha_Palace_durbar.jpg",
          alt: "Gorkha Palace - ancestral seat of Shah dynasty",
          caption: "Gorkha Palace - ancestral seat of Shah dynasty",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Prithvi_Narayan_Shah",
          label: "Learn more about Prithvi Narayan Shah",
        },
        {
          url: "https://en.wikipedia.org/wiki/Gorkha_Kingdom",
          label: "History of the Gorkha Kingdom",
        },
      ],
    },
    {
      id: "2",
      date: "1744-09-26",
      title: "Second Battle of Nuwakot",
      description:
        "<p>Gorkha forces, led by Kalu Pande, captured Nuwakot in a decisive victory, controlling a key trade route between Tibet and the Kathmandu Valley. This marked the first major success in the unification campaign, providing a strategic foothold near the valley and disrupting enemy trade networks. (Note: A prior failed attempt occurred in 1742.)</p><ul><li>Secured trade route to Tibet via Kerung</li><li>Established a base near Kathmandu Valley</li><li>Boosted military confidence</li></ul>",
      tags: ["Military", "Strategy"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King and Strategist",
        },
        {
          name: "Kalu Pande",
          role: "Commander-in-Chief",
        },
        {
          name: "Biraj Thapa Magar",
          role: "Gorkhali General",
        },
        {
          name: "Jaya Prakash Malla",
          role: "King of Kantipur (Opponent)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/5721357a.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nuwakot_Palace_%285%29.jpg/526px-Nuwakot_Palace_%285%29.jpg",
          alt: "Nuwakot Durbar Fort",
          caption: "Nuwakot Durbar, strategic fort captured in 1744.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Nuwakot",
          label: "Battle of Nuwakot (1744)",
        },
        {
          url: "https://www.himalmandaptreks.com/unification-nepal-king-prithivi-narayan-shah/",
          label: "Detailed Account of the Nuwakot Conquest",
        },
      ],
    },
    {
      id: "new-1",
      date: "1757-00-00",
      title: "First Battle of Kirtipur",
      description:
        "<p>The first assault on Kirtipur ended in defeat for Gorkha forces, with heavy casualties including the death of Commander-in-Chief Kalu Pande. This battle tested Gorkha resolve and led to the promotion of new leaders like Dhiraj Thapa as commander.</p><ul><li>Major military setback</li><li>Death of key general Kalu Pande</li><li>Led to army reorganization</li></ul>",
      tags: ["Military", "Setback"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Kalu Pande",
          role: "Commander (Killed in Battle)",
        },
        {
          name: "Dhiraj Thapa",
          role: "New Commander",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/395ee9d9.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Kirtipur%2C_1950_-_1955.jpg/800px-Kirtipur%2C_1950_-_1955.jpg",
          alt: "Kirtipur - ridge town in Nepal",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Kirtipur",
          label: "First Battle of Kirtipur (1757)",
        },
      ],
    },
    {
      id: "3",
      date: "1762-08-17",
      title: "Annexation of Makwanpur",
      description:
        "<p>Gorkha forces defeated the Sen dynasty of Makwanpur, annexing the kingdom and gaining control over southern trade routes. This victory cut off Kathmandu's access to Indian plains and provided captives, including royal family members, to bolster Gorkha's position.</p><ul><li>Defeat of Digbandhan Sen</li><li>Control over Tarai access</li><li>Strategic encirclement of Kathmandu Valley</li></ul>",
      tags: ["Conquest", "Expansion"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Digbandhan Sen",
          role: "King of Makwanpur (Defeated)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/2ad95515.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Ruin_Makwanpur_Gadi_Palace.JPG",
          alt: "Makwanpur Gadhi Fortress",
          caption: "Makwanpur Gadhi, site of the decisive battle.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Makwanpur",
          label: "Battle of Makwanpur (1762)",
        },
        {
          url: "https://www.nepaldatabase.com/prithvi-narayan-shah-unification-campaign-of-nepal",
          label: "Role of Makwanpur in Unification",
        },
      ],
    },
    {
      id: "new-2",
      date: "1765-00-00",
      title: "Second Battle of Kirtipur",
      description:
        "<p>In revenge for earlier defeats, Gorkha forces captured Kirtipur after a fierce siege. The victorious soldiers mutilated the defenders by cutting off noses and lips, a harsh act that shocked the valley kingdoms but secured a vital gateway to Kathmandu.</p><ul><li>Harsh reprisal against defenders</li><li>Opened path to Kathmandu Valley</li><li>Forced tactical innovations in siege warfare</li></ul>",
      tags: ["Military", "Siege", "Kirtipur"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Jayanta Rana",
          role: "Defender Leader (Executed)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/395ee9d9.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Kirtipur%2C_1950_-_1955.jpg/800px-Kirtipur%2C_1950_-_1955.jpg",
          alt: "Kirtipur after the Battles",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Kirtipur",
          label: "Second Battle of Kirtipur (1765)",
        },
        {
          url: "https://military-history.fandom.com/wiki/Unification_of_Nepal",
          label: "Military Details of Kirtipur Sieges",
        },
      ],
    },
    {
      id: "4",
      date: "1768-09-25",
      title: "Fall of Kathmandu (Kantipur)",
      description: (
        <>
          <p>
            Exploiting internal divisions among the Malla kings, Gorkha forces
            launched a surprise attack and captured Kathmandu. This decisive
            turning point ended Malla rule in the valley's core and established
            Shah dynasty control, consolidating Gorkha authority.
          </p>
          <ul>
            <li>End of Kantipur’s Malla rule under Jaya Prakash Malla</li>
            <li>Centralized power under Gorkha</li>
            <li>Major boost to unification momentum</li>
          </ul>
        </>
      ),
      tags: ["Kathmandu Valley", "Conquest"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King and Conqueror",
        },
        {
          name: "Jaya Prakash Malla",
          role: "King of Kantipur (Defeated)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/19b6fc2a.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kathmandu_Durbar_Square_IMG_2284_18.jpg/800px-Kathmandu_Durbar_Square_IMG_2284_18.jpg",
          alt: "Kathmandu Durbar Square - historic view",
          caption: "Kathmandu Durbar Square, center of Malla power.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Kathmandu",
          label: "Battle of Kathmandu (1768)",
        },
        {
          url: "https://www.britannica.com/biography/Prithvi-Narayan-Shah",
          label: "Britannica on Kathmandu Conquest",
        },
      ],
    },
    {
      id: "5",
      date: "1768-09-26",
      title: "Submission of Lalitpur (Patan)",
      description:
        "<p>Following Kathmandu's fall, Patan surrendered peacefully to avoid destruction, with Tej Narasingh Malla abdicating. This allowed Gorkha to consolidate control without widespread damage, further cementing authority over the valley and preserving its cultural heritage.</p><ul><li>Minimal resistance led to quick surrender</li><li>Preservation of city infrastructure and temples</li><li>Strengthened Gorkha control</li></ul>",
      tags: ["Kathmandu Valley", "Diplomacy"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Tej Narasingh Malla",
          role: "King of Patan (Abdicated)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/8b015da3.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Patan_durbar_square.jpg/800px-Patan_durbar_square.jpg",
          alt: "Patan Durbar Square, Lalitpur",
          caption: "Patan Durbar Square, spared from destruction.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Lalitpur",
          label: "Battle of Lalitpur (1768)",
        },
        {
          url: "https://en.wikipedia.org/wiki/Unification_of_Nepal",
          label: "Unification Timeline Overview",
        },
      ],
    },
    {
      id: "6",
      date: "1769-11-25",
      title: "Capture of Bhaktapur",
      description:
        "<p>Gorkha forces, after a prolonged siege, captured Bhaktapur, defeating Ranajit Malla and ending Malla rule in the valley. Kathmandu was declared the capital, completing the unification of the three major valley kingdoms under the Shah dynasty and laying the foundation of modern Nepal.</p><ul><li>End of centuries-long Malla rule</li><li>Unified three major valley kingdoms</li><li>Established political and cultural centralization in Kathmandu</li></ul>",
      tags: ["Kathmandu Valley", "Unification"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Ranajit Malla",
          role: "King of Bhaktapur (Defeated)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/cdda8ce3.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bhaktapurs-Durbar-Square-before-the-1932-earthquake.jpg/800px-Bhaktapurs-Durbar-Square-before-the-1932-earthquake.jpg",
          alt: "Bhaktapur Durbar Square",
          caption: "Bhaktapur Durbar Square, last Malla stronghold.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Battle_of_Bhaktapur",
          label: "Battle of Bhaktapur (1769)",
        },
        {
          url: "https://www.telegraphnepal.com/nepal-unification-campaign-in-chronological-order/",
          label: "Chronological Unification Events",
        },
      ],
    },
    {
      id: "new-3",
      date: "1772-08-29",
      title: "Annexation of Eastern Kirant",
      description:
        "<p>Under the command of Ram Krishna Kunwar and Abhiman Singh Basnyat, Gorkha forces invaded the Kirant (Limbuwan and Khambuwan) regions, defeating local rulers and annexing territories up to the Tista River. This expanded Nepal's eastern frontier significantly.</p><ul><li>Victory over Kirant kings like Karna Sen</li><li>Integration of Limbuwan and Khambuwan</li><li>Extended borders to Sikkim</li></ul>",
      tags: ["Eastern Expansion", "Conquest"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Ram Krishna Kunwar",
          role: "Gorkhali Commander",
        },
        {
          name: "Abhiman Singh Basnyat",
          role: "Gorkhali General",
        },
        {
          name: "Karna Sen",
          role: "Kirant Ruler (Defeated)",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/72909fb8.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Kanyam%2C_Ilam_-_best_location_in_Ilam_for_Nature_Lovers_%28By_Saroj_Pandey%29.jpg",
          alt: "Eastern Hill Landscape in Nepal",
          caption: "Hills of eastern Nepal, newly annexed territories.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Unification_of_Nepal#Eastern_campaign",
          label: "Eastern Campaigns in Unification",
        },
      ],
    },
    {
      id: "7",
      date: "1770-1780",
      title: "Western Expansion and Consolidation",
      description:
        "<p>With the valley secured, Shah forces under commanders like Swarup Singh Karki annexed western principalities such as Kaski (1775), Tanahun, and parts of the Sapta Gandaki region. This period integrated diverse ethnic groups and extended Nepal's influence westward.</p><ul><li>Annexation of Kaski and Tanahun</li><li>Integration of diverse populations like Magars and Gurungs</li><li>Expanded territorial control to the Seti River</li></ul>",
      tags: ["Expansion", "Consolidation"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "King",
        },
        {
          name: "Swarup Singh Karki",
          role: "Gorkhali Commander",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/58df7a2d.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kathmandu_valley_scene_Shivapuri_Nagarjun.JPG/800px-Kathmandu_valley_scene_Shivapuri_Nagarjun.JPG",
          alt: "Hilly regions of Nepal - landscape view",
          caption: "Western hills integrated during expansion.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Unification_of_Nepal#Western_campaign",
          label: "Western Expansion Details",
        },
        {
          url: "https://chinarinepal.com/prithivi-narayan-shah-and-unification-campaign-of-nepal/",
          label: "Campaign in Western Regions",
        },
      ],
    },
    {
      id: "8",
      date: "1775-01-11",
      title: "Death of Prithvi Narayan Shah",
      description:
        "<p>Prithvi Narayan Shah passed away at Devighat in Nuwakot at age 52. He left a unified core state encompassing the Kathmandu Valley and surrounding regions, with his son Pratap Singh Shah succeeding him. His 'Dibya Upadesh' (Divine Counsel) guided future rulers.</p><ul><li>Unified political entity from fragmented states</li><li>Legacy carried forward by successors like Pratap Singh Shah</li><li>Foundation for modern Nepal's borders</li></ul>",
      tags: ["Legacy", "Transition"],
      involved: [
        {
          name: "Prithvi Narayan Shah",
          role: "Deceased Unifier",
        },
        {
          name: "Pratap Singh Shah",
          role: "Successor King",
        },
        {
          name: "Rajendra Laxmi",
          role: "Regent",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/0328e7e9.avif",
          sourceUrl: "/timelines/unification-nepal/dev-ghat-boulder.webp",
          alt: "Devighat, Nepal - memorial site",
          caption: "Devighat, where Prithvi Narayan Shah died.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Prithvi_Narayan_Shah#Death_and_legacy",
          label: "Death and Legacy of Prithvi Narayan Shah",
        },
        {
          url: "https://www.imnepal.com/historical-events-shaped-modern-nepal/",
          label: "Impact on Modern Nepal",
        },
      ],
    },
    {
      id: "9",
      date: "1775-1816",
      title: "Expansion under Shah Successors",
      description:
        "<p>Under Pratap Singh Shah (r. 1775–1777), Rajendra Laxmi (regent), and Bahadur Shah (commander until 1792), Nepal expanded dramatically westward to the Sutlej River and eastward to Sikkim. Key annexations included Jumla (1789), Doti, Kumaon, and Garhwal (1790), but overextension led to the Anglo-Nepalese War (1814–1816), resulting in territorial losses via the Treaty of Sugauli.</p><ul><li>Annexations under Pratap Singh and Bahadur Shah</li><li>Peak extent twice modern Nepal's size</li><li>Consolidation challenged by British intervention</li></ul>",
      tags: ["Expansion", "State-building"],
      involved: [
        {
          name: "Pratap Singh Shah",
          role: "King (1775–1777)",
        },
        {
          name: "Bahadur Shah",
          role: "Regent and Expansion Leader",
        },
        {
          name: "Rana Bahadur Shah",
          role: "Later King",
        },
      ],
      media: [
        {
          src: "/timelines/unification-nepal/77daac13.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kingdom_of_nepal.png/800px-Kingdom_of_nepal.png",
          alt: "Historical map of Nepal showing territorial expansion",
          caption: "Map of Nepal at its peak during unification era.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Unification_of_Nepal#Later_expansions",
          label: "Successors' Expansions",
        },
        {
          url: "https://en.wikipedia.org/wiki/Anglo-Nepalese_War",
          label: "Anglo-Nepalese War and Treaty of Sugauli",
        },
        {
          url: "https://www.cambridge.org/core/books/abs/history-of-nepal/unification-and-sanskritisation-17431885/DAEF862FA8F8FA958A092FEA357440D0",
          label: "Academic Overview of Unification Period",
        },
      ],
    },
  ],
};
