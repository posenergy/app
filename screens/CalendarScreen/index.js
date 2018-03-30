import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Agenda } from 'react-native-calendars'
import RNCalendarEvents from 'react-native-calendar-events'
import styles from './styles'

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
    //   // initially selected day
    //   selected={'2018-03-16'}
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
    
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        selected={this.timeToString(new Date())}
        // markingType={'interactive'}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    )
  }

  loadItems(day) {
    setTimeout(() => {      
    const startDate = new Date('2018-03-10')
    const endDate = new Date('2018-04-25')
    
    RNCalendarEvents.fetchAllEvents(startDate, endDate)
      .then(allEvents => {
        // console.log(allEvents)
        allEvents.forEach(event => {
          // Date of event
          const strTime = event.occurrenceDate.split('T')[0]
          // if date not yet in items, create key with empty list value
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
          // if this.state.items[strTime] does not include this event (event.eventid not there), then add this event to it.          
          let skip = false
          let eventID = event.id
          for (let i = 0; i < this.state.items[strTime].length; i++){
            if (eventID == this.state.items[strTime][i].id){
              skip = true
            }
          }
          if (!skip){
            const startTime = event.startDate.split('T')[1].split('Z')[0]
            const endTime = event.endDate.split('T')[1].split('Z')[0]
            const eventLength = ((new Date(event.endDate).getTime()) - (new Date(event.startDate).getTime())) / (1000 * 60 * 60)
            const eventHeight1 = (event.allDay) ? 60 : eventLength * 60
            const eventHeight = (event.allDay) ? 60 : 100          
            const timeRange = (event.allDay) ? 'All Day' : startTime.split(':')[0] + ':' + startTime.split(':')[1] + ' - ' + endTime.split(':')[0] + ':' + endTime.split(':')[1]
            this.state.items[strTime].push({
              id: eventID,              
              name: event.title,
              start: startTime,
              end: endTime,
              length: eventLength,
              timeRange: timeRange,
              calendar: event.calendar.title,
              height: eventHeight1,
            })
          }
        })
        
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
      console.log(this.state.items)
      // console.log(allEvents)
      })
      .catch (error => {
        // console.log(error)
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
  
  editEvent(){
    // Open editing picker modal
  }

  renderItem(item) {
    if (item.calendar == '+Energy'){
      return (
        <TouchableOpacity onPress={this.editEvent()}>
        <View style={[styles.item, {backgroundColor: '#545680'}, {height: item.height}]}>
        <Text style={{color: 'white'}}>{item.timeRange}</Text>
        <Text style={{color: 'white'}}>{item.name}</Text>
        {/* <Text style={{color: 'white'}}>[+energy]</Text> */}
        </View>
        </TouchableOpacity>
      )
    }
    return(
      <View style={[styles.item, {height: item.height}]}>
      <Text>{item.timeRange}</Text>
      <Text>{item.name}</Text>
      </View>
    )
  }

  renderEmptyDate() {
    return (
      <TouchableOpacity>
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