import { LOGIN } from '../actions/userActions'

const initialState = {
  name: '', 
  username: '',
  pass: ''
}

export default user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('hello', action.payload)
        return Object.assign({}, state, {
          name: action.payload.name,
          username: action.payload.username,
          pass: action.payload.pass
        })
    }
    default: 
      return state
  }
}


