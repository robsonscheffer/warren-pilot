import { call } from 'redux-saga/effects'

function* sagasMiddleware({ service, payload }) {
  try {
    const result = yield call(service, payload)

    if (result && result.data) {
      return { data: result.data.data || result.data }
    }

    return null
  } catch (err) {
    return {
      error:
        err.response && err.response.data ? err.response.data.message : 'Error',
    }
  }
}

export default sagasMiddleware
