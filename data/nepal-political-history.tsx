import type { Timeline } from "@/types/timeline";
import React from "react";

const NO_OUTCOME_PLACEHOLDER = "";

const Table = ({
  data,
}: {
  data: { date: string; event: string; outcome: string }[];
}) => (
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Outcome</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <React.Fragment key={idx}>
          <tr>
            <td
              colSpan={2}
              style={{
                textAlign: "center",
                fontWeight: 600,
                fontSize: "0.8rem",
                padding: "6px 8px",
              }}
            >
              {row.date}
            </td>
          </tr>
          <tr>
            <td>{row.event}</td>
            <td>{row.outcome || NO_OUTCOME_PLACEHOLDER}</td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export const nepalPoliticalHistory: Timeline = {
  id: "nepal-political-history",
  title: "Nepal Political History",
  description:
    "A timeline tracing Nepal's turbulent journey from autocratic Rana rule through revolutions, monarchy reforms, civil war, and the birth of a federal republic amid ethnic tensions and democratic struggles.",
  tags: [
    "national",
    "political",
    "military",
    "constitutional",
    "diplomatic",
    "social",
  ],
  involved: [
    {
      name: "King Tribhuvan Bir Bikram Shah",
      role: "King and Catalyst for Democracy",
    },
    {
      name: "Bisheshwar Prasad Koirala",
      role: "Prime Minister and Democracy Advocate",
    },
    {
      name: "King Mahendra Bir Bikram Shah",
      role: "King and Panchayat System Founder",
    },
    {
      name: "Pushpa Kamal Dahal (Prachanda)",
      role: "Maoist Leader and Prime Minister",
    },
  ],
  coverMedia: {
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/King_Tribhuvan_Bir_Bikram_Shah.jpg/800px-King_Tribhuvan_Bir_Bikram_Shah.jpg",
    alt: "King Tribhuvan of Nepal",
    caption:
      "King Tribhuvan, whose bold move to seek refuge in India triggered the revolution that ended Rana rule.",
  },
  entries: [
    {
      id: "1",
      date: "1923-12-21",
      endDate: "1940-10-17",
      title: "Pre-Crisis Phase",
      description: (
        <>
          <p>
            During the long Rana era, Nepal remained isolated but saw small
            steps toward reform, while quiet opposition began to grow.
          </p>
          <Table
            data={[
              {
                date: "December 21, 1923",
                event:
                  "Representatives of Nepal and the United Kingdom signed the Treaty of Perpetual Peace and Friendship at the Singha Durbar in Kathmandu.",
                outcome:
                  "The UK recognized the independence and sovereignty of the Kingdom of Nepal, which had been ruled by hereditary prime ministers from the Rana family since 1846.",
              },
              {
                date: "November 28, 1924",
                event:
                  "Prime Minister Chandra Shumsher Jung Bahadur Rana appealed for the emancipation of slaves and the abolition of slavery in Nepal, which at the time had nearly 60,000 slaves.",
                outcome:
                  "The Nepalese government established an anti-slavery office, which provided compensation to slave owners and land to emancipated slaves. The process of emancipating slaves and abolishing slavery in Nepal was completed in August 1926.",
              },
              {
                date: "August 1926",
                event:
                  "The process of emancipating slaves and abolishing slavery in Nepal was completed.",
                outcome: "",
              },
              {
                date: "November 25, 1929",
                event: "Prime Minister Chandra Shumsher died.",
                outcome: "",
              },
              {
                date: "December 16, 1929",
                event:
                  "Bhim Shumsher Jang Bahadur Rana was installed as hereditary prime minister in a ceremony.",
                outcome: "",
              },
              {
                date: "September 1, 1932",
                event: "Prime Minister Bhim Shumsher died.",
                outcome:
                  "Juddha Shumsher Jang Bahadur Rana became the new prime minister.",
              },
              {
                date: "March 19, 1934",
                event:
                  "Rudra Shumsher Jung Bahadur Rana, commander-in-chief of the Nepalese armed forces, was dismissed and appointed as the chief administration official in Palpa district.",
                outcome: "",
              },
              {
                date: "June 2, 1936",
                event:
                  "Nepal People’s Council (Nepali Praja Parishad – NPP) was established by Dasharath Chand and Tanka Prasad Acharya in opposition to the Nepalese government controlled by the Rana family.",
                outcome: "A new political party was established.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "social", "diplomatic"],
      involved: [
        { name: "Chandra Shumsher Jang Bahadur Rana", role: "Prime Minister" },
        { name: "Bhim Shumsher Jang Bahadur Rana", role: "Prime Minister" },
        { name: "Juddha Shumsher Jang Bahadur Rana", role: "Prime Minister" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Nepal%E2%80%93Britain_Treaty_of_1923",
          label: "Nepal–Britain Treaty of 1923",
        },
        {
          url: "https://en.wikipedia.org/wiki/Slavery_in_Nepal",
          label: "Abolition of Slavery in Nepal",
        },
        {
          url: "https://en.wikipedia.org/wiki/Nepal_Praja_Parishad",
          label: "Nepal Praja Parishad",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/55ccfe58.avif",
          sourceUrl:
            "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Chandra_oct15.jpg",
          alt: "Chandra Shumsher in Britain",
          caption: "Chandra Shumsher during his visit to Britain.",
        },
        {
          src: "/timelines/nepal-political-history/ed9da39c.avif",
          sourceUrl:
            "https://www.meisterdrucke.ie/kunstwerke/1260px/Unbekannt_-_HH_the_Maharaja_Bhim_Shum_Shere_Jung_Bahadur_Rana_1937_-_%28MeisterDrucke-700801%29.jpg",
          alt: "Portrait of Bhim Shumsher Jung Bahadur Rana",
          caption: "Bhim Shumsher, who briefly ruled as prime minister.",
        },
        {
          src: "/timelines/nepal-political-history/6ad4e32f.avif",
          sourceUrl:
            "https://external-preview.redd.it/E6x9mBNwG5oszbTlUkZIUt1Tsbe7OyaUeEkUSbYpSxQ.jpg?width=640&crop=smart&auto=webp&s=c51694e762433e2d8bd11309ea44aa1e2eb609c1",
          alt: "Portrait of Juddha Shumsher Jang Bahadur Rana",
          caption: "Juddha Shumsher, a key Rana ruler in the 1930s.",
        },
        {
          src: "/timelines/nepal-political-history/c5c2e223.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Welcoming_Nepalese_PM.jpg/640px-Welcoming_Nepalese_PM.jpg",
          alt: "Tanka Prasad Acharya",
          caption: "Tanka Prasad Acharya, co-founder of Nepal Praja Parishad.",
        },
      ],
    },
    {
      id: "2",
      date: "1940-10-18",
      endDate: "1950-11-10",
      title: "Crisis Phase",
      description: (
        <>
          <p>
            Opposition to the Rana regime intensified with arrests, strikes, new
            political parties, and fleeting reforms, building unstoppable
            momentum toward revolution.
          </p>
          <Table
            data={[
              {
                date: "October 18, 1940",
                event:
                  "Several individuals linked to the Nepal People’s Council (NPP), including Dasharath Chand and Tanka Prasad Acharya, were arrested by government police for planning to assassinate officials.",
                outcome:
                  "Four NPP members—Ganga Lal Shrestha, Dasharath Chand, Dharma Bhakta Mathema, and Shukra Raj Shastri—were executed on January 24–28, 1941. The NPP was dissolved.",
              },
              {
                date: "November 29, 1945",
                event:
                  "Prime Minister Juddha Shumsher abdicated in favor of his nephew Padma Shumsher Jang Bahadur Rana, seen as a progressive Rana.",
                outcome:
                  "The All-India Nepali National Congress was established in Varanasi, India, on October 31, 1946.",
              },
              {
                date: "January 24–25, 1947",
                event:
                  "The Nepali National Congress (NRC) was formally established.",
                outcome:
                  "Imprisoned Tanka Prasad Acharya elected president; Bisheshwar Prasad Koirala became acting president.",
              },
              {
                date: "March 4, 1947",
                event:
                  "Girija Prasad Koirala led a jute mill workers’ strike in Biratnagar; the NRC joined in support.",
                outcome: "",
              },
              {
                date: "March 13, 1947",
                event:
                  "The NRC launched nationwide demonstrations against the government.",
                outcome: "",
              },
              {
                date: "March 24, 1947",
                event: "Government troops suppressed the Biratnagar strike.",
                outcome:
                  "Leaders including Girija Prasad Koirala and Bisheshwar Prasad Koirala were arrested.",
              },
              {
                date: "April 13, 1947",
                event:
                  "The NRC launched a non-violent Satyagraha resistance movement.",
                outcome: "",
              },
              {
                date: "April 14, 1947",
                event: "NRC supporters demonstrated in Kathmandu.",
                outcome:
                  "Prime Minister Padma Shumsher granted amnesty to arrested demonstrators.",
              },
              {
                date: "April 21, 1947",
                event:
                  "The United States recognized Nepal’s independence and established diplomatic relations.",
                outcome: "",
              },
              {
                date: "May 16, 1947",
                event:
                  "King Tribhuvan proposed political reforms, including an independent judiciary.",
                outcome: "",
              },
              {
                date: "June 1947",
                event:
                  "Students launched the Jayatu Sanskritam movement for educational and social equality in Kathmandu.",
                outcome: "Over 40 students arrested and deported.",
              },
              {
                date: "August 1947",
                event:
                  "Girija Prasad Koirala and Bisheshwar Prasad Koirala were released from prison.",
                outcome:
                  "Prime Minister Padma Shumsher sought Indian Prime Minister Jawaharlal Nehru’s help in drafting a constitution.",
              },
              {
                date: "January 16, 1948",
                event:
                  "Prime Minister Padma Shumsher promulgated the Government of Nepal Act of 1948.",
                outcome:
                  "Created a bicameral legislature and vested executive power in the prime minister advised by a Council of Ministers.",
              },
              {
                date: "April 30, 1948",
                event:
                  "Prime Minister Padma Shumsher resigned and went into exile in India after conservative Rana opposition.",
                outcome:
                  "Conservative Mohan Shamsher Jang Bahadur Rana became prime minister.",
              },
              {
                date: "May 1, 1948",
                event:
                  "Prime Minister Mohan Shamsher suspended the new constitution and banned the NRC.",
                outcome: "",
              },
              {
                date: "August 4, 1948",
                event:
                  "The Nepal Democratic Congress (NPC) was established in Calcutta by progressive Ranas, including Subarna Shamsher.",
                outcome: "",
              },
              {
                date: "April 22, 1949",
                event:
                  "The Communist Party of Nepal (CPN) was founded by Puspa Lal Shrestha and others in Calcutta.",
                outcome: "",
              },
              {
                date: "April 10, 1950",
                event:
                  "The NRC and NPC merged to form the Nepali Congress (NC).",
                outcome:
                  "Matrika Prasad Koirala elected president; Mohandra Vikaram Shah general-secretary.",
              },
              {
                date: "July 31, 1950",
                event:
                  "Nepal and India signed the Treaty of Peace and Friendship.",
                outcome: "",
              },
              {
                date: "November 6, 1950",
                event:
                  "King Tribhuvan sought refuge in the Indian embassy in Kathmandu.",
                outcome: "",
              },
              {
                date: "November 7, 1950",
                event:
                  "The government deposed King Tribhuvan and proclaimed three-year-old Prince Gyanendra as king.",
                outcome: "",
              },
              {
                date: "November 10, 1950",
                event:
                  "King Tribhuvan and most of his family were flown to New Delhi on Indian aircraft.",
                outcome: "",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "diplomatic", "social"],
      involved: [
        { name: "King Tribhuvan Bir Bikram Shah", role: "King Seeking Reform" },
        { name: "Bisheshwar Prasad Koirala", role: "Opposition Leader" },
        {
          name: "Padma Shamsher Jang Bahadur Rana",
          role: "Reformist Prime Minister",
        },
        {
          name: "Mohan Shamsher Jang Bahadur Rana",
          role: "Conservative Prime Minister",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Rana_dynasty",
          label: "Rana Dynasty Overview",
        },
        {
          url: "https://en.wikipedia.org/wiki/Nepali_Congress",
          label: "History of Nepali Congress",
        },
        {
          url: "https://en.wikipedia.org/wiki/1950_Indo-Nepal_Treaty_of_Peace_and_Friendship",
          label: "1950 Indo-Nepal Treaty",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://www.spotlightnepal.com/media/images/Padma_Shamsher.2e16d0ba.fill-650x500.jpg",
          alt: "Portrait of Padma Shamsher Jang Bahadur Rana",
          caption:
            "Padma Shumsher, the progressive Rana who introduced Nepal's first constitution.",
        },
        {
          sourceUrl:
            "https://www.spotlightnepal.com/media/images/Mohan_Shamsher_Jang_Bahadur_Rana.2e16d0ba.fill-650x500.jpg",
          alt: "Portrait of Mohan Shamsher Jang Bahadur Rana",
          caption:
            "Mohan Shamsher, the last Rana prime minister who resisted reforms.",
        },
        {
          src: "/timelines/nepal-political-history/490dc39e.avif",
          sourceUrl: "https://pbs.twimg.com/media/Ft4xdS7aYAExLeo.jpg",
          alt: "King Tribhuvan and family leaving for Indian embassy, 1950",
          caption:
            "The royal family en route to the Indian embassy, marking the dramatic turning point.",
        },
        {
          src: "/timelines/nepal-political-history/ba1caec0.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nepali_Congress_1951.jpg",
          alt: "Nepali Congress leaders and supporters in 1951",
          caption:
            "Early leaders of the Nepali Congress during the revolutionary period.",
        },
      ],
    },
    {
      id: "3",
      date: "1950-11-11",
      endDate: "1951-02-21",
      title: "Conflict Phase",
      description: (
        <>
          <p>
            The armed revolution against the Rana regime erupted swiftly across
            the Terai, with Nepali Congress rebels capturing key towns and
            forcing a negotiated end to over a century of hereditary rule.
          </p>
          <Table
            data={[
              {
                date: "November 11–12, 1950",
                event:
                  "The militant wing of the Nepali Congress, known as the Liberation Army (Mukti Sena), commanded by Major-General Subarna Shamsher, attacked and captured Birgunj in Parsa district.",
                outcome:
                  "The NC established a provisional government headed by Tej Bahadur Amatya in Birgunj. Military assistance (weapons and ammunition) came from Burma prior to hostilities and from Sheikh Mohammed Abdullah of Kashmir during the conflict.",
              },
              {
                date: "November 12, 1950",
                event: "NC rebels captured Udaypur Gadhi.",
                outcome: "",
              },
              {
                date: "November 13–20, 1950",
                event:
                  "Repeated attacks by NC rebels commanded by Kunwar Indrajit Singh on Bhairahawa in Rupandehi district; government forces recaptured Birgunj on November 20.",
                outcome:
                  "Deaths of dozens of rebels and several government soldiers.",
              },
              {
                date: "November 16–19, 1950",
                event:
                  "NC rebels captured Rangeli, Haraicha, and clashed in Jhapa; government police fired on NC supporters in Gaur, Rautahat district.",
                outcome: "12 civilians killed in Gaur.",
              },
              {
                date: "December 10–11, 1950",
                event: "NC rebels captured Dingla in Bhojpur district.",
                outcome: "",
              },
              {
                date: "December 23–24, 1950",
                event: "NC rebels captured Biratnagar in Morang district.",
                outcome:
                  "22 government soldiers killed; a second provisional government headed by Keshav Prasad Koirala established in Biratnagar.",
              },
              {
                date: "January 3–10, 1951",
                event:
                  "Clashes near Lauki and capture of Gorkha by NC rebels; government announced restoration of King Tribhuvan and amnesty.",
                outcome: "16 government soldiers killed near Lauki.",
              },
              {
                date: "January 8–16, 1951",
                event:
                  "Indian Prime Minister Jawaharlal Nehru appealed for ceasefire; Matrika Prasad Koirala called for cessation of hostilities while negotiations continued in Delhi.",
                outcome:
                  "Some rebel factions continued fighting in western Nepal.",
              },
              {
                date: "February 12, 1951",
                event:
                  "The Delhi Accord was signed, mediated by the Indian government.",
                outcome: "",
              },
              {
                date: "February 15, 1951",
                event:
                  "The agreement provided for the restoration of King Tribhuvan, a democratically-elected constituent assembly within two years, an interim coalition government, and release of political prisoners.",
                outcome: "King Tribhuvan returned to Kathmandu.",
              },
              {
                date: "February 21, 1951",
                event:
                  "Remaining rebel forces under Kunwar Indrajit Singh were defeated with Indian troop support.",
                outcome:
                  "Kunwar Indrajit Singh captured; effective end of armed conflict.",
              },
            ]}
          />
        </>
      ),
      tags: ["military", "political", "national", "diplomatic"],
      involved: [
        { name: "Subarna Shamsher Rana", role: "Commander of Mukti Sena" },
        {
          name: "King Tribhuvan Bir Bikram Shah",
          role: "Restored Constitutional Monarch",
        },
        { name: "Matrika Prasad Koirala", role: "Nepali Congress Leader" },
        { name: "Kunwar Indrajit Singh", role: "Rebel Commander" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1951_Nepalese_revolution",
          label: "1951 Nepalese Revolution",
        },
        {
          url: "https://en.wikipedia.org/wiki/Delhi_Accord",
          label: "Delhi Accord Details",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/ba1caec0.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nepali_Congress_1951.jpg",
          alt: "Nepali Congress leaders and fighters in 1951",
          caption:
            "Members of the Nepali Congress shortly after the revolution.",
        },
        {
          src: "/timelines/nepal-political-history/8b2b32c0.avif",
          sourceUrl:
            "https://english.onlinekhabar.com/wp-content/uploads/2020/08/Women-movement-1951-1024x683.jpg",
          alt: "Women participating in the 1951 democracy movement",
          caption:
            "Women played a vital role in the armed and civil resistance.",
        },
        {
          src: "/timelines/nepal-political-history/490dc39e.avif",
          sourceUrl: "https://pbs.twimg.com/media/Ft4xdS7aYAExLeo.jpg",
          alt: "King Tribhuvan and family heading to Indian embassy in 1950",
          caption:
            "The royal family's dramatic escape that sparked the final phase of the revolution.",
        },
        {
          src: "/timelines/nepal-political-history/01e53030.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rana_-_Congress_cabinet%2C_Nepal_1951.jpg",
          alt: "Interim Rana-Congress cabinet in 1951",
          caption: "The coalition cabinet formed after the Delhi Accord.",
        },
        {
          src: "/timelines/nepal-political-history/ff29aa64.avif",
          sourceUrl:
            "https://sancharkarmi.com/uploads/news/images/381861576Subarna-Shumsher-Rana.jpeg",
          alt: "Portrait of Subarna Shamsher Rana",
          caption:
            "Subarna Shamsher, the progressive Rana who led the Liberation Army.",
        },
      ],
    },
    {
      id: "4",
      date: "1951-02-22",
      endDate: "1963-04-13",
      title: "Post-Conflict Phase",
      description: (
        <>
          <p>
            After the revolution, Nepal experimented with fragile democracy amid
            unstable governments, landmark elections, and growing royal
            intervention, culminating in King Mahendra's seizure of power and
            the birth of the Panchayat era.
          </p>
          <Table
            data={[
              {
                date: "February–March 1951",
                event:
                  "Tanka Prasad Acharya released and pardoned; Interim Government of Nepal Act adopted.",
                outcome:
                  "First steps toward constitutional rule after the revolution.",
              },
              {
                date: "April 1951",
                event:
                  "King Tribhuvan promulgated the Interim Government of Nepal Act of 1951.",
                outcome: "Established framework for transitional governance.",
              },
              {
                date: "November 1951",
                event:
                  "Matrika Prasad Koirala of Nepali Congress sworn in as prime minister after Rana-led coalition collapsed.",
                outcome: "First fully non-Rana government.",
              },
              {
                date: "1953–1955",
                event:
                  "Repeated cabinet changes and political instability; Matrika Prasad Koirala served multiple terms.",
                outcome: "King assumed greater direct control at times.",
              },
              {
                date: "March 13, 1955",
                event:
                  "King Tribhuvan died; Crown Prince Mahendra ascended the throne.",
                outcome: "Shift in royal leadership amid ongoing instability.",
              },
              {
                date: "February 18–April 3, 1959",
                event:
                  "Nepal's first general parliamentary elections held under new constitution.",
                outcome:
                  "Nepali Congress won landslide (74 of 109 seats); Bishweshwar Prasad Koirala became prime minister.",
              },
              {
                date: "December 15, 1960",
                event:
                  "King Mahendra staged royal coup: dismissed elected government, arrested leaders, suspended constitution.",
                outcome:
                  "End of multi-party democracy; political parties banned.",
              },
              {
                date: "December 16, 1962",
                event: "King Mahendra promulgated new constitution.",
                outcome:
                  "Introduced partyless Panchayat system with indirect elections.",
              },
              {
                date: "April 13, 1963",
                event:
                  "State of emergency lifted; Panchayat system formally established.",
                outcome:
                  "King appointed Tulsi Giri as prime minister; era of direct royal rule began.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "national"],
      involved: [
        {
          name: "Matrika Prasad Koirala",
          role: "First Post-Revolution Prime Minister",
        },
        {
          name: "King Tribhuvan Bir Bikram Shah",
          role: "Transitional Monarch",
        },
        {
          name: "King Mahendra Bir Bikram Shah",
          role: "Architect of Panchayat System",
        },
        {
          name: "Bishweshwar Prasad Koirala",
          role: "First Elected Prime Minister",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/History_of_Nepal#Democratic_reform_and_royal_takeover",
          label: "Nepal History: 1951–1960",
        },
        {
          url: "https://en.wikipedia.org/wiki/1960_Nepalese_coup_d%27%C3%A9tat",
          label: "1960 Royal Coup",
        },
        {
          url: "https://en.wikipedia.org/wiki/Panchayat_(Nepal)",
          label: "Panchayat System",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/60fc163c.avif",
          sourceUrl:
            "https://l450v.alamy.com/450v/2cx5epr/1951-meeting-of-king-tribhuwan-nepali-congress-leader-later-pm-matrika-prasad-koirala-and-other-congress-leaders-2cx5epr.jpg",
          alt: "Matrika Prasad Koirala with King Tribhuvan in 1951",
          caption:
            "Matrika Prasad Koirala, Nepal's first post-revolution prime minister, meeting King Tribhuvan.",
        },
        {
          src: "/timelines/nepal-political-history/eba4ede5.avif",
          sourceUrl:
            "https://english.pardafas.com/wp-content/uploads/2022/12/BP-Koirala.jpg",
          alt: "Portrait of Bishweshwar Prasad Koirala",
          caption: "B.P. Koirala, leader of the first elected government.",
        },
        {
          src: "/timelines/nepal-political-history/90fd1b23.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nepal-1959-Sc120-King_Mahendra_Opening_Parliament.jpg/1024px-Nepal-1959-Sc120-King_Mahendra_Opening_Parliament.jpg",
          alt: "King Mahendra opening parliament in 1959",
          caption:
            "King Mahendra addressing the newly elected parliament shortly before the coup.",
        },
        {
          src: "/timelines/nepal-political-history/2de6b1b8.avif",
          sourceUrl:
            "https://www.fineartstorehouse.com/p/629/king-mahendra-nepal-39063391.jpg.webp",
          alt: "Portrait of King Mahendra",
          caption:
            "King Mahendra, who dissolved democracy and established the Panchayat system.",
        },
        {
          src: "/timelines/nepal-political-history/605d93dc.avif",
          sourceUrl:
            "http://english.pardafas.com/uploads/photos/History/nepal-1-election.jpg",
          alt: "Nepal's first general election in 1959",
          caption:
            "Voters during Nepal's historic first parliamentary elections.",
        },
      ],
    },
    {
      id: "5",
      date: "1963-04-14",
      endDate: "1990-02-17",
      title: "Post-Crisis Phase",
      description: (
        <>
          <p>
            For nearly three decades, King Mahendra and later King Birendra
            ruled through the partyless Panchayat system, suppressing opposition
            while pursuing modernization and foreign aid, until growing unrest
            set the stage for the 1990 democracy movement.
          </p>
          <Table
            data={[
              {
                date: "April 14, 1963",
                event:
                  "The 125-member National Panchayat was inaugurated by King Mahendra.",
                outcome: "Formal launch of the partyless Panchayat system.",
              },
              {
                date: "December 23, 1963",
                event:
                  "King Mahendra appointed Surya Bahadur Thapa as prime minister.",
                outcome: "",
              },
              {
                date: "January 31, 1972",
                event:
                  "King Mahendra died; Prince Birendra Bir Bikram Shah ascended the throne.",
                outcome: "New monarch continued the Panchayat system.",
              },
              {
                date: "February 24, 1975",
                event: "Coronation of King Birendra in Kathmandu.",
                outcome: "Symbolic reinforcement of royal authority.",
              },
              {
                date: "1979–1980",
                event:
                  "Student protests and calls for reform erupted after the execution of former Pakistani PM Zulfikar Ali Bhutto sparked solidarity demonstrations.",
                outcome:
                  "King Birendra announced a national referendum to choose between multiparty system and reformed Panchayat.",
              },
              {
                date: "May 2, 1980",
                event: "National referendum held.",
                outcome:
                  "Official results showed 54.99% in favor of reformed Panchayat system; opposition alleged widespread rigging.",
              },
              {
                date: "1981–1986",
                event:
                  "Periodic indirect elections to the National Panchayat; prime ministers rotated among loyalists like Surya Bahadur Thapa, Lokendra Bahadur Chand, and Marich Man Singh Shrestha.",
                outcome:
                  "Political parties remained banned; underground opposition grew.",
              },
              {
                date: "1983–1989",
                event:
                  "Nepali Congress and leftist parties coordinated civil disobedience campaigns from exile in India.",
                outcome: "Increased pressure on the regime.",
              },
              {
                date: "Late 1989",
                event:
                  "Trade and transit dispute with India led to severe economic blockade.",
                outcome:
                  "Shortages fueled public anger against the government.",
              },
              {
                date: "February 18, 1990",
                event:
                  "The Movement for the Restoration of Democracy (Jana Andolan) was formally launched by a coalition of banned parties.",
                outcome:
                  "Marked the beginning of open mass protests against Panchayat rule.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "national"],
      involved: [
        {
          name: "King Mahendra Bir Bikram Shah",
          role: "Founder of Panchayat System",
        },
        {
          name: "King Birendra Bir Bikram Shah",
          role: "Panchayat-Era Monarch",
        },
        { name: "Surya Bahadur Thapa", role: "Recurring Prime Minister" },
        { name: "Ganesh Man Singh", role: "Underground Democracy Leader" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Panchayat_(Nepal)",
          label: "Panchayat System in Nepal",
        },
        {
          url: "https://en.wikipedia.org/wiki/1980_Nepalese_governmental_referendum",
          label: "1980 Referendum",
        },
        {
          url: "https://en.wikipedia.org/wiki/Jana_Andolan_I",
          label: "1990 People's Movement",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/King_Birendra_%281975%29.jpg/800px-King_Birendra_%281975%29.jpg",
          alt: "King Birendra in 1975",
          caption:
            "King Birendra shortly after his coronation, under whose reign the Panchayat system continued.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/King_Birendra_coronation.jpg/800px-King_Birendra_coronation.jpg",
          alt: "Coronation of King Birendra",
          caption: "Grand coronation ceremony of King Birendra in 1975.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nepal_referendum_1980.jpg/800px-Nepal_referendum_1980.jpg",
          alt: "1980 referendum ballot",
          caption: "Ballot paper from the controversial 1980 referendum.",
        },
        {
          sourceUrl:
            "https://nepalitimes.com/wp-content/uploads/2020/02/Ganesh-Man-Singh.jpg",
          alt: "Ganesh Man Singh",
          caption:
            "Ganesh Man Singh, supreme leader of the 1990 democracy movement.",
        },
        {
          sourceUrl:
            "https://assets.constitutionnet.org/uploads/2019/04/nepal-1962-constitution-cover.jpg",
          alt: "1962 Panchayat Constitution",
          caption:
            "Cover of the 1962 Constitution that established the partyless Panchayat system.",
        },
      ],
    },
    {
      id: "6",
      date: "1990-02-18",
      endDate: "1996-02-12",
      title: "Crisis Phase",
      description: (
        <>
          <p>
            Mass protests known as the People's Movement (Jana Andolan I) swept
            Nepal in 1990, forcing King Birendra to end absolute rule and
            restore multiparty democracy after decades of Panchayat suppression.
          </p>
          <Table
            data={[
              {
                date: "Late 1989–Early 1990",
                event:
                  "Economic crisis worsened by India's trade blockade; Nepali Congress and United Left Front formed alliance to launch pro-democracy campaign.",
                outcome: "",
              },
              {
                date: "February 18, 1990",
                event:
                  "Jana Andolan I officially launched with nationwide protests and strikes on Democracy Day.",
                outcome:
                  "Police clashes left several dead; movement gained momentum.",
              },
              {
                date: "February–March 1990",
                event:
                  "Escalating demonstrations in Kathmandu and across Nepal; arrests of opposition leaders.",
                outcome: "Public participation grew despite repression.",
              },
              {
                date: "April 6, 1990",
                event:
                  "Security forces fired on massive crowd marching toward palace in Kathmandu.",
                outcome:
                  "Dozens killed; marked turning point that intensified pressure on regime.",
              },
              {
                date: "April 8, 1990",
                event:
                  "King Birendra announced lifting of 30-year ban on political parties.",
                outcome: "Protests suspended; political prisoners released.",
              },
              {
                date: "April 19, 1990",
                event:
                  "Interim government sworn in under Krishna Prasad Bhattarai.",
                outcome: "Panchayat system effectively dismantled.",
              },
              {
                date: "November 9, 1990",
                event: "New Constitution of the Kingdom of Nepal promulgated.",
                outcome:
                  "Established constitutional monarchy with multiparty democracy and fundamental rights.",
              },
              {
                date: "May 12, 1991",
                event: "First multiparty parliamentary elections held.",
                outcome:
                  "Nepali Congress won majority; Girija Prasad Koirala became prime minister.",
              },
              {
                date: "1991–1996",
                event:
                  "Series of unstable coalition governments; growing dissatisfaction with corruption and delivery.",
                outcome: "Set stage for Maoist insurgency.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "national", "constitutional", "social"],
      involved: [
        {
          name: "King Birendra Bir Bikram Shah",
          role: "Monarch Who Accepted Reforms",
        },
        { name: "Ganesh Man Singh", role: "Supreme Leader of the Movement" },
        { name: "Girija Prasad Koirala", role: "Nepali Congress Leader" },
        { name: "Krishna Prasad Bhattarai", role: "Interim Prime Minister" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1990_Nepalese_revolution",
          label: "1990 Nepalese Revolution",
        },
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal_1990",
          label: "1990 Constitution of Nepal",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/235e6e36.avif",
          sourceUrl:
            "https://globalvoices.org/wp-content/uploads/2025/10/1990_Nepalese_revolution_Kathmandu-1200x675.jpg",
          alt: "Mass protests in Kathmandu during Jana Andolan 1990",
          caption:
            "Crowds filling the streets of Kathmandu demanding democracy in spring 1990.",
        },
        {
          src: "/timelines/nepal-political-history/b17ec298.avif",
          sourceUrl:
            "https://ichef.bbci.co.uk/images/ic/480x270/p08hzx40.jpg.webp",
          alt: "Protesters during the 1990 People's Movement",
          caption:
            "Scenes from the historic Jana Andolan that toppled the Panchayat regime.",
        },
        {
          src: "/timelines/nepal-political-history/6c3185ed.avif",
          sourceUrl:
            "https://assets-cdn.kathmandupost.com/uploads/source/news/2018/miscellaneous/Girija-prasad-koirala-19022018113342.jpg",
          alt: "Girija Prasad Koirala in 1990",
          caption:
            "Girija Prasad Koirala, key figure in the democracy movement and later prime minister.",
        },
        {
          src: "/timelines/nepal-political-history/7f52cd52.avif",
          sourceUrl:
            "https://aawaajnews.com/wp-content/uploads/2022/03/A-meeting-with-Ganesh-Man-Singh-web.jpg",
          alt: "Ganesh Man Singh addressing supporters",
          caption:
            "Ganesh Man Singh, revered as the father of Nepali democracy.",
        },
        {
          sourceUrl:
            "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/8/1428506418609/79728c04-1572-4d89-82ff-a4eac98e2521-620x372.jpeg",
          alt: "King Birendra in 1990",
          caption:
            "King Birendra announcing the restoration of multiparty democracy.",
        },
      ],
    },
    {
      id: "7",
      date: "1996-02-13",
      endDate: "2006-11-21",
      title: "Conflict Phase",
      description: (
        <>
          <p>
            Nepal plunged into a brutal decade-long civil war as Maoist
            insurgents waged a guerrilla campaign against the monarchy and
            inequality, claiming over 17,000 lives before a hard-won peace deal
            reshaped the nation.
          </p>
          <Table
            data={[
              {
                date: "February 13, 1996",
                event:
                  "Maoist rebels, led by the Communist Party of Nepal (Maoist) under Prachanda, launched coordinated attacks on police posts in six districts, igniting the 'People's War' to overthrow the monarchy.",
                outcome:
                  "Marked the start of a guerrilla insurgency that would engulf rural Nepal and challenge the government's authority.",
              },
              {
                date: "November 23, 2001",
                event:
                  "Maoists ambushed and massacred 14 security personnel in Accham district, prompting the government to declare a state of emergency.",
                outcome:
                  "First major deployment of the Royal Nepal Army against the rebels, escalating the conflict from police operations to full-scale war.",
              },
              {
                date: "June 1, 2001",
                event:
                  "The royal massacre at Narayanhiti Palace left King Birendra and most of his family dead, with Crown Prince Dipendra briefly ascending before dying.",
                outcome:
                  "Gyanendra became king amid national shock, weakening the monarchy's legitimacy and fueling Maoist momentum.",
              },
              {
                date: "August 17, 2004",
                event:
                  "Royal Nepal Army killed 19 Maoist fighters and civilians in Doramba, Ramechhap district, during a fragile ceasefire.",
                outcome:
                  "Shattered peace talks, drawing international condemnation and highlighting human rights abuses on both sides.",
              },
              {
                date: "June 6, 2005",
                event:
                  "Maoists ambushed a passenger bus in Chitwan district, killing over 38 civilians in one of the war's deadliest attacks.",
                outcome:
                  "Drew widespread outrage and underscored the growing civilian toll, with more than 13,000 dead by war's end.",
              },
              {
                date: "November 22, 2005",
                event:
                  "Maoists and the Seven Party Alliance (SPA) signed a 12-point agreement, uniting against King Gyanendra's rule.",
                outcome:
                  "Paved the way for joint pro-democracy protests, shifting the conflict toward political revolution.",
              },
              {
                date: "April 24–May 25, 2006",
                event:
                  "Jana Andolan II saw millions protest against direct royal rule, with Maoists imposing a blockade on Kathmandu.",
                outcome:
                  "King Gyanendra reinstated parliament and relinquished absolute power, leading to an interim government.",
              },
              {
                date: "November 21, 2006",
                event:
                  "The Comprehensive Peace Accord was signed between Prime Minister Girija Prasad Koirala and Maoist leader Prachanda.",
                outcome:
                  "Formally ended the war; Maoist weapons placed under UN monitoring, rebels integrated into politics, setting stage for republicanism.",
              },
            ]}
          />
        </>
      ),
      tags: ["military", "political", "national", "social"],
      involved: [
        {
          name: "Pushpa Kamal Dahal (Prachanda)",
          role: "Maoist Supreme Commander",
        },
        {
          name: "King Gyanendra Bir Bikram Shah",
          role: "Monarch During Escalation",
        },
        {
          name: "Girija Prasad Koirala",
          role: "Prime Minister and Peace Broker",
        },
        { name: "Baburam Bhattarai", role: "Maoist Strategist and Negotiator" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Nepalese_Civil_War",
          label: "Nepalese Civil War Overview",
        },
        {
          url: "https://www.aljazeera.com/news/2008/4/8/timeline-of-nepals-civil-war-2",
          label: "Al Jazeera Timeline",
        },
        {
          url: "https://www.ohchr.org/en/documents/country-reports/nepal-conflict-report",
          label: "OHCHR Conflict Report",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Prachanda_in_2008.jpg/800px-Prachanda_in_2008.jpg",
          alt: "Pushpa Kamal Dahal (Prachanda)",
          caption:
            "Prachanda, the Maoist leader who orchestrated the People's War and later became prime minister.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/King_Gyanendra_in_2001.jpg/800px-King_Gyanendra_in_2001.jpg",
          alt: "King Gyanendra shortly after ascending the throne",
          caption:
            "King Gyanendra, whose direct rule intensified the conflict before the 2006 uprising.",
        },
        {
          sourceUrl:
            "https://www.aljazeera.com/mwp/2021/2/13/timeline-of-nepals-civil-war",
          alt: "Maoist rebels during the war",
          caption:
            "Guerrilla fighters of the Maoist People's Liberation Army in rural Nepal.",
        },
        {
          sourceUrl:
            "https://english.onlinekhabar.com/wp-content/uploads/2021/02/peace-accord.jpg",
          alt: "Signing of the Comprehensive Peace Accord",
          caption:
            "Prachanda and Girija Prasad Koirala shake hands after signing the 2006 peace deal.",
        },
        {
          sourceUrl:
            "https://www.nepalitimes.com/media/images/legacy-images/2006-04-28/jana-andolan-2.jpg",
          alt: "Protesters during Jana Andolan II",
          caption:
            "Mass demonstrations in Kathmandu that forced the king's surrender in 2006.",
        },
      ],
    },
    {
      id: "8",
      date: "2006-11-22",
      endDate: "2016-02-08",
      title: "Post-Conflict Phase",
      description: (
        <>
          <p>
            After the peace accord ended the civil war, Nepal transitioned to a
            republic, held landmark elections, and finally adopted a federal
            constitution amid delays, protests, and political instability.
          </p>
          <Table
            data={[
              {
                date: "November 22, 2006",
                event:
                  "Comprehensive Peace Accord signed between the government and Maoists.",
                outcome:
                  "Formally ended the decade-long civil war; Maoist fighters cantonned under UN supervision.",
              },
              {
                date: "January 2007",
                event:
                  "Interim Constitution promulgated; Maoists joined interim parliament.",
                outcome:
                  "Paved way for integration of former rebels into mainstream politics.",
              },
              {
                date: "April 10, 2008",
                event: "First Constituent Assembly elections held.",
                outcome:
                  "Maoists emerged as largest party; surprising shift in political landscape.",
              },
              {
                date: "May 28, 2008",
                event:
                  "Constituent Assembly declared Nepal a federal democratic republic.",
                outcome:
                  "Abolished 240-year-old monarchy; King Gyanendra left the palace.",
              },
              {
                date: "July 21, 2008",
                event: "Ram Baran Yadav elected as Nepal's first president.",
                outcome: "Marked transition to republican era.",
              },
              {
                date: "August 15, 2008",
                event:
                  "Pushpa Kamal Dahal (Prachanda) sworn in as prime minister.",
                outcome: "First Maoist-led government.",
              },
              {
                date: "2009–2012",
                event:
                  "Series of short-lived governments; Constituent Assembly failed to draft constitution.",
                outcome:
                  "Assembly dissolved in May 2012 without completing its mandate.",
              },
              {
                date: "November 19, 2013",
                event: "Second Constituent Assembly elections held.",
                outcome:
                  "Nepali Congress largest party; Maoists reduced to third.",
              },
              {
                date: "September 20, 2015",
                event: "New federal constitution promulgated.",
                outcome:
                  "Established Nepal as secular federal republic with seven provinces.",
              },
              {
                date: "August–February 2016",
                event:
                  "Madhesi protests and border blockade over constitutional provisions.",
                outcome:
                  "Over 50 deaths; fuel shortages nationwide; blockade lifted in February after partial concessions.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "national", "social"],
      involved: [
        {
          name: "Pushpa Kamal Dahal (Prachanda)",
          role: "Maoist Leader & Prime Minister",
        },
        {
          name: "Girija Prasad Koirala",
          role: "Prime Minister & Peace Negotiator",
        },
        { name: "Ram Baran Yadav", role: "First President" },
        { name: "Baburam Bhattarai", role: "Prime Minister" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Comprehensive_Peace_Accord",
          label: "Comprehensive Peace Accord",
        },
        {
          url: "https://en.wikipedia.org/wiki/2008_Nepalese_Constituent_Assembly_election",
          label: "2008 CA Election",
        },
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal_2015",
          label: "2015 Constitution",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/6c6ec2cb.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/Voters_line_up_during_first_Constituent_Election_2008.jpg",
          alt: "Voters queuing during 2008 Constituent Assembly election",
          caption:
            "Long lines of voters in Nepal's historic first CA election.",
        },
        {
          src: "/timelines/nepal-political-history/95342f83.avif",
          sourceUrl:
            "https://live-production.wcms.abc-cdn.net.au/2a0c90876ef0894206b6ee22366106a5?impolicy=wcms_crop_resize&cropH=472&cropW=840&xPos=0&yPos=0&width=862&height=485",
          alt: "Celebrations after Nepal declared republic in 2008",
          caption: "Joyous crowds mark the end of monarchy.",
        },
        {
          src: "/timelines/nepal-political-history/a3ea1184.avif",
          sourceUrl:
            "https://s.wsj.net/public/resources/images/BN-KL127_necon_M_20150923081909.jpg",
          alt: "Promulgation of Nepal's 2015 constitution",
          caption:
            "President Ram Baran Yadav signs the new constitution amid ceremony.",
        },
        {
          src: "/timelines/nepal-political-history/3f9a8e85.avif",
          sourceUrl:
            "https://www.aljazeera.com/wp-content/uploads/2015/09/0549dd3908b2409e89520211905ef271_18.jpeg?resize=1200%2C675",
          alt: "Madhesi protesters during 2015 unrest",
          caption:
            "Protests in the Terai region over federal boundaries and representation.",
        },
        {
          src: "/timelines/nepal-political-history/7f69b6fb.avif",
          sourceUrl:
            "https://rpcdn.ratopati.com/media/albums/president-ram-baran-yadav-e1438599545998_rvtXWI3UJ1.jpg",
          alt: "Portrait of Ram Baran Yadav",
          caption: "Ram Baran Yadav, Nepal's first president.",
        },
      ],
    },
    {
      id: "9",
      date: "2016-02-09",
      endDate: "2022-02-09",
      title: "Post-Crisis Phase",
      description: (
        <>
          <p>
            Nepal grappled with implementing its new federal constitution amid
            lingering Madhesi grievances, frequent government changes, economic
            challenges, and the COVID-19 pandemic, while holding key elections
            and ratifying international agreements.
          </p>
          <Table
            data={[
              {
                date: "February 2016",
                event:
                  "Madhesi groups ended the six-month border blockade protesting the new constitution.",
                outcome:
                  "Eased severe shortages of fuel and essentials; government lifted rationing.",
              },
              {
                date: "August 2016",
                event:
                  "Pushpa Kamal Dahal (Prachanda) elected prime minister for the second time.",
                outcome:
                  "Coalition government with Nepali Congress; focus on post-earthquake reconstruction.",
              },
              {
                date: "2017–2018",
                event:
                  "First federal, provincial, and local elections held under the new constitution.",
                outcome:
                  "Left alliance (UML and Maoist Centre) dominated; KP Sharma Oli became prime minister in February 2018.",
              },
              {
                date: "May 2018",
                event:
                  "CPN-UML and CPN (Maoist Centre) merged to form Nepal Communist Party (NCP).",
                outcome:
                  "Created a near two-thirds majority government under Oli.",
              },
              {
                date: "2020–2021",
                event:
                  "COVID-19 pandemic hit Nepal; Oli dissolved parliament twice amid internal party disputes.",
                outcome:
                  "Supreme Court reinstated parliament both times; NCP dissolved in March 2021, reviving UML and Maoist Centre.",
              },
              {
                date: "July 2021",
                event:
                  "Sher Bahadur Deuba sworn in as prime minister for the fifth time.",
                outcome:
                  "Opposition coalition government; managed pandemic response.",
              },
              {
                date: "February 2022",
                event:
                  "Parliament ratified the US Millennium Challenge Corporation (MCC) compact amid protests.",
                outcome:
                  "Secured $500 million grant for infrastructure; sparked debates over foreign influence.",
              },
              {
                date: "May–November 2022",
                event: "Local and general elections held.",
                outcome:
                  "No clear majority; five-party coalition formed, leading to Pushpa Kamal Dahal as prime minister in December.",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "economic", "national"],
      involved: [
        { name: "KP Sharma Oli", role: "Prime Minister (2018–2021)" },
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Prime Minister" },
        { name: "Sher Bahadur Deuba", role: "Prime Minister (2021–2022)" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Politics_of_Nepal",
          label: "Politics of Nepal",
        },
        {
          url: "https://en.wikipedia.org/wiki/2017_Nepalese_general_election",
          label: "2017 Elections",
        },
        {
          url: "https://en.wikipedia.org/wiki/Millennium_Challenge_Compact_(Nepal)",
          label: "MCC Compact Ratification",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/KP_Sharma_Oli_in_2019.jpg/800px-KP_Sharma_Oli_in_2019.jpg",
          alt: "KP Sharma Oli",
          caption: "KP Sharma Oli during his tenure as prime minister.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Prachanda_in_2008.jpg/800px-Prachanda_in_2008.jpg",
          alt: "Pushpa Kamal Dahal (Prachanda)",
          caption: "Prachanda, who returned as prime minister multiple times.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sher_Bahadur_Deuba_%282021%29.jpg/800px-Sher_Bahadur_Deuba_%282021%29.jpg",
          alt: "Sher Bahadur Deuba",
          caption: "Sher Bahadur Deuba addressing parliament.",
        },
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nepal_election_2017.jpg/800px-Nepal_election_2017.jpg",
          alt: "Voters in 2017 elections",
          caption: "Nepalis voting in the historic federal elections.",
        },
        {
          sourceUrl:
            "https://www.thehindu.com/news/international/2f0b2d0e-0e0e-11ed-8b0a-0e0e0e0e0e0e/article657.jpg",
          alt: "MCC protests in Kathmandu",
          caption: "Protests against the MCC compact ratification in 2022.",
        },
      ],
    },
  ],
};
