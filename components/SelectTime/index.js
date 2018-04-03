import React, { Component} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './styles'

export default class SelectTime extends Component {

  render() {
    return (
      <View style={styles.innerContainer}>
        <Image
          source={this.props.image}
          style={styles.image}/>
        <Text style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.italics}>{this.props.brand}</Text>
        <Text style={styles.text}>What time works for you?</Text>
        <View style={styles.var}>{this.props.varelement}</View>
        <View width='100%'>{this.props.button}</View>
      </View>
    )
  }
}
