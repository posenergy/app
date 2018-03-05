import React from 'react'
<<<<<<< HEAD
import { ScrollView, ImageBackground } from 'react-native'
=======
import { View } from 'react-native'
<<<<<<< HEAD
import Thumbnail from 'react-native-thumbnail-video';
>>>>>>> Added thumbnail functionality.
=======
>>>>>>> Added modal

import styles from './styles'

import Logo from '../../components/Logo'
import Button from '../../components/Button'


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
