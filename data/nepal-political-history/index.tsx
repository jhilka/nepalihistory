import type { Timeline } from "@/types/timeline";
import React from "react";
import {
  eighthCategory,
  fifthCategory,
  firstCategory,
  forthCategory,
  secondCategory,
  seventhCategory,
  sixthCategory,
  thirdCategory,
  ninthCategory,
} from "./events";

const NO_OUTCOME_PLACEHOLDER = "";

const Table = ({
  data,
}: {
  data: { date: string; event: string; outcome: string }[];
}) => (
  <table>
    <tbody>
      {data.map((row, idx) => (
        <React.Fragment key={idx}>
          <tr>
            <td
              colSpan={2}
              className="bg-border/20 dark:bg-background/80"
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
  title: "Comprehensive political summary (1923 - 2025)",
  description:
    "A timeline of Nepal's political evolution from Rana oligarchy to democratic struggles, civil war, republican transition, federal system, and contemporary challenges.",
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
      role: "Figure in anti-Rana movement",
    },
    {
      name: "Bishweshwar Prasad Koirala",
      role: "Democracy advocate and prime minister",
    },
    {
      name: "King Mahendra Bir Bikram Shah",
      role: "Introduced Panchayat system",
    },
    {
      name: "Pushpa Kamal Dahal (Prachanda)",
      role: "Maoist leader and prime minister",
    },
    { name: "Khadga Prasad Sharma Oli", role: "Multiple-term prime minister" },
  ],

  coverMedia: {
    sourceUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tribhuvan_Bir_Bikram_Shah.jpg",
    alt: "King Tribhuvan of Nepal",
    caption: "King Tribhuvan, central to the events ending Rana rule.",
  },

  entries: [
    {
      id: "1",
      date: "1846",
      endDate: "1951",
      title: "Pre Democracy (Rana Rule) Era",
      description: (
        <>
          <p>
            Hereditary Rana prime ministers dominated governance, maintaining
            Nepal's isolation while gradual opposition built toward revolution.
          </p>
          <Table
            data={[...firstCategory, ...secondCategory, ...thirdCategory]}
          />
        </>
      ),
      tags: ["political", "social", "diplomatic", "military"],
      involved: [
        { name: "Chandra Shumsher Jang Bahadur Rana", role: "Prime Minister" },
        { name: "King Tribhuvan Bir Bikram Shah", role: "Monarch" },
        { name: "Subarna Shamsher Rana", role: "Liberation army leader" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Rana_dynasty",
          label: "Rana Dynasty",
        },
        {
          url: "https://en.wikipedia.org/wiki/1951_Nepalese_revolution",
          label: "1951 Revolution",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tribhuvan_Bir_Bikram_Shah.jpg",
          alt: "King Tribhuvan portrait",
          caption: "King Tribhuvan during the revolutionary period.",
        },
        {
          src: "/timelines/nepal-political-history/c3e7ca90.avif",
          sourceUrl:
            "https://english.onlinekhabar.com/wp-content/uploads/2020/08/Women-movement-1951.jpg",
          alt: "Women marching during 1951 revolution",
          caption: "Civilians active in the anti-Rana movement in 1951.",
        },
      ],
    },
    {
      id: "2",
      date: "1951",
      endDate: "1960",
      title: "Democratic Experiment Era",
      description: (
        <>
          <p>
            Short-lived multiparty system gave way to royal intervention and the
            Panchayat system.
          </p>
          <Table data={forthCategory} />
        </>
      ),
      tags: ["political", "constitutional"],
      involved: [
        { name: "Matrika Prasad Koirala", role: "Prime Minister" },
        { name: "Bishweshwar Prasad Koirala", role: "Elected Prime Minister" },
        { name: "King Mahendra Bir Bikram Shah", role: "Monarch" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1960_Nepalese_coup_d%27%C3%A9tat",
          label: "1960 Coup",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nepal_1959_general_election_voters_queue.jpg",
          alt: "1959 voters",
          caption:
            "Voters lining up during Nepal's first parliamentary election in 1959.",
        },
      ],
    },

    {
      id: "3",
      date: "1960",
      endDate: "1990",
      title: "Panchayat System Era",
      description: (
        <>
          <p>
            Partyless governance under royal direction lasted until mass
            protests restored multiparty politics.
          </p>
          <Table data={[...fifthCategory, ...sixthCategory]} />
        </>
      ),
      tags: ["political", "constitutional"],
      involved: [
        { name: "King Mahendra Bir Bikram Shah", role: "System founder" },
        { name: "King Birendra Bir Bikram Shah", role: "Monarch" },
        { name: "Ganesh Man Singh", role: "Movement leader" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Panchayat_(Nepal)",
          label: "Panchayat System",
        },
        {
          url: "https://en.wikipedia.org/wiki/1990_Nepalese_revolution",
          label: "1990 Movement",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/15D5/production/_112889820_nepal_protest_1990_afp.jpg",
          alt: "1990 protests",
          caption: "Crowds during Jana Andolan I in Kathmandu, 1990.",
        },
      ],
    },
    {
      id: "4",
      date: "1990",
      endDate: "2008",
      title: "Constitutional Monarchy to Republic Era",
      description: (
        <>
          <p>
            Multiparty democracy under monarchy faced instability, civil war,
            and eventual shift to republic.
          </p>
          <Table
            data={[
              ...seventhCategory,
              ...eighthCategory.filter(
                (e) => new Date(e.date).getFullYear() <= 2008
              ),
            ]}
          />
        </>
      ),
      tags: ["military", "political", "constitutional"],
      involved: [
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Insurgent leader" },
        { name: "King Gyanendra Bir Bikram Shah", role: "Last monarch" },
        { name: "Girija Prasad Koirala", role: "Negotiator" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Nepalese_Civil_War",
          label: "Civil War",
        },
        {
          url: "https://en.wikipedia.org/wiki/2006_Nepalese_revolution",
          label: "2006 Movement",
        },
      ],
      media: [
        {
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/96/Maoist_insurgents_in_Rolpa%2C_Nepal.jpg",
          alt: "Maoist insurgents in Nepal",
          caption: "Maoist combatants during the Nepalese Civil War.",
        },
        {
          sourceUrl:
            "https://cbsnews2.cbsistatic.com/hub/i/r/2006/04/20/c8b9e6a8-9a12-11e2-a3f0-029118418759/thumbnail/1200x630/e41f0e53f3d5ab7f7d05463e99e36fc0/image2246663.jpg",
          alt: "2006 protests in Kathmandu",
          caption: "Demonstrators in Jana Andolan II, April 2006.",
        },
      ],
    },
    {
      id: "5",
      date: "2008",
      endDate: "2025",
      title: "Republican Era",
      description: (
        <>
          <p>
            Nepal navigated republican transition, federal constitution,
            coalition governments, ethnic protests, and major crises including
            the 2025 youth-led uprising.
          </p>
          <Table
            data={[
              ...eighthCategory.filter(
                (e) => new Date(e.date).getFullYear() > 2008
              ),
              ...ninthCategory,
            ]}
          />
        </>
      ),
      tags: ["political", "constitutional", "social"],
      involved: [
        { name: "Ram Baran Yadav", role: "First President" },
        { name: "Pushpa Kamal Dahal (Prachanda)", role: "Prime Minister" },
        { name: "Khadga Prasad Sharma Oli", role: "Prime Minister" },
        { name: "Sushila Karki", role: "Interim Prime Minister 2025" },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Constitution_of_Nepal",
          label: "2015 Constitution",
        },
        {
          url: "https://en.wikipedia.org/wiki/2025_Nepalese_Gen_Z_protests",
          label: "2025 Protests",
        },
      ],
      media: [
        {
          src: "/timelines/nepal-political-history/8e5be588.avif",
          sourceUrl:
            "https://assets-cdn.kathmandupost.com/uploads/source/news/2015/miscellaneous/21092015075547PRESENTING_NEW_CONSTITUTION_CA_04.jpg",
          alt: "2015 constitution signing",
          caption:
            "Promulgation of Nepal’s 2015 federal constitution at CA Hall.",
        },
        {
          src: "/timelines/nepal-political-history/b196dea0.avif",
          sourceUrl:
            "https://cdn.britannica.com/30/277030-050-7B2C138B/singha-durbur-administrative-building-fire-nepal-government-social-media-ban-protests-september-2025.jpg",
          alt: "2025 protests parliament fire",
          caption:
            "Administrative building burning during the 2025 Gen Z protests.",
        },
        {
          src: "/timelines/nepal-political-history/b48af291.avif",
          sourceUrl:
            "https://www.aljazeera.com/wp-content/uploads/2025/09/2025-09-11T071814Z_1301895365_RC2FK5977XP1_RTRMADP_3_NEPAL-PROTESTS-INTERIM-PM-1757692741.jpg",
          alt: "Sushila Karki 2025",
          caption: "Interim leader Sushila Karki during the 2025 uprising.",
        },
      ],
    },
  ],
};
