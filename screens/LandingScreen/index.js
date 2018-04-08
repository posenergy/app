import React from 'react'
import { ScrollView, ImageBackground } from 'react-native'
import styles from './styles'

import Logo from '../../components/Logo'
import Button from '../../components/Button'
import AboutModal from '../../components/AboutModal'

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageBackground
      source={require('../../images/gradient.png')}
      style = {styles.viewStyle}>
        <ScrollView>
        <AboutModal/>
        <Logo />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="grey"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Login" textColor="grey"
        />
        </ScrollView>
      </ImageBackground>
    )
  }

}
