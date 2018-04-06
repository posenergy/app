import React from 'react'
import fetchival from 'fetchival'
import { ImageBackground, ScrollView, Alert} from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import config from '../../config/config'
import styles from './styles'

import { login } from '../../redux/actions/userActions'
import { token } from '../../redux/actions/tokenActions'

import Logo from '../../components/Logo'
import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

const mapStateToProps = state => ({
  token: state.token,
})

const mapDispatchToProps = {
  login,
  token,
}

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props)

    this.initialState = {
      email: '',
      password: '',
    };
    this.state = this.initialState;
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
        actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
      }))
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
      } 
      else {
        this.props.login(this.state.email)
        this.resetNavigation('MainTab')
        responseJSON = await response.json()
        this.props.token(responseJSON.token)

        // console.log(this.props.token(responseJSON.token))
        // console.log("###############")
        await console.log(this.props.token)

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
        type='login' onClick={() => this.loginUser(this.state.email, this.state.password)}
        text='Login' textColor='black'/>
      </ScrollView>
      </ImageBackground>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
