
import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'

import { Image, TouchableOpacity } from 'react-native'
import { close, open } from '../redux/actions/aboutModalActions.js'

import AboutModal from '../components/AboutModal'
import ActivitiesStack from './ActivitiesStack'
import CalendarStack from './CalendarStack'
import ProfileScreen from '../screens/ProfileScreen'
import React from 'react'
import { TabNavigator } from 'react-navigation' // 1.0.0-beta.14
import { View } from 'react-native'
import { connect } from 'react-redux'

class InfoButton extends React.Component {
  render() {
    return <TouchableOpacity activeOpacity={0.5} padding={200} onPress={() => {
      this.props.open()
    }}>
      <Image source={require('../images/info.png')} />
    </TouchableOpacity>
  }
}
const ConnectedInfoButton = connect(state => ({}), { open })(InfoButton)

const MainTabNavigator = TabNavigator({
  Activities: {
    screen: ActivitiesStack,
    navigationOptions: () => {
      return ({
        title: 'Browse Activities',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../components/TabIcons/activitiesMan.png')}
          />
        ),
      })
    },
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
},{
  initialRouteName: 'Activities',
  tabBarOptions: {
    activeTintColor: '#545680',
    style: {
      backgroundColor: 'white',
    },
  },
  navigationOptions: ({ navigation }) => ({
    headerRight: <ConnectedInfoButton />,
    headerStyle: { backgroundColor: '#545680' },
    headerTintColor: 'white',
  }),
  headerMode: 'screen',
})


class MainTabWrapper extends React.Component {
  render() {
    return <View style={{ flex: 1 }}>
      <AboutModal modalVisible={this.props.open} onClose={this.props.close} />
      <MainTabNavigator navigation={this.props.navigation} />
    </View>
  }
}

MainTabWrapper.router = MainTabNavigator.router

export default connect(state => ({
  open: state.aboutModal.open,
}), { close })(MainTabWrapper)