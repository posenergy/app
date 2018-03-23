import { LOGIN } from '../actions/userActions'

const initialState = {
  name: '',
  username: '',
  pass: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
        return Object.assign({}, state, {
          name: action.payload.name,
          username: action.payload.username,
          pass: action.payload.pass,
        })
    }
    default:
      return state
  }
}

export default user
