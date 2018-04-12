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
        { this.props.image === '../src/journalIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/journalIcon.png')}/> }
        { this.props.image === '../src/yogaIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/yogaIcon.png')}/> }
        { this.props.image === '../src/danceIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/danceIcon.png')}/> }
        { this.props.image === '../src/strengthIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/strengthIcon.png')}/> }
        { this.props.image === '../src/HIITIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/hiitIcon.png')}/> }
        { this.props.image === '../src/barreIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/barreIcon.png')}/> }
        { this.props.image === '../src/runIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/runIcon.png')}/> }
        { this.props.image === '../src/streching_Icon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/stretching_Icon.png')}/> }
        { this.props.image === '../src/pilatesIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/pilatesIcon.png')}/> }
        { this.props.image === '../src/craftIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/craftIcon.png')}/> }
        { this.props.image === '../src/getInspiredIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/getInspiredIcon.png')}/> }
        { this.props.image === '../src/gratitudeIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/gratitudeIcon.png')}/> }
        { this.props.image === '../src/meditateIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/meditateIcon.png')}/> }
        { this.props.image === '../src/skinCareIcon.png' &&
          <Image style={styles.image}
          source={require('../../screens/src/skinCareIcon.png')}/> }
        <Text style={styles.bold}>{this.props.title}</Text>
        <Text style={styles.italics}>{this.props.brand}</Text>
        <Text style={styles.text}>What time works for you?</Text>
        <View style={styles.var}>{this.props.varelement}</View>
        <View width='100%'>{this.props.button}</View>
      </View>
    )
  }
}
