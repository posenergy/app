import { combineReducers } from 'redux'

import { FILTER, TAG, SWEAT, DURATION } from '../actions/momentActions'

const initialState = {
	tags: [],
  sweat: '',
  duration: 30,
}

function tagReducer(state = initialState.tags, action) {
	switch (action.type) {
		case TAG:
		  return { tags: [...state.tags, action.tag] }
		default:
		  return state
	}
}

function sweatReducer(state = initialState.sweat, action)
	switch (action.type) {
		case SWEAT:
		  return Object.assign({}, state, 
		  	{ sweat: action.sweat })
		default:
		  return state
	}
}

function durationReducer(state = initialState.duration, action)
	switch (action.type) {
		case DURATION:
			return Object.assign({}, state, 
		  	{ duration: action.duration })
		default:
		  return state
	}
}

const filterState = combineReducers({
	tagReducer,
	sweatReducer,
	durationReducer,
})

export default filterState
