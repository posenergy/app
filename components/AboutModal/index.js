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
import CollapsibleMenu from '../CollapsibleMenu'
import StyleText from '../StyleText'


export default class AboutModal extends Component {
  state = {
    modalVisible: false,
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
                <TouchableOpacity
                    activeOpacity = { 0.5 }
                    style={styles.opacity}
                    onPress={this.closeModal}>
                    <Image
                    source={require('../../images/cancel.png')}
                    style={styles.image}
                    />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <StyleText text = "WHO WE ARE" />
                    <Text style={styles.text}>[+energy] was dreamed up by three ultra busy graduate students who believe we all need to make more time for our minds and bodies, giving us the energy necessary to live our lives fully! </Text>
                    <StyleText text = "HOW TO REACH US" />
                    <Text style={styles.text}>You can find us at positiveenergyapp.com, email us at positiveenergyapp@gmail.com, or follow us on Instagram @positive.energy.app </Text>
                    <StyleText text = "FAQ" />
                    <CollapsibleMenu/>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
    )
  }
}


