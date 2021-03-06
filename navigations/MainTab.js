import { Image, TouchableOpacity } from 'react-native'
import { close, open } from '../redux/actions/aboutModalActions.js'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AboutModal from '../components/AboutModal'
import ActivitiesStack from './ActivitiesStack'
import CalendarStack from './CalendarStack'
import ProfileStack from './ProfileStack'

import React from 'react'
import { TabNavigator } from 'react-navigation' // 1.0.0-beta.14
import { View } from 'react-native'
import { connect } from 'react-redux'


class InfoButton extends React.Component {
  render() {
    return <TouchableOpacity activeOpacity={0.5} padding={200} onPress={() => {
      this.props.open()
    }}>
      <Image source={require('../images/info.png')} style={{height: 30, width: 30}} marginRight={10} marginBottom={5}/>
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
          <Ionicons name="md-walk" size={30} color={tintColor} />
        ),
      })
    },
  },
  Calendar: {
    screen: CalendarStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-calendar" size={30} color={tintColor} />
    ),
    }),
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-person" size={30} marginBottom={0} color={tintColor} />
      ),
    }),
  },
}, {
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
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center', marginBottom: 5, fontFamily: 'Circular Std', fontSize: 19, lineHeight: 26},
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
