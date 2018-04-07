import React from 'react'
import { View } from 'react-native'
import SelectTime from '../components/SelectTime'
import RadioButtonList from './../components/RadioButtonList'
import Button from './../components/Button'

class ScheduleScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      title: this.props.navigation.state.params.title,
      pict: this.props.navigation.state.params.pict,
      text: this.props.navigation.state.params.desc,
      brand: this.props.navigation.state.params.brand,
    }
  }

  saveEvent(){
    RNCalendarEvents.saveEvent('henlo', {
      startDate: '2018-04-05T19:16:00.000Z', //selected button
      endDate: '2018-04-05T19:20:00.000Z', //selected button
      calendarID: '1CFEAAAB-91F7-4BA5-877B-FB447CE06B97', //+energy cal id
    })
    this.props.navigation.navigate('Calendar')
  }
  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SelectTime
          title = {this.state.title}
          image = {require('./../images/yoga.png')}
          brand = {this.state.brand}
          text = {this.state.text}
          varelement = {<RadioButtonList
                        radioprops = {[{label: 'Wed, Feb 3, 5:30 - 6:00 pm', value: 0 },
                                     {label: 'Wed, Feb 3, 6:00 - 6:30 pm', value: 1 },
                                     {label: 'Thurs, Feb 4, 9:00 - 9:30 am', value: 2 },
                                     {label: 'Thurs, Feb 4, 3:30 - 4:00 pm', value: 3 },
                                     {label: 'Fri, Feb 5, 9:00 - 9:30 am', value: 2 }]}
                      />}
        />
        <Button type='schedule'
          onClick={() => this.saveEvent()}
          text='Add to Calendar' textColor='white'/>
    </View>
	)
  }
}

export default ScheduleScreen
