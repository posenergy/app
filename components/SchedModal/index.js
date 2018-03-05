import React, { Component, PropTypes } from "react";
import {
  Modal,
  View,
  Text,
  Image,
} from "react-native";
import styles from './styles'
import Button from '../Button'

export default class SchedModal extends Component {
  state = {
    modalVisible: true,
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
                <View>{this.props.varelement}</View>
              </View>
            </View>
          </Modal>
        </View>
    )
  }
}
