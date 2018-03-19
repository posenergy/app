import React, { Component} from 'react'
import {
  ScrollView,
  View,
  Text,
} from 'react-native'
import styles from './styles'

export default class AboutModal extends Component {

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.innerContainer}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.textUnderline}>WHO WE ARE</Text>
            <Text style={styles.text}> [+energy] was dreamed up by three ultra busy graduate students who believe we all need to make more time for our minds and bodies, giving us the energy necessary to live our lives fully! </Text>
            <Text style={styles.textUnderline}>HOW TO REACH US</Text>
            <Text style={styles.text}> You can find us at positiveenergyapp.com, email us at positiveenergyapp@gmail.com, or follow us on Instagram @positive.energy.app </Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}


