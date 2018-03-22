import { MINDVISIBILITY } from '../actions/mindModalActions'

const initialState = {
  visible: false,
}

export default toggleMindVisibility = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case MINDVISIBILITY: {
      return Object.assign({}, state, {
        visible: !state.visible
      })
    }
    default: return state
  }

}
