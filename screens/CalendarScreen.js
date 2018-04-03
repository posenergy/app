import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import CalendarConfirm from './../components/CalendarConfirm'
import Button from './../components/Button'
import { CheckBox } from 'react-native-elements'
import FlipToggle from 'react-native-flip-toggle-button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  view: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'black',
    height: '60%',
    width: 240,
    justifyContent: 'center',
    padding:0,
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    marginBottom: '1%',
    marginLeft: '10%',
    fontSize: 18,
    lineHeight: 21,
  },
  textview: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

class CalendarScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      title: "Detox Yoga",
      pict: "",
      text: "30 minute yoga filled with detoxifying twists",
      brand: "",
      date: "February 4th, 2018",
      day: "Wednesday",
      time: "6:30pm - 6:00pm",
    }
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CalendarConfirm
            title = {this.state.title}
            brand = 'Branding'
            image = {require('./../images/yoga.png')}
            text = {this.state.text}
            varelement = {
              <View style={styles.view}>
                <Image style={styles.image} source={require('./../images/calendar.png')}/>
                <View style={styles.textview}>
                  <Text style= {styles.text}>{this.state.date}</Text>
                  <Text style= {styles.text}>{this.state.day}</Text>
                  <Text style= {styles.text}>{this.state.time}</Text>
                </View>
              </View>}
            button = {<Button type='schedule'
                    onClick={() => this.props.navigation.navigate('Calendar')}
                    text='Add to Calendar' textColor='white'/>}
          />
      </View>
    )
  }

}

export default CalendarScreen
