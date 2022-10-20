export const SUGGESTIONS = {
  CUSTOM: 'CUSTOM',
  HOBBY: {
    monthlyPrice: 30,
    hourPrice: 0.04,
    ram: 1,
    cpu: 0.5,
    disk: 10,
  },
  DEVELOPER: {
    monthlyPrice: 120,
    hourPrice: 0.17,
    ram: 4,
    cpu: 1,
    disk: 40,
  },
  PRO: {
    monthlyPrice: 600,
    hourPrice: 0.82,
    ram: 16,
    cpu: 4,
    disk: 160,
  },
}

const getPricingAssistantSuggestion = form => {
  const {
    // useCase,
    feature = [],
    documentsNumber = 0,
    documentApproxSizeInKB = 0,
    updateFrequency = null,
  } = form

  if (
    documentsNumber === '100000000+' ||
    documentsNumber > 5000000 ||
    documentApproxSizeInKB === '10+' ||
    updateFrequency === 'minute' ||
    updateFrequency === 'continuously'
  )
    return SUGGESTIONS.CUSTOM

  let dbSizeInGB = 0
  if (feature.includes('textual')) {
    dbSizeInGB += (documentsNumber * documentApproxSizeInKB * 10) / 1024 / 1024
  }
  if (feature.includes('geo')) {
    dbSizeInGB += (documentsNumber * 20) / 1024 / 1024 / 1024
  }
  if (feature.includes('numeric')) {
    dbSizeInGB += (documentsNumber * documentApproxSizeInKB * 2) / 1024 / 1024
  }

  if (dbSizeInGB <= 10) return SUGGESTIONS.HOBBY
  if (dbSizeInGB <= 40) return SUGGESTIONS.DEVELOPER
  if (dbSizeInGB <= 160) return SUGGESTIONS.PRO
  if (dbSizeInGB > 160) return SUGGESTIONS.CUSTOM
}

export default getPricingAssistantSuggestion
