import { MINDVISIBILITY } from '../actions/mindModalActions'

const initialState = {
  visible: false,
}

const toggleMindVisibility = (state = initialState, action) => {
  switch (action.type) {
    case MINDVISIBILITY: {
      return Object.assign({}, state, {
        visible: !state.visible,
      })
    }
    default: return state
  }

}

export default toggleMindVisibility
