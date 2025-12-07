import type { Timeline } from "@/types/timeline";

export const constitutionsOfNepal: Timeline = {
  id: "constitutions-of-nepal",
  title: "Constitutions of Nepal",
  description:
    "From foundational counsel to federal republic: This timeline traces Nepal's constitutional evolution, starting with Prithvi Narayan Shah's guiding principles and culminating in seven written constitutions shaped by revolutions, alliances, and inclusion efforts.",
  period: { start: 1775, end: 2015 },
  tags: ["constitutional", "political", "national", "social"],
  involved: [
    {
      name: "Prithvi Narayan Shah",
      role: "Founder and author of Divya Upadesh",
      avatar: "/timelines/constitutions-of-nepal/prithvi-narayan.avif",
    },
    {
      name: "King Tribhuvan Shah",
      role: "Monarch during first two constitutions",
    },
    {
      name: "King Mahendra",
      role: "Author of 1959 & 1962 constitutions",
    },
    {
      name: "King Birendra",
      role: "Monarch during 1990 constitution",
    },
    {
      name: "Political Parties",
      role: "From 2007 - Present",
    },
  ],
  coverMedia: {
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Constitution_of_Nepal_2015.jpg",
    alt: "Original copy of the Constitution of Nepal 2015 being signed",
    caption:
      "President Ram Baran Yadav promulgating the Constitution of Nepal on 20 September 2015.",
    attribution: "Office of the President of Nepal",
  },
  entries: [
    {
      id: "0",
      date: "1775-01-00",
      title: "Divya Upadesh: Nepal's Foundational Guiding Principles",
      description: (
        <>
          <p>
            Prithvi Narayan Shah's oral "Divine Counsel" to his courtiers and
            successors, emphasizing unity, anti-corruption, and balanced foreign
            policy amid threats from British India and China.
          </p>
          <ul>
            <li>
              Vision of Nepal as a "garden of four castes and 36 sub-castes" for
              inclusive governance
            </li>
            <li>
              Principles of nationalism and statecraft that influenced Shah rule
              for generations
            </li>
            <li>
              Regarded as Nepal's de facto first "constitution" by some
              historians
            </li>
          </ul>
          <p>
            Drafters: Delivered personally by Prithvi Narayan Shah; no formal
            committee or parties (pre-modern era). Political context: Shah
            dynasty consolidation post-unification.
          </p>
        </>
      ),
      tags: ["Foundational", "Governance"],
      involved: [
        { name: "Prithvi Narayan Shah", role: "Author and Unifier" },
        { name: "Pratap Singh Shah", role: "Intended Successor" },
      ],
      media: [
        {
          src: "/timelines/constitutions-of-nepal/0c29f787.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Prithvi_Narayan_Shah_1960_%28restoration%29.png/900px-Prithvi_Narayan_Shah_1960_%28restoration%29.png",
          alt: "Portrait of Prithvi Narayan Shah",
          caption:
            "Prithvi Narayan Shah, architect of modern Nepal and Divya Upadesh.",
          attribution: "Wikimedia Commons",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Divyopadesh",
          label: "Divyopadesh on Wikipedia",
        },
        {
          url: "https://www.telegraphnepal.com/nepal-unifier-king-prithvi-narayan-shah-and-his-dibya-upadesh-or-divine-counsel/",
          label: "Analysis of Divine Counsel",
        },
      ],
    },
    {
      id: "1",
      date: "1948-02-06",
      title: "Government of Nepal Act 1948",
      description: (
        <>
          <p>
            Nepal's first written constitutional document, a limited reform
            under Rana rule introducing a bicameral legislature and basic rights
            while retaining oligarchic control.
          </p>
          <ul>
            <li>Bicameral assembly with some advisory powers</li>
            <li>Fundamental rights on paper, but unimplemented</li>
            <li>Aimed to avert full revolution</li>
          </ul>
          <p>
            Reason: Response to 1947 Praja Parishad revolt and pressures from
            King Tribhuvan and Nepali Congress. Drafters: Committee led by Padma
            Shumsher Rana; no multi-party involvement (political parties
            banned). Parties: None formally; influenced by Nepali Congress
            agitation.
          </p>
        </>
      ),
      tags: ["Rana Regime", "Reform Attempt"],
      involved: [
        {
          name: "Padma Shumsher Rana",
          role: "Prime Minister and Committee Lead",
        },
        { name: "King Tribhuvan", role: "Monarch (advisory role)" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Padma_Shumsher_JBR.jpg",
          alt: "Padma Shumsher Rana",
          caption: "Padma Shumsher, reluctant reformer behind the 1948 Act.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Government_of_Nepal_Act_1948",
          label: "Government of Nepal Act 1948",
        },
        {
          url: "https://kathmandupost.com/miscellaneous/2015/09/24/here-are-things-you-need-to-know-about-the-7-constitutions-of-nepal",
          label: "Overview of Nepal's Constitutions",
        },
      ],
    },
    {
      id: "2",
      date: "1951-03-16",
      title: "Interim Government of Nepal Act 1951",
      description: (
        <>
          <p>
            Post-revolution framework ending Rana oligarchy, establishing
            constitutional monarchy and advisory assembly.
          </p>
          <ul>
            <li>Power-sharing between monarchy, Ranas, and democrats</li>
            <li>Democratic principles with interim governance</li>
            <li>Paved way for elections</li>
          </ul>
          <p>
            Reason: Legal basis after 1951 armed revolution by Nepali Congress.
            Drafters: Joint committee of Shah monarchy, Rana family, and Nepali
            Congress leaders. Parties: Nepali Congress (lead), with Rana
            representatives; no other parties active.
          </p>
        </>
      ),
      tags: ["Revolution", "Democracy"],
      involved: [
        { name: "King Tribhuvan", role: "Restored Monarch" },
        { name: "Mohan Shumsher Rana", role: "Last Rana PM" },
        {
          name: "Matrika Prasad Koirala",
          role: "First Commoner PM, Nepali Congress",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/King_Tribhuvan_in_1951.jpg",
          alt: "King Tribhuvan returning in 1951",
          caption:
            "King Tribhuvan's return from exile, symbolizing post-revolution transition.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Nepalese_revolution_of_1951",
          label: "1951 Revolution",
        },
        {
          url: "https://constitutionnet.org/country/nepal",
          label: "Nepal Constitutional Profile",
        },
      ],
    },
    {
      id: "3",
      date: "1959-02-12",
      title: "Constitution of the Kingdom of Nepal 1959",
      description: (
        <>
          <p>
            First full democratic constitution post-elections, with
            parliamentary system, rights, and judiciary.
          </p>
          <ul>
            <li>Bicameral legislature and independent judiciary</li>
            <li>King's emergency powers retained</li>
            <li>Fulfilled 1951 revolution promises</li>
          </ul>
          <p>
            Reason: To institutionalize democracy after first general election.
            Drafters: Commission chaired by Bhagawati Pd Singh, including Surya
            Pd Upadhyaya, Ranabir Subba, Hari Prashad Joshi; advisor Sir Ivor
            Jennings. Parties: Nepali Congress (dominant post-election), with
            input from emerging parties like Praja Parishad.
          </p>
        </>
      ),
      tags: ["First Democratic Constitution"],
      involved: [
        { name: "King Mahendra", role: "Promulgator" },
        { name: "B.P. Koirala", role: "First Elected PM, Nepali Congress" },
        { name: "Bhagawati Pd Singh", role: "Drafting Commission Chair" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/BP_Koirala_1960.jpg",
          alt: "B.P. Koirala in 1960",
          caption: "B.P. Koirala, elected under the 1959 Constitution.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal_1959",
          label: "1959 Constitution",
        },
        {
          url: "https://www.constituteproject.org/constitution/Nepal_2015?lang=en",
          label: "Constitute Project: Nepal Constitutions",
        },
      ],
    },
    {
      id: "4",
      date: "1962-12-16",
      title: "Constitution of Nepal 1962 (Panchayat Constitution)",
      description: (
        <>
          <p>
            Autocratic framework imposing partyless Panchayat system after royal
            coup.
          </p>
          <ul>
            <li>King-centric "guided democracy"</li>
            <li>Banned political parties</li>
            <li>Curtailed rights</li>
          </ul>
          <p>
            Reason: Mahendra's 1960 coup to curb elected government's reforms.
            Drafters: Royal commission under King Mahendra; no external parties
            (all banned). Parties: None; opposed by Nepali Congress and
            communists in exile.
          </p>
        </>
      ),
      tags: ["Royal Coup", "Panchayat Era"],
      involved: [
        { name: "King Mahendra", role: "Sole Architect" },
        { name: "B.P. Koirala", role: "Imprisoned Opponent, Nepali Congress" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mahendra_of_Nepal.jpg",
          alt: "King Mahendra",
          caption: "King Mahendra, enforcer of the Panchayat system.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1960_Nepalese_coup_d%27%C3%A9tat",
          label: "1960 Royal Coup",
        },
        {
          url: "https://en.wikipedia.org/wiki/Panchayat_(Nepal)",
          label: "Panchayat System",
        },
      ],
    },
    {
      id: "5",
      date: "1990-11-09",
      title: "Constitution of the Kingdom of Nepal 1990",
      description: (
        <>
          <p>
            Restored multi-party democracy after mass uprising, limiting
            monarchy.
          </p>
          <ul>
            <li>Sovereign parliament and rights protections</li>
            <li>Independent judiciary</li>
            <li>Ended Panchayat absolutism</li>
          </ul>
          <p>
            Reason: 1990 Jana Andolan I protests. Drafters: Commission chaired
            by Krishna Prasad Bhattarai (Nepali Congress). Parties: Alliance of
            Nepali Congress, United Left Front, and other anti-Panchayat groups
            (e.g., communists).
          </p>
        </>
      ),
      tags: ["Jana Andolan I", "Multi-party Democracy"],
      involved: [
        { name: "King Birendra", role: "Accepted Limits" },
        { name: "Ganesh Man Singh", role: "Movement Leader, Nepali Congress" },
        {
          name: "Krishna Prasad Bhattarai",
          role: "Interim PM and Draft Chair",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jana_Andolan_1990.jpg",
          alt: "1990 People's Movement protests",
          caption: "Pro-democracy crowds in Kathmandu during Jana Andolan I.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1990_People%27s_Movement",
          label: "Jana Andolan I",
        },
        {
          url: "https://kathmandupost.com/miscellaneous/2015/09/24/here-are-things-you-need-to-know-about-the-7-constitutions-of-nepal",
          label: "Snapshot of Nepal's 7 Constitutions",
        },
      ],
    },
    {
      id: "6",
      date: "2007-05-28",
      title: "Interim Constitution of Nepal 2007",
      description: (
        <>
          <p>
            Transitional framework post-insurgency, paving way for republic and
            federalism.
          </p>
          <ul>
            <li>Secularism and inclusion provisions</li>
            <li>Monarchy abolition pending CA</li>
            <li>Proportional representation</li>
          </ul>
          <p>
            Reason: End 1996–2006 civil war via Comprehensive Peace Accord.
            Drafters: Interim Constitution Draft Committee (ICDC) with reps from
            Seven Party Alliance (SPA) and Maoists. Parties: SPA (Nepali
            Congress, CPN-UML, etc.) + CPN (Maoist).
          </p>
        </>
      ),
      tags: ["Peace Accord", "Republic"],
      involved: [
        { name: "King Gyanendra", role: "Deposed Monarch" },
        { name: "Girija Prasad Koirala", role: "PM, Nepali Congress" },
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Maoist Chairman" },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/CPA_signing_2006.jpg",
          alt: "Comprehensive Peace Accord signing",
          caption: "GP Koirala and Prachanda seal peace in 2006.",
          attribution: "Public Domain",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Comprehensive_Peace_Accord",
          label: "Comprehensive Peace Accord 2006",
        },
        {
          url: "https://peaceaccords.nd.edu/provision/constitutional-reform-comprehensive-peace-agreement",
          label: "Peace Accords Matrix: Constitutional Reform",
        },
      ],
    },
    {
      id: "7",
      date: "2015-09-20",
      title: "Constitution of Nepal 2015",
      description: (
        <>
          <p>
            Current federal, secular republic constitution, emphasizing
            inclusion.
          </p>
          <ul>
            <li>Seven provinces and proportional rights</li>
            <li>Strong protections for minorities</li>
            <li>Ends unitary rule</li>
          </ul>
          <p>
            Reason: Fulfill 2006 peace mandate and inclusion demands. Drafters:
            Second Constituent Assembly's Constitutional Committee (chaired by
            Ram Birahi Singh Mahat initially, then consensus via Baburam
            Bhattarai's Dialogue Committee); thematic committees consulted.
            Parties: Nepali Congress, CPN-UML, CPN (Maoist Centre) (majority
            vote); Madhesi parties (e.g., MJF-D) abstained or opposed.
          </p>
        </>
      ),
      tags: ["Federalism", "Inclusion", "Republic"],
      involved: [
        {
          name: "Dr. Baburam Bhattarai",
          role: "Dialogue Committee Chair, CPN (Maoist)",
        },
        { name: "Khil Raj Regmi", role: "Interim Govt Head for CA Elections" },
        {
          name: "Sushil Koirala",
          role: "PM during Promulgation, Nepali Congress",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Constitution_of_Nepal_2015.jpg",
          alt: "2015 Constitution signing",
          caption: "Promulgation ceremony on 20 September 2015.",
          attribution: "Office of the President",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal",
          label: "Constitution of Nepal 2015",
        },
        {
          url: "https://www.constituteproject.org/constitution/Nepal_2015",
          label: "Full Text (Constitute Project)",
        },
        {
          url: "https://asiafoundation.org/wp-content/uploads/2020/10/Nepals-Constitution-and-Federalism_Vision-and-Implementation_English.pdf",
          label: "Asia Foundation: Constitution Vision",
        },
      ],
    },
  ],
};
