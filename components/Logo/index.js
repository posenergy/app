import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          height={130}
          width={130}
          alignSelf= 'center'
          source={require('./logo_image.png')}/>
      </View>
    )
  }
}
