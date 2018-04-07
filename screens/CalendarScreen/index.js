import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Agenda } from 'react-native-calendars'
import RNCalendarEvents from 'react-native-calendar-events'
import styles from './styles'
import PickerScreen from '../../components/PickerModal'
export default class CalendarScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {},
    }
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
       // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          
        />
        <TouchableOpacity
          style={{flex: 1, position: 'absolute', bottom: 0, zIndex: 4, marginBottom: '4%', marginRight: '5%', marginLeft: '85%'}}>
          <Image source={require('../../images/plus.png')}
            alignSelf = 'flex-end'
            marginTop = '40%'/>
        </TouchableOpacity>
        {/* <PickerScreen/> */}
      </View>
    )
  }
          //   <Agenda
    //   // the list of items that have to be displayed in agenda. If you want to render item as empty date
    //   // the value of date key kas to be an empty array []. If there exists no value for date key it is
    //   // considered that the date in question is not yet loaded
    //   items={this.state.items}
    //   // callback that gets called when items for a certain month should be loaded (month became visible)
    //   loadItemsForMonth={this.loadItems.bind(this)}
    //   // callback that fires when the calendar is opened or closed
    //   onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
    //   // callback that gets called on day press
    //   onDayPress={(day)=>{console.log('day pressed')}}
    //   // callback that gets called when day changes while scrolling agenda list
    //   onDayChange={(day)=>{console.log('day changed')}}
    //   // Max amount of months allowed to scroll to the past. Default = 50
    //   pastScrollRange={50}
    //   // Max amount of months allowed to scroll to the future. Default = 50
    //   futureScrollRange={50}
    //   // specify how each item should be rendered in agenda
    //   renderItem={(item, firstItemInDay) => {return (<View />)}}
    //   // specify how each date should be rendered. day can be undefined if the item is not first in that day.
    //   renderDay={(day, item) => {return (<View />)}}
    //   // specify how empty date content with no items should be rendered
    //   renderEmptyDate={() => {return (<View />)}}
    //   // specify how agenda knob should look like
    //   renderKnob={() => {return (<View />)}}
    //   // specify what should be rendered instead of ActivityIndicator
    //   renderEmptyData = {() => {return (<View />)}}
    //   // specify your item comparison function for increased performance
    //   rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
    //   // Hide knob button. Default = false
    //   hideKnob={true}
    //   // By default, agenda dates are marked if they have at least one item, but you can override this if needed
    //   markedDates={{
    //     '2012-05-16': {selected: true, marked: true},
    //     '2012-05-17': {marked: true},
    //     '2012-05-18': {disabled: true}
    //   }}
    //   // agenda container style
    //   style={{}}
    // />
  _isOpen(day, minute) {
    return this.state.items[day].reduce((acc, { start, end }) => {
      if (!acc) return acc
      const startDate = new Date(start)
      const endDate = new Date(end)
      return (minute < startDate) || (minute > endDate)
    }, true)
  }

  _adjustTime(date) {
    return date.getTime() + date.getTimezoneOffset() * 60000
  }

  loadItems(day) {
    setTimeout(() => {
    const startDate = new Date('2018-03-10')
    const endDate = new Date('2018-04-25')
    
    RNCalendarEvents.fetchAllEvents(startDate, endDate)
      .then(allEvents => {
        allEvents.forEach(event => {
          // Date of event
          const strTime = event.occurrenceDate.split('T')[0]
          // if date not yet in items, create key with empty list value
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
          let alreadyExists = false
          const eventID = event.id
          // if event already exists, dont add it to new items when day reloads
          for (let i = 0; i < this.state.items[strTime].length; i++) {
            if (eventID === this.state.items[strTime][i].id) {
              alreadyExists = true
            }
          }
          // if event doesn't already exist, push it to the list with key of date. this works bc the
          // fetch all events already has them in order,
          // so don't need to .splice() to insert into current location, can just push
          // @noah, you're gonna have to insert into the right index, after this.state.items[strTime] is
          // populated with all events in day bc it renders in order of what's in the list
          if (!alreadyExists) {
            const startDate2 = new Date(event.startDate)
            // startDate2.setTime(this._adjustTime(startDate2))
            const endDate2 = new Date(event.endDate)
            // endDate2.setTime(this._adjustTime(endDate2))
            const eventLength = (endDate2.getTime() - startDate2.getTime()) / (1000 * 60 * 60)
            const eventHeight = (event.allDay || eventLength < 1) ? 60 : eventLength * 60

            const addZeros = i => i > 9 ? `${i}` : `0${i}`
            const buildTime = d => `${addZeros(d.getHours())}:${addZeros(d.getMinutes())}`
            const timeRange = (event.allDay) ? 'All Day' : `${buildTime(startDate2)}-${buildTime(endDate2)}`
            this.state.items[strTime].push({
              id: eventID,
              name: event.title,
              start: startDate2,
              end: endDate2,
              length: eventLength,
              timeRange: timeRange,
              calendar: event.calendar.id,
              height: eventHeight,
            })
          }
        })
        // TODO: make these dynamic
        var START_TIME = 300
        var END_TIME = 1140
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        for (const time in this.state.items) {
          if (this.state.items[time].length === 0) {
            continue
          }
          this.state.items[time] = this.state.items[time].filter(x => !!x.calendar)
          const now = new Date(time)
          now.setTime(this._adjustTime(now))
          if (now < yesterday) {
            continue
          }
          let minutes = 0
          const slots = Array.from({ length: 1440 }, (x, i) => i)
                             .filter(n => n > START_TIME && n < END_TIME)
          slots.forEach(minute => {
            const currTime = new Date(now.getTime() + minute * 60000)
            const isOpen = this._isOpen(time, currTime)
            if (isOpen) {
              minutes += 1
            }
            // if minutes is > an hour, or we hit a not open slot, or we are at end of day
            if (minutes >= 60 || (!isOpen && minutes > 0) || (minute === END_TIME-1 && minutes > 0)) {
              const startDate2 = new Date(currTime.getTime() - minutes * 60000)
              const endDate2 = currTime
              const addZeros = i => i > 9 ? `${i}` : `0${i}`
              const buildTime = d => `${addZeros(d.getHours())}:${addZeros(d.getMinutes())}`
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
  
  oldLoadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000
        const strTime = this.timeToString(time)
        if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          const numItems = Math.floor(Math.random() * 5)
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            })
          }
        }
      }
      // console.log(this.state.items)
      const newItems = {}
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key]})
      this.setState({
        items: newItems,
      })
    }, 1000)
    // console.log(`Load Items for ${day.year}-${day.month}`)
  }
  
  // haven't tested
  editEvent() { //date, oldEvent
    // console.log((new Date(oldEvent.endDate).getTime()) - (new Date(oldEvent.startDate).getTime()) + date.getTime())
    // RNCalendarEvents.saveEvent(oldEvent.title, {
    //   id: oldEvent.id,
    //   startDate: date,
    //   endDate: (new Date(oldEvent.endDate).getTime()) - (new Date(oldEvent.startDate).getTime()) + date.getTime(),
    //   url: oldEvent.url,
    // })
  }
  renderItem(item) {
    if (item.calendar === '1CFEAAAB-91F7-4BA5-877B-FB447CE06B97') {
      return (
        <TouchableOpacity onPress={this.editEvent()}>
        <View style={[styles.item, {backgroundColor: 'rgba(84, 86, 128, 0.75)'}, {height: item.height}]}>
        <Text style={{color: 'white'}}>{item.timeRange}</Text>
        <Text style={{color: 'white'}}>{item.name}</Text>
        {item.height > 60 &&
        <Text style={{color: 'white'}}>[+energy]</Text>}
        </View>
        </TouchableOpacity>
      )
    }
    else if (!item.calendar) {
      return (
        <TouchableOpacity onPress = {() => this.addEvent()}>
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
  addEvent(){
  }
  renderEmptyDate() {
    return (
      <TouchableOpacity onPress = {() => this.addEvent()}>
      <View style={styles.emptyDate}><Text style={{color: 'white'}}>Add +energy event!</Text></View>
      </TouchableOpacity>
    )
  }
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name
  }
  timeToString(time) {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
  }
}