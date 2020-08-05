export const Types = {
  START_TALK: 'START_TALK',
  FORM_VISIBILITY: 'FORM_VISIBILITY',
  LOADING: 'LOADING',
  MESSAGES_RECEIVED: 'MESSAGES_RECEIVED',
  ADD_USER_RESPONSE: 'ADD_USER_RESPONSE',
  SAVE_USER_MESSAGE: 'SAVE_USER_MESSAGE',
  FORM_DATA_RECEIVED: 'FORM_DATA_RECEIVED',
  FINISH_TALK: 'FINISH_TALK',
}

const initialState = {
  loading: false,
  started: false,
  finished: false,
  messages: [],
  answers: {},
  form: {
    show: false,
    inputs: [],
    buttons: [],
    checkbox: [],
    radios: [],
    responses: '',
    id: null,
  },
}

export function selector(state, prop) {
  return state
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: action.loading }
    case Types.START_TALK:
      return { ...state, started: true }
    case Types.FORM_VISIBILITY:
      return { ...state, form: { ...state.form, show: action.status } }
    case Types.MESSAGES_RECEIVED:
      return { ...state, messages: [...state.messages, ...action.payload] }
    case Types.SAVE_USER_MESSAGE:
      return {
        ...state,
        answers: { ...state.answers, ...action.payload.answers },
      }
    case Types.FORM_DATA_RECEIVED:
      return { ...state, form: action.payload }
    default:
      return state
  }
}

/* actions */
export function startTalk() {
  return {
    type: Types.START_TALK,
  }
}

/* actions */
export function setFormVisibility(status) {
  return {
    type: Types.FORM_VISIBILITY,
    status,
  }
}

export function loading(status) {
  return {
    type: Types.LOADING,
    loading: status,
  }
}

export function messagesReceived(payload) {
  return {
    type: Types.MESSAGES_RECEIVED,
    payload,
  }
}

export function saveUserMessage(payload) {
  return {
    type: Types.SAVE_USER_MESSAGE,
    payload,
  }
}

export function addUserResponse(payload) {
  return {
    type: Types.ADD_USER_RESPONSE,
    payload,
  }
}

export function finishTalk() {
  return {
    type: Types.FINISH_TALK,
  }
}

export function formDataReceived(payload) {
  return {
    type: Types.FORM_DATA_RECEIVED,
    payload,
  }
}
