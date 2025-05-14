import ContributorsPageClient from "./ContributorsPageClient"

export const metadata = {
  title: "Join Our Network of Scientific Experts | Arcova",
  description:
    "Contribute your expertise to our distributed network of PhD researchers and scientists from world-leading institutions.",
  openGraph: {
    title: "Join Our Network of Scientific Experts | Arcova",
    description:
      "Contribute your expertise to our distributed network of PhD researchers and scientists from world-leading institutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "From Data to Clarity - Actionable insight from complex research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Network of Scientific Experts | Arcova",
    description:
      "Contribute your expertise to our distributed network of PhD researchers and scientists from world-leading institutions.",
    images: ["/og-image.png"],
  },
}

export default function ContributorsPage() {
  return <ContributorsPageClient />
}
