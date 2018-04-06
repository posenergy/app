import React from 'react'
import { View, Text, Image } from 'react-native'
import CalendarConfirm from '../../components/CalendarConfirm'
import Button from '../../components/Button'
import styles from './styles'

class SelectScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      title: '',
      pict: '',
      text: '',
      brand: '',
      date: '',
      day: '',
      time: '',
    }
  }

  render() {
    return(
      <View style={styles.view2}>
        <CalendarConfirm
            title = {this.state.title}
            brand = 'Branding'
            image = {require('../../images/yoga.png')}
            text = {this.state.text}
            varelement = {
              <View style={styles.view}>
                <Image style={styles.image} source={require('../../images/calendar.png')}/>
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
