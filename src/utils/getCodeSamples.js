import fetch from 'node-fetch'
const yaml = require('js-yaml')

const getCodeSamples = async sdkList => {
  const fetchPromises = sdkList.map(async sdk => {
    try {
      const fetchedContent = await (
        await fetch(sdk.url, { method: 'GET' })
      ).text()

      const codeSample = yaml.load(fetchedContent)
      return {
        code: codeSample.faceted_search_filter_1,
        language: sdk.language,
      }
    } catch (e) {
      console.log(e)
    }
  })
  return await Promise.all(fetchPromises)
}

export default getCodeSamples
