import React from 'react'
import { View } from 'react-native'

import styles from './styles'

import StyleTextInput from '../../components/StyleTextInput'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  resetPassword() {
      // Reset password
  }

  render() {
    return (
      <View style = {styles.viewStyle}>
        <Logo />
        <StyleTextInput
            pholder='Email'
            passwordSecure = {false}
            changeFunction ={email => this.setState({email})}
        />
        <Button style={styles.button} type='login' onClick={() => this.resetPassword()}
          text='Reset Password' textColor='black'
        />
      </View>
    )
  }

}
