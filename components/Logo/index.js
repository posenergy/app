import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('./logo_image2.png')}/>
        <Image
          style={styles.logoText}
          source={require('./logo_text.png')}/>
      </View>
    )
  }
}
