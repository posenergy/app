import { CRAFT, JOURNAL, MEDITATE, GRATITUDE, SKIN, INSPIRED,
         FIFTEEN, THIRTY, SIXTY } from '../actions/mindButtonsActions'

const initialState = {
  craft: false,
  journal: false,
  meditate: false,
  gratitude: false,
  skin: false,
  inspired: false,
  fifteen: false,
  thirty: false,
  sixty: false,
}

const toggleMindButtons = (state = initialState, action) => {
  switch (action.type) {
    case CRAFT: {
      return Object.assign({}, state, {
        craft: !state.craft,
      })
    }

    case JOURNAL: {
      return Object.assign({}, state, {
        journal: !state.journal,
      })
    }

    case MEDITATE: {
      return Object.assign({}, state, {
        meditate: !state.meditate,
      })
    }

    case GRATITUDE: {
      return Object.assign({}, state, {
        gratitude: !state.gratitude,
      })
    }

    case SKIN: {
      return Object.assign({}, state, {
        skin: !state.skin,
      })
    }

    case INSPIRED: {
      return Object.assign({}, state, {
        inspired: !state.inspired,
      })
    }

    case FIFTEEN: {
      return Object.assign({}, state, {
        fifteen: !state.fifteen,
      })
    }

    case THIRTY: {
      return Object.assign({}, state, {
        thirty: !state.thirty,
      })
    }

    case SIXTY: {
      return Object.assign({}, state, {
        sixty: !state.sixty,
      })
    }

    default: return state
  }

}

export default toggleMindButtons
