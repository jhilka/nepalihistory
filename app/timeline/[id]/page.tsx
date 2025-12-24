import notFound from "@/app/not-found";
import TimelineClient from "./TimelineClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const { timelines } = await import("@/data");
  return timelines.map((timeline: any) => ({
    id: timeline.id,
  }));
}

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { timelines } = await import("@/data");
  const { id } = await params;
  const timeline = timelines.find((t: any) => t.id === id);
  const title = timeline?.title ?? `Timeline - ${id}`;
  const description =
    timeline?.description ?? `Details about the timeline of ${id}`;
  const image = timeline?.coverMedia?.sourceUrl;

  return {
    title,
    description,
    keywords: timeline?.tags ?? [],
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/timeline/${id}`,
      siteName: "Nepali History",
      type: "website",
      images: image
        ? [{ url: image, alt: timeline?.coverMedia?.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function TimelinePage({ params }: Params) {
  const resolvedParams = await params;
  const { timelines } = await import("@/data");
  const timeline = timelines.find((t: any) => t.id === resolvedParams.id);

  if (!timeline) return notFound();

  const title = timeline?.title ?? `Timeline - ${resolvedParams.id}`;
  const description =
    timeline?.description ??
    `Details about the timeline of ${resolvedParams.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    mainEntity: {
      "@type": "ItemList",
      name: title,
      itemListElement:
        timeline?.entries?.map((e, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: typeof e.title === "string" ? e.title : `Entry ${idx + 1}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/timeline/${
            resolvedParams.id
          }#${e.id}`,
        })) ?? [],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TimelineClient params={resolvedParams.id} timeline={timeline} />
    </>
  );
}
