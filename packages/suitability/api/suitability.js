import axios from 'axios'
// @todo: put on ENV
const BASE_URL = 'https://api.dev.oiwarren.com/api'

const MESSAGE_POST_URL = `${BASE_URL}/v2/conversation/message`
const MESSAGE_FINISH_URL = `${BASE_URL}/v2/suitability/finish`

export const Message = (params) => {
  const options = {
    context: 'suitability',
    // subcontext: 'suitability_new_profiles',
    ...params,
  }
  return axios.post(MESSAGE_POST_URL, options)
}

export const parseApiMessages = (messages) => {
  return messages.map((message) => {
    return { type: 'received', origin: null, text: message.value }
  })
}
