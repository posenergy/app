import React from 'react'
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import ValidationComponent from 'react-native-form-validator'

import config from '../../config/config'
import styles from './styles'

import Logo from '../../components/Logo'
import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'
import { NavigationActions } from 'react-navigation'


export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      buttonClicked: false,
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
     actions: [ NavigationActions.navigate({ routeName: targetRoute}) ],
   })
   this.props.navigation.dispatch(navigateAction)
 }

  async loginUser(email, password) {
  if (email === '') {
    Alert.alert(
      'Login Incorrect',
      'No Email Given.',
      [
        {text: 'Try Again'},
      ],
      { cancelable: true }
    )
  }
  if (password === '') {
    Alert.alert(
      'Login Incorrect',
      'No Password Given.',
      [
        {text: 'Try Again'},
      ],
      { cancelable: true }
    )
  }
  if ((email !== '') && (password !== '')) {
    this.setState({buttonClicked: true})
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
        this.setState({buttonClicked: false})
        return false
      } else {
        this.resetNavigation('MainTab')
        responseJSON = await response.json()
      }

      return responseJSON
    } catch(error) {
      this.setState({buttonClicked: false})
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
      <ImageBackground
      source={require('../../images/gradient.png')}
      style={styles.container}>
      <ScrollView
        style={styles.view}
        showsVerticalScrollIndicator = {false} >
      <Logo/>
      <StyleTextInput
        pholder='Email'
        imagelink = {require('../../images/mail.png')}
        type='white'
        changeFunction={email => this.setState({email})}/>
      <StyleTextInput
        pholder='Password'
        imagelink = {require('../../images/lock.png')}
        type='white'
        changeFunction={password => this.setState({password})}
        passwordSecure={true}/>
      <Button
<<<<<<< HEAD
        type='login' onClick={() => !this.state.buttonClicked && this.loginUser(this.state.email, this.state.password)}
        text='Login' textColor='black'
        loading={this.state.buttonClicked}
        />
      <View style={{alignSelf: 'center'}}>
      <TouchableHighlight onPress={() => Alert.alert(
          'Forgot Password?',
          'Email positiveenergy@gmail.com for help!',
          [
            {text: 'Ok'},
          ],
          { cancelable: true }
        )}>
      <Text style={{color: 'white'}}>Forgot Password?</Text>
      </TouchableHighlight>
      </View>
=======
        type='login' onClick={() => this.loginUser(this.state.email, this.state.password)}
        text='Login' textColor='grey'/>
>>>>>>> origin
      </ScrollView>
      </ImageBackground>
    )
  }
}
