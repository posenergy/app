import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export default class SearchScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Choose',
  })

  render() {
    return(
      <View style={styles.viewStyle}>

        <TouchableOpacity style={styles.button}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'Movement'})
          }}>
          <Image source={require('./src/mvmt.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'Mindfulness'})
          }}>
          <Image source={require('./src/mind.png')}/>
        </TouchableOpacity>

      </View>

    )
  }
}