import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Agenda } from 'react-native-calendars'
import RNCalendarEvents from 'react-native-calendar-events'
import styles from './styles'
import PickerModal from '../../components/PickerModal'
import moment from 'moment'
import { token } from '../../redux/actions/tokenActions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
})

const mapDispatchToProps = {
  token,
}

class CalendarScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {},
      pickerModalVisible: false,
      chosenDate: null,
    }
  }
  
  openPickerModal = () => {
    this.setState({pickerModalVisible: true})
  }

  closePickerModal = () => {
    this.setState({pickerModalVisible: false})
  }
  
  nextScreen = () => {
    this.setState({pickerModalVisible: false})
    const { navigate } = this.props.navigation
    navigate('Choose', {eventStart: this.state.chosenDate})
  }

  setPickerDate = (newDate) => {
    this.setState({chosenDate: newDate})
  }

  getDateString(date) {
    let hours = date.getHours()
    let suffix = 'AM'
    if (hours > 12) {
      hours -= 12
      suffix = 'PM'
    } else if (hours === 12) {
      suffix = 'PM'
    }
    let time = ''
    let month = date.toLocaleDateString()
    let stripzeroes = parseInt(month, 10)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    let minutes = date.getMinutes()
    if (minutes < 10) {
      time = '0' + minutes
    } else {
      time = minutes
    }
    return monthNames[stripzeroes - 1] + ' ' + date.getDate() + ' ' + date.getFullYear() + '       ' + hours + ':' + time + ' ' + suffix
   }

  componentDidMount() {
    RNCalendarEvents.authorizeEventStore()
      .then(status => {
        // console.log('@@@@@@@@@@', status)
      })
      .catch(error => {
        // console.log('denied')
      })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          selected={this.timeToString(new Date())}
          theme={{
            agendaDayTextColor: '#545680',
            agendaDayNumColor: '#545680',
            selectedDayBackgroundColor: '#545680',
            selectedColor: 'black',
            agendaTodayColor: '#545680',
            agendaKnobColor: '#545680',
          }}
        />
        <TouchableOpacity
          style={{flex: 1, position: 'absolute', bottom: 0, zIndex: 4, marginBottom: '4%', marginRight: '5%', marginLeft: '85%'}}
          onPress={this.addEvent.bind(this)}>
          <Image source={require('../../images/plus.png')}
            alignSelf = 'flex-end'
            marginTop = '40%'/>
        </TouchableOpacity>
        {this.state.pickerModalVisible &&
          <PickerModal
            openPickerModal={this.openPickerModal}
            closePickerModal={this.closePickerModal}
            nextScreen={this.nextScreen}
            chosenDate={this.state.chosenDate}
            getDateString={this.getDateString(this.state.chosenDate)}
            setPickerDate={this.setPickerDate.bind(null)}
          />}
      </View>
    )
  }
  _isOpen(day, minute) {
    return this.state.items[day].reduce((acc, { start, end, timeRange }) => {
      if (!acc || timeRange === 'All Day') return acc
      const startDate = moment(start)
      const endDate = moment(end)
      return (minute < startDate) || (minute > endDate)
    }, true)
  }
  _adjustTime(date) {
    return date.getTime() + date.getTimezoneOffset() * 60000
  }
  loadItems(day) {
    setTimeout(() => {
    const startDate = moment().subtract(14, 'days').toDate()
    const endDate = moment().add(21, 'days').toDate()
    
    RNCalendarEvents.fetchAllEvents(startDate, endDate)
      .then(allEvents => {
        // store all the events that need to broken up across multiple days
	      const multiDayEvents = []
        allEvents.forEach(event => {
          // Date of event
          const strTime = event.occurrenceDate.split('T')[0]
          // if date not yet in items, create key with empty list value
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
          let alreadyExists = false
          let is_posE = false
          const eventID = event.id
          // if event already exists, dont add it to new items when day reloads
          for (let i = 0; i < this.state.items[strTime].length; i++) {
            if (eventID === this.state.items[strTime][i].id) {
              alreadyExists = true
            }
          }
          if (event.notes.includes('[+energy]')) {
            is_posE = true
          }
          // handle multi-day events
          let eventEndDate = moment(event.endDate)
          let strTime2 = strTime
          if (!event.allDay && !alreadyExists) {
            if (strTime2 !== this.timeToString(eventEndDate)) {
              while (strTime2 !== this.timeToString(eventEndDate.clone().add(1, 'day'))) {
                const first = strTime2 === strTime
                const endDate2 = 
                  strTime2 === this.timeToString(eventEndDate)
                    ? moment(eventEndDate) 
                    : moment(strTime2).add(1, 'day').subtract(1, 'minute')
                const startDate2 = first
                 ? moment(event.occurrenceDate)
                 : moment(strTime2)
                const eventLength = endDate2.minute() - startDate2.minute()
                const addZeros = i => i > 9 ? `${i}` : `0${i}`
                const buildTime = d => `${addZeros(d.hour())}:${addZeros(d.minute())}`
                const timeRange = `${buildTime(startDate2)}-${buildTime(endDate2)}`
                if (!this.state.items[strTime2]) {
                  this.state.items[strTime2] = []
                }
                this.state.items[strTime2].push({
                  strTime: strTime2,
                  id: event.id,
                  name: (first ? '' : '[Continued] ') + event.title,
                  start: startDate2,
                  end: endDate2,
                  length: eventLength,
                  timeRange: timeRange,
                  calendar: event.calendar.id,
                  height: Math.min(eventLength * 60, 300),
                  pos_E: is_posE,
                })
                strTime2 = this.timeToString(moment(strTime2).add(1, 'day').add(1, 'minute'))
              }
              return
            }
          }
          if (!alreadyExists) {
            const startDate2 = new Date(event.startDate)
            const endDate2 = new Date(event.endDate)
            const eventLength = (endDate2.getTime() - startDate2.getTime()) / (1000 * 60 * 60)
            const eventHeight = (event.allDay || eventLength < 1) ? 60 : eventLength * 60
            const addZeros = i => i > 9 ? `${i}` : `0${i}`
            const buildTime = d => `${addZeros(d.getHours())}:${addZeros(d.getMinutes())}`
            const timeRange = (event.allDay) ? 'All Day' : `${buildTime(startDate2)}-${buildTime(endDate2)}`
            this.state.items[strTime].push({
              id: eventID,
              name: event.title,
              start: moment(startDate2),
              end: moment(endDate2),
              length: eventLength,
              timeRange: timeRange,
              calendar: event.calendar.id,
              height: eventHeight,
              posE: is_posE,
            })
          }
        })

        var START_TIME = this.props.user.startTime
        var END_TIME = this.props.user.endTime
        const yesterday = moment().subtract(1, 'day')
        for (const time in this.state.items) {
          if (this.state.items[time].length === 0) {
            continue
          }
          this.state.items[time] = this.state.items[time].filter(x => Boolean(x.calendar))
          const now = moment(time)
          if (now < yesterday) {
            continue
          }
          let minutes = 0
          const slots = Array.from({ length: 1440 }, (x, i) => i)
                             .filter(n => n > START_TIME && n < END_TIME)
          slots.forEach(minute => {
            const currTime = now.clone().add(minute, 'minute')
            const isOpen = this._isOpen(time, currTime)
            if (isOpen) {
              minutes += 1
            }
            // if minutes is > an hour, or we hit a not open slot, or we are at end of day
            if (minutes >= 60 || (!isOpen && minutes > 0) || (minute === END_TIME - 1 && minutes > 0)) {
              const startDate2 = currTime.clone().subtract(minutes, 'minute')
              const endDate2 = currTime
              const addZeros = i => i > 9 ? `${i}` : `0${i}`
              const buildTime = d => `${addZeros(d.hour())}:${addZeros(d.minute())}`
              const timeRange = `${buildTime(startDate2)}-${buildTime(endDate2)}`
              const newEvent = {
                name: 'Add a +energy event',
                end: endDate2,
                start: startDate2,
                length: minutes / 60,
                calendar: '',
                eventHeight: minutes,
                timeRange,
              }
              this.state.items[time].push(newEvent)
              minutes = 0
            }
          })
          this.state.items[time].sort((e1, e2) => {
            if (e1.start < e2.start) {
              return -1
            }
            if (e2.start < e1.start) {
              return 1
            }
            return 0
          })
        }
        
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000
          const strTime = this.timeToString(time)
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
        }
        const newItems = {}
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key]})
        this.setState({
          items: newItems,
        })
      })
      .catch (error => {
        // Alert, couldn't fetch events from calendar sorry!
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000
          const strTime = this.timeToString(time)
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
        }
        const newItems = {}
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key]})
        this.setState({
          items: newItems,
        })
      })
    }, 1000)
  }
  editEvent = (item) => {
    this.setState({
      chosenDate: item.start,
      pickerModalVisible: true,
    })
  }
  addEvent() {
    this.setState({
      chosenDate: new Date(),
      pickerModalVisible: true,
    })
  }
  renderItem(item) {
    if (item.posE) {
      return (
        <TouchableOpacity onPress={() => {this.editEvent(item)}}>
        <View style={[styles.item, {backgroundColor: '#545680'}, {height: item.height}]}>
        <Text style={{color: 'white'}}>{item.timeRange}</Text>
        <Text style={{color: 'white'}}>{' ' + item.name}</Text>
        {item.height > 60 &&
        <Text style={{color: 'white'}}>[+energy]</Text>}
        </View>
        </TouchableOpacity>
      )
    } else if (!item.calendar) {
      return (
        <TouchableOpacity onPress = {this.addEvent.bind(this)}>
        <View style={styles.emptyDate}>
          <Text style={{color: 'white'}}>{item.timeRange}</Text>
          <Text style={{color: 'white'}}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )
    }
    return (
      <View style={[styles.item, {height: item.height}]}>
      <Text>{item.timeRange}</Text>
      <Text>{item.name}</Text>
      </View>
    )
  }
  renderEmptyDate() {
    return (
      <TouchableOpacity onPress = {this.addEvent.bind(this)}>
      <View style={styles.emptyDate}><Text style={{color: 'white'}}>Add +energy event!</Text></View>
      </TouchableOpacity>
    )
  }
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name
  }
  timeToString(time) {
    const date = new Date(time)
    date.setTime(date.getTime() - date.getTimezoneOffset() * 60000)
    return date.toISOString().split('T')[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)