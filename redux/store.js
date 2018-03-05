import {createStore} from 'redux'
import user from './reducers/userReducer'

export const store = createStore(user,{})

store.subscribe(() => {
    console.log('storeitherepls',store.getState)
})

export default store