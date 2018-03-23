import { FIRSTMODAL, SECONDMODAL, THIRDMODAL } from '../actions/boardAction'

const initialState = {
  first: true,
  second: false,
  third: false,
}

const boardModals = (state = initialState, action) => {
  switch(action.type) {
    case FIRSTMODAL: {
      return Object.assign({}, state,
        { first: !state.first })
    }
    case SECONDMODAL: {
      return Object.assign({}, state,
        { second: !state.second })
    }
    case THIRDMODAL: {
      return Object.assign({}, state,
        { third: !state.third })
    }
    default: return state
  }
}

export default boardModals
