import React from 'react'
import { View, Alert } from 'react-native'
import RNCalendarEvents from 'react-native-calendar-events'
import { connect } from 'react-redux'

import config from '../config/config'
import SelectTime from '../components/SelectTime'
import RadioButtonList from './../components/RadioButtonList'
import Button from './../components/Button'
import { token } from './../redux/actions/tokenActions'
import { pickerDateNull } from './../redux/actions/pickerActions'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
})

const mapDispatchToProps = {
  pickerDateNull,
  token,
}

class ScheduleScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      title: this.props.navigation.state.params.title,
      pict: this.props.navigation.state.params.pict,
      text: this.props.navigation.state.params.desc,
      brand: this.props.navigation.state.params.brand,
      time: this.props.navigation.state.params.time,
      vid: this.props.navigation.state.params.vid,
      icon: this.props.navigation.state.params.icon,
      id: this.props.navigation.state.params.id,
      check: this.props.navigation.state.params.check,
      value: new Date (),
      items: {},
      buttons: [],
    }
  }

  setValue = (value) => {this.setState({value: value})}

  async changeFields (apiStart) {
    try {
      let bodyObj = {
        id: this.props.user.id,
        momentId: this.state.id,
        buffer: this.props.user.buffer.toString(),
        time: apiStart,
        duration: this.state.time,
      }
      console.log(bodyObj)
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
        console.log("Schedule not okay")
        console.log(response)
        return false
      } else {
        console.log("Schedule okay!")
        console.log(response)
      } return responseJSON
    } catch(error) {
      console.error(error)
    }
  }

  saveEvent = (eventstart) => {
    this.changeFields(eventstart)
    RNCalendarEvents.saveEvent(this.state.title, {
      startDate: eventstart.toISOString(), // selected button
      endDate: (new Date (eventstart.getTime() + this.state.time * 60000)).toISOString(), // selected button + time
      notes: (this.state.text.includes('`')) ? this.state.text.split('`')[1] + '\n' + this.state.brand + ': ' + this.state.text.split('`')[0] + '\nCurated by [+energy]' : this.state.vid + '\n' + this.state.brand + ': ' + this.state.text + '\nCurated by [+energy]',
    })
    Alert.alert(
      'Activity scheduled!',
      '\"' + this.state.title + '\" has been added to your calendar',
     [
       {text: 'OK'},
     ],
     { cancelable: false })
    this.props.navigation.navigate('Calendar')
  }


  _isOpen(day, minute) {
    return this.state.items[day].reduce((acc, { start, end }) => {
      if (!acc) return acc
      const startDate = new Date(start)
      const endDate = new Date(end)
      return minute < startDate || minute > endDate
    }, true)
  }

  _adjustTime(date) {
    return date.getTime() + date.getTimezoneOffset() * 60000
  }

  timeToString(time) {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
  }

  componentDidMount() {
    this.props.pickerDateNull()
    this.renderTimes()
  }

  renderTimes() {
    const EVENT_TIME = this.state.time
    var st_time = this.props.user.startTime
    var end_time = this.props.user.endTime
    var START_TIME = parseInt(st_time.substring(0, 2)) * 60 + parseInt(st_time.substring(2, 4))
    var END_TIME = parseInt(end_time.substring(0, 2)) * 60 + parseInt(end_time.substring(2, 4))

    const startDate = new Date()
    startDate.setSeconds(0)
    startDate.setMilliseconds(0)
    // next week
    const endDate = new Date()
    endDate.setSeconds(0)
    endDate.setMilliseconds(0)
    endDate.setDate(endDate.getDate() + 10)
    return RNCalendarEvents.fetchAllEvents(startDate, endDate)
      .then(allEvents => {
        allEvents.forEach(event => {
          const strTime = event.occurrenceDate.split('T')[0]
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
          if (!event.allDay) {
            const startDate2 = new Date(event.startDate)
            const endDate2 = new Date(event.endDate)
            const eventLength = (endDate2.getTime() - startDate2.getTime()) / (1000 * 60 * 60)
            this.state.items[strTime].push({
              start: startDate2,
              end: endDate2,
              length: eventLength,
            })
          }
        })
        const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const times = []
        let num_scheduled
        for (const day of days) {
          num_scheduled = 0
          if (times.length >= 5) {
            this.setState({ buttons: times.slice(0, 5) })
            return
          }
          const now = new Date()
          now.setDate(startDate.getDate() + day)
          now.setSeconds(0)
          now.setMilliseconds(0)
          if (day > 0) {
            now.setMinutes(0)
            now.setHours(0)
          }
          // now.setDate(this._adjustTime(now))
          let minutes = 0
          const slots = Array.from({ length: 1440 }, (x, i) => i)
                             .filter(n => n > (now.getMinutes() + 60 * now.getHours()) && n > START_TIME && n < END_TIME)
          // reset now if we haven't done so already
          if (day === 0) {
            now.setMinutes(0)
            now.setHours(0)
          }
          slots.forEach(minute => {
            if (minute === 720 || minute === 960) {
              num_scheduled = 0
            }
            const currTime = new Date(now.getTime() + minute * 60000)
            const key = this.timeToString(currTime)
            const isOpen = this.state.items[key] ? this._isOpen(key, currTime) : true
            if (!isOpen) {
              minutes = 0
              return
            }
            minutes += 1
            if (minutes >= EVENT_TIME && num_scheduled < 1) {
              const addZeros = i => i > 9 ? `${i}` : `0${i}`
              const buildTime = d => `${d.getHours()}:${addZeros(d.getMinutes())}`
              const startDate2 = new Date(currTime.getTime() - EVENT_TIME * 60000)
              const endDate2 = currTime
              const startOfStr = currTime.toString().split(' ').slice(0, 3).join(' ')
              const endOfStr = `, ${buildTime(startDate2)}-${buildTime(endDate2)}`
              times.push({
                label: startOfStr + endOfStr,
                value: startDate2,
              })
              minutes = 0
              num_scheduled += 1
            }
          })
        }
        this.setState({ buttons: times })
      }).catch(err => {
        console.error(err)
      })
  }

render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SelectTime
          title = {this.state.title}
          image = {this.state.icon}
          brand = {this.state.brand}
          text = {this.state.text}
          varelement = {<RadioButtonList
            radioprops = {this.state.buttons}
            setValue = {this.setValue}
          />}
          button = {<Button type='schedule'
                    onClick={() => this.saveEvent(this.state.value)}
                    text='Add to Calendar' textColor='white'/>}
      />
    </View>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)