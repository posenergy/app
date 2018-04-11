import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

import SplashScreen from '../screens/SplashScreen'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabWrapper from './MainTab'

const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
  },
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
    screen: MainTabWrapper,
  },
}, {
  transitionConfig: () => ({
    screenInterpolator: (sceneProps) => {
      // Disable the transition animation when resetting to the home screen.
      if (
        sceneProps.index === 0 &&
        sceneProps.scene.route.routeName !== 'Home' &&
        sceneProps.scenes.length > 2
      ) return null

      // Otherwise, use the usual horizontal animation.
      return CardStackStyleInterpolator.forHorizontal(sceneProps)
    },
  }),
})

export default AppNavigator
