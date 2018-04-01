import { NavigationActions } from 'react-navigation' 

import { LOGOUT } from '../actions/navActions'
import AppNavigator from '../../navigations/AppNavigator'


// I don't know if maintab is the correct place to go to here
// const initialState = AppNavigator.router.getStateForAction(
// 	AppNavigator.router.getActionForPathAndParams('MainTab')
// )

const nav = (state = initialState, action) => {
	let nextState
	switch (action.type) {
		case LOGOUT: 
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'Login' })
					]
				})
			)
		default: 
			nextState = AppNavigator.router.getStateForAction(action, state)
			break
	}
	return nextState || state
}

export default nav
