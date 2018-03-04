import React from 'react'
import { Alert, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import ValidationComponent from 'react-native-form-validator'
import {connect} from 'react-redux'

import config from '../../config/config'
import styles from './styles'

import {login} from '../../redux/actions/userActions'
import Logo from '../../components/Logo'
import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'


const mapDispatchToProps = {
  login,
}

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit() {
    this.validate({
      email: {required: true},
      password: {required: true},
    })
  }

  resetNavigation(targetRoute) {
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'MainTab'}) ],
    })
    this.props.navigation.dispatch(navigateAction)
  }

  async loginUser(email, password) {
  if ((email !== '') && (password !== '')) {
    try {
      let responseJSON
      const apiUrl = `${config.apiUrl}/auth/login`
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      if (!response.ok) {
        Alert.alert(
          'Login Incorrect',
          'Please check your email and password.',
          [
            {text: 'Try Again'},
          ],
          { cancelable: true }
        )
        return false
      } else {
        this.props.login('hi', email, password)
        this.resetNavigation('MainTab')
        responseJSON = await response.json()
      }

      return responseJSON
    } catch(error) {
      console.error(error)
    }
  }
}

  // async getActiveRecent() {
  //   try {
  //     const response = await fetch(config.apiUrl + '/users', {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     if (response.ok) {
  //       const responseJSON = await response.json()
  //     }
  //   } catch(error) {
  //     console.error(error)
  //   }
  // }

  render() {
    return (
      <View style = {styles.viewStyle}>
        <Logo/>
        <StyleTextInput
          pholder='Email'
          changeFunction={email => this.setState({email})}/>
        <StyleTextInput
          pholder='Password'
          changeFunction={password => this.setState({password})}
          passwordSecure={true}/>
        <Button
          type='login' onClick={() => this.loginUser(this.state.email, this.state.password)}
          text='Login' textColor='black'/>
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)