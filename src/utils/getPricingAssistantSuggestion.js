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
    documentApproxSize = 0,
    frequency = null,
  } = form

  if (
    documentsNumber > 5000000 ||
    documentApproxSize > 1 ||
    frequency === 'minute' ||
    frequency === 'continuously'
  )
    return SUGGESTIONS.CUSTOM

  let dbSizeInGB = 0
  if (feature.includes('textual')) {
    dbSizeInGB += (documentsNumber * documentApproxSize * 10) / 1024 / 1024
  }
  if (feature.includes('geo')) {
    dbSizeInGB += (documentsNumber * 20) / 1024 / 1024 / 1024
  }
  if (feature.includes('numeric')) {
    dbSizeInGB += (documentsNumber * documentApproxSize * 2) / 1024 / 1024
  }

  if (dbSizeInGB <= 10) return SUGGESTIONS.LOW
  if (dbSizeInGB <= 40) return SUGGESTIONS.MIDDLE
  if (dbSizeInGB <= 160) return SUGGESTIONS.HIGH
  if (dbSizeInGB > 160) return SUGGESTIONS.CUSTOM
}

export default getPricingAssistantSuggestion
