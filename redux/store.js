import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './index'

const log = createLogger({
	collapsed: true,
})

export const store = createStore(rootReducer, {}, applyMiddleware(log))

store.subscribe(() => {
})

export default store