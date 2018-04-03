import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CalendarConfirm from './../components/CalendarConfirm'
import Button from './../components/Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  view: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    width: 240,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: '7%',
  },
  text: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    marginBottom: '7%',
    marginLeft: '10%',
    fontSize: 18,
    lineHeight: 21,
    color: '#333333',
  },
  textview: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

class SelectScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      title: 'Detox Yoga',
      pict: '',
      text: '30 minute yoga filled with detoxifying twists',
      brand: '',
      date: 'April 9th, 2018',
      day: 'Monday',
      time: '6:00pm - 6:30pm',
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
            button = {<Button type='schedule' justifyContent='flex-end'
                    onClick={() => this.props.navigation.navigate('Calendar')}
                    text='Add to Calendar' textColor='white'/>}
          />
      </View>
    )
  }

}

export default SelectScreen
