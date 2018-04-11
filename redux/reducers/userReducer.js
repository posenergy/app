import { PREPOPULATE, ONBOARDING, PICKER } from '../actions/userActions'

const defaultState = {
    isLoggedIn: false,
    name: '',
    buffer: '',
    startTime: '',
    endTime: '',
    email: '',
    onboarding: false,
    pickerDate: null,
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
      })

    case ONBOARDING:
      return Object.assign({}, state, {
        onboarding: !state.onboarding,
      })

    case PICKER:
      return Object.assign({}, state, {
        pickerDate: action.date,
      })
    default: return state
  }
}

export default userReducer
