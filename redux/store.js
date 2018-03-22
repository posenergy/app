import {createStore} from 'redux'
import user from './reducers/userReducer'
import rootReducer from './index'

export const store = createStore(rootReducer,{})

store.subscribe(() => {
    console.log('storeitherepls',store.getState)
})

export default store