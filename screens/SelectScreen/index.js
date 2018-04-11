import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { pickerDate } from '../../redux/actions/userActions'

import CalendarConfirm from '../../components/CalendarConfirm'
import Button from '../../components/Button'
import styles from './styles'

const mapDispatchToProps = {
  pickerDate,
}

class SelectScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      time: this.props.navigation.state.params.time,
      title: this.props.navigation.state.params.title,
      pict: this.props.navigation.state.params.pict,
      text: this.props.navigation.state.params.desc,
      brand: this.props.navigation.state.params.brand,
      eventStart: this.props.navigation.state.params.eventStart,
      icon: this.props.navigation.state.params.icon,
    }
  }

  navAndRemove = () => {
    this.props.navigation.navigate('Calendar')
    this.props.pickerDate(null)
  }

  render() {
    return(
      <View style={styles.view2}>
        <CalendarConfirm
            title = {this.state.title}
            brand = 'Branding'
            image = {this.state.icon}
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
                    onClick={this.navAndRemove}
                    text='Add to Calendar' textColor='white'/>}
          />
      </View>
    )
  }

}

export default connect (null, mapDispatchToProps)(SelectScreen)
