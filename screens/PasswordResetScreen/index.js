import React from 'react'
import {
  Alert,
  ImageBackground,
  Text,
  Image,
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

const mapDispatchToProps = {
  token,
  prepopulate,
}

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.initialState = {
      email: '',
      replaceToken: '',
      password: '',
      confirm: '',
      buttonClicked: false,
    }
    this.state = this.initialState
  }

  onSubmit() {
    this.validate({
      email: {required: true},
      replaceToken: {required: true},
      password: {required: true},
      confirm: {required: true},
    })
  }

  resetNavigation(targetRoute) {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
      }))
  }

  checkPwd(password) {
    if (password !== '') {
      if ((password.length < 6) || (password.length > 50) || (password.search(/\d/) === -1)) {
        Alert.alert(
        'Password is invalid.',
        'Must be at least 7 characters long and contain at least one number.',
        [
          {text: 'OK'},
        ],
        { cancelable: false })
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  validPassword(password, confirmpassword) {
    if(password === confirmpassword) {
      return true
    } else {
      Alert.alert(
      'Cannot Register User',
      'Passwords do not match',
      [
        {text: 'OK'},
      ],
      { cancelable: false })
      return false
    }
  }

  async resetPw(email, token, password, confirmpassword) {
    if (email === '') {
      return Alert.alert(
        'Unable to reset password',
        'Please Input an Email',
        [
          {text: 'Try Again'},
        ],
        { cancelable: true }
      )
    }
    if (token === '') {
        return Alert.alert(
          'Unable to reset password',
          'Please Input a Replacement Token',
          [
            {text: 'Try Again'},
          ],
          { cancelable: true }
        )
      }
    if (this.checkPwd(password) && this.validPassword(password, confirmpassword)) {
      this.setState({ buttonClicked: true })
      try {
        let responseJSON
        const apiUrl = `${config.apiUrl}/auth/pw/reset`
        let response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            token: token,
            newPassword: password,
          }),
        })
        if (!response.ok) {
          Alert.alert(
            'Unable to reset password',
            'Please try again! Did you receive a valid replacement code from Positive Energy admins?',
            [
              {text: 'Try Again'},
            ],
            { cancelable: true }
          )
          this.setState({ buttonClicked: false })
        } else {
            const {navigate} = this.props.navigation
            navigate('Landing', {})
        }
        return responseJSON
      } catch(error) {
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
                height={80}
                width={80}
                marginTop='8%'
                marginBottom= '3%'
                alignSelf= 'center'
                source={require('../../images/logo_image.png')}/>
            <StyleTextInput
              pholder='Email'
              imagelink = {require('../../images/mail.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={email => this.setState({email})}/>
            <StyleTextInput
              pholder='Replacement Code'
              imagelink = {require('../../images/lock.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={replaceToken => this.setState({replaceToken})}/>
            <StyleTextInput
              pholder='Password'
              imagelink = {require('../../images/lock.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={password => this.setState({password})}
              passwordSecure={true}/>
            <StyleTextInput
              pholder='Confirm Password'
              imagelink = {require('../../images/lock.png')}
              type='white'
              returnKeyType = {'next'}
              changeFunction={confirm => this.setState({confirm})}
              passwordSecure={true}/>
            <Text style={styles.link}>
                Passwords must be at least 7 characters long and contain at least one number.
            </Text>
            <Button
              type='login' onClick={() => !this.state.buttonClicked && this.resetPw(this.state.email, this.state.replaceToken, this.state.password, this.state.confirm)}
              text='Reset Password' textColor='grey'
              loading={this.state.buttonClicked}
              />
            </View>
          </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)
