import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import AboutModal from '../components/AboutModal/index'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MetaNav from './MainTab'

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
    screen: MetaNav,
  },
})
export default Root = StackNavigator({
    App: { screen: AppNavigator },
    Modal: { screen: AboutModal },
  },

{
  mode: 'modal',
  headerMode: 'none',
}
)

// export default AppNavigator
