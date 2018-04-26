import { PREPOPULATE, ONBOARDING } from '../actions/userActions'

const defaultState = {
    isLoggedIn: false,
    name: '',
    buffer: 0,
    startTime: '',
    endTime: '',
    email: '',
    id: '',
    onboarding: false,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PREPOPULATE:
      return Object.assign({}, state, {
        isLoggedIn: true,
        name: action.name,
        buffer: action.buffer,
        startTime: action.startTime,
        endTime: action.endTime,
        email: action.email,
        id: action.id,
      })

    case ONBOARDING:
      return Object.assign({}, state, {
        onboarding: !state.onboarding,
      })

    default: return state
  }
}

export default userReducer
