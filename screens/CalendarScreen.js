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

  objectstring = () =>  {
    let objectboi = this.state.chosenDate
    let stringboi = objectboi.toString()
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textField}> Confirm Time </Text>
          <Text> {this.objectstring()} </Text>
        </View>
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
       <Button type='picker'
          onClick={() => this.props.navigation.navigate('Packages')}
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
    backgroundColor: 'white',
    marginBottom: 50,
  },
})
