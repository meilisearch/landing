import React from 'react'
import NextHead from 'next/head'

const Head = ({ meta }) => {
  return (
    <NextHead>
      <title className="notranslate">
        Meilisearch{meta.title ? ` | ${meta.title}` : ''}
      </title>
      <meta name="description" content={meta.description} />

      {/* Open Graph data */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`Meilisearch${meta.title ? ` | ${meta.title}` : ''}`}
      />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content={
          meta.image || 'https://www.meilisearch.com/images/meili-logo.png'
        }
      />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Open Graph data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meilisearch" />
      <meta
        name="twitter:title"
        content={`Meilisearch${meta.title ? ` | ${meta.title}` : ''}`}
      />
      <meta name="twitter:description" content={meta.description} />
      <meta property="twitter:domain" content="https://www.meilisearch.com/" />
      <meta property="twitter:url" content={meta.url} />
      <meta
        name="twitter:image"
        content={
          meta.image || 'https://www.meilisearch.com/images/meili-logo.png'
        }
      />
      <meta property="twitter:image:type" content="image/png" />
    </NextHead>
  )
}

export default Head
