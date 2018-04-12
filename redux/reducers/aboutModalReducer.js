import { CLOSE, OPEN } from '../actions/aboutModalActions.js'

const aboutModal = (state = { open: false }, action) => {
  switch (action.type) {
    case CLOSE:
      return { open: false }
    case OPEN:
      return { open: true }
    default:
      return state
  }
}
export default aboutModal