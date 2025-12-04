import type { Timeline } from "@/types/timeline";

export const worldHistory: Timeline = {
  id: "world-history",
  title: "World History",
  description: "Major events that shaped human civilization",
  involved: [
    { name: "UNESCO", role: "Heritage Organization" },
    { name: "Various Historians", role: "Contributors" },
  ],
  coverMedia: {
    src: "/timelines/world-history/f9a12ef6.avif",
    sourceUrl: "/world-history-globe.jpg",
    alt: "World History Icon",
  },
  entries: [
    {
      id: "1",
      date: "3000-01-01",
      title: "Invention of Writing",
      description:
        "The Sumerians in Mesopotamia develop <strong>cuneiform</strong>, one of the earliest known writing systems. This marks the beginning of recorded history.<ul><li>Enabled record-keeping and communication</li><li>Facilitated the growth of complex societies</li><li>Preserved knowledge for future generations</li></ul>",
      tags: ["Ancient", "Technology"],
      media: [
        {
          src: "/timelines/world-history/0edb8f05.avif",
          sourceUrl: "/ancient-sumerian-cuneiform-tablet.jpg",
          alt: "Ancient Sumerian cuneiform writing",
          caption:
            "Clay tablet with cuneiform script from ancient Mesopotamia, circa 3000 BCE",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Cuneiform",
          label: "Learn more",
        },
      ],
    },
    {
      id: "2",
      date: "0776-01-01",
      title: "First Olympic Games",
      description:
        "The ancient Olympic Games are held in <em>Olympia, Greece</em>, establishing a tradition that continues today.<ul><li>Brought together athletes from different city-states</li><li>Promoted peace during the games</li><li>Celebrated physical excellence and honor</li></ul>",
      tags: ["Ancient", "Sports"],
      media: [
        {
          src: "/timelines/world-history/33d9c367.avif",
          sourceUrl: "/ancient-olympic-games-greece-stadium.jpg",
          alt: "Ancient Olympic stadium in Greece",
          caption: "Ruins of the ancient Olympic stadium in Olympia, Greece",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
          label: "Learn more",
        },
      ],
    },
    {
      id: "3",
      date: "0221-01-01",
      title: "Qin Dynasty Unifies China",
      description:
        "<strong>Emperor Qin Shi Huang</strong> unifies China and begins construction of the <em>Great Wall</em>.<ul><li>Standardized writing, currency, and measurements</li><li>Built extensive road networks</li><li>Created a centralized government</li></ul>",
      tags: ["Ancient", "Asia"],
      involved: [{ name: "Qin Shi Huang", role: "First Emperor of China" }],
      media: [
        {
          src: "/timelines/world-history/6fcd529f.avif",
          sourceUrl: "/ancient-great-wall.png",
          alt: "The Great Wall of China",
          caption: "Section of the Great Wall built during the Qin Dynasty",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Qin_dynasty",
          label: "Learn more",
        },
      ],
    },
    {
      id: "4",
      date: "0476-09-04",
      title: "Fall of Western Roman Empire",
      description:
        "The last Roman emperor is deposed, marking the <strong>end of ancient Rome</strong> and beginning of the Middle Ages in Europe.<ul><li>Political fragmentation of Western Europe</li><li>Decline of urban centers and trade</li><li>Rise of feudalism and local powers</li></ul>",
      tags: ["Medieval", "Europe"],
      media: [
        {
          src: "/timelines/world-history/af41fb81.avif",
          sourceUrl: "/roman-empire-colosseum-ruins.jpg",
          alt: "Roman Empire ruins",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire",
          label: "Learn more",
        },
      ],
    },
    {
      id: "5",
      date: "1492-10-12",
      title: "Columbus Reaches the Americas",
      description:
        "<strong>Christopher Columbus</strong> lands in the Caribbean, initiating sustained contact between Europe and the Americas.<ul><li>Began the Columbian Exchange of goods and cultures</li><li>Led to European colonization</li><li>Transformed global trade and demographics</li></ul>",
      tags: ["Exploration"],
      involved: [
        { name: "Christopher Columbus", role: "Explorer" },
        { name: "Spanish Crown", role: "Sponsor" },
      ],
      media: [
        {
          src: "/timelines/world-history/f6e273d8.avif",
          sourceUrl: "/columbus-ship-sailing-ocean.jpg",
          alt: "Columbus ship sailing to Americas",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus",
          label: "Learn more",
        },
      ],
    },
    {
      id: "6",
      date: "1789-07-14",
      title: "French Revolution Begins",
      description:
        "The <em>storming of the Bastille</em> marks the start of the French Revolution, a period of radical social and political change.<ul><li>Overthrow of the monarchy</li><li>Declaration of the Rights of Man</li><li>Rise of democratic ideals</li></ul>",
      tags: ["Revolution", "Europe"],
      media: [
        {
          src: "/timelines/world-history/5b5eaaf1.avif",
          sourceUrl: "/bastille-fortress-french-revolution.jpg",
          alt: "Storming of the Bastille",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/French_Revolution",
          label: "Learn more",
        },
      ],
    },
    {
      id: "7",
      date: "1969-07-20",
      title: "Moon Landing",
      description:
        "Apollo 11 astronauts <strong>Neil Armstrong</strong> and <strong>Buzz Aldrin</strong> become the first humans to walk on the Moon.<ul><li>Demonstrated technological superiority</li><li>Inspired scientific advancement</li><li>United humanity in achievement</li></ul>",
      tags: ["Space", "Technology"],
      involved: [
        {
          name: "Neil Armstrong",
          role: "Commander",
        },
        {
          name: "Buzz Aldrin",
          role: "Lunar Module Pilot",
        },
        {
          name: "Michael Collins",
          role: "Command Module Pilot",
        },
      ],
      media: [
        {
          src: "/timelines/world-history/0c430f8e.avif",
          sourceUrl: "/astronaut-moon-landing-apollo-11.jpg",
          alt: "Astronaut on the moon",
          caption:
            "Buzz Aldrin on the lunar surface, photographed by Neil Armstrong",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Apollo_11",
          label: "Learn more",
        },
        {
          url: "https://www.nasa.gov/mission_pages/apollo/apollo-11.html",
          label: "NASA Archive",
        },
      ],
    },
    {
      id: "8",
      date: "1989-11-09",
      title: "Fall of the Berlin Wall",
      description:
        "The <em>Berlin Wall</em> falls, symbolizing the end of the Cold War and leading to German reunification.<ul><li>Reunited East and West Germany</li><li>Marked the decline of Soviet influence</li><li>Spread of democratic values</li></ul>",
      tags: ["Modern", "Europe"],
      media: [
        {
          src: "/timelines/world-history/aa03261d.avif",
          sourceUrl: "/berlin-wall-falling-people-celebrating.jpg",
          alt: "Berlin Wall being torn down",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Berlin_Wall",
          label: "Learn more",
        },
      ],
    },
  ],
};
