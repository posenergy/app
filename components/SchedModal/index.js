import React, { Component} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './styles'

export default class SchedModal extends Component {

  render() {
    return (
      <View style={styles.innerContainer}>
        <Image
          source={this.props.image}
          style={styles.image}/>
        <Text style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.italics}>{this.props.brand}</Text>
        <View height = '14%' width = '90%' flexDirection='column' alignItems='center' >
          <Text adjustsFontSizeToFit = {true}
                allowFontScaling = {true}
                numberOfLines={5}
                ellipsizeMode= 'tail'
                style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.var}>{this.props.varelement}</View>
        <View style={styles.var}>{this.props.varelement2}</View>
        <View width='100%'>{this.props.button}</View>
      </View>
    )
  }
}
