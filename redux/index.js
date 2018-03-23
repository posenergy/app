import { combineReducers } from 'redux'

import user from './reducers/userReducer'
import filterState from './reducers/momentReducer'
import toggleMindVisibility from './reducers/mindModalReducer'
import toggleMvmtVisibility from './reducers/mvmtModalReducer'
import toggleMindButtons from './reducers/mindButtonsReducer'
import toggleMvmtButtons from './reducers/mvmtButtonsReducer'

const rootReducer = combineReducers({
	user,
	filterState,
	toggleMvmtVisibility,
	toggleMindVisibility,
	toggleMindButtons,
	toggleMvmtButtons,
})

export default (state, action) => {
  return rootReducer(state, action)
}
