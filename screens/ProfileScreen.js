import React from 'react'
import { View, Text } from 'react-native'
import SchedModal from '../components/SchedModal'
import RadioButtonList from './../components/RadioButtonList'


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
		return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
	)
  }
}

export default ProfileScreen
