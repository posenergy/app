import React from 'react'
import { Image } from 'react-native'
import {TabNavigator } from 'react-navigation' // 1.0.0-beta.14

<<<<<<< HEAD
import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'
=======
import PackagesScreen from '../screens/PackagesScreen'
import FeedbackScreen from '../screens/FeedbackScreen'
import CheckinScreen from '../screens/CheckinScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MomentScreen from '../screens/MomentScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
>>>>>>> Some minor changes

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
          source={require('../components/TabIcons/activitiesMan.png')}
        />
      ),
    }),
  },
<<<<<<< HEAD
  Calendar: {
    screen: CalendarScreen,
=======
  Schedule: {
    screen: ScheduleScreen,
>>>>>>> Some minor changes
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
        />
      ),
    }),
  },
<<<<<<< HEAD
  Profile: {
    screen: ProfileScreen,
=======
  Messages: {
    screen: MomentScreen,
>>>>>>> Some minor changes
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
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
