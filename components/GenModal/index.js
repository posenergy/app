import React, { Component } from 'react'
import {
  Modal,
  View,
  Text,
  Image,
} from 'react-native'
import styles from './styles'
import Button from '../Button'

export default class GenModal extends Component {
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
                <Image
                  source={require('../../images/logo_image.png')}
                  style={styles.image} />
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.text}</Text>
                <Text style={styles.bold}>{this.props.bold}</Text>
              <Image
                  source={this.props.image}
                  style={styles.place} />
                  <Button
                      onClick= {() => this.closeModal()}
                      type='modal'
                      textColor='white'
                      text= {this.props.bname}>
                  </Button>
              </View>
            </View>
          </Modal>
        </View>
    )
  }
}

