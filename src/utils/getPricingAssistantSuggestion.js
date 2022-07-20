export const SUGGESTIONS = {
  CUSTOM: 'CUSTOM',
  RAM1_CPU05_DISK10: {
    monthlyPrice: 29,
    hourPrice: 0.04,
    ram: 1,
    cpu: 0.5,
    disk: 10,
  },
  RAM4_CPU1_DISK40: {
    monthlyPrice: 122,
    hourPrice: 0.17,
    ram: 4,
    cpu: 1,
    disk: 40,
  },
  RAM8_CPU2_DISK80: {
    monthlyPrice: 257,
    hourPrice: 0.357,
    ram: 8,
    cpu: 2,
    disk: 80,
  },
  RAM16_CPU4_DISK160: {
    monthlyPrice: 461,
    hourPrice: 0.64,
    ram: 16,
    cpu: 4,
    disk: 160,
  },
  RAM32_CPU8_DISK320: {
    monthlyPrice: 972,
    hourPrice: 1.35,
    ram: 32,
    cpu: 8,
    disk: 320,
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

  if (dbSizeInGB <= 10) return SUGGESTIONS.RAM1_CPU05_DISK10
  if (dbSizeInGB <= 40) return SUGGESTIONS.RAM4_CPU1_DISK40
  if (dbSizeInGB <= 80) return SUGGESTIONS.RAM8_CPU2_DISK80
  if (dbSizeInGB <= 160) return SUGGESTIONS.RAM16_CPU4_DISK160
  if (dbSizeInGB > 160) return SUGGESTIONS.CUSTOM
}

export default getPricingAssistantSuggestion
