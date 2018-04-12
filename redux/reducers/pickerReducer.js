import { PICKER } from '../actions/pickerActions'

const defaultState = {
    pickerDate: null,
}

const pickerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PICKER:
        return Object.assign({}, state, {
        pickerDate: action.date,
        })
    default: return state
    }
}

export default pickerReducer