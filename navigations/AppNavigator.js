import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import React from 'react'

import SplashScreen from '../screens/SplashScreen'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'
import ScheduleScreen from '../screens/ScheduleScreen'

import MainTabWrapper from './MainTab'

import { HeaderBackButton } from 'react-navigation'

const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Landing: {
    screen: LandingScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
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
  Choose: {
    screen: ChooseScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Moment: {
    screen: MomentScreen,
  },
  Schedule: {
    screen: ScheduleScreen,
  },
}, {
  headerMode: 'screen',
  transitionConfig: () => ({
    screenInterpolator: (sceneProps) => {
      // Disable the transition animation when resetting to the home screen.
      if (
        sceneProps.index === 0 &&
        sceneProps.scene.route.routeName !== 'MainTab' &&
        sceneProps.scenes.length > 2
      ) return null

      // Otherwise, use the usual horizontal animation.
      return CardStackStyleInterpolator.forHorizontal(sceneProps)
    },
  }),
})

export default AppNavigator
