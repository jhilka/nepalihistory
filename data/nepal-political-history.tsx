import type { Timeline } from "@/types/timeline";
import React from "react";

const NO_OUTCOME_PLACEHOLDER = "";

const Table = ({
  data,
}: {
  data: { date: string; event: string; outcome: string }[];
}) => (
  <table>
    {/* <thead>
      <tr>
        <th>Event</th>
        <th>Outcome</th>
      </tr>
    </thead> */}
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
            <td
              style={
                row.outcome
                  ? {
                      borderBottom: "none",
                      paddingBottom: 0,
                    }
                  : {}
              }
            >
              <strong>Event: </strong>
            </td>
            <td
              style={
                row.outcome
                  ? {
                      borderBottom: "none",
                      paddingBottom: 0,
                    }
                  : {}
              }
            >
              {row.event}
            </td>
          </tr>
          {row.outcome && (
            <tr>
              <td style={{ paddingTop: 5 }}>
                <strong>Outcome: </strong>
              </td>
              <td style={{ paddingTop: 5 }}>
                {row.outcome || NO_OUTCOME_PLACEHOLDER}
              </td>
            </tr>
          )}
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
                  "Prime Minister Chandra Shumsher Junga Bahadur Rana appealed for the emancipation of slaves and the abolition of slavery in Nepal, which at the time had nearly 60,000 slaves",
                outcome:
                  "The Nepalese government established an anti-slavery office, which provided compensation to slave owners and land to emancipated slaves. The process of emancipating slaves and abolishing slavery in Nepal was completed in August 1926",
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
                  "Bhim Shumsher Jang Bahadur Rana was installed as hereditary prime minister in a ceremony",
                outcome: "",
              },
              {
                date: "September 1, 1932",
                event: "Prime Minister Bhim Shumsher died.",
                outcome: "",
              },
              {
                date: "September 1, 1932",
                event:
                  "Juddha Shumsher Jang Bahadur Rana became the new prime minister.",
                outcome: "",
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
                  "Nepal People’s Council (Nepali Praja Parishad - NPP) was established by Dasharath Chand and Tanka Prasad Acharya in opposition to the Nepalese government controlled by the Rana family",
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
          label: "Nepal-Britain Treaty of 1923",
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
                  "Several individuals linked to the NPP, including Dasharath Chand and Tanka Prasad Acharya, were arrested by government police for planning to assassinate government officials",
                outcome:
                  "Four individuals linked to the NPP - Ganga Lal Shrestha, Dasharath Chand, Dharma Bhakta Mathema, and Shukra Raj Shastri - were executed by the Nepalese government on January 24-28, 1941. The NPP was dissolved by the Nepalese government",
              },
              {
                date: "November 29, 1945",
                event:
                  "Prime Minister Juddha Shumsher abdicated in favor of his nephew Padma Shumsher Jang Bahadur Rana, who was considered a progressive member of the Rana family.",
                outcome:
                  "The All-India Nepali National Congress was established in Varanasi, India on October 31, 1946.",
              },
              {
                date: "January 24-25, 1947",
                event:
                  "The Nepali National Congress (Nepali Rastriya Congress - NRC) was formally established with the imprisoned Tanka Prasad Acharya elected as president and Bisheshwar Prashad Koirala elected as acting-president of the NRC.",
                outcome: "",
              },
              {
                date: "March 4, 1947",
                event:
                  "Girija Prasad Koirala led a jute mill workers’ strike against a company in Biratnagar in Morang district. Bisheshwar Prashad Koirala and the NRC joined in support of the jute mill workers’ strike in Biratnagar in Morang district.",
                outcome: "",
              },
              {
                date: "March 13, 1947",
                event:
                  "The NRC launched nationwide demonstrations against the Nepalese government.",
                outcome: "",
              },
              {
                date: "March 24, 1947",
                event:
                  "Government troops suppressed the jute mill workers’ strike and arrested the leaders of the strike, including Girija Prasad Koirala and Bisheshwar Prashad Koirala.",
                outcome: "",
              },
              {
                date: "April 9-10, 1947",
                event: "The NRC held a party conference in Jogbani, India.",
                outcome: "",
              },
              {
                date: "April 13, 1947",
                event:
                  "NRC launched a non-violent resistance movement (Satyagraha) against the Nepalese government.",
                outcome: "",
              },
              {
                date: "April 14, 1947",
                event:
                  "Supporters of the NRC demonstrated against the Nepalese government in Kathmandu.",
                outcome:
                  "Prime Minister Padma Shumsher granted amnesty to the leaders of the demonstrators who were arrested by government police.",
              },
              {
                date: "April 21, 1947",
                event:
                  "The United States government recognized the independence of the Kingdom of Nepal and established diplomatic relations with the Nepalese government.",
                outcome: "",
              },
              {
                date: "May 16, 1947",
                event:
                  "King Tribhuvan Bir Bikram Shah proposed reforms of the Nepalese political system, including an independent judiciary.",
                outcome: "",
              },
              {
                date: "June 1947",
                event:
                  "Students organized the Jayatu Sanskritam movement in support of educational and social equality in Kathmandu.",
                outcome:
                  "More than 40 students were arrested by government police and deported from Nepal.",
              },
              {
                date: "August 1947",
                event:
                  "Girija Prasad Koirala and Bisheshwar Prashad Koirala were released from prison.",
                outcome: "",
              },
              {
                date: "August 1947",
                event:
                  "Prime Minister Padma Shumsher requested assistance from Prime Minister Jawaharlal Nehru of India in the drafting of a constitution for Nepal.",
                outcome: "",
              },
              {
                date: "January 16, 1948",
                event:
                  "Prime Minister Padma Shumsher promulgated a new constitution, the Government of Nepal Act of 1948, which went into effect on April 13, 1948.",
                outcome:
                  "The new constitution vested executive authority in the prime minister (Maharaja), advised by a Council of Ministers, and created a bicameral legislature.",
              },
              {
                date: "April 30, 1948",
                event:
                  "Prime Minister Padma Shumsher resigned after conservative members of the Rana family opposed the new constitution and went into exile to Calcutta, India.",
                outcome: "Mohan Shamsher became prime minister.",
              },
              {
                date: "May 1, 1948",
                event:
                  "Prime Minister Mohan Shamsher suspended the constitution and banned the NRC.",
                outcome: "",
              },
              {
                date: "August 4, 1948",
                event:
                  "The Nepal Democratic Congress (Nepal Prajatantrik Congress - NPC) was established by progressive members of the Rana family, including Subarna Shamsher, in Calcutta, India.",
                outcome:
                  "Mohendra Vikram Shah was elected president of the NPC and Surya Prasad Upadhya was elected General-Secretary of the NPC.",
              },
              {
                date: "November 1948",
                event:
                  "Bisheshwar Prashad Koirala, leader of the NRC, was arrested in Kathmandu.",
                outcome: "",
              },
              {
                date: "March 1949",
                event:
                  "Matrika Prasad Koirala was elected president of the NRC meeting in Calcutta, India.",
                outcome: "",
              },
              {
                date: "April 22, 1949",
                event:
                  "The Communist Party of Nepal (CPN) was established by Pushpa Lal Shrestha and other Nepalese in Calcutta.",
                outcome: "",
              },
              {
                date: "May 1949",
                event: "Bisheshwar Prashad Koirala was released from prison.",
                outcome: "",
              },
              {
                date: "April 10, 1950",
                event:
                  "The NRC and NPC merged to form the Nepali Congress (NC).",
                outcome:
                  "Matrika Prasad Koirala was elected president of the NC and Mohendra Vikram Shah was elected General-Secretary of the NC.",
              },
              {
                date: "July 31, 1950",
                event:
                  "Representatives of the governments of Nepal and India signed the Nepal-India Treaty of Peace and Friendship.",
                outcome: "",
              },
              {
                date: "September 22, 1950",
                event: "The Nepal parliament convened in Kathmandu.",
                outcome: "",
              },
              {
                date: "September 24, 1950",
                event:
                  "The Nepalese government uncovered a plot by NC supporters to assassinate Prime Minister Mohan Shamsher, resulting in arrests and imprisonment.",
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
                  "The Nepalese government formally deposed King Tribhuvan and proclaimed three-year-old Prince Gyanendra Bir Bikram Shah as the new King of Nepal.",
                outcome: "",
              },
              {
                date: "November 10, 1950",
                event:
                  "King Tribhuvan and most of his family were flown on Indian military aircraft to New Delhi.",
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
                date: "November 11-12, 1950",
                event:
                  "The militant wing of the NC, known as the Liberation Army (Mukti Sena), commanded by Major-General Subarna Shamsher attacked and captured Birgunj in Parsa district.",
                outcome:
                  "The NC established a provisional government headed by Tej Bahadur Amatya in Birgunj in Parsa district. The Burmese government provided military assistance (weapons and ammunition) to the NC prior to the outbreak of military hostilities, and Sheikh Mohammed Abdullah of Kashmir provided military assistance (weapons and ammunition) during the conflict.",
              },
              {
                date: "November 12, 1950",
                event: "NC rebels captured Udaypur Gadhi.",
                outcome: "",
              },
              {
                date: "November 13, 1950",
                event:
                  "NC rebels commanded by Kunwar Indrajit Singh attacked Bhairahawa in Rupandehi district resulting in the deaths of four rebels.",
                outcome: "",
              },
              {
                date: "November 15, 1950",
                event:
                  "NC rebels attacked government troops in Bhairahawa in Rupandehi district resulting in the deaths of 12 rebels.",
                outcome: "",
              },
              {
                date: "November 16, 1950",
                event: "NC rebels captured Rangeli in Morang district.",
                outcome: "",
              },
              {
                date: "November 17, 1950",
                event:
                  "The leader of the NC appealed for Indian intervention in the conflict against the Nepalese government.",
                outcome: "",
              },
              {
                date: "November 19, 1950",
                event:
                  "NC rebels clashed with government troops in Jhapa and captured Haraicha in Morang district.",
                outcome: "",
              },
              {
                date: "November 19, 1950",
                event:
                  "Government police fired on NC supporters in Gaur in Rautahat district, resulting in the deaths of 12 individuals.",
                outcome: "",
              },
              {
                date: "November 20, 1950",
                event:
                  "For the second time in a week, NC rebels commanded by Kunwar Indrajit Singh attacked Bhairahawa in Rupandehi district.",
                outcome: "",
              },
              {
                date: "November 20, 1950",
                event:
                  "Government troops commanded by Raj Shamsher recaptured Birgunj, resulting in the deaths of some 20 rebels.",
                outcome: "",
              },
              {
                date: "November 27, 1950",
                event:
                  "Representatives of the Indian government held talks with representatives of the Nepalese government.",
                outcome: "",
              },
              {
                date: "December 8, 1950",
                event:
                  "Indian government indicated that it would not recognize Prince Gyanendra as King of Nepal.",
                outcome: "",
              },
              {
                date: "December 10-11, 1950",
                event: "NC rebels captured Dingla in Bhojpur district.",
                outcome: "",
              },
              {
                date: "December 11, 1950",
                event:
                  "NC rebels attacked government troops in Biratnagar in Morang district.",
                outcome: "",
              },
              {
                date: "December 23, 1950",
                event: "NC rebels captured Biratnagar in Morang district.",
                outcome:
                  "Some 22 government soldiers were killed during the attack.",
              },
              {
                date: "December 24, 1950",
                event:
                  "The NC established a provisional government headed by Keshav Prasad Koirala in Biratnagar in Morang district.",
                outcome: "",
              },
              {
                date: "1951",
                event:
                  "Prime Minister Jawaharlal Nehru of India encouraged the Nepalese government to enact political reforms and to allow King Tribhuvan to return to Nepal. The Nepal Nationalist Gorkha Council (Nepal Rashtrabadi Gorkha Parishad – NRGP) was established by members of the ruling Rana family.",
                outcome: "",
              },
              {
                date: "January 3, 1951",
                event:
                  "Government troops commanded by Krishna Bahadur clashed with NC rebels near Lauki, resulting in the deaths of 16 government soldiers.",
                outcome: "",
              },
              {
                date: "January 8, 1951",
                event:
                  "Nepalese government announced that King Tribhuvan would be restored to the throne of the Kingdom of Nepal as a constitutional monarch and that a new cabinet would be created by Prime Minister Mohan Shamsher.",
                outcome: "",
              },
              {
                date: "January 8, 1951",
                event:
                  "An amnesty for political prisoners and NC rebels who agreed to disarm was announced.",
                outcome: "",
              },
              {
                date: "January 10, 1951",
                event: "NC rebels captured Gorkha in Gorkha district.",
                outcome: "",
              },
              {
                date: "January 10, 1951",
                event:
                  "Prime Minister Jawaharlal Nehru of India appealed to the NC for a cessation of military hostilities.",
                outcome: "",
              },
              {
                date: "January 14, 1951",
                event:
                  "Government police fired on NC supporters in Bandipur, resulting in the deaths of six individuals.",
                outcome: "",
              },
              {
                date: "January 16, 1951",
                event:
                  "Matrika Prasad Koirala, leader of the NC, called for a cessation of military hostilities while negotiations continued in New Delhi, India. Some rebels led by Ram Prasad Rai and Kunwar Indrajit Singh continued the armed rebellion in western Nepal.",
                outcome: "",
              },
              {
                date: "February 12, 1951",
                event:
                  "The Indian government mediated the signing of the Delhi Accord by King Tribhuvan, representatives of the Nepalese government, and the NC.",
                outcome: "",
              },
              {
                date: "February 15, 1951",
                event:
                  "The agreement called for the restoration of King Tribhuvan, a democratically-elected constituent assembly within two years, an interim coalition government, and the release of political prisoners.",
                outcome: "King Tribhuvan returned to Nepal.",
              },
              {
                date: "February 18, 1951",
                event:
                  "King Tribhuvan issued a proclamation establishing a ten-member Council of Ministers headed by Prime Minister Mohan Shamsher. The Council consisted of five representatives of the NC and five representatives of the Rana family.",
                outcome: "",
              },
              {
                date: "February 19, 1951",
                event:
                  "Rebels led by Kunwar Indrajit Singh attacked government facilities in Bhairahawa in Rupandehi district, resulting in the deaths of nine rebels and four government soldiers.",
                outcome: "",
              },
              {
                date: "February 21, 1951",
                event:
                  "Indian government troops intervened in support of the Nepalese government, and Kunwar Indrajit Singh was captured by Nepalese and Indian troops.",
                outcome: "",
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
                date: "February 1951",
                event:
                  "Tanka Prasad Acharya, leader of the NC, was released from prison and pardoned by King Tribhuvan",
                outcome: "",
              },
              {
                date: "March 30, 1951",
                event:
                  "Council of Ministers adopted the Interim Government of Nepal Act of 1951.",
                outcome: "",
              },
              {
                date: "April 9, 1951",
                event:
                  "The Brave Gorkha Organization (Vir Gorkha Dal – VGD) led by Randhir Subba and Bharat Shamsher rebelled against the government in Kathmandu.",
                outcome: "",
              },
              {
                date: "April 11, 1951",
                event:
                  "The government ordered the arrest of Bharat Shamsher and other members of the VGD and Bharat Shamsher surrendered to government police the next day.",
                outcome: "",
              },
              {
                date: "April 11, 1951",
                event:
                  "King Tribhuvan promulgated an interim constitution, Interim Government of Nepal Act of 1951.",
                outcome: "",
              },
              {
                date: "April 12, 1951",
                event:
                  "Members of the VGD launched attacks in Kathmandu, resulting in the deaths of two individuals.",
                outcome: "",
              },
              {
                date: "April 15, 1951",
                event: "The government formally banned the VGD",
                outcome: "",
              },
              {
                date: "April 16, 1951",
                event:
                  "King Tribhuvan stripped Prime Minister Mohan Shamsher of his position as supreme commander of the military.",
                outcome: "",
              },
              {
                date: "May 8-16, 1951",
                event:
                  "Prime Minister Jawaharlal Nehru of India mediated negotiations between the parties in New Delhi and the parties agreed to established a 40-member Advisory Assembly.",
                outcome: "",
              },
              {
                date: "June 10, 1951",
                event:
                  "Prime Minister Mohan Shamsher formed a coalition government, including five members of the NC and five members of the Rana family.",
                outcome: "",
              },
              {
                date: "July 13, 1951",
                event:
                  "Government troops were deployed to Bhutwal district to suppress an uprising led by Kunwar Indrajit Singh, who had escaped from prison two days earlier.",
                outcome: "",
              },
              {
                date: "July 14, 1951",
                event:
                  "Nepalese government troops, along with Indian government troops, recaptured Bhairawa in Rupandehi district from rebels.",
                outcome: "",
              },
              {
                date: "August 10, 1951",
                event:
                  "Kunwar Indrajit Singh was captured by Nepalese and Indian troops in Syanja district.",
                outcome: "",
              },
              {
                date: "November 6, 1951",
                event:
                  "Government police fired on student demonstrators in Kathmandu.",
                outcome: "Death of Chinya Kaji",
              },
              {
                date: "November 11, 1951",
                event: "All five NC members of the government resigned",
                outcome: "",
              },
              {
                date: "November 12, 1951",
                event:
                  "Prime Minister Mohan Shamsher Rana submitted his resignation.",
                outcome: "",
              },
              {
                date: "November 16, 1951",
                event:
                  "Matrika Prasad Koirala of the NC was sworn in as prime minister",
                outcome: "",
              },
              {
                date: "December 14, 1951",
                event:
                  "The cabinet consisted of eight NC members and six independents. Former prime minister Mohan Shamsher went into self-imposed exile in India",
                outcome: "",
              },
              {
                date: "December 1951",
                event:
                  "The Nepal Peasant’s Union (Nepal Kisan Sangh – NKS) was established by Tulsi Lal Amatya",
                outcome: "",
              },
              {
                date: "January 23, 1952",
                event:
                  "The U.S. government provided economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "January 23-24, 1952",
                event:
                  "Government troops suppressed a mutiny by members of an auxiliary police force, known as the Protective Organization (Raksha Dal), in Kathmandu",
                outcome: "",
              },
              {
                date: "January 24, 1952",
                event:
                  "Kunwar Indrajit Singh and 32 of his supporters escaped from prison and fled to Tibet. King Tribhuvan declared a state-of-emergency.",
                outcome: "",
              },
              {
                date: "January 25, 1952",
                event: "Government banned the Communist Party of Nepal (CPN)",
                outcome: "",
              },
              {
                date: "February 28, 1952",
                event:
                  "King Tribhuvan requested military assistance from the Indian government in order to reorganize and modernize the Nepalese military. The Indian Military Mission (IMM), which consisted of nearly 200 military personnel, was established in Nepal.",
                outcome: "",
              },
              {
                date: "June 8, 1952",
                event:
                  "The NKS declared a revolt against landlords and demanded the redistribution of land to peasants. Government troops suppressed the NKS revolt.",
                outcome: "",
              },
              {
                date: "July 4, 1952",
                event:
                  "King Tribhuvan convened a 61-member Advisory Assembly (Nepal Salahkar Samiti) in Kathmandu",
                outcome:
                  "Krishna Prasad Bhattarai was elected speaker of the Advisory Assembly.",
              },
              {
                date: "July 25, 1952",
                event:
                  "Accused of violating party principles and acting against the constitution, Prime Minister Matrieka Prasad Koirala was expelled from the NC.",
                outcome: "",
              },
              {
                date: "August 9, 1952",
                event: "King Tribhuvan assumed control of the government.",
                outcome: "",
              },
              {
                date: "August 10, 1952",
                event:
                  "Prime Minister Matrieka Prasad Koirala submitted his resignation.",
                outcome: "",
              },
              {
                date: "August 13, 1952",
                event:
                  "King Tribhuvan accepted the prime minister’s resignation and announced the creation of a five member advisory council.",
                outcome: "",
              },
              {
                date: "September 4, 1952",
                event: "King Tribhuvan dissolved the Salahkaar Sabha.",
                outcome: "",
              },
              {
                date: "June 1953",
                event:
                  "Matrika Prasad Koirala and other dissidents from the NC formed the National Democratic Party (NDP).",
                outcome: "",
              },
              {
                date: "June 15, 1953",
                event:
                  "King Tribhuvan appointed Matrika Prasad Koirala of the NDP as prime minister.",
                outcome: "",
              },
              {
                date: "July 15, 1953",
                event:
                  "Bhim Datta Pant led a peasant uprising against the government in western Nepal. Peasants attacked the government police station in Billauri in western Nepal",
                outcome: "Deaths of two government policemen",
              },
              {
                date: "July 19, 1953",
                event:
                  "Prime Minister Matrika Prasad Koirala requested military assistance from the Indian government.",
                outcome: "",
              },
              {
                date: "August 1953",
                event:
                  "The peasant uprising led by Bhim Datta Pant was suppressed by Nepalese and Indian troops",
                outcome: "",
              },
              {
                date: "September 2, 1953",
                event: "Local elections were held in Kathmandu",
                outcome:
                  "Candidates of the banned CPN won some 50 percent of the vote",
              },
              {
                date: "April 13, 1954 - May 28, 1954",
                event:
                  "King Tribhuvan appointed a 112-member Advisory Assembly (Salahkaar Sabha), which convened in Kathmandu.",
                outcome: "",
              },
              {
                date: "October 3, 1954",
                event:
                  "King Tribhuvan departed for medical treatment in Switzerland.",
                outcome: "",
              },
              {
                date: "January 10, 1955",
                event:
                  "The NC, which refused to participate in the Advisory Assembly, launched a civil disobedience movement (Satyagraha).",
                outcome: "",
              },
              {
                date: "January 23, 1955",
                event:
                  "The NC ended its civil disobedience movement (Satyagraha)",
                outcome: "",
              },
              {
                date: "January 31, 1955",
                event:
                  "Prime Minister Matrika Prasad Koirala submitted his resignation",
                outcome:
                  "Royal Council of State refused to accept the resignation.",
              },
              {
                date: "February 18, 1955",
                event: "King Tribhuvan dismissed the Royal Council of State",
                outcome:
                  "Thus, delegated royal authority to Crown Prince Mahendra Bir Bikram.",
              },
              {
                date: "March 2, 1955",
                event:
                  "Crown Prince Mahendra accepted the resignation of Prime Minister Matrieka Prasad Koirala",
                outcome: "",
              },
              {
                date: "March 13, 1955",
                event:
                  "King Tribhuvan died in Zürich, Switzerland during treatment.",
                outcome: "",
              },
              {
                date: "March 14, 1955",
                event: "Crown Prince Mahendra became king.",
                outcome: "",
              },
              {
                date: "May 8, 1955",
                event:
                  "King Mahendra convened a political conference at the Narayanhiti palace.",
                outcome:
                  "The conference was boycotted by the NC, NPP, and NRC.",
              },
              {
                date: "July 10, 1955",
                event:
                  "King Mahendra dissolved the Advisory Assembly and took direct control of the government.",
                outcome: "",
              },
              {
                date: "August 1, 1955",
                event:
                  "The governments of Nepal and the People’s Republic of China formally established diplomatic relations.",
                outcome: "",
              },
              {
                date: "September 11, 1955",
                event:
                  "Former rebel leader, Kunwar Indrajit Singh, returned to Nepal from exile in China and was pardoned by King Mahendra.",
                outcome: "",
              },
              {
                date: "December 14, 1955",
                event:
                  "Nepal was formally admitted into the United Nations (UN).",
                outcome: "",
              },
              {
                date: "January 25, 1956",
                event: "The NC elected Subarna Shamsher as party president.",
                outcome: "",
              },
              {
                date: "January 27, 1956",
                event:
                  "Tanka Prasad Acharya of the NPP formed a government as prime minister",
                outcome: "",
              },
              {
                date: "May 2, 1956",
                event:
                  "The coronation ceremony for King Mahendra took place in Kathmandu.",
                outcome: "",
              },
              {
                date: "July 4, 1956",
                event:
                  "Nepal government police arrested the first of 17 individuals, including military officers, who would be accused of plotting to overthrow the government headed by Prime Minister Tanka Prasad Acharya.",
                outcome: "",
              },
              {
                date: "October 7, 1956",
                event:
                  "The Chinese government agreed to provide more than $12 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "November 29, 1956",
                event:
                  "A special tribunal sentenced 13 individuals to prison terms for plotting to overthrow the government headed by Prime Minister Tanka Prasad Acharya.",
                outcome: "",
              },
              {
                date: "May 1, 1957",
                event:
                  "U.S. government agreed to provide more than $4 million in development assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "May 23, 1957",
                event:
                  "Bisheshwar Prashad Koirala was elected as president of the NC.",
                outcome: "",
              },
              {
                date: "July 7, 1957",
                event:
                  "Prime Minister Tanka Prasad Acharya submitted his resignation to King Mahendra.",
                outcome: "",
              },
              {
                date: "July 14, 1957",
                event:
                  "King Mahendra dissolved the government headed by Prime Minister Tanka Prasad Acharya.",
                outcome: "",
              },
              {
                date: "July 26, 1957",
                event:
                  "Kunwar Indrajit Singh of the United Democracy Party (Samyukta Prajatantra Party – SPP) formed a government as prime minister",
                outcome: "",
              },
              {
                date: "August 8, 1957",
                event: "The NC, NPP, and NRC formed the Democratic Front (DF).",
                outcome: "",
              },
              {
                date: "September 16, 1957",
                event:
                  "Several opposition leaders, including NC leader Bisheshwar Prashad Koirala, NRC leader Dilli Raman Regmi, and NPP leader Bhadrakali Mishra, were arrested by government police in Janakpur in Dhanusa district.",
                outcome: "",
              },
              {
                date: "September 30, 1957",
                event:
                  "Nepalese government announced the postponement of the national elections which were scheduled for October 8, 1957.",
                outcome: "",
              },
              {
                date: "November 14, 1957",
                event:
                  "King Mahendra dismissed the government of Prime Minister Kunwar Indrajit Singh and assumed direct control of the government.",
                outcome: "",
              },
              {
                date: "December 7, 1957",
                event:
                  "The DF launched a civil disobedience campaign in protest of the postponement of the national elections.",
                outcome: "",
              },
              {
                date: "December 11, 1957",
                event:
                  "Government police clashed with demonstrators in Kathmandu",
                outcome: "Injuries to 29 government police officers.",
              },
              {
                date: "February 1, 1958",
                event:
                  "King Mahendra formed a government composed of representatives of the DF",
                outcome: "",
              },
              {
                date: "February 3, 1958",
                event:
                  "The U.S. government announced more than $4 million in economic assistance to the Nepalese government for the current fiscal year.",
                outcome: "",
              },
              {
                date: "February 4, 1958",
                event: "The DF ended its civil disobedience campaign.",
                outcome: "",
              },
              {
                date: "May 15, 1958",
                event:
                  "King Mahendra appointed Subarna Shamsher of the NC as prime minister of a coalition government",
                outcome: "",
              },
              {
                date: "May 31, 1958",
                event:
                  "Representatives of the U.S. and Nepalese governments signed an economic cooperation agreement worth more than $2 million, including funding for a gold mining project.",
                outcome: "",
              },
              {
                date: "June 23, 1958",
                event:
                  "The government of the Soviet Union agreed to provide economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "July 16, 1958",
                event:
                  "The Indian government replaced the IMM with the 42-personnel Indian Military Training and Advisory Group (IMTAG)",
                outcome: "",
              },
              {
                date: "February 12, 1959",
                event:
                  "King Mahendra proclaimed a new Nepalese constitution, which established a bicameral legislature consisting of a 109-member lower house (Pratinidhi Sabha) and a 36-member upper house (Maha Sabha).",
                outcome: "",
              },
              {
                date: "February 18 - April 3, 1959",
                event: "Parliamentary elections was held.",
                outcome:
                  "NC won 74 out of 109 seats in the House of Representatives. The NRGP won 19 seats in the House of Representatives.",
              },
              {
                date: "March 24, 1959",
                event:
                  "The government of the Soviet Union offered $3.5 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "April 24, 1959",
                event:
                  "Representatives of the governments of the Soviet Union and Nepal signed an economic assistance agreement in Kathmandu",
                outcome: "",
              },
              {
                date: "May 4, 1959",
                event: "Prime Minister Subarna Shamsher resigned",
                outcome:
                  "Bisheshwar Prashad Koirala of the NC formed a government as prime minister",
              },
              {
                date: "May 27, 1959",
                event:
                  "Bisheshwar Prashad Koirala of the NC formed a government as prime minister",
                outcome: "",
              },
              {
                date: "June 1, 1959",
                event:
                  "The UDP and other opposition political parties formed the National Democratic Front (NDF) in opposition to the government",
                outcome: "",
              },
              {
                date: "June 30, 1959",
                event: "The new Nepalese constitution went into effect",
                outcome: "",
              },
              {
                date: "January 28, 1960",
                event:
                  "Indian government agreed to provide more than $29 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "April 28, 1960",
                event:
                  "Representatives of the Nepalese and Chinese government signed the Sino-Nepalese Treaty of Peace and Friendship",
                outcome: "",
              },
              {
                date: "September 23, 1960",
                event:
                  "Government police suppressed a revolt in Bajhang district.",
                outcome: "Arrests of some 50 individuals.",
              },
              {
                date: "October 25, 1960",
                event:
                  "Supporters of Yogi Naraharinath (Balbir Singh Thapa) attacked the headquarters of Gorkha district, resulting in the deaths of seven individuals.",
                outcome: "",
              },
              {
                date: "October 29, 1960",
                event:
                  "Yogi Naraharinath was arrested by government police in Jumla district",
                outcome: "",
              },
              {
                date: "December 15, 1960",
                event:
                  "King Mahendra deposed Prime Minister Bishweshwar Prashad Koirala for corruption and misrule, dissolved the parliament, and declared a state-of-emergency",
                outcome:
                  "Bishweshwar Prashad Koirala and other NC leaders were arrested and imprisoned in Kathmandu.",
              },
              {
                date: "January 5, 1961",
                event: "King Mahendra banned political parties",
                outcome: "",
              },
              {
                date: "February 23, 1961",
                event:
                  "Government police clashed with pro-democracy demonstrators in Kathmandu.",
                outcome: "",
              },
              {
                date: "April 9, 1961",
                event:
                  "Nepalese government enacted the Petty States and Rulers (Rajya Rajauta) Act, which abolished Bhajang state and several other princely states (rajya).",
                outcome: "",
              },
              {
                date: "June 26, 1961",
                event:
                  "U.S. government agreed to provide more than $4 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "October 15, 1961",
                event:
                  "The Chinese government agreed to provide economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "December 1961",
                event:
                  "The NC launched a rebellion against the Nepalese government",
                outcome: "",
              },
              {
                date: "January 5 - 12, 1962",
                event:
                  "NC rebels attacked several government police stations in Bokhari district",
                outcome: "",
              },
              {
                date: "January 22, 1962",
                event:
                  "King Mahendra survived an attempted assassination in Janakpur",
                outcome: "",
              },
              {
                date: "February 6, 1962",
                event:
                  "The government of the Soviet Union agreed to provide more than $3.5 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "February 7 - 8, 1962",
                event:
                  "NC rebels captured Bharatpur and other towns in Chitwan district",
                outcome: "",
              },
              {
                date: "February 9 - 10, 1962",
                event:
                  "Nepal government troops recaptured the towns that NC rebels captured in Chitwan district.",
                outcome: "",
              },
              {
                date: "February 11 - 12, 1962",
                event:
                  "Government security forces clashed with NC rebels in Hetauda in Makawanpur district",
                outcome: "",
              },
              {
                date: "February 18 - May 20, 1962",
                event:
                  "Local council elections were held in Nepalese villages and towns",
                outcome: "",
              },
              {
                date: "February 22, 1962",
                event:
                  "Government police and NC rebels clashed in Koilabas in Dang district.",
                outcome: "Death of one militant.",
              },
              {
                date: "February 23, 1962",
                event: "NC rebels attacked a customs post in Birgunj district",
                outcome: "",
              },
              {
                date: "March 5, 1962",
                event:
                  "Government troops clashed with NC rebels in Changthapu in Panchthar district",
                outcome: "Deaths of six government soldiers.",
              },
              {
                date: "March 23-25, 1962",
                event:
                  "Government troops and NC rebels clashed in eastern Nepal",
                outcome: "Deaths of four rebels and one government soldier.",
              },
              {
                date: "April 13, 1962",
                event: "NC rebels captured Thori in Parsa district",
                outcome: "Deaths of two government soldiers.",
              },
              {
                date: "April 26, 1962",
                event:
                  "Indian government agreed to provide more than $2 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "May 5, 1962",
                event:
                  "Nepal government security forces clashed with NC rebels in Mahottari district.",
                outcome: "Deaths of four government security personnel.",
              },
              {
                date: "May 1962",
                event:
                  "NC rebels attacked a government police station in Chandraganj in Sarlahi district.",
                outcome: "Deaths of two rebels and one policeman.",
              },
              {
                date: "June 8, 1962",
                event:
                  "NC rebels attacked government police stations in Gauraha and Thori in Parsa district.",
                outcome: "Deaths of seven rebels.",
              },
              {
                date: "June 29, 1962",
                event:
                  "U.S. government agreed to provide $3.5 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "July 26, 1962",
                event:
                  "NC rebels attacked the government police station in the village of Pipra in Mahottari district",
                outcome: "Deaths of two policemen.",
              },
              {
                date: "Beginning on August 5, 1962",
                event:
                  "Government security forces and NC rebels clashed near the village of Thori in Parsa district for several days",
                outcome:
                  "Deaths of at least seven government security personnel.",
              },
              {
                date: "August 24, 1962",
                event:
                  "More than 60 NC leaders and supporters, including Subarna Shumsher and Bharat Shumsher, were sentenced to prison terms by a special tribunal for their involvement in the rebellion against the Nepalese government.",
                outcome: "",
              },
              {
                date: "August 27, 1962",
                event:
                  "NC rebels attacked a government police station in Bhagwanpur in Saptari district.",
                outcome: "Deaths of three policemen.",
              },
              {
                date: "August 30, 1962",
                event:
                  "NC rebels attacked a government military barracks in Mandi in Chitwan district.",
                outcome: "Deaths of several government soldiers",
              },
              {
                date: "September 27 - 28, 1962",
                event:
                  "Government troops and rebels led by Raja Ram Jung clashed in Bhajang district",
                outcome: "Deaths of eleven rebels.",
              },
              {
                date: "September 30, 1962",
                event:
                  "NC rebels attacked government troops in the town of Thori in Parsa district.",
                outcome: "",
              },
              {
                date: "November 8, 1962",
                event:
                  "Subarna Shumsher, leader of the NC, suspended the NC rebellion against the Nepalese government",
                outcome:
                  "More than 100 individuals were killed during the NC rebellion.",
              },
              {
                date: "December 9, 1962",
                event:
                  "King Mahendra extended the state of emergency for an additional year.",
                outcome: "",
              },
              {
                date: "December 16, 1962",
                event: "King Mahendra proclaimed a new constitution.",
                outcome:
                  "The new constitution provided for the establishment of a non-party political system.",
              },
              {
                date: "April 2, 1963",
                event: "King Mahendra appointed Tulsi Giri as prime minister.",
                outcome: "",
              },
              {
                date: "April 13, 1963",
                event:
                  "King Mahendra proclaimed the end of the state-of-emergency and the establishment of the Panchayat (“non-party”) system.",
                outcome: "",
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
          label: "Nepal History: 1951-1960",
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
                  "The 125-member National Panchayat was inaugurated by King Mahendra",
                outcome: "",
              },
              {
                date: "December 23, 1963",
                event:
                  "King Mahendra appointed Surya Bahadur Thapa as prime minister",
                outcome: "",
              },
              {
                date: "March 9, 1964",
                event:
                  "After announcing a non-violent movement against the government, former prime minister Kunwar Indrajit Singh was placed under house arrest on charges of sedition by the government",
                outcome: "",
              },
              {
                date: "February 26, 1964",
                event: "King Mahendra appointed Tulsi Giri as prime minister",
                outcome: "",
              },
              {
                date: "March 12, 1964",
                event:
                  "Nepalese government announced that it had accepted offers by the U.S. and UK governments to provide limited military assistance to modernize the Nepalese military.",
                outcome: "",
              },
              {
                date: "August 5, 1964",
                event:
                  "Former prime minister Kunwar Indrajit Singh was sentenced to two years in prison for sedition.",
                outcome: "",
              },
              {
                date: "January 26, 1965",
                event:
                  "King Mahendra appointed Surya Bahadur Thapa as prime minister",
                outcome: "",
              },
              {
                date: "June 14, 1965",
                event:
                  "Former prime minister Kunwar Indrajit Singh was released from prison after the Supreme Court overturned his conviction by a special tribunal on charges of sedition.",
                outcome: "",
              },
              {
                date: "August 29, 1965",
                event:
                  "Chinese government agreed to provide $28 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "September 17, 1966",
                event:
                  "U.S. government agreed to provide $1.5 million in economic assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "June 19, 1968",
                event:
                  "King Mahendra pardoned 29 individuals who were imprisoned or exiled after he dissolved the parliament in December 1960.",
                outcome: "",
              },
              {
                date: "October 30, 1968",
                event:
                  "Former prime minister Bishweshwar Prashad Koirala was released after serving nearly eight years in prison.",
                outcome: "",
              },
              {
                date: "April 7, 1969",
                event:
                  "King Mahendra appointed Kirti Nidhi Bista as prime minister",
                outcome: "",
              },
              {
                date: "June 25, 1969",
                event:
                  "Nepalese government asked the Indian government to withdraw the Indian Military Training and Advisory Group (IMTAG).",
                outcome: "",
              },
              {
                date: "April 13, 1970",
                event:
                  "King Mahendra appointed Gehendra Bahadur Rajbhandari as acting prime minister",
                outcome: "",
              },
              {
                date: "August 18, 1970",
                event:
                  "The Indian government completed the withdrawal of the IMTAG.",
                outcome: "",
              },
              {
                date: "1971",
                event: "Parliamentary elections were held",
                outcome:
                  "Independents won 109 out of 109 elected seats in the parliament (Rastriya Panchayat).",
              },
              {
                date: "April 14, 1971",
                event:
                  "King Mahendra appointed Kirti Nidhi Bista as prime minister.",
                outcome: "",
              },
              {
                date: "August 26, 1971",
                event:
                  "Prime Minister Kirti Nidhi Bista submitted his resignation.",
                outcome: "",
              },
              {
                date: "August 29, 1971",
                event:
                  "Kirti Nidhi Bista was reappointed as prime minster by King Mahendra.",
                outcome: "",
              },
              {
                date: "January 31, 1972",
                event:
                  "Prince Birendra Bir Bikram Shah Dev assumed the throne following the death of his father, King Mahendra.",
                outcome: "",
              },
              {
                date: "August 16, 1972",
                event:
                  "Nepal government police clashed with students demonstrating in support of political reforms in Kathmandu.",
                outcome: "",
              },
              {
                date: "July 16, 1973",
                event:
                  "Prime Minister Kirti Nidhi Bista submitted his resignation",
                outcome:
                  "King Birendra appointed Nagendra Prasad Rijal as prime minister.",
              },
              {
                date: "January 23, 1975",
                event:
                  "The Nepal Workers and Peasants Party (Nepal Majdoor Kisan Party – NMKP) was established by Narayan Man Bijukchhe",
                outcome: "",
              },
              {
                date: "February 24, 1975",
                event:
                  "The official coronation ceremony for King Birendra Bir Bikram Shah Dev was held in Kathmandu",
                outcome: "",
              },
              {
                date: "December 1, 1975",
                event: "King Birendra appointed Tulsi Giri as prime minister",
                outcome: "",
              },
              {
                date: "December 30, 1976",
                event:
                  "Former prime minister Bishweshwar Prashad Koirala returned to Nepal from exile in India to face charges of treason and sedition.",
                outcome: "",
              },
              {
                date: "September 9, 1977",
                event: "Prime Minister Tulsi Giri resigned",
                outcome: "",
              },
              {
                date: "September 12, 1977",
                event:
                  "King Birendra appointed Kirti Nidhi Bista as prime minister",
                outcome: "",
              },
              {
                date: "September 17, 1977",
                event:
                  "Nepal government police clashed with protesters in Ridikot in Achham district.",
                outcome: "Deaths of four protesters.",
              },
              {
                date: "November 8, 1977",
                event:
                  "Former prime minister Bishweshwar Prashad Koirala was arrested in Kathmandu after returning to Nepal from the U.S. for medical treatment.",
                outcome: "",
              },
              {
                date: "April 6, 1979",
                event:
                  "University students began a boycott of classes in Kathmandu",
                outcome: "",
              },
              {
                date: "April 9, 1979",
                event:
                  "A nine-member Central Action Committee was established, consisting of students representing the Nepal National Student Federation (NNSF), Nepal Bidhyarthi Sangh (NBS), and All Nepal National Free Students Union (ANNFSU).",
                outcome: "",
              },
              {
                date: "April 24, 1979",
                event: "The government closed all universities in Kathmandu",
                outcome: "",
              },
              {
                date: "April 27, 1979",
                event:
                  "Former prime minister Bishweshwar Prashad Koirala was placed under house arrest following violent clashes between government police and students in Hetauda in Makawanpur district.",
                outcome: "",
              },
              {
                date: "May 2, 1979",
                event:
                  "King Birendra established a five-member commission chaired by Supreme Court Chief Justice Dhanendra Bahadur Singh to address the demands made by student protesters.",
                outcome: "",
              },
              {
                date: "May 3, 1979",
                event:
                  "King Birendra released 160 students who had been arrested during recent protests.",
                outcome: "",
              },
              {
                date: "May 9, 1979",
                event:
                  "Former prime minister Bishweshwar Prashad Koirala was released from house arrest and another 64 students were released from detention.",
                outcome: "Deaths of at least ten individuals.",
              },
              {
                date: "May 24, 1979",
                event:
                  "King Birendra announced that a referendum would be held to decide between a multi-party system and the Panchayat system.",
                outcome: "",
              },
              {
                date: "May 30, 1979",
                event:
                  "King Birendra appointed Surya Bahadur Thapa as prime minister",
                outcome: "",
              },
              {
                date: "April 23, 1980",
                event:
                  "Nepal government police shot and killed one individual during clashes between supporters and opponents of the Nepalese monarchy in the town of Pokhara in Kaski district.",
                outcome: "",
              },
              {
                date: "May 2, 1980",
                event:
                  "The Panchayat system was supported by some 55 percent of the voters in a referendum held",
                outcome: "",
              },
              {
                date: "May 21, 1980",
                event:
                  "King Birendra established the 11-member Constitutional Reform Commission (CRC)",
                outcome: "",
              },
              {
                date: "June 1, 1980",
                event:
                  "Surya Bahadur Thapa formed a government as prime minister.",
                outcome: "",
              },
              {
                date: "December 15, 1980",
                event: "King Birendra announced a constitutional amendment.",
                outcome:
                  "Providing for universal adult franchise and the election of the prime minister in the parliament.",
              },
              {
                date: "May 9, 1981",
                event: "Parliamentary elections were held.",
                outcome:
                  "Non-partisan candidates (independents) won 112 out of 112 elected seats in the parliament (Rastriya Panchayat). The NC and other opposition political parties boycotted the parliamentary elections.",
              },
              {
                date: "June 16, 1981",
                event:
                  "Surya Bahadur Thapa formed a government as prime minister.",
                outcome: "",
              },
              {
                date: "July 21, 1982",
                event:
                  "Former Prime Minister and NC leader Bisheshwar Prashad Koirala died in Kathmandu",
                outcome: "",
              },
              {
                date: "October 4, 1982",
                event:
                  "Former prime minister Kunwar Indrajit Singh died in Bangkok, Thailand.",
                outcome: "",
              },
              {
                date: "July 11, 1983",
                event: "Prime Minister Thapa resigned.",
                outcome: "",
              },
              {
                date: "July 12, 1983",
                event:
                  "King Birendra appointed Lokendra Bahadur Chand as prime minister.",
                outcome: "",
              },
              {
                date: "November 4, 1984",
                event:
                  "Several hundred members of the NC were arrested by government police for attending a political meeting.",
                outcome: "",
              },
              {
                date: "May 23, 1985",
                event:
                  "The NC organized a nationwide civil disobedience campaign (Satyagraha) against the government.",
                outcome:
                  "Some 12,000 NC members and supporters were imprisoned.",
              },
              {
                date: "June 20, 1985",
                event:
                  "Eight individuals were killed in terrorist bombings at the Royal Palace, Annapurna Hotel, and other locations in Katmandu.",
                outcome:
                  "One of the groups that later claimed responsibility for the bombings was the National Democratic Front (Nepal Janabadi Morcha -NJM). After the bombings, the NC ended its nationwide civil disobedience campaign (Satyagraha).",
              },
              {
                date: "March 20, 1986",
                event: "Prime Minister Chand resigned.",
                outcome: "",
              },
              {
                date: "March 21, 1986",
                event:
                  "King Birendra appointed Nagendra Prasad Rijal as interim prime minister.",
                outcome: "",
              },
              {
                date: "May 12, 1986",
                event: "Parliamentary elections were held",
                outcome:
                  "Non-partisan candidates (independents) won 112 out of 112 elected seats in the parliament (Rastriya Panchayat).",
              },
              {
                date: "June 15, 1986",
                event:
                  "King Birendra appointed Marich Man Singh Shrestha as prime minister.",
                outcome: "",
              },
              {
                date: "March 23, 1989",
                event:
                  "The Indian government imposed economic sanctions (trade embargo) against Nepal.",
                outcome: "",
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
                date: "February 18, 1990",
                event:
                  "The NC and several communist groups established the Movement for the Restoration of Democracy (MRD) in opposition to the government.",
                outcome: "",
              },
              {
                date: "February 18-19, 1990",
                event:
                  "Government police and demonstrators clashed in Kathmandu, Bhaktapur, and Jaddukuha.",
                outcome: "Deaths of eleven individuals.",
              },
              {
                date: "March 30-31, 1990",
                event: "Government police fired on demonstrators in Kathmandu.",
                outcome: "Deaths of six individuals.",
              },
              {
                date: "April 2, 1990",
                event:
                  "Government police fired on demonstrators in Kirtipur in Kathmandu.",
                outcome: "Deaths of five individuals.",
              },
              {
                date: "April 6, 1990",
                event:
                  "King Birendra dismissed Prime Minister Marich Man Singh Shrestha and appointed Lokendra Bahadur Chand as prime minister.",
                outcome: "",
              },
              {
                date: "April 6, 1990",
                event:
                  "Government police fired on demonstrators near the royal palace in Kathmandu.",
                outcome: "Deaths of some 150 individuals.",
              },
              {
                date: "April 8, 1990",
                event:
                  "King Birendra appointed Krishna Prasad Bhattarai of the NC as prime minister.",
                outcome: "",
              },
              {
                date: "April 23, 1990",
                event:
                  "Government police and demonstrators clashed in Kathmandu.",
                outcome: "Deaths of six government policemen.",
              },
              {
                date: "May 17, 1990",
                event: "King Birendra granted amnesty for political prisoners.",
                outcome: "",
              },
              {
                date: "May 29, 1990",
                event:
                  "The National Democratic Party (Rashtriya Prajatantra Party – RPP) was established by former prime ministers Surya Bahadur Thapa and Lokendra Bahadur Chand.",
                outcome: "",
              },
              {
                date: "July 1, 1990",
                event:
                  "The Indian government lifted economic sanctions (trade embargo) against Nepal.",
                outcome: "",
              },
              {
                date: "September 10, 1990",
                event:
                  "King Birendra approved the CRC’s draft constitution, which established a multiparty democratic system under a constitutional monarchy.",
                outcome: "",
              },
              {
                date: "November 9, 1990",
                event: "The new constitution went into effect.",
                outcome: "",
              },
              {
                date: "May 12, 1991",
                event: "Parliamentary elections were held.",
                outcome:
                  "The NC won 110 out of 205 seats in the House of Representatives. The Communist Party of Nepal-Unified Marxist and Leninist (CPN-UML) won 69 seats in the House of Representatives.",
              },
              {
                date: "May 26, 1991",
                event:
                  "Girija Prasad Koirala of the NC formed a government as prime minister.",
                outcome: "",
              },
              {
                date: "May 8, 1991 - May 16, 1991",
                event:
                  "The International Foundation for Electoral Systems (IFES) sent eight observers to monitor the parliamentary elections, as a part of a 65-member multinational observation group coordinated by the Nepal Election Observation Committee (NEOC). The International Federation of Human Rights (IFHR) sent two observers to monitor the election process.",
                outcome: "",
              },
              {
                date: "April 6, 1992 – April 12, 1992",
                event:
                  "Twelve individuals were killed in political violence in Kathmandu.",
                outcome: "",
              },
              {
                date: "May & June 1992",
                event: "Local elections were held.",
                outcome: "",
              },
              {
                date: "June 25, 1993 – June 29, 1993",
                event:
                  "Twenty-five individuals were killed in political violence in Kathmandu.",
                outcome: "",
              },
              {
                date: "July 10, 1994",
                event:
                  "Prime Minister Girija Prasad Koirala submitted his resignation to King Birendra.",
                outcome: "",
              },
              {
                date: "July 11, 1994",
                event: "King Birendra dissolved the House of Representatives.",
                outcome: "",
              },
              {
                date: "November 15, 1994",
                event: "Parliamentary elections were held.",
                outcome:
                  "The CPN-UML won 88 out of 205 seats in the House of Representatives. The NC won 83 seats in the House of Representatives.",
              },
              {
                date: "November 16, 1994",
                event: "Five individuals were killed in political violence.",
                outcome: "",
              },
              {
                date: "November 29, 1994",
                event:
                  "Man Mohan Adhikari, leader of the CPN-UML, formed a coalition government as prime minister.",
                outcome: "",
              },
              {
                date: "June 13, 1995",
                event: "King Birendra dissolved the House of Representatives.",
                outcome: "",
              },
              {
                date: "August 28, 1995",
                event:
                  "The Supreme Court nullified the dissolution of the House of Representatives.",
                outcome: "",
              },
              {
                date: "September 10, 1995",
                event:
                  "Prime Minister Mohan Adhikari resigned after a vote of no-confidence",
                outcome: "",
              },
              {
                date: "September 12, 1995",
                event:
                  "The NC, RPP, and the Nepal Sadbhavana Party (NSP) formed a coalition government headed by Sher Bahadur Deuba as prime minister.",
                outcome: "",
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
                  "The armed forces of the Communist Party of Nepal-Maoist (CPN-Maoist), known as the People’s Liberation Army (PLA), launched a rebellion against the Nepalese government.",
                outcome: "",
              },
              {
                date: "March 17, 1996",
                event:
                  "Government police suppressed and detained demonstrators in Kathmandu.",
                outcome: "",
              },
              {
                date: "March 17, 1996",
                event:
                  "London-based human right non-governmental organization, Amnesty International, condemned the government for the detentions of Nepalese demonstrators.",
                outcome: "",
              },
              {
                date: "March 10, 1997",
                event:
                  "The government headed by Prime Minister Sher Bahadur Deuba lost a vote of confidence in the House of Representatives.",
                outcome: "",
              },
              {
                date: "March 12, 1997",
                event:
                  "Lokendra Bahadur Chand formed a RPP-UML-NSP coalition government as prime minister.",
                outcome: "",
              },
              {
                date: "September 11, 1997",
                event: "Former prime minister Matrieka Prasad Koirala died.",
                outcome: "",
              },
              {
                date: "October 4, 1997",
                event:
                  "Prime Minister Chand lost a vote of no-confidence in the House of Representatives.",
                outcome: "",
              },
              {
                date: "October 6, 1997",
                event:
                  "Surya Bahadur Thapa of the RPP formed a coalition government",
                outcome: "",
              },
              {
                date: "April 10, 1998",
                event: "Prime Minister Surya Bahadur Thapa resigned",
                outcome: "",
              },
              {
                date: "April 15, 1998",
                event:
                  "Girija Prasad Koirala of the NC formed a minority government.",
                outcome: "",
              },
              {
                date: "December 23, 1998",
                event:
                  "Prime Minister Girija Prasad Koirala formed a coalition government with the UML and NSP.",
                outcome: "",
              },
              {
                date: "January 14, 1999",
                event:
                  "Prime Minister Girija Prasad Koirala won a vote of no-confidence in the House of Representatives.",
                outcome: "",
              },
              {
                date: "January 15, 1999",
                event: "King Birendra dissolved the House of Representatives.",
                outcome: "",
              },
              {
                date: "March 5, 1999",
                event:
                  "Yadu Gautam, leader of the CPN-UML, was assassinated by Maoist rebels.",
                outcome: "",
              },
              {
                date: "March 19, 1999",
                event:
                  "government police clashed with Maoist rebels in Kavrepalanchok district.",
                outcome: "Deaths of seven rebels.",
              },
              {
                date: "March 20, 1999",
                event:
                  "Government police clashed with Maoist rebels in Sindhuli district.",
                outcome: "Deaths of five rebels.",
              },
              {
                date: "May 2, 1999",
                event:
                  "Nepal government security forces clashed with Maoist rebels in the districts of Kalikot and Jumla.",
                outcome: "Deaths of five individuals.",
              },
              {
                date: "May 3 and May 17, 1999",
                event: "Parliamentary elections were held",
                outcome:
                  "The NC won 111 out of 205 seats in the House of Representatives. The CPN-UML won 71 seats in the House of Representatives. The Maoists called for a boycott of the parliamentary elections.",
              },
              {
                date: "May 31, 1999",
                event:
                  "Krishna Prasad Bhattarai, leader of the NC, was sworn in as prime minister.",
                outcome: "",
              },
              {
                date: "June 16, 1999",
                event:
                  "Maoist rebels attacked a government police station in Jajarkot district",
                outcome:
                  "Deaths of four government policemen and four civilians.",
              },
              {
                date: "November 29, 1999",
                event:
                  "Prime Minister, Krishna Prasad Bhattarai offered a conditional amnesty to Maoist rebels who renounced violence.",
                outcome: "",
              },
              {
                date: "December 9, 1999",
                event:
                  "Government police and supporters of opposition political parties clashed in Kathmandu.",
                outcome: "Deaths of two individuals.",
              },
              {
                date: "Beginning of 2000 A.D.",
                event:
                  "The British government provided military assistance to the Nepalese government.",
                outcome: "",
              },
              {
                date: "February 14, 2000",
                event:
                  "London-based human rights non-governmental organization, Amnesty International, condemned the Nepalese government for executing hundreds of suspected Maoist rebels, including individuals who had been arrested or who had surrendered.",
                outcome: "",
              },
              {
                date: "February 22, 2000",
                event:
                  "Nepal government security forces clashed with Maoist rebels in Rukum district.",
                outcome: "Deaths of 12 rebels.",
              },
              {
                date: "March 16, 2000",
                event: "Prime Minister Krishna Prasad Bhattarai resigned.",
                outcome: "",
              },
              {
                date: "April 5, 2000",
                event:
                  "Nepal government security forces clashed with Maoist rebels in two districts in western Nepal",
                outcome:
                  "Deaths of five government policemen in Rukum district and four government policemen in Pyuthan district.",
              },
              {
                date: "April 13, 2000",
                event:
                  "Six government policemen were killed when their vehicle hit a landmine in Salyan district.",
                outcome: "",
              },
              {
                date: "June 8, 2000",
                event:
                  "Maoist rebels attacked a government police station in Jajarkot district.",
                outcome:
                  "Deaths of nine government policemen, seven civilians, and 21 rebels.",
              },
              {
                date: "September 25, 2000",
                event:
                  "Maoist rebels attacked a government police station in Dunai in Dolpa district.",
                outcome: "Deaths of at least 12 government policemen.",
              },
              {
                date: "Beginning of 2001",
                event:
                  "The U.S. government provided military assistance (military equipment, weapons, military advisors, and military training) to the Nepalese government",
                outcome: "",
              },
              {
                date: "February 3, 2001",
                event:
                  "Maoist rebels attacked a convoy of vehicles in Chhyasatti in Surkhet district.",
                outcome: "Deaths of six individuals.",
              },
              {
                date: "April 1, 2001",
                event:
                  "Maoist rebels attacked a government police station in Rukum district. Government security forces clashes with Maoist rebels in Dolakha district, resulting in the deaths of five government policemen and three rebels.",
                outcome: "Deaths of 31 policemen.",
              },
              {
                date: "May 27, 2001 – May 29, 2001",
                event:
                  "Government police and communist demonstrators clashed in Lamjung district",
                outcome: "Deaths of two individuals.",
              },
              {
                date: "June 1, 2001",
                event:
                  "Crown Prince Dipendra Bir Bikram Shah Dev killed King Birendra and seven other members of the royal family.",
                outcome: "",
              },
              {
                date: "June 4, 2001",
                event: "Crown Prince Dipendra died of self-inflicted wounds",
                outcome: "",
              },
              {
                date: "June 2, 2001",
                event:
                  "Prince Gyanendra Shah was named acting king by the State Council.",
                outcome: "",
              },
              {
                date: "July 6, 2001",
                event:
                  "Maoist rebels attacked several government police stations in three districts.",
                outcome:
                  "Deaths of 22 government policemen in Lamjung district and nine government policemen in Nuwukot district.",
              },
              {
                date: "July 13, 2001",
                event:
                  "Nepal government troops clashed with Maoist rebels in Rolpa district.",
                outcome: "Deaths of several rebels.",
              },
              {
                date: "July 19, 2001",
                event: "Prime Minister Girija Prasad Koirala resigned",
                outcome: "",
              },
              {
                date: "July 22, 2001",
                event:
                  "Sher Bahadur Deuba of the NC was appointed as prime minister",
                outcome: "",
              },
              {
                date: "July 22, 2001",
                event:
                  "Maoist rebels attacked a government police station in Bajura district.",
                outcome: "Deaths of 17 government policemen.",
              },
              {
                date: "July 23, 2001",
                event:
                  "Nepal government officials and Maoist rebels announced a temporary ceasefire so that the parties could engage in negotiations.",
                outcome: "",
              },
              {
                date: "August 30, 2001 - November 13, 2001",
                event:
                  "Government and Maoist representatives held negotiations",
                outcome: "",
              },
              {
                date: "November 21, 2001",
                event:
                  "Maoist rebels withdrew from the four-month old ceasefire with the government.",
                outcome: "",
              },
              {
                date: "November 23, 2001",
                event:
                  "Maoist rebels attacked government security forces in the districts of Dang and Solu.",
                outcome:
                  "Deaths of 50 government policemen and 18 government soldiers.",
              },
              {
                date: "November 23, 2001 – November 24, 2001",
                event:
                  "Some 80 Maoist rebels were killed in clashes with government security forces.",
                outcome: "",
              },
              {
                date: "November 26, 2001",
                event:
                  "King Gyanendra declared a nationwide state-of-emergency",
                outcome: "",
              },
              {
                date: "November 27, 2001",
                event: "Maoist rebels killed four government policemen.",
                outcome: "",
              },
              {
                date: "November 27, 2001",
                event:
                  "Some 45,000 government troops launched a military offensive against Maoist rebels.",
                outcome: "",
              },
              {
                date: "November 29, 2001",
                event:
                  "The governments of China and India expressed support for the Nepalese government.",
                outcome: "",
              },
              {
                date: "November 29, 2001",
                event:
                  "The Indian government agreed to provide military assistance to the Nepalese government",
                outcome: "",
              },
              {
                date: "February 5, 2002",
                event:
                  "Maoist rebels attacked a government police station in Kavre district.",
                outcome: "Deaths of 16 government policemen and seven rebels.",
              },
              {
                date: "February 9, 2002",
                event:
                  "Maoist rebels attacked the headquarters of Achham district, resulting in the deaths of 81 government policemen and 55 government soldiers.",
                outcome: "",
              },
              {
                date: "February 15, 2002",
                event:
                  "Two factions of the CPN – the United Marxist-Leninist (UML) and the Marxist-Leninist (ML) – reunited four years after they split.",
                outcome: "",
              },
              {
                date: "February 17, 2002",
                event:
                  "Government troops clashes with Maoist rebels in Mangalsen in Acham district.",
                outcome:
                  "Deaths of 48 government soldiers and 49 government policemen.",
              },
              {
                date: "February 21, 2002",
                event:
                  "Nepalese government extended the state of emergency for another three months.",
                outcome: "",
              },
              {
                date: "March 21, 2002",
                event:
                  "The Indian government offered military assistance (military equipment and training) to the Nepalese government",
                outcome: "",
              },
              {
                date: "April 11, 2002",
                event:
                  "Maoist rebels attacked government police stations in Dang district",
                outcome: "Deaths of 48 government policemen and six civilians.",
              },
              {
                date: "May 2-3, 2002",
                event:
                  "Nepal government troops clashed with Maoist rebels in the districts of Doti and Rolpa",
                outcome:
                  "Deaths of some 100 rebels and three government soldiers.",
              },
              {
                date: "May 22, 2002",
                event:
                  "King Gyanendra dissolved the House of Representatives and called for new parliamentary elections.",
                outcome: "",
              },
              {
                date: "May 26, 2002",
                event:
                  "Prime Minister Sher Bahadur Deuba was expelled from the NC.",
                outcome: "",
              },
              {
                date: "August 22, 2002",
                event:
                  "Government troops killed ten Maoist rebels in west Nepal.",
                outcome: "",
              },
              {
                date: "August 28, 2002",
                event: "The state of emergency expired.",
                outcome: "",
              },
              {
                date: "September 7, 2002",
                event:
                  "Maoist rebels attacked a government police station in Bhimad in Sindhuli district.",
                outcome: "Deaths of 49 government policemen.",
              },
              {
                date: "September 8, 2002",
                event:
                  "Maoist rebels attacked the town of Sandhikharka in Arghakhanchi district.",
                outcome: "Deaths of 58 individuals.",
              },
              {
                date: "September 13, 2002",
                event:
                  "Maoist rebels ambushed and killed nine government policemen in Siraha district.",
                outcome: "Deaths of 9 government policemen.",
              },
              {
                date: "September 16, 2002",
                event: "The Maoists called for a nationwide strike.",
                outcome: "",
              },
              {
                date: "October 4, 2002",
                event:
                  "King Gyanendra dismissed the government headed by Prime Minister Sher Bahadur Deuba and assumed executive authority.",
                outcome: "",
              },
              {
                date: "October 8, 2002",
                event:
                  "Some 3,000 individuals demonstrated against King Gyanendra in Kathmandu.",
                outcome: "",
              },
              {
                date: "October 11, 2002",
                event:
                  "King Gyanendra appointed Lokendra Bahadur Chand of the RPP as prime minister.",
                outcome: "",
              },
              {
                date: "October 27, 2002",
                event:
                  "Maoist rebels attacked the Rumjatar airport in Okhaldhunga district.",
                outcome: "Deaths of 3 government soldiers.",
              },
              {
                date: "November 14, 2002",
                event:
                  "Government security forces clashed with Maoist rebels in the districts of Jumla and Gorkha.",
                outcome:
                  "Deaths of 3 civilians, 22 government policemen, 4 government soldiers, and at least 55 rebels.",
              },
              {
                date: "December 18, 2002",
                event:
                  "Maoist rebels attacked a government police station in Koilabas in Dang district.",
                outcome: "Deaths of 6 government policemen.",
              },
              {
                date: "January 3, 2003",
                event:
                  "Maoist rebels killed five government security personnel in Gawar.",
                outcome: "",
              },
              {
                date: "Beginning from 2003",
                event:
                  "The Belgian government provided military assistance (weapons) to the Nepalese government.",
                outcome: "",
              },
              {
                date: "January 13, 2003",
                event:
                  "Nepal government troops clashed with Maoist rebels in Bhojpur district.",
                outcome: "Deaths of 15 rebels.",
              },
              {
                date: "January 23, 2003",
                event:
                  "Maoist rebels ambushed and killed two government policemen in Girighat in Surkhet district.",
                outcome: "",
              },
              {
                date: "January 26, 2003",
                event:
                  "Maoist rebels killed Krishna Mohan Shrestha, chief of the government police force, and two other civilians in Kathmandu.",
                outcome: "",
              },
              {
                date: "January 29, 2003",
                event:
                  "The Nepalese government and Maoist rebels agreed to an indefinite ceasefire and resumption of negotiations.",
                outcome: "",
              },
              {
                date: "March 13, 2003",
                event:
                  "Representatives of the government and Maoist rebels agreed on a 22-point code of conduct, including stopping violence by both sides, releasing prisoners of war, refraining from kidnappings, and permitting refugees to return to their homes.",
                outcome: "",
              },
              {
                date: "May 30, 2003",
                event: "Prime Minister Lokendra Bahadur Chand resigned.",
                outcome: "",
              },
              {
                date: "June 5, 2003",
                event:
                  "Surya Bahadur Thapa of the RPP was sworn in as prime minister.",
                outcome: "",
              },
              {
                date: "August 17, 2003",
                event:
                  "Government security forces launched an offensive against Maoist rebels in Ramechhap district.",
                outcome:
                  "Deaths of 39 rebels, seven government soldiers, and five government policemen.",
              },
              {
                date: "August 27, 2003",
                event:
                  "Maoist rebels unilaterally ended the ceasefire with the Nepalese government.",
                outcome: "",
              },
              {
                date: "August 31, 2003",
                event:
                  "Maoist rebels ambushed a government police station in Rupandehi.",
                outcome: "Deaths of four policemen.",
              },
              {
                date: "September 2, 2003",
                event:
                  "Maoist rebels ambushed a government police station in Siraha.",
                outcome: "Deaths of two policemen.",
              },
              {
                date: "September 8, 2003",
                event: "Eight civilians were killed in bombings in Kathmandu.",
                outcome: "",
              },
              {
                date: "September 12, 2003",
                event: "Maoist rebels killed six civilians in Kathmandu.",
                outcome: "",
              },
              {
                date: "September 27, 2003",
                event:
                  "Fifteen individuals, including eight Maoist rebels and six government policemen, were killed during clashes in Khotang district and other locations.",
                outcome: "",
              },
              {
                date: "October 13, 2003",
                event:
                  "Maoist rebels attacked a government police training center in Bhaluwang.",
                outcome: "Deaths of 42 policemen and nine rebels.",
              },
              {
                date: "October 28, 2003",
                event:
                  "Maoist rebels attacked a government police station in Danda Nak in Kaski district.",
                outcome:
                  "deaths of 7 government security personnel and 2 civilians.",
              },
              {
                date: "November 2, 2003",
                event:
                  "Maoist rebels ambushed and killed at least ten government security personnel in Simara in Bara district.",
                outcome: "",
              },
              {
                date: "November 15, 2003",
                event:
                  "Maoist rebels ambushed and killed four government security personnel in Bhainse in Makwanpur district.",
                outcome: "",
              },
              {
                date: "December 17, 2003",
                event:
                  "Eleven government soldiers were killed by landmines in the districts of Kapilavastu and Bardiya.",
                outcome: "",
              },
              {
                date: "2004",
                event:
                  "Terai People’s Liberation Front (Janatantrik Terai Mukti Morcha – JTMM) was established in support of autonomy for the Terai region.",
                outcome: "",
              },
              {
                date: "January 15, 2004",
                event:
                  "Maoist rebels killed two civilians in Bahuaari in Birgunj.",
                outcome: "",
              },
              {
                date: "February 17, 2004",
                event:
                  "Nepal government troops clashed with Maoist rebels in Kalikot district.",
                outcome: "Deaths of some 60 rebels.",
              },
              {
                date: "March 2, 2004 – March 3, 2004",
                event:
                  "Government security forces and Maoist rebels clashed in Bhojpur district.",
                outcome:
                  "Deaths of 32 government security personnel and 10 rebels.",
              },
              {
                date: "March 20, 2004 – March 21, 2004",
                event: "Maoist rebels attacked targets in Myagdi district.",
                outcome:
                  "deaths of 51 government security personnel and 20 civilians",
              },
              {
                date: "April 4, 2004",
                event:
                  "Maoist rebels attacked a government police station in Jadukhola in Dhanusha district.",
                outcome: "deaths of 13 policemen and 9 rebels.",
              },
              {
                date: "April 5, 2004",
                event:
                  "Three government soldiers were killed when their vehicle struck a landmine in Dolakha district. CPN-Maoist called for a three-day national strike against the Nepalese monarchy.",
                outcome: "",
              },
              {
                date: "May 7, 2004",
                event: "Prime Minister Surya Bahadur Thapa resigned.",
                outcome: "",
              },
              {
                date: "May 9, 2004",
                event:
                  "Maoist rebels killed eight government security personnel and seven civilians in a passenger bus attack in Mainapokhari in Dolakha district.",
                outcome: "",
              },
              {
                date: "May 11, 2004",
                event:
                  "Maoist rebels killed six government soldiers and policemen in the district of Dhading.",
                outcome: "",
              },
              {
                date: "May 12, 2004",
                event:
                  "Government police and Maoist rebels clashed in Bhojpur district.",
                outcome: "Deaths of 16 rebels and 2 government policemen.",
              },
              {
                date: "June 4, 2004",
                event: "Sher Bahadur Deuba was re-appointed as prime minister.",
                outcome: "",
              },
              {
                date: "June 14, 2004",
                event:
                  "At least 22 government security personnel were killed in a landmine explosion in Khairikhola in Banke district.",
                outcome: "",
              },
              {
                date: "July 5, 2004",
                event:
                  "Prime Minister Sher Bahadur Deuba formed a coalition government",
                outcome: "",
              },
              {
                date: "July 5, 2004",
                event:
                  "12 government policemen and 1 civilian were killed in a landmine explosion in the village of Bindhyabasini in Parsa district",
                outcome: "",
              },
              {
                date: "July 6, 2004",
                event:
                  "Government troops and Maoist rebels clashed in western Nepal.",
                outcome: "Deaths of 11 government soldiers and 11 rebels.",
              },
              {
                date: "August 10, 2004",
                event:
                  "Government troops launched a military offensive against Maoist rebels in Achham district.",
                outcome: "",
              },
              {
                date: "November 17, 2004",
                event:
                  "8 government policemen were killed in landmine explosions in Banke district.",
                outcome: "",
              },
              {
                date: "November 21, 2004",
                event:
                  "Maoist rebels killed at least ten government security personnel in Kailali district.",
                outcome: "",
              },
              {
                date: "December 4, 2004",
                event:
                  "Maoist rebels attacked government security forces in Kapilavastu district.",
                outcome: "Deaths of 6 government security personnel.",
              },
              {
                date: "December 15, 2004",
                event:
                  "Maoist rebels killed 21 government security personnel in Sisnekhola in in Arghakhanchi district.",
                outcome: "",
              },
              {
                date: "December 16, 2004",
                event:
                  "Government security forces killed 16 Maoist rebels in Dailekh district.",
                outcome: "",
              },
              {
                date: "December 22, 2004",
                event:
                  "Government security forces clashes with Maoist rebels in Bardiya district.",
                outcome:
                  "Deaths of 5 government security personnel, 5 civilians, and 8 rebels.",
              },
              {
                date: "January 1, 2005",
                event:
                  "Government troops clashed with Maoist rebels in Dhankuta district.",
                outcome: "Deaths of at least 12 government soldiers.",
              },
              {
                date: "January 2, 2005",
                event:
                  "Maoist rebels attacked government security forces in Bangaon in Kanchanpur district.",
                outcome: "Deaths of 5 government policemen.",
              },
              {
                date: "January 9, 2005",
                event:
                  "Nepal government security forces clashes with Maoist rebels near Tallo Dungeshwor in Dailekh district.",
                outcome: "Deaths of at least 3 rebels.",
              },
              {
                date: "January 14, 2005",
                event:
                  "3 civilians and 1 government security personnel were killed in a Maoist bombing in Ganja Bhawani in Bara district.",
                outcome: "",
              },
              {
                date: "January 15, 2005",
                event:
                  "Nepal government security personnel clashed with Maoist rebels near Raniban in Dailekh district.",
                outcome: "Deaths of at least 2 rebels.",
              },
              {
                date: "January 16, 2005",
                event:
                  "Nepal government security forces clashed with Maoist rebels near Basti in Darchula district. Nepal government security forces also killed 2 Maoist rebels in the village of Sitapur in Siraha district.",
                outcome: "Deaths of at least 5 rebels.",
              },
              {
                date: "January 19, 2005",
                event:
                  "Nepal government security forces clashed with Maoist rebels near Barbote in Ilam district.",
                outcome:
                  "Deaths of at least 20 government security personnel and 6 rebels.",
              },
              {
                date: "January 21, 2005",
                event:
                  "Maoist rebels killed 1 government policeman in Milanchowk in Rupandehi district.",
                outcome: "",
              },
              {
                date: "January 24, 2005",
                event:
                  "Maoist rebels attacked a government police station in Haripur in Sarlahi district.",
                outcome: "Deaths of at least 3 government policemen.",
              },
              {
                date: "January 25, 2005",
                event:
                  "Maoist rebels attacked a government military barracks in Mangalsen in Achham district.",
                outcome: "Deaths of at least 2 Maoist rebels.",
              },
              {
                date: "January 26, 2005",
                event:
                  "Maoist rebels ambushed government security forces near Bhyaple in Parbat district.",
                outcome:
                  "Deaths of at least 5 government security personnel and 1 civilian.",
              },
              {
                date: "January 30, 2005",
                event:
                  "Nepal government security forces clashed with Maoist rebels near Chisapani in Dhanusha district.",
                outcome:
                  "Deaths of at last 14 rebels and 1 government security personnel.",
              },
              {
                date: "January 31, 2005",
                event:
                  "Maoist rebels attacked government security forces in Chaulikka in Nepalgunj district.",
                outcome:
                  "Deaths of 2 government policemen, 1 rebels, and 1 civilian.",
              },
              {
                date: "February 1, 2005",
                event:
                  "King Gyanendra dismissed the government of Prime Minister Sher Bahadur Deuba and declared a state-of-emergency.",
                outcome: "",
              },
              {
                date: "February 3, 2005",
                event:
                  "Former Prime Minister Deuba was placed under house arrest by police. The CPN-Maoist called for a three-day general strike.",
                outcome: "",
              },
              {
                date: "February 7, 2005",
                event:
                  "Nepal government security forces clashed with Maoist rebels in the districts of Dailekh and Achham.",
                outcome: "Deaths of at least 5 rebels.",
              },
              {
                date: "February 10, 2005",
                event:
                  "government security forces clashed with Maoist rebels in Rajapur in Bardia district.",
                outcome: "Deaths of two rebels.",
              },
              {
                date: "February 13, 2005 – February 27, 2005",
                event: "Maoist rebels blocked highways throughout the country.",
                outcome: "",
              },
              {
                date: "February 22, 2005",
                event:
                  "The governments of India, UK, and the U.S. government imposed military sanctions (suspension of military assistance and arms embargo) against the Nepalese government.",
                outcome: "",
              },
              {
                date: "February 23, 2005",
                event:
                  "European Parliament adopted a resolution condemning the “royal coup” in Nepal and urged King Gyanendra to lift the state of emergency.",
                outcome: "",
              },
              {
                date: "February 27, 2005",
                event:
                  "Maoists attacked government security forces in the districts of Bara and Solukhumbu.",
                outcome: "Deaths of at least 10 government soldiers.",
              },
              {
                date: "March 6, 2005",
                event:
                  "Maoist rebels killed five civilians in the village of Kudarmatewa in Kapilavastu district.",
                outcome: "",
              },
              {
                date: "April 7, 2005 – April 8, 2005",
                event:
                  "Maoist rebels attacked a government military base in Khara in Rukum district.",
                outcome:
                  "Deaths of approximately 300 rebels and 3 government soldiers.",
              },
              {
                date: "April 13, 2005",
                event:
                  "Government security forces clashed with Maoist rebels in Dalphing in Rukum district.",
                outcome: "Deaths of some 60 rebels.",
              },
              {
                date: "April 16, 2005",
                event:
                  "Maoist rebels killed ten civilians in Baragdawa in Nawalparasi district.",
                outcome: "",
              },
              {
                date: "April 23, 2005",
                event:
                  "5 children were killed in a bomb explosion in Pakhapani in Rolpa district.",
                outcome: "",
              },
              {
                date: "April 30, 2005",
                event: "King Gyanendra lifted the state-of-emergency.",
                outcome: "",
              },
              {
                date: "May 7, 2005",
                event:
                  "The UN Office of the High Commissioner for Human Rights (OHCHR) established a human rights monitoring mission involving some 50 monitors in Nepal.",
                outcome: "",
              },
              {
                date: "May 10, 2005",
                event:
                  "The Indian government lifted military sanctions (arms embargo) against the Nepalese government.",
                outcome: "",
              },
              {
                date: "May 15, 2005",
                event:
                  "Nepal government security forces clashed with Maoist rebels in Jarayatar in Sindhuli district.",
                outcome:
                  "Deaths of at least 50 rebels and 2 government soldiers.",
              },
              {
                date: "June 2005",
                event:
                  "The Chinese government provided military assistance to the Nepalese government, including 5 armored personnel carriers, weapons, and ammunition.",
                outcome: "",
              },
              {
                date: "June 6, 2005",
                event:
                  "A passenger bus hit a landmine in Mudhekhola in Chitwan district.",
                outcome:
                  "Deaths of at least 36 civilians and 3 government soldiers.",
              },
              {
                date: "June 6, 2005",
                event:
                  "Maoist rebels attacked government security forces in Kailali district",
                outcome: "Deaths of 7 government security personnel.",
              },
              {
                date: "June 10, 2005",
                event:
                  "Maoist rebels attacked a passenger bus near Mangaltar in Kavre district.",
                outcome: "Deaths of 6 government soldiers and 2 civilians.",
              },
              {
                date: "June 14, 2005",
                event:
                  "Maoist rebels killed seven civilians in Attariya in Kailali district.",
                outcome: "",
              },
              {
                date: "June 19, 2005",
                event:
                  "Maoist rebels attacked government security forces in Diktel in Khotang district.",
                outcome: "Deaths of at least 5 government soldiers.",
              },
              {
                date: "June 24, 2005",
                event:
                  "Maoist rebels attacked government security forces in Pandhare in Bhojpur district.",
                outcome:
                  "Deaths of eight government soldiers and one government policeman.",
              },
              {
                date: "June 25, 2005",
                event:
                  "Maoist rebels attacked government security forces in Khandaha in Arghakhanchi district.",
                outcome: "Deaths of at least 12 government soldiers.",
              },
              {
                date: "July 6, 2005",
                event:
                  "Indian government sent its first shipment of military equipment to Nepal since lifting military sanctions.",
                outcome: "",
              },
              {
                date: "July 22, 2005",
                event:
                  "Maoist rebels ambushed government security forces near Goltakuri Rajkot in Dang district.",
                outcome: "Deaths of at least 7 government soldiers.",
              },
              {
                date: "August 7, 2005",
                event:
                  "Maoist rebels attacked government security forces in Pili in Kalikot district",
                outcome: "Deaths of some 50 government soldiers.",
              },
              {
                date: "August 22, 2005",
                event:
                  "Four government security personnel were killed when their vehicle hit a landmine in Manigram in Rupandehi district.",
                outcome: "",
              },
              {
                date: "August 26, 2005",
                event:
                  "Five government security personnel were killed when their vehicle hit an improvised explosive device (IED) in Khairanpur in Kapilavastu district.",
                outcome: "",
              },
              {
                date: "September 3, 2005",
                event: "Maoist rebels declared a unilateral ceasefire.",
                outcome: "",
              },
              {
                date: "November 22, 2005",
                event:
                  "Several political parties signed an agreement to “end the absolute Monarchy and establish full democracy.”",
                outcome: "",
              },
              {
                date: "January 2, 2006",
                event: "Maoist rebels ended their unilateral ceasefire",
                outcome: "",
              },
              {
                date: "January 5, 2006",
                event:
                  "Maoist rebels attacked government security personnel in Nepalgunj in Banke district.",
                outcome: "Deaths of 3 government security personnel.",
              },
              {
                date: "January 11, 2006",
                event:
                  "Maoist rebels attacked targets in Dhangadhi in Kailali district.",
                outcome: "Deaths of 7 government security personnel.",
              },
              {
                date: "January 20-24, 2006",
                event:
                  "Maoist rebels attacked a government police station and other locations in Nepalgunj in Banke district.",
                outcome:
                  "Deaths of 8 government security personnel, 1 rebel, and 1 civilian.",
              },
              {
                date: "January 27, 2006",
                event:
                  "Maoist rebels attacked government security forces in Hatuwagadhi in Bhojpur district.",
                outcome:
                  "Deaths of 11 rebels and 2 government security personnel.",
              },
              {
                date: "January 31, 2006",
                event:
                  "Maoist rebels attacked government security forces in Tansen in Palpa district.",
                outcome:
                  "Deaths of 11 government security personnel and 4 rebels.",
              },
              {
                date: "February 2, 2006",
                event:
                  "Tribeni Majhi, a candidate for the Nepal Sadbhawana Party (NSP) was killed by gunmen at his home in Biratnagar in Morang district.",
                outcome: "",
              },
              {
                date: "February 7, 2006",
                event:
                  "Maoist rebels attacked government administrative facilities in Dhankuta district.",
                outcome:
                  "Deaths of 5 government soldiers in Triyuga in Udayapur district.",
              },
              {
                date: "February 8, 2006",
                event:
                  "Local elections, which were boycotted by opposition political groups, were held.",
                outcome: "",
              },
              {
                date: "February 9, 2006",
                event:
                  "Maoist rebels attacked government security forces in Nawalparasi district.",
                outcome:
                  "Deaths of 16 government security personnel, 4 rebels, and 1 civilian.",
              },
              {
                date: "February 16, 2006",
                event:
                  "Government troops launched a military offensive against Maoist rebels in the districts of Palpa and Nawalparasi.",
                outcome: "",
              },
              {
                date: "February 28, 2006",
                event:
                  "Government security forces clashed with Maoist rebels in the districts of Arghakhanchi and Palpa.",
                outcome:
                  "Deaths of 18 rebels and 11 government security personnel.",
              },
              {
                date: "March 6, 2006",
                event:
                  "Maoist rebels attacked government security forces in Ilam district.",
                outcome:
                  "Deaths of 3 government security personnel, 4 rebels, and 2 civilians.",
              },
              {
                date: "March 8, 2006",
                event:
                  "Maoist rebels attacked government troops in Bharatpur in Chitwan district.",
                outcome: "Deaths of 2 government soldiers.",
              },
              {
                date: "March 10, 2006",
                event:
                  "Government soldiers clashed with Maoist rebels in Ilam district.",
                outcome: "Deaths of 7 government soldiers.",
              },
              {
                date: "March 20, 2006",
                event:
                  "Maoist rebels ambushed government troops in Kavre district.",
                outcome: "Deaths of 13 government soldiers.",
              },
              {
                date: "March 21, 2006",
                event:
                  "Maoist rebels attacked a government police station in Birtamod in Jhapa district",
                outcome: "Deaths of 9 government policemen and 3 rebels.",
              },
              {
                date: "March 22, 2006",
                event:
                  "Maoist rebels attacked government security forces in Urlabari in Morang district.",
                outcome: "Deaths of 2 government policemen and 3 rebels.",
              },
              {
                date: "April 4, 2006 - April 24, 2006",
                event: "Pro-democracy protests took place in Kathmandu.",
                outcome: "",
              },
              {
                date: "April 5, 2006",
                event:
                  "Government police clashed with Maoist rebels in Malangwa in Sarlahi district.",
                outcome: "Deaths of 5 government policemen and 4 rebels.",
              },
              {
                date: "April 7, 2006",
                event:
                  "Maoist rebels attacked government security forces in the districts of Butwal and Kapilavastu.",
                outcome: "Deaths of 4 rebels and 2 civilians.",
              },
              {
                date: "April 13, 2006",
                event:
                  "UN Secretary-General Kofi Annan appealed for negotiations between the parties.",
                outcome: "",
              },
              {
                date: "April 23, 2006",
                event:
                  "Maoist rebels attacked government military bases in Chautara in Sindhupalchowk district.",
                outcome:
                  "Deaths of 5 rebels, 1 government soldier, and 3 civilians",
              },
              {
                date: "April 24, 2006",
                event:
                  "deaths of five rebels, one government soldier, and three civilians.",
                outcome: "",
              },
              {
                date: "April 25, 2006",
                event:
                  "King Gyanendra appointed Girija Prasad Koirala of the NC as prime minister.",
                outcome: "",
              },
              {
                date: "April 29, 2006",
                event:
                  "Maoist rebels attacked government police stations in the districts of Rupandehi and Kapilavastu. The same day, 8 government soldiers were killed by landmines in Tamghas in Gulmi district.",
                outcome: "Deaths of 4 rebels and 2 civilians.",
              },
              {
                date: "May 3, 2006",
                event:
                  "The government declared a ceasefire with Maoist rebels.",
                outcome: "",
              },
              {
                date: "May 26, 2006",
                event:
                  "Representatives of the government and Maoist rebels began negotiations.",
                outcome: "",
              },
              {
                date: "August 25, 2006",
                event:
                  "UN Secretary-General Kofi Annan appointed Ian Martin of the UK as a personal representative to facilitate negotiations between the government and Maoist rebels.",
                outcome: "",
              },
              {
                date: "November 21, 2006",
                event:
                  "Representatives of the Nepalese government and Maoist rebels signed a peace agreement.",
                outcome:
                  "More than 17,000 individuals were killed and more than 100,000 individuals were displaced during the conflict.",
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
                date: "November 28, 2006",
                event:
                  "Representatives of the Nepalese government and Maoist rebels signed the Agreement on Monitoring of Management of Arms and Armies (AMMAA).",
                outcome: "",
              },
              {
                date: "January 15, 2007",
                event: "An interim constitution went into effect.",
                outcome: "",
              },
              {
                date: "January 19, 2007 - February 28, 2007",
                event:
                  "Groups representing the Madhesi ethnic community in southern Nepal, which comprise more than one-third of the country’s population, protested against the interim government.",
                outcome: "Deaths of 24 individuals.",
              },
              {
                date: "January 23, 2007",
                event:
                  "UN Security Council established the United Nations Mission in Nepal (UNMIN) to monitor the disarmament of rebels, to monitor the ceasefire, to provide electoral assistance, and to monitor human rights conditions. At maximum strength, UNMIN consisted of a maximum of 186 civilian arms monitors from 41 countries.",
                outcome: "",
              },
              {
                date: "February 8, 2007",
                event:
                  "Ian Martin of the UK was appointed as UN Special Representative and Head of UNMIN",
                outcome: "",
              },
              {
                date: "March 21, 2007",
                event:
                  "Some 27 individuals were killed in political violence in the town of Gaur.",
                outcome: "",
              },
              {
                date: "May 29, 2007",
                event:
                  "9 individuals were killed by bomb explosions in Bhutuke in Palpa district.",
                outcome: "",
              },
              {
                date: "September 2, 2007",
                event: "3 individuals were killed in bombings in Kathmandu",
                outcome: "",
              },
              {
                date: "September 16, 2007 - September 20, 2007",
                event:
                  "Some 20 individuals were killed in political violence in southern Nepal.",
                outcome: "",
              },
              {
                date: "September 18, 2007",
                event: "The Maoists withdrew from the interim government.",
                outcome: "",
              },
              {
                date: "December 17, 2007",
                event:
                  "Madhesi People’s Rights Forum, Nepal (Madhesi Jana Adhikar Forum, Nepal – MJFN) and the Nepal Sadbhawana Party (NSP) formed an alliance known as the United Madhesi Front (Samyukta Madhesi Morcha – SMM).",
                outcome: "",
              },
              {
                date: "December 26, 2007",
                event:
                  "The SMM launched a protest movement in the Terai region.",
                outcome: "",
              },
              {
                date: "February 9, 2008",
                event:
                  "The United Democratic Madhesi Front (Samyukta Loktantrik Madhesi Morcha – SLMM) was established when the Terai Madhesh Democratic Party (Terai Madhesh Loktantrik Party – TMLP) joined the SMM in the Madhesi protest movement in the Terai region.",
                outcome: "",
              },
              {
                date: "February 28, 2008",
                event:
                  "SLMM ended a 16-day general strike in the Terai region after signing an agreement with the government that allotted the Madhesi community thirty percent of the seats in the Constituent Assembly.",
                outcome: "",
              },
              {
                date: "March 3, 2008",
                event:
                  "Ten individuals, including four UNMIN arms monitors, died in a helicopter crash in Ramechhap district.",
                outcome: "",
              },
              {
                date: "March 18, 2008 – March 19, 2008",
                event:
                  "Three individuals, including a candidate representing the National People’s Front (NPF), were killed in political violence.",
                outcome: "",
              },
              {
                date: "April 8, 2008",
                event:
                  "Government police killed six Maoists during clashes in Dang district.",
                outcome: "",
              },
              {
                date: "April 8, 2008 – April 9, 2008",
                event:
                  "Two individuals were killed in political violence in Surkhet.",
                outcome: "",
              },
              {
                date: "April 10, 2008",
                event:
                  "Some 23 individuals were killed in pre-election violence throughout Nepal. Elections were held.",
                outcome:
                  "CPN-Maoists won 220 out of 575 elected seats in the Constituent Assembly. The NC won 110 in the Constituent Assembly.",
              },
              {
                date: "March 2, 2008 - May 10, 2008",
                event:
                  "The European Union (EU) sent 120 observers from 24 countries – including ten election experts, 40 long-term observers, and 70 short-term observers – led by Jan Mulder from the Netherlands to monitor the elections. The European Parliament (EP) also sent a seven member delegation headed by Josep Borrell Fontelles from Spain to monitor the elections. The Japanese government sent 24 observers to monitor the elections. The Asian Network for Free Elections (ANFREL) sent five core team members, 20 long-term observers, and 80 short-term observers from 24 countries led by General Saiyud Kerdphol of Thailand to monitor the elections. The Atlanta-based NGO, The Carter Center, sent 13 long-term observers and 62 short-term observers from more than 20 countries to monitor the elections. One politician from the RPP was killed in political violence.",
                outcome: "",
              },
              {
                date: "May 28, 2008",
                event:
                  "The Constituent Assembly convened and formally voted to abolished the Nepalese monarchy.",
                outcome: "",
              },
              {
                date: "July 21, 2008",
                event:
                  "The Constituent Assembly proclaimed the Federal Democratic Republic of Nepal and elected Ram Baran Yadav of the NC as president.",
                outcome: "",
              },
              {
                date: "July 23, 2008",
                event: "Ram Baran Yadav was sworn in as president.",
                outcome: "",
              },
              {
                date: "August 15, 2008",
                event:
                  "The Constituent Assembly elected Pushpa Kamal Dahal (“Prachanda”) of the CPN-Maoists as prime minister.",
                outcome: "",
              },
              {
                date: "August 18, 2008",
                event: "Pushpa Kamal Dahal was sworn in as prime minister.",
                outcome: "",
              },
              {
                date: "October 14, 2008",
                event:
                  "Three individuals were killed in a bombing in Rautahat district.",
                outcome: "",
              },
              {
                date: "February 6, 2009",
                event:
                  "Karin Landgren of Sweden replaced Ian Martin of the UK as UN Special Representative and Head of UNMIN.",
                outcome: "",
              },
              {
                date: "May 4, 2009",
                event: "Prime Minister Pushpa Kamal Dahal resigned.",
                outcome: "",
              },
              {
                date: "May 23, 2009",
                event:
                  "Madhav Kumar Nepal of the CPN-UML was elected as the new prime minister of Nepal by the Constituent Assembly.",
                outcome: "",
              },
              {
                date: "May 23, 2009",
                event:
                  "Two individuals were killed in a bombing of a Roman Catholic Church in Kathmandu.",
                outcome: "",
              },
              {
                date: "May 25, 2009",
                event:
                  "Prime Minister Madhav Kumar Nepal was sworn in by the president.",
                outcome: "",
              },
              {
                date: "December 7, 2009",
                event:
                  "The government of India agreed to resume military assistance to the government.",
                outcome: "",
              },
              {
                date: "May 1, 2010 – May 7, 2010",
                event:
                  "The CPN-Maoists staged a nationwide general strike in protest against the government.",
                outcome: "",
              },
              {
                date: "June 30, 2010",
                event:
                  "Prime Minister Madhav Kumar Nepal announced his resignation.",
                outcome: "",
              },
              {
                date: "January 15, 2011",
                event: "UNMIN was disbanded.",
                outcome: "",
              },
              {
                date: "February 3, 2011",
                event:
                  "Jhala Nath Khanal of the CPN-UML was elected prime minister by the Constituent Assembly.",
                outcome: "",
              },
              {
                date: "August 14, 2011",
                event: "Prime Minister Jhala Nath Khanal resigned.",
                outcome: "",
              },
              {
                date: "August 28, 2011",
                event:
                  "Baburam Bhattarai of the CPN-Maoists was elected prime minister by the Constituent Assembly",
                outcome: "",
              },
              {
                date: "September 4, 2011",
                event:
                  "Prime Minister Baburam Bhattarai appointed several individuals to his cabinet, including seven Maoists.",
                outcome: "",
              },
              {
                date: "February 27, 2012",
                event:
                  "The United Ethnic Liberation Front (Samyukta Jatiya Mukti Morcha – SJMM) claimed responsibility for exploding a bomb near the central offices of the Nepal Oil Corporation (NOC) in Kathmandu.",
                outcome: "Deaths of 3 individuals.",
              },
              {
                date: "April 30, 2012",
                event:
                  "JTMM took responsibility for a bomb explosion at a political rally in Janakpur.",
                outcome: "Deaths of at least 4 individuals.",
              },
              {
                date: "May 3, 2012",
                event:
                  "Prime Minister Baburam Bhattarai’s cabinet ministers resigned so that the prime minister could appoint a “national consensus” government.",
                outcome: "",
              },
              {
                date: "May 28, 2012",
                event:
                  "The Constituent Assembly failed to adopt a new constitution before its dissolution.",
                outcome: "",
              },
              {
                date: "May 28, 2012",
                event:
                  "3 political parties withdrew from the governing coalition led by Prime Minister Baburam Bhattarai.",
                outcome: "",
              },
              {
                date: "June 19, 2012",
                event:
                  "A hard-line faction of the CPN-Maoists led by Khadga Bahadur Bishwakarma announced that it had established a new political party.",
                outcome: "",
              },
              {
                date: "March 14, 2013",
                event:
                  "Khil Raj Regmi, Chief Justice of Nepal, was sworn in as interim prime minister following the resignation of Prime Minister Baburam Bhattarai. The Nepal Supreme Court suspended the government’s attempt to establish a Truth and Reconciliation Commission to investigate war crimes committed during the civil war.",
                outcome: "",
              },
              {
                date: "November 19, 2013",
                event: "Elections were held.",
                outcome:
                  "NC won 196 out of 575 elected seats in the Constituent Assembly (Sambidhan Sabha). The CPN-UML won 175 seats in the Constituent Assembly.",
              },
              {
                date: "October 17, 2013 - November 20, 2013",
                event:
                  "The EU sent 34 long-term observers and 40 short-term observers to monitor the elections.",
                outcome:
                  "The Japanese government sent observers to monitor the constituent assembly elections. The Atlanta-based NGO, The Carter Center, sent 12 long-term observers and 54 short-term observers led by former U.S. President Jimmy Carter and former Deputy Prime Minister Surakiart Sathirathai of Thailand to monitor the constituent assembly elections. The ANFREL sent ten long-term observers and 40 short-term observers from 22 countries to monitor the elections.",
              },
              {
                date: "",
                event: "",
                outcome:
                  "The CPN-Maoists boycotted the elections for the Constituent Assembly.",
              },
              {
                date: "February 10, 2014",
                event:
                  "Constituent Assembly elected Sushil Prasad Koirala of the NC as prime minister with the support of members of the CPN-UML.",
                outcome: "",
              },
              {
                date: "February 28, 2015",
                event:
                  "Nepal government police clashed with protesters in Kathmandu opposed to the government’s proposed new constitution.",
                outcome: "",
              },
              {
                date: "June 9, 2015",
                event:
                  "Representatives of the four main political parties in Nepal signed an agreement on the framework for a new constitution that would divide the country into eight provinces.",
                outcome: "",
              },
              {
                date: "August 24, 2015",
                event:
                  "government police clashed with protesters, mainly from the Tharu community, in Tikapur in Kailali district, resulting in the deaths of six government policemen and three protesters.",
                outcome: "",
              },
              {
                date: "August 25, 2015",
                event:
                  "Prime Minister Narendra Modi of India “appealed to the government, all political parties and the people of Nepal to eschew violence and maintain social harmony.” In addition, Rupert Colville, spokesperson for the U.N. High Commissioner for Human Rights (UNHCHR), urged the Nepalese government “to create a climate where minority or dissenting views or beliefs are respected, and security forces only employ force as a last resort.”",
                outcome: "",
              },
              {
                date: "September 1, 2015",
                event:
                  "Nepal government police clashed with Madhesi protesters in the districts of Parsa and Bara.",
                outcome: "Deaths of 5 protesters.",
              },
              {
                date: "September 3, 2015",
                event:
                  "UN spokesperson Stephane Dujarric said UN Secretary-General Ban Ki-moon “urges all to refrain from the use of force, denounce violence in all forms and engage in dialogue.”",
                outcome: "",
              },
              {
                date: "September 11, 2015",
                event:
                  "Nepal government police clashed with protesters in the districts of Mahottari and Dhanusha.",
                outcome: "Deaths of 1 government policeman and 3 protesters.",
              },
              {
                date: "September 16, 2015",
                event:
                  "Nepal government police clashed with protesters in southern Nepal.",
                outcome: "Deaths of four protesters.",
              },
              {
                date: "September 16, 2015",
                event: "The Constituent Assembly adopted a new constitution.",
                outcome: "",
              },
              {
                date: "September 20, 2015",
                event:
                  "Sixty-six members of the Constituent Assembly, representing the Tharu and Madhesi communities, abstained in the vote on the new constitution. The Constituent Assembly was converted into a unicameral legislature after the constitution was promulgated by President Ram Baran Yadav.",
                outcome: "",
              },
              {
                date: "September 23, 2015",
                event:
                  "The SLMM, which demanded amendments to Nepal’s constitution, launched a blockade of the highways between southern Nepal and India.",
                outcome:
                  "The blockade caused significant delays in imports of petroleum, medicines, and other items from India.",
              },
              {
                date: "September 24, 2015",
                event:
                  "Indian government urged the Nepalese government to address the concerns of the ethnic Madhesi community regarding the new constitution.",
                outcome: "",
              },
              {
                date: "October 1, 2015",
                event:
                  "The Nepalese government accused the Indian government of imposing an “undeclared blockade” against Nepal, but the Indian government denied the accusation.",
                outcome: "",
              },
              {
                date: "October 10, 2015",
                event: "Prime Minister Sushil Prasad Koirala resigned.",
                outcome: "",
              },
              {
                date: "October 11, 2015",
                event:
                  "Khadga Prasad Sharma Oli of the CPN-UML was elected prime minister by the unicameral legislature.",
                outcome: "",
              },
              {
                date: "October 28, 2015",
                event:
                  "Bidya Devi Bhandari of the CPN-UML was elected president by Nepal’s electoral college with 60 percent of the vote",
                outcome: "",
              },
              {
                date: "November 1, 2015",
                event:
                  "Nepal government police clashed with ethnic Madhesi protesters in Birgunj in Parsa district.",
                outcome: "Death of 1 individual.",
              },
              {
                date: "November 11, 2015",
                event:
                  "UN Secretary-General Ban Ki-moon appealed to all sides to lift the blockade at the India-Nepal border.",
                outcome: "",
              },
              {
                date: "November 21, 2015 – November 22, 2015",
                event:
                  "Nepal government police clashed with ethnic Madhesi protesters in Saptari district.",
                outcome:
                  "Death of 1 protester in Bhardaha, 1 protester in Rupani, and 1 protester in Rajbiraj.",
              },
              {
                date: "December 20, 2015",
                event:
                  "Nepal government police clashed with ethnic Madhesi protesters in the town of Gaur in Rautahat district.",
                outcome: "Death of 1 protester.",
              },
              {
                date: "January 21, 2016",
                event:
                  "Nepal government police clashed with ethnic Madhesi protesters in Gainiya and Rangeli in Morang district.",
                outcome: "Deaths of 3 individuals.",
              },
              {
                date: "January 24, 2016",
                event:
                  "Nepalese parliament approved a amendment to the constitution to address some of the opposition to the constitution. However, members of parliament representing the Madhesi community rejected the constitutional amendment and walked out of the chambers prior to the vote.",
                outcome: "",
              },
              {
                date: "February 8, 2016",
                event:
                  "The SLMM ended their blockade of highways in southern Nepal.",
                outcome:
                  "More than 50 individuals were killed in the protests against the new constitution.",
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
                date: "May 15, 2016",
                event:
                  "Nepal government police clashed with supporters of Madhesi and Janajati political parties in Kathmandu.",
                outcome: "",
              },
              {
                date: "July 12, 2016",
                event:
                  "Former prime minister Baburam Bhattarai announced the establishment of the New Force Nepal (Naya Shakti Nepal – NSN).",
                outcome: "",
              },
              {
                date: "July 24, 2016",
                event: "Prime Minister Khadga Prasad Sharma Oli resigned.",
                outcome: "",
              },
              {
                date: "August 4, 2016",
                event:
                  "Pushpa Kamal Dahal (Prachanda) formed a coalition government as prime minister, including support from the Communist Party of Nepal-Maoist Center (CPN-MC), NC, and SLMM.",
                outcome: "",
              },
              {
                date: "March 6, 2017",
                event:
                  "Nepal government security forces clashed with Madheshi protesters in Saptari district.",
                outcome: "Deaths of 5 protesters.",
              },
              {
                date: "March 15, 2017",
                event:
                  "SLMM withdrew its support for the coalition government headed by Prime Minister Pushpa Kamal Dahal (Prachanda) and announced a boycott of upcoming local elections.",
                outcome: "",
              },
              {
                date: "April 26, 2017",
                event:
                  "6 Madheshi political parties unified to form the Rashtriya Janata Party Nepal (RJPN).",
                outcome: "",
              },
              {
                date: "May 14, June 28, and September 18, 2017",
                event: "Local elections were held.",
                outcome:
                  "The CPN-UML won 294 out of 753 locals races for mayor.",
              },
              {
                date: "May 24, 2017",
                event:
                  "Prime Minister Pushpa Kamal Dahal (Prachanda) submitted his resignation as head of the coalition government.",
                outcome: "",
              },
              {
                date: "June 7, 2017",
                event:
                  "Sher Bahadur Deuba was sworn in as prime minister and head of the coalition government.",
                outcome: "",
              },
              {
                date: "November 26 and December 7, 2017",
                event:
                  "Parliamentary elections were held. The EU sent ten core team members, 38 long-term observers, and 44 short-term observers led by Željana Zovko of Croatia to monitor the parliamentary elections from October 25 to December 9, 2017. The ANFREL sent five short-term observers to monitor the elections from November 21 to December 10, 2017. The Atlanta-based NGO, The Carter Center, sent five core team experts, 14 long-term observers, and 50 short-term observers from 34 countries led by former Deputy Prime Minister Surakiart Sathirathai of Thailand and former U.S. Ambassador Peter Burleigh to monitor the parliamentary elections.",
                outcome:
                  "CPN-UML won 121 out of 275 seats in the House of Representatives. The NC won 63 seats in the House of Representatives.",
              },
              {
                date: "February 15, 2018",
                event:
                  "Khadga Prasad Sharma Oli of the CPN-UML was appointed as prime minister.",
                outcome: "",
              },
              {
                date: "May 17, 2018",
                event:
                  "Nepal Communist Party (NCP) was established with the merger of the CPN-UML and the CPN-MC.",
                outcome: "",
              },
              {
                date: "May 26, 2019",
                event:
                  "At least four individuals were killed in bombings in Kathmandu.",
                outcome: "",
              },
              {
                date: "December 2, 2020",
                event:
                  "The RPP organized pro-monarchy demonstrations in Hetauda, Jhapa, and Kathmandu.",
                outcome: "",
              },
              {
                date: "December 20, 2020",
                event:
                  "President Bidya Devi Bhandari dissolved the House of Representatives following a recommendation by the government headed by Prime Minister Khadga Prasad Sharma Oli.",
                outcome: "",
              },
              {
                date: "December 29, 2020",
                event:
                  "Some 10,000 individuals demonstrated against the government in Kathmandu.",
                outcome: "",
              },
              {
                date: "January 11, 2021",
                event:
                  "Nepal government police clashed with pro-monarchy protesters in Kathmandu.",
                outcome: "",
              },
              {
                date: "January 22, 2021",
                event:
                  "Some 25,000 individuals demonstrated against the government.",
                outcome: "",
              },
              {
                date: "January 25, 2021",
                event:
                  "Prime Minister Khadga Prasad Sharma Oli was expelled from the NCP to protest his decision to dissolve the House of Representatives.",
                outcome: "",
              },
              {
                date: "February 23, 2021",
                event:
                  "Nepal Supreme Court reinstated the House of Representatives.",
                outcome: "",
              },
              {
                date: "March 4, 2021",
                event:
                  "Nepal government signed an agreement with a Maoist splinter group led by Netra Bikram Chand to abandon violence and participate in the political process in Nepal.",
                outcome:
                  "Under the agreement, the government agreed to lift the ban on the group and to release more than 100 members of the group currently in prison.",
              },
              {
                date: "March 8, 2021",
                event:
                  "Following a decision by the Nepal Supreme Court regarding the name of the party, the NCP was dissolved.",
                outcome: "",
              },
              {
                date: "May 10, 2021",
                event:
                  "Prime Minister Khadga Prasad Sharma Oli lost a vote of confidence in the House of Representatives.",
                outcome: "",
              },
              {
                date: "May 13, 2021",
                event:
                  "Khadga Prasad Sharma Oli was re-appointed as prime minister.",
                outcome: "",
              },
              {
                date: "May 22, 2021",
                event:
                  "President Bidya Devi Bhandari dissolved the House of Representatives for the second time in six months.",
                outcome: "",
              },
              {
                date: "July 12, 2021",
                event:
                  "The Nepal Supreme Court reinstated the House of Representatives, ruling that the dissolution of the House of Representatives was unconstitutional.",
                outcome:
                  "The Supreme Court also ordered the appointment of Sher Bahdur Deuba of the NC as prime minister.",
              },
              {
                date: "July 13, 2021",
                event:
                  "President Bidya Devi Bhandari formally appointed Sher Bahdur Deuba as prime minister.",
                outcome: "",
              },
              {
                date: "July 18, 2021",
                event:
                  "Prime Minister Sher Bahdur Deuba won a vote of confidence by a 165-83 margin in the House of Representatives.",
                outcome: "",
              },
              {
                date: "February 16, 2022 – February 20, 2022",
                event:
                  "Government police clashed with protesters in Kathmandu. The protests were organized in opposition to ratification of the Millennium Challenge Corporation (MCC) Agreement, which was signed by the governments of Nepal and the U.S.",
                outcome: "",
              },
              {
                date: "February 27, 2022",
                event:
                  "House of Representatives ratified the Millennium Challenge Corporation (MCC) Agreement, in which the U.S. government agreed to provide a $500 million grant to fund infrastructure projects in Nepal.",
                outcome: "",
              },
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "economic", "national"],
      involved: [
        { name: "KP Sharma Oli", role: "Prime Minister (2018-2021)" },
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Prime Minister" },
        { name: "Sher Bahadur Deuba", role: "Prime Minister (2021-2022)" },
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
