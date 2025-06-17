import type React from "react"
import { Poppins } from "next/font/google"
import ClientLayout from "./ClientLayout"
import './globals.css'
// import { Analytics } from "@vercel/analytics/next"

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  metadataBase: new URL('https://arcova.bio'),
  title: "Life Science Consulting, Biotech Marketing & Tech Due Diligence | Arcova",
  description: "Arcova unlocks science-led growth with life science consulting, biotech marketing, technical due diligence, medical SEO, and scientific writing.",
  icons: {
    icon: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    shortcut: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    apple: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    other: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ]
  },
  openGraph: {
    type: 'website',
    url: 'https://arcova.com',
    title: 'Unlock Science-Led Growth with Life Science Consulting | Arcova',
    description: 'Biotech marketing, life Science Consulting, technical due diligence, and scientific editing—Arcova turns complex research into revenue-ready strategy.',
    siteName: 'Arcova',
    images: [
      {
        url: "/images/arcova-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: 'Arcova | Unlock Science-Led Growth'
      }
    ]
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Arcova | Scientific Evidence for Business Decisions",Right, so this is all right, I think. 
  //   description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  //   images: ["/images/og-image.png"],
  //   creator: "@arcova",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0WTVF1D48X"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0WTVF1D48X');
        ` }} />

        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Arcova",
              url: "https://arcova.bio",
              logo: "https://arcova.bio/arcova-logo.png",
              description: "Arcova unlocks science-led growth with life science consulting, biotech marketing, technical due diligence, medical SEO, and scientific writing."
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}