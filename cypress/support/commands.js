/* eslint-disable no-console */
const { MeiliSearch } = require('meilisearch')

const {
  NEXT_PUBLIC_DEMO_MOVIES_API_KEY: API_KEY,
  NEXT_PUBLIC_DEMO_MOVIES_HOST: HOST,
} = Cypress.env()

Cypress.Commands.add('addDocuments', async (uid, documents) => {
  try {
    const client = new MeiliSearch({
      host: HOST,
      apiKey: API_KEY,
    })
    const index = client.index(uid)
    await client.createIndex(uid)
    const { updateId } = await index.addDocuments(documents)
    await index.waitForPendingUpdate(updateId)
  } catch (e) {
    console.log({ e })
  }
})
