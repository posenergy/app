import React from 'react'
import { Image } from 'react-native'
import {TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import ActivitiesStack from './ActivitiesStack'
import CheckinScreen from '../screens/CheckinScreen'
import MessagesScreen from '../screens/MessagesScreen'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'


const MainTabNavigator = TabNavigator({
  Activities: {
    screen: ActivitiesStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Browse Activities',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/activitiesMan.png')}
        />
      ),
    }),
  },
  Checkin: {
    screen: CheckinScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
        />
      ),
    }),
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Activities View',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/profile.png')}
        />
      ),
    }),
  },
},

{
  headerMode: 'screen',
})

export default MainTabNavigator
