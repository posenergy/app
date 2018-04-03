import React, { Component }from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'

import AboutModal from '../components/AboutModal'
import App from '../App.js'

import { infoVisibility } from '../redux/actions/infoAction'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'

// const mapStateToProps = state => ({
//   visible: state.toggleInfoVisibility.visible,
// })

// const mapDispatchToProps = {
//   infoVisibility,
// }

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
    headerRight: <TouchableOpacity 
      activeOpacity = { 0.5 } 
      padding={200}
      onPress={() => {navigation.navigate('Modal')}}
      >
      <Image source={require('../images/info.png')}/>
      
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
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
    headerRight: <TouchableOpacity 
      activeOpacity = { 0.5 } 
      padding={200}
      onPress={() => {navigation.setParams({info: true})}}
      >
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
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}
      onPress={() => navigation.setParams({info: true})}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    }),
  },
},
  {
    // mode: 'modal',
    headerMode: 'screen',
  }
)

const MetaNav = (props) => {

  const state = props.navigation.state

  _onCloseModal= () => {
      this.state = false
  }

  if (state.params && state.params.info) {
    return 
      <View>
        <MainTabNavigator {...props} />
          <AboutModal 
          close = {this._onCloseModal.bind(this)}/>
      </View>
  }

  return (
    <View>
      <MainTabNavigator {...props} />
    </View>
  )
}
MetaNav.router = MainTabNavigator.router

export default MetaNav
// export default connect(mapStateToProps, mapDispatchToProps)(MetaNav)

