 import { LOGIN } from '../actions/userActions'
 import { LOGOUT } from '../actions/userActions'

const defaultState = {
    isLoggedIn: false,
    email: '',
};
 
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return Object.assign({}, state, { 
        isLoggedIn: true,
        email: action.email,
      })
    case 'LOGOUT':
      return Object.assign({}, state, { 
        isLoggedIn: false,
        email: '',
      })
    default:
      return state
  }
}

export default userReducer
