import React from 'react'
import { View, Text } from 'react-native'
import RNCalendarEvents from 'react-native-calendar-events'

class FeedbackScreen extends React.Component {
  static navigationOptions = {
		title: 'Welcome',
 }
  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feedback Screen</Text>
    </View>
	)
  }
}

export default FeedbackScreen
