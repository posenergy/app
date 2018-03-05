import React, { Component} from 'react'
import {
  Modal,
  View,
  Text,
  Image,
} from 'react-native'
import styles from './styles'

export default class SchedModal extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible: true})
  }

  closeModal() {
    this.setState({modalVisible: false})
  }


  render() {
    return (
        <View style={styles.Container}>
          <Modal
              visible={this.state.modalVisible}
              transparent={true}
              blurRadius={1}
              onRequestClose={() => this.closeModal()}>
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Image
                  source={this.props.image}
                  style={styles.image}/>
                <Text style={styles.bold}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.text}</Text>
                <View style={styles.var}>{this.props.varelement}</View>
              </View>
            </View>
          </Modal>
        </View>
    )
  }
}
