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
    this.state = {
      chosenDate: null,
    }
  }

  setDate = () => {
    this.setState({chosenDate: newDate})
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
                      activeOpacity = {0.5}
                      justifyContent= 'flex-start'
                      onPress={this.props.closePickerModal}>
                        <Image
                          source={require('../../images/cancel.png')}
                          style={styles.image}/>
                    </TouchableOpacity>
                  <Text style={styles.transtextField}> Confirm Time </Text>
                  <View style={styles.textview}>
                  <Text style={styles.textField}
                        textColor = '#545680'>
                    {this.props.getDateString}
                  </Text>
                  </View>
                <View style={styles.datePicker}>
                  <DatePickerIOS
                    date={this.props.chosenDate}
                    onDateChange={this.props.setPickerDate || this.setDate}
                    {...this.props.inputProps}
                  />
                </View>
                 <Button type='picker'
                    onClick={this.props.bpress}
                    text={this.props.bname} textColor='white'/>
                </View>
              </View>
          </Modal>
      </View>
    )
  }
}
