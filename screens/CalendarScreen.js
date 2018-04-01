
import React from 'react'
import { View } from 'react-native'
import PickerModal from './../components/PickerModal'


class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PickerModal/>
      </View>
    )
  }
}

export default CalendarScreen
