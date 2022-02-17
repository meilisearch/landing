/* eslint-disable no-console */
const { MeiliSearch } = require('meilisearch')

const { API_KEY, HOST } = Cypress.env()

Cypress.Commands.add('addDocuments', async (uid, documents) => {
  try {
    const client = new MeiliSearch({
      host: HOST,
      apiKey: API_KEY,
    })
    const index = client.index(uid)
    const { updateId } = await index.addDocuments(documents)
    await index.waitForPendingUpdate(updateId)
  } catch (e) {
    console.log({ e })
  }
})
