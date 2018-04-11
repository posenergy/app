import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import React from 'react'

import SplashScreen from '../screens/SplashScreen'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabWrapper from './MainTab'

import { HeaderBackButton } from 'react-navigation'

const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Landing: {
    screen: LandingScreen,
  },
  Login: {
    screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton tintColor='#545680' onPress={() => navigation.goBack(null)} />,
    }),
  },
  Register: {
    screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton tintColor='#545680' onPress={() => navigation.goBack(null)} />,
    }),
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
