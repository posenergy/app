import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import ActivitiesStack from './ActivitiesStack'
import CalendarStack from './CalendarStack'
import ProfileScreen from '../screens/ProfileScreen'
import AboutModal from '../components/AboutModal'

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
  Calendar: {
    screen: CalendarStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
      />
    ),
    }),
  },
  Profile: {
    screen: ProfileScreen,
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
  initialRouteName: 'Activities',
  tabBarOptions: {
    activeTintColor: '#545680',
    style: {
      backgroundColor: 'white',
    },
  },
  navigationOptions: ({ navigation }) => ({
    headerRight: (
    <TouchableOpacity activeOpacity = { 0.5 } padding={200} onPress={() => navigation.navigate('About')}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>),
  headerStyle: { backgroundColor: '#545680', borderWidth: 1},
  headerTintColor: 'white',
  }),
  headerMode: 'screen',
})

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    About: {
      screen: AboutModal,
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
)
export default RootStack
