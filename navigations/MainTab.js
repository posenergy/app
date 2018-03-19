import React from 'react'
import { Image } from 'react-native'
import {TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import PackagesScreen from '../screens/PackagesScreen'
import FeedbackScreen from '../screens/FeedbackScreen'
import CheckinScreen from '../screens/CheckinScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MomentScreen from '../screens/MomentScreen'
import ScheduleScreen from '../screens/ScheduleScreen'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'


const MainTabNavigator = TabNavigator({
  Packages: {
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
  Activity: {
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
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar View',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/checkin.png')}
        />
      ),
    }),
  },
  Messages: {
    screen: MomentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Activities View',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/messages.png')}
        />
      ),
    }),
  },
},

{
  headerMode: 'screen',
})

export default MainTabNavigator
