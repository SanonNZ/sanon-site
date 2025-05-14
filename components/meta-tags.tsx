import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  imageUrl?: string
  url?: string
}

export function MetaTags({
  title = "Arcova | Scientific Evidence for Business Decisions",
  description = "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  imageUrl = "https://arcova.bio/og-image.png", // Absolute URL for OG tags
  url = "https://arcova.bio",
}: MetaTagsProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arcova" />

      {/* WhatsApp specific tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="From Data to Clarity - Actionable insight from complex research" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional tags that can help with WhatsApp */}
      <link rel="image_src" href={imageUrl} />
    </Head>
  )
}
