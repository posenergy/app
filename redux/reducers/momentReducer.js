import { combineReducers } from 'redux'

import { FILTER, ADD_TAG, DEL_TAG, SWEAT, DURATION } from '../actions/momentActions'

const initialState = {
	tags: [],
  sweat: '',
  duration: 30,
}

function delTagReducer(state = initialState.tags, action) {
	switch (action.type) {
		case DEL_TAG:
		  return Object.assign({}, state, 
		  	{ tags: state.filter(t => t !== action.tag) 
		  })
		default:
		  return state
	}
}


function addTagReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TAG:
		  return Object.assign({}, state,
		  	{ tags: [...state.tags, action.tag] 
		  })
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
	addTagReducer,
	delTagReducer,
	sweatReducer,
	durationReducer,
})

export default filterState
