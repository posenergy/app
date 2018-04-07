import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native'

import Button from '../../components/Button'
import styles from './styles'

export default class PickerScreen extends Component {
  constructor(props) {
    super(props)
    this.setDate = this.setDate.bind(this)
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
    let time = ''
    let month = date.toLocaleDateString()
    let stripzeroes = parseInt(month, 10)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    let minutes = date.getMinutes()
    if (minutes < 10) {
      time = '0' + minutes
    } else {
      time = minutes
    }
    return monthNames[stripzeroes - 1] + ' ' + date.getDate() + ' ' + date.getFullYear() + '       ' + hours + ':' + time + ' ' + suffix
   }

  render() {
    return (
      <View style={styles.view}>
          <Modal
            visible={this.props.modalVisible}
            justifyContent = "flex-end"
            transparent={true}>
            <View style={{
              flex: 0.9999,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginBottom: 50,
              backgroundColor: 'rgba(0,0,0,0.5)',
              alignItems: 'center'}}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                      activeOpacity = { 0.5 }
                      style={styles.opacity}
                      onPress={this.props.closeModal}>
                        <Image
                          source={require('../../images/cancel.png')}
                          style={styles.image}/>
                    </TouchableOpacity>
                  <Text style={styles.transtextField}> Confirm Time </Text>
                  <Text style={styles.textField}
                        textColor = '#545680'>
                    {this.getDateString(this.props.chosenDate)}
                  </Text>
                <View style={styles.datePicker}>
                  <DatePickerIOS
                    date={this.props.chosenDate}
                    onDateChange={this.setDate}
                  />
                </View>
                 <Button type='picker'
                    onClick={this.props.closeModal}
                    text='Next' textColor='white'/>
                </View>
              </View>
          </Modal>
      </View>
    )
  }
}
