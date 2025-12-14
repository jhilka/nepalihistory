import type { Timeline } from "@/types/timeline";

export const earthquakesInNepal: Timeline = {
  id: "earthquakes-nepal",
  title: "Major Earthquakes in Nepal",
  description:
    "Nepal sits on one of the most active seismic zones in the world. Roughly every 80–100 years a great earthquake strikes the country, repeatedly destroying Kathmandu Valley and forcing entire generations to rebuild.",
  period: { start: 1255, end: 2025 },
  tags: ["natural-disaster", "national", "social", "cultural"],
  involved: [
    { name: "Kathmandu Valley", role: "Most frequently devastated region" },
    {
      name: "Gorkha District",
      role: "Epicentre of 1934 and 2015 great earthquakes",
    },
    {
      name: "National Seismological Centre & NSET",
      role: "Monitoring and preparedness",
    },
  ],
  coverMedia: {
    src: "/timelines/earthquakes-nepal/177e5073.avif",
    sourceUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/150430100137-02-nepal-baby.jpg?q=w_4375,h_2718,x_0,y_0,c_fill",
    alt: "Collapsed Dharahara Tower after 2015 Gorkha Earthquake",
    caption:
      "Dharahara (Bhimsen Tower) destroyed for the third time in less than 200 years (1833, 1934, 2015).",
  },
  entries: [
    {
      id: "1",
      date: "1255-06-07",
      title: "Great Medieval Earthquake",
      description: (
        <>
          <p>
            <strong>Magnitude ~8.0</strong>
          </p>
          <p>
            One of the earliest recorded Himalayan mega-quakes. Struck during
            the reign of King Abhaya Malla.
          </p>
          <ul>
            <li>
              Killed about one-third of the Kathmandu Valley population,
              including the king
            </li>
            <li>Thousands of homes and temples destroyed</li>
            <li>
              Triggered a political succession crisis in the Malla kingdom
            </li>
          </ul>
        </>
      ),
      tags: ["Medieval", "Catastrophic"],
      casualties: 30000,
      media: [
        {
          src: "/timelines/earthquakes-nepal/83d8a660.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/56/Nepaul_valley_map_1802.jpg",
          alt: "Historical Kathmandu Valley",
          caption: "Kathmandu Valley during the Malla era.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1255_Nepal_earthquake",
          label: "1255 Nepal Earthquake",
        },
      ],
    },
    {
      id: "2",
      date: "1833-08-26",
      title: "Bagmati Valley Earthquake",
      description: (
        <>
          <p>
            <strong>Magnitude 7.7</strong>
          </p>
          <p>Known in Nepal as the “Bhadra 19” earthquake.</p>
          <ul>
            <li>
              Dharahara Tower collapsed for the first time only eight years
              after construction
            </li>
            <li>Over 500 deaths in Kathmandu alone</li>
            <li>
              Queen Rajya Laxmi Devi personally directed relief operations
            </li>
          </ul>
        </>
      ),
      tags: ["19th Century", "Dharahara"],
      casualties: 500,
      media: [
        {
          src: "/timelines/earthquakes-nepal/c3932729.avif",
          sourceUrl:
            "https://3.bp.blogspot.com/-IFAd6TWPK0c/UY5U-azJ2MI/AAAAAAAABCQ/7BM63E6Fzs4/s640/028.jpg",
          alt: "Dharahara before 1934",
          caption: "Dharahara rebuilt after 1833, before its second collapse.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1833_Nepal%E2%80%93India_earthquake",
          label: "1833 Nepal–India Earthquake",
        },
      ],
    },
    {
      id: "3",
      date: "1934-01-15",
      title: "Great Bihar-Nepal Earthquake",
      description: (
        <>
          <p>
            <strong>Magnitude 8.1</strong>
          </p>
          <p>The deadliest 20th-century earthquake in Nepal until 2015.</p>
          <ul>
            <li>8,500 deaths in Nepal (total ~20,000 including Bihar)</li>
            <li>Kathmandu Durbar Square and Dharahara destroyed again</li>
            <li>
              Rana regime used the disaster to strengthen authoritarian control
            </li>
          </ul>
        </>
      ),
      tags: ["20th Century", "Great Earthquake"],
      casualties: 8500,
      media: [
        {
          src: "/timelines/earthquakes-nepal/1ca4a643.avif",
          sourceUrl:
            "https://1.bp.blogspot.com/-pqrmloCy5bw/UY5VAOpo9HI/AAAAAAAABCw/5fAZciF62J8/s640/030.jpg",
          alt: "Dharahara tower after 1934 earthquake.",
          caption: "Dharahara tower after 1934 earthquake.",
        },
        {
          src: "/timelines/earthquakes-nepal/b57f9717.avif",
          sourceUrl:
            "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-nepalitimes/swp/asv65r/media/2023121410128_86bb2e274bae1d8e9f7470bc93b26fa687d8f7fe8956d1207aad4ea8e2805e4a.jpg",
          alt: "Kathmandu Durbar Square after the 1934 earthquake.",
          caption: "Kathmandu Durbar Square after the 1934 earthquake.",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1934_Nepal%E2%80%93India_earthquake",
          label: "1934 Nepal–Bihar Earthquake",
        },
      ],
    },
    {
      id: "4",
      date: "1988-08-21",
      title: "Udayapur Earthquake",
      description: (
        <>
          <p>
            <strong>Magnitude 6.9</strong>
          </p>
          <p>Epicentre near Udayapur in eastern Nepal.</p>
          <ul>
            <li>721 deaths and more than 6,500 injuries</li>
            <li>Over 66,000 buildings damaged or destroyed</li>
            <li>Revealed widespread violation of building codes</li>
          </ul>
        </>
      ),
      tags: ["Eastern Nepal"],
      media: [
        {
          src: "/timelines/earthquakes-nepal/e1c30afd.avif",
          sourceUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/1988_Nepal_earthquake_shake_map_USGS.jpg",
          alt: "1988 Nepal earthquake shake map",
          caption: "1988 Nepal earthquake shake map.",
        },
      ],
      casualties: 721,
      links: [
        {
          url: "https://en.wikipedia.org/wiki/1988_Nepal_earthquake",
          label: "1988 Nepal Earthquake",
        },
      ],
    },
    {
      id: "5",
      date: "2015-04-25",
      title: "Gorkha Earthquake (April 25 Mainshock)",
      description: (
        <>
          <p>
            <strong>Magnitude 7.8</strong>
          </p>
          <p>The most devastating earthquake in Nepal since 1934.</p>
          <ul>
            <li>8,962 deaths and over 22,300 injuries</li>
            <li>Nearly 900,000 homes destroyed or damaged</li>
            <li>
              UNESCO World Heritage sites in Kathmandu Valley heavily affected
            </li>
            <li>Triggered deadly avalanches on Mount Everest</li>
          </ul>
        </>
      ),
      tags: ["Great Earthquake", "21st Century"],
      casualties: 8962,
      media: [
        {
          src: "/timelines/earthquakes-nepal/177e5073.avif",
          sourceUrl:
            "https://media.cnn.com/api/v1/images/stellar/prod/150430100137-02-nepal-baby.jpg?q=w_4375,h_2718,x_0,y_0,c_fill",
          alt: "Dharahara collapsed 2015",
          caption:
            "Dharahara reduced to rubble for the third time in its history.",
        },
        {
          src: "/timelines/earthquakes-nepal/a4379d9d.avif",
          sourceUrl:
            "https://historysshadow.wordpress.com/wp-content/uploads/2015/04/82575688_82575687.jpg",
          alt: "House turned into rubbles",
          caption: "Rescue efforts are hampered by the extensive destruction",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/April_2015_Nepal_earthquake",
          label: "2015 Gorkha Earthquake",
        },
      ],
    },
    {
      id: "6",
      date: "2015-05-12",
      title: "Dolakha Aftershock (May 12)",
      description: (
        <>
          <p>
            <strong>Magnitude 7.3</strong>
          </p>
          <p>Major aftershock 17 days after the mainshock.</p>
          <ul>
            <li>218 additional deaths and thousands of injuries</li>
            <li>Completely destroyed villages already weakened in April</li>
            <li>Total death toll from the 2015 sequence exceeded 9,000</li>
          </ul>
        </>
      ),
      tags: ["Aftershock", "2015 Sequence"],
      casualties: 218,
      media: [
        {
          src: "/timelines/earthquakes-nepal/50fd7a59.avif",
          sourceUrl:
            "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2016/04/langtang-before-after-earthquake.jpg",
          alt: "Langtang village buried",
          caption:
            "Langtang village wiped out by a massive earthquake-triggered landslide.",
        },
      ],
    },
    {
      id: "7",
      date: "2023-10-03",
      title: "Bajura-Bajhang Earthquake",
      description: (
        <>
          <p>
            <strong>Magnitude 6.3</strong>
          </p>
          <p>Struck far-western Nepal.</p>
          <ul>
            <li>1 death, dozens injured</li>
            <li>Thousands of homes damaged in Bajura and Bajhang districts</li>
            <li>Reminder that western Nepal remains highly vulnerable</li>
          </ul>
        </>
      ),
      media: [
        {
          src: "/timelines/earthquakes-nepal/151ba480.avif",
          sourceUrl:
            "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/third-party/thumb-1674554378.gif&w=900&height=601",
          alt: "5.9 M earthquake with epicentre in Bajura recorded",
          caption: "House turned into rubbles",
        },
      ],
      tags: ["Western Nepal", "Recent"],
      casualties: 1,
    },
    {
      id: "8",
      date: "2025",
      title: "The Next Great Earthquake?",
      description: (
        <>
          <p>
            <strong>Potential Magnitude 8.5+</strong>
          </p>
          <p>
            Seismologists warn the central Himalayan seismic gap (western Nepal
            to Uttarakhand) has not ruptured in over 500 years.
          </p>
          <ul>
            <li>Kathmandu’s current population exceeds 4 million</li>
            <li>Most buildings still not earthquake-resistant</li>
            <li>Potential casualties could exceed 100,000</li>
          </ul>
          <p>
            Nepal continues to live under the constant shadow of the next great
            earthquake.
          </p>
        </>
      ),
      tags: ["Risk", "Future"],
      media: [
        {
          src: "/timelines/earthquakes-nepal/d485c389.avif",
          sourceUrl:
            "https://ars.els-cdn.com/content/image/1-s2.0-S0040195104003415-gr2.jpg",
          alt: "Central Himalayan seismic gap",
          caption: "The overdue central seismic gap in the Himalaya.",
        },
      ],
      links: [
        {
          url: "https://www.nset.org.np/",
          label: "National Society for Earthquake Technology – Nepal (NSET)",
        },
      ],
    },
  ],
};
