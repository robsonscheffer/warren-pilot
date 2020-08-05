import { put, call, select } from 'redux-saga/effects'
import {
  Message,
  parseApiMessages,
  FinishSuitability,
} from '../api/suitability'
import {
  loading,
  messagesReceived,
  formDataReceived,
  addUserResponse,
  setFormVisibility,
  saveUserProfile,
  finishTalk,
} from '../ducks/suitability'
import sagasMiddleware from './middleware'

export function* startTalk() {
  yield put(loading(true))
  try {
    const result = yield call(sagasMiddleware, {
      service: Message,
    })
    if (result) {
      const { messages } = result.data
      yield put(messagesReceived(parseApiMessages(messages)))
      yield put(
        formDataReceived({
          inputs: result.data.inputs,
          buttons: result.data.buttons,
          radios: result.data.radios,
          checkbox: result.data.checkbox,
          responses: result.data.responses ? result.data.responses[0] : '',
          id: result.data.id,
        })
      )
    }
    yield put(loading(false))
  } catch (e) {
    console.error(e)
  }
}

export function* saveUserMessage(action) {
  const { payload } = action

  try {
    yield put(setFormVisibility(false))
    const responseMessage = yield select(
      (state) => state.suitability.form.responses
    )
    yield put(
      addUserResponse({
        ...payload,
        responseMessage,
      })
    )
    const result = yield call(sagasMiddleware, {
      service: () => Message(payload),
    })

    if (result) {
      const { messages } = result.data
      yield put(messagesReceived(parseApiMessages(messages)))
      yield put(
        formDataReceived({
          inputs: result.data.inputs || [],
          buttons: result.data.buttons || [],
          radios: result.data.radios || [],
          checkbox: result.data.checkbox || [],
          responses: result.data.responses ? result.data.responses[0] : '',
          id: result.data.id,
        })
      )
    }
  } catch (e) {
    console.error(e)
  }
}

export function* parseUserResponse(action) {
  const { payload } = action

  try {
    const response = payload.responseMessage.replace(
      `{{answers.${payload.id}}}`,
      payload.answers[payload.id]
    )
    yield put(
      messagesReceived([
        {
          text: response,
          type: 'sent',
        },
      ])
    )
  } catch (e) {
    yield put(
      messagesReceived([
        {
          text: payload.label || payload.answers[payload.id],
          type: 'sent',
        },
      ])
    )
  }
}

export function* finishSuitability(action) {
  const { payload } = action
  try {
    const result = yield call(sagasMiddleware, {
      service: () => FinishSuitability(payload),
    })

    if (result) {
      if (result.data.user) {
        const { investmentProfile, name, email } = result.data.user
        yield put(
          saveUserProfile({
            investmentProfile,
            name,
            email,
          })
        )
      }
    }
  } catch (e) {
    console.error(e)
  }
}

export function* watchFormFinish(action) {
  const { payload } = action

  try {
    if (payload.id === 'final') {
      const answers = yield select((state) => state.suitability.answers)
      yield put(
        finishTalk({
          answers,
          id: payload.id,
        })
      )
    }
  } catch (e) {
    console.error(e)
  }
}
