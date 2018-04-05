import React, { Component} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './styles'

export default class CalendarConfirm extends Component {

  render() {
    return (
      <View style={styles.innerContainer}>
        <Image
          source={this.props.image}
          style={styles.image}/>
        <Text
          adjustsFontSizeToFit = {true}
          allowFontScaling = {true}
          numberOfLines={2}
          textAlign='center'
          textAlignVertical='center'
          style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.italics}>{this.props.brand}</Text>
        <View style={styles.view} >
          <Text adjustsFontSizeToFit = {true}
                textAlign='center'
                textAlignVertical='center'
                allowFontScaling = {true}
                numberOfLines={5}
                ellipsizeMode= 'tail'
                style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.var}>{this.props.varelement}</View>
        <View style={styles.button}>{this.props.button}</View>
      </View>
    )
  }
}
