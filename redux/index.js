import { combineReducers } from 'redux'

import user from './reducers/userReducer'
import filterState from './reducers/momentReducer'
import toggleMindVisibility from './reducers/mindModalReducer'
import toggleMvmtVisibility from './reducers/mvmtModalReducer'
import toggleMindButtons from './reducers/mindButtonsReducer'
import toggleMvmtButtons from './reducers/mvmtButtonsReducer'
import tokenReducer from './reducers/tokenReducer'
// import nav from './reducers/navReducer'


const rootReducer = combineReducers({
  user,
  filterState,
  toggleMvmtVisibility,
  toggleMindVisibility,
  toggleMindButtons,
  toggleMvmtButtons,
  tokenReducer,
  
})

export default (state, action) => {
  return rootReducer(state, action)
}
