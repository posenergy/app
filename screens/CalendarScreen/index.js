import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Agenda } from 'react-native-calendars'
import RNCalendarEvents from 'react-native-calendar-events'
import styles from './styles'

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {},
      newitems: {},
      timeList: [],
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

      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-03-23'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    )
  }


/*STRUCTURE FOR FIND BLANKS (assuming order is based on times and not position)
- pass in the key-value pair for the day EX: 'datekey' : [{event1}, {event2}]
- iterate through the list of objects, returning only start and end times
- apply algorithm to the list of times to find empty slots - create list of empty slots stored as [{starttime : , endtime :}, {starttime : , endtime :},]
- iterate through list of empty slots, adding new cards as you go wby appending to this.state.items[datekey]
-
    {name: "Positive energy event!",
      start: startTime,
      end: endTime,
      length: eventLength,
      timeRange: timeRange,
      height: eventHeight,}
*/
   loadItems(day) {
    const startDate = new Date('2018-03-10')
    const endDate = new Date('2018-04-25')

    RNCalendarEvents.fetchAllEvents(startDate, endDate)
      .then(allEvents => {
        setTimeout(() => {
        // console.log(allEvents)
        allEvents.forEach(event => {
          const strTime = event.occurrenceDate.split('T')[0]
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = []
          }
          const startTime = event.startDate.split('T')[1].split('Z')[0]
          const endTime = event.endDate.split('T')[1].split('Z')[0]
          const eventLength = ((new Date(event.endDate).getTime()) - (new Date(event.startDate).getTime())) / (1000 * 60 * 60)
          const eventHeight = (event.allDay) ? 60 : 100
          const timeRange = (event.allDay) ? 'All Day' : startTime.split(':')[0] + ':' + startTime.split(':')[1] + ' - ' + endTime.split(':')[0] + ':' + endTime.split(':')[1]
          this.state.items[strTime].push({
            name: event.title,
            start: startTime,
            end: endTime,
            length: eventLength,
            timeRange: timeRange,
            height: eventHeight,
          })
          //
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
        }, 1000)
      })

      .catch (error => {
        // console.log(error)
      })

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
      console.log(this.getEvents())
      const newItems = {}
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key]})
      this.setState({
        items: newItems,
      })
    }, 1000)
    // console.log(`Load Items for ${day.year}-${day.month}`)
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    )
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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
