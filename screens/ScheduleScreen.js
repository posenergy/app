import React from 'react'
import { View, Text } from 'react-native'
import SchedModal from '../components/SchedModal'
import RadioButtonList from './../components/RadioButtonList'
import Button from './../components/Button'

class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SchedModal
          title = "Detox Yoga"
          image = {require('./../images/yoga.png')}
          text = "30 minute yoga filled with detoxifying twists"
          varelement = {<RadioButtonList
                        radioprops = {[{label: 'Wed, Feb 3, 5:30 - 6:00 pm', value: 0 },
                                     {label: 'Wed, Feb 3, 6:00 - 6:30 pm', value: 1 },
                                     {label: 'Thurs, Feb 4, 9:00 - 9:30 am', value: 2 },
                                     {label: 'Thurs, Feb 4, 3:30 - 4:00 pm', value: 3 },]}
                      />}
        />
        <Button type='schedule'
        onClick={() =>  this.props.navigation.navigate('Packages')}
        text='Schedule' textColor='white'/>
    </View>
	)
  }
}

export default ScheduleScreen




