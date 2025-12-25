import type { Timeline } from "@/types/timeline";

export const preUnificationDynastiesNepal: Timeline = {
  id: "pre-unification-dynasties-nepal",
  title: "Pre-Unification Dynasties of Nepal",
  description:
    "A timeline exploring the diverse dynasties and kingdoms that governed various regions of Nepal before Prithvi Narayan Shah's unification campaign in the 18th century, shaping the fragmented political landscape.",
  tags: ["national", "political", "cultural", "military"],
  involved: [
    { name: "Yalambar", role: "Legendary Kirat King" },
    { name: "Manadeva I", role: "Prominent Licchavi Ruler" },
    { name: "Jayasthiti Malla", role: "Reformer of Malla Dynasty" },
    { name: "Yaksha Malla", role: "Last Unified Malla King" },
  ],
  coverMedia: {
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kathmandu_Valley_seen_from_Palanse.jpg/1200px-Kathmandu_Valley_seen_from_Palanse.jpg",
    alt: "Kathmandu Valley, heartland of ancient Nepalese dynasties",
    caption:
      "Aerial view of the Kathmandu Valley, cradle of Licchavi and Malla civilizations.",
  },
  entries: [
    {
      id: "1",
      date: "Pre-205 CE",
      title: "Rise of the Gopal Dynasty",
      description: (
        <>
          <p>
            The Gopalas, a cowherd dynasty, emerged as early rulers of the
            Kathmandu Valley, laying foundational governance structures in
            ancient Nepal.
          </p>
          <ul>
            <li>Ruled for about five centuries</li>
            <li>Focused on pastoral and agricultural economy</li>
            <li>Overthrown by the Mahisapala Dynasty</li>
          </ul>
        </>
      ),
      tags: ["political", "economic"],
      involved: [{ name: "Gopal Kings", role: "Founders" }],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pashupatinath_Temple_E8.jpg",
          alt: "Pashupatinath Temple, site linked to ancient dynasties",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/History_of_Nepal",
          label: "History of Nepal",
        },
      ],
    },
    {
      id: "2",
      date: "Post-Gopal Era",
      title: "Mahisapala Dynasty Takes Control",
      description: (
        <>
          <p>
            The Abhira tribe's Mahisapala Dynasty replaced the Gopalas, ruling
            briefly over the Kathmandu Valley with a focus on consolidation.
          </p>
          <ul>
            <li>Three kings documented</li>
            <li>Buffalo herders by origin</li>
            <li>Defeated by Kirat invaders</li>
          </ul>
        </>
      ),
      tags: ["political", "military"],
      involved: [{ name: "Bhuwansingh", role: "Last Mahisapala King" }],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/History_of_Nepal",
          label: "Ancient Nepal Dynasties",
        },
      ],
    },
    {
      id: "3",
      date: "c. 800 BCE",
      title: "Establishment of the Kirat Dynasty",
      description: (
        <>
          <p>
            The Kirats, eastern Himalayan tribes, established a long-lasting
            dynasty in the Kathmandu Valley and beyond, blending tribal
            traditions with emerging urban life.
          </p>
          <ul>
            <li>Ruled for over 1,000 years</li>
            <li>Known for hunting and mountain warfare</li>
            <li>Influenced by Vedic and Buddhist elements</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural", "military"],
      involved: [{ name: "Yalambar", role: "First Kirat King" }],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kirat_Rai_people.jpg",
          alt: "Kirat people in traditional attire",
          caption: "Descendants of the ancient Kirat rulers.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Kirata_Kingdom",
          label: "Kirata Kingdom",
        },
      ],
    },
    {
      id: "4",
      date: "c. 600 BCE",
      title: "Shakya Kingdom in Kapilavastu",
      description: (
        <>
          <p>
            The Shakya oligarchic republic flourished in the southern plains,
            birthplace of Gautama Buddha, fostering early Buddhist philosophy
            amid Vedic influences.
          </p>
          <ul>
            <li>Republican governance structure</li>
            <li>Key site: Lumbini</li>
            <li>Annexed by Kosala kingdom</li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      involved: [
        { name: "Suddhodana", role: "Shakya Leader and Buddha's Father" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Lumbini_02.JPG",
          alt: "Lumbini, birthplace of Buddha",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Shakya",
          label: "Shakya Republic",
        },
      ],
    },
    {
      id: "5",
      date: "c. 400 CE",
      title: "Arrival of the Licchavi Dynasty",
      description: (
        <>
          <p>
            Migrating from Vaishali, the Licchavis ushered in a golden age of
            art, trade, and governance in the Kathmandu Valley, marking Nepal's
            classical period.
          </p>
          <ul>
            <li>Introduced advanced administration</li>
            <li>Patronized Buddhism and Hinduism</li>
            <li>Known for inscriptions and coinage</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural", "economic"],
      involved: [
        { name: "Manadeva I", role: "Prominent King" },
        { name: "Amshuverma", role: "Influential Minister" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/Changu_Narayan_Temple_Complex.JPG",
          alt: "Changu Narayan Temple from Licchavi era",
          caption: "Ancient Licchavi architecture.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Licchavi_(kingdom)",
          label: "Licchavi Kingdom",
        },
      ],
    },
    {
      id: "6",
      date: "c. 600 CE",
      title: "Founding of the Thakuri Dynasty",
      description: (
        <>
          <p>
            Emerging after the Licchavis, the Thakuris consolidated power in the
            valley, introducing festivals and architectural innovations that
            defined medieval Nepal.
          </p>
          <ul>
            <li>Established Nepal Era calendar</li>
            <li>Built Kasthamandap</li>
            <li>Transitioned to Malla rule</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural"],
      involved: [{ name: "Gunakama Deva", role: "Key Ruler" }],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Thakuri",
          label: "Thakuri Dynasty",
        },
      ],
    },
    {
      id: "7",
      date: "c. 700 CE",
      title: "Rule of the Katyuri Kings",
      description: (
        <>
          <p>
            The Katyuris governed western regions, blending local traditions
            with broader Himalayan influences in architecture and
            administration.
          </p>
          <ul>
            <li>Influenced Kumaon and Garhwal</li>
            <li>Promoted temple building</li>
            <li>Declined by 11th century</li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Katyuri_kings",
          label: "Katyuri Kings",
        },
      ],
    },
    {
      id: "8",
      date: "c. 954 CE",
      title: "Emergence of Khas Malla Kingdom",
      description: (
        <>
          <p>
            In western Nepal, the Khas Mallas built a powerful state, fostering
            trade and cultural exchanges across the Himalayas.
          </p>
          <ul>
            <li>Used Khas and Sanskrit languages</li>
            <li>Expanded into Tibet</li>
            <li>Fragmented into Baise Rajya</li>
          </ul>
        </>
      ),
      tags: ["political", "economic"],
      involved: [{ name: "Nagaraja", role: "Founder" }],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Khasa Kingdom",
        },
      ],
    },
    {
      id: "9",
      date: "1097 CE",
      title: "Karnat Dynasty in Mithila",
      description: (
        <>
          <p>
            The Karnats ruled the Terai region from Simraungadh, integrating
            Maithili culture and defending against invasions.
          </p>
          <ul>
            <li>Conquered by Tughlaq in 1324</li>
            <li>Influenced valley politics</li>
            <li>Migrated nobles to Kathmandu</li>
          </ul>
        </>
      ),
      tags: ["political", "military"],
      involved: [{ name: "Nanya Dev", role: "Founder" }],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3d/Simraungadh.jpg",
          alt: "Ruins of Simraungadh",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Karnat_dynasty",
          label: "Karnat Dynasty",
        },
      ],
    },
    {
      id: "10",
      date: "1201 CE",
      title: "Beginning of the Malla Dynasty",
      description: (
        <>
          <p>
            The Mallas transformed the Kathmandu Valley into a cultural
            powerhouse, with advancements in art, architecture, and urban
            planning.
          </p>
          <ul>
            <li>Patronized Newar culture</li>
            <li>Introduced caste reforms</li>
            <li>Traded with Tibet and India</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural", "economic"],
      involved: [
        { name: "Ari Malla", role: "First Malla King" },
        { name: "Jayasthiti Malla", role: "Reformer" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bhaktapur_Durbar_Square.jpg",
          alt: "Bhaktapur Durbar Square from Malla era",
          caption: "Malla architectural legacy.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Malla_dynasty_(Nepal)",
          label: "Malla Dynasty",
        },
      ],
    },
    {
      id: "11",
      date: "1482 CE",
      title: "Division of Malla Kingdom into Three",
      description: (
        <>
          <p>
            After Yaksha Malla's death, the valley split into Kathmandu,
            Bhaktapur, and Patan, leading to rivalry and artistic competition.
          </p>
          <ul>
            <li>Each developed unique durbar squares</li>
            <li>Weakened by internal conflicts</li>
            <li>Vulnerable to external threats</li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Yaksha Malla", role: "Last Unified Ruler" }],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Malla_dynasty_(Nepal)",
          label: "Malla Division",
        },
      ],
    },
    {
      id: "12",
      date: "14th Century",
      title: "Formation of Baise and Chaubisi Rajya",
      description: (
        <>
          <p>
            Western Nepal fragmented into 22 Baise and 24 Chaubisi
            principalities, ruled by Magar, Khas, and Thakuri lords, setting the
            stage for unification wars.
          </p>
          <ul>
            <li>Diverse ethnic governance</li>
            <li>Alliances and feuds</li>
            <li>Annexed by Gorkha</li>
          </ul>
        </>
      ),
      tags: ["political", "military"],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/Map_of_Baise_Rajya.png",
          alt: "Map of Baise Rajya",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Baise_Rajya",
          label: "Baise Rajya",
        },
        {
          url: "https://en.wikipedia.org/wiki/Chaubisi_Rajya",
          label: "Chaubisi Rajya",
        },
      ],
    },
  ],
};
