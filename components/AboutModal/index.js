import React, { Component } from 'react'
import {
  Modal,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import Button from '../Button'

export default class AboutModal extends Component {
  state = {
    modalVisible: true,
  };

  openModal = () => {
    this.setState({modalVisible: true})
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  render() {
    return (
        <View style={styles.Container}>
          <Modal
              visible={this.state.modalVisible}
              transparent={true}
              blurRadius={1}
              animationType={'slide'}
              onRequestClose={this.closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                  <TouchableOpacity
                  activeOpacity = { .5 }
                  style={styles.opacity}
                  onPress={this.closeModal}>
                  <Image
                  source={require('../../images/cancel.png')}
                  style={styles.image}
                  />
                  </TouchableOpacity>
                  <Text style={styles.textUnderline}>WHO WE ARE</Text>
                  <Text style={styles.text}>[+energy] was dreamed up by three ultra busy graduate students who believe we all need to make more time for our minds and bodies, giving us the energy necessary to live our lives fully! </Text>
                  <Text style={styles.textUnderline}>HOW TO REACH US</Text>
                  <Text style={styles.text}>You can find us at positiveenergyapp.com, email us at positiveenergyapp@gmail.com, or follow us on Instagram @positive.energy.app </Text>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
    )
  }
}

