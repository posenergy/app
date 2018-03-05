import React from 'react'
import { Image } from 'react-native'
import {TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import PackagesScreen from '../screens/PackagesScreen'
import FeedbackScreen from '../screens/FeedbackScreen'
import CheckinScreen from '../screens/CheckinScreen'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'


const MainTabNavigator = TabNavigator({
  Activities: {
    screen: PackagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Packages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/packages.png')}
      />
    ),
  }),
},
  Calendar: {
    screen: FeedbackScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Feedback',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/feedback.png')}
        />
      ),
    }),
  },
  Profile: {
    screen: CheckinScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar View',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/checkin.png')}
        />
      ),
    }),
  },
},

{
  headerMode: 'screen',
})

export default MainTabNavigator
