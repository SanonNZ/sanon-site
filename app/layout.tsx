import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Arcova | Scientific Evidence for Business Decisions",
  description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  icons: {
    icon: "/arcova-favicon.png",
  },
  openGraph: {
    type: "website",
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    siteName: "Arcova",
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
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    images: ["/og-image.png"], // Use relative URL for testing
    creator: "@arcova",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'