import { PICKER, PICKER_NULL } from '../actions/pickerActions'

const defaultState = {
    pickerDate: null,
}

const pickerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PICKER:
          return Object.assign({}, state, {
          pickerDate: action.date,
      })

        case PICKER_NULL:
          return Object.assign({}, state, {
            pickerDate: null,
          })

    default: return state
    }
}

export default pickerReducer
