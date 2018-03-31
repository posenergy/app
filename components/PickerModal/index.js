import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  Text,
  Modal,
} from 'react-native'

import Button from '../../components/Button'
import styles from './styles'

export default class PickerScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {chosenDate: new Date(),
                  modalVisible: true,}
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
    return date.toLocaleDateString() + ' ' + hours + ':' + date.getMinutes() + ' ' + suffix
   }
// The state will initially be passed in as a prop. Currently just generates today's date.

  render() {
    return (
      <View style={styles.view}>
        <Modal
          visible={this.state.modalVisible}
          justifyContent = "flex-end"
          transparent={true}>
          <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
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
                onClick={() => this.resetNavigation('MainTab')}
                text='Next' textColor='white'/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
