import { all, takeEvery } from 'redux-saga/effects'

import { Types as SuitabilityTypes } from '../ducks/suitability'

import {
  startTalk,
  saveUserMessage,
  parseUserResponse,
  watchFormFinish,
  finishSuitability,
} from './suitability'

export default function* rootSaga() {
  yield all([
    yield takeEvery(SuitabilityTypes.START_TALK, startTalk),
    yield takeEvery(SuitabilityTypes.SAVE_USER_MESSAGE, saveUserMessage),
    yield takeEvery(SuitabilityTypes.ADD_USER_RESPONSE, parseUserResponse),
    yield takeEvery(SuitabilityTypes.FORM_DATA_RECEIVED, watchFormFinish),
    yield takeEvery(SuitabilityTypes.FINISH_TALK, finishSuitability),
  ])
}
