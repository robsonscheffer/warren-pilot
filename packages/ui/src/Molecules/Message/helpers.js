const SPLIT = new RegExp(/\^\d+/gi)
const DELAYS = new RegExp(/\d+/gi)
const ERASE = new RegExp(/<erase>/gi)

const splitMessages = (text = '') => {
  const messageSplited = text.split(SPLIT)
  const delays = text.match(DELAYS)
  return messageSplited.map((msg, index) => {
    return {
      text: msg,
      delay: (delays && parseInt(delays[index])) || 0,
    }
  })
}

export { splitMessages }
