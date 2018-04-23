import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import RNCalendarEvents from 'react-native-calendar-events'

import { pickerDate, pickerDateNull } from '../../redux/actions/pickerActions'

import config from '../../config/config'
import moment from 'moment'
import CalendarConfirm from '../../components/CalendarConfirm'
import Button from '../../components/Button'
import styles from './styles'

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
})

const mapDispatchToProps = {
  pickerDate,
  pickerDateNull,
}

class SelectScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      time: this.props.navigation.state.params.time,
      title: this.props.navigation.state.params.title,
      text: this.props.navigation.state.params.desc,
      brand: this.props.navigation.state.params.brand,
      vid: this.props.navigation.state.params.vid,
      eventStart: this.props.navigation.state.params.eventStart,
      date: null,
      day: null,
      timeRange: null,
      icon: this.props.navigation.state.params.icon,
      id: this.props.navigation.state.params.id,
      textwourl: null,
    }
  }

  resetNavigation(targetRoute) {
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
    })
    this.props.navigation.dispatch(navigateAction)
  }

  async changeFields (apiStart) {
    try {
      let bodyObj = {
        id: this.props.user.id,
        momentId: this.state.id,
        buffer: this.props.user.buffer.toString(),
        time: apiStart,
        duration: this.state.time,
      }
      let responseJSON
      const apiUrl = `${config.apiUrl}/users`
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      body: JSON.stringify(bodyObj),
      })
      if (!response.ok) {
        console.log("Select Not okay")
        console.log(response)
        return false
      } else {
        console.log("Select Okay!")
        console.log(response)
      } return responseJSON
    } catch(error) {
      console.error(error)
    }
  }

  saveEvent = () => {
    this.props.pickerDateNull()
    const eventstart = new Date(this.state.eventStart)
    const enddate = (new Date(moment(eventstart).add(this.state.time, 'm'))).toISOString()
    const desc = (this.state.text.includes('`')) ? this.state.text.split('`')[1] + '\n' + this.state.brand + ': ' + this.state.text.split('`')[0] + '\nCurated by [+energy]' : this.state.vid + '\n' + this.state.brand + ': ' + this.state.text + '\nCurated by [+energy]'
    this.changeFields(eventstart)
    RNCalendarEvents.saveEvent(this.state.title, {
      startDate: eventstart.toISOString(),
      endDate: enddate,
      notes: desc,
    })
    this.resetNavigation('Calendar')
}

  componentDidMount() {
    if (this.state.text.includes('`')) {
      this.setState({textwourl: this.state.text.split('`')[0]})
    } else {
      this.setState({textwourl: this.state.text})
    }
    this.setDateParams()
  }

  setDateParams = () => {
    const event = new Date(this.state.eventStart)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dayString = event.toLocaleDateString('en-US', options).split(',')[0]
    const dateString = event.toLocaleDateString('en-US', options).split(',')[1] + ', ' + event.toLocaleDateString('en-US', options).split(',')[2]
    let startTime = event.toLocaleString('en-US').split(', ')[1].split(' ')[0]
    startTime = moment(event).format('hh:mm A')
    const endTime = moment(event).add(this.state.time, 'm').format('hh:mm A')
    this.setState({
      day: dayString,
      date: dateString,
      timeRange: startTime + ' - ' + endTime,
    })
  }

  render() {
    return(
      <View style={styles.view2}>
        <CalendarConfirm
            title = {this.state.title}
            brand = {this.state.brand}
            image = {this.state.icon}
            text = {this.state.textwourl}
            varelement = {
              <View style={styles.view}>
                <Image style={styles.image} source={require('../../images/calendar.png')}/>
                <View style={styles.textview}>
                  <Text style= {styles.text}>{this.state.date}</Text>
                  <Text style= {styles.text}>{this.state.day}</Text>
                  <Text style= {styles.text}>{this.state.timeRange}</Text>
                </View>
              </View>}
            button = {<Button type='schedule' justifyContent='flex-end'
                    onClick={this.saveEvent}
                    text='Add to Calendar' textColor='white'/>}
          />
      </View>
    )
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(SelectScreen)
