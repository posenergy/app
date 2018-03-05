import React, { Component } from 'react'
import { View, Button, Modal } from 'react-native'
import styles from './styles'

import MvmtModal from '../../components/MvmtModal'
import MindModal from '../../components/MindModal'

export default class FilterModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      category: false,
      visible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    if (this.state.category) {
      return (
        <View style={styles.Container}>
          <Modal
              visible={this.state.visible}
              animationType={'slide'}>

            <View style={styles.modalContainer}>

              <MindModal/>

            </View>
          </Modal>
        </View>
      )
    }
    return (
      <View style={styles.Container}>
        <Modal
            visible={this.state.visible}
            animationType={'slide'}>

          <View style={styles.modalContainer}>
              <Button
                style={styles.button}
                onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                title= "Apply"
              />
            <MvmtModal/>
            <View>

            </View>
          </View>
        </Modal>
      </View>
    )
  }
}