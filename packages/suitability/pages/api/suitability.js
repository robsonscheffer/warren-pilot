// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const ENV_URL_WARREN = 'https://api.dev.oiwarren.com/api/'
const MESAGGE_URL = 'v2/conversation/message'

export default (req, res) => {
  axios
    .post(`${ENV_URL_WARREN}${MESAGGE_URL}`, {
      id: '',
      answers: {},
      context: 'suitability',
      subcontext: 'suitability_new_profiles',
      fullpath: 'https://warren.com.br/app/#/suitability',
    })
    .then(function (response) {
      res.json(response)
    })
    .catch(function (error) {
      res.json(error)
    })
}
