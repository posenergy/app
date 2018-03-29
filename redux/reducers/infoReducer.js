import { INFOVISIBILITY } from '../actions/infoAction'

const initialState = {
  visible: false,
}

const toggleInfoVisibility = (state = initialState, action) => {
  switch (action.type) {
    case INFOVISIBILITY: {
      return Object.assign({}, state, {
        visible: !state.visible,
      })
    }
    default: return state
  }

}

export default toggleInfoVisibility
