import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './styles'

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
        <View style={styles.view}>
        <Image
          style={styles.logoImage}
          source={require('../../images/logo_image.png')}/>
        <Text style={styles.blurb}>
        Discover and schedule wellness activities
        </Text>
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="grey"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Log In" textColor="grey"
        />
        </View>
      </ImageBackground>
    )
  }

}
