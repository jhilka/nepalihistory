import type { Timeline } from "@/types/timeline";

export const technology: Timeline = {
  id: "technology",
  title: "History of Technology",
  description: "Innovations that transformed the modern world",
  media: {
    url: "/technology-innovation-chip.jpg",
    alt: "Technology Icon",
  },
  events: [
    {
      id: "1",
      date: "1876-03-10",
      title: "Telephone Invented",
      description:
        "<strong>Alexander Graham Bell</strong> patents the telephone, revolutionizing long-distance communication.<ul><li>Enabled instant voice communication</li><li>Connected businesses and families</li><li>Foundation for modern telecommunications</li></ul>",
      tags: ["Communication"],
      media: [
        {
          url: "/vintage-telephone-alexander-graham-bell.jpg",
          alt: "Vintage telephone from 1876",
        },
        {
          url: "/vintage-telephone-alexander-graham-bell.jpg",
          alt: "Vintage telephone from 1876",
        },
        {
          url: "/vintage-telephone-alexander-graham-bell.jpg",
          alt: "Vintage telephone from 1876",
        },
        {
          url: "/vintage-telephone-alexander-graham-bell.jpg",
          alt: "Vintage telephone from 1876",
        },
        {
          url: "/vintage-telephone-alexander-graham-bell.jpg",
          alt: "Vintage telephone from 1876",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Invention_of_the_telephone",
          label: "Learn more",
        },
      ],
    },
    {
      id: "2",
      date: "1903-12-17",
      title: "First Powered Flight",
      description:
        "The <em>Wright brothers</em> achieve the first sustained, controlled, powered flight at Kitty Hawk.<ul><li>12-second flight covering 120 feet</li><li>Pioneered modern aviation</li><li>Changed transportation forever</li></ul>",
      tags: ["Aviation"],
      media: [
        {
          url: "/wright-brothers-airplane-kitty-hawk.jpg",
          alt: "Wright brothers first flight at Kitty Hawk",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/Wright_brothers",
          label: "Learn more",
        },
      ],
    },
    {
      id: "3",
      date: "1945-02-14",
      title: "ENIAC Computer",
      description:
        "The <strong>Electronic Numerical Integrator and Computer (ENIAC)</strong>, one of the first electronic general-purpose computers, is completed.<ul><li>Weighed 30 tons and filled a room</li><li>Could perform 5,000 operations per second</li><li>Laid groundwork for modern computing</li></ul>",
      tags: ["Computing"],
      media: [
        {
          url: "/eniac-computer-1945-vintage-computing.jpg",
          alt: "ENIAC computer room",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/ENIAC",
          label: "Learn more",
        },
      ],
    },
    {
      id: "4",
      date: "1969-10-29",
      title: "ARPANET Created",
      description:
        'The precursor to the internet, <em>ARPANET</em>, sends its first message between UCLA and Stanford.<ul><li>First message was "LO" (intended to be "LOGIN")</li><li>Connected four universities initially</li><li>Developed packet switching technology</li></ul>',
      tags: ["Internet", "Computing"],
      media: [
        {
          url: "/arpanet-network-diagram-vintage-computer.jpg",
          alt: "ARPANET network connection",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/ARPANET",
          label: "Learn more",
        },
      ],
    },
    {
      id: "5",
      date: "1989-03-12",
      title: "World Wide Web Invented",
      description:
        "<strong>Tim Berners-Lee</strong> proposes the World Wide Web, making the internet accessible to the general public.<ul><li>Introduced HTTP, HTML, and URLs</li><li>Created the first web browser</li><li>Democratized information access</li></ul>",
      tags: ["Internet"],
      media: [
        {
          url: "/world-wide-web-tim-berners-lee-internet.jpg",
          alt: "Early World Wide Web interface",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/World_Wide_Web",
          label: "Learn more",
        },
        {
          url: "https://webfoundation.org/about/vision/history-of-the-web/",
          label: "Web Foundation",
        },
      ],
    },
    {
      id: "6",
      date: "2007-06-29",
      title: "iPhone Released",
      description:
        "<strong>Apple</strong> introduces the iPhone, pioneering the modern smartphone era and transforming mobile computing.<ul><li>Multi-touch interface revolution</li><li>App Store ecosystem launched in 2008</li><li>Redefined personal computing</li></ul>",
      tags: ["Mobile", "Computing"],
      media: [
        {
          url: "/first-generation-iphone-2007-apple-smartphone.jpg",
          alt: "First generation iPhone",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)",
          label: "Learn more",
        },
      ],
    },
    {
      id: "7",
      date: "2022-11-30",
      title: "AI Reaches Mainstream",
      description:
        "<em>ChatGPT</em> and other large language models bring artificial intelligence to millions of users worldwide.<ul><li>100 million users in 2 months</li><li>Natural language understanding breakthrough</li><li>Transformed content creation and automation</li></ul>",
      tags: ["AI", "Computing"],
      media: [
        {
          url: "/artificial-intelligence-ai-neural-network.jpg",
          alt: "AI neural network visualization",
        },
      ],
      links: [
        {
          url: "https://en.wikipedia.org/wiki/ChatGPT",
          label: "Learn more",
        },
        {
          url: "https://openai.com/blog/chatgpt",
          label: "OpenAI Blog",
        },
      ],
    },
  ],
};
