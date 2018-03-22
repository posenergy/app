import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import {TabNavigator } from 'react-navigation' // 1.0.0-beta.14

import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AboutScreen from '../screens/AboutScreen'

import '../components/TabIcons/packages.png'
import Button from '../components/Button'
import AboutModal from '../components/AboutModal'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'

openModal = () => {
    this.setState({modalVisible: true})
  }

renderModal = () => {
  return (
    <View
      flex= {1}
      alignItems= 'center'
      justifyContent= 'center'>
      <AboutModal/>
    </View>
  )
}

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
    headerRight: <TouchableOpacity activeOpacity = { .5 } onPress={() => this.renderModal()} padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1 },
    headerTintColor: 'white',
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
    headerRight: <TouchableOpacity activeOpacity = { .5 } onPress={() => this.renderModal()} padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    }),
  },
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
        />
      ),
      headerRight: <TouchableOpacity activeOpacity = { .5 } onPress={() => this.renderModal()} padding={200}>
        <Image source={require('../images/info.png')}/>
      </TouchableOpacity>,
      headerStyle: { backgroundColor: '#545680', borderWidth: 1},
      headerTintColor: 'white',
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
    headerRight: <TouchableOpacity activeOpacity = { .5 } onPress={() => this.renderModal()} padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    }),
  },
},

{
  headerMode: 'screen',
})

export default MainTabNavigator
