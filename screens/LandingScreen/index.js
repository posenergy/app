import React from 'react'
import { View } from 'react-native'

import styles from './styles'

import Logo from '../../components/Logo'
import Button from '../../components/Button'


export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = {styles.viewStyle}>
        <Logo />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="black"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Login" textColor="black"
        />
      </View>
    )
  }

}
