import React from 'react'
import {
  Alert,
  ImageBackground,
  Text,
  Image,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import config from '../../config/config'
import styles from './styles'

import { prepopulate } from '../../redux/actions/userActions'
import { token } from '../../redux/actions/tokenActions'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

const mapStateToProps = state => ({
  token: state.token,
})

const mapDispatchToProps = {
  token,
  prepopulate,
}

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.initialState = {
      email: '',
      password: '',
      buttonClicked: false,
    }
    this.state = this.initialState
  }

  onSubmit() {
    this.validate({
      email: {required: true},
      password: {required: true},
    })
  }

  resetNavigation(targetRoute) {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: targetRoute, params: { genModalVisible: false } }) ],
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
        this.props.token(responseJSON.token)
        this.fetchUserInfo(responseJSON.token)
      } return responseJSON
    } catch(error) {
      this.setState({buttonClicked: false})
      console.error(error)
    }
  }
}


  render() {
    return (
      <ImageBackground
      source={require('../../images/gradient.png')}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
            contentContainerStyle={styles.innerContainer}>
            <View
              style={styles.view}
              flexDirection= 'column'
              justifyContent= 'flex-start'
              marginBottom= '13%'
              showsVerticalScrollIndicator = {false} >
            <Image
                style={styles.logoImage}
                height={130}
                width={130}
                marginTop='20%'
                marginBottom= '40%'
                alignSelf= 'center'
                source={require('../../images/logo_image.png')}/>
            <StyleTextInput
              pholder='Email'
              imagelink = {require('../../images/mail.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={email => this.setState({email})}/>
            <StyleTextInput
              pholder='Password'
              imagelink = {require('../../images/lock.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={password => this.setState({password})}
              passwordSecure={true}/>
            <Button
              type='login' onClick={() => !this.state.buttonClicked && this.loginUser(this.state.email, this.state.password)}
              text='Log In' textColor='grey'
              loading={this.state.buttonClicked}
              />
            <View style={{alignSelf: 'center'}}>
            <TouchableHighlight underlayColor='transparent' onPress={() => Alert.alert(
                'Forgot Password?',
                'Email positiveenergyapp@gmail.com for help!',
                [
                  {text: 'Ok'},
                ],
                { cancelable: true }
              )}>
            <Text style={{fontFamily: 'Circular Std', color: 'white'}}>Forgot Password?</Text>
            </TouchableHighlight>
            </View>
            </View>
          </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
