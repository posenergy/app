import { ADD_TAG, DEL_TAG, SWEAT, DURATION } from '../actions/momentActions'

const initialState = {
  tags: [],
  sweat: 0,
  duration: 30,
}

const filterState = (state = initialState, action) => {
  switch(action.type) {

    case DEL_TAG: {
      return Object.assign({}, state,
        { tags: state.tags.filter(t => t !== action.tag),
      })
    }

    case ADD_TAG: {
      return Object.assign({}, state,
        { tags: [...state.tags, action.tag],
      })
    }

    case SWEAT: {
      return Object.assign({}, state,
        { sweat: action.sweat })
    }

    case DURATION: {
      return Object.assign({}, state,
        { duration: action.duration })
    }

    default:
      return state
  }
}

export default filterState