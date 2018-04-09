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
  }

  render() {
    return (
      <View style={styles.view}>
          <Modal
            visible={this.props.pickerModalVisible}
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
                      onPress={this.props.closePickerModal}>
                        <Image
                          source={require('../../images/cancel.png')}
                          style={styles.image}/>
                    </TouchableOpacity>
                  <Text style={styles.transtextField}> Confirm Time </Text>
                  <Text style={styles.textField}
                        textColor = '#545680'>
                    {this.props.getDateString}
                  </Text>
                <View style={styles.datePicker}>
                  <DatePickerIOS
                    date={this.props.chosenDate}
                    onDateChange={this.props.setPickerDate}
                  />
                </View>
                 <Button type='picker'
                    onClick={this.props.nextScreen}
                    text='Next' textColor='white'/>
                </View>
              </View>
          </Modal>
      </View>
    )
  }
}