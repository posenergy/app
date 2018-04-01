import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export default class ChooseScreen extends React.Component {

  render() {
    return(
      <View style={styles.viewStyle}>

        <TouchableOpacity style={styles.button}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'Movement'})
          }}>
          <Image style={styles.image}
            source={require('./src/mvmt.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'Mindfulness'})
          }}>
          <Image style={styles.image}
            source={require('./src/mind.png')}/>
        </TouchableOpacity>

      </View>

    )
  }
}
