import InvestorsPageClient from "./InvestorsPageClient"

export const metadata = {
  title: "Scientific Due-Diligence | Arcova",
  description: "Know what the pitch doesn't tell you.",
  openGraph: {
    title: "Scientific Due-Diligence | Arcova",
    description: "Know what the pitch doesn't tell you.",
    images: [
      {
        url: "/og-image.png", // Use relative URL for testing
        width: 1200,
        height: 630,
        alt: "From Data to Clarity - Actionable insight from complex research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Due-Diligence | Arcova",
    description: "Know what the pitch doesn't tell you.",
    images: ["/og-image.png"], // Use relative URL for testing
  },
}

export default function InvestorsPage() {
  return <InvestorsPageClient />
}
