import React from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert, ImageBackground, Text, View } from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import config from '../../config/config'
import styles from './styles'

import { token } from '../../redux/actions/tokenActions'
import { prepopulate, onboarding } from '../../redux/actions/userActions'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

const mapStateToProps = state => ({
  token: state.token,
})

const mapDispatchToProps = {
  token,
  prepopulate,
  onboarding,
}

class RegisterScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      gender: '',
      buttonClicked: false,
    }
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
                               responseJSON.email, responseJSON._id)
      } return responseJSON
    } catch(error) {
      this.setState({ buttonClicked: false })
      console.error(error)
    }
  }

  resetNavigation(targetRoute) {
     const navigateAction = NavigationActions.reset({
       index: 0,
       actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
     })
     this.props.navigation.dispatch(navigateAction)
   }

  async writeUser(name, email, password, confirmpassword) {
    if (name === '') {
      return Alert.alert(
        'Unable to create user',
        'Please Input a Name',
        [
          {text: 'Try Again'},
        ],
        { cancelable: true }
      )
    }
    if (this.checkPwd(password) && this.validPassword(password, confirmpassword) && this.validEmail(email)) {
      this.setState({ buttonClicked: true })
      try {
        let responseJSON
        const apiUrl = `${config.apiUrl}/users`
        let response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            hash: password,
          }),
        })
        if (!response.ok) {
          Alert.alert(
            'Unable to create user',
            'Please try again! Is it possible that your email is already in use?',
            [
              {text: 'Try Again'},
            ],
            { cancelable: true }
          )
          this.setState({ buttonClicked: false })
        } else {
          this.props.onboarding()
          responseJSON = await response.json()
          await this.props.token(responseJSON.token)
          this.fetchUserInfo(responseJSON.token)
          this.resetNavigation('MainTab')
        }
        return responseJSON
      } catch(error) {
        console.error(error)
      }
    }
  }


  validEmail(email) {
    if (email !== '') {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(reg.test(email) === false) {
        Alert.alert(
        'Cannot Register User',
        'Email is invalid.',
        [
          {text: 'OK'},
        ],
        { cancelable: false })
        return false
      } else {
        return true
      }
      // no error displayed if field is not filled in
    } else {
      return true
    }
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

  render() {
    return (
      <ImageBackground
      source={require('../../images/gradient.png')}
      style={styles.container}>
      <TouchableWithoutFeedback alignItems='center' onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
            alignItems= 'center'>
          <View
            style={styles.view}>
            <View alignItems= 'center'>
              <StyleTextInput
                pholder='Name'
                imagelink = {require('../../images/profile.png')}
                passwordSecure = {false}
                changeFunction ={name => this.setState({name})}
                returnKeyType = {'next'}/>
              <StyleTextInput
                pholder='Email'
                imagelink = {require('../../images/mail.png')}
                passwordSecure = {false}
                changeFunction ={email => this.setState({email})}
                returnKeyType = {'next'}/>
              <StyleTextInput
                pholder='Password'
                imagelink = {require('../../images/lock.png')}
                passwordSecure = {true}
                changeFunction = {password => this.setState({password})}
              />
              <StyleTextInput
                pholder='Confirm Password'
                imagelink = {require('../../images/lock.png')}
                passwordSecure = {true}
                changeFunction ={confirmpassword => this.setState({confirmpassword})}
              />
              <Text style={styles.link}>
                Passwords must be at least 7 characters long and contain at least one number.
              </Text>
              <Button type='login'
                onClick={() => !this.state.buttonClicked && this.writeUser(this.state.name, this.state.email, this.state.password, this.state.confirmpassword)}
                loading={this.state.buttonClicked}
                text='Sign Up' textColor='grey'/>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterScreen)
