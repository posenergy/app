import { combineReducers } from 'redux'

import user from './reducers/userReducer'
import filterState from './reducers/momentReducer'
import toggleMindVisibility from './reducers/mindModalReducer'
import toggleMvmtVisibility from './reducers/mvmtModalReducer'

const rootReducer = combineReducers({
	user,
	filterState,
	toggleMvmtVisibility,
	toggleMindVisibility,
})

export default (state, action) => {
	console.log('Test if rootReducer is ever called')
  return rootReducer(state, action)
}
