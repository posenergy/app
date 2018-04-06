import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export default class ChooseScreen extends React.Component {

  render() {
    return(
      <View style={styles.viewStyle}>

        <TouchableOpacity
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'movement'})
          }}>
          <Image style={styles.mvmt} source={require('./src/mvmt.png')}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'mindfulness'})
          }}>
          <Image style={styles.mind} source={require('./src/mind.png')}/>
        </TouchableOpacity>

      </View>

    )
  }
}
