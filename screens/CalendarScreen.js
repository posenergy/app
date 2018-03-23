import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Text,
} from 'react-native'

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() }

    this.setDate = this.setDate.bind(this)
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    var convertdate = {this.state.chosenDate}
    var datestring = convert.toString()

    return (
      <View style={styles.container}>
      <Text>{datestring} </Text>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
