import React from 'react'
import { View } from 'react-native'
import GenModal from '../components/GenModal'

class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  state = {
    modal1Visible: true,
    modal2Visible: false,
    modal3Visible: false,
  };

  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GenModal
      title = "Welcome!"
      text = "[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it."
      bname = "Let's go!"
      isVisible={this.state.modal1Visible}
      image = {require('../images/slide1.png')}
      />
      <GenModal
      title = "Welcome!"
      text = "Click 'Activities' to browse on demand content and then add it to your calendar. Start by choosing 'Mindfulness' or 'Movement.'"
      bname = "Let's go!"
      bold = "Ready to get planning?"
      isVisible={this.state.modal2Visible}
      image = {require('../images/slide2.png')}
      />
      <GenModal
      title = "Welcome!"
      text = "Click 'Calendar' to find availability and then browse activities. Click on open time slots to start scheduling!"
      isVisible={this.state.modal3Visible}
      bname = "Let's go!"
      image = {require('../images/slide3.png')}
      />
    </View>
	)
  }
}


export default CalendarScreen

