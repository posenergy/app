import { PREPOPULATE } from '../actions/userActions'

const defaultState = {
    isLoggedIn: false,
    name: '',
    buffer: '',
    startTime: '',
    endTime: '',
    email: '',
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
    default: return state
  }
}

export default userReducer
