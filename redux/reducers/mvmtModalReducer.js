import { MVMTVISIBILITY } from '../actions/mvmtModalActions'

const initialState = {
  visible: false
}

export default toggleMvmtVisibility (state = initialState) {
  switch (action.type) {
    case MVMTVISIBILITY:
      return Object.assign({}, state, {
        visible: !state.visible
      })
    default: initialState
  }

}