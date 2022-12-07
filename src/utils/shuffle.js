const shuffleArray = array => {
  let shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArray[i]
    shuffledArray[i] = shuffleArray[j]
    shuffledArray[j] = temp
  }
  return shuffledArray
}

export default shuffleArray
