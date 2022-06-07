import React from 'react'
import NextHead from 'next/head'

const Head = ({ meta }) => {
  return (
    <NextHead>
      <title className="notranslate">
        Meilisearch{meta.title ? ` | ${meta.title}` : ''}
      </title>
      <meta name="description" content={meta.description} />
    </NextHead>
  )
}

export default Head
