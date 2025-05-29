import Head from "next/head"

export function MetaTags() {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta property="og:title" content="Arcova | Scientific Evidence for Business Decisions" />
      <meta
        property="og:description"
        content="Oxford-trained PhD team turning raw biomedical literature into decision-ready insight."
      />
      <meta property="og:image" content="/images/og-image.png" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Arcova | Scientific Evidence for Business Decisions" />
      <meta
        name="twitter:description"
        content="Oxford-trained PhD team turning raw biomedical literature into decision-ready insight."
      />
      <meta name="twitter:image" content="/images/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/images/arcova-favicon.png" />
      <link rel="apple-touch-icon" href="/images/arcova-favicon.png" />
      <link rel="shortcut icon" href="/images/arcova-favicon.png" />

      {/* Basic image tag that some platforms might use */}
      <link rel="image_src" href="/images/og-image.png" />
    </Head>
  )
}
