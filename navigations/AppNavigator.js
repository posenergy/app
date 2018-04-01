import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation' // 1.0.0-beta.14
import { connect } from 'react-redux'

import LandingScreen from '../screens/LandingScreen'
import ChooseScreen from '../screens/ChooseScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTabNavigator from './MainTab'

// const mapStateToProps = state => ({
//   nav: state.nav
// })

const MainAppNavigator = StackNavigator({
  Landing: {
    screen: LandingScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  MainTab: {
    screen: MainTabNavigator,
  },
})

        // navigation = {addNavigationHelpers({
        //   dispatch: this.props.dispatch,
        //   state: this.props.nav,
        // })}

class AppNavigator extends Component {
  render () {
    return (
      <MainAppNavigator 
      />
    )
  }
}

export default AppNavigator
