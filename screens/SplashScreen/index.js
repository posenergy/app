import React from 'react'
import { View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import config from '../../config/config'

import { prepopulate } from '../../redux/actions/userActions'


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
        // if the user exists, then check the backend and extract proper data
        this.fetchUserInfo(this.props.token)
        this.resetNavigation('MainTab')
      }
    }
  }

  render() {
    this.checkProps(this.props)
    return(
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3E080',
        flex: 1}}>
        <View>
        <Image
          style={{height: 130, width: 130, alignSelf: 'center'}}
          source={require('../../images/logo_image.png')}/>
      </View>>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
