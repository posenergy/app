import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import SplashScreen from '../screens/SplashScreen'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTab'

export default AppNavigator = StackNavigator({
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
    screen: MainTabNavigator,
  },
})
