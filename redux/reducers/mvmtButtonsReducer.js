import { BAR, CYCLE, DANCE, HIIT, KICK, PILATES, ROW, RUN, STRENGTH, STRETCH,
        YOGA, LOW, MEDIUM, HIGH, FIFTEEN, THIRTY, SIXTY } from '../actions/mvmtButtonsActions'

const initialState = {
  bar: false,
  cycle: false,
  dance: false,
  hiit: false,
  kick: false,
  pilates: false,
  row: false,
  run: false,
  strength: false,
  stretch: false,
  yoga: false,
  low: false,
  medium: false,
  high: false,
  fifteen: false,
  thirty: false,
  sixty: false,
}

const toggleMvmtButtons = (state = initialState, action) => {
  switch (action.type) {
    case BAR: {
      return Object.assign({}, state, {
        bar: !state.bar,
      })
    }

    case CYCLE: {
      return Object.assign({}, state, {
        cycle: !state.cycle,
      })
    }

    case DANCE: {
      return Object.assign({}, state, {
        dance: !state.dance,
      })
    }

    case HIIT: {
      return Object.assign({}, state, {
        hiit: !state.hiit,
      })
    }

    case KICK: {
      return Object.assign({}, state, {
        kick: !state.kick,
      })
    }

    case PILATES: {
      return Object.assign({}, state, {
        pilates: !state.pilates,
      })
    }

    case ROW: {
      return Object.assign({}, state, {
        row: !state.row,
      })
    }

    case RUN: {
      return Object.assign({}, state, {
        run: !state.run,
      })
    }

    case STRENGTH: {
      return Object.assign({}, state, {
        strength: !state.strength,
      })
    }

    case STRETCH: {
      return Object.assign({}, state, {
        stretch: !state.stretch,
      })
    }

    case YOGA: {
      return Object.assign({}, state, {
        yoga: !state.yoga,
      })
    }

    case LOW: {
      return Object.assign({}, state, {
        low: !state.low,
      })
    }

    case MEDIUM: {
      return Object.assign({}, state, {
        medium: !state.medium,
      })
    }

    case HIGH: {
      return Object.assign({}, state, {
        high: !state.high,
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

export default toggleMvmtButtons
