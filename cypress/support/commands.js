/* eslint-disable no-console */
const { MeiliSearch } = require('meilisearch')

const {
  NEXT_PUBLIC_DEMO_MOVIES_API_KEY: apiKey,
  NEXT_PUBLIC_DEMO_MOVIES_HOST: host,
} = Cypress.env()

Cypress.Commands.add('addDocuments', async (uid, documents) => {
  try {
    const client = new MeiliSearch({
      host,
      apiKey,
    })
    await client.index(uid).addDocuments(documents)
  } catch (e) {
    console.log({ e })
  }
})
