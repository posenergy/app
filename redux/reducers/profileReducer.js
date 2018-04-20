import { PROFILE } from '../actions/profileActions'

const initialState = {
  clicked: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return Object.assign({}, state, {
        clicked: !state.clicked,
      })
    default: return state
  }
}

export default profileReducer
