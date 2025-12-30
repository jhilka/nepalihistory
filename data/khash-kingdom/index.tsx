import type { Timeline } from "@/types/timeline";

export const khashKingdom: Timeline = {
  id: "khas-kingdom",
  title: "Khash Kingdom",
  description:
    "A timeline chronicling the rise and fall of the Khas Malla dynasty in Sinja Valley, the cradle of Nepali language and culture, spanning from the 11th to 14th centuries and influencing the Himalayan region through expansions, cultural shifts, and religious transitions.",
  tags: ["national", "political", "cultural", "military", "religious"],
  involved: [
    { name: "Nagaraja", role: "Founder of the Dynasty" },
    { name: "Prithvi Malla", role: "Most Renowned King and Expander" },
    { name: "Ripu Malla", role: "Expander and Inscriber" },
    { name: "Ashok Challa", role: "Emperor and Inscription Issuer" },
    { name: "Jitari Malla", role: "Invasion Leader and Title Adopter" },
  ],
  coverMedia: {
    src: "/timelines/khas-kingdom/32f99018.avif",
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ripu_Malla.jpg",
    alt: "Painting of Khasa Buddhist King Ripu Malla and his son Sangrama worshiping the Goddess Tara (center) c. 1312",
    caption:
      "The scenic Sinja Valley, ancient capital and origin of Nepali language.",
  },
  entries: [
    {
      id: "1",
      date: "1100",
      title: "Nagaraja",
      description: (
        <>
          <p>
            Nagaraja, also known as Javesvara or Nagadeva, founded the Khas
            Malla dynasty, establishing its capital at Semja (Sinja) near Jumla
            in the Sinja Valley. Tracing origins to the Tibetan House of Yatse
            in Khari Pradesh (Ngari Province), he laid the groundwork for a
            kingdom that blended Tibetan and Indian influences, gradually
            Indianising the dynasty.
          </p>
          <ul>
            <li>
              Established the dynasty six generations before Krachalla, as per
              later inscriptions
            </li>
            <li>Focused on consolidating power in the Karnali River basin</li>
            <li>
              Set the stage for the kingdom's equivalence to major Indian powers
              like the Gaudas and Gurjara-Pratihara
            </li>
            <li>Initiated foundational expansion in far-western Nepal</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural"],
      involved: [{ name: "Nagaraja", role: "Founder King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/dd6eace8.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/Tila_Valley_Jumla.JPG",
          alt: "Jumla District",
          caption: "Location of Jumla, near the capital Semja.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Khasa Kingdom Overview",
        },
        {
          url: "https://en.wikipedia.org/wiki/Sinja_Valley",
          label: "Sinja Valley History",
        },
      ],
    },
    {
      id: "2",
      date: "1150",
      title: "Chaap",
      description: (
        <>
          <p>
            Chaap, son of Nagaraja, succeeded his father and continued the early
            consolidation of the dynasty in the Karnali region, maintaining the
            blend of tribal traditions.
          </p>
          <ul>
            <li>
              Maintained rule over the Karnali River basin, strengthening local
              governance
            </li>
            <li>
              Part of the lineage using suffixes like -illa and -challa,
              indicating cultural continuity from Tibetan influences
            </li>
            <li>
              Focused on internal stability and tribal alliances to secure the
              nascent kingdom
            </li>
            <li>Contributed to the dynasty's gradual Indianisation</li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Chaap", role: "Successor King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/889efaf6.avif",
          sourceUrl:
            "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzEyCY85Kggmo3Ua_ESSHxZGOTrvSZ__jt0aAERZFjKPq5czzB40y_EdmAoH91DskCp2ZS_gKuDVMUbfRPjlR-ok7yXaGuLep5NoSzp6vjJO0KS4iLDHfjkOf_ND6nIwx7aNS6hWw=s680-w680-h510-rw",
          alt: "Sinja Valley",
          caption: "Heartland consolidated under early kings like Chaap.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Early Khas Kings",
        },
      ],
    },
    {
      id: "3",
      date: "1160",
      title: "Chapilla",
      description: (
        <>
          <p>
            Chapilla, son of Chaap, ruled during a period of foundational
            growth, focusing on internal affairs while preserving Buddhist
            influences from Tibetan roots.
          </p>
          <ul>
            <li>
              Documented in Tibetan chronicles as bTsan phyug lde, highlighting
              the dynasty's Himalayan connections
            </li>
            <li>
              Contributed to the gradual shift towards Indian cultural elements,
              blending traditions
            </li>
            <li>
              Maintained Buddhist practices and strengthened regional ties
            </li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      involved: [{ name: "Chapilla", role: "King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/19d1a2d3.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/46/Karnali_river.JPG",
          alt: "Karnali River",
          caption: "The Karnali basin, core territory under Chapilla.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Khas Malla Lineage",
        },
      ],
    },
    {
      id: "4",
      date: "1170",
      title: "Krashichalla",
      description: (
        <>
          <p>
            Krashichalla, son of Chapilla, emphasized regional control and
            continuity in the dynasty's early development.
          </p>
          <ul>
            <li>
              Listed in Tibetan chronicles as bKra shis lde, underscoring
              cultural ties
            </li>
            <li>
              Focused on consolidating power in far-western Nepal amid tribal
              dynamics
            </li>
            <li>
              Engaged in local alliances to secure borders and foster stability
            </li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Krashichalla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Mid-12th Century Rulers",
        },
      ],
    },
    {
      id: "5",
      date: "1180",
      title: "Kradhichalla",
      description: (
        <>
          <p>
            Kradhichalla, son of Krashichalla, upheld the kingdom's Buddhist
            traditions while fortifying its position in the Himalayas.
          </p>
          <ul>
            <li>
              Recorded in Tibetan chronicles as Grags btsan lde, indicating
              ongoing Tibetan influences
            </li>
            <li>
              Strengthened ties with neighboring Himalayan regions for trade and
              security
            </li>
            <li>
              Focused on administrative consolidation to support future growth
            </li>
            <li>Laid groundwork for the expansions under his successors</li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      involved: [{ name: "Kradhichalla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Pre-13th Century Kings",
        },
      ],
    },
    {
      id: "6",
      date: "1207",
      endDate: "1223",
      title: "Krachalla",
      description: (
        <>
          <p>
            Krachalla, son of Kradhichalla, marked the beginning of documented
            expansions with inscriptions, blending military prowess with
            religious devotion.
          </p>
          <ul>
            <li>
              Issued a copper plate inscription in 1223 at Baleshwar temple in
              Kumaon, claiming victory over Vijayarajya and the destruction of
              Kantipura (Kartikeyapur)
            </li>
            <li>
              As a devout Buddhist (Parama Saugata), he invoked Oṃ maṇi padme
              huṃ in records
            </li>
            <li>
              Expanded the kingdom's influence in the Karnali basin and possibly
              linked to Guge and Jumla dynasties
            </li>
            <li>
              Associated with the Buddhist-Hindu shrine at Kakrebihar,
              reflecting cultural syncretism
            </li>
          </ul>
        </>
      ),
      tags: ["political", "military", "religious"],
      involved: [{ name: "Krachalla", role: "Expansionist King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/b17ed4dd.avif",
          sourceUrl:
            "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/484507188_623299850507270_6464245771555400826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6EZ_jGFIcH0Q7kNvwE-7bBl&_nc_oc=AdlZcCmT779KWXf3QcPSHpncfyJsdXIa5dqxyeajmvPww7jAJh_jJ9MouE4-7zGEb-k&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=9kQ-O49XzEDXO4mi9zvxhw&oh=00_Afle-eyQTgjGzFsgthFS4c2Wajw1j_4D25axQetpGLqbWg&oe=6959E406",
          alt: "Kakre bihar",
          caption: "Buddhist-Hindu shrine linked to Krachalla.",
          attribution: "mandalas.life",
        },
        {
          src: "/timelines/sinja-valley-civilization/f18130f5.avif",
          sourceUrl:
            "https://res.cloudinary.com/chasset/f_webp,h_480,w_720/hbimages/desktop/1686390861200-Baleshwar-Temple-Champawat-Uttarakhand.jpg",
          alt: "Baleshwar temple in Uttarakhand, India",
          caption: "Baleshwar temple in Uttarakhand, India.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Krachalla's Inscriptions",
        },
        {
          url: "https://en.wikipedia.org/wiki/Kakrevihar",
          label: "Kakrebihar Shrine",
        },
      ],
    },
    {
      id: "7",
      date: "1223",
      endDate: "1287",
      title: "Ashok Challa",
      description: (
        <>
          <p>
            Ashok Challa, son of Krachalla, elevated the kingdom to imperial
            status through distant inscriptions and cultural patronage.
          </p>
          <ul>
            <li>
              Issued inscriptions in Bodhgaya, Bihar, in 1255 and 1278, styling
              himself Khasha-Rajadhiraja (emperor of the Khasas)
            </li>
            <li>
              Promoted Buddhism and facilitated cultural exchanges across the
              Himalayas and into India
            </li>
            <li>Expanded southward contacts, enhancing trade and influence</li>
            <li>
              Fathered Jitari Malla and Ananda Malla, ensuring dynastic
              continuity
            </li>
          </ul>
        </>
      ),
      tags: ["political", "cultural", "religious"],
      involved: [{ name: "Ashok Challa", role: "Emperor" }],
      media: [
        {
          src: "/timelines/khas-kingdom/efd596f2.avif",
          sourceUrl:
            "https://hblimg.mmtcdn.com/content/hubble/img/gaya_imgs/mmt/activities/m_Mahabodhi_temple_3_l_526_788.jpg",
          alt: "Bodhgaya Temple",
          caption: "Site of Ashok Challa's inscriptions in Bihar.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Ashok Challa's Rule",
        },
        {
          url: "https://en.wikipedia.org/wiki/Bodh_Gaya",
          label: "Bodhgaya Inscriptions",
        },
      ],
    },
    {
      id: "8",
      date: "1287",
      endDate: "1293",
      title: "Jitari Malla",
      description: (
        <>
          <p>
            Jitari Malla, first son of Ashok Challa, was the first king to
            prominently use the 'Malla' title, marking a shift in nomenclature
            as the dynasty Indianised further. The title 'Malla' was assumed
            through the ruling family name, distinct from the Kathmandu Mallas,
            and became standard from his reign onward, as evidenced in later
            inscriptions like Prithvi Malla's Dullu pillar tracing the line.
          </p>
          <ul>
            <li>
              Led multiple invasions into the Kathmandu Valley in the late 13th
              century, exploiting weaknesses in the Newar kingdoms post their
              own Malla dynasties
            </li>
            <li>
              Attacked the valley thrice, including a notable campaign in March
              1289, causing massive damage, temporary control, tribute
              extraction, and weakening defenses
            </li>
            <li>
              Accelerated southward expansion and Hinduisation, integrating
              northern influences into the valley
            </li>
            <li>
              Listed in Tibetan chronicles as Ji dar sMal; fathered Aditya
              Malla, continuing the lineage
            </li>
          </ul>
        </>
      ),
      tags: ["political", "military", "cultural"],
      involved: [{ name: "Jitari Malla", role: "Invasion Leader" }],
      media: [
        {
          src: "/timelines/khas-kingdom/00f1507a.avif",
          sourceUrl:
            "https://miro.medium.com/v2/resize:fit:1400/1*OdVDqmWaa_AnjCPQQbh57A.jpeg",
          alt: "Kathmandu Valley",
          caption: "The Kathmandu Valley, target of Jitari Malla's invasions.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Jitari Malla's Invasions",
        },
        {
          url: "https://en.wikipedia.org/wiki/History_of_Nepal",
          label: "Kathmandu Valley History",
        },
        {
          url: "https://en.wikipedia.org/wiki/Malla_dynasty_(Nepal)",
          label: "Distinction from Valley Mallas",
        },
      ],
    },
    {
      id: "9",
      date: "1293",
      title: "Ananda Malla",
      description: (
        <>
          <p>
            Ananda Malla, second son of Ashok Challa and brother of Jitari,
            maintained the kingdom's stability and Buddhist heritage amid
            ongoing expansions.
          </p>
          <ul>
            <li>
              Documented in Tibetan chronicles as A nan sMal, preserving
              cultural records
            </li>
            <li>Supported family-led expansions</li>
            <li>
              Promoted continuity in administration and religious practices
            </li>
            <li>Fathered Ripu Malla, who further advanced southward pushes</li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      involved: [{ name: "Ananda Malla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Ananda Malla's Era",
        },
      ],
    },
    {
      id: "10",
      date: "1312",
      endDate: "1313",
      title: "Ripu Malla",
      description: (
        <>
          <p>
            Ripu Malla, son of Ananda Malla, was a devout Buddhist who expanded
            southward and left enduring inscriptions, initiating greater Hindu
            influences.
          </p>
          <ul>
            <li>
              Issued inscriptions on Ashoka Pillars at Lumbini and Nigali Sagar
              in 1312, invoking Oṃ maṇi padme huṃ and naming his son Sangrama
            </li>
            <li>
              Commenced aggressive southward expansion, increasing contacts with
              India and fostering trade
            </li>
            <li>
              Initiated the Hinduisation of the kingdom while worshiping Goddess
              Tara (depicted in a 1312 painting)
            </li>
          </ul>
        </>
      ),
      tags: ["political", "military", "religious"],
      involved: [{ name: "Ripu Malla", role: "Expansionist King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/d70c4365.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nigali_Sagar_pillar_13th_century_inscription.jpg",
          alt: "Ripu Malla inscription at Lumbini",
          caption: `13th-century inscription by King Ripu Malla on the Nigali Sagar pillar of Ashoka. The inscription reads "Oṃ maṇi padme huṃ" and "Sri Ripumalla Chiram Jayatu 1234" ("Long live Sri Ripumalla"; year 1234 of the Saka Era corresponds to 1312 CE).`,
        },
        {
          src: "/timelines/khas-kingdom/b1f5f987.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/94/Lumbini_pillar_Medieval_inscription.jpg",
          alt: "Lumbini site",
          caption: "Lumbini, where Ripu Malla left his mark.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Ripu Malla's Inscriptions",
        },
        {
          url: "https://en.wikipedia.org/wiki/Lumbini",
          label: "Lumbini Pillars",
        },
      ],
    },
    {
      id: "11",
      date: "1313",
      title: "Sangrama Malla",
      description: (
        <>
          <p>
            Sangrama Malla, son of Ripu Malla, assisted in his father's
            expansions and maintained the momentum of southward influences.
          </p>
          <ul>
            <li>
              Appeared in his father's inscriptions at Lumbini, indicating
              princely involvement
            </li>
            <li>
              Continued cultural shifts towards Hinduism and regional
              integrations
            </li>
            <li>Focused on consolidating gains from previous expansions</li>
            <li>Supported dynastic continuity</li>
          </ul>
        </>
      ),
      tags: ["political", "cultural"],
      involved: [{ name: "Sangrama Malla", role: "Prince and King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Sangrama Malla",
        },
      ],
    },
    {
      id: "12",
      date: "1321",
      endDate: "1328",
      title: "Aditya Malla",
      description: (
        <>
          <p>
            Aditya Malla, son of Jitari Malla, ruled amid regional changes,
            maintaining the dynasty's hold on expanded territories.
          </p>
          <ul>
            <li>
              Listed in Tibetan chronicles as A jid smal, preserving historical
              continuity
            </li>
            <li>Focused on internal administration and stability</li>
            <li>
              Continued the legacy of valley interactions from his father's
              invasions
            </li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Aditya Malla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Aditya Malla's Reign",
        },
      ],
    },
    {
      id: "13",
      date: "1328",
      title: "Kalyana Malla",
      description: (
        <>
          <p>
            Kalyana Malla, son of Aditya Malla or Sangrama Malla, governed
            during a period of sustained influence, with limited specific
            records.
          </p>
          <ul>
            <li>
              Maintained the kingdom's territories and cultural transitions
            </li>
            <li>Supported ongoing Hinduisation efforts</li>
            <li>Fathered Pratapa Malla, ensuring succession</li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Kalyana Malla", role: "King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/f18130f5.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/Narakot_Sinja_Valley.JPG",
          alt: "Sinja Valley",
          caption: "Ongoing rule in the heartland.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "14th Century Kings",
        },
      ],
    },
    {
      id: "14",
      date: "1330",
      title: "Pratapa Malla",
      description: (
        <>
          <p>
            Pratapa Malla, son of Kalyana Malla, ruled at the kingdom's peak but
            left no heirs, marking a transitional phase.
          </p>
          <ul>
            <li>
              Oversaw the kingdom at its height before shifts in succession
            </li>
            <li>Focused on administration without recorded expansions</li>
            <li>
              His childless reign led to succession from another Khas family
              branch
            </li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Pratapa Malla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Pratapa Malla",
        },
      ],
    },
    {
      id: "15",
      date: "1336",
      endDate: "1339",
      title: "Punya Malla",
      description: (
        <>
          <p>
            Punya Malla, from Purang royalty and another Khas family,
            accelerated the religious shift, enforcing Hinduism amid dynastic
            changes.
          </p>
          <ul>
            <li>
              Introduced and enforced strict traditional Hindu rituals and
              customs, moving away from dominant Buddhism
            </li>
            <li>
              Began the full Hinduisation of the kingdom, influencing culture
              and administration
            </li>
            <li>Consolidated power through marriage and alliances</li>
            <li>Fathered Prithvi Malla, who became the most renowned ruler</li>
          </ul>
        </>
      ),
      tags: ["political", "religious"],
      involved: [{ name: "Punya Malla", role: "Hindu Reformer King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Punya Malla's Hinduisation",
        },
      ],
    },
    {
      id: "16",
      date: "1354",
      endDate: "1358",
      title: "Prithvi Malla",
      description: (
        <>
          <p>
            Prithvi Malla, son of Punya Malla, expanded the kingdom to its
            zenith, blending religions and leaving key inscriptions that
            documented the dynasty's history.
          </p>
          <ul>
            <li>
              Issued a stone pillar inscription at Dullu in 1357, listing
              predecessors back to Nagaraja and using early Nepali language
            </li>
            <li>
              Expanded territories to include Guge, Purang in Tibet, and eastern
              areas up to Kaskikot, marking the kingdom's greatest extent
            </li>
            <li>
              Transitioned from Buddhism to Hinduism, invoking both in
              inscriptions like the gold plate at Jumla (1356) and Shitushka
            </li>
            <li>
              Firmly established the kingdom through military and diplomatic
              means
            </li>
          </ul>
        </>
      ),
      tags: ["political", "military", "cultural", "religious"],
      involved: [{ name: "Prithvi Malla", role: "Peak Ruler" }],
      media: [
        {
          src: "/timelines/khas-kingdom/41b97b2d.avif",
          sourceUrl:
            "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/100878990_2348265045474630_8758831062768943104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Kj1WxGc6WxIQ7kNvwH8WVc1&_nc_oc=Admfk16FvYjA_NN1oadkkRq8agN5A0NdD_mVbD5kOG0RP3xQY_kiRXLGu0F4p28O8hQ&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=paSwDiAsgigYD0YGpz7ELA&oh=00_AfnrYf_2fK_02bZqVKYZjAJ5-hNZC_Tq097_5KIvql-INA&oe=697B5263",
          alt: "Dullu Pillar Inscription",
          caption:
            "Inscription from Prithvi Malla's reign at Dullu, Dailekh, Karnali Region.",
          attribution:
            "https://www.facebook.com/photo/?fbid=2348265042141297&set=a.1652304438404031",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Prithvi Malla's Expansions",
        },
        {
          url: "https://en.wikipedia.org/wiki/Dullu",
          label: "Dullu Inscription",
        },
      ],
    },
    {
      id: "17",
      date: "1360",
      title: "Surya Malla",
      description: (
        <>
          <p>
            Surya Malla, son of Ripu Malla, briefly returned to the Nagaraja
            clan line, with scant details on his rule.
          </p>
          <ul>
            <li>Maintained the kingdom post-peak expansions</li>
            <li>Focused on stability amid religious transitions</li>
            <li>Represented a short interlude before the final decline</li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Surya Malla", role: "King" }],
      media: [],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Surya Malla",
        },
      ],
    },
    {
      id: "18",
      date: "1370",
      title: "Abhaya Malla and Decline",
      description: (
        <>
          <p>
            Abhaya Malla, the <strong>last</strong> king of the unified Khas
            Malla dynasty, oversaw the kingdom's fragmentation after his death.
          </p>
          <ul>
            <li>
              Last ruler before the disintegration into the Baise Rajya (22
              principalities in Karnali-Bheri) and Chaubise Rajya (24 in
              Gandaki)
            </li>
            <li>
              Influenced by Rajput immigration post-1303 Chittorgarh siege,
              leading to ethnic and political shifts
            </li>
            <li>
              Marked the end of Sinja Valley's dominance as a unified political
              center
            </li>
            <li>
              The decline ended the era of Khas Malla sovereignty, paving the
              way for smaller confederacies
            </li>
          </ul>
        </>
      ),
      tags: ["political"],
      involved: [{ name: "Abhaya Malla", role: "Final King" }],
      media: [
        {
          src: "/timelines/khas-kingdom/c580d544.avif",
          sourceUrl:
            "https://i.ytimg.com/vi/-g9OapGDCb8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAiA9wdnJVnzaUWRP5TgWS7OAu3-w",
          alt: "Map of Baise Rajya",
          caption: "Fragmentation into Baise Rajya after Abhaya.",
        },
        {
          src: "/timelines/khas-kingdom/23be056c.avif",
          sourceUrl:
            "https://nepaltraveller.com/uploads/destination/bhurti-temple-complex-of-dailekh.jpg",
          alt: "Sinja Valley ruins",
          caption: "Ruins symbolizing the dynasty's end.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Khasa_kingdom",
          label: "Decline of Khasa Kingdom",
        },
        {
          url: "https://en.wikipedia.org/wiki/Baise_Rajya",
          label: "Baise Rajya Confederacy",
        },
        {
          url: "https://en.wikipedia.org/wiki/Chaubisi_Rajya",
          label: "Chaubise Rajya",
        },
      ],
    },
  ],
};
