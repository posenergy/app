import { MVMTVISIBILITY } from '../actions/mvmtModalActions'

const initialState = {
  visible: false,
}

const toggleMvmtVisibility = (state = initialState, action) => {
  switch (action.type) {
    case MVMTVISIBILITY: {
      return Object.assign({}, state, {
        visible: !state.visible,
      })
    }
    default: return state
  }
}

export default toggleMvmtVisibility
