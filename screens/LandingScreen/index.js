import React from 'react'
import { ScrollView, ImageBackground } from 'react-native'

import styles from './styles'

import Logo from '../../components/Logo'
import Button from '../../components/Button'
import SchedModal from '../../components/SchedModal'
import RadioButtonList from '../../components/RadioButtonList'

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
        <Logo />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="black"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Login" textColor="black"
        />

        </ScrollView>
      </ImageBackground>
    )
  }

}
