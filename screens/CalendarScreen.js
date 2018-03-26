import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Button from './../components/Button'

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  onClick() {
      console.log("HEY LOOK BISH");
      console.log(this.state.chosenDate);
   }

// The state will initially be passed in as a prop. Currently just generates today's date.

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textField}> Confirm Time </Text>
        <Text style={styles.textField}
              textColor = '#545680'>
          {this.state.chosenDate.toString()}
        </Text>
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
       <Button type='picker'
          onClick={() => this.onClick()}
          text='Next' textColor='white'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textField: {
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '7%',
  },
  textContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 60,
    width: 375,
    marginBottom: 50,
  },
  datePicker: {
    marginTop: '5%',
    backgroundColor: 'white',
    marginBottom: 50,
  },
})
