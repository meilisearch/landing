export const SUGGESTIONS = {
  CUSTOM: 'CUSTOM',
  LOW: 0,
  MIDDLE: 1,
  HIGH: 2,
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
    documentApproxSizeInKB > 1 ||
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

  if (dbSizeInGB <= 10) return SUGGESTIONS.LOW
  if (dbSizeInGB <= 40) return SUGGESTIONS.MIDDLE
  if (dbSizeInGB <= 160) return SUGGESTIONS.HIGH
  if (dbSizeInGB > 160) return SUGGESTIONS.CUSTOM
}

export default getPricingAssistantSuggestion
