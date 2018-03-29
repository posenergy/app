import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'

import { infoVisibility } from '../redux/actions/infoAction'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'

const mapStateToProps = state => ({
  visible: state.toggleInfoVisibility.visible,
})

const mapDispatchToProps = {
  infoVisibility,
}

const MainTabNavigator = TabNavigator({
  Activities: {
    screen: ActivitiesStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Browse Activities',
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
  headerMode: 'screen',
})

// export default connect(mapStateToProps, mapDispatchToProps)(MainTabNavigator)
export default MainTabNavigator
