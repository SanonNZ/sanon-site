import NetworkPageClient from "./NetworkPageClient"

export const metadata = {
  title: "Remote Research Jobs & Biotech Consulting Roles | Arcova",
  description:
    "Join Arcova’s expert network for remote research jobs, biotech consulting, remote data analyst jobs, and science writing jobs, on your terms.",
  openGraph: {
    title: "Remote Research Jobs & Biotech Consulting Roles | Arcova",
    description:
      "Join Arcova’s expert network for remote research jobs, biotech consulting, remote data analyst jobs, and science writing jobs, on your terms.",
    images: [
      {
        url: "/images/network-og.png",
        width: 1200,
        height: 630,
        alt: "Join Arcova's expert network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Network of Scientific Experts | Arcova",
    description:
      "Join our network of of PhD researchers and scientists from world-leading institutions.",
    images: ["/images/og-image.png"],
  },
}

export default function NetworkPage() {
  return <NetworkPageClient />
}
