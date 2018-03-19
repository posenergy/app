import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTab'
import AboutScreen from '../screens/AboutScreen'


const AppNavigator = StackNavigator({
  About: {
    screen: AboutScreen,
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
