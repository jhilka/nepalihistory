import type { Timeline } from "@/types/timeline";

export const revolutionsOfNepal: Timeline = {
  id: "revolutions-of-nepal",
  title: "Revolutions of Nepal",
  description:
    "A timeline of the pivotal revolutionary movements that have reshaped Nepal's governance, from the overthrow of hereditary prime ministers to the establishment of a federal democratic republic.",
  tags: ["national", "political", "military", "social"],
  involved: [
    {
      name: "King Tribhuvan",
      role: "Monarch who supported the 1951 revolution",
    },
    {
      name: "B.P. Koirala",
      role: "Leader of Nepali Congress and key figure in 1951 and democracy movements",
    },
    {
      name: "Ganesh Man Singh",
      role: "Prominent leader in the 1990 People's Movement",
    },
    {
      name: "Pushpa Kamal Dahal (Prachanda)",
      role: "Maoist leader during the 1996-2006 insurgency",
    },
    {
      name: "King Gyanendra",
      role: "Monarch whose rule was challenged in 2006",
    },
    {
      name: "Girija Prasad Koirala",
      role: "Prime Minister and leader in 1990 and 2006 movements",
    },
  ],
  coverMedia: {
    src: "/timelines/revolutions-of-nepal/d79ef427.avif",
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/1990_Nepalese_revolution%2C_Kathmandu.jpg",
    alt: "Protesters during a revolutionary movement in Nepal",
    caption:
      "Crowds gather in Kathmandu during one of Nepal's historic uprisings.",
  },
  entries: [
    {
      id: "1",
      date: "1950-11-06",
      endDate: "1951-02-18",
      title: "1950-1951 Nepalese Revolution Against Rana Rule",
      description: (
        <>
          <p>
            The revolution began when <strong>King Tribhuvan</strong> sought
            asylum in India, escaping Rana control and sparking armed resistance
            against the autocratic regime that had ruled for over a century.
          </p>
          <ul>
            <li>
              <strong>November 6, 1950:</strong> King Tribhuvan and family flee
              to Indian Embassy, signaling royal support for democratic forces
              and triggering Indian involvement.
            </li>
            <li>
              <strong>November 7, 1950:</strong> Ranas crown young Gyanendra as
              king in an attempt to retain power, but India refuses recognition;
              Nepali Congress launches armed liberation from India.
            </li>
            <li>
              <strong>February 18, 1951:</strong> Delhi Agreement signed between
              king, Ranas, and Nepali Congress, establishing democratic
              government and ending Rana autocracy; King Tribhuvan returns,
              interim government formed.
            </li>
          </ul>
          <p>
            This laid the foundation for modern Nepali democracy, though
            challenges persisted.
          </p>
        </>
      ),
      tags: ["political", "diplomatic", "constitutional"],
      involved: [
        { name: "King Tribhuvan", role: "Exiled Monarch" },
        { name: "B.P. Koirala", role: "Nepali Congress Leader" },
        {
          name: "Mohan Shamsher Jang Bahadur Rana",
          role: "Rana Prime Minister",
        },
      ],
      media: [
        {
          src: "/timelines/revolutions-of-nepal/8963a76c.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nepali_Congress_1951.jpg/1100px-Nepali_Congress_1951.jpg",
          alt: "Nepali Congress leaders in 1951",
          caption: "Key figures of the Nepali Congress during the revolution.",
        },
        {
          src: "/timelines/revolutions-of-nepal/d93f0358.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/India-Nepal_Treaty_1950.jpg",
          alt: "Indo-Nepal Treaty document",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1951_Nepalese_revolution",
          label: "1951 Nepalese Revolution on Wikipedia",
        },
        {
          url: "https://www.nepalresearch.com/history/background/revolution_1950.htm",
          label: "Revolution of 1950/51 Details",
        },
      ],
    },
    {
      id: "2",
      date: "1990-02-18",
      endDate: "1990-04-08",
      title: "1990 People's Movement (Jana Andolan I)",
      description: (
        <>
          <p>
            On Democracy Day, mass protests erupted against King Mahendra's
            partyless Panchayat system, led by an alliance of Nepali Congress
            and leftist parties, inspired by global democratic waves.
          </p>
          <ul>
            <li>
              <strong>February 18, 1990:</strong> Movement launches with strikes
              and demonstrations across the country.
            </li>
            <li>
              <strong>April 6, 1990:</strong> 'Black Day' massacre where
              security forces kill dozens of protesters in Kathmandu,
              intensifying international pressure and public support.
            </li>
            <li>
              <strong>April 8, 1990:</strong> King Birendra lifts ban on
              political parties, agrees to constitutional reforms, ending
              absolute monarchy and transitioning to multiparty democracy.
            </li>
          </ul>
          <p>
            This movement marked a significant shift towards democratic
            governance in Nepal.
          </p>
        </>
      ),
      tags: ["political", "social", "constitutional"],
      involved: [
        { name: "Ganesh Man Singh", role: "Supreme Leader of Movement" },
        { name: "Girija Prasad Koirala", role: "Nepali Congress President" },
        { name: "King Birendra", role: "Ruling Monarch" },
      ],
      media: [
        {
          src: "/timelines/revolutions-of-nepal/d79ef427.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/1990_Nepalese_revolution%2C_Kathmandu.jpg",
          alt: "Protesters in Kathmandu 1990",
          caption: "Demonstrations during Jana Andolan I.",
        },
        {
          src: "/timelines/revolutions-of-nepal/8f4fc7db.avif",
          sourceUrl:
            "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/2022110912118/636b8aea9c7e80680e06b26bjpeg.jpg",
          alt: "Moment from 1990 protests",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1990_Nepalese_revolution",
          label: "1990 Nepalese Revolution",
        },
        {
          url: "https://nepalitimes.com/banner/one-moment-30-years-ago-today",
          label: "Account of Black Day",
        },
        {
          url: "https://english.nepalnews.com/s/explainers/from-monarchy-to-democracy-the-story-of-nepals-1990-peoples-uprising/",
          label: "Story of 1990 Uprising",
        },
      ],
    },
    {
      id: "3",
      date: "1996-02-13",
      endDate: "2006-11-21",
      title: "1996-2006 Nepalese Civil War (Maoist Insurgency)",
      description: (
        <>
          <p>
            The Communist Party of Nepal (Maoist) launched an armed 'People's
            War' against the monarchy and government, aiming for a communist
            republic and addressing social inequalities.
          </p>
          <ul>
            <li>
              <strong>February 13, 1996:</strong> Maoists attack police posts in
              rural areas, beginning a decade-long civil war focused on economic
              and social issues.
            </li>
            <li>
              <strong>November 23, 2001:</strong> Maoists escalate by attacking
              Royal Nepalese Army barracks, breaking ceasefire and leading to
              state of emergency.
            </li>
            <li>
              <strong>November 21, 2006:</strong> Comprehensive Peace Accord
              signed between government and Maoists, ending the war; Maoists
              join mainstream politics, commit to federal republic.
            </li>
          </ul>
          <p>
            The conflict resulted in thousands of casualties but paved the way
            for political transformation.
          </p>
        </>
      ),
      tags: ["military", "political"],
      involved: [
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Maoist Chairman" },
        { name: "Baburam Bhattarai", role: "Maoist Ideologue" },
        { name: "Girija Prasad Koirala", role: "Prime Minister" },
      ],
      media: [
        {
          src: "/timelines/revolutions-of-nepal/c9f3598d.avif",
          sourceUrl:
            "https://media.gettyimages.com/id/3471189/photo/rukum-district-nepal-maoist-insurgents-gather-april-22-2004-in-rukum-district-nepal-weeks-after.jpg?s=612x612&w=gi&k=20&c=OC0xcLu14Tpiq2O9mtNtH1PZMnJ2QZzY1e8zoblNFH8=",
          alt: "Maoist insurgents gathering",
          caption: "Maoist rebels during the insurgency.",
        },
        {
          src: "/timelines/revolutions-of-nepal/8d76ea19.avif",
          sourceUrl:
            "https://media.gettyimages.com/id/1779437264/photo/female-nepalese-maoist-peopless-liberation-army-soldiers-hold-toy-guns-as-they-perform-a.jpg?s=612x612&w=gi&k=20&c=4c-EPbVb85va5sS199-3TagykMYrs1av3NUvsrrMloU=",
          alt: "Maoist PLA soldiers",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Nepalese_Civil_War",
          label: "Nepalese Civil War",
        },
        {
          url: "https://www.aljazeera.com/news/2008/4/8/timeline-of-nepals-civil-war-2",
          label: "Timeline of Nepal's Civil War",
        },
        {
          url: "https://reliefweb.int/report/nepal/nepal-chronology-decade-long-conflict",
          label: "Chronology of Conflict",
        },
      ],
    },
    {
      id: "4",
      date: "2005-02-01",
      endDate: "2006-04-24",
      title: "2006 People's Movement (Jana Andolan II)",
      description: (
        <>
          <p>
            King Gyanendra's power grab amid the ongoing civil war provoked
            unified opposition, leading to mass protests that restored democracy
            and ended the monarchy's absolute rule. The country was engulfed in
            a decade-long civil war with Maoist insurgents, resulting in over
            17,000 deaths, heavy fighting, and widespread instability,
            exacerbated by political corruption, infighting, and frequent
            government changes that eroded public faith.
          </p>
          <ul>
            <li>
              <strong>May 2002:</strong> Parliament dissolved at the request of
              Prime Minister Sher Bahadur Deuba to avoid a no-confidence vote
              and hold fresh elections, but elections were postponed, leading to
              the king's dismissal of Deuba in October 2002 and assumption of
              executive powers under Article 127 of the 1990 Constitution.
            </li>
            <li>
              <strong>2002-2005:</strong> The king appointed successive
              governments—Lokendra Bahadur Chand (2002-2003), Surya Bahadur
              Thapa (2003-2004), and Deuba again (2004-2005)—in attempts to
              restore peace, negotiate with Maoists, and hold parliamentary
              elections, but all failed due to ongoing insurgent attacks,
              fragile coalitions, protests, and inability to secure conditions
              for polls.
            </li>
            <li>
              <strong>February 1, 2005:</strong> Invoking Article 127 to remove
              'difficulties' in implementing the constitution and declaring a
              state of emergency under Article 115, King Gyanendra dismisses the
              Deuba government, assumes direct power, arrests leaders, and
              curtails freedoms, citing failures to control Maoists and arrange
              elections.
            </li>
            <li>
              <strong>April 6, 2006:</strong> Seven Party Alliance and Maoists
              launch general strike and protests against royal rule; nationwide
              demonstrations face curfews and repression.
            </li>
            <li>
              <strong>April 24, 2006:</strong> King reinstates parliament, hands
              power to people; Girija Prasad Koirala becomes Prime Minister,
              marking end of direct royal rule.
            </li>
          </ul>
          <p>
            This movement unified political forces and set the stage for Nepal's
            transition to a republic.
          </p>
        </>
      ),
      tags: ["political", "military", "social", "constitutional"],
      involved: [
        { name: "King Gyanendra", role: "Monarch" },
        {
          name: "Girija Prasad Koirala",
          role: "SPA Leader and Prime Minister",
        },
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Maoist Support" },
        { name: "Sher Bahadur Deuba", role: "Dismissed Prime Minister" },
      ],
      media: [
        {
          src: "/timelines/revolutions-of-nepal/46a89967.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/50/Arjun_Narasingha_KC_arrested_by_King_during_Nepal_Uprising.jpg",
          alt: "Arrest during 2006 uprising",
          caption: "Police arresting a protester in 2006.",
        },
        {
          src: "/timelines/revolutions-of-nepal/463bc15e.avif",
          sourceUrl:
            "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2006/04/20/katapaa.gif?width=465&dpr=1&s=none&crop=none",
          alt: "Protests in Kathmandu 2006",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/2006_Nepalese_revolution",
          label: "2006 Nepalese Revolution",
        },
        {
          url: "https://www.bbc.com/news/world-south-asia-12499391",
          label: "Nepal Timeline - BBC",
        },
        {
          url: "https://english.onlinekhabar.com/loktantra-day-2006-peoples-movement.html",
          label: "Major Incidents of 2006 Movement",
        },
        {
          url: "https://en.wikipedia.org/wiki/2005_Nepal_coup_d%27%C3%A9tat",
          label: "2005 Nepal Coup d'État - Wikipedia",
        },
        {
          url: "https://www.crisisgroup.org/asia-pacific/nepal/091-nepals-royal-coup-making-bad-situation-worse",
          label: "International Crisis Group Report",
        },
        {
          url: "https://www.icj.org/wp-content/uploads/2013/03/Nepal-rule-of-law-abandoned-analysis-brief-2005-eng.pdf",
          label: "International Commission of Jurists Analysis",
        },
      ],
    },
    {
      id: "5",
      date: "2025-09-08",
      endDate: "2025-09-14",
      title: "2025 Gen Z Uprising",
      description: (
        <>
          <p>
            Youth-led protests erupted after a government-imposed social media
            ban, escalating into a broader anti-corruption movement that toppled
            the administration amid violence and calls for reform.
          </p>
          <ul>
            <li>
              <strong>September 8, 2025:</strong> Protests begin with Gen Z
              students and youth organizing against the ban; clashes with
              security forces lead to mass civilian casualties and
              radicalization.
            </li>
            <li>
              <strong>September 12, 2025:</strong> Demonstrations intensify,
              with protesters setting fire to government buildings; over 70
              deaths reported, drawing international calls for restraint.
            </li>
            <li>
              <strong>September 14, 2025:</strong> Prime Minister KP Sharma Oli
              resigns amid unrelenting pressure, marking a victory for the
              leaderless movement and potential political realignment.
            </li>
          </ul>
          <p>
            This uprising highlighted generational frustrations with corruption
            and inequality, changing the dynamics of power in Nepal.
          </p>
        </>
      ),
      tags: ["social", "political"],
      involved: [{ name: "KP Sharma Oli", role: "Resigning Prime Minister" }],
      media: [
        {
          src: "/timelines/revolutions-of-nepal/e8589600.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/2025_Nepalese_Gen_Z_protesters_infront_of_Bharatpur_mahanagarpalika_office.jpg",
          alt: "Gen Z protesters in 2025",
          caption: "Youth demonstrating in front of government office.",
        },
        {
          src: "/timelines/revolutions-of-nepal/d209c6c6.avif",
          sourceUrl:
            "https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2025/11/202511asia_nepal_tear_gas_riot_police.jpg?itok=yFhCUawl",
          alt: "Police using tear gas on protesters",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/2025_Nepalese_Gen_Z_protests",
          label: "2025 Nepalese Gen Z Protests",
        },
        {
          url: "https://www.hrw.org/news/2025/11/19/nepal-unlawful-use-of-force-during-gen-z-protest",
          label: "Human Rights Watch Report",
        },
        {
          url: "https://www.aljazeera.com/opinions/2025/10/3/nepals-leaderless-gen-z-revolution-has-changed-the-rules-of-power",
          label: "Al Jazeera Opinion on Gen Z Revolution",
        },
      ],
    },
  ],
};
