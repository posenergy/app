import { TOKEN } from '../actions/tokenActions'

const initialState = {
  token: '',
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
      case TOKEN:
        return Object.assign({}, state, {
          token: action.token,
        })
    default: return state
	}
}

export default tokenReducer
