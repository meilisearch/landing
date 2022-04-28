import fetch from 'node-fetch'
const yaml = require('js-yaml')

const getCodeSamples = async sdkList => {
  const fetchPromises = sdkList.map(async sdk => {
    // eslint-disable-next-line no-unused-vars
    const { logo, ...sdkProps } = sdk
    try {
      const fetchedContent = await (
        await fetch(sdk.url, { method: 'GET' })
      ).text()

      const codeSample = yaml.load(fetchedContent)
      return {
        ...sdkProps,
        code: codeSample.landing_getting_started_1,
      }
    } catch (e) {
      console.log(e)
    }
  })
  return await Promise.all(fetchPromises)
}

export default getCodeSamples
