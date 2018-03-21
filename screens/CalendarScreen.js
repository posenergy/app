import React from 'react'
import { View } from 'react-native'
import GenModal from '../components/GenModal'

class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GenModal
      title = "Welcome!"
      text = "[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it."
      bname = "Let's go!"
      bold = "Ready to get planning?"
      image = {require('../images/slide1.png')}
      />
    </View>
	)
  }
}

export default CalendarScreen

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GenModal
            title = "Welcome!"
            text = "Click 'Calendar' to find availability and then browse activities. Click on open time slots to start scheduling!"
            bname = "Let's go!"
            image = {require('../images/slide2.png')}
            />
          </View>
