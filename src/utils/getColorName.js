import theme from '../theme'

const isObject = elem =>
  typeof elem === 'object' && !Array.isArray(elem) && elem !== null

const getColorName = color => {
  try {
    const { colors } = theme
    const result = Object.keys(colors).map(key => [key, colors[key]])

    for (const [key, value] of Object.entries(result)) {
      if (value === color) return key

      if (isObject(value[1])) {
        // eslint-disable-next-line no-unused-vars
        for (const [_, subValue] of Object.entries(value[1])) {
          if (subValue === color) return value[0]
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default getColorName
