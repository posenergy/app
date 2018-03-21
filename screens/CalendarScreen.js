import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import RNCalendarEvents from 'react-native-calendar-events';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount(){
    RNCalendarEvents.authorizeEventStore()
      .then(status => {
        console.log("@@@@@@@@@@", status)
      })
      .catch(error => {
        console.log("denied")
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
    //   renderItem={(item, firstItemInDay) => {return (<View />);}}
    //   // specify how each date should be rendered. day can be undefined if the item is not first in that day.
    //   renderDay={(day, item) => {return (<View />);}}
    //   // specify how empty date content with no items should be rendered
    //   renderEmptyDate={() => {return (<View />);}}
    //   // specify how agenda knob should look like
    //   renderKnob={() => {return (<View />);}}
    //   // specify what should be rendered instead of ActivityIndicator
    //   renderEmptyData = {() => {return (<View />);}}
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
        selected={'2018-03-19'}
        pastScrollRange={50}
        futureScrollRange={50}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  getEvents = () => {
    RNCalendarEvents.findCalendars()
      .then (resp => {
        resp.forEach(
          RNCalendarEvents.fetchAllEvents('2018-03-10', '2018-03-25', allcalendars)
        )
      })
      .catch (error => {
        // console.log(error)
      })
    // console.log ("&&&&&&&&&&&&", allcalendars);
    // console.log ("############", RNCalendarEvents.fetchAllEvents('2018-03-10', '2018-03-25', allcalendars));
    // RNCalendarEvents.fetchAllEvents('2018-03-10', '2018-03-25', allcalendars)
    //   .then (resp => {
    //     console.log(error)
    //   })
    //   .catch (error => {
    //     console.log(error)
    //   })
  }
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      this.getEvents()
      const newItems = {}
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
