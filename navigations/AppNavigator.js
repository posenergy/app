import { StackNavigator} from 'react-navigation' // 1.0.0-beta.14

import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTab'

const AppNavigator = StackNavigator({
  Landing: {
    screen: LandingScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  MainTab: {
    screen: MainTabNavigator,
  },
})

export default AppNavigator
