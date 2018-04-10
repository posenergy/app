import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'

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
          color={tintColor}
          source={require('../components/TabIcons/activitiesMan.png')}
        />
      ),
    headerStyle: { backgroundColor: '#545680', justifyContent: 'center', borderWidth: 1 },
    headerTintColor: 'white',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Circular Std', fontSize: 22, lineHeight: 26},
    tabBarOptions: {activeTintColor: 'red',
      inactiveTintColor: 'gray', size: 25},
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    }),
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
      />
    ),
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveBackgroundColor: 'red',
      labelStyle: {
        color: 'white',
      },
    },
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Circular Std', fontSize: 22, lineHeight: 26},
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
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
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Circular Std', fontSize: 22, lineHeight: 26},
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    }),
  },
},

{
  headerMode: 'screen',
})

export default MainTabNavigator
