import React, { Component} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import Button from '../Button'
import styles from './styles'

export default class SchedModal extends Component {

  render() {
    return (
      <View style={styles.innerContainer}>
        <Image
          source={this.props.image}
          style={styles.image}/>
        <Text style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.var}>{this.props.varelement}</View>
        <View>{this.props.varelement2}</View>
        <Button type='modal'
        onClick={() => this.props.navigation.navigate('Packages')}
        text={this.props.buttontext} textColor='white'/>
      </View>
    )
  }
}
