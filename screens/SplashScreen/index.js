import React from 'react'
import { View, ImageBackground } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import config from '../../config/config'
import styles from './styles'

import { prepopulate } from '../../redux/actions/userActions'

import Logo from '../../components/Logo'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  rehydrated: state._persist.rehydrated,
})

const mapDispatchToProps = {
  prepopulate,
}

class SplashScreen extends React.Component {

  resetNavigation(targetRoute) {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
      }))
  }

  async fetchUserInfo(token) {
    try {
      let responseJSON
      const apiUrl = `${config.apiUrl}/users/id`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      })
      if (!response.ok) {
        return false
      } else {
        responseJSON = await response.json()
        this.props.prepopulate(responseJSON.name, responseJSON.recoverTime,
                               responseJSON.dayStart, responseJSON.dayEnd,
                               responseJSON.email)
      } return responseJSON
    } catch(error) {
      console.error(error)
    }
  }

  checkProps(props) {
    if(props.rehydrated) {
      if(props.token === '') {
        this.resetNavigation('Landing')
      } else {
        // if the user exist, then check the backend and extract proper data
        this.fetchUserInfo(this.props.token)
        this.resetNavigation('MainTab')
      }
    }
  }

  render() {
    this.checkProps(this.props)
    return(
      <View>
        <ImageBackground
          source={require('../../images/gradient.png')}
          style={styles.container}/>
        <Logo/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
