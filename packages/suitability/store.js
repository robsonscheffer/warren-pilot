import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducers } from './ducks'
import rootSaga from './saga'
import reducer from './ducks/suitability'

// create a makeStore function
const makeStore = (context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga)

  // 4: now return the store:
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
