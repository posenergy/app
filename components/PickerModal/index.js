import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native'

import Button from '../../components/Button'
import styles from './styles'

export default class PickerScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {chosenDate: new Date(),
                  modalVisible: true}
    this.setDate = this.setDate.bind(this)
  }

  openModal = () => {
    this.setState({modalVisible: true})
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  getDateString(date) {
    let hours = date.getHours()
    let suffix = 'AM'
    if (hours > 12) {
      hours -= 12
      suffix = 'PM'
    } else if (hours === 12) {
      suffix = 'PM'
    }
    let month = date.toLocaleDateString()
    let stripzeroes = parseInt(month, 10)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    return monthNames[stripzeroes - 1] + ' ' + date.getDate() + ' ' + date.getFullYear() + '       ' + hours + ':' + date.getMinutes() + ' ' + suffix
   }
// The state will initially be passed in as a prop. Currently just generates today's date.

  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          activeOpacity= {1}
          onPress={() => this.closeModal()}>
          <Modal
            visible={this.state.modalVisible}
            justifyContent = "flex-end"
            transparent={true}
            closeOnTouchOutside = {true}>
            <View style={{
            flex: 0.9999,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            marginBottom: 50,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center'}}>
              <View style={styles.innerContainer}>
                <Text style={styles.transtextField}> Confirm Time </Text>
                <Text style={styles.textField}
                      textColor = '#545680'>
                  {this.getDateString(this.state.chosenDate)}
                </Text>
              <View style={styles.datePicker}>
                <DatePickerIOS
                  date={this.state.chosenDate}
                  onDateChange={this.setDate}
                />
              </View>
               <Button type='picker'
                  onClick={() => this.closeModal()}
                  text='Next' textColor='white'/>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    )
  }
}
