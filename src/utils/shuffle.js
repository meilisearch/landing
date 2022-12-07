const shuffle = array => {
  let shuffleArray = [...array]
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffleArray[i]
    shuffleArray[i] = shuffleArray[j]
    shuffleArray[j] = temp
  }
  return shuffleArray
}

export default shuffle
