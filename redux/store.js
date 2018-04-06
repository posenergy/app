import { compose, createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'

import rootReducer from './index'

const log = createLogger({
	collapsed: true,
})

const persistConfig = {
 key: 'root',
 storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Use the following line of code to autorehydrate and persist your store
// NOTE!!!!: uncomment and comment persistor.purge() if you want to clear persisting cache
// export const store = compose(persistedReducer, {}, applyMiddleware(thunk, log))
export const store = createStore(persistedReducer, applyMiddleware(thunk, log))
export const persistor = persistStore(store)
// persistor.purge()

store.subscribe(() => {
})

export default store

