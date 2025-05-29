import TeamsClientPage from "./TeamsClientPage"

export const metadata = {
  title: "Evidence-Based Medical Writing for Biotech & Health Brands | Arcova",
  description:
    "Peer-reviewed research translated into SEO articles, TL;DR briefs and launch-ready evidence packs by an Oxford-led PhD team.",
  openGraph: {
    title: "Evidence-Based Medical Writing for Biotech & Health Brands | Arcova",
    description:
      "Peer-reviewed research translated into SEO articles, TL;DR briefs and launch-ready evidence packs by an Oxford-led PhD team.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "From Data to Clarity - Actionable insight from complex research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence-Based Medical Writing for Biotech & Health Brands | Arcova",
    description:
      "Peer-reviewed research translated into SEO articles, TL;DR briefs and launch-ready evidence packs by an Oxford-led PhD team.",
    images: ["/images/og-image.png"],
  },
}

export default function TeamsPage() {
  return <TeamsClientPage />
}
