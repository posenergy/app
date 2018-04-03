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
        <Text
          adjustsFontSizeToFit = {true}
          allowFontScaling = {true}
          numberOfLines={1}
          style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.italics}>{this.props.brand}</Text>
        <View marginBottom= '2%' height = '14%' width = '90%' justifyContent= 'center' alignItems='center' >
          <Text adjustsFontSizeToFit = {true}
                textAlign='center'
                textAlignVertical='center'
                allowFontScaling = {true}
                numberOfLines={5}
                ellipsizeMode= 'tail'
                style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.var}>{this.props.varelement}</View>
        <View style={styles.var2}>{this.props.varelement2}</View>
        <View flex={1} width='100%'>{this.props.button}</View>
      </View>
    )
  }
}
